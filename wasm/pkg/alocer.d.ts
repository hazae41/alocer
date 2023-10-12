/* tslint:disable */
/* eslint-disable */
/**
* @param {Memory} bytes
* @returns {string}
*/
export function base58_encode(bytes: Memory): string;
/**
* @param {string} text
* @returns {Memory}
*/
export function base58_decode(text: string): Memory;
/**
* @param {Memory} bytes
* @returns {string}
*/
export function base64_encode_unpadded(bytes: Memory): string;
/**
* @param {string} text
* @returns {Memory}
*/
export function base64_decode_unpadded(text: string): Memory;
/**
* @param {Memory} bytes
* @returns {string}
*/
export function base64url_encode_padded(bytes: Memory): string;
/**
* @param {string} text
* @returns {Memory}
*/
export function base64url_decode_padded(text: string): Memory;
/**
* @param {Memory} bytes
* @returns {string}
*/
export function base16_encode_lower(bytes: Memory): string;
/**
* @param {Memory} bytes
* @returns {string}
*/
export function base16_encode_upper(bytes: Memory): string;
/**
* @param {string} text
* @returns {Memory}
*/
export function base16_decode_mixed(text: string): Memory;
/**
* @param {string} text
* @returns {Memory}
*/
export function base16_decode_lower(text: string): Memory;
/**
* @param {string} text
* @returns {Memory}
*/
export function base16_decode_upper(text: string): Memory;
/**
* @param {Memory} bytes
* @returns {string}
*/
export function base64_encode_padded(bytes: Memory): string;
/**
* @param {string} text
* @returns {Memory}
*/
export function base64_decode_padded(text: string): Memory;
/**
* @param {Memory} bytes
* @returns {string}
*/
export function base64url_encode_unpadded(bytes: Memory): string;
/**
* @param {string} text
* @returns {Memory}
*/
export function base64url_decode_unpadded(text: string): Memory;
/**
*/
export class Memory {
  [Symbol.dispose](): void
  free(): void;
/**
* @param {Uint8Array} inner
*/
  constructor(inner: Uint8Array);
/**
* @returns {number}
*/
  ptr(): number;
/**
* @returns {number}
*/
  len(): number;

  /**
   * Free on next tick
   **/
  freeNextTick(): Memory

  /**
   * Get the bytes in memory
   **/
  get bytes(): Uint8Array

  /**
   * Copy the bytes and free them
   **/
  copyAndDispose(): Uint8Array
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly base58_encode: (a: number, b: number) => void;
  readonly base58_decode: (a: number, b: number, c: number) => void;
  readonly __wbg_memory_free: (a: number) => void;
  readonly memory_new: (a: number, b: number) => number;
  readonly memory_ptr: (a: number) => number;
  readonly memory_len: (a: number) => number;
  readonly base64_encode_unpadded: (a: number, b: number) => void;
  readonly base64_decode_unpadded: (a: number, b: number, c: number) => void;
  readonly base64url_encode_padded: (a: number, b: number) => void;
  readonly base64url_decode_padded: (a: number, b: number, c: number) => void;
  readonly base16_encode_lower: (a: number, b: number) => void;
  readonly base16_encode_upper: (a: number, b: number) => void;
  readonly base16_decode_mixed: (a: number, b: number, c: number) => void;
  readonly base16_decode_lower: (a: number, b: number, c: number) => void;
  readonly base16_decode_upper: (a: number, b: number, c: number) => void;
  readonly base64_encode_padded: (a: number, b: number) => void;
  readonly base64_decode_padded: (a: number, b: number, c: number) => void;
  readonly base64url_encode_unpadded: (a: number, b: number) => void;
  readonly base64url_decode_unpadded: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
