import * as server from '../entries/pages/portfolio/_page.server.ts.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/portfolio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/portfolio/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.2444688d.js","_app/immutable/chunks/index.d3d7413e.js","_app/immutable/chunks/Button.7667cde9.js","_app/immutable/chunks/Me.a840c11b.js","_app/immutable/chunks/Dialog.03ff3753.js"];
export const stylesheets = ["_app/immutable/assets/4.75119701.css","_app/immutable/assets/Button.d4f61084.css","_app/immutable/assets/Me.e2e7e0c2.css","_app/immutable/assets/Dialog.760dfbe4.css"];
export const fonts = [];
