export * from "../../../wasm/pkg/alocer.js";

import { InitOutput, initSync } from "../../../wasm/pkg/alocer.js";
import { wasm } from "../../../wasm/pkg/alocer.wasm.js";

let output: InitOutput | undefined = undefined

export function initSyncBundledOnce() {
  return output ??= initSync(Buffer.from(wasm, "base64"))
}