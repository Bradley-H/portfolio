import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../../chunks/index3.js";
import { D as Dialog } from "../../../../chunks/Dialog.js";
import { p as page } from "../../../../chunks/stores.js";
/* empty css                         */const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${validate_component(Dialog, "Dialog").$$render($$result, { text: $page.error?.message }, {}, {})}`;
});
export {
  Error as default
};
