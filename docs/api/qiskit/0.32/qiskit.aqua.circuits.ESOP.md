# ESOP

<span id="undefined" />

`ESOP(ast, num_vars=None)`

Bases: `qiskit.aqua.circuits.boolean_logical_circuits.BooleanLogicNormalForm`

Class for constructing circuits for Exclusive Sum of Products

Constructor.

**Parameters**

*   **ast** (*tuple*) – The logic expression as an Abstract Syntax Tree (AST) tuple
*   **num\_vars** (*int*) – Number of boolean variables

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input

## Methods

|                                                                                                                                                                          |                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------- |
| [`compute_num_ancillae`](qiskit.aqua.circuits.ESOP.compute_num_ancillae#qiskit.aqua.circuits.ESOP.compute_num_ancillae "qiskit.aqua.circuits.ESOP.compute_num_ancillae") | returns the number of ancillary qubits needed |
| [`construct_circuit`](qiskit.aqua.circuits.ESOP.construct_circuit#qiskit.aqua.circuits.ESOP.construct_circuit "qiskit.aqua.circuits.ESOP.construct_circuit")             | Construct circuit.                            |

## Attributes

<span id="undefined" />

### ancillary\_register

returns ancillary register

<span id="undefined" />

### clause\_register

returns clause register

<span id="undefined" />

### num\_clauses

returns num clauses

<span id="undefined" />

### num\_variables

return num variables

<span id="undefined" />

### output\_register

returns output register

<span id="undefined" />

### variable\_register

returns variable register
