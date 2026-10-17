## 2025-02-24 - Division by Zero in point calculation
**Vulnerability:** `NaN` propagation vulnerability in `findPointOnLine` when `startPoint` and `endPoint` are identical due to division by zero (CWE-369).
**Learning:** Mathematical functions lacking defensive checks for identical points or zero-distance values can propagate `NaN`/`Infinity` across applications, leading to unhandled exceptions and possible Denial of Service.
**Prevention:** Always validate distance or divisor variables before performing division operations, particularly in point geometry calculations where zero distance is structurally possible.
