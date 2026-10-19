## 2025-01-20 - Prevent NaN propagation via division by zero
**Vulnerability:** A division by zero vulnerability in `findPointOnLine` where `distanceFromStart / fullDistance` would result in `NaN` if `startPoint` and `endPoint` are the same, which could propagate `NaN` values and cause downstream logic errors or denial of service.
**Learning:** Mathematical utility functions that divide by calculated lengths must explicitly check for zero lengths, as inputs might evaluate to mathematically undefined or singular conditions.
**Prevention:** Always check denominators for zero (or very near zero, e.g. using `Number.EPSILON` for floating point comparisons if necessary) before performing division in coordinate/geometric calculations.
