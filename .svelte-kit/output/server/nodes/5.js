

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/bible-search/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.C1Kx9P0M.js","_app/immutable/chunks/scheduler.DWBu5tsU.js","_app/immutable/chunks/index.frEX2zQP.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/5.Cte3FcrA.css"];
export const fonts = [];
