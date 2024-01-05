---
title: CNF
description: API reference for qiskit.aqua.circuits.CNF
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.circuits.CNF
---

<span id="qiskit-aqua-circuits-cnf" />

# qiskit.aqua.circuits.CNF

<span id="qiskit.aqua.circuits.CNF" />

`CNF(ast, num_vars=None)`

Class for constructing circuits for Conjunctive Normal Forms

Constructor.

**Parameters**

*   **ast** (*tuple*) – The logic expression as an Abstract Syntax Tree (AST) tuple
*   **num\_vars** (*int*) – Number of boolean variables

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input

### \_\_init\_\_

<span id="qiskit.aqua.circuits.CNF.__init__" />

`__init__(ast, num_vars=None)`

Constructor.

**Parameters**

*   **ast** (*tuple*) – The logic expression as an Abstract Syntax Tree (AST) tuple
*   **num\_vars** (*int*) – Number of boolean variables

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input

## Methods

## Attributes

### ancillary\_register

<span id="qiskit.aqua.circuits.CNF.ancillary_register" />

`property ancillary_register`

returns ancillary register

### clause\_register

<span id="qiskit.aqua.circuits.CNF.clause_register" />

`property clause_register`

returns clause register

### compute\_num\_ancillae

<span id="qiskit.aqua.circuits.CNF.compute_num_ancillae" />

`compute_num_ancillae(mct_mode='basic')`

returns the number of ancillary qubits needed

### construct\_circuit

<span id="qiskit.aqua.circuits.CNF.construct_circuit" />

`construct_circuit(circuit=None, variable_register=None, clause_register=None, output_register=None, ancillary_register=None, mct_mode='basic')`

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

### num\_clauses

<span id="qiskit.aqua.circuits.CNF.num_clauses" />

`property num_clauses`

returns num clauses

### num\_variables

<span id="qiskit.aqua.circuits.CNF.num_variables" />

`property num_variables`

return num variables

### output\_register

<span id="qiskit.aqua.circuits.CNF.output_register" />

`property output_register`

returns output register

### variable\_register

<span id="qiskit.aqua.circuits.CNF.variable_register" />

`property variable_register`

returns variable register

