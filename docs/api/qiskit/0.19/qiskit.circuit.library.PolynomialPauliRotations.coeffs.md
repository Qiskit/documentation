---
title: coeffs
description: API reference for qiskit.circuit.library.PolynomialPauliRotations.coeffs
in_page_toc_min_heading_level: 1
python_api_type: property
python_api_name: qiskit.circuit.library.PolynomialPauliRotations.coeffs
---

# coeffs

<span id="qiskit.circuit.library.PolynomialPauliRotations.coeffs" />

`List[float]`

The multiplicative factor in the rotation angle of the controlled rotations.

The rotation angles are `slope * 2^0`, `slope * 2^1`, … , `slope * 2^(n-1)` where `n` is the number of state qubits.

**Return type**

`List`\[`float`]

**Returns**

The rotation angle common in all controlled rotations.

