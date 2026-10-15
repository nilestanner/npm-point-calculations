## 2024-10-15 - [Faster Distance Calculation]
**Learning:** `Math.hypot` is mathematically robust but noticeably slower (10-20x) in V8 compared to a manual `Math.sqrt(dx * dx + dy * dy)`.
**Action:** Always prefer `Math.sqrt(dx * dx + dy * dy)` over `Math.hypot` in hot paths when potential overflow/underflow is not a concern, especially in 2D graphic/distance operations.
