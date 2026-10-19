## 2024-05-13 - Math.hypot vs Math.sqrt performance
**Learning:** `Math.hypot` is mathematically robust but carries significant performance overhead due to internal overflow/underflow checks. In typical 2D point operations, using `Math.sqrt(dx*dx + dy*dy)` is vastly faster (often 25x or more depending on runtime).
**Action:** Always prefer manual squaring and `Math.sqrt` for simple 2D or 3D point distance calculations where extreme coordinate sizes leading to overflow are not practically expected, as it is a common bottleneck in high-frequency calculations.
