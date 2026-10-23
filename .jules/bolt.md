
## 2024-05-24 - Replace Math.hypot with Math.sqrt
**Learning:** Math.hypot is significantly slower (around 10x slower) than manual Math.sqrt(dx * dx + dy * dy) in V8/Node.js, making it a performance bottleneck in frequently called calculation functions.
**Action:** Use Math.sqrt for calculating distances or magnitudes instead of Math.hypot when performance is critical.
