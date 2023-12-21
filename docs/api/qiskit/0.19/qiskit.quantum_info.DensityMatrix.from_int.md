---
title: from_int
description: API reference for qiskit.quantum_info.DensityMatrix.from_int
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.DensityMatrix.from_int
---

# from\_int

<span id="qiskit.quantum_info.DensityMatrix.from_int" />

`static DensityMatrix.from_int(i, dims)`

Return a computational basis state density matrix.

**Parameters**

*   **i** (*int*) – the basis state element.
*   **dims** (*int or tuple or list*) – The subsystem dimensions of the statevector (See additional information).

**Returns**

The computational basis state $|i\rangle\!\langle i|$.

**Return type**

[DensityMatrix](qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix")

## Additional Information:

The `dims` kwarg can be an integer or an iterable of integers.

*   `Iterable` – the subsystem dimensions are the values in the list with the total number of subsystems given by the length of the list.
*   `Int` – the integer specifies the total dimension of the state. If it is a power of two the state will be initialized as an N-qubit state. If it is not a power of two the state will have a single d-dimensional subsystem.

