import { defineComponent, useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { u as useCustomHead } from './head-oc2xLLz6.mjs';
import './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'better-sqlite3';
import 'node:crypto';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useCustomHead("Store", "My curated artwork collection");
    const products = [
      {
        image: "/product-0.jpg",
        name: "Towering Man",
        link: "/store/product",
        price: "3500 KES"
      }
      // {
      //   image: '/product-0.jpg',
      //   name: 'Towering Man',
      //   link: '/store/product',
      //   price: '3500 KES',
      // },
      // {
      //   image: '/product-0.jpg',
      //   link: '/store/product',
      //   name: 'Towering Man',
      //   price: '3500 KES',
      // },
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="w-full max-w-[1143.25px] px my4"><p class="slide-enter" bg-orange-4:10 text-orange-4 border="l-3 orange-4" px4 py2 w-full> This is a work in progress, the implementation may be incomplete. Please check back later. </p></div><div class="slide-enter flex flex-start gap-4 m-[10em auto 0] w-[fit-content] p-[0.05em] mx"><div class="filters"><p>Shop By Collection</p></div><div class="max-w-[954px] m-auto"><div class="ml-6 mb-3em text-[#3F3F3F]"><h3 class="font-bold text-[var(--fg-deeper)]"> All products <span class="text-foreground:50">— (${ssrInterpolate(products.length)})</span></h3></div><div class="grid grid-cols-[1fr_1fr_1fr] max-md:grid-cols-[1fr_1fr] mx-3"><!--[-->`);
      ssrRenderList(products, (product, idx) => {
        _push(`<div><div class="p-0.4em mb-3em relative product-card"><div class="quickview max-md:opacity-100"><button class="quickview-button"><span class="flex gap-2 items-center"><div class="i-majesticons-arrows-expand-line text-black"></div><span class="max-md:hidden">Quickview</span></span></button></div><a${ssrRenderAttr("href", product.link)}><img${ssrRenderAttr("src", product.image)} width="720px" height="500px" class="h-auto w-full rounded-[12px] aspect-[500/720]"><p class="title">${ssrInterpolate(product.name)}</p><p class="text-foreground:60">${ssrInterpolate(product.price)}</p></a></div></div>`);
      });
      _push(`<!--]--></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/store/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BsFRaoAI.mjs.map
