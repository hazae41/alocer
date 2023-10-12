extern crate alloc;

use alloc::string::String;

use wasm_bindgen::prelude::*;

use crate::Memory;

#[wasm_bindgen]
pub fn base58_encode(bytes: &Memory) -> String {
    bs58::encode(&bytes.inner).into_string()
}

#[wasm_bindgen]
pub fn base58_decode(text: &str) -> Result<Memory, JsError> {
    bs58::decode(text)
        .into_vec()
        .map(Memory::new)
        .map_err(|_| JsError::new("base58_decode"))
}
