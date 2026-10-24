## 2024-10-24 - Model interfaces lack test coverage
**Learning:** `models/point.ts` is not directly covered in the tests, but it's an interface and testing interfaces in TypeScript without logic doesn't directly increase branch/func coverage but relies on structural typing. However, when we run `nyc npm test`, we see missing lines in `index.ts`, specifically lines 4-9. I need to check what is in lines 4-9 of `index.ts`.
**Action:** Always check exact line numbers in the coverage report against the source code to find the real gaps.
## 2024-10-24 - Precision loss bug in rotatePoint
**Learning:** Geometric calculation functions like `rotatePoint` in this codebase suffer from a precision loss bug due to the use of `Math.round`. Testing with non-cardinal angles (e.g., 45 degrees or `Math.PI / 4`) exposed these precision and rounding flaws.
**Action:** When a test reveals a bug, mark the test as expected-to-fail/skipped (e.g., `it.skip`) with a comment explaining the bug instead of asserting against the flawed logic, and document it in the Pull Request.
