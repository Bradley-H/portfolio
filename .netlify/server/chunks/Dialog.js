import { c as create_ssr_component, v as validate_component, e as escape } from "./index.js";
const Head_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "img.svelte-n3lyv8{width:100%;height:100%;margin-top:0.35rem;margin-bottom:0.4rem;object-fit:cover}",
  map: null
};
const Head = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `


 <img src="${"/head.svg"}" alt="${""}" class="${"svelte-n3lyv8"}">`;
});
const Dialog_svelte_svelte_type_style_lang = "";
const css = {
  code: ".dialog.svelte-rw12us{display:grid;position:relative;place-self:center;top:-9.5rem;min-width:250px;max-width:93.75rem;min-height:100px;max-height:max-content;color:white;align-self:center;text-align:left}div.svelte-rw12us{display:flex;flex-direction:column;border:double thick white;width:93%;margin:0 auto;overflow:hidden}@media(min-width: 481px){div.svelte-rw12us{width:95%}}.head.svelte-rw12us{display:flex;width:3.4375rem;height:5rem;border:none;margin-left:0.5rem}h5.svelte-rw12us{position:absolute;font-size:0.68rem;letter-spacing:0.0625rem;line-height:1.5;color:#093259;max-width:1300px;word-break:keep-all;margin-left:4.5rem;margin-top:0.4rem}@media(min-width: 481px) and (max-width: 768px){h5.svelte-rw12us{width:80%;font-size:0.8rem;line-height:1.6}}@media(min-width: 769px){h5.svelte-rw12us{font-size:0.95rem}}",
  map: null
};
const Dialog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css);
  return `<div class="${"dialog svelte-rw12us"}"><div class="${"head svelte-rw12us"}">${validate_component(Head, "Head").$$render($$result, {}, {}, {})}</div>
        <h5 class="${"svelte-rw12us"}">${escape(text)}</h5>
    ${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Dialog as D
};
