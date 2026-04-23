pub mod ffi;
pub mod service;

pub fn status() -> String {
    service::status()
}
