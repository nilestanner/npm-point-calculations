## 2024-05-24 - Math.hypot Performance Bottleneck in V8
**Learning:** `Math.hypot` is surprisingly slow in V8/Node.js compared to a manual `Math.sqrt(dx * dx + dy * dy)` implementation. A simple benchmark showed a ~70x slowdown when using `Math.hypot`.
**Action:** When calculating Euclidean distance in performance-critical geometric calculations in V8/Node.js, prefer manual `Math.sqrt` of the sum of squares over `Math.hypot`.

## 2024-05-24 - Math.hypot Replacement Anti-Pattern
**Learning:** While manual `Math.sqrt(dx * dx + dy * dy)` is significantly faster than `Math.hypot` in V8/Node.js, it is an anti-pattern when dealing with extreme values. It introduces overflow (returning Infinity) for large valid numbers (e.g. 1e200) and underflow (returning 0) for small valid numbers (e.g. 1e-200). `Math.hypot` correctly handles these edge cases.
**Action:** Do not replace `Math.hypot` with `Math.sqrt` of sum of squares unless you can guarantee the inputs are strictly bounded to moderate ranges where under/overflow is impossible, and the performance gain is absolutely critical.
