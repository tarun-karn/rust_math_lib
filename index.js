import init, { calculate } from "./pkg/rust_math_lib.js";

const resultDiv = document.getElementById("result");
const btn = document.getElementById("calcBtn");

async function main() {
  await init();

  btn.addEventListener("click", () => {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const operation = document.getElementById("operation").value;

    if (isNaN(a) || isNaN(b)) {
      resultDiv.textContent = "Please enter valid numbers";
      resultDiv.className = "result error";
      return;
    }

    try {
      const res = calculate(operation, a, b);
      resultDiv.textContent = `Result: ${res}`;
      resultDiv.className = "result";
    } catch (err) {
      resultDiv.textContent = `${err}`;
      resultDiv.className = "result error";
    }
  });
}

main();
