extern crate alloc;

use alloc::{string::String, vec::Vec};

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn base64_encode(bytes: &[u8]) -> String {
    use base64ct::{Base64, Encoding};

    Base64::encode_string(bytes)
}

#[wasm_bindgen]
pub fn base64_decode(text: &str) -> Result<Vec<u8>, JsError> {
    use base64ct::{Base64, Encoding};

    Base64::decode_vec(text).map_err(|_| JsError::new("base64_decode"))
}
