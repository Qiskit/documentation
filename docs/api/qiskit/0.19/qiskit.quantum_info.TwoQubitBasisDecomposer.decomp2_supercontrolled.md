---
title: decomp2_supercontrolled
description: API reference for qiskit.quantum_info.TwoQubitBasisDecomposer.decomp2_supercontrolled
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.TwoQubitBasisDecomposer.decomp2_supercontrolled
---

# decomp2\_supercontrolled

<span id="qiskit.quantum_info.TwoQubitBasisDecomposer.decomp2_supercontrolled" />

`TwoQubitBasisDecomposer.decomp2_supercontrolled(target)`

Decompose target \~Ud(x, y, z) with 2 uses of the basis gate.

For supercontrolled basis \~Ud(pi/4, b, 0), all b, result Ur has trace .. math:

```python
|Tr(Ur.Utarget^dag)| = 4cos(z)
```

which is the optimal approximation for basis of CNOT-class `~Ud(pi/4, 0, 0)` or DCNOT-class `~Ud(pi/4, pi/4, 0)` and any target. May be sub-optimal for b!=0 (e.g. there exists exact decomposition for any target using B `B~Ud(pi/4, pi/8, 0)`, but not this decomposition.) This is an exact decomposition for supercontrolled basis and target `~Ud(x, y, 0)`. No guarantees for non-supercontrolled basis.

