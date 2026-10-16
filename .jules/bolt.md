## 2024-10-16 - Math.hypot performance overhead
**Learning:** `Math.hypot` in V8 handles complex edge cases (scaling inputs to prevent underflow/overflow), making it significantly slower (~20x in benchmarks) than `Math.sqrt(dx*dx + dy*dy)`.
**Action:** When calculating distance in performance-critical code where coordinates aren't extremely large or small, prefer `Math.sqrt(dx*dx + dy*dy)` over `Math.hypot`.
