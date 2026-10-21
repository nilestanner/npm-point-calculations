## 2024-05-18 - Math.hypot Performance Bottleneck
**Learning:** `Math.hypot` is significantly slower (up to 30x in microbenchmarks) than `Math.sqrt(dx*dx + dy*dy)` due to its internal complexity of handling multiple arguments, preventing overflow/underflow, and ensuring high precision for arbitrary inputs.
**Action:** Use `Math.sqrt(dx*dx + dy*dy)` for simple 2D distance calculations where extreme values causing overflow/underflow are not a concern, as it yields a massive performance improvement.
