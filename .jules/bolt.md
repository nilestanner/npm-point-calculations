## 2026-10-26 - Math.sqrt vs Math.hypot performance
**Learning:** For performance-critical geometric calculations in V8/Node.js, manual Math.sqrt(dx * dx + dy * dy) is significantly faster than Math.hypot(dx, dy) (measured ~21x faster in micro-benchmark).
**Action:** Always prefer manual Math.sqrt(dx * dx + dy * dy) when calculating distance between points in Node.js instead of Math.hypot.
