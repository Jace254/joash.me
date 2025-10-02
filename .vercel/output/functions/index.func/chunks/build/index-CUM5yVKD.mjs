import { defineComponent, withAsyncContext, unref, createVNode, resolveDynamicComponent, mergeProps, withCtx, createBlock, createCommentVNode, toDisplayString, openBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
import { f as formatDate } from './index-CjI2AfFO.mjs';
import { u as useAsyncData, q as queryCollection } from './app-V0A-vgE2.mjs';
import { u as useCustomHead } from './head-oc2xLLz6.mjs';
import 'clsx';
import 'dayjs';
import 'tailwind-merge';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ListPosts",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const getYear = (a) => new Date(a).getFullYear();
    const isFuture = (a) => a && new Date(a) > /* @__PURE__ */ new Date();
    const isSameYear = (a, b) => a && b && getYear(a) === getYear(b);
    function isSameGroup(a, b) {
      return isFuture(a.date) === isFuture(b?.date) && isSameYear(a.date, b?.date);
    }
    function getGroupName(p) {
      if (isFuture(p.date))
        return "Upcoming";
      return getYear(p.date);
    }
    const { data: posts } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("blog-posts", () => {
      return queryCollection("blog").all();
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      if (unref(posts)) {
        _push(`<!--[-->`);
        ssrRenderList(unref(posts), (blog, idx) => {
          _push(`<div>`);
          if (!isSameGroup(blog, unref(posts)[idx - 1])) {
            _push(`<div select-none relative h20 pointer-events-none slide-enter max-w="content-fit" style="${ssrRenderStyle({
              "--enter-stage": idx - 2,
              "--enter-step": "60ms"
            })}"><span text-8em max-md:text-4.5em color-transparent absolute left--3rem max-md:left--2rem max-md:top-1rem top--2rem font-bold text-stroke-2 text-stroke-hex-818589 op15 style="${ssrRenderStyle({ "font-family": 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji"' })}">${ssrInterpolate(getGroupName(blog))}</span></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="slide-enter" style="${ssrRenderStyle({
            "--enter-stage": idx,
            "--enter-step": "60ms"
          })}">`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(blog.path.includes("://") ? "a" : "RouterLink"), mergeProps(
            { ref_for: true },
            blog.path.includes("://") ? {
              href: blog.path,
              target: "_blank",
              rel: "noopener noreferrer"
            } : {
              to: blog.path
            },
            { class: "item block font-normal mb-6 mt-2 no-underline" }
          ), {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<li class="no-underline" flex="~ col md:row gap-2 md:items-center"${_scopeId}><div class="title text-lg leading-1.2em" flex="~ gap-2 wrap"${_scopeId}><span align-middle${_scopeId}>${ssrInterpolate(blog.title)}</span></div><div flex="~ gap-2 items-center"${_scopeId}>`);
                if (blog.redirect) {
                  _push2(`<span align-middle op50 flex-none text-xs ml--1 mt--1 i-carbon-arrow-up-right title="External"${_scopeId}></span>`);
                } else {
                  _push2(`<!---->`);
                }
                if (blog.inperson) {
                  _push2(`<span align-middle op50 flex-none i-ri:group-2-line title="In person"${_scopeId}></span>`);
                } else {
                  _push2(`<!---->`);
                }
                if (blog.recording || blog.video) {
                  _push2(`<span align-middle op50 flex-none i-ri:film-line title="Provided in video"${_scopeId}></span>`);
                } else {
                  _push2(`<!---->`);
                }
                if (blog.radio) {
                  _push2(`<span align-middle op50 flex-none i-ri:radio-line title="Provided in radio"${_scopeId}></span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<span text-sm op50 ws-nowrap${_scopeId}>${ssrInterpolate(unref(formatDate)(blog.date, true))}</span>`);
                if (blog.duration) {
                  _push2(`<span text-sm op40 ws-nowrap${_scopeId}>· ${ssrInterpolate(blog.duration)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                if (blog.platform) {
                  _push2(`<span text-sm op40 ws-nowrap${_scopeId}>· ${ssrInterpolate(blog.platform)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                if (blog.place) {
                  _push2(`<span text-sm op40 ws-nowrap md:hidden${_scopeId}>· ${ssrInterpolate(blog.place)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></li>`);
                if (blog.place) {
                  _push2(`<div op50 text-sm hidden mt--2 md:block${_scopeId}>${ssrInterpolate(blog.place)}</div>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  createVNode("li", {
                    class: "no-underline",
                    flex: "~ col md:row gap-2 md:items-center"
                  }, [
                    createVNode("div", {
                      class: "title text-lg leading-1.2em",
                      flex: "~ gap-2 wrap"
                    }, [
                      createVNode("span", { "align-middle": "" }, toDisplayString(blog.title), 1)
                    ]),
                    createVNode("div", { flex: "~ gap-2 items-center" }, [
                      blog.redirect ? (openBlock(), createBlock("span", {
                        key: 0,
                        "align-middle": "",
                        op50: "",
                        "flex-none": "",
                        "text-xs": "",
                        "ml--1": "",
                        "mt--1": "",
                        "i-carbon-arrow-up-right": "",
                        title: "External"
                      })) : createCommentVNode("", true),
                      blog.inperson ? (openBlock(), createBlock("span", {
                        key: 1,
                        "align-middle": "",
                        op50: "",
                        "flex-none": "",
                        "i-ri:group-2-line": "",
                        title: "In person"
                      })) : createCommentVNode("", true),
                      blog.recording || blog.video ? (openBlock(), createBlock("span", {
                        key: 2,
                        "align-middle": "",
                        op50: "",
                        "flex-none": "",
                        "i-ri:film-line": "",
                        title: "Provided in video"
                      })) : createCommentVNode("", true),
                      blog.radio ? (openBlock(), createBlock("span", {
                        key: 3,
                        "align-middle": "",
                        op50: "",
                        "flex-none": "",
                        "i-ri:radio-line": "",
                        title: "Provided in radio"
                      })) : createCommentVNode("", true),
                      createVNode("span", {
                        "text-sm": "",
                        op50: "",
                        "ws-nowrap": ""
                      }, toDisplayString(unref(formatDate)(blog.date, true)), 1),
                      blog.duration ? (openBlock(), createBlock("span", {
                        key: 4,
                        "text-sm": "",
                        op40: "",
                        "ws-nowrap": ""
                      }, "· " + toDisplayString(blog.duration), 1)) : createCommentVNode("", true),
                      blog.platform ? (openBlock(), createBlock("span", {
                        key: 5,
                        "text-sm": "",
                        op40: "",
                        "ws-nowrap": ""
                      }, "· " + toDisplayString(blog.platform), 1)) : createCommentVNode("", true),
                      blog.place ? (openBlock(), createBlock("span", {
                        key: 6,
                        "text-sm": "",
                        op40: "",
                        "ws-nowrap": "",
                        "md:hidden": ""
                      }, "· " + toDisplayString(blog.place), 1)) : createCommentVNode("", true)
                    ])
                  ]),
                  blog.place ? (openBlock(), createBlock("div", {
                    key: 0,
                    op50: "",
                    "text-sm": "",
                    hidden: "",
                    "mt--2": "",
                    "md:block": ""
                  }, toDisplayString(blog.place), 1)) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }), _parent);
          _push(`</div></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<div py2 op50> { nothing here yet } </div>`);
      }
      _push(`</main>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ListPosts.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "ListPosts" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useCustomHead(
      "Blogs",
      "A collection of my blog posts, sharing insights and experiences."
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ListPosts = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ListPosts, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CUM5yVKD.mjs.map
