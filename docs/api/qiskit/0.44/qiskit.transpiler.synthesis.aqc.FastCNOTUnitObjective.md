---
title: FastCNOTUnitObjective
description: API reference for qiskit.transpiler.synthesis.aqc.FastCNOTUnitObjective
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.synthesis.aqc.FastCNOTUnitObjective
---

# FastCNOTUnitObjective

<span id="qiskit.transpiler.synthesis.aqc.FastCNOTUnitObjective" />

`qiskit.transpiler.synthesis.aqc.FastCNOTUnitObjective(num_qubits, cnots)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/transpiler/synthesis/aqc/fast_gradient/fast_gradient.py "view source code")

Bases: [`CNOTUnitObjective`](qiskit.transpiler.synthesis.aqc.CNOTUnitObjective "qiskit.transpiler.synthesis.aqc.cnot_unit_objective.CNOTUnitObjective")

Implementation of objective function and gradient calculator, which is similar to `DefaultCNOTUnitObjective` but several times faster.

**Parameters**

*   **num\_qubits** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – number of qubits.
*   **cnots** ([*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.26)")) – a CNOT structure to be used in the optimization procedure.

## Attributes

<span id="qiskit.transpiler.synthesis.aqc.FastCNOTUnitObjective.num_cnots" />

### num\_cnots

Returns: A number of CNOT units to be used by the approximate circuit.

<span id="qiskit.transpiler.synthesis.aqc.FastCNOTUnitObjective.num_thetas" />

### num\_thetas

Returns: Number of parameters (angles) of rotation gates in this circuit.

<span id="qiskit.transpiler.synthesis.aqc.FastCNOTUnitObjective.target_matrix" />

### target\_matrix

Returns: a matrix being approximated

## Methods

### gradient

<span id="qiskit.transpiler.synthesis.aqc.FastCNOTUnitObjective.gradient" />

`gradient(param_values)`

Computes the gradient of objective function. See description of the base class method.

**Return type**

[*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.26)")

### objective

<span id="qiskit.transpiler.synthesis.aqc.FastCNOTUnitObjective.objective" />

`objective(param_values)`

Computes the objective function and some intermediate data for the subsequent gradient computation. See description of the base class method.

**Return type**

[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")

