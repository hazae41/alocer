export * from "../../../wasm/pkg/alocer.js";

// @deno-types="../../../wasm/pkg/alocer.d.ts"
import { __wbg_init, InitOutput } from "../../../wasm/pkg/alocer.js";
import { data } from "../../../wasm/pkg/alocer.wasm.js";

let output: InitOutput | undefined = undefined

export async function initBundledOnce() {
  return output ??= await __wbg_init(data)
}