---
title: EvolvedOperatorAnsatz
description: API reference for qiskit.circuit.library.EvolvedOperatorAnsatz
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.EvolvedOperatorAnsatz
---

# EvolvedOperatorAnsatz

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz" />

`EvolvedOperatorAnsatz(operators=None, reps=1, evolution=None, insert_barriers=False, name='EvolvedOps', initial_state=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/circuit/library/evolved_operator_ansatz.py "view source code")

Bases: `qiskit.circuit.library.blueprintcircuit.BlueprintCircuit`

The evolved operator ansatz.

**Parameters**

*   **operators** (*Optional\[Union\[*[*OperatorBase*](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.OperatorBase")*,* [*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")*, list]*) – The operators to evolve. If a circuit is passed, we assume it implements an already evolved operator and thus the circuit is not evolved again. Can be a single operator (circuit) or a list of operators (and circuits).
*   **reps** (`int`) – The number of times to repeat the evolved operators.
*   **evolution** (*Optional\[*[*EvolutionBase*](qiskit.aqua.operators.evolutions.EvolutionBase "qiskit.aqua.operators.evolutions.EvolutionBase")*]*) – An opflow converter object to construct the evolution. Defaults to Trotterization.
*   **insert\_barriers** (`bool`) – Whether to insert barriers in between each evolution.
*   **name** (`str`) – The name of the circuit.
*   **initial\_state** (`Optional`\[`QuantumCircuit`]) – A QuantumCircuit object to prepend to the circuit.

## Attributes

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.calibrations" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.data" />

### data

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.evolution" />

### evolution

The evolution converter used to compute the evolution.

**Returns**

The evolution converter used to compute the evolution.

**Return type**

[EvolutionBase](qiskit.aqua.operators.evolutions.EvolutionBase "qiskit.aqua.operators.evolutions.EvolutionBase")

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.initial_state" />

### initial\_state

The initial state.

**Return type**

`QuantumCircuit`

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.instances" />

### instances

`= 16`

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.num_clbits" />

### num\_clbits

Return number of classical bits.

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.num_parameters" />

### num\_parameters

**Return type**

`int`

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.num_qubits" />

### num\_qubits

Return number of qubits.

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.operators" />

### operators

The operators that are evolved in this circuit.

**Returns**

The operators to be evolved (and circuits) contained in this ansatz.

**Return type**

list

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.parameters" />

### parameters

**Return type**

`ParameterView`

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.preferred_init_points" />

### preferred\_init\_points

Getter of preferred initial points based on the given initial state.

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.qregs" />

### qregs

A list of the quantum registers associated with the circuit.

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.reps" />

### reps

The number of times the evolved operators are repeated.

**Return type**

`int`

