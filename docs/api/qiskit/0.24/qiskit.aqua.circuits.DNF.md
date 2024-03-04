---
title: DNF
description: API reference for qiskit.aqua.circuits.DNF
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.circuits.DNF
---

<span id="qiskit-aqua-circuits-dnf" />

# qiskit.aqua.circuits.DNF

<span id="qiskit.aqua.circuits.DNF" />

`DNF(ast, num_vars=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.8/qiskit/aqua/circuits/boolean_logical_circuits.py "view source code")

Class for constructing circuits for Disjunctive Normal Forms

Constructor.

**Parameters**

*   **ast** (*tuple*) – The logic expression as an Abstract Syntax Tree (AST) tuple
*   **num\_vars** (*int*) – Number of boolean variables

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input

### \_\_init\_\_

<span id="qiskit.aqua.circuits.DNF.__init__" />

`__init__(ast, num_vars=None)`

Constructor.

**Parameters**

*   **ast** (*tuple*) – The logic expression as an Abstract Syntax Tree (AST) tuple
*   **num\_vars** (*int*) – Number of boolean variables

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input

## Methods

|                                                                                                                                        |                                               |
| -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| [`__init__`](#qiskit.aqua.circuits.DNF.__init__ "qiskit.aqua.circuits.DNF.__init__")(ast\[, num\_vars])                                | Constructor.                                  |
| [`compute_num_ancillae`](#qiskit.aqua.circuits.DNF.compute_num_ancillae "qiskit.aqua.circuits.DNF.compute_num_ancillae")(\[mct\_mode]) | returns the number of ancillary qubits needed |
| [`construct_circuit`](#qiskit.aqua.circuits.DNF.construct_circuit "qiskit.aqua.circuits.DNF.construct_circuit")(\[circuit, …])         | Construct circuit.                            |

## Attributes

|                                                                                                                    |                            |
| ------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| [`ancillary_register`](#qiskit.aqua.circuits.DNF.ancillary_register "qiskit.aqua.circuits.DNF.ancillary_register") | returns ancillary register |
| [`clause_register`](#qiskit.aqua.circuits.DNF.clause_register "qiskit.aqua.circuits.DNF.clause_register")          | returns clause register    |
| [`num_clauses`](#qiskit.aqua.circuits.DNF.num_clauses "qiskit.aqua.circuits.DNF.num_clauses")                      | returns num clauses        |
| [`num_variables`](#qiskit.aqua.circuits.DNF.num_variables "qiskit.aqua.circuits.DNF.num_variables")                | return num variables       |
| [`output_register`](#qiskit.aqua.circuits.DNF.output_register "qiskit.aqua.circuits.DNF.output_register")          | returns output register    |
| [`variable_register`](#qiskit.aqua.circuits.DNF.variable_register "qiskit.aqua.circuits.DNF.variable_register")    | returns variable register  |

### ancillary\_register

<span id="qiskit.aqua.circuits.DNF.ancillary_register" />

`property ancillary_register`

returns ancillary register

### clause\_register

<span id="qiskit.aqua.circuits.DNF.clause_register" />

`property clause_register`

returns clause register

### compute\_num\_ancillae

<span id="qiskit.aqua.circuits.DNF.compute_num_ancillae" />

`compute_num_ancillae(mct_mode='basic')`

returns the number of ancillary qubits needed

### construct\_circuit

<span id="qiskit.aqua.circuits.DNF.construct_circuit" />

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

<span id="qiskit.aqua.circuits.DNF.num_clauses" />

`property num_clauses`

returns num clauses

### num\_variables

<span id="qiskit.aqua.circuits.DNF.num_variables" />

`property num_variables`

return num variables

### output\_register

<span id="qiskit.aqua.circuits.DNF.output_register" />

`property output_register`

returns output register

### variable\_register

<span id="qiskit.aqua.circuits.DNF.variable_register" />

`property variable_register`

returns variable register

