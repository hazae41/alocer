extern crate alloc;

use alloc::{string::String, vec::Vec};

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn base58_encode(bytes: &[u8]) -> String {
    bs58::encode(bytes).into_string()
}

#[wasm_bindgen]
pub fn base58_decode(text: &str) -> Result<Vec<u8>, JsError> {
    bs58::decode(text)
        .into_vec()
        .map_err(|_| JsError::new("base58_decode"))
}
