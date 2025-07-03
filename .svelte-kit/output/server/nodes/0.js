

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DxP5HdPN.js","_app/immutable/chunks/NZTpNUN0.js","_app/immutable/chunks/BYAblVNE.js"];
export const stylesheets = [];
export const fonts = [];
