pub fn clamp_angle(angle: f64) -> f64 {
    angle.rem_euclid(360.0)
}
