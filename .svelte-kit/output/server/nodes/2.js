import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.BjDkBpTK.js","_app/immutable/chunks/scheduler.DWBu5tsU.js","_app/immutable/chunks/index.frEX2zQP.js"];
export const stylesheets = ["_app/immutable/assets/2.0jlZbNyf.css","_app/immutable/assets/tailwind.BIIF_rBG.css"];
export const fonts = [];
