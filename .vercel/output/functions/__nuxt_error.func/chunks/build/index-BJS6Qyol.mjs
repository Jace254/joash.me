import { _ as __nuxt_component_1 } from './ContentRenderer-COeWdKRA.mjs';
import { u as useRoute, _ as __nuxt_component_2$1 } from './server.mjs';
import { defineComponent, withAsyncContext, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { p as projects } from './index-Cg8KpRmz.mjs';
import { u as useCustomHead } from './head-oc2xLLz6.mjs';
import { u as useAsyncData, q as queryCollection } from './app-V0A-vgE2.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'better-sqlite3';
import 'node:crypto';
import 'property-information';
import 'minimark/hast';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useCustomHead();
    const route = useRoute();
    console.log(route.path);
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(route.path, () => {
      return queryCollection("home").path(route.path).first();
    }, "$77hSeXQoip")), __temp = await __temp, __restore(), __temp);
    const { data: posts } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("blog-posts", () => {
      return queryCollection("blog").all();
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentRenderer = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_2$1;
      _push(`<!--[--><article w-full h-full class="slide-enter-content prose" md:px-0 px-7 relative block>`);
      if (unref(page)) {
        _push(ssrRenderComponent(_component_ContentRenderer, { value: unref(page) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</article><div grid="~ md:cols-3 cols-1" gap-x-3 w-full class="prose" md:px-0 px-7 relative><div flex flex-col gap-2 items-start class="slide-enter-content"><h4 text-black dark:text-white> Craft </h4><span>Coming Soon</span></div><div flex flex-col gap-2 items-start class="slide-enter-content"><h4 text-black dark:text-white> Projects </h4><!--[-->`);
      ssrRenderList(unref(projects).slice(0, 5), (project, idx) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: project.link,
          target: "_blank",
          rel: "noopener",
          class: "after:i-ic-sharp-arrow-outward after:text-gray after:content-[''] after:text-md after:inline-block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(project.name)} <span${_scopeId}></span>`);
            } else {
              return [
                createTextVNode(toDisplayString(project.name) + " ", 1),
                createVNode("span")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<p text=".9rem">${ssrInterpolate(project.description)}</p></div>`);
      });
      _push(`<!--]--><div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block text-[14px] mb-6 mt--2",
        to: "/projects",
        style: { "cursor": "pointer", "border-bottom": "1px dashed", "--at-apply": "'text-foreground:40 hover:text-foreground'" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` More Projects `);
          } else {
            return [
              createTextVNode(" More Projects ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div flex flex-col gap-2 items-start class="slide-enter-content"><h4 text-black dark:text-white> Writing </h4><!--[-->`);
      ssrRenderList(unref(posts), (blog) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: blog.path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(blog.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(blog.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<p text=".9rem">${ssrInterpolate(blog.description)}</p></div>`);
      });
      _push(`<!--]-->`);
      if (unref(posts)?.length === 5) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "block mb-6 mt--2 border-foreground",
          to: "/blog",
          style: { "cursor": "pointer", "border-bottom": "1px dashed" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` More `);
            } else {
              return [
                createTextVNode(" More ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BJS6Qyol.mjs.map
