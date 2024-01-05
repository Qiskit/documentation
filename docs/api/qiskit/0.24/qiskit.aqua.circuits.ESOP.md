---
title: ESOP
description: API reference for qiskit.aqua.circuits.ESOP
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.circuits.ESOP
---

<span id="qiskit-aqua-circuits-esop" />

# qiskit.aqua.circuits.ESOP

<span id="qiskit.aqua.circuits.ESOP" />

`ESOP(ast, num_vars=None)`

Class for constructing circuits for Exclusive Sum of Products

Constructor.

**Parameters**

*   **ast** (*tuple*) – The logic expression as an Abstract Syntax Tree (AST) tuple
*   **num\_vars** (*int*) – Number of boolean variables

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input

### \_\_init\_\_

<span id="qiskit.aqua.circuits.ESOP.__init__" />

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

<span id="qiskit.aqua.circuits.ESOP.ancillary_register" />

`property ancillary_register`

returns ancillary register

### clause\_register

<span id="qiskit.aqua.circuits.ESOP.clause_register" />

`property clause_register`

returns clause register

### compute\_num\_ancillae

<span id="qiskit.aqua.circuits.ESOP.compute_num_ancillae" />

`compute_num_ancillae(mct_mode='basic')`

returns the number of ancillary qubits needed

### construct\_circuit

<span id="qiskit.aqua.circuits.ESOP.construct_circuit" />

`construct_circuit(circuit=None, variable_register=None, output_register=None, output_idx=None, ancillary_register=None, mct_mode='basic')`

Construct circuit.

**Parameters**

*   **circuit** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – The optional circuit to extend from
*   **variable\_register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – The optional quantum
*   **to use for problem variables** (*register*) –
*   **output\_register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – The optional quantum
*   **to use for holding the output** (*register*) –
*   **output\_idx** (*int*) – The index of the output register to write to
*   **ancillary\_register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – The optional quantum register to use as ancilla
*   **mct\_mode** (*str*) – The mode to use for building Multiple-Control Toffoli

**Returns**

quantum circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input

### num\_clauses

<span id="qiskit.aqua.circuits.ESOP.num_clauses" />

`property num_clauses`

returns num clauses

### num\_variables

<span id="qiskit.aqua.circuits.ESOP.num_variables" />

`property num_variables`

return num variables

### output\_register

<span id="qiskit.aqua.circuits.ESOP.output_register" />

`property output_register`

returns output register

### variable\_register

<span id="qiskit.aqua.circuits.ESOP.variable_register" />

`property variable_register`

returns variable register

