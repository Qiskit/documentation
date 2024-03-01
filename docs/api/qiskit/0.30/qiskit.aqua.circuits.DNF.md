---
title: DNF
description: API reference for qiskit.aqua.circuits.DNF
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.circuits.DNF
---

# DNF

<span id="qiskit.aqua.circuits.DNF" />

`DNF(ast, num_vars=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/circuits/boolean_logical_circuits.py "view source code")

Bases: `qiskit.aqua.circuits.boolean_logical_circuits.BooleanLogicNormalForm`

Class for constructing circuits for Disjunctive Normal Forms

Constructor.

**Parameters**

*   **ast** (*tuple*) – The logic expression as an Abstract Syntax Tree (AST) tuple
*   **num\_vars** (*int*) – Number of boolean variables

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input

## Methods

### compute\_num\_ancillae

<span id="qiskit.aqua.circuits.DNF.compute_num_ancillae" />

`DNF.compute_num_ancillae(mct_mode='basic')`

returns the number of ancillary qubits needed

### construct\_circuit

<span id="qiskit.aqua.circuits.DNF.construct_circuit" />

`DNF.construct_circuit(circuit=None, variable_register=None, clause_register=None, output_register=None, ancillary_register=None, mct_mode='basic')`

Construct circuit.

**Parameters**

*   **circuit** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – The optional circuit to extend from
*   **variable\_register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – The optional quantum register to use for problem variables
*   **clause\_register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – The optional quantum register to use for problem clauses
*   **output\_register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – The optional quantum register to use for holding the output
*   **ancillary\_register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – The optional quantum register to use as ancilla
*   **mct\_mode** (*str*) – The mode to use for building Multiple-Control Toffoli

**Returns**

quantum circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input

## Attributes

<span id="qiskit.aqua.circuits.DNF.ancillary_register" />

### ancillary\_register

returns ancillary register

<span id="qiskit.aqua.circuits.DNF.clause_register" />

### clause\_register

returns clause register

<span id="qiskit.aqua.circuits.DNF.num_clauses" />

### num\_clauses

returns num clauses

<span id="qiskit.aqua.circuits.DNF.num_variables" />

### num\_variables

return num variables

<span id="qiskit.aqua.circuits.DNF.output_register" />

### output\_register

returns output register

<span id="qiskit.aqua.circuits.DNF.variable_register" />

### variable\_register

returns variable register

