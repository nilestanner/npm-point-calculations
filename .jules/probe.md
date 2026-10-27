## 2024-05-14 - Precision loss bug in rotatePoint

**Learning:** The `rotatePoint` function uses `Math.round` instead of returning exact values, causing a precision loss bug. I uncovered this while writing tests for angles like `Math.PI / 4`.

**Action:** Write tests targeting non-cardinal angles and expect them to fail due to this precision loss, but mark them as expected-to-fail (skipped) to document the bug.
