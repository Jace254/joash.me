import { a as _export_sfc, _ as __nuxt_component_2$1 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_2$1;
  _push(`<article${ssrRenderAttrs(mergeProps({ class: "prose" }, _attrs))}><h1>Apologies</h1><p> You seem Lost, Let&#39;s get you back `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` home `);
      } else {
        return [
          createTextVNode(" home ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></article>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...all].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____all_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ____all_ as default };
//# sourceMappingURL=_...all_-B85jzkBf.mjs.map
