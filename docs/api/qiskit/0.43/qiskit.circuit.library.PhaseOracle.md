---
title: PhaseOracle
description: API reference for qiskit.circuit.library.PhaseOracle
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.PhaseOracle
---

# PhaseOracle

<span id="qiskit.circuit.library.PhaseOracle" />

`PhaseOracle(expression, synthesizer=None, var_order=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/circuit/library/phase_oracle.py "view source code")

Bases: [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")

Phase Oracle.

The Phase Oracle object constructs circuits for any arbitrary input logical expressions. A logical expression is composed of logical operators & (AND), | (OR), \~ (NOT), and ^ (XOR). as well as symbols for literals (variables). For example, ‘a & b’, and (v0 | \~v1) & (\~v2 & v3) are both valid string representation of boolean logical expressions.

For convenience, this oracle, in addition to parsing arbitrary logical expressions, also supports input strings in the [DIMACS CNF format](http://www.satcompetition.org/2009/format-benchmarks2009.html), which is the standard format for specifying SATisfiability (SAT) problem instances in [Conjunctive Normal Form (CNF)](https://en.wikipedia.org/wiki/Conjunctive_normal_form), which is a conjunction of one or more clauses, where a clause is a disjunction of one or more literals. See `qiskit.circuit.library.phase_oracle.PhaseOracle.from_dimacs_file()`.

From 16 variables on, possible performance issues should be expected when using the default synthesizer.

Creates a PhaseOracle object

**Parameters**

*   **expression** (*Union\[str, ClassicalElement]*) – A Python-like boolean expression.
*   **synthesizer** (*Optional\[Callable\[\[*[*BooleanExpression*](qiskit.circuit.classicalfunction.BooleanExpression "qiskit.circuit.classicalfunction.BooleanExpression")*],* [*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")*]]*) – Optional. A function to convert a BooleanExpression into a QuantumCircuit If None is provided, Tweedledum’s pkrm\_synth with phase\_esop will be used.
*   **var\_order** (*list*) – A list with the order in which variables will be created. (default: by appearance)

**Methods Defined Here**

|                                                                                                                                       |                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [`evaluate_bitstring`](qiskit.circuit.library.PhaseOracle#evaluate_bitstring "qiskit.circuit.library.PhaseOracle.evaluate_bitstring") | Evaluate the oracle on a bitstring.                        |
| [`from_dimacs_file`](qiskit.circuit.library.PhaseOracle#from_dimacs_file "qiskit.circuit.library.PhaseOracle.from_dimacs_file")       | Create a PhaseOracle from the string in the DIMACS format. |

## Attributes

<span id="qiskit.circuit.library.PhaseOracle.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

<span id="qiskit.circuit.library.PhaseOracle.calibrations" />

### calibrations

Return calibration dictionary.

The custom pulse definition of a given gate is of the form `{'gate_name': {(qubits, params): schedule}}`

<span id="qiskit.circuit.library.PhaseOracle.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

<span id="qiskit.circuit.library.PhaseOracle.data" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the [`CircuitInstruction`](qiskit.circuit.CircuitInstruction "qiskit.circuit.CircuitInstruction")s for each instruction.

**Return type**

QuantumCircuitData

<span id="qiskit.circuit.library.PhaseOracle.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.PhaseOracle.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

<span id="qiskit.circuit.library.PhaseOracle.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.PhaseOracle.instances" />

### instances

`= 121`

<span id="qiskit.circuit.library.PhaseOracle.layout" />

### layout

Return any associated layout information anout the circuit

This attribute contains an optional [`TranspileLayout`](qiskit.transpiler.TranspileLayout "qiskit.transpiler.TranspileLayout") object. This is typically set on the output from [`transpile()`](qiskit.compiler.transpile "qiskit.compiler.transpile") or [`PassManager.run()`](qiskit.transpiler.PassManager#run "qiskit.transpiler.PassManager.run") to retain information about the permutations caused on the input circuit by transpilation.

There are two types of permutations caused by the [`transpile()`](qiskit.compiler.transpile "qiskit.compiler.transpile") function, an initial layout which permutes the qubits based on the selected physical qubits on the [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target"), and a final layout which is an output permutation caused by [`SwapGate`](qiskit.circuit.library.SwapGate "qiskit.circuit.library.SwapGate")s inserted during routing.

<span id="qiskit.circuit.library.PhaseOracle.metadata" />

### metadata

The user provided metadata associated with the circuit.

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

<span id="qiskit.circuit.library.PhaseOracle.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

<span id="qiskit.circuit.library.PhaseOracle.num_clbits" />

### num\_clbits

Return number of classical bits.

<span id="qiskit.circuit.library.PhaseOracle.num_parameters" />

### num\_parameters

The number of parameter objects in the circuit.

<span id="qiskit.circuit.library.PhaseOracle.num_qubits" />

### num\_qubits

Return number of qubits.

<span id="qiskit.circuit.library.PhaseOracle.op_start_times" />

### op\_start\_times

Return a list of operation start times.

This attribute is enabled once one of scheduling analysis passes runs on the quantum circuit.

**Returns**

List of integers representing instruction start times. The index corresponds to the index of instruction in `QuantumCircuit.data`.

**Raises**

**AttributeError** – When circuit is not scheduled.

<span id="qiskit.circuit.library.PhaseOracle.parameters" />

### parameters

The parameters defined in the circuit.

This attribute returns the [`Parameter`](qiskit.circuit.Parameter "qiskit.circuit.Parameter") objects in the circuit sorted alphabetically. Note that parameters instantiated with a [`ParameterVector`](qiskit.circuit.ParameterVector "qiskit.circuit.ParameterVector") are still sorted numerically.

**Examples**

The snippet below shows that insertion order of parameters does not matter.

```python
>>> from qiskit.circuit import QuantumCircuit, Parameter
>>> a, b, elephant = Parameter("a"), Parameter("b"), Parameter("elephant")
>>> circuit = QuantumCircuit(1)
>>> circuit.rx(b, 0)
>>> circuit.rz(elephant, 0)
>>> circuit.ry(a, 0)
>>> circuit.parameters  # sorted alphabetically!
ParameterView([Parameter(a), Parameter(b), Parameter(elephant)])
```

Bear in mind that alphabetical sorting might be unituitive when it comes to numbers. The literal “10” comes before “2” in strict alphabetical sorting.

```python
>>> from qiskit.circuit import QuantumCircuit, Parameter
>>> angles = [Parameter("angle_1"), Parameter("angle_2"), Parameter("angle_10")]
>>> circuit = QuantumCircuit(1)
>>> circuit.u(*angles, 0)
>>> circuit.draw()
   ┌─────────────────────────────┐
q: ┤ U(angle_1,angle_2,angle_10) ├
   └─────────────────────────────┘
>>> circuit.parameters
ParameterView([Parameter(angle_1), Parameter(angle_10), Parameter(angle_2)])
```

To respect numerical sorting, a [`ParameterVector`](qiskit.circuit.ParameterVector "qiskit.circuit.ParameterVector") can be used.

```python
```

```python
>>> from qiskit.circuit import QuantumCircuit, Parameter, ParameterVector
>>> x = ParameterVector("x", 12)
>>> circuit = QuantumCircuit(1)
>>> for x_i in x:
...     circuit.rx(x_i, 0)
>>> circuit.parameters
ParameterView([
    ParameterVectorElement(x[0]), ParameterVectorElement(x[1]),
    ParameterVectorElement(x[2]), ParameterVectorElement(x[3]),
    ..., ParameterVectorElement(x[11])
])
```

**Returns**

The sorted [`Parameter`](qiskit.circuit.Parameter "qiskit.circuit.Parameter") objects in the circuit.

<span id="qiskit.circuit.library.PhaseOracle.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.PhaseOracle.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

