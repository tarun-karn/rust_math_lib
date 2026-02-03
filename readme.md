# Rust Math Library – WebAssembly (WASM)

A simple math calculator built using **Rust**, compiled to **WebAssembly**, and executed in the browser with a clean HTML + JavaScript UI.

This project demonstrates how core Rust logic can be exposed to the web using `wasm-bindgen`, following real-world Rust → WASM best practices.

---

## Features

- Written in **Rust**
- Compiled to **WebAssembly (WASM)**
- Exposed to JavaScript using **wasm-bindgen**
- Interactive **web-based UI**
- Modular Rust code structure
- Safe error handling (e.g. division by zero)

---

## Supported Operations

- Addition
- Subtraction
- Multiplication
- Division (with error handling)

---

## Working Demo (Screenshots)

The following screenshots demonstrate the calculator running in the browser, with Rust logic executed via WebAssembly and results rendered on the UI.

### ➕ Addition
![Addition](./screenshots/add.png)

### ➖ Subtraction
![Subtraction](./screenshots/subtract.png)

### ✖️ Multiplication
![Multiplication](./screenshots/multiply.png)

### ➗ Division
![Division](./screenshots/divide.png)

---

## Project Structure
```text
rust_math_lib/
├── Cargo.toml
├── src/
│   ├── lib.rs              # WASM entry point
│   ├── main.rs             # CLI entry (optional)
│   └── math/
│       ├── mod.rs
│       └── operations.rs  # Core math logic
├── pkg/                    # Generated WASM output (wasm-pack)
│   ├── rust_math_lib.js
│   └── rust_math_lib_bg.wasm
├── index.html              # Web UI
├── index.js                # JS ↔ WASM bridge
├── screenshots/            # Demo screenshots
└── README.md


---

## Prerequisites

- Rust (stable)
- wasm-pack
- Python (for local server)

Install wasm-pack:

```bash
cargo install wasm-pack
````

---

## Build Instructions

From the project root:

```bash
wasm-pack build --target web
```

This generates the WASM files inside the `pkg/` directory.

---

## Run in Browser (Local)

```bash
python3 -m http.server
```

Open in browser:

```
http://localhost:8000
```

You will see a web-based calculator powered entirely by Rust + WebAssembly.

---

## WASM API

The following Rust function is exposed to JavaScript:

```rust
#[wasm_bindgen]
pub fn calculate(operation: &str, a: f64, b: f64) -> Result<f64, String>
```

### Example (JavaScript)

```js
calculate("add", 10, 5);      // 15
calculate("divide", 10, 0);   // Error: Division by zero
```

---

## Learning Outcomes

* Rust module organization
* Difference between `lib.rs` and `main.rs`
* Compiling Rust to WebAssembly
* JavaScript ↔ Rust interoperability
* Error handling across language boundaries
