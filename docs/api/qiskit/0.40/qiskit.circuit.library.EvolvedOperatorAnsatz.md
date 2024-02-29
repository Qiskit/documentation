---
title: EvolvedOperatorAnsatz
description: API reference for qiskit.circuit.library.EvolvedOperatorAnsatz
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.EvolvedOperatorAnsatz
---

# EvolvedOperatorAnsatz

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz" />

`EvolvedOperatorAnsatz(operators=None, reps=1, evolution=None, insert_barriers=False, name='EvolvedOps', parameter_prefix='t', initial_state=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/circuit/library/evolved_operator_ansatz.py "view source code")

Bases: [`qiskit.circuit.library.n_local.n_local.NLocal`](qiskit.circuit.library.NLocal "qiskit.circuit.library.n_local.n_local.NLocal")

The evolved operator ansatz.

**Parameters**

*   **operators** (*Optional\[Union\[*[*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.OperatorBase")*,* [*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")*, list]*) – The operators to evolve. If a circuit is passed, we assume it implements an already evolved operator and thus the circuit is not evolved again. Can be a single operator (circuit) or a list of operators (and circuits).
*   **reps** (`int`) – The number of times to repeat the evolved operators.
*   **evolution** (*Optional\[*[*EvolutionBase*](qiskit.opflow.evolutions.EvolutionBase "qiskit.opflow.evolutions.EvolutionBase")*]*) – An opflow converter object to construct the evolution. Defaults to Trotterization.
*   **insert\_barriers** (`bool`) – Whether to insert barriers in between each evolution.
*   **name** (`str`) – The name of the circuit.
*   **parameter\_prefix** (`Union`\[`str`, `List`\[`str`]]) – Set the names of the circuit parameters. If a string, the same prefix will be used for each parameters. Can also be a list to specify a prefix per operator.
*   **initial\_state** (`Optional`\[[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")]) – A QuantumCircuit object to prepend to the circuit.

## Attributes

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[[`AncillaQubit`](qiskit.circuit.AncillaQubit "qiskit.circuit.quantumregister.AncillaQubit")]

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.calibrations" />

### calibrations

Return calibration dictionary.

The custom pulse definition of a given gate is of the form `{'gate_name': {(qubits, params): schedule}}`

**Return type**

`dict`

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.data" />

### data

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.entanglement" />

### entanglement

Get the entanglement strategy.

**Return type**

`Union`\[`str`, `List`\[`str`], `List`\[`List`\[`str`]], `List`\[`int`], `List`\[`List`\[`int`]], `List`\[`List`\[`List`\[`int`]]], `List`\[`List`\[`List`\[`List`\[`int`]]]], `Callable`\[\[`int`], `str`], `Callable`\[\[`int`], `List`\[`List`\[`int`]]]]

**Returns**

The entanglement strategy, see `get_entangler_map()` for more detail on how the format is interpreted.

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.entanglement_blocks" />

### entanglement\_blocks

The blocks in the entanglement layers.

**Return type**

`List`\[[`Instruction`](qiskit.circuit.Instruction "qiskit.circuit.instruction.Instruction")]

**Returns**

The blocks in the entanglement layers.

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.evolution" />

### evolution

The evolution converter used to compute the evolution.

**Returns**

The evolution converter used to compute the evolution.

**Return type**

[EvolutionBase](qiskit.opflow.evolutions.EvolutionBase "qiskit.opflow.evolutions.EvolutionBase")

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[[`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression"), `float`]

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.initial_state" />

### initial\_state

Return the initial state that is added in front of the n-local circuit.

**Return type**

[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")

**Returns**

The initial state.

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.insert_barriers" />

### insert\_barriers

If barriers are inserted in between the layers or not.

**Return type**

`bool`

**Returns**

`True`, if barriers are inserted in between the layers, `False` if not.

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.instances" />

### instances

`= 2308`

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.num_clbits" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.num_layers" />

### num\_layers

Return the number of layers in the n-local circuit.

**Return type**

`int`

**Returns**

The number of layers in the circuit.

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.num_parameters" />

### num\_parameters

**Return type**

`int`

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.num_parameters_settable" />

### num\_parameters\_settable

The number of total parameters that can be set to distinct values.

This does not change when the parameters are bound or exchanged for same parameters, and therefore is different from `num_parameters` which counts the number of unique [`Parameter`](qiskit.circuit.Parameter "qiskit.circuit.Parameter") objects currently in the circuit.

**Return type**

`int`

**Returns**

The number of parameters originally available in the circuit.

<Admonition title="Note" type="note">
  This quantity does not require the circuit to be built yet.
</Admonition>

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.num_qubits" />

### num\_qubits

**Return type**

`int`

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.op_start_times" />

### op\_start\_times

Return a list of operation start times.

This attribute is enabled once one of scheduling analysis passes runs on the quantum circuit.

**Return type**

`List`\[`int`]

**Returns**

List of integers representing instruction start times. The index corresponds to the index of instruction in `QuantumCircuit.data`.

**Raises**

**AttributeError** – When circuit is not scheduled.

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.operators" />

### operators

The operators that are evolved in this circuit.

**Returns**

The operators to be evolved (and circuits) contained in this ansatz.

**Return type**

list

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.ordered_parameters" />

### ordered\_parameters

The parameters used in the underlying circuit.

This includes float values and duplicates.

**Examples**

```python
>>> # prepare circuit ...
>>> print(nlocal)
     ┌───────┐┌──────────┐┌──────────┐┌──────────┐
q_0: ┤ Ry(1) ├┤ Ry(θ[1]) ├┤ Ry(θ[1]) ├┤ Ry(θ[3]) ├
     └───────┘└──────────┘└──────────┘└──────────┘
>>> nlocal.parameters
{Parameter(θ[1]), Parameter(θ[3])}
>>> nlocal.ordered_parameters
[1, Parameter(θ[1]), Parameter(θ[1]), Parameter(θ[3])]
```

**Return type**

`List`\[[`Parameter`](qiskit.circuit.Parameter "qiskit.circuit.parameter.Parameter")]

**Returns**

The parameters objects used in the circuit.

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.parameter_bounds" />

### parameter\_bounds

The parameter bounds for the unbound parameters in the circuit.

**Return type**

`Optional`\[`List`\[`Tuple`\[`float`, `float`]]]

**Returns**

A list of pairs indicating the bounds, as (lower, upper). None indicates an unbounded parameter in the corresponding direction. If `None` is returned, problem is fully unbounded.

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

**Return type**

`List`\[[`Qubit`](qiskit.circuit.Qubit "qiskit.circuit.quantumregister.Qubit")]

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.reps" />

### reps

The number of times rotation and entanglement block are repeated.

**Return type**

`int`

**Returns**

The number of repetitions.

<span id="qiskit.circuit.library.EvolvedOperatorAnsatz.rotation_blocks" />

### rotation\_blocks

The blocks in the rotation layers.

**Return type**

`List`\[[`Instruction`](qiskit.circuit.Instruction "qiskit.circuit.instruction.Instruction")]

**Returns**

The blocks in the rotation layers.

