---
title: encode
description: API reference for qiskit.optimization.converters.IsingToQuadraticProgram.encode
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.optimization.converters.IsingToQuadraticProgram.encode
---

# encode

<span id="qiskit.optimization.converters.IsingToQuadraticProgram.encode" />

`IsingToQuadraticProgram.encode(qubit_op, offset=0.0)`

Convert a qubit operator and a shift value into a quadratic program

**Parameters**

*   **qubit\_op** ([`WeightedPauliOperator`](qiskit.aqua.operators.legacy.WeightedPauliOperator "qiskit.aqua.operators.legacy.weighted_pauli_operator.WeightedPauliOperator")) – The qubit operator to be converted into a [`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")
*   **offset** (`float`) – The shift value of the qubit operator

**Return type**

[`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")

**Returns**

QuadraticProgram converted from the input qubit operator and the shift value

**Raises**

*   [**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If there are Pauli Xs in any Pauli term
*   [**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If there are more than 2 Pauli Zs in any Pauli term

