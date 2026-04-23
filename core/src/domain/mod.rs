#[derive(Debug, Clone, PartialEq)]
pub struct AstroWindow {
    pub body: &'static str,
    pub julian_day: f64,
    pub longitude: f64,
}

impl AstroWindow {
    pub fn new(body: &'static str, julian_day: f64, longitude: f64) -> Self {
        Self {
            body,
            julian_day,
            longitude,
        }
    }
}
