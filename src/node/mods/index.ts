export * from "../../../wasm/pkg/alocer.js";

import { InitOutput, initSync } from "../../../wasm/pkg/alocer.js";
import { wasm } from "../../../wasm/pkg/alocer.wasm.js";

let output: InitOutput | undefined = undefined

export function initSyncBundledOnce() {
  return output ??= initSync(Buffer.from(wasm, "base64"))
}

const base64_to_base64url_map: any = {
  "+": "-",
  "/": "_",
  "=": ""
}

export function base64_to_base64url(base64: string) {
  return base64.replaceAll(/[+\/=]/g, x => base64_to_base64url_map[x])
}

const base64url_to_base64_map: any = {
  "-": "+",
  "_": "/",
}

export function base64url_to_base64(base64url: string) {
  return base64url
    .replaceAll(/[-_]/g, x => base64url_to_base64_map[x])
    .padEnd(base64url.length + ((4 - (base64url.length % 4)) % 4))
}