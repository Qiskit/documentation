# EvolvedOperatorAnsatz

<span id="undefined" />

`EvolvedOperatorAnsatz(operators=None, reps=1, evolution=None, insert_barriers=False, name='EvolvedOps', initial_state=None)`

Bases: `qiskit.circuit.library.blueprintcircuit.BlueprintCircuit`

The evolved operator ansatz.

**Parameters**

*   **operators** (*Optional\[Union\[*[*OperatorBase*](qiskit.aqua.operators.OperatorBase#qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.OperatorBase")*,* [*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")*, list]*) – The operators to evolve. If a circuit is passed, we assume it implements an already evolved operator and thus the circuit is not evolved again. Can be a single operator (circuit) or a list of operators (and circuits).
*   **reps** (`int`) – The number of times to repeat the evolved operators.
*   **evolution** (*Optional\[*[*EvolutionBase*](qiskit.aqua.operators.evolutions.EvolutionBase#qiskit.aqua.operators.evolutions.EvolutionBase "qiskit.aqua.operators.evolutions.EvolutionBase")*]*) – An opflow converter object to construct the evolution. Defaults to Trotterization.
*   **insert\_barriers** (`bool`) – Whether to insert barriers in between each evolution.
*   **name** (`str`) – The name of the circuit.
*   **initial\_state** (`Optional`\[`QuantumCircuit`]) – A QuantumCircuit object to prepend to the circuit.

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

The initial state.

**Return type**

`QuantumCircuit`

<span id="undefined" />

### instances

`= 16`

<span id="undefined" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

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

Return number of qubits.

<span id="undefined" />

### operators

The operators that are evolved in this circuit.

**Returns**

The operators to be evolved (and circuits) contained in this ansatz.

**Return type**

list

<span id="undefined" />

### parameters

**Return type**

`ParameterView`

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

The number of times the evolved operators are repeated.

**Return type**

`int`
