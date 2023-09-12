extern crate alloc;

use alloc::{string::String, vec::Vec};

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn base64url_encode_unpadded(bytes: &[u8]) -> String {
    use base64ct::{Base64UrlUnpadded, Encoding};

    Base64UrlUnpadded::encode_string(bytes)
}

#[wasm_bindgen]
pub fn base64url_decode_unpadded(text: &str) -> Result<Vec<u8>, JsError> {
    use base64ct::{Base64UrlUnpadded, Encoding};

    Base64UrlUnpadded::decode_vec(text).map_err(|_| JsError::new("base64url_decode_unpadded"))
}
