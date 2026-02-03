use wasm_bindgen :: prelude :: *;
pub mod math;

#[wasm_bindgen]
pub fn calculate(operation: &str, a: f64, b: f64) -> Result<f64, String> {
    match operation {
        "add" => Ok(math::operations::add(a, b)),
        "subtract" => Ok(math::operations::subtract(a, b)),
        "multiply" => Ok(math::operations::multiply(a, b)),
        "divide" => {
            math::operations::divide(a, b)
                .ok_or("Division by zero".to_string())
        }
        _ => Err("Invalid operation".to_string()),
    }
}