## 2023-10-27 - Math.hypot vs Math.sqrt performance in V8
**Learning:** In V8/Node.js, `Math.hypot(dx, dy)` is significantly slower (around 50x-60x) than calculating the hypotenuse manually using `Math.sqrt(dx * dx + dy * dy)`. While `Math.hypot` handles edge cases like overflow/underflow automatically, for standard cartesian coordinate calculations where these extremes are unlikely, the manual approach is vastly more performant.
**Action:** Replace `Math.hypot` with `Math.sqrt(dx * dx + dy * dy)` in high-frequency distance calculation functions to achieve massive performance gains, provided the inputs do not risk floating-point overflow.

## 2023-10-27 - Math.sqrt vs Math.hypot overflow/underflow edge cases
**Learning:** While `Math.sqrt(dx*dx + dy*dy)` is faster than `Math.hypot` in V8, it introduces overflow and underflow for valid finite coordinates (e.g., dx=1e200 results in Infinity, dx=1e-200 results in 0). `Math.hypot` handles these edge cases safely and correctly.
**Action:** Preserve `Math.hypot` for distance calculations to maintain correctness and prevent regressions with extreme coordinate values, even if it comes at a performance cost. Do not sacrifice mathematical correctness for micro-optimizations.
