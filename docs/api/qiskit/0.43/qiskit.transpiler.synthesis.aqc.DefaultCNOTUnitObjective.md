---
title: DefaultCNOTUnitObjective
description: API reference for qiskit.transpiler.synthesis.aqc.DefaultCNOTUnitObjective
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.synthesis.aqc.DefaultCNOTUnitObjective
---

# DefaultCNOTUnitObjective

<span id="qiskit.transpiler.synthesis.aqc.DefaultCNOTUnitObjective" />

`DefaultCNOTUnitObjective(num_qubits, cnots)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/transpiler/synthesis/aqc/cnot_unit_objective.py "view source code")

Bases: [`CNOTUnitObjective`](qiskit.transpiler.synthesis.aqc.CNOTUnitObjective "qiskit.transpiler.synthesis.aqc.cnot_unit_objective.CNOTUnitObjective")

A naive implementation of the objective function based on CNOT units.

**Parameters**

*   **num\_qubits** (*int*) – number of qubits.
*   **cnots** ([*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.25)")) – a CNOT structure to be used in the optimization procedure.

## Methods Defined Here

<span id="qiskit-transpiler-synthesis-aqc-defaultcnotunitobjective-gradient" />

### gradient

<span id="qiskit.transpiler.synthesis.aqc.DefaultCNOTUnitObjective.gradient" />

`DefaultCNOTUnitObjective.gradient(param_values)`

Computes a gradient with respect to parameters given a vector of parameter values.

**Parameters**

**param\_values** ([*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.25)")) – a vector of parameter values for the optimization problem.

**Returns**

an array of gradient values.

**Return type**

[*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.25)")

<span id="qiskit-transpiler-synthesis-aqc-defaultcnotunitobjective-objective" />

### objective

<span id="qiskit.transpiler.synthesis.aqc.DefaultCNOTUnitObjective.objective" />

`DefaultCNOTUnitObjective.objective(param_values)`

Computes a value of the objective function given a vector of parameter values.

**Parameters**

**param\_values** ([*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.25)")) – a vector of parameter values for the optimization problem.

**Returns**

a float value of the objective function.

**Return type**

float

## Attributes

<span id="qiskit.transpiler.synthesis.aqc.DefaultCNOTUnitObjective.num_cnots" />

### num\_cnots

Returns: A number of CNOT units to be used by the approximate circuit.

<span id="qiskit.transpiler.synthesis.aqc.DefaultCNOTUnitObjective.num_thetas" />

### num\_thetas

Returns: Number of parameters (angles) of rotation gates in this circuit.

<span id="qiskit.transpiler.synthesis.aqc.DefaultCNOTUnitObjective.target_matrix" />

### target\_matrix

Returns: a matrix being approximated

