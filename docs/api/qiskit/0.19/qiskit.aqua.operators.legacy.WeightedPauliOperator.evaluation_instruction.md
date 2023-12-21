---
title: evaluation_instruction
description: API reference for qiskit.aqua.operators.legacy.WeightedPauliOperator.evaluation_instruction
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.legacy.WeightedPauliOperator.evaluation_instruction
---

# evaluation\_instruction

<span id="qiskit.aqua.operators.legacy.WeightedPauliOperator.evaluation_instruction" />

`WeightedPauliOperator.evaluation_instruction(statevector_mode, use_simulator_snapshot_mode=False)`

**Parameters**

*   **statevector\_mode** (*bool*) – will it be run on statevector simulator or not
*   **use\_simulator\_snapshot\_mode** (*bool*) – will it use qiskit aer simulator operator mode

**Returns**

Pauli-instruction pair.

**Return type**

dict

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – if Operator is empty

