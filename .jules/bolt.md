## 2024-05-24 - Math.hypot Performance Bottleneck in V8
**Learning:** `Math.hypot` is surprisingly slow in V8/Node.js compared to a manual `Math.sqrt(dx * dx + dy * dy)` implementation. A simple benchmark showed a ~70x slowdown when using `Math.hypot`.
**Action:** When calculating Euclidean distance in performance-critical geometric calculations in V8/Node.js, prefer manual `Math.sqrt` of the sum of squares over `Math.hypot`.
