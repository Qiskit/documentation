---
title: decomp1
description: API reference for qiskit.quantum_info.TwoQubitBasisDecomposer.decomp1
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.TwoQubitBasisDecomposer.decomp1
---

# decomp1

<span id="qiskit.quantum_info.TwoQubitBasisDecomposer.decomp1" />

`TwoQubitBasisDecomposer.decomp1(target)`

Decompose target \~Ud(x, y, z) with 1 uses of the basis gate \~Ud(a, b, c). Result Ur has trace: .. math:

```python
|Tr(Ur.Utarget^dag)| = 4|cos(x-a)cos(y-b)cos(z-c) + j sin(x-a)sin(y-b)sin(z-c)|
```

which is optimal for all targets and bases with z==0 or c==0

