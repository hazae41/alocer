extern crate alloc;

use alloc::{string::String, vec::Vec};

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn base64url_encode_padded(bytes: &[u8]) -> String {
    use base64ct::{Base64Url, Encoding};

    Base64Url::encode_string(bytes)
}

#[wasm_bindgen]
pub fn base64url_decode_padded(text: &str) -> Result<Vec<u8>, JsError> {
    use base64ct::{Base64Url, Encoding};

    Base64Url::decode_vec(text).map_err(|_| JsError::new("base64url_decode_padded"))
}
