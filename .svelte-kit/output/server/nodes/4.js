

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/announcements/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.CWgnmp-j.js","_app/immutable/chunks/scheduler.DWBu5tsU.js","_app/immutable/chunks/index.frEX2zQP.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/4.C30OhpAx.css"];
export const fonts = [];
