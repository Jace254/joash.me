import { u as useRoute, b as useRouter, _ as __nuxt_component_2$1, c as useNuxtApp } from './server.mjs';
import { defineComponent, withAsyncContext, unref, withCtx, createVNode, ref, computed, createTextVNode, toDisplayString, toValue, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderSlot, ssrRenderList } from 'vue/server-renderer';
import { f as formatDate } from './index-CjI2AfFO.mjs';
import { _ as __nuxt_component_1 } from './ContentRenderer-COeWdKRA.mjs';
import { u as useAsyncData, q as queryCollection } from './app-V0A-vgE2.mjs';
import { u as useCustomHead } from './head-oc2xLLz6.mjs';
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
import 'clsx';
import 'dayjs';
import 'tailwind-merge';
import 'property-information';
import 'minimark/hast';

const base = "https://joash.me";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PostWrapper",
  __ssrInlineRender: true,
  props: {
    frontmatter: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    useRouter();
    const route = useRoute();
    ref();
    const tweetUrl = computed(() => `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Reading @JoashMacenton's ${base}${route.path}

I think...`)}`);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_2$1;
      _push(`<!--[-->`);
      if (__props.frontmatter.display ?? __props.frontmatter.title) {
        _push(`<div class="${ssrRenderClass([[__props.frontmatter.wrapperClass], "prose my-auto mb-8 w-full md:px-0 px-7"])}"><h1 class="mb-0 slide-enter-50">${ssrInterpolate(__props.frontmatter.display ?? __props.frontmatter.title)}</h1>`);
        if (__props.frontmatter.date) {
          _push(`<p class="opacity-50 !-mt-6 slide-enter-50">${ssrInterpolate(unref(formatDate)(__props.frontmatter.date, false))} · `);
          if (__props.frontmatter.duration) {
            _push(`<span class="before:i-material-symbols-timer-outline-rounded">${ssrInterpolate(__props.frontmatter.duration)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</p>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.frontmatter.place) {
          _push(`<p class="mt--4!"><span op50>at </span>`);
          if (__props.frontmatter.placeLink) {
            _push(`<a${ssrRenderAttr("href", __props.frontmatter.placeLink)} target="_blank">${ssrInterpolate(__props.frontmatter.place)}</a>`);
          } else {
            _push(`<span font-bold>${ssrInterpolate(__props.frontmatter.place)}</span>`);
          }
          _push(`</p>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.frontmatter.subtitle) {
          _push(`<p class="opacity-50 !-mt-6 italic slide-enter">${ssrInterpolate(__props.frontmatter.subtitle)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.frontmatter.draft) {
          _push(`<p class="slide-enter" bg-orange-4:10 text-orange-4 border="l-3 orange-4" px4 py2> This is a draft post, the content may be incomplete. Please check back later. </p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<article w-full h-full max-w="var(--content-width)" md:px-0 px-7 relative block class="${ssrRenderClass([[__props.frontmatter.tocAlwaysOn ? "toc-always-on" : "", __props.frontmatter.class], "slide-enter-content prose"])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</article>`);
      if (unref(route).path !== "/") {
        _push(`<div class="prose m-auto w-full md:px-0 px-7 mt-8 mb-8 slide-enter animate-delay-500 print:hidden">`);
        if (__props.frontmatter.duration) {
          _push(`<!--[--><span font-mono op50>&gt; </span><span op50>comment on </span><a${ssrRenderAttr("href", unref(tweetUrl))} target="_blank" op50>twitter</a><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`<br><span font-mono op50>&gt; </span>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(route).path.split("/").slice(0, -1).join("/") || "/",
          class: "font-mono op50 hover:op75"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` cd . . `);
            } else {
              return [
                createTextVNode(" cd . . ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PostWrapper.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$2, { __name: "PostWrapper" });
const useAnchorScroll = (options = {}) => {
  const toAnchorSurfaces = computed(() => {
    const unwrappedOptions = toValue(options);
    return unwrappedOptions?.surfaces ?? unwrappedOptions?.toAnchor?.surfaces ?? toValue(useNuxtApp().$anchorScroll?.defaults.surfaces) ?? [];
  });
  const toAnchorScrollOptions = computed(() => {
    const unwrappedOptions = toValue(options);
    return unwrappedOptions?.scrollOptions ?? unwrappedOptions?.toAnchor?.scrollOptions ?? toValue(useNuxtApp().$anchorScroll?.defaults?.toAnchor);
  });
  const toTopSurfaces = computed(() => {
    const unwrappedOptions = toValue(options);
    return unwrappedOptions?.surfaces ?? unwrappedOptions?.toTop?.surfaces ?? toValue(useNuxtApp().$anchorScroll?.defaults.surfaces) ?? [];
  });
  const toTopScrollOptions = computed(() => {
    const unwrappedOptions = toValue(options);
    return unwrappedOptions?.scrollOptions ?? unwrappedOptions?.toTop?.scrollOptions ?? toValue(useNuxtApp().$anchorScroll?.defaults?.toTop);
  });
  return {
    scrollToAnchor(target) {
      const maybeElement = toValue(target);
      let anchorElement = null;
      if (typeof maybeElement === "string") {
        anchorElement = (void 0).getElementById(maybeElement.replace(/^#/, ""));
      } else if (maybeElement instanceof HTMLElement) {
        anchorElement = maybeElement;
      } else {
        const elementId = toValue(maybeElement.id);
        const elementSelector = toValue(maybeElement.sr);
        if (elementId) {
          anchorElement = (void 0).getElementById(elementId.replace(/^#/, ""));
        } else if (elementSelector) {
          try {
            anchorElement = (void 0).querySelector(elementSelector);
          } catch (error) {
            console.error("[useAnchorScroll]: While select element from document, next error occurred:", error);
          }
        } else {
          console.error(
            "[useAnchorScroll]: Wrong object provided to scrollToAnchor composable:",
            "either 'id' and 'sr' (selector) are not provided in object",
            maybeElement
          );
        }
      }
      if (!anchorElement)
        return false;
      const { top, left } = anchorElement.getBoundingClientRect();
      const { behavior, offsetLeft, offsetTop } = toValue(toAnchorScrollOptions) ?? {};
      const scrollToAnchorOptions = {
        behavior,
        ...offsetLeft !== void 0 && { left: left + offsetLeft },
        ...offsetTop !== void 0 && { top: top + offsetTop }
      };
      for (const surface of toValue(toAnchorSurfaces))
        surface.scrollBy(scrollToAnchorOptions);
      return true;
    },
    scrollToTop() {
      const { behavior, offsetLeft, offsetTop } = toValue(toTopScrollOptions) ?? {};
      const scrollToTopOptions = {
        behavior,
        left: offsetLeft,
        top: offsetTop
      };
      for (const surface of toValue(toTopSurfaces))
        surface.scrollTo(scrollToTopOptions);
    }
  };
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TOCLinks",
  __ssrInlineRender: true,
  props: {
    navigation: {}
  },
  setup(__props) {
    const { scrollToAnchor } = useAnchorScroll({
      toTop: {
        scrollOptions: {
          behavior: "smooth",
          offsetTop: 140
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_2$1;
      const _component_TOCLinks = __nuxt_component_2;
      _push(`<!--[-->`);
      ssrRenderList(__props.navigation, (link, idx) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          href: `#${link.id}`,
          onClick: ($event) => unref(scrollToAnchor)(link.id)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.text)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.text), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        if (link.children) {
          _push(`<ul>`);
          _push(ssrRenderComponent(_component_TOCLinks, {
            navigation: link.children
          }, null, _parent));
          _push(`</ul>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TOCLinks.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$1, { __name: "TOCLinks" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(route.path, () => {
      return queryCollection("blog").path(route.path).first();
    }, "$N-i_jxQxhJ")), __temp = await __temp, __restore(), __temp);
    const navigation = page.value?.body.toc?.links || [];
    useCustomHead(
      page.value?.title,
      page.value?.description
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PostWrapper = __nuxt_component_0;
      const _component_ContentRenderer = __nuxt_component_1;
      const _component_TOCLinks = __nuxt_component_2;
      _push(`<!--[-->`);
      if (unref(page)) {
        _push(ssrRenderComponent(_component_PostWrapper, { frontmatter: unref(page) }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ContentRenderer, {
                value: unref(page).body
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_ContentRenderer, {
                  value: unref(page).body
                }, null, 8, ["value"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(navigation).length > 0) {
        _push(`<div class="table-of-contents"><div class="table-of-contents-anchor"><div class="i-ri-menu-2-fill"></div></div><ul>`);
        _push(ssrRenderComponent(_component_TOCLinks, { navigation: unref(navigation) }, null, _parent));
        _push(`</ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-DQsqqCVx.mjs.map
