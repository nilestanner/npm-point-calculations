## 2024-10-22 - Math.hypot vs Math.sqrt
**Learning:** Math.hypot is significantly slower (up to 50x) than calculating the differences, multiplying them, and using Math.sqrt(dx*dx + dy*dy).
**Action:** Avoid using Math.hypot for simple 2D distance calculations in performance-critical paths. Use Math.sqrt with manual multiplication instead.
