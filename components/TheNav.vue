<template>
  <header class="blurred" md:w="calc(100% + var(--body-margin-left) + var(--body-margin-right))" w-full>
    <nav mx-auto px4 lg:px-8 md:max-w-7xl flex items-center justify-between h-full z-20>
      <Logo h-2em w-2em />
      <div flex-auto />
      <ColorSchemeToggle />
    </nav>
  </header>
</template>
