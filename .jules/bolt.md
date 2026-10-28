## 2026-10-26 - Math.sqrt vs Math.hypot performance
**Learning:** For performance-critical geometric calculations in V8/Node.js, manual Math.sqrt(dx * dx + dy * dy) is significantly faster than Math.hypot(dx, dy) (measured ~21x faster in micro-benchmark).
**Action:** Always prefer manual Math.sqrt(dx * dx + dy * dy) when calculating distance between points in Node.js instead of Math.hypot.
## 2026-10-28 - Math.sqrt vs Math.hypot overflow/underflow
**Learning:** Replacing Math.hypot with Math.sqrt(dx*dx + dy*dy) introduces overflow (returns Infinity for dx=1e200) and underflow (returns 0 for dx=1e-200) for valid finite coordinates.
**Action:** Preserve Math.hypot for distance calculations to ensure precision with extreme coordinate values, avoiding manual sqrt implementations that are vulnerable to underflow/overflow.
