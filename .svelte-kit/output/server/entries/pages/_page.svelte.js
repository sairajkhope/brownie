import { y as bind_props, v as pop, t as push, z as ensure_array_like, A as attr_class, x as escape_html } from "../../chunks/index.js";
function Scene($$payload, $$props) {
  push();
  let modelUrl = $$props["modelUrl"];
  $$payload.out += `<canvas class="svelte-mp83rb"></canvas>`;
  bind_props($$props, { modelUrl });
  pop();
}
function _page($$payload) {
  const brownieRenders = [
    { id: 1, name: "Render 1", url: "/Highres_Brownie.glb" },
    { id: 2, name: "Render 2", url: "/Highres_Brownie_couple.glb" }
  ];
  let selectedRender = brownieRenders[0];
  const each_array = ensure_array_like(brownieRenders);
  $$payload.out += `<main><div class="viewport"><!---->`;
  {
    Scene($$payload, { modelUrl: selectedRender.url });
  }
  $$payload.out += `<!----></div> <div class="controls svelte-1ieh1xj"><h1>Brownie Viewer</h1> <p>Select a render to view:</p> <div class="button-group svelte-1ieh1xj"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let render = each_array[$$index];
    $$payload.out += `<button${attr_class("svelte-1ieh1xj", void 0, { "active": selectedRender.id === render.id })}>${escape_html(render.name)}</button>`;
  }
  $$payload.out += `<!--]--></div></div></main>`;
}
export {
  _page as default
};
