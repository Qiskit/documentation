# QAOAAnsatz



`QAOAAnsatz(cost_operator=None, reps=1, initial_state=None, mixer_operator=None, name='QAOA')`

Bases: `qiskit.circuit.library.evolved_operator_ansatz.EvolvedOperatorAnsatz`

A generalized QAOA quantum circuit with a support of custom initial states and mixers.

## References

**\[1]: Farhi et al., A Quantum Approximate Optimization Algorithm.**

[arXiv:1411.4028](https://arxiv.org/pdf/1411.4028)

**Parameters**

*   **cost\_operator** ([*OperatorBase*](qiskit.opflow.OperatorBase#qiskit.opflow.OperatorBase "qiskit.opflow.OperatorBase")*, optional*) – The operator representing the cost of the optimization problem, denoted as $U(C, \gamma)$ in the original paper. Must be set either in the constructor or via property setter.
*   **reps** (*int*) – The integer parameter p, which determines the depth of the circuit, as specified in the original paper, default is 1.
*   **initial\_state** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")*, optional*) – An optional initial state to use. If None is passed then a set of Hadamard gates is applied as an initial state to all qubits.
*   **mixer\_operator** ([*OperatorBase*](qiskit.opflow.OperatorBase#qiskit.opflow.OperatorBase "qiskit.opflow.OperatorBase")  *or*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")*, optional*) – An optional custom mixer to use instead of the global X-rotations, denoted as $U(B, \beta)$ in the original paper. Can be an operator or an optionally parameterized quantum circuit.
*   **name** (*str*) – A name of the circuit, default ‘qaoa’

## Attributes



### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[`AncillaQubit`]



### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

**Return type**

`dict`



### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[`Clbit`]



### cost\_operator

Returns an operator representing the cost of the optimization problem.

**Returns**

cost operator.

**Return type**

[OperatorBase](qiskit.opflow.OperatorBase#qiskit.opflow.OperatorBase "qiskit.opflow.OperatorBase")



### data



### entanglement

Get the entanglement strategy.

**Return type**

`Union`\[`str`, `List`\[`str`], `List`\[`List`\[`str`]], `List`\[`int`], `List`\[`List`\[`int`]], `List`\[`List`\[`List`\[`int`]]], `List`\[`List`\[`List`\[`List`\[`int`]]]], `Callable`\[\[`int`], `str`], `Callable`\[\[`int`], `List`\[`List`\[`int`]]]]

**Returns**

The entanglement strategy, see `get_entangler_map()` for more detail on how the format is interpreted.



### entanglement\_blocks

The blocks in the entanglement layers.

**Return type**

`List`\[`Instruction`]

**Returns**

The blocks in the entanglement layers.



### evolution

The evolution converter used to compute the evolution.

**Returns**

The evolution converter used to compute the evolution.

**Return type**

[EvolutionBase](qiskit.opflow.evolutions.EvolutionBase#qiskit.opflow.evolutions.EvolutionBase "qiskit.opflow.evolutions.EvolutionBase")



### extension\_lib

`= 'include "qelib1.inc";'`



### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[`ParameterExpression`, `float`]



### header

`= 'OPENQASM 2.0;'`



### initial\_state

Returns an optional initial state as a circuit

**Return type**

`Optional`\[`QuantumCircuit`]



### insert\_barriers

If barriers are inserted in between the layers or not.

**Return type**

`bool`

**Returns**

True, if barriers are inserted in between the layers, False if not.



### instances

`= 9`



### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`



### mixer\_operator

Returns an optional mixer operator expressed as an operator or a quantum circuit.

**Returns**

mixer operator or circuit.

**Return type**

[OperatorBase](qiskit.opflow.OperatorBase#qiskit.opflow.OperatorBase "qiskit.opflow.OperatorBase") or [QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit"), optional



### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`



### num\_clbits

Return number of classical bits.

**Return type**

`int`



### num\_layers

Return the number of layers in the n-local circuit.

**Return type**

`int`

**Returns**

The number of layers in the circuit.



### num\_parameters

**Return type**

`int`



### num\_parameters\_settable

The number of total parameters that can be set to distinct values.

This does not change when the parameters are bound or exchanged for same parameters, and therefore is different from `num_parameters` which counts the number of unique [`Parameter`](qiskit.circuit.Parameter#qiskit.circuit.Parameter "qiskit.circuit.Parameter") objects currently in the circuit.

**Return type**

`int`

**Returns**

The number of parameters originally available in the circuit.

<Admonition title="Note" type="note">
  This quantity does not require the circuit to be built yet.
</Admonition>



### num\_qubits

**Return type**

`int`



### operators

The operators that are evolved in this circuit.

**Returns**

**The operators to be evolved (and circuits)**

in this ansatz.

**Return type**

List\[Union\[[OperatorBase](qiskit.opflow.OperatorBase#qiskit.opflow.OperatorBase "qiskit.opflow.OperatorBase"), [QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")]]



### ordered\_parameters

The parameters used in the underlying circuit.

This includes float values and duplicates.

## Examples

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

`List`\[`Parameter`]

**Returns**

The parameters objects used in the circuit.



### parameter\_bounds

The parameter bounds for the unbound parameters in the circuit.

**Return type**

`Optional`\[`List`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`]]]]

**Returns**

A list of pairs indicating the bounds, as (lower, upper). None indicates an unbounded parameter in the corresponding direction. If None is returned, problem is fully unbounded.



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

**Return type**

`List`\[`Qubit`]



### reps

Returns the reps parameter, which determines the depth of the circuit.

**Return type**

`int`



### rotation\_blocks

The blocks in the rotation layers.

**Return type**

`List`\[`Instruction`]

**Returns**

The blocks in the rotation layers.
