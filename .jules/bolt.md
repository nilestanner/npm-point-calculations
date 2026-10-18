## 2024-10-18 - Avoid Math.hypot for simple 2D distances
**Learning:** `Math.hypot` is designed to handle arbitrary numbers of arguments and prevent overflow/underflow, which makes it significantly slower (~40x slower in Node.js) than standard Pythagorean calculation (`Math.sqrt(dx*dx + dy*dy)`) for basic 2D distances.
**Action:** Use `Math.sqrt(dx*dx + dy*dy)` instead of `Math.hypot` when calculating distance between two points in a standard 2D cartesian plane, provided extreme numbers that could cause overflow/underflow are not expected.
