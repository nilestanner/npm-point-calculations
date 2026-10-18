## 2024-05-15 - Input Validation Missing in Math Calculations
**Vulnerability:** Core functions accepting `Point` objects and numbers lacked type and bounds validation, allowing `NaN`, `Infinity`, and potentially prototype pollution through unchecked inputs. Furthermore, division by zero was possible in `findPointOnLine`.
**Learning:** Math utility libraries are susceptible to propagation of invalid numeric states which can lead to unexpected application behavior or Denial of Service when processing corrupt input.
**Prevention:** Always validate inputs to mathematical functions ensuring correct types and finite numbers, and add bounds checks (like preventing division by zero).
