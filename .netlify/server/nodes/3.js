import * as server from '../entries/pages/_page.server.ts.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.e5f2032d.js","_app/immutable/chunks/index.d3d7413e.js","_app/immutable/chunks/Me.a840c11b.js","_app/immutable/chunks/Dialog.d8fdc785.js"];
export const stylesheets = ["_app/immutable/assets/3.8d2d39c9.css","_app/immutable/assets/Me.e2e7e0c2.css","_app/immutable/assets/Dialog.3aa71190.css"];
export const fonts = [];
