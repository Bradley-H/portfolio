import { c as create_ssr_component, v as validate_component } from "../../chunks/index3.js";
import { D as Dialog } from "../../chunks/Dialog.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Dialog, "Dialog").$$render(
    $$result,
    {
      text: "Page not found, I'll redirect you in a 3 seconds :)"
    },
    {},
    {}
  )}`;
});
export {
  Error as default
};
