import { _ as __nuxt_component_0, a as __nuxt_component_1 } from './TheFooter-k5pLDFG2.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { SpeedInsights } from '@vercel/speed-insights/nuxt';
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
import './index-CjI2AfFO.mjs';
import 'clsx';
import 'dayjs';
import 'tailwind-merge';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "lists",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheNav = __nuxt_component_0;
      const _component_TheFooter = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: { "min-height": "100vh" },
        "h-full": "",
        "w-screen": "",
        "bg-base": ""
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_TheNav, null, null, _parent));
      _push(`<main flex flex-col items-center w-full py="128px" style="${ssrRenderStyle({ "min-height": "calc(100vh - 48px)" })}" relative>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
      _push(ssrRenderComponent(unref(SpeedInsights), null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/lists.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=lists-BvDR7drm.mjs.map
