# QAOAAnsatz

<span id="undefined" />

`QAOAAnsatz(cost_operator=None, reps=1, initial_state=None, mixer_operator=None, name='QAOA')`

Bases: `qiskit.circuit.library.evolved_operator_ansatz.EvolvedOperatorAnsatz`

A generalized QAOA quantum circuit with a support of custom initial states and mixers.

## References

**\[1]: Farhi et al., A Quantum Approximate Optimization Algorithm.**

[arXiv:1411.4028](https://arxiv.org/pdf/1411.4028)

**Parameters**

*   **cost\_operator** ([*OperatorBase*](qiskit.aqua.operators.OperatorBase#qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.OperatorBase")*, optional*) – The operator representing the cost of the optimization problem, denoted as $U(C, \gamma)$ in the original paper. Must be set either in the constructor or via property setter.
*   **reps** (*int*) – The integer parameter p, which determines the depth of the circuit, as specified in the original paper, default is 1.
*   **initial\_state** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")*, optional*) – An optional initial state to use. If None is passed then a set of Hadamard gates is applied as an initial state to all qubits.
*   **mixer\_operator** ([*OperatorBase*](qiskit.aqua.operators.OperatorBase#qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.OperatorBase")  *or*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")*, optional*) – An optional custom mixer to use instead of the global X-rotations, denoted as $U(B, \beta)$ in the original paper. Can be an operator or an optionally parameterized quantum circuit.
*   **name** (*str*) – A name of the circuit, default ‘qaoa’

## Attributes

<span id="undefined" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

<span id="undefined" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

<span id="undefined" />

### clbits

Returns a list of classical bits in the order that the registers were added.

<span id="undefined" />

### cost\_operator

Returns an operator representing the cost of the optimization problem.

**Returns**

cost operator.

**Return type**

[OperatorBase](qiskit.aqua.operators.OperatorBase#qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.OperatorBase")

<span id="undefined" />

### data

<span id="undefined" />

### evolution

The evolution converter used to compute the evolution.

**Returns**

The evolution converter used to compute the evolution.

**Return type**

[EvolutionBase](qiskit.aqua.operators.evolutions.EvolutionBase#qiskit.aqua.operators.evolutions.EvolutionBase "qiskit.aqua.operators.evolutions.EvolutionBase")

<span id="undefined" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="undefined" />

### global\_phase

Return the global phase of the circuit in radians.

<span id="undefined" />

### header

`= 'OPENQASM 2.0;'`

<span id="undefined" />

### initial\_state

Returns an optional initial state as a circuit

**Return type**

`Optional`\[`QuantumCircuit`]

<span id="undefined" />

### instances

`= 16`

<span id="undefined" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

<span id="undefined" />

### mixer\_operator

Returns an optional mixer operator expressed as an operator or a quantum circuit.

**Returns**

mixer operator or circuit.

**Return type**

[OperatorBase](qiskit.aqua.operators.OperatorBase#qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.OperatorBase") or [QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit"), optional

<span id="undefined" />

### num\_ancillas

Return the number of ancilla qubits.

<span id="undefined" />

### num\_clbits

Return number of classical bits.

<span id="undefined" />

### num\_parameters

**Return type**

`int`

<span id="undefined" />

### num\_qubits

Return the number of qubits, specified by the size of the cost operator.

**Return type**

`int`

<span id="undefined" />

### operators

The operators that are evolved in this circuit.

**Returns**

**The operators to be evolved (and circuits)**

in this ansatz.

**Return type**

List\[Union\[[OperatorBase](qiskit.aqua.operators.OperatorBase#qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.OperatorBase"), [QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")]]

<span id="undefined" />

### parameter\_bounds

Parameter bounds.

**Returns: A list of pairs indicating the bounds, as (lower, upper). None indicates**

an unbounded parameter in the corresponding direction. If None is returned, problem is fully unbounded or is not built yet.

**Return type**

`List`\[`Tuple`\[`float`, `float`]]

<span id="undefined" />

### parameters

Get the [`Parameter`](qiskit.circuit.Parameter#qiskit.circuit.Parameter "qiskit.circuit.Parameter") objects in the circuit.

**Return type**

`Set`\[`Parameter`]

**Returns**

A set containing the unbound circuit parameters.

<span id="undefined" />

### preferred\_init\_points

Getter of preferred initial points based on the given initial state.

<span id="undefined" />

### prefix

`= 'circuit'`

<span id="undefined" />

### qregs

A list of the quantum registers associated with the circuit.

<span id="undefined" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

<span id="undefined" />

### reps

Returns the reps parameter, which determines the depth of the circuit.

**Return type**

`int`
