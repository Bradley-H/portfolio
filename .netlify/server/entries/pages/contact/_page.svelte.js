import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { M as Me } from "../../../chunks/Me.js";
import { D as Dialog } from "../../../chunks/Dialog.js";
import { B as Button } from "../../../chunks/Button.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".ground.svelte-1nrepiy{width:100%;height:1.5rem;background-color:#9d5d2a;position:absolute;bottom:0}.me.svelte-1nrepiy{display:none;position:absolute;bottom:-1.1rem}@media(min-width: 481px){.me.svelte-1nrepiy{display:block;transform:scale(0.6)}}@media(min-width: 769px){.me.svelte-1nrepiy{transform:scale(0.8);bottom:0.1rem}}@media(min-width: 1025px){.me.svelte-1nrepiy{transform:scale(1);bottom:1.4rem}}.centered.svelte-1nrepiy{display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-13fa2yk_START -->${$$result.title = `<title>[B-J-H] - Contact</title>`, ""}<!-- HEAD_svelte-13fa2yk_END -->`, ""}


${validate_component(Dialog, "Dialog").$$render(
    $$result,
    {
      text: "Interested in working together? Here is my Resume"
    },
    {},
    {}
  )}


<div class="${"centered svelte-1nrepiy"}">
        ${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: "Resume.pdf",
      icon: "fas fa-paper-plane",
      text: "Resume"
    },
    {},
    {}
  )}</div>

<div class="${"me svelte-1nrepiy"}">${validate_component(Me, "Me").$$render($$result, {}, {}, {})}</div>
<div class="${"ground svelte-1nrepiy"}"></div>`;
});
export {
  Page as default
};
