import * as server from '../entries/pages/portfolio/_item_/_page.server.ts.js';

export const index = 5;
export const component = async () => (await import('../entries/pages/portfolio/_item_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/portfolio/[item]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.c32c7177.js","_app/immutable/chunks/index.d3d7413e.js","_app/immutable/chunks/Dialog.d8fdc785.js","_app/immutable/chunks/Button.7667cde9.js"];
export const stylesheets = ["_app/immutable/assets/5.1e35ca95.css","_app/immutable/assets/styles.82d6f922.css","_app/immutable/assets/Dialog.3aa71190.css","_app/immutable/assets/Button.d4f61084.css"];
export const fonts = [];
