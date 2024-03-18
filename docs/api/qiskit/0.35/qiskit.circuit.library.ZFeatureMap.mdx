---
title: ZFeatureMap
description: API reference for qiskit.circuit.library.ZFeatureMap
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.ZFeatureMap
---

# ZFeatureMap

<span id="qiskit.circuit.library.ZFeatureMap" />

`ZFeatureMap(feature_dimension, reps=2, data_map_func=None, parameter_prefix='x', insert_barriers=False, name='ZFeatureMap')` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/circuit/library/data_preparation/z_feature_map.py "view source code")

Bases: `qiskit.circuit.library.data_preparation.pauli_feature_map.PauliFeatureMap`

The first order Pauli Z-evolution circuit.

On 3 qubits and with 2 repetitions the circuit is represented by:

```python
┌───┐┌──────────────┐┌───┐┌──────────────┐
┤ H ├┤ U1(2.0*x[0]) ├┤ H ├┤ U1(2.0*x[0]) ├
├───┤├──────────────┤├───┤├──────────────┤
┤ H ├┤ U1(2.0*x[1]) ├┤ H ├┤ U1(2.0*x[1]) ├
├───┤├──────────────┤├───┤├──────────────┤
┤ H ├┤ U1(2.0*x[2]) ├┤ H ├┤ U1(2.0*x[2]) ├
└───┘└──────────────┘└───┘└──────────────┘
```

This is a sub-class of [`PauliFeatureMap`](qiskit.circuit.library.PauliFeatureMap "qiskit.circuit.library.PauliFeatureMap") where the Pauli strings are fixed as \[‘Z’]. As a result the first order expansion will be a circuit without entangling gates.

**Examples**

```python
>>> prep = ZFeatureMap(3, reps=3, insert_barriers=True)
>>> print(prep)
     ┌───┐ ░ ┌──────────────┐ ░ ┌───┐ ░ ┌──────────────┐ ░ ┌───┐ ░ ┌──────────────┐
q_0: ┤ H ├─░─┤ U1(2.0*x[0]) ├─░─┤ H ├─░─┤ U1(2.0*x[0]) ├─░─┤ H ├─░─┤ U1(2.0*x[0]) ├
     ├───┤ ░ ├──────────────┤ ░ ├───┤ ░ ├──────────────┤ ░ ├───┤ ░ ├──────────────┤
q_1: ┤ H ├─░─┤ U1(2.0*x[1]) ├─░─┤ H ├─░─┤ U1(2.0*x[1]) ├─░─┤ H ├─░─┤ U1(2.0*x[1]) ├
     ├───┤ ░ ├──────────────┤ ░ ├───┤ ░ ├──────────────┤ ░ ├───┤ ░ ├──────────────┤
q_2: ┤ H ├─░─┤ U1(2.0*x[2]) ├─░─┤ H ├─░─┤ U1(2.0*x[2]) ├─░─┤ H ├─░─┤ U1(2.0*x[2]) ├
     └───┘ ░ └──────────────┘ ░ └───┘ ░ └──────────────┘ ░ └───┘ ░ └──────────────┘
```

```python
>>> data_map = lambda x: x[0]*x[0] + 1  # note: input is an array
>>> prep = ZFeatureMap(3, reps=1, data_map_func=data_map)
>>> print(prep)
     ┌───┐┌───────────────────────┐
q_0: ┤ H ├┤ U1(2.0*x[0]**2 + 2.0) ├
     ├───┤├───────────────────────┤
q_1: ┤ H ├┤ U1(2.0*x[1]**2 + 2.0) ├
     ├───┤├───────────────────────┤
q_2: ┤ H ├┤ U1(2.0*x[2]**2 + 2.0) ├
     └───┘└───────────────────────┘
```

```python
>>> classifier = ZFeatureMap(3, reps=1) + RY(3, reps=1)
>>> print(classifier)
     ┌───┐┌──────────────┐┌──────────┐      ┌──────────┐
q_0: ┤ H ├┤ U1(2.0*x[0]) ├┤ RY(θ[0]) ├─■──■─┤ RY(θ[3]) ├────────────
     ├───┤├──────────────┤├──────────┤ │  │ └──────────┘┌──────────┐
q_1: ┤ H ├┤ U1(2.0*x[1]) ├┤ RY(θ[1]) ├─■──┼──────■──────┤ RY(θ[4]) ├
     ├───┤├──────────────┤├──────────┤    │      │      ├──────────┤
q_2: ┤ H ├┤ U1(2.0*x[2]) ├┤ RY(θ[2]) ├────■──────■──────┤ RY(θ[5]) ├
     └───┘└──────────────┘└──────────┘                  └──────────┘
```

Create a new first-order Pauli-Z expansion circuit.

**Parameters**

*   **feature\_dimension** (`int`) – The number of features
*   **reps** (`int`) – The number of repeated circuits. Defaults to 2, has a minimum value of 1.
*   **data\_map\_func** (`Optional`\[`Callable`\[\[`ndarray`], `float`]]) – A mapping function for data x which can be supplied to override the default mapping from `self_product()`.
*   **parameter\_prefix** (`str`) – The prefix used if default parameters are generated.
*   **insert\_barriers** (`bool`) – If True, barriers are inserted in between the evolution instructions and hadamard layers.

## Attributes

<span id="qiskit.circuit.library.ZFeatureMap.alpha" />

### alpha

The Pauli rotation factor (alpha).

**Return type**

`float`

**Returns**

The Pauli rotation factor.

<span id="qiskit.circuit.library.ZFeatureMap.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[`AncillaQubit`]

<span id="qiskit.circuit.library.ZFeatureMap.calibrations" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

**Return type**

`dict`

<span id="qiskit.circuit.library.ZFeatureMap.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[`Clbit`]

<span id="qiskit.circuit.library.ZFeatureMap.data" />

### data

<span id="qiskit.circuit.library.ZFeatureMap.entanglement" />

### entanglement

Get the entanglement strategy.

**Return type**

`Union`\[`str`, `List`\[`str`], `List`\[`List`\[`str`]], `List`\[`int`], `List`\[`List`\[`int`]], `List`\[`List`\[`List`\[`int`]]], `List`\[`List`\[`List`\[`List`\[`int`]]]], `Callable`\[\[`int`], `str`], `Callable`\[\[`int`], `List`\[`List`\[`int`]]]]

**Returns**

The entanglement strategy, see `get_entangler_map()` for more detail on how the format is interpreted.

<span id="qiskit.circuit.library.ZFeatureMap.entanglement_blocks" />

### entanglement\_blocks

<span id="qiskit.circuit.library.ZFeatureMap.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.ZFeatureMap.feature_dimension" />

### feature\_dimension

Returns the feature dimension (which is equal to the number of qubits).

**Return type**

`int`

**Returns**

The feature dimension of this feature map.

<span id="qiskit.circuit.library.ZFeatureMap.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[`ParameterExpression`, `float`]

<span id="qiskit.circuit.library.ZFeatureMap.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.ZFeatureMap.initial_state" />

### initial\_state

Return the initial state that is added in front of the n-local circuit.

**Return type**

`Any`

**Returns**

The initial state.

<span id="qiskit.circuit.library.ZFeatureMap.insert_barriers" />

### insert\_barriers

If barriers are inserted in between the layers or not.

**Return type**

`bool`

**Returns**

True, if barriers are inserted in between the layers, False if not.

<span id="qiskit.circuit.library.ZFeatureMap.instances" />

### instances

`= 9`

<span id="qiskit.circuit.library.ZFeatureMap.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="qiskit.circuit.library.ZFeatureMap.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.ZFeatureMap.num_clbits" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="qiskit.circuit.library.ZFeatureMap.num_layers" />

### num\_layers

Return the number of layers in the n-local circuit.

**Return type**

`int`

**Returns**

The number of layers in the circuit.

<span id="qiskit.circuit.library.ZFeatureMap.num_parameters" />

### num\_parameters

**Return type**

`int`

<span id="qiskit.circuit.library.ZFeatureMap.num_parameters_settable" />

### num\_parameters\_settable

The number of distinct parameters.

<span id="qiskit.circuit.library.ZFeatureMap.num_qubits" />

### num\_qubits

Returns the number of qubits in this circuit.

**Return type**

`int`

**Returns**

The number of qubits.

<span id="qiskit.circuit.library.ZFeatureMap.ordered_parameters" />

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

`List`\[`Parameter`]

**Returns**

The parameters objects used in the circuit.

<span id="qiskit.circuit.library.ZFeatureMap.parameter_bounds" />

### parameter\_bounds

The parameter bounds for the unbound parameters in the circuit.

**Return type**

`Optional`\[`List`\[`Tuple`\[`float`, `float`]]]

**Returns**

A list of pairs indicating the bounds, as (lower, upper). None indicates an unbounded parameter in the corresponding direction. If None is returned, problem is fully unbounded.

<span id="qiskit.circuit.library.ZFeatureMap.parameters" />

### parameters

**Return type**

`ParameterView`

<span id="qiskit.circuit.library.ZFeatureMap.paulis" />

### paulis

The Pauli strings used in the entanglement of the qubits.

**Return type**

`List`\[`str`]

**Returns**

The Pauli strings as list.

<span id="qiskit.circuit.library.ZFeatureMap.preferred_init_points" />

### preferred\_init\_points

The initial points for the parameters. Can be stored as initial guess in optimization.

**Return type**

`Optional`\[`List`\[`float`]]

**Returns**

The initial values for the parameters, or None, if none have been set.

<span id="qiskit.circuit.library.ZFeatureMap.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.ZFeatureMap.qregs" />

### qregs

A list of the quantum registers associated with the circuit.

<span id="qiskit.circuit.library.ZFeatureMap.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[`Qubit`]

<span id="qiskit.circuit.library.ZFeatureMap.reps" />

### reps

The number of times rotation and entanglement block are repeated.

**Return type**

`int`

**Returns**

The number of repetitions.

<span id="qiskit.circuit.library.ZFeatureMap.rotation_blocks" />

### rotation\_blocks

The blocks in the rotation layers.

**Return type**

`List`\[`Instruction`]

**Returns**

The blocks in the rotation layers.

