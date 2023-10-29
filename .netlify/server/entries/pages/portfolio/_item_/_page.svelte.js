import { c as create_ssr_component, i as is_promise, n as noop, v as validate_component, e as escape, d as each } from "../../../../chunks/index3.js";
import { D as Dialog } from "../../../../chunks/Dialog.js";
import { B as Button } from "../../../../chunks/Button.js";
/* empty css                         */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".buttons.svelte-ebwg09.svelte-ebwg09,.container.svelte-ebwg09 i.svelte-ebwg09,.container.svelte-ebwg09 .upperContent_piece h3.svelte-ebwg09,.container.svelte-ebwg09 .upperContent_tech_item.svelte-ebwg09,.container.svelte-ebwg09 .upperContent_piece.svelte-ebwg09,.container.svelte-ebwg09 .upperContent.svelte-ebwg09,.container.svelte-ebwg09.svelte-ebwg09{display:flex}.container.svelte-ebwg09 .upperContent_tech_item.svelte-ebwg09,.container.svelte-ebwg09 .upperContent_piece.svelte-ebwg09,.container.svelte-ebwg09 .upperContent.svelte-ebwg09,.container.svelte-ebwg09.svelte-ebwg09{flex-direction:column}.container.svelte-ebwg09.svelte-ebwg09{align-self:center;text-align:left;width:93%;min-width:15.625rem;max-width:93.75rem;position:relative;transform:translateY(-6.5rem)}@media(min-width: 481px){.container.svelte-ebwg09.svelte-ebwg09{width:95%}}.container.svelte-ebwg09 .upperContent.svelte-ebwg09{justify-content:center;margin-top:2.5rem;text-align:center}@media(min-width: 481px){.container.svelte-ebwg09 .upperContent.svelte-ebwg09{gap:1.875rem}}@media(min-width: 1025px){.container.svelte-ebwg09 .upperContent.svelte-ebwg09{display:grid;grid-template-columns:repeat(2, 1fr)}}.container.svelte-ebwg09 .upperContent_piece.svelte-ebwg09{justify-content:center;align-items:center;gap:0.75rem}.container.svelte-ebwg09 .upperContent_piece img.svelte-ebwg09{border:3px solid white;width:20.625rem}@media(min-width: 769px){.container.svelte-ebwg09 .upperContent_piece img.svelte-ebwg09{width:450px}}@media(min-width: 1025px){.container.svelte-ebwg09 .upperContent_piece img.svelte-ebwg09{width:440px}}.container.svelte-ebwg09 .upperContent_piece h3.svelte-ebwg09{margin:1.1rem 0;color:white;text-shadow:1px 1px 3px black}@media(min-width: 769px){.container.svelte-ebwg09 .upperContent_piece h3.svelte-ebwg09{display:none}}.container.svelte-ebwg09 .upperContent_tech.svelte-ebwg09{display:grid;grid-template-columns:repeat(2, 1fr);gap:15px;place-items:center;margin:0 0 1.4rem 0}@media(min-width: 769px){.container.svelte-ebwg09 .upperContent_tech.svelte-ebwg09{display:flex;justify-content:center;grid-template-columns:unset;gap:6.25rem}}.container.svelte-ebwg09 .upperContent_tech_item.svelte-ebwg09{height:max-content;text-align:center;align-items:center;gap:0.3125rem}@media(min-width: 481px){.container.svelte-ebwg09 .upperContent_tech_item h5.svelte-ebwg09{font-size:1rem}}.container.svelte-ebwg09 .upperContent_tech_item img.svelte-ebwg09{aspect-ratio:1/1;width:3.1875rem}@media(min-width: 769px){.container.svelte-ebwg09 .upperContent_tech_item img.svelte-ebwg09{width:3.75rem}}@media(min-width: 1025px){.container.svelte-ebwg09 .upperContent_tech_item img.svelte-ebwg09{width:4.0625rem}}.container.svelte-ebwg09 .information.svelte-ebwg09{text-align:center;padding:0.625rem}.container.svelte-ebwg09 .information h4.svelte-ebwg09{display:none;margin:1.4rem 0;font-size:1.2rem;color:white}@media(min-width: 769px){.container.svelte-ebwg09 .information h4.svelte-ebwg09{display:flex;justify-content:center}}.container.svelte-ebwg09 .information_text h3.svelte-ebwg09{font-size:0.9rem;line-height:2.5}@media(min-width: 481px){.container.svelte-ebwg09 .information_text h3.svelte-ebwg09{font-size:1.1rem}}.container.svelte-ebwg09 i.svelte-ebwg09{cursor:pointer;color:#093259;position:relative}.container.svelte-ebwg09 i a.svelte-ebwg09{font-size:1rem;margin-left:0.5rem;text-decoration:none;color:#093259}.buttons.svelte-ebwg09.svelte-ebwg09{margin:0 0 1rem 0}@media(min-width: 769px){.buttons.svelte-ebwg09.svelte-ebwg09{margin:0.5rem 0 0 0}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  {
    console.log(data.props.item);
  }
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

    <div class="container svelte-ebwg09"><div><i class="fas fa-arrow-left svelte-ebwg09"><a href="/portfolio" class="svelte-ebwg09">Go back</a></i></div>
        <div class="upperContent svelte-ebwg09"><div class="upperContent_piece svelte-ebwg09"><img src="${"/" + escape(item.img, true) + ".webp"}" alt="" class="svelte-ebwg09">
                <h3 class="svelte-ebwg09">${escape(item.title)}</h3>
                <div class="buttons svelte-ebwg09">${validate_component(Button, "Button").$$render(
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
            <div class="upperContent_tech svelte-ebwg09">${each(item.tech, (tech) => {
        return `<div class="upperContent_tech_item svelte-ebwg09"><img src="${"/" + escape(tech.img, true) + ".webp"}" alt="" class="svelte-ebwg09">
                        <h5 class="svelte-ebwg09">${escape(tech.name)}</h5>
                    </div>`;
      })}</div></div>

        <div class="information svelte-ebwg09"><h4 class="svelte-ebwg09">${escape(item.title)}</h4>
            <div class="information_text"><h3 class="svelte-ebwg09">${escape(item.information)}</h3></div></div></div>
`;
    }(__value);
  }(data.props.item)}`;
});
export {
  Page as default
};
