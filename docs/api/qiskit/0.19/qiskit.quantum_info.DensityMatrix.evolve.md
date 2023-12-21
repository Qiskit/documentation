---
title: evolve
description: API reference for qiskit.quantum_info.DensityMatrix.evolve
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.DensityMatrix.evolve
---

# evolve

<span id="qiskit.quantum_info.DensityMatrix.evolve" />

`DensityMatrix.evolve(other, qargs=None)`

Evolve a quantum state by an operator.

**Parameters**

*   **QuantumChannel** (*other (Operator or*) – or Instruction or Circuit): The operator to evolve by.
*   **qargs** (*list*) – a list of QuantumState subsystem positions to apply the operator on.

**Returns**

the output quantum state.

**Return type**

QuantumState

**Raises**

**QiskitError** – if the operator dimension does not match the specified QuantumState subsystem dimensions.

