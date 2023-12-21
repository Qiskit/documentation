# qiskit.aqua.circuits.CNF

`CNF(ast, num_vars=None)`

Class for constructing circuits for Conjunctive Normal Forms

Constructor.

**Parameters**

*   **ast** (*tuple*) – The logic expression as an Abstract Syntax Tree (AST) tuple
*   **num\_vars** (*int*) – Number of boolean variables

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input

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
| [`__init__`](#qiskit.aqua.circuits.CNF.__init__ "qiskit.aqua.circuits.CNF.__init__")(ast\[, num\_vars])                                | Constructor.                                  |
| [`compute_num_ancillae`](#qiskit.aqua.circuits.CNF.compute_num_ancillae "qiskit.aqua.circuits.CNF.compute_num_ancillae")(\[mct\_mode]) | returns the number of ancillary qubits needed |
| [`construct_circuit`](#qiskit.aqua.circuits.CNF.construct_circuit "qiskit.aqua.circuits.CNF.construct_circuit")(\[circuit, …])         | Construct circuit.                            |

## Attributes

|                                                                                                                    |                            |
| ------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| [`ancillary_register`](#qiskit.aqua.circuits.CNF.ancillary_register "qiskit.aqua.circuits.CNF.ancillary_register") | returns ancillary register |
| [`clause_register`](#qiskit.aqua.circuits.CNF.clause_register "qiskit.aqua.circuits.CNF.clause_register")          | returns clause register    |
| [`num_clauses`](#qiskit.aqua.circuits.CNF.num_clauses "qiskit.aqua.circuits.CNF.num_clauses")                      | returns num clauses        |
| [`num_variables`](#qiskit.aqua.circuits.CNF.num_variables "qiskit.aqua.circuits.CNF.num_variables")                | return num variables       |
| [`output_register`](#qiskit.aqua.circuits.CNF.output_register "qiskit.aqua.circuits.CNF.output_register")          | returns output register    |
| [`variable_register`](#qiskit.aqua.circuits.CNF.variable_register "qiskit.aqua.circuits.CNF.variable_register")    | returns variable register  |

`property ancillary_register`

returns ancillary register

`property clause_register`

returns clause register

`compute_num_ancillae(mct_mode='basic')`

returns the number of ancillary qubits needed

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

`property num_clauses`

returns num clauses

`property num_variables`

return num variables

`property output_register`

returns output register

`property variable_register`

returns variable register
