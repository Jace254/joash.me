---
title: Machine Learning and Inference Setup on AMD Instinct MI210 with VMware ESXi 8
date: 2024-07-18T2:45:11Z
description: A guide on utilizing your AMD MI210 GPU for AI
duration: 30 min
---

## Introduction

The goal of this document is to enable you to utilize your AMD Instinct MI210 on Machine Learning Tasks as well as Model Inferencing.
In order to do so, there are some things you have to set up beforehand and are crucial to the usage of your GPU. This Document is written with the assumption that you’ve already set up your hardware and installed VMWare ESXi 8 on it.

## Setup

AMD Drivers and ROCm(Radeon On Compute) currently support a limited number of options in terms of Operating Systems on VMWare. As of the moment of writing this document the supported Operating systems are:

| Hypervisor | Version | GPU | Validated guest OS (kernel) |
| --- | --- | --- | --- |
| VMWare | ESXI 8 | MI210 | Ubuntu 20.04 (5.15 [HWE]), SLES 15 SP4 (5.14.21) |
| VMWare | ESXI 7 | MI210 | Ubuntu 20.04 (5.15 [HWE]), SLES 15 SP4 (5.14.21) |

So for our setup we’ll create an Ubuntu 20.04 machine on our VMWare console with the following specifications:

- 8 Cores of CPU
- 64 GB RAM
- 500 GB of Storage

Follow the prompts and finish setting up your OS.

- Add the GPU as a PCI device, Dynamic for distributed resources between host machine and VM and Direct for complete use on VM.
- Set Advanced Parameters to allow PCI passthrough to the VM

```bash
 pciPassthru.64bitMMIOSizeGB: 128 #(This is double the VRAM of the given GPU)
 pciPassthru.use64bitMMIO: TRUE
```

Once the machine is rebooted and accessible, by default 20.04 Ubuntu comes with a lower kernel version and we need to have the Hardware Enabled Kernel version for our Setup. 
The first step will be to upgrade the kernel. 

### Upgrading The Kernel

**Part 1**

We can check the current kernel on our OS with, `uname -r` . You ideally want to have the Hardware Enabled kernel for 20.04 so lets get started.

In order to upgrade the kernel we need to know the list of available options we have. 
To get that information we can run the following command

```bash
apt-cache search linux-image | grep generic # To check for available kernels
apt-cache search linux-image | grep generic-hwe # To check for hardware enabled kernels
```

First we’ll download the latest version of kernel `5.15` from the list of available kernels. As of the time of writing its `5.15.0-113-generic` . Its probably not going to change but it is best that you check.
PS: *Don’t download unsigned versions of the kernel*. 

For the hardware enabled kernels choose the one that is neither **edge** nor a **dummy transitional package.**

```bash
sudo apt-get install linux-image-<version>-generic # In my case linux-image-5.15.0-113-generic
sudo apt-get install linux-image-genric-hwe-20.04
```

Once we have them installed, its time to change the kernel version.

**Part 2**

We will use the `grub bootloader` to do this:

Run the following command. it will open the GRUB configuration file in the nano text editor:

```bash
sudo nano /etc/default/grub
```

In the grub configuration file make the following changes:

```bash
GRUB_TIMEOUT_STYLE=menu  # it was "hidden" by default
GRUB_TIMEOUT=10          # it was "0" by default
```

The above changes make `grub menu` to be shown automatically(you don't need to press `ESC` or `Shift` keys) while booting and it waits 10 seconds.

Then, update the GRUB bootloader configuration:

```bash
sudo update-grub
```

When you run the command `sudo update-grub`, it scans the system for installed operating systems and kernels, generates a new GRUB configuration file, and updates the menu entries in the GRUB bootloader. This ensures that the boot menu shows the correct options and that the system can boot to the correct operating system or kernel version.

Then reboot the system:

```bash
sudo reboot
```

If you accessed your Machine via SSH you should head back to VSphere for VMWare to be able to get your grub menu on reboot(On the Web or Remote Console).

While rebooting, `grub menu`  appears on the screen automatically.

Press `Enter`on `**Advanced options for Ubuntu` section, and then choose desired kernel version you want to boot. After that, your system will be loaded with the chosen kernel, and if you run `uname -r` it shows the selected kernel version that was chosen while rebooting.

Great, That's done!!!...

**Now for clean up**

You can make the specific kernel version default while booting. If the kernel version you want to make default is already running on your system (as shown by the output of `uname -r`) and you would like to prevent it from being upgraded when using `sudo apt update && sudo apt upgrade`, you can use the `apt-mark` command to mark the package as hold:

```bash
sudo apt-mark hold linux-image-<version>-generic
sudo apt-mark hold linux-image-genric-hwe-20.04
```

You can make sure it was held by running this:

```bash
apt-mark showhold
```

This will prevent the package from being automatically upgraded or removed. To make it default during boot, you can use `sudo update-grub` command to update the grub bootloader configuration file and set the desired kernel as the default.

```bash
sudo update-grub
```

Remove older kernels that are not in use by running the following command:

```bash
sudo apt-get purge <kernel-version>
```

This will free up disk space and make sure that the current kernel version is the only one available to boot. You should now have the HWE and latest `5.15` version installed.

### Installing The AMD ROCm Drivers on your machine

Now that we have the desired OS and Kernel required to install the drivers, we can start installing the compatible drivers. At time of writing. The latest drivers are `6.1.2` on the [ROCm Website](https://rocm.docs.amd.com/projects/install-on-linux/en/latest/tutorial/quick-start.html).

```bash
sudo apt update
sudo apt install "linux-headers-$(uname -r)" "linux-modules-extra-$(uname -r)"
sudo usermod -a -G render,video $LOGNAME # Add the current user to the render and video groups
wget https://repo.radeon.com/amdgpu-install/6.1.2/ubuntu/focal/amdgpu-install_6.1.60102-1_all.deb
sudo apt install ./amdgpu-install_6.1.60102-1_all.deb
```

This will install the installer for AMD GPU drivers as well as install your Linux headers and set your user to have access to the render and video groups.

The next thing is to install the use-cases you’ll need for your environment.

Here’s a command to install some use-cases that will be used in this document.

```bash
sudo amdgpu-install --usecase=dkms,graphics,multimedia,opencl,hip,hiplibsdk,rocm
```

You might also need the cuda toolkit in your programs so. 

```bash
sudo apt install nvidia-cuda-toolkit
edit ~/.profile and add HSA_ENABLE_SDMA=0
```

Then reboot:

```bash
sudo reboot
```

**Testing and Troubleshooting**

Once rebooted you should check whether you can see your GPU stats by running:

```bash
rocm-smi
```

If you get output about your GPU Temp, VRAM, and GPU usage… You are set!!!

## Using your GPU to run an LLM