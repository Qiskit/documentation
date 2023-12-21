---
title: from_operator
description: API reference for qiskit.quantum_info.SparsePauliOp.from_operator
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.SparsePauliOp.from_operator
---

# from\_operator

<span id="qiskit.quantum_info.SparsePauliOp.from_operator" />

`static SparsePauliOp.from_operator(obj, atol=None, rtol=None)`

Construct from an Operator objector.

Note that the cost of this contruction is exponential as it involves taking inner products with every element of the N-qubit Pauli basis.

**Parameters**

*   **obj** ([*Operator*](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – an N-qubit operator.
*   **atol** (*float*) – Optional. Absolute tolerance for checking if coefficients are zero (Default: 1e-8).
*   **rtol** (*float*) – Optinoal. relative tolerance for checking if coefficients are zero (Default: 1e-5).

**Returns**

the SparsePauliOp representation of the operator.

**Return type**

[SparsePauliOp](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")

**Raises**

**QiskitError** – if the input operator is not an N-qubit operator.

