<script setup lang="ts">
import { cn } from '@/utils'

const router = useRouter()

const currentPath = computed(() => router.currentRoute.value.path)

const { width } = useWindowSize()
const isMobile = ref(width.value <= 600)
const menuOpen = ref(false)
const cartOpen = ref(false)

watch(width, (w) => {
  if (w <= 600)
    isMobile.value = true
  else isMobile.value = false
})

function toggleMenu() {
  if (cartOpen.value === true)
    cartOpen.value = false
  setTimeout(() => {
    menuOpen.value = !menuOpen.value
  }, 400)
}

function toggleCart() {
  if (menuOpen.value === true)
    menuOpen.value = false

  setTimeout(() => {
    cartOpen.value = !cartOpen.value
  }, 400)
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="blurred" md:w="calc(100% + var(--body-margin-left) + var(--body-margin-right))" w-full>
    <nav mx-auto px4 lg:px-8 md:max-w-7xl flex items-center justify-between gap-3 h-full z-20>
      <Logo h-2em w-2em />
      <div flex-auto />
      <ColorSchemeToggle />
      <a class="select-none" title="Twitter" href="https://twitter.com/JoashMacenton" rel="noopener" target="_blank">
        <div i-carbon-logo-x text-1.5em dark:hover:bg-white style="transition: background-color 0.3s ease-in-out;" />
      </a>
      <a class="select-none" title="Resume" href="https://resume.joash.me" rel="noopener" target="_blank">
        <div i-majesticons-paper-fold-text-line text-1.5em dark:hover:bg-white style="transition: background-color 0.3s ease-in-out;" />
      </a>
      <a class="select-none" title="Github" href="https://github.com/Jace254" rel="noopener" target="_blank">
        <div i-carbon-logo-github text-1.5em dark:hover:bg-white style="transition: background-color 0.3s ease-in-out;" />
      </a>
      <a class="select-none" title="Sponsor" href="https://github.com/sponsors/Jace254" rel="noopener" target="_blank">
        <div i-ph-hand-heart-duotone text-1.5em dark:hover:bg-white style="transition: background-color 0.3s ease-in-out;" />
      </a>
    </nav>
  </header>
  <div
    :class="cn('floating-nav', menuOpen || cartOpen ? 'floating-nav-open' : '', menuOpen ? ' menu-is-open menu-active' : '')"
    bg-faded
  >
    <div class="floating-nav-tab">
      <button title="Menu" class="hover:bg-active p-1 px-2 rounded-md" @click="toggleMenu">
        <div v-if="isMobile" class="i-ph-list text-1.5em " />
        <span v-else>Menu</span>
      </button>
      <NuxtLink class="logo" href="/">
        <Logo h-1.5em w-1.5em />
      </NuxtLink>
      <button title="Cart" class=" hover:bg-active p-1 px-2 rounded-md" @click="toggleCart">
        <div v-if="isMobile" class="i-ph-shopping-cart-simple-light text-1.5em " />
        <span v-else>Cart</span>
        <div class="h-[6px] w-[6px] border border-gray:20 inline-block rounded-full ml-0.4em" />
      </button>
    </div>
    <div class="interactive-menu">
      <ul id="nav_main" class="interactive-menu_items">
        <li style="--transition-delay: 0.05s">
          <NuxtLink
            id="home" href="/"
            data-level="1"
            :class="cn('btn nav__item btn__plain menu-trigger ', currentPath === '/' ? 'active' : '')"
            flex gap-2
            @click="closeMenu"
          >
            <div i-solar-home-smile-outline text-1.2em />
            Home
          </NuxtLink>
        </li>
        <li style="--transition-delay: 0.05s">
          <NuxtLink
            id="projects" href="/projects"
            data-level="1"
            :class="cn('btn nav__item btn__plain menu-trigger ', currentPath === '/projects' ? 'active' : '')"
            flex gap-2
            @click="closeMenu"
          >
            <div i-carbon-ibm-cloud-projects text-1.2em />
            Projects
          </NuxtLink>
        </li>
        <li style="--transition-delay: 0.05s">
          <NuxtLink
            id="blog" href="/blog"
            data-level="1"
            :class="cn('btn nav__item btn__plain menu-trigger ', currentPath === '/blog' ? 'active' : '')"
            flex gap-2
            @click="closeMenu"
          >
            <div i-system-uicons-write text-1.2em />
            Blog
          </NuxtLink>
        </li>
        <li style="--transition-delay: 0.05s">
          <NuxtLink
            id="store" href="/store"
            data-level="1"
            :class="cn('btn nav__item btn__plain menu-trigger ', currentPath === '/store' ? 'active' : '')"
            flex gap-2
            @click="closeMenu"
          >
            <div i-ph-storefront-thin text-1.2em />
            Store
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.floating-nav {
  position: fixed;
  top: 4.5em;
  left: 50%;
  z-index: 100;
  padding: 0.6em;
  gap: 12px;
  width: calc(100% - 2em);
  height: fit-content;
  max-width: 300px;
  max-height: 50px;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.33, 1, 0.68, 1),max-width 0.4s cubic-bezier(0.33, 1, 0.68, 1);
  transform: translateX(-50%);
  transform-origin: top center;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  --at-apply: "border border-border"
}

.floating-nav-open {
  max-width: 440px;
  max-height: 800px;
}

.floating-nav-tab {
    display: grid;
    grid-template-columns: 1fr 50% 1fr;
    align-items: center;
}

.floating-nav-tab button {
  display: flex;
  align-items: center;
}

.floating-nav-tab :first-child {
    justify-self: flex-start;
}

.floating-nav-tab :last-child {
    justify-self: flex-end;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.interactive-menu_items:first-of-type {
    display: block;
    max-height: 50vh;
}
.interactive-menu_items {
    margin: 1em 0 0;
    padding: 0.4em;
    border-radius: 6px;
    background: rgba(0,0,0,0.05);
    list-style-type: none;
    overflow: hidden;
    width: 100%;
    height: fit-content;
    flex-shrink: 0;
    transition: transform 0.4s cubic-bezier(0.33, 1, 0.68, 1),max-height 0.4s cubic-bezier(0.33, 1, 0.68, 1);
    display: none;
    max-height: 0px;
}

.floating-nav.menu-active .interactive-menu {
    clip-path: inset(0 0 0 0);
}

.floating-nav.menu-is-open .interactive-menu {
    display: flex;
}

.interactive-menu_items .btn.active {
    background: #0F0F0F;
    color: #FFF;
}

.interactive-menu_items .btn {
    display: flex;
    align-items: center;
    width: 100%;
}
.floating-nav .btn {
    display: flex;
    align-items: center;
}

a.btn__plain {
    padding: 0.6em;
    background: transparent;
}
a.btn {
    -webkit-appearance: none;
    appearance: none;
    border: none;
    cursor: pointer;
    display: inline-block;
    padding: 0.8em 1.4em;
    border-radius: 6px;
    color: inherit;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95em;
    position: relative;
    transition: background 0.3s ease, color 0.3s ease;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
}

.floating-nav.menu-active .interactive-menu_items li {
    transform: translateY(0);
    opacity: 1;
}

.interactive-menu_items li:first-of-type {
    margin-top: 0;
}
.interactive-menu_items li {
    margin: 0.4em 0;
    transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
    transition-delay: var(--transition-delay);
    opacity: 0;
    transform: translateY(150%);
}
</style>
