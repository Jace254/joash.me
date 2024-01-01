<script setup lang="ts">
const year = new Date().getFullYear()
const quotes = [
  'If you don\'t take risks, you can\'t create a future. ~ Monkey D. Luffy',
  'Human strength lies in the ability to change yourself. ~ Saitama',
  'There’s no shame in falling down! True shame is to not stand up again! ~ Shintaro Midorima',
  'A person can change, at the moment when the person wishes to change.  ~ Haruhi Fujioka'
]
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
</script>

<template>
  <footer
    flex border-t border-border
    w-full py3 md:px="30px"
    px-2
    bg-faded font-mono
    font-light
    items-center
    md:text-sm
    text="~ 12px #707070"
  >
    <div font-thin>{{ randomQuote }}</div>
    <div flex-auto />
    <div>{{ year }}</div>
  </footer>
</template>
