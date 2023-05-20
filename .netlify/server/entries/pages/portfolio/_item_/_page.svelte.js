import { c as create_ssr_component, i as is_promise, n as noop, v as validate_component, e as escape, d as each } from "../../../../chunks/index3.js";
import { D as Dialog } from "../../../../chunks/Dialog.js";
import { B as Button } from "../../../../chunks/Button.js";
/* empty css                         */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".buttons.svelte-jg7vi2.svelte-jg7vi2,.container.svelte-jg7vi2 i.svelte-jg7vi2,.container.svelte-jg7vi2 .upperContent_piece h3.svelte-jg7vi2,.container.svelte-jg7vi2 .upperContent_tech_item.svelte-jg7vi2,.container.svelte-jg7vi2 .upperContent_piece.svelte-jg7vi2,.container.svelte-jg7vi2 .upperContent.svelte-jg7vi2,.container.svelte-jg7vi2.svelte-jg7vi2{display:flex}.container.svelte-jg7vi2 .upperContent_tech_item.svelte-jg7vi2,.container.svelte-jg7vi2 .upperContent_piece.svelte-jg7vi2,.container.svelte-jg7vi2 .upperContent.svelte-jg7vi2,.container.svelte-jg7vi2.svelte-jg7vi2{flex-direction:column}.container.svelte-jg7vi2.svelte-jg7vi2{align-self:center;text-align:left;width:93%;min-width:15.625rem;max-width:93.75rem;position:relative;transform:translateY(-6.5rem)}@media(min-width: 481px){.container.svelte-jg7vi2.svelte-jg7vi2{width:95%}}.container.svelte-jg7vi2 .upperContent.svelte-jg7vi2{justify-content:center;margin-top:2.5rem;text-align:center}@media(min-width: 481px){.container.svelte-jg7vi2 .upperContent.svelte-jg7vi2{gap:1.875rem}}@media(min-width: 1025px){.container.svelte-jg7vi2 .upperContent.svelte-jg7vi2{display:grid;grid-template-columns:repeat(2, 1fr)}}.container.svelte-jg7vi2 .upperContent_piece.svelte-jg7vi2{justify-content:center;align-items:center;gap:0.75rem}.container.svelte-jg7vi2 .upperContent_piece img.svelte-jg7vi2{border:3px solid white;width:20.625rem}@media(min-width: 769px){.container.svelte-jg7vi2 .upperContent_piece img.svelte-jg7vi2{width:450px}}@media(min-width: 1025px){.container.svelte-jg7vi2 .upperContent_piece img.svelte-jg7vi2{width:440px}}.container.svelte-jg7vi2 .upperContent_piece h3.svelte-jg7vi2{margin:1.1rem 0;color:white}@media(min-width: 769px){.container.svelte-jg7vi2 .upperContent_piece h3.svelte-jg7vi2{display:none}}.container.svelte-jg7vi2 .upperContent_tech.svelte-jg7vi2{display:grid;grid-template-columns:repeat(2, 1fr);gap:15px;place-items:center;margin:0 0 1.4rem 0}@media(min-width: 769px){.container.svelte-jg7vi2 .upperContent_tech.svelte-jg7vi2{display:flex;justify-content:center;grid-template-columns:unset;gap:6.25rem}}.container.svelte-jg7vi2 .upperContent_tech_item.svelte-jg7vi2{height:max-content;text-align:center;align-items:center;gap:0.3125rem}@media(min-width: 481px){.container.svelte-jg7vi2 .upperContent_tech_item h5.svelte-jg7vi2{font-size:1rem}}.container.svelte-jg7vi2 .upperContent_tech_item img.svelte-jg7vi2{aspect-ratio:1/1;width:3.1875rem}@media(min-width: 769px){.container.svelte-jg7vi2 .upperContent_tech_item img.svelte-jg7vi2{width:3.75rem}}@media(min-width: 1025px){.container.svelte-jg7vi2 .upperContent_tech_item img.svelte-jg7vi2{width:4.0625rem}}.container.svelte-jg7vi2 .information.svelte-jg7vi2{text-align:center;padding:0.625rem}.container.svelte-jg7vi2 .information h4.svelte-jg7vi2{display:none;margin:1.4rem 0;font-size:1.2rem;color:white}@media(min-width: 769px){.container.svelte-jg7vi2 .information h4.svelte-jg7vi2{display:flex;justify-content:center}}.container.svelte-jg7vi2 .information_text h3.svelte-jg7vi2{font-size:0.9rem;line-height:2.5}@media(min-width: 481px){.container.svelte-jg7vi2 .information_text h3.svelte-jg7vi2{font-size:1.1rem}}.container.svelte-jg7vi2 i.svelte-jg7vi2{cursor:pointer;color:#093259;position:relative}.container.svelte-jg7vi2 i a.svelte-jg7vi2{font-size:1rem;margin-left:0.5rem;text-decoration:none;color:#093259}.buttons.svelte-jg7vi2.svelte-jg7vi2{margin:0 0 1rem 0}@media(min-width: 769px){.buttons.svelte-jg7vi2.svelte-jg7vi2{margin:0.5rem 0 0 0}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
    ${validate_component(Dialog, "Dialog").$$render(
        $$result,
        {
          text: "Getting portfolio Item. One moment"
        },
        {},
        {}
      )}
`;
    }
    return function(item) {
      return `
    ${validate_component(Dialog, "Dialog").$$render($$result, { text: data.props.msg }, {}, {})}

    <div class="container svelte-jg7vi2"><div><i class="fas fa-arrow-left svelte-jg7vi2"><a href="/portfolio" class="svelte-jg7vi2">Go back</a></i></div>
        <div class="upperContent svelte-jg7vi2"><div class="upperContent_piece svelte-jg7vi2"><img src="${"/" + escape(item.img, true) + ".webp"}" alt="" class="svelte-jg7vi2">
                <h3 class="svelte-jg7vi2">${escape(item.title)}</h3>
                <div class="buttons svelte-jg7vi2">${validate_component(Button, "Button").$$render(
        $$result,
        {
          text: "GitHub",
          icon: "fab fa-github",
          other: true,
          href: item.git
        },
        {},
        {}
      )}
                    ${item.demo ? `${validate_component(Button, "Button").$$render(
        $$result,
        {
          text: "Demo",
          icon: "fas fa-tv",
          href: item.demo
        },
        {},
        {}
      )}` : ``}</div></div>
            <div class="upperContent_tech svelte-jg7vi2">${each(item.tech, (tech) => {
        return `<div class="upperContent_tech_item svelte-jg7vi2"><img src="${"/" + escape(tech.img, true) + ".webp"}" alt="" class="svelte-jg7vi2">
                        <h5 class="svelte-jg7vi2">${escape(tech.name)}</h5>
                    </div>`;
      })}</div></div>

        <div class="information svelte-jg7vi2"><h4 class="svelte-jg7vi2">${escape(item.title)}</h4>
            <div class="information_text"><h3 class="svelte-jg7vi2">${escape(item.information)}</h3></div></div></div>
`;
    }(__value);
  }(data.props.item)}`;
});
export {
  Page as default
};
