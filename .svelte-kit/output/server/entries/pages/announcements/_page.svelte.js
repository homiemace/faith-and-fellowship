import { c as create_ssr_component, e as each, d as escape, b as add_attribute } from "../../../chunks/ssr.js";
const css = {
  code: ".cross.svelte-154mmu{animation:none}@media(max-width:640px){h1.svelte-154mmu{font-size:2rem}}@media(min-width:640px){h1.svelte-154mmu{font-size:3rem}}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">function getRandomDelay() {\\n  return Math.random() * 3;\\n}\\nfunction getRandomSize() {\\n  return Math.random() * 40 + 30;\\n}\\nfunction getRandomTop() {\\n  return Math.random() * 80;\\n}\\nfunction getRandomLeft() {\\n  return Math.random() * 80;\\n}\\nconst announcements = [\\n  {\\n    date: \\"10th Oct 2022\\",\\n    title: \\"First Announcement\\",\\n    tags: [\\"Snippet\\", \\"JavaScript\\"]\\n  },\\n  {\\n    date: \\"15th Oct 2022\\",\\n    title: \\"Second Announcement\\",\\n    tags: [\\"Update\\", \\"Svelte\\"]\\n  },\\n  {\\n    date: \\"20th Oct 2022\\",\\n    title: \\"Third Announcement\\",\\n    tags: [\\"News\\", \\"API\\"]\\n  },\\n  {\\n    date: \\"25th Oct 2022\\",\\n    title: \\"Fourth Announcement\\",\\n    tags: [\\"Event\\", \\"Community\\"]\\n  },\\n  {\\n    date: \\"30th Oct 2022\\",\\n    title: \\"Fifth Announcement\\",\\n    tags: [\\"Reminder\\", \\"Newsletter\\"]\\n  },\\n  {\\n    date: \\"5th Nov 2022\\",\\n    title: \\"Sixth Announcement\\",\\n    tags: [\\"Launch\\", \\"Features\\"]\\n  },\\n  {\\n    date: \\"10th Nov 2022\\",\\n    title: \\"Seventh Announcement\\",\\n    tags: [\\"Survey\\", \\"Feedback\\"]\\n  },\\n  {\\n    date: \\"15th Nov 2022\\",\\n    title: \\"Eighth Announcement\\",\\n    tags: [\\"Promotion\\", \\"Deals\\"]\\n  },\\n  {\\n    date: \\"20th Nov 2022\\",\\n    title: \\"Ninth Announcement\\",\\n    tags: [\\"Holiday\\", \\"Events\\"]\\n  },\\n  {\\n    date: \\"25th Nov 2022\\",\\n    title: \\"Tenth Announcement\\",\\n    tags: [\\"Thanksgiving\\", \\"Community\\"]\\n  }\\n];\\n<\/script>\\r\\n\\r\\n<div\\r\\n  class=\\"w-full min-h-screen flex flex-col relative overflow-hidden bg-gray-900\\"\\r\\n>\\r\\n  <div class=\\"absolute inset-0 overflow-hidden\\">\\r\\n    {#each Array(8) as _, index}\\r\\n      <svg\\r\\n        class=\\"cross absolute transition-transform duration-300 ease-in-out hover:scale-110\\"\\r\\n        style=\\"animation-delay: {getRandomDelay()}s; width: {getRandomSize()}px; top: {getRandomTop()}%; left: {getRandomLeft()}%; max-width: none; max-height: none; filter: blur(4px); opacity: 0.4;\\"\\r\\n        version=\\"1.1\\"\\r\\n        xmlns=\\"http://www.w3.org/2000/svg\\"\\r\\n        viewBox=\\"0 0 81 117\\"\\r\\n        data-index={index}\\r\\n      >\\r\\n        <polygon\\r\\n          fill=\\"#fff\\"\\r\\n          points=\\"81 27 54 27 54 0 27 0 27 27 0 27 0 54 27 54 27 117 54 117 54 54 81 54 81 27\\"\\r\\n        />\\r\\n      </svg>\\r\\n    {/each}\\r\\n  </div>\\r\\n\\r\\n  <div class=\\"container mx-auto px-4 py-8 relative z-10 flex-grow\\">\\r\\n    <h1 class=\\"text-white text-3xl font-bold select-none text-center mb-8 pt-16\\">\\r\\n      Announcements\\r\\n    </h1>\\r\\n\\r\\n    <div class=\\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8\\">\\r\\n      {#each announcements as { date, title, tags }, index}\\r\\n        <!-- Update to use announcement objects -->\\r\\n        <article\\r\\n          class=\\"rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition-all select-none duration-300 ease-in-out hover:shadow-md hover:scale-105\\"\\r\\n        >\\r\\n          <div\\r\\n            class=\\"rounded-lg bg-white p-4 h-full flex flex-col justify-between dark:bg-gray-900\\"\\r\\n          >\\r\\n            <time\\r\\n              datetime={date}\\r\\n              class=\\"block text-xs text-gray-500 dark:text-gray-400\\"\\r\\n              >{date}</time\\r\\n            >\\r\\n            <a href=\\"/\\">\\r\\n              <h3\\r\\n                class=\\"mt-1 text-lg font-medium text-gray-900 dark:text-white\\"\\r\\n              >\\r\\n                {title}\\r\\n              </h3>\\r\\n            </a>\\r\\n            <div class=\\"mt-2 flex flex-wrap gap-1\\">\\r\\n              {#each tags as tag}\\r\\n                <span\\r\\n                  class=\\"whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-brand dark:bg-brand dark:text-purple-100\\"\\r\\n                  >{tag}</span\\r\\n                >\\r\\n              {/each}\\r\\n            </div>\\r\\n          </div>\\r\\n        </article>\\r\\n      {/each}\\r\\n    </div>\\r\\n  </div>\\r\\n</div>\\r\\n\\r\\n<style>.cross{animation:none}@media (max-width:640px){h1{font-size:2rem}}@media (min-width:640px){h1{font-size:3rem}}</style>\\r\\n"],"names":[],"mappings":"AAgIO,oBAAM,CAAC,UAAU,IAAI,CAAC,MAAO,WAAW,KAAK,CAAC,CAAC,gBAAE,CAAC,UAAU,IAAI,CAAC,CAAC,MAAO,WAAW,KAAK,CAAC,CAAC,gBAAE,CAAC,UAAU,IAAI,CAAC"}'
};
function getRandomDelay() {
  return Math.random() * 3;
}
function getRandomSize() {
  return Math.random() * 40 + 30;
}
function getRandomTop() {
  return Math.random() * 80;
}
function getRandomLeft() {
  return Math.random() * 80;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const announcements = [
    {
      date: "10th Oct 2022",
      title: "First Announcement",
      tags: ["Snippet", "JavaScript"]
    },
    {
      date: "15th Oct 2022",
      title: "Second Announcement",
      tags: ["Update", "Svelte"]
    },
    {
      date: "20th Oct 2022",
      title: "Third Announcement",
      tags: ["News", "API"]
    },
    {
      date: "25th Oct 2022",
      title: "Fourth Announcement",
      tags: ["Event", "Community"]
    },
    {
      date: "30th Oct 2022",
      title: "Fifth Announcement",
      tags: ["Reminder", "Newsletter"]
    },
    {
      date: "5th Nov 2022",
      title: "Sixth Announcement",
      tags: ["Launch", "Features"]
    },
    {
      date: "10th Nov 2022",
      title: "Seventh Announcement",
      tags: ["Survey", "Feedback"]
    },
    {
      date: "15th Nov 2022",
      title: "Eighth Announcement",
      tags: ["Promotion", "Deals"]
    },
    {
      date: "20th Nov 2022",
      title: "Ninth Announcement",
      tags: ["Holiday", "Events"]
    },
    {
      date: "25th Nov 2022",
      title: "Tenth Announcement",
      tags: ["Thanksgiving", "Community"]
    }
  ];
  $$result.css.add(css);
  return `<div class="w-full min-h-screen flex flex-col relative overflow-hidden bg-gray-900"><div class="absolute inset-0 overflow-hidden">${each(Array(8), (_, index) => {
    return `<svg class="cross absolute transition-transform duration-300 ease-in-out hover:scale-110 svelte-154mmu" style="${"animation-delay: " + escape(getRandomDelay(), true) + "s; width: " + escape(getRandomSize(), true) + "px; top: " + escape(getRandomTop(), true) + "%; left: " + escape(getRandomLeft(), true) + "%; max-width: none; max-height: none; filter: blur(4px); opacity: 0.4;"}" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 117"${add_attribute("data-index", index, 0)}><polygon fill="#fff" points="81 27 54 27 54 0 27 0 27 27 0 27 0 54 27 54 27 117 54 117 54 54 81 54 81 27"></polygon></svg>`;
  })}</div> <div class="container mx-auto px-4 py-8 relative z-10 flex-grow"><h1 class="text-white text-3xl font-bold select-none text-center mb-8 pt-16 svelte-154mmu" data-svelte-h="svelte-1yha9p6">Announcements</h1> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">${each(announcements, ({ date, title, tags }, index) => {
    return ` <article class="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition-all select-none duration-300 ease-in-out hover:shadow-md hover:scale-105"><div class="rounded-lg bg-white p-4 h-full flex flex-col justify-between dark:bg-gray-900"><time${add_attribute("datetime", date, 0)} class="block text-xs text-gray-500 dark:text-gray-400">${escape(date)}</time> <a href="/"><h3 class="mt-1 text-lg font-medium text-gray-900 dark:text-white">${escape(title)} </h3></a> <div class="mt-2 flex flex-wrap gap-1">${each(tags, (tag) => {
      return `<span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-brand dark:bg-brand dark:text-purple-100">${escape(tag)}</span>`;
    })} </div></div> </article>`;
  })}</div></div> </div>`;
});
export {
  Page as default
};
