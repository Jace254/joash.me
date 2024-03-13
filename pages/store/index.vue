<script setup lang="ts">
const products = [
  {
    image: '/product-0.jpg',
    name: 'Towering Man',
    link: '/store/product',
    price: '3500 KES',
  },
  {
    image: '/product-0.jpg',
    name: 'Towering Man',
    link: '/store/product',
    price: '3500 KES',
  },
  {
    image: '/product-0.jpg',
    link: '/store/product',
    name: 'Towering Man',
    price: '3500 KES',
  },
]
</script>

<template>
  <div class="w-full lg:px-[300px] md:px-5 px-3 py-4 ">
    <p
      class="slide-enter" bg-orange-4:10 text-orange-4 border="l-3 orange-4" px4 py2 w-full
    >
      This is a work in progress, the implementation may be incomplete. Please check back later.
    </p>
  </div>
  <div class="slide-enter flex flex-start gap-4 m-[10em auto 0] w-[fit-content] p-[0.05em] mx">
    <div class="filters">
      <p>Shop By Collection</p>
    </div>
    <div class="max-w-[954px] m-auto">
      <div class="ml-6 mb-3em text-[#3F3F3F]">
        <h3 class="font-bold text-[var(--fg-deeper)]">
          All products
          <span class="text-foreground:50">— ({{ products.length }})</span>
        </h3>
      </div>
      <div class="grid grid-cols-[1fr_1fr_1fr] max-md:grid-cols-[1fr_1fr] mx-3">
        <div v-for="product, idx in products" :key="idx">
          <div class="p-0.4em mb-3em relative product-card">
            <div class="quickview max-md:opacity-100">
              <button class="quickview-button">
                <span class="flex gap-2 items-center">
                  <div class="i-majesticons-arrows-expand-line text-black" />
                  <span class="max-md:hidden">Quickview</span>
                </span>
              </button>
            </div>
            <a :href="product.link">
              <img :src="product.image" width="720px" height="500px" class="h-auto w-full rounded-[12px] aspect-[500/720]">
              <p class="title">{{ product.name }}</p>
              <p class="text-foreground:60">{{ product.price }}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.product-card:hover > .quickview {
    opacity: 1;
    bottom: 5.5em;
}
.quickview {
    position: absolute;
    transition: 0.5s ease;
    opacity: 0;
    bottom: 5em;
    left: 50%;
    transform: translateY(-10px) translateX(-50%);

}

.quickview-button {
    padding: 0.3em 1em;
    box-shadow: 0px 10px 60px -4px #00000033;
    border-radius: 50px;
    background: #FFF;
    color: #0F0F0F;
}

.title {
    font-size: 1.1em;
    font-weight: 500;
    margin-top: 0.6em;
}

.filters {
    position: sticky;
    position: -webkit-sticky;
    top: 4em;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    height: fit-content;
}

@media  screen and (max-width: 768px) {
    .filters {
        display: none;
    }
    .quickview {
        top: 2em;
        right: 0px;
        left: auto;
        bottom: auto;
        opacity: 1
    }
    .quickview-button {
        width: 40px;
        height: 40px;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
