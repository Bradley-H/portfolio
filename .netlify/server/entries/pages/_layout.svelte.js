import { c as create_ssr_component, a as add_attribute, e as escape, b as subscribe, d as each, v as validate_component } from "../../chunks/index3.js";
import { w as writable } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
import { B as Button } from "../../chunks/Button.js";
/* empty css                   */let links = [
  { text: "About me", href: "/" },
  { text: "Portfolio", href: "/portfolio" }
];
const Link_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: 'a.svelte-19hbdpp{text-decoration:none;color:#093259;font-weight:300;position:relative}a.svelte-19hbdpp:hover{color:lightGray}a.menu.svelte-19hbdpp{color:black}a.active.svelte-19hbdpp::before{content:"";display:flex;position:absolute;background-image:url("/finger.png");height:2.1875rem;width:2.1875rem;transform:rotate(90deg) scale(1.2);top:-0.25rem;left:-3rem;z-index:4;background-repeat:no-repeat}',
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
    "svelte-19hbdpp",
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
  return `<div class="${["burger svelte-1ymt360", $globalStore.navActive ? "active" : ""].join(" ").trim()}"><div class="line svelte-1ymt360"></div>
    <div class="line svelte-1ymt360"></div>
    <div class="line svelte-1ymt360"></div></div>`;
});
const Menu_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "div.svelte-1ek187t .links.svelte-1ek187t{display:flex}div.svelte-1ek187t.svelte-1ek187t{background-color:white;position:absolute;top:0;height:100vh;width:100vw;z-index:80}div.svelte-1ek187t h4.svelte-1ek187t{text-align:center;color:#ff5e57}div.svelte-1ek187t .links.svelte-1ek187t{justify-content:center;align-items:center;flex-direction:column;color:black;gap:3rem}",
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
  return `<div class="menu svelte-1ek187t"><div class="links svelte-1ek187t"><h4 class="svelte-1ek187t">Select a Level</h4>
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
  })}
        ${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: "./Resume.pdf",
      icon: "fas fa-file-pdf",
      text: "Resume"
    },
    {},
    {}
  )}</div></div>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".menu.svelte-13ec50m.svelte-13ec50m,header.svelte-13ec50m .burger.svelte-13ec50m,header.svelte-13ec50m .links.svelte-13ec50m,header.svelte-13ec50m a.svelte-13ec50m{position:absolute}header.svelte-13ec50m .burger.svelte-13ec50m{display:flex}header.svelte-13ec50m.svelte-13ec50m{display:flex;margin-left:0.75rem;z-index:80;transform:translateY(0.4rem);width:100%;height:2.1875rem}header.svelte-13ec50m a.svelte-13ec50m{text-decoration:none;transition:all 888ms linear;top:-0.05rem;z-index:5;color:#093259;width:max-content;margin-top:0.5625rem}header.svelte-13ec50m .links.svelte-13ec50m{display:none;justify-content:space-evenly;align-items:center;width:100%;top:-0.1rem}@media(min-width: 1025px){header.svelte-13ec50m .links.svelte-13ec50m{display:flex}}header.svelte-13ec50m .links div.svelte-13ec50m{margin:0 1rem}header.svelte-13ec50m .burger.svelte-13ec50m{right:1rem;top:-0.3125rem;width:3.4375rem;height:35px;justify-content:center;align-items:center}@media(min-width: 1025px){header.svelte-13ec50m .burger.svelte-13ec50m{display:none}}.menu.svelte-13ec50m.svelte-13ec50m{z-index:70;height:100%;width:100%;inset:0}",
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
  return `<header class="svelte-13ec50m"><div class="burger svelte-13ec50m">${validate_component(Burger, "Burger").$$render($$result, {}, {}, {})}</div>
    <a href="/" class="svelte-13ec50m">B-J-H</a>

    <div class="links svelte-13ec50m">${each(links, (link, i) => {
    return `<div class="svelte-13ec50m">${validate_component(Link, "Link").$$render($$result, Object.assign({}, link, { active }), {}, {})}
        </div>`;
  })}
        ${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: "./Resume.pdf",
      icon: "fas fa-file-pdf",
      text: "Resume"
    },
    {},
    {}
  )}</div></header>

${$globalStore.navActive ? `<div class="menu svelte-13ec50m">${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})}</div>` : ``}`;
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
  return `<div style="${"animation: animateCloud " + escape(time, true) + "s linear infinite"}" class="svelte-teodc"></div>`;
});
const Sun_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.svelte-vbm0y0{height:2.5rem;width:2.5rem;background-color:#fff700;position:absolute;left:12rem;top:0rem}@media(min-width: 769px){div.svelte-vbm0y0{left:unset;right:4rem;top:0.25rem}}",
  map: null
};
const Sun = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="svelte-vbm0y0"></div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1djy55f{display:flex;flex-direction:column;overflow-y:auto;overflow-x:hidden;background:#44a4e9;width:100%}main.hidden.svelte-1djy55f{overflow:hidden}.clouds.svelte-1djy55f{display:flex;position:relative;top:15rem;left:-22%;width:100%;height:max-content;pointer-events:none}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  $$result.css.add(css);
  $$unsubscribe_globalStore();
  return `<main class="${["svelte-1djy55f", $globalStore.navActive === true ? "hidden" : ""].join(" ").trim()}">${validate_component(Sun, "Sun").$$render($$result, {}, {}, {})}
	${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	<div class="clouds svelte-1djy55f">${validate_component(Cloud, "Cloud").$$render($$result, { time: 35 }, {}, {})}
		${validate_component(Cloud, "Cloud").$$render($$result, { time: 27 }, {}, {})}
		${validate_component(Cloud, "Cloud").$$render($$result, { time: 34 }, {}, {})}
		${validate_component(Cloud, "Cloud").$$render($$result, { time: 51 }, {}, {})}
		${validate_component(Cloud, "Cloud").$$render($$result, { time: 40 }, {}, {})}</div>
	
	<div class="clouds svelte-1djy55f">${validate_component(Cloud, "Cloud").$$render($$result, { time: 33 }, {}, {})}
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
