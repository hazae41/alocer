
import type { Box, Copiable, Copied } from "@hazae41/box"

/* tslint:disable */
/* eslint-disable */
/**
* @param {Uint8Array} bytes
* @returns {string}
*/
export function base58_encode(bytes: Box<Copiable>): string;
/**
* @param {string} text
* @returns {Slice}
*/
export function base58_decode(text: string): Slice;
/**
* @param {Uint8Array} bytes
* @returns {string}
*/
export function base64url_encode_padded(bytes: Box<Copiable>): string;
/**
* @param {string} text
* @returns {Slice}
*/
export function base64url_decode_padded(text: string): Slice;
/**
* @param {Uint8Array} bytes
* @returns {string}
*/
export function base64_encode_unpadded(bytes: Box<Copiable>): string;
/**
* @param {string} text
* @returns {Slice}
*/
export function base64_decode_unpadded(text: string): Slice;
/**
* @param {Uint8Array} bytes
* @returns {string}
*/
export function base64url_encode_unpadded(bytes: Box<Copiable>): string;
/**
* @param {string} text
* @returns {Slice}
*/
export function base64url_decode_unpadded(text: string): Slice;
/**
* @param {Uint8Array} bytes
* @returns {string}
*/
export function base64_encode_padded(bytes: Box<Copiable>): string;
/**
* @param {string} text
* @returns {Slice}
*/
export function base64_decode_padded(text: string): Slice;
/**
* @param {Uint8Array} bytes
* @returns {string}
*/
export function base16_encode_lower(bytes: Box<Copiable>): string;
/**
* @param {Uint8Array} bytes
* @returns {string}
*/
export function base16_encode_upper(bytes: Box<Copiable>): string;
/**
* @param {string} text
* @returns {Slice}
*/
export function base16_decode_mixed(text: string): Slice;
/**
* @param {string} text
* @returns {Slice}
*/
export function base16_decode_lower(text: string): Slice;
/**
* @param {string} text
* @returns {Slice}
*/
export function base16_decode_upper(text: string): Slice;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly base58_encode: (a: number, b: number, c: number) => void;
  readonly base58_decode: (a: number, b: number, c: number) => void;
  readonly base64url_encode_padded: (a: number, b: number, c: number) => void;
  readonly base64url_decode_padded: (a: number, b: number, c: number) => void;
  readonly base64_encode_unpadded: (a: number, b: number, c: number) => void;
  readonly base64_decode_unpadded: (a: number, b: number, c: number) => void;
  readonly base64url_encode_unpadded: (a: number, b: number, c: number) => void;
  readonly base64url_decode_unpadded: (a: number, b: number, c: number) => void;
  readonly base64_encode_padded: (a: number, b: number, c: number) => void;
  readonly base64_decode_padded: (a: number, b: number, c: number) => void;
  readonly base16_encode_lower: (a: number, b: number, c: number) => void;
  readonly base16_encode_upper: (a: number, b: number, c: number) => void;
  readonly base16_decode_mixed: (a: number, b: number, c: number) => void;
  readonly base16_decode_lower: (a: number, b: number, c: number) => void;
  readonly base16_decode_upper: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
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


export class Slice {

  readonly ptr: number

  readonly len: number

  constructor(ptr: number, len: number);

  /**
   * Free the bytes
   **/
  [Symbol.dispose](): void

  /**
   * Get the bytes in memory
   **/
  get bytes(): Uint8Array

  /**
   * Is the memory freed?
   **/
  get freed(): boolean

  /**
   * Free the bytes (do nothing if already freed)
   **/
  free(): void

  /**
   * Copy the bytes and free them
   **/
  copyAndDispose(): Copied

}