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
</template>
