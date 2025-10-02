import { _ as __nuxt_component_2$1 } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { p as projects } from './index-Cg8KpRmz.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    useCustomHead("Projects", "A collection of my projects, showcasing my skills and creativity. Explore the links to learn more about each project.");
    const newProjects = ref(projects.map((p) => {
      return { name: "", description: "", year: "", link: p.link };
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_2$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "wrapper sizing w-full" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(newProjects), (project, idx) => {
        _push(`<div class="link-wrapper slide-enter" style="${ssrRenderStyle({
          "--enter-stage": idx,
          "--enter-step": "100ms"
        })}">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "link",
          href: project.link,
          target: "_blank",
          rel: "noopener"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="project-title"${_scopeId}>${ssrInterpolate(project.name)}</span><span class="project-desc"${_scopeId}>${ssrInterpolate(project.description)}</span><div class="animated-line" style="${ssrRenderStyle(`--d: ${idx}`)}"${_scopeId}></div><div class="project-date"${_scopeId}>${ssrInterpolate(project.year)}</div>`);
            } else {
              return [
                createVNode("span", { class: "project-title" }, toDisplayString(project.name), 1),
                createVNode("span", { class: "project-desc" }, toDisplayString(project.description), 1),
                createVNode("div", {
                  class: "animated-line",
                  style: `--d: ${idx}`
                }, null, 4),
                createVNode("div", { class: "project-date" }, toDisplayString(project.year), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=projects-CY-PUa8O.mjs.map
