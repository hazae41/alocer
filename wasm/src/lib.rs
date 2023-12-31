#![no_std]

extern crate alloc;

pub mod base16;
pub mod base58;
pub mod base64;
pub mod base64_unpadded;
pub mod base64url;
pub mod base64url_unpadded;

use alloc::vec::Vec;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Memory {
    pub(crate) inner: Vec<u8>,
}

#[wasm_bindgen]
impl Memory {
    #[wasm_bindgen(constructor)]
    pub fn new(inner: Vec<u8>) -> Memory {
        Memory { inner }
    }

    #[wasm_bindgen]
    pub fn ptr(&self) -> *const u8 {
        self.inner.as_ptr()
    }

    #[wasm_bindgen]
    pub fn len(&self) -> usize {
        self.inner.len()
    }
}
