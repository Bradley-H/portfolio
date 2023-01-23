import { c as create_ssr_component, b as add_attribute, e as escape, d as subscribe, f as each, v as validate_component } from "../../chunks/index.js";
import { w as writable } from "../../chunks/index3.js";
import { p as page } from "../../chunks/stores.js";
/* empty css                   */let links = [
  { text: "About me", href: "/" },
  { text: "Portfolio", href: "/portfolio" },
  { text: "Contact", href: "/contact" }
];
const Link_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: 'a.svelte-tudkk8{text-decoration:none;color:#093259;font-weight:300;position:relative}a.svelte-tudkk8:hover{color:lightGray}a.menu.svelte-tudkk8{color:black;margin-top:2rem}a.active.svelte-tudkk8::before{content:"";display:flex;position:absolute;background-image:url("/finger.png");height:2.1875rem;width:2.1875rem;transform:rotate(90deg) scale(1.2);top:-0.25rem;left:-3rem;z-index:4;background-repeat:no-repeat}',
  map: null
};
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "" } = $$props;
  let { text = "" } = $$props;
  let { menu = false } = $$props;
  let { active = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.menu === void 0 && $$bindings.menu && menu !== void 0)
    $$bindings.menu(menu);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  $$result.css.add(css$6);
  return `<a data-sveltekit-preload-data${add_attribute("href", href, 0)} class="${[
    "svelte-tudkk8",
    (menu ? "menu" : "") + " " + (active === href ? "active" : "")
  ].join(" ").trim()}">${escape(text)}</a>`;
});
let globalStore = writable({
  navActive: false
});
const Burger_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".burger.svelte-1ymt360.svelte-1ymt360{margin-top:0.35rem;margin-left:1.25rem}.line.svelte-1ymt360.svelte-1ymt360{width:1.75rem;height:0.3125rem;background-color:white;margin-top:0.3125rem;transition:888ms linear}.burger.active.svelte-1ymt360 .line.svelte-1ymt360{background-color:black}.burger.active.svelte-1ymt360 .line.svelte-1ymt360,.active.svelte-1ymt360 .line.svelte-1ymt360:last-child{transition:all 0.5s linear}.active.svelte-1ymt360 .line.svelte-1ymt360:last-child{transform:translateX(6rem);opacity:0}.active.svelte-1ymt360 .line.svelte-1ymt360:first-of-type,.active.svelte-1ymt360 .line.svelte-1ymt360:nth-of-type(2){transition:transform 888ms linear}.active.svelte-1ymt360 .line.svelte-1ymt360:first-of-type{transform:rotate(50deg) translateY(7px)}.active.svelte-1ymt360 .line.svelte-1ymt360:nth-of-type(2){transform:rotate(-50deg) translateY(-8px)}",
  map: null
};
const Burger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  $$result.css.add(css$5);
  $$unsubscribe_globalStore();
  return `<div class="${["burger svelte-1ymt360", $globalStore.navActive ? "active" : ""].join(" ").trim()}"><div class="${"line svelte-1ymt360"}"></div>
    <div class="${"line svelte-1ymt360"}"></div>
    <div class="${"line svelte-1ymt360"}"></div></div>`;
});
const Menu_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "div.svelte-4dkgb5 .links.svelte-4dkgb5{display:flex}div.svelte-4dkgb5.svelte-4dkgb5{background-color:white;position:absolute;top:0;height:100vh;width:100vw;z-index:80}div.svelte-4dkgb5 h4.svelte-4dkgb5{text-align:center;color:#ff5e57}div.svelte-4dkgb5 .links.svelte-4dkgb5{justify-content:center;align-items:center;flex-direction:column;color:black}",
  map: null
};
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $$unsubscribe_globalStore;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => value);
  let active = $page.url.pathname;
  $$result.css.add(css$4);
  $$unsubscribe_page();
  $$unsubscribe_globalStore();
  return `<div class="${"menu svelte-4dkgb5"}"><div class="${"links svelte-4dkgb5"}"><h4 class="${"svelte-4dkgb5"}">Select a Level</h4>
        ${each(links, (link, i) => {
    return `${validate_component(Link, "Link").$$render(
      $$result,
      {
        text: link.text,
        href: link.href,
        menu: true,
        active
      },
      {},
      {}
    )}`;
  })}</div></div>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "header.svelte-tmpy9e .burger.svelte-tmpy9e{display:flex}header.svelte-tmpy9e.svelte-tmpy9e{display:flex;margin-top:0.75rem;margin-left:0.8rem;z-index:80}header.svelte-tmpy9e a.svelte-tmpy9e{text-decoration:none;transition:all 888ms linear;top:-0.05rem;z-index:5;color:#093259;position:relative;width:max-content}header.svelte-tmpy9e .links.svelte-tmpy9e{display:none;justify-content:space-evenly;width:100%;position:relative;top:-0.1rem}@media(min-width: 769px){header.svelte-tmpy9e .links.svelte-tmpy9e{display:flex}}header.svelte-tmpy9e .burger.svelte-tmpy9e{position:absolute;right:1rem;top:0;width:3.4375rem;height:35px;justify-content:center;align-items:center}@media(min-width: 769px){header.svelte-tmpy9e .burger.svelte-tmpy9e{display:none}}.menu.svelte-tmpy9e.svelte-tmpy9e{z-index:70;height:100%;width:100%;inset:0;position:absolute}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  let active = $page.url.pathname || "/portfolio";
  $$result.css.add(css$3);
  $$unsubscribe_page();
  $$unsubscribe_globalStore();
  return `<header class="${"svelte-tmpy9e"}"><div class="${"burger svelte-tmpy9e"}">${validate_component(Burger, "Burger").$$render($$result, {}, {}, {})}</div>
    <a href="${"/"}" class="${"svelte-tmpy9e"}">B-J-H</a>

    <div class="${"links svelte-tmpy9e"}">${each(links, (link, i) => {
    return `${validate_component(Link, "Link").$$render($$result, Object.assign({}, link, { active }), {}, {})}`;
  })}</div></header>

${$globalStore.navActive ? `<div class="${"menu svelte-tmpy9e"}">${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})}</div>` : ``}`;
});
const Cloud_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: 'div.svelte-teodc{transform:scale(0.35);background:rgba(255, 255, 255, 0.4);margin-top:3rem;box-shadow:0 10px 2px rgba(0, 0, 0, 0.1111);position:relative;height:35px;width:210px;pointer-events:none}div.svelte-teodc::before,div.svelte-teodc::after{background:rgba(255, 255, 255, 0.4);content:"";position:absolute}div.svelte-teodc::after{height:6.25rem;left:1.875rem;top:-50px;width:6.25rem}div.svelte-teodc:before{height:3.125rem;left:6.8rem;top:-2rem;width:4.0625rem}',
  map: null
};
const Cloud = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { time } = $$props;
  if ($$props.time === void 0 && $$bindings.time && time !== void 0)
    $$bindings.time(time);
  $$result.css.add(css$2);
  return `<div style="${"animation: animateCloud " + escape(time, true) + "s linear infinite"}" class="${"svelte-teodc"}"></div>`;
});
const Sun_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.svelte-3nuaw1{height:2.5rem;width:2.5rem;background-color:#fff700;position:absolute;left:12rem;top:0rem}@media(min-width: 769px){div.svelte-3nuaw1{left:unset;right:2.5rem;top:0.25rem}}",
  map: null
};
const Sun = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"svelte-3nuaw1"}"></div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-wb3b9r{display:flex;flex-direction:column;overflow-y:auto;overflow-x:hidden;background:#44a4e9;height:100vh;max-height:100%;width:100%}main.hidden.svelte-wb3b9r{overflow:hidden}.clouds.svelte-wb3b9r{display:flex;position:relative;top:15rem;left:-22%;width:100%;height:max-content;pointer-events:none}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  $$result.css.add(css);
  $$unsubscribe_globalStore();
  return `<main class="${["svelte-wb3b9r", $globalStore.navActive === true ? "hidden" : ""].join(" ").trim()}">${validate_component(Sun, "Sun").$$render($$result, {}, {}, {})}
	${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	<div class="${"clouds svelte-wb3b9r"}">${validate_component(Cloud, "Cloud").$$render($$result, { time: 35 }, {}, {})}
		${validate_component(Cloud, "Cloud").$$render($$result, { time: 27 }, {}, {})}
		${validate_component(Cloud, "Cloud").$$render($$result, { time: 34 }, {}, {})}
		${validate_component(Cloud, "Cloud").$$render($$result, { time: 51 }, {}, {})}
		${validate_component(Cloud, "Cloud").$$render($$result, { time: 40 }, {}, {})}</div>
	
	<div class="${"clouds svelte-wb3b9r"}">${validate_component(Cloud, "Cloud").$$render($$result, { time: 33 }, {}, {})}
		${validate_component(Cloud, "Cloud").$$render($$result, { time: 44 }, {}, {})}
		${validate_component(Cloud, "Cloud").$$render($$result, { time: 55 }, {}, {})}
		${validate_component(Cloud, "Cloud").$$render($$result, { time: 49 }, {}, {})}
		${validate_component(Cloud, "Cloud").$$render($$result, { time: 27 }, {}, {})}
		${validate_component(Cloud, "Cloud").$$render($$result, { time: 34 }, {}, {})}</div>
	${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
