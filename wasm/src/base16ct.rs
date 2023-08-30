extern crate alloc;

use alloc::{string::String, vec::Vec};

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn base16ct_encode_lower(bytes: &[u8]) -> String {
    base16ct::lower::encode_string(bytes)
}

#[wasm_bindgen]
pub fn base16ct_encode_upper(bytes: &[u8]) -> String {
    base16ct::upper::encode_string(bytes)
}

#[wasm_bindgen]
pub fn base16ct_decode_mixed(text: &str) -> Result<Vec<u8>, JsError> {
    base16ct::mixed::decode_vec(text).map_err(|_| JsError::new("base16ct_decode_mixed"))
}

#[wasm_bindgen]
pub fn base16ct_decode_lower(text: &str) -> Result<Vec<u8>, JsError> {
    base16ct::lower::decode_vec(text).map_err(|_| JsError::new("base16ct_decode_lower"))
}

#[wasm_bindgen]
pub fn base16ct_decode_upper(text: &str) -> Result<Vec<u8>, JsError> {
    base16ct::upper::decode_vec(text).map_err(|_| JsError::new("base16ct_decode_upper"))
}
