## 2026-10-17 - Math.hypot Performance in V8
**Learning:** `Math.hypot(dx, dy)` is significantly slower (~50x in benchmarks) than `Math.sqrt(dx * dx + dy * dy)` in modern V8 engines. While `Math.hypot` avoids underflow/overflow by scaling internally, for standard 2D UI/Canvas coordinates, the overhead of this safety check and arbitrary argument length handling outweighs the benefit.
**Action:** Default to `Math.sqrt(dx * dx + dy * dy)` for 2D cartesian distance calculations when dealing with typical pixel/coordinate values where overflow/underflow is not a practical concern.
