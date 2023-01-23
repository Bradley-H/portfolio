import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component, f as each } from "../../../chunks/index.js";
import { B as Button } from "../../../chunks/Button.js";
import { M as Me } from "../../../chunks/Me.js";
import { D as Dialog } from "../../../chunks/Dialog.js";
const Card_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".card.svelte-ym6jq6.svelte-ym6jq6{border:0.125rem solid white;background-color:#c1563d;margin:1rem 0 0.75rem 0.5rem;width:17.1875rem;height:14.375rem}.card.svelte-ym6jq6 .img h3.svelte-ym6jq6{color:white;text-align:center;font-size:0.85rem;text-shadow:1px 1px black;margin-top:0.4rem}.card.svelte-ym6jq6 .img img.svelte-ym6jq6{width:100%;height:9.375rem}.card.svelte-ym6jq6 .buttons.svelte-ym6jq6{display:flex;justify-content:center;margin:0.4rem 0}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { img = "" } = $$props;
  let { title = "" } = $$props;
  let { href = "" } = $$props;
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  $$result.css.add(css$1);
  return `<div class="${"card svelte-ym6jq6"}"><div class="${"img"}"><img src="${escape(img, true) + ".webp"}"${add_attribute("alt", `${title} image`, 0)} class="${"svelte-ym6jq6"}">
            <h3 class="${"svelte-ym6jq6"}">${escape(title)}</h3></div>
        <div class="${"buttons svelte-ym6jq6"}">${validate_component(Button, "Button").$$render(
    $$result,
    {
      icon: "fas fa-info",
      href,
      other: true,
      text: "More Info"
    },
    {},
    {}
  )}</div></div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "span.svelte-1cnqq3s{display:flex;height:125.78125rem}.grid.svelte-1cnqq3s{display:grid;grid-template-columns:repeat(1, 1fr);z-index:2;position:relative;height:max-content;margin-bottom:4rem}@media(min-width: 481px){.grid.svelte-1cnqq3s{display:flex;flex-wrap:wrap}}.cliff.svelte-1cnqq3s{background-color:#9d5d2a;z-index:56;width:4rem}@media(min-width: 481px){.cliff.svelte-1cnqq3s{width:6rem}}.me.svelte-1cnqq3s{position:relative;bottom:9.35rem;transform:scale(0.5);margin-left:0.2rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1wrpshw_START -->${$$result.title = `<title>[B-J-H] - Portfolio</title>`, ""}<!-- HEAD_svelte-1wrpshw_END -->`, ""}


${validate_component(Dialog, "Dialog").$$render($$result, { text: "This is the portfolio valley." }, {}, {})}
<span class="${"svelte-1cnqq3s"}"><div class="${"cliff svelte-1cnqq3s"}"><div class="${"ground"}"><div class="${"me svelte-1cnqq3s"}">${validate_component(Me, "Me").$$render($$result, {}, {}, {})}</div></div></div>
    
    <div class="${"grid svelte-1cnqq3s"}">${each(data.props.items, ({ title, img }, i) => {
    return `${validate_component(Card, "Card").$$render(
      $$result,
      {
        img,
        title,
        href: `portfolio/${title.split(" ").join("-")}`
      },
      {},
      {}
    )}`;
  })}</div></span>`;
});
export {
  Page as default
};
