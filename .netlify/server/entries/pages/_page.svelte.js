import { c as create_ssr_component, v as validate_component, d as each, e as escape, a as add_attribute } from "../../chunks/index3.js";
import { M as Me } from "../../chunks/Me.js";
import { D as Dialog } from "../../chunks/Dialog.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "fieldset.svelte-dn94o .img.svelte-dn94o{display:flex}.ground.svelte-dn94o.svelte-dn94o{background-color:#9d5d2a;width:100%;height:1.5rem;position:absolute;bottom:0}.me.svelte-dn94o.svelte-dn94o{display:grid;position:absolute;bottom:0.2rem;place-items:center;transform:scale(0.8)}@media(min-width: 481px){.me.svelte-dn94o.svelte-dn94o{transform:scale(1);bottom:1.5rem}}fieldset.svelte-dn94o.svelte-dn94o{font-size:0.8rem;border:none;margin-top:3rem}@media(min-width: 481px){fieldset.svelte-dn94o.svelte-dn94o{margin-top:1.5rem}}@media(min-width: 769px){fieldset.svelte-dn94o.svelte-dn94o{margin-top:0}}fieldset.svelte-dn94o legend.svelte-dn94o{text-align:center;width:100%;font-weight:bold;color:#093259;margin-top:1rem}@media(min-width: 481px){fieldset.svelte-dn94o legend.svelte-dn94o{margin-top:2rem;font-size:0.9rem}}@media(min-width: 769px){fieldset.svelte-dn94o legend.svelte-dn94o{margin-top:3.5rem}}@media(min-width: 1025px){fieldset.svelte-dn94o legend.svelte-dn94o{margin-top:1rem}}fieldset.svelte-dn94o ul.svelte-dn94o{display:grid;justify-content:space-evenly;grid-template-columns:repeat(3, 1fr);margin-bottom:0.5rem;place-items:center}@media(min-width: 481px) and (max-width: 768px){fieldset.svelte-dn94o ul.svelte-dn94o{grid-template-columns:repeat(4, 1fr)}}@media(min-width: 769px){fieldset.svelte-dn94o ul.svelte-dn94o{grid-template-columns:repeat(5, 1fr)}}fieldset.svelte-dn94o li.svelte-dn94o{list-style:none;margin:0.75rem;text-align:center}@media(min-width: 769px){fieldset.svelte-dn94o li.svelte-dn94o{margin:0.8rem 0}}fieldset.svelte-dn94o .img.svelte-dn94o{justify-content:center;align-items:center;flex-direction:column-reverse}fieldset.svelte-dn94o .img img.svelte-dn94o{width:2.3125rem;height:2.3125rem;object-fit:cover}@media(min-width: 481px) and (max-width: 768px){fieldset.svelte-dn94o .img img.svelte-dn94o{width:2.8125rem;height:2.8125rem}}@media(min-width: 769px){fieldset.svelte-dn94o .img img.svelte-dn94o{width:3.4375rem;height:3.4375rem}}@media(min-width: 1025px){fieldset.svelte-dn94o .img img.svelte-dn94o{width:4.0625rem;height:4.0625rem}}fieldset.svelte-dn94o h4.svelte-dn94o{font-size:0.8rem;margin-top:0.7rem;color:#093259;font-weight:bold}@media(min-width: 481px) and (max-width: 768px){fieldset.svelte-dn94o h4.svelte-dn94o{font-size:0.7rem}}@media(min-width: 769px){fieldset.svelte-dn94o h4.svelte-dn94o{font-size:0.9rem;margin-bottom:0.45rem}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-x0v7mx_START -->${$$result.title = `<title>[B-J-H] - Front End Web Developer</title>`, ""}<!-- HEAD_svelte-x0v7mx_END -->`, ""}



<div class="me svelte-dn94o">${validate_component(Me, "Me").$$render($$result, {}, {}, {})}</div>
<div class="about">${validate_component(Dialog, "Dialog").$$render(
    $$result,
    {
      text: "Hello, I'm Bradley I'm 34 years old. I live in Changzhou, Jiangsu, China. I'm an aspiring Computer Scientist"
    },
    {},
    {
      default: () => {
        return `<fieldset class="svelte-dn94o"><legend class="svelte-dn94o">Skills</legend>
			<ul class="svelte-dn94o">${each(data.props.catagories[0].additional, (item) => {
          return `<li class="svelte-dn94o"><div class="img svelte-dn94o"><img src="${escape(item.img, true) + ".webp"}"${add_attribute("alt", item.text + " image", 0)} class="svelte-dn94o"></div>
						<h4 class="svelte-dn94o">${escape(item.text)}</h4>
					</li>`;
        })}</ul></fieldset>`;
      }
    }
  )}</div>
<div class="ground svelte-dn94o"></div>`;
});
export {
  Page as default
};
