## 2024-10-22 - Point model tests
**Learning:** The `Point` model class in TypeScript had 0% coverage. This occurred because functions accepting a `Point` parameter were being tested using structurally compatible inline object literals (e.g., `{x: 0, y: 0}`) instead of instantiating the actual `Point` class. This works in TS due to structural typing, but leaves the class constructor itself untested.
**Action:** Always ensure model classes with constructors are explicitly instantiated in tests, even if structural typing allows object literals, to guarantee full code coverage.
