## 2026-10-20 - Math.hypot Performance in Node.js
**Learning:** Math.hypot is significantly slower (up to 35x slower) than manual Math.sqrt(dx*dx + dy*dy) in Node.js and standard JavaScript implementations for 2D distances, due to its internal complexity handling any number of arguments and avoiding overflow/underflow.
**Action:** When calculating 2D distance where coordinates are typical numbers (not at the extremes of precision), always prefer manual Math.sqrt over Math.hypot for better performance.
