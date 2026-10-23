## 2026-10-23 - Uncovered Model Classes due to Structural Typing
**Learning:** In TypeScript codebases, relying purely on structural typing (object literals like `{x: 5, y: 5}`) instead of class instantiation in tests can leave model constructors completely uncovered, masking potential issues.
**Action:** Always explicitly instantiate model classes (e.g., `new Point(x, y)`) or add specific constructor test blocks to ensure complete coverage for classes.
## 2026-10-23 - Precision Bug in Rotation Logic
**Learning:** Using Math.round in geometric calculations like point rotation causes unintended precision loss and distorts distance when using non-cardinal angles, which was discovered via manual terminal execution while exploring boundary values.
**Action:** Always write boundary tests with non-cardinal values (e.g., 45 degrees instead of just 90) for mathematical and geometric transformations to catch hard-coded rounding or precision flaws.
