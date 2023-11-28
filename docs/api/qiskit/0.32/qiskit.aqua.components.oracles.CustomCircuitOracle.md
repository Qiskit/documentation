# CustomCircuitOracle

<span id="undefined" />

`CustomCircuitOracle(variable_register, output_register, circuit, ancillary_register=None, evaluate_classically_callback=None)`

Bases: `qiskit.aqua.components.oracles.oracle.Oracle`

The Custom Circuit-based Quantum Oracle.

A helper class to, in essence, ‘wrap’ a user-supplied quantum circuit such that it becomes of type [`Oracle`](qiskit.aqua.components.oracles.Oracle#qiskit.aqua.components.oracles.Oracle "qiskit.aqua.components.oracles.Oracle") and hence can be used by algorithms taking an oracle as input.

This class is provided for easy creation of oracles using custom circuits. It is geared towards programmatically experimenting with oracles, where a user directly provides a QuantumCircuit object, corresponding to the intended oracle function, together with the various QuantumRegister objects involved.

<Admonition title="Note" type="note">
  The evaluate\_classically\_callback param is to supply a method to classically evaluate the function (as encoded by the oracle) on a particular input bitstring. For example for an oracle that encodes 3-SAT problems, this method would determine classically if an input variable assignment would satisfy the 3-SAT expression.

  The input bitstring is a string of 1’s and 0’s corresponding to the input variable(s). The return should be a (bool, List\[int]) tuple where the bool corresponds to the return value of the *binary* function encoded by the oracle, and the List\[int] should just be a different representation of the input variable assignment, which should be equivalent to the bitstring or a quantum measurement.

  Examples of existing implementations, for reference, can be found in other oracles such as [`TruthTableOracle.evaluate_classically()`](qiskit.aqua.components.oracles.TruthTableOracle.evaluate_classically#qiskit.aqua.components.oracles.TruthTableOracle.evaluate_classically "qiskit.aqua.components.oracles.TruthTableOracle.evaluate_classically") and [`LogicalExpressionOracle.evaluate_classically()`](qiskit.aqua.components.oracles.LogicalExpressionOracle.evaluate_classically#qiskit.aqua.components.oracles.LogicalExpressionOracle.evaluate_classically "qiskit.aqua.components.oracles.LogicalExpressionOracle.evaluate_classically").
</Admonition>

**Parameters**

*   **variable\_register** (`QuantumRegister`) – The register holding variable qubit(s) for the oracle function
*   **output\_register** (`QuantumRegister`) – The register holding output qubit(s) for the oracle function
*   **circuit** (`QuantumCircuit`) – The quantum circuit corresponding to the intended oracle function
*   **ancillary\_register** (`Optional`\[`QuantumRegister`]) – The register holding ancillary qubit(s)
*   **evaluate\_classically\_callback** (`Optional`\[`Callable`\[\[`str`], `Tuple`\[`bool`, `List`\[`int`]]]]) – The classical callback function for evaluating the oracle, for example, to use with [`Grover`](qiskit.aqua.algorithms.Grover#qiskit.aqua.algorithms.Grover "qiskit.aqua.algorithms.Grover")’s search

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – Invalid input

## Methods

|                                                                                                                                                                                                                                         |                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| [`construct_circuit`](qiskit.aqua.components.oracles.CustomCircuitOracle.construct_circuit#qiskit.aqua.components.oracles.CustomCircuitOracle.construct_circuit "qiskit.aqua.components.oracles.CustomCircuitOracle.construct_circuit") | Construct the oracle circuit. |

## Attributes

<span id="undefined" />

### ancillary\_register

<span id="undefined" />

### circuit

<span id="undefined" />

### output\_register

<span id="undefined" />

### variable\_register
