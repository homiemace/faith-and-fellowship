

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.DKnqGBkR.js","_app/immutable/chunks/scheduler.DWBu5tsU.js","_app/immutable/chunks/index.frEX2zQP.js"];
export const stylesheets = [];
export const fonts = [];
