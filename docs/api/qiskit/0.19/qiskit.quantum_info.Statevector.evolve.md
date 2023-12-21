---
title: evolve
description: API reference for qiskit.quantum_info.Statevector.evolve
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.Statevector.evolve
---

# evolve

<span id="qiskit.quantum_info.Statevector.evolve" />

`Statevector.evolve(other, qargs=None)`

Evolve a quantum state by the operator.

**Parameters**

*   **other** ([*Operator*](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – The operator to evolve by.
*   **qargs** (*list*) – a list of Statevector subsystem positions to apply the operator on.

**Returns**

the output quantum state.

**Return type**

[Statevector](qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")

**Raises**

**QiskitError** – if the operator dimension does not match the specified Statevector subsystem dimensions.

