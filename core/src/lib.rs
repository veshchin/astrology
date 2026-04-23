pub mod adapters;
pub mod application;
pub mod domain;
pub mod math;

pub fn status() -> String {
    application::status()
}
