## 2024-05-18 - Math.hypot Performance Bottleneck
**Learning:** `Math.hypot` is significantly slower (up to 30x in microbenchmarks) than `Math.sqrt(dx*dx + dy*dy)` due to its internal complexity of handling multiple arguments, preventing overflow/underflow, and ensuring high precision for arbitrary inputs.
**Action:** Use `Math.sqrt(dx*dx + dy*dy)` for simple 2D distance calculations where extreme values causing overflow/underflow are not a concern, as it yields a massive performance improvement.
## 2024-05-18 - Math.hypot Performance Bottleneck (Reverted)
**Learning:** While `Math.hypot` is slower than `Math.sqrt(dx*dx + dy*dy)`, replacing it introduces overflow (`Infinity` for 1e200) and underflow (`0` for 1e-200) for valid finite coordinates. The internal complexity of `Math.hypot` is precisely to prevent these issues.
**Action:** Do not replace `Math.hypot` with simple Pythagorean calculations if the system must support extreme floating point numbers. The performance cost is necessary for correctness in those domains.
