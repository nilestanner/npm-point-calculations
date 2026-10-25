
## 2024-10-25 - Math.hypot performance bottleneck in V8
**Learning:** `Math.hypot` is significantly slower (up to 8x slower) in V8/Node.js compared to manually calculating the square root of the sum of squares (`Math.sqrt(dx * dx + dy * dy)`), despite `Math.hypot` being a built-in optimized function.
**Action:** For performance-critical geometric calculations (like distance formulas in hot paths), prefer manual `Math.sqrt` calculations over `Math.hypot`.
