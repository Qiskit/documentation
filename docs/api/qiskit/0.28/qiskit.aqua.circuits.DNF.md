# qiskit.aqua.circuits.DNF

<span id="undefined" />

`DNF(ast, num_vars=None)`

Class for constructing circuits for Disjunctive Normal Forms

Constructor.

**Parameters**

*   **ast** (*tuple*) – The logic expression as an Abstract Syntax Tree (AST) tuple
*   **num\_vars** (*int*) – Number of boolean variables

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input

<span id="undefined" />

`__init__(ast, num_vars=None)`

Constructor.

**Parameters**

*   **ast** (*tuple*) – The logic expression as an Abstract Syntax Tree (AST) tuple
*   **num\_vars** (*int*) – Number of boolean variables

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input

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

<span id="undefined" />

`property ancillary_register`

returns ancillary register

<span id="undefined" />

`property clause_register`

returns clause register

<span id="undefined" />

`compute_num_ancillae(mct_mode='basic')`

returns the number of ancillary qubits needed

<span id="undefined" />

`construct_circuit(circuit=None, variable_register=None, clause_register=None, output_register=None, ancillary_register=None, mct_mode='basic')`

Construct circuit.

**Parameters**

*   **circuit** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – The optional circuit to extend from
*   **variable\_register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – The optional quantum register to use for problem variables
*   **clause\_register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – The optional quantum register to use for problem clauses
*   **output\_register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – The optional quantum register to use for holding the output
*   **ancillary\_register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – The optional quantum register to use as ancilla
*   **mct\_mode** (*str*) – The mode to use for building Multiple-Control Toffoli

**Returns**

quantum circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input

<span id="undefined" />

`property num_clauses`

returns num clauses

<span id="undefined" />

`property num_variables`

return num variables

<span id="undefined" />

`property output_register`

returns output register

<span id="undefined" />

`property variable_register`

returns variable register
