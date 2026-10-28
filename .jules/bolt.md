## 2024-10-22 - Caching property access and repeated subtractions
**Learning:** In highly repeated mathematical calculations, redundantly performing object property access (e.g. `rotatingPoint.x`) and subtractions takes a measurable toll on performance.
**Action:** Extract repeated coordinate difference calculations (`dx`, `dy`) into local variables. This avoids multiple property lookups and arithmetic operations, leading to ~4x speedup in operations like 2D point rotation.
