# EvolvedOperatorAnsatz

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

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

### clbits

Returns a list of classical bits in the order that the registers were added.

### data

### evolution

The evolution converter used to compute the evolution.

**Returns**

The evolution converter used to compute the evolution.

**Return type**

[EvolutionBase](qiskit.aqua.operators.evolutions.EvolutionBase#qiskit.aqua.operators.evolutions.EvolutionBase "qiskit.aqua.operators.evolutions.EvolutionBase")

### extension\_lib

`= 'include "qelib1.inc";'`

### global\_phase

Return the global phase of the circuit in radians.

### header

`= 'OPENQASM 2.0;'`

### initial\_state

The initial state.

**Return type**

`QuantumCircuit`

### instances

`= 16`

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

### num\_ancillas

Return the number of ancilla qubits.

### num\_clbits

Return number of classical bits.

### num\_parameters

**Return type**

`int`

### num\_qubits

Return number of qubits.

### operators

The operators that are evolved in this circuit.

**Returns**

The operators to be evolved (and circuits) contained in this ansatz.

**Return type**

list

### parameters

**Return type**

`ParameterView`

### preferred\_init\_points

Getter of preferred initial points based on the given initial state.

### prefix

`= 'circuit'`

### qregs

A list of the quantum registers associated with the circuit.

### qubits

Returns a list of quantum bits in the order that the registers were added.

### reps

The number of times the evolved operators are repeated.

**Return type**

`int`
