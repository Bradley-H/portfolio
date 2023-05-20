import { c as create_ssr_component, a as add_attribute, e as escape, h as null_to_empty } from "./index3.js";
const Button_svelte_svelte_type_style_lang = "";
const css = {
  code: 'a.svelte-1s8u8iw,button.svelte-1s8u8iw{display:flex}a.svelte-1s8u8iw,button.svelte-1s8u8iw{margin:0.3125rem;justify-content:center;align-items:center;padding:0px 30px;text-align:left;color:#fdfdfd;font-size:0.7rem;text-decoration:none;background-color:#ff2d24;text-transform:uppercase;position:relative;z-index:10;border:0;height:1.5625rem;cursor:pointer;width:max-content;font-weight:bold}.submit.svelte-1s8u8iw{background-color:#ff5e57;width:max-content;color:white;place-self:center}.submit.svelte-1s8u8iw::before{background-color:#ff5e57}.submit.svelte-1s8u8iw::after{background-color:#ff5e57}i.svelte-1s8u8iw{margin-right:1rem;font-size:1.125rem;margin-bottom:0.15rem}a.svelte-1s8u8iw::after,a.svelte-1s8u8iw::before,button.svelte-1s8u8iw::after,button.svelte-1s8u8iw::before,.other.svelte-1s8u8iw::before,.other.svelte-1s8u8iw::after{content:"";position:absolute;background-color:#ff2d24;width:calc(100% - 10px);z-index:-1;height:100%}a.svelte-1s8u8iw::after,button.svelte-1s8u8iw::after{top:-5px;left:0.3125rem}a.svelte-1s8u8iw::before,button.svelte-1s8u8iw::before{bottom:-5px;right:0.3125rem}.other.svelte-1s8u8iw,.other.svelte-1s8u8iw::before,.other.svelte-1s8u8iw::after{background-color:black;color:white}',
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  let { href = "" } = $$props;
  let { other = false } = $$props;
  let { icon = "" } = $$props;
  let { submit = false } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.other === void 0 && $$bindings.other && other !== void 0)
    $$bindings.other(other);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.submit === void 0 && $$bindings.submit && submit !== void 0)
    $$bindings.submit(submit);
  $$result.css.add(css);
  return `${href ? `<a${add_attribute("href", href, 0)} class="${["svelte-1s8u8iw", other ? "other" : ""].join(" ").trim()}"><i class="${escape(null_to_empty(icon), true) + " svelte-1s8u8iw"}"></i> ${escape(text)}</a>` : `${submit ? `<button type="submit" class="${["svelte-1s8u8iw", (submit ? "submit" : "") + " " + (other ? "other" : "")].join(" ").trim()}"><i class="${escape(null_to_empty(icon), true) + " svelte-1s8u8iw"}"></i>${escape(text)}</button>` : `<button class="${["svelte-1s8u8iw", other ? "other" : ""].join(" ").trim()}"><i class="${escape(null_to_empty(icon), true) + " svelte-1s8u8iw"}"></i>${escape(text)}</button>`}`}`;
});
export {
  Button as B
};
