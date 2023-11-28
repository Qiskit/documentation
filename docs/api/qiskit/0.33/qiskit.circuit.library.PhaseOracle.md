# PhaseOracle[¶](#phaseoracle "Permalink to this headline")

<span id="undefined" />

`PhaseOracle(expression, synthesizer=None)`

Bases: `qiskit.circuit.quantumcircuit.QuantumCircuit`

Phase Oracle.

The Phase Oracle object constructs circuits for any arbitrary input logical expressions. A logical expression is composed of logical operators & (AND), | (OR), \~ (NOT), and ^ (XOR). as well as symbols for literals (variables). For example, ‘a & b’, and (v0 | \~v1) & (\~v2 & v3) are both valid string representation of boolean logical expressions.

For convenience, this oracle, in addition to parsing arbitrary logical expressions, also supports input strings in the [DIMACS CNF format](http://www.satcompetition.org/2009/format-benchmarks2009.html), which is the standard format for specifying SATisfiability (SAT) problem instances in [Conjunctive Normal Form (CNF)](https://en.wikipedia.org/wiki/Conjunctive_normal_form), which is a conjunction of one or more clauses, where a clause is a disjunction of one or more literals. See `qiskit.circuit.library.phase_oracle.PhaseOracle.from_dimacs_file()`.

From 16 variables on, possible performance issues should be expected when using the default synthesizer.

Creates a PhaseOracle object

**Parameters**

*   **expression** (`Union`\[`str`, `ClassicalElement`]) – A Python-like boolean expression.
*   **synthesizer** (`Optional`\[`Callable`\[\[`BooleanExpression`], `QuantumCircuit`]]) – Optional. A function to convert a BooleanExpression into a QuantumCircuit If None is provided, Tweedledum’s pkrm\_synth with phase\_esop will be used.

## Methods Defined Here

|                                                                                                                                                                                             |                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [`evaluate_bitstring`](qiskit.circuit.library.PhaseOracle.evaluate_bitstring#qiskit.circuit.library.PhaseOracle.evaluate_bitstring "qiskit.circuit.library.PhaseOracle.evaluate_bitstring") | Evaluate the oracle on a bitstring.                        |
| [`from_dimacs_file`](qiskit.circuit.library.PhaseOracle.from_dimacs_file#qiskit.circuit.library.PhaseOracle.from_dimacs_file "qiskit.circuit.library.PhaseOracle.from_dimacs_file")         | Create a PhaseOracle from the string in the DIMACS format. |

## Attributes

<span id="undefined" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[`AncillaQubit`]

<span id="undefined" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

**Return type**

`dict`

<span id="undefined" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[`Clbit`]

<span id="undefined" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the tuples for the circuit’s data.

Each tuple is in the format `(instruction, qargs, cargs)`, where instruction is an Instruction (or subclass) object, qargs is a list of Qubit objects, and cargs is a list of Clbit objects.

**Return type**

QuantumCircuitData

<span id="undefined" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="undefined" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[`ParameterExpression`, `float`]

<span id="undefined" />

### header

`= 'OPENQASM 2.0;'`

<span id="undefined" />

### instances

`= 9`

<span id="undefined" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="undefined" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="undefined" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="undefined" />

### num\_parameters

Convenience function to get the number of parameter objects in the circuit.

**Return type**

`int`

<span id="undefined" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="undefined" />

### parameters

Convenience function to get the parameters defined in the parameter table.

**Return type**

`ParameterView`

<span id="undefined" />

### prefix

`= 'circuit'`

<span id="undefined" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[`Qubit`]
