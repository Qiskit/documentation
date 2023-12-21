---
title: evaluate_with_result
description: API reference for qiskit.aqua.operators.legacy.MatrixOperator.evaluate_with_result
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.legacy.MatrixOperator.evaluate_with_result
---

# evaluate\_with\_result

<span id="qiskit.aqua.operators.legacy.MatrixOperator.evaluate_with_result" />

`MatrixOperator.evaluate_with_result(result, statevector_mode=True, use_simulator_snapshot_mode=None, circuit_name_prefix='')`

Use the executed result with operator to get the evaluated value.

**Parameters**

*   **result** (*qiskit.Result*) – the result from the backend
*   **statevector\_mode** (*bool*) – mode
*   **use\_simulator\_snapshot\_mode** (*bool*) – uses simulator operator mode
*   **circuit\_name\_prefix** (*str, optional*) – a prefix of circuit name

**Returns**

the mean value float: the standard deviation

**Return type**

float

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – if Operator is empty

