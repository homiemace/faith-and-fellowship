import { c as create_ssr_component, e as each, b as add_attribute, d as escape, f as null_to_empty, g as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
/* empty css                    */
const css = {
  code: '.glow-effect.svelte-i3d395.svelte-i3d395{transition:filter .3s ease}.glow-effect.active.svelte-i3d395.svelte-i3d395{filter:drop-shadow(0 0 5px #ffffff69) drop-shadow(0 0 5px #ffffff6b)}.dropdown.svelte-i3d395 .overflow-y-auto.svelte-i3d395{scrollbar-width:none}.dropdown.svelte-i3d395 .overflow-y-auto.svelte-i3d395::-webkit-scrollbar{display:none}.transition-all.svelte-i3d395.svelte-i3d395{transition:max-height .5s ease,opacity .5s ease}a.svelte-i3d395.svelte-i3d395{display:inline-block;padding:8px 12px;position:relative}a.svelte-i3d395.svelte-i3d395:before{background-color:#7a288a;bottom:0;content:"";height:2px;left:0;position:absolute;transform:scaleX(0);transition:transform .3s ease;width:0}a.svelte-i3d395.svelte-i3d395:hover:before{transform:scaleX(1);width:100%}',
  map: '{"version":3,"file":"header.svelte","sources":["header.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nlet navLinks = [\\n  { name: \\"Home\\", href: \\"/\\" },\\n  { name: \\"About\\", href: \\"/about\\" },\\n  { name: \\"Announcements\\", href: \\"/announcements\\" },\\n  { name: \\"Verse Search\\", href: \\"/bible-search\\" },\\n  { name: \\"Contact\\", href: \\"/contact\\" }\\n];\\nlet showMenu = false;\\nfunction toggleMenu() {\\n  showMenu = !showMenu;\\n}\\nonMount(() => {\\n  function closeMenu(event) {\\n    const target = event.target;\\n    if (!target.closest(\\".dropdown\\")) {\\n      showMenu = false;\\n    }\\n  }\\n  document.addEventListener(\\"click\\", closeMenu);\\n  return () => {\\n    document.removeEventListener(\\"click\\", closeMenu);\\n  };\\n});\\n<\/script>\\r\\n\\r\\n<div class=\\"relative z-20 dropdown\\">\\r\\n  <header\\r\\n    class=\\"flex justify-end items-center p-6 bg-brand text-white select-none font-sans shadow-md md:shadow-lg\\"\\r\\n    style=\\"font-family: \'Muli\', sans-serif;\\"\\r\\n  >\\r\\n    <div class=\\"flex items-center space-x-4\\">\\r\\n      <nav class=\\"hidden md:flex space-x-4\\">\\r\\n        {#each navLinks as link}\\r\\n          <a\\r\\n            href={link.href}\\r\\n            class=\\"text-white hover:text-brandSecondary transition duration-200\\"\\r\\n            >{link.name}</a\\r\\n          >\\r\\n        {/each}\\r\\n      </nav>\\r\\n\\r\\n      <button\\r\\n        class=\\"hamburger md:hidden\\"\\r\\n        on:click|preventDefault={toggleMenu}\\r\\n        aria-label=\\"Toggle Menu\\"\\r\\n      >\\r\\n        <svg\\r\\n          fill=\\"#ffffff\\"\\r\\n          height=\\"32\\"\\r\\n          width=\\"32\\"\\r\\n          xmlns=\\"http://www.w3.org/2000/svg\\"\\r\\n          viewBox=\\"0 0 81 117\\"\\r\\n          class={`glow-effect ${showMenu ? \\"active\\" : \\"\\"}`}\\r\\n          style=\\"filter: ${showMenu\\r\\n            ? \'drop-shadow(0 0 10px rgba(255, 255, 255, 0.7))\'\\r\\n            : \'none\'};\\"\\r\\n        >\\r\\n          <polygon\\r\\n            points=\\"81 27 54 27 54 0 27 0 27 27 0 27 0 54 27 54 27 117 54 117 54 54 81 54 81 27\\"\\r\\n          />\\r\\n        </svg>\\r\\n      </button>\\r\\n    </div>\\r\\n  </header>\\r\\n\\r\\n  <div\\r\\n    class={`absolute top-full right-0 bg-brand shadow-lg z-30 transition-all duration-500 ease-in-out ${showMenu ? \\"max-h-60 opacity-100 overflow-y-auto pointer-events-auto\\" : \\"max-h-0 opacity-0 pointer-events-none\\"}`}\\r\\n    style=\\"width: auto; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;\\"\\r\\n  >\\r\\n    <div class=\\"flex flex-col\\">\\r\\n      {#each navLinks as link}\\r\\n        <a\\r\\n          href={link.href}\\r\\n          class=\\"text-white hover:text-brandSecondary transition duration-200 p-2 text-center\\"\\r\\n          >{link.name}</a\\r\\n        >\\r\\n      {/each}\\r\\n    </div>\\r\\n  </div>\\r\\n</div>\\r\\n\\r\\n<style>.glow-effect{transition:filter .3s ease}.glow-effect.active{filter:drop-shadow(0 0 5px #ffffff69) drop-shadow(0 0 5px #ffffff6b)}.dropdown .overflow-y-auto{scrollbar-width:none}.dropdown .overflow-y-auto::-webkit-scrollbar{display:none}.transition-all{transition:max-height .5s ease,opacity .5s ease}a{display:inline-block;padding:8px 12px;position:relative}a:before{background-color:#7a288a;bottom:0;content:\\"\\";height:2px;left:0;position:absolute;transform:scaleX(0);transition:transform .3s ease;width:0}a:hover:before{transform:scaleX(1);width:100%}</style>"],"names":[],"mappings":"AAkFO,wCAAY,CAAC,WAAW,MAAM,CAAC,GAAG,CAAC,IAAI,CAAC,YAAY,mCAAO,CAAC,OAAO,YAAY,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC,YAAY,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC,uBAAS,CAAC,8BAAgB,CAAC,gBAAgB,IAAI,CAAC,uBAAS,CAAC,8BAAgB,mBAAmB,CAAC,QAAQ,IAAI,CAAC,2CAAe,CAAC,WAAW,UAAU,CAAC,GAAG,CAAC,IAAI,CAAC,OAAO,CAAC,GAAG,CAAC,IAAI,CAAC,6BAAC,CAAC,QAAQ,YAAY,CAAC,QAAQ,GAAG,CAAC,IAAI,CAAC,SAAS,QAAQ,CAAC,6BAAC,OAAO,CAAC,iBAAiB,OAAO,CAAC,OAAO,CAAC,CAAC,QAAQ,EAAE,CAAC,OAAO,GAAG,CAAC,KAAK,CAAC,CAAC,SAAS,QAAQ,CAAC,UAAU,OAAO,CAAC,CAAC,CAAC,WAAW,SAAS,CAAC,GAAG,CAAC,IAAI,CAAC,MAAM,CAAC,CAAC,6BAAC,MAAM,OAAO,CAAC,UAAU,OAAO,CAAC,CAAC,CAAC,MAAM,IAAI"}'
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Announcements",
      href: "/announcements"
    },
    {
      name: "Verse Search",
      href: "/bible-search"
    },
    { name: "Contact", href: "/contact" }
  ];
  $$result.css.add(css);
  return `<div class="relative z-20 dropdown svelte-i3d395"><header class="flex justify-end items-center p-6 bg-brand text-white select-none font-sans shadow-md md:shadow-lg" style="font-family: 'Muli', sans-serif;"><div class="flex items-center space-x-4"><nav class="hidden md:flex space-x-4">${each(navLinks, (link) => {
    return `<a${add_attribute("href", link.href, 0)} class="text-white hover:text-brandSecondary transition duration-200 svelte-i3d395">${escape(link.name)}</a>`;
  })}</nav> <button class="hamburger md:hidden" aria-label="Toggle Menu"><svg fill="#ffffff" height="32" width="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 117" class="${escape(null_to_empty(`glow-effect ${""}`), true) + " svelte-i3d395"}" style="${"filter: $" + escape(
    "none",
    true
  ) + ";"}"><polygon points="81 27 54 27 54 0 27 0 27 27 0 27 0 54 27 54 27 117 54 117 54 54 81 54 81 27"></polygon></svg></button></div></header> <div class="${escape(
    null_to_empty(`absolute top-full right-0 bg-brand shadow-lg z-30 transition-all duration-500 ease-in-out ${"max-h-0 opacity-0 pointer-events-none"}`),
    true
  ) + " svelte-i3d395"}" style="width: auto; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;"><div class="flex flex-col">${each(navLinks, (link) => {
    return `<a${add_attribute("href", link.href, 0)} class="text-white hover:text-brandSecondary transition duration-200 p-2 text-center svelte-i3d395">${escape(link.name)}</a>`;
  })}</div></div> </div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentPage;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  currentPage = $page.url.pathname;
  $$unsubscribe_page();
  return `<div class="flex flex-col min-h-screen relative">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${currentPage === "/" ? `<div class="homepage-background absolute inset-0 z-0"></div>` : ``} <main class="flex-1 flex flex-col z-10 max-w-full p-4 md:p-8">${slots.default ? slots.default({}) : ``}</main> ${``} <footer class="bg-brand text-white flex flex-col md:flex-row items-center justify-between border-t border-white border-opacity-10 py-4 md:py-6 px-4 md:px-6 z-10"><div class="flex flex-col md:flex-row items-center justify-between w-full"><p class="text-center md:text-left mb-4 md:mb-0 text-sm md:text-base" data-svelte-h="svelte-1q6rdfy">© 2024 Faith &amp; Fellowship. All rights reserved.</p> <div class="flex space-x-6 items-center"><button class="social-icon text-white hover:text-brandSecondary transition-colors duration-200" aria-label="Copy code" data-svelte-h="svelte-1h2prjd"><svg class="w-8 h-8" viewBox="0 0 79.82 79.98" xmlns="http://www.w3.org/2000/svg"><path d="M32.93,70.5c-7.57.02-15.09-1.11-22.32-3.35,17.57,19.26,49.29,16.42,63.15-5.65-12.75,6.77-24.74,8.53-40.83,9.01Z" fill="currentColor"></path><path d="M33.51,61.8c21.9-.46,35.49-9.04,46.31-25.66C77.54,11.35,52.55-5.5,28.72,1.66,4.8,8.55-7.08,36.26,4.44,58.32c9.47,2.56,19.26,3.73,29.07,3.48ZM33.92,20.21c.08-.07.18-.11.28-.1h9.9c.16.05.34.04.49.13.08.05.15.11.2.18.1.13.2.26.28.4l6.26,11.81,6.21-11.81c.19-.42.48-.67.95-.71h9.9c.11,0,.22.03.3.1.07.06.12.15.12.24-.03.23-.17.44-.36.57-2.74,4.31-9.38,14.75-12.19,19.18v12.78c0,.72-.39,1.08-1.18,1.08h-7.69c-.6.07-1.15-.48-1.08-1.08v-12.82l-12.16-19.13c-.18-.13-.31-.35-.33-.57,0-.09.04-.18.1-.24ZM21.37,53.8c-3.24-.51-6.49-1.9-8.66-4.43-.66-.67-.82-1.95.05-2.51l3.35-2.97c.29-.27.71-.39,1.1-.32.46.18.88.44,1.23.78,1.24,1.09,2.81,1.75,4.41,2.12.26.06.52.1.78.12,1.41-.06,4.32.1,4.44-1.91.02-.36-.08-.73-.29-1.03-1.03-1.12-2.51-1.11-3.94-1.6-3.02-.71-6.14-1.81-8.34-4.09-2.27-2.42-2.79-6.41-1.26-9.35,2.79-4.76,9.2-5.49,14.2-4.79,2.93.46,5.57,2.03,7.7,4.05.25.22.41.53.45.86.01.27-.18.56-.58.86-1.39,1.02-2.54,1.88-3.84,3.04-.68.57-1.7.29-2.23-.35-1.09-1.14-2.73-1.49-4.25-1.52-1.04-.01-2.82.22-2.72,1.59.34,1.82,3.01,1.64,4.38,2.1,3.7,1.12,8.03,2.38,9.87,6.11.56,1.21.83,2.54.79,3.87-.01,8.19-10.03,10.5-16.63,9.36Z" fill="currentColor"></path></svg></button> <a href="https://www.instagram.com/417.faith.and.fellowship/" target="_blank" class="text-white hover:text-brandSecondary transition duration-200 text-3xl" aria-label="Visit our Instagram" data-svelte-h="svelte-1rch0c2"><i class="fa-brands fa-instagram"></i></a></div></div></footer></div>`;
});
export {
  Layout as default
};