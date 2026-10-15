## 2026-10-15 - NaN Poisoning Prevented
**Vulnerability:** `findPointOnLine` could return `NaN` coordinates if `startPoint` and `endPoint` were identical due to division by zero.
**Learning:** Mathematical utility functions that perform division must always validate for zero divisors, as `NaN` values can silently propagate through JS applications and cause unexpected behavior or crashes (DoS).
**Prevention:** Explicitly check for zero distance and return a safe fallback (the original point) before performing division.
