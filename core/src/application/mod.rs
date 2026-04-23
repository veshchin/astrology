use crate::domain::AstroWindow;
use crate::math::clamp_angle;

pub fn status() -> String {
    let sample = AstroWindow::new("Sun", 2_460_000.5, clamp_angle(123.45));

    format!(
        "astro-core ready: body={} jd={:.1} lon={:.2}",
        sample.body, sample.julian_day, sample.longitude
    )
}
