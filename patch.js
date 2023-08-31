import { readFileSync, rmSync, writeFileSync } from "fs";

const wasm = readFileSync("./wasm/pkg/alocer_bg.wasm");
writeFileSync(`./wasm/pkg/alocer.wasm.js`, `export const wasm = "${wasm.toString("base64")}";`);
writeFileSync(`./wasm/pkg/alocer.wasm.d.ts`, `export const wasm: string;`);

const script = readFileSync(`./wasm/pkg/alocer.js`, "utf8")
  .replace("input = new URL('alocer_bg.wasm', import.meta.url);", "throw new Error();")
  .replaceAll("wasm.__wbindgen_free(r0, r1 * 1);", "")
  .replaceAll("getArrayU8FromWasm0(r0, r1).slice()", "new Slice((r0 >>> 0) / 1, r1)")
  .replaceAll("@returns {Uint8Array}", "@returns {Slice}")

const typing = readFileSync(`./wasm/pkg/alocer.d.ts`, "utf8")
  .replace("export default function init", "export function init")
  .replaceAll("@returns {Uint8Array}", "@returns {Slice}")
  .replaceAll(": Uint8Array;", ": Slice;")

const sliceJs = `
export class Slice {

  /**
   * @param {number} ptr 
   * @param {number} len 
   */
  constructor(ptr, len) {
    this.ptr = ptr
    this.len = len
  }

  /**
   * @returns {Uint8Array}
   */
  get bytes() {
    return getUint8Memory0().subarray(this.ptr, this.ptr + this.len)
  }

}`

const sliceTs = `
export class Slice {

  readonly ptr: number

  readonly len: number

  constructor(ptr: number, len: number);

  get bytes(): Uint8Array

}`

writeFileSync(`./wasm/pkg/alocer.js`, script + sliceJs)
writeFileSync(`./wasm/pkg/alocer.d.ts`, typing + sliceTs)

rmSync(`./wasm/pkg/.gitignore`, { force: true });