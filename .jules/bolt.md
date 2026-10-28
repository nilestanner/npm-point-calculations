
## 2024-05-24 - Replace Math.hypot with Math.sqrt
**Learning:** Math.hypot is significantly slower (around 10x slower) than manual Math.sqrt(dx * dx + dy * dy) in V8/Node.js, making it a performance bottleneck in frequently called calculation functions.
**Action:** Use Math.sqrt for calculating distances or magnitudes instead of Math.hypot when performance is critical.

## 2024-05-24 - Math.hypot vs Math.sqrt overflow/underflow
**Learning:** While Math.sqrt(dx*dx + dy*dy) is much faster than Math.hypot, it is unsafe because it can introduce overflow (e.g. for large finite numbers like dx=1e200 returning Infinity) and underflow (e.g. for small finite numbers like dx=1e-200 returning 0). Math.hypot is designed specifically to prevent these edge cases.
**Action:** Do not replace Math.hypot with manual pythagorean calculations in library code where the full range of floating point numbers must be supported. Performance optimizations must not break mathematical correctness for edge cases.
