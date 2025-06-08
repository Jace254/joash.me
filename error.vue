<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError,
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout>
    <article class="prose">
      <h2>{{ error?.statusCode }}</h2>
      <h1>Apologies</h1>
      <p>
        You seem Lost, Let's get you back  <button class="underline hover:font-bold" @click="handleError">
          Home
        </button>
      </p>
    </article>
  </NuxtLayout>
</template>

  <style>
  @import '@unocss/reset/tailwind.css';
  @import './styles/main.css';
  @import './styles/base.css';
  @import './styles/prose.css';
  </style>
