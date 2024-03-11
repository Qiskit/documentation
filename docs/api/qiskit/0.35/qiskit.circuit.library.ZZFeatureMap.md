---
title: ZZFeatureMap
description: API reference for qiskit.circuit.library.ZZFeatureMap
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.ZZFeatureMap
---

# ZZFeatureMap

<span id="qiskit.circuit.library.ZZFeatureMap" />

`ZZFeatureMap(feature_dimension, reps=2, entanglement='full', data_map_func=None, parameter_prefix='x', insert_barriers=False, name='ZZFeatureMap')` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/circuit/library/data_preparation/zz_feature_map.py "view source code")

Bases: `qiskit.circuit.library.data_preparation.pauli_feature_map.PauliFeatureMap`

Second-order Pauli-Z evolution circuit.

For 3 qubits and 1 repetition and linear entanglement the circuit is represented by:

```python
┌───┐┌─────────────────┐
┤ H ├┤ U1(2.0*φ(x[0])) ├──■────────────────────────────■────────────────────────────────────
├───┤├─────────────────┤┌─┴─┐┌──────────────────────┐┌─┴─┐
┤ H ├┤ U1(2.0*φ(x[1])) ├┤ X ├┤ U1(2.0*φ(x[0],x[1])) ├┤ X ├──■────────────────────────────■──
├───┤├─────────────────┤└───┘└──────────────────────┘└───┘┌─┴─┐┌──────────────────────┐┌─┴─┐
┤ H ├┤ U1(2.0*φ(x[2])) ├──────────────────────────────────┤ X ├┤ U1(2.0*φ(x[1],x[2])) ├┤ X ├
└───┘└─────────────────┘                                  └───┘└──────────────────────┘└───┘
```

where `φ` is a classical non-linear function, which defaults to `φ(x) = x` if and `φ(x,y) = (pi - x)(pi - y)`.

**Examples**

```python
>>> prep = ZZFeatureMap(2, reps=2)
>>> print(prep)
     ┌───┐┌──────────────┐
q_0: ┤ H ├┤ U1(2.0*x[0]) ├──■───────────────────────────────────────■──
     ├───┤├──────────────┤┌─┴─┐┌─────────────────────────────────┐┌─┴─┐
q_1: ┤ H ├┤ U1(2.0*x[1]) ├┤ X ├┤ U1(2.0*(pi - x[0])*(pi - x[1])) ├┤ X ├
     └───┘└──────────────┘└───┘└─────────────────────────────────┘└───┘
```

```python
>>> from qiskit.circuit.library import EfficientSU2
>>> classifier = ZZFeatureMap(3) + EfficientSU2(3)
>>> classifier.num_parameters
15
>>> classifier.parameters  # 'x' for the data preparation, 'θ' for the SU2 parameters
{Parameter(θ[9]), Parameter(θ[4]), Parameter(θ[6]), Parameter(θ[1]), Parameter(x[2]),
Parameter(θ[7]), Parameter(x[1]), Parameter(θ[8]), Parameter(θ[2]), Parameter(θ[10]),
Parameter(θ[5]), Parameter(θ[0]), Parameter(θ[3]), Parameter(x[0]), Parameter(θ[11])}
>>> classifier.count_ops()
OrderedDict([('u1', 12), ('cx', 12), ('ry', 12), ('cz', 9), ('h', 6)])
```

Create a new second-order Pauli-Z expansion.

**Parameters**

*   **feature\_dimension** (`int`) – Number of features.
*   **reps** (`int`) – The number of repeated circuits, has a min. value of 1.
*   **entanglement** (`Union`\[`str`, `List`\[`List`\[`int`]], `Callable`\[\[`int`], `List`\[`int`]]]) – Specifies the entanglement structure. Refer to [`NLocal`](qiskit.circuit.library.NLocal "qiskit.circuit.library.NLocal") for detail.
*   **data\_map\_func** (`Optional`\[`Callable`\[\[`ndarray`], `float`]]) – A mapping function for data x.
*   **parameter\_prefix** (`str`) – The prefix used if default parameters are generated.
*   **insert\_barriers** (`bool`) – If True, barriers are inserted in between the evolution instructions and hadamard layers.

**Raises**

**ValueError** – If the feature dimension is smaller than 2.

## Attributes

<span id="qiskit.circuit.library.ZZFeatureMap.alpha" />

### alpha

The Pauli rotation factor (alpha).

**Return type**

`float`

**Returns**

The Pauli rotation factor.

<span id="qiskit.circuit.library.ZZFeatureMap.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[`AncillaQubit`]

<span id="qiskit.circuit.library.ZZFeatureMap.calibrations" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

**Return type**

`dict`

<span id="qiskit.circuit.library.ZZFeatureMap.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[`Clbit`]

<span id="qiskit.circuit.library.ZZFeatureMap.data" />

### data

<span id="qiskit.circuit.library.ZZFeatureMap.entanglement" />

### entanglement

Get the entanglement strategy.

**Return type**

`Union`\[`str`, `List`\[`str`], `List`\[`List`\[`str`]], `List`\[`int`], `List`\[`List`\[`int`]], `List`\[`List`\[`List`\[`int`]]], `List`\[`List`\[`List`\[`List`\[`int`]]]], `Callable`\[\[`int`], `str`], `Callable`\[\[`int`], `List`\[`List`\[`int`]]]]

**Returns**

The entanglement strategy, see `get_entangler_map()` for more detail on how the format is interpreted.

<span id="qiskit.circuit.library.ZZFeatureMap.entanglement_blocks" />

### entanglement\_blocks

<span id="qiskit.circuit.library.ZZFeatureMap.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.ZZFeatureMap.feature_dimension" />

### feature\_dimension

Returns the feature dimension (which is equal to the number of qubits).

**Return type**

`int`

**Returns**

The feature dimension of this feature map.

<span id="qiskit.circuit.library.ZZFeatureMap.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[`ParameterExpression`, `float`]

<span id="qiskit.circuit.library.ZZFeatureMap.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.ZZFeatureMap.initial_state" />

### initial\_state

Return the initial state that is added in front of the n-local circuit.

**Return type**

`Any`

**Returns**

The initial state.

<span id="qiskit.circuit.library.ZZFeatureMap.insert_barriers" />

### insert\_barriers

If barriers are inserted in between the layers or not.

**Return type**

`bool`

**Returns**

True, if barriers are inserted in between the layers, False if not.

<span id="qiskit.circuit.library.ZZFeatureMap.instances" />

### instances

`= 9`

<span id="qiskit.circuit.library.ZZFeatureMap.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="qiskit.circuit.library.ZZFeatureMap.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.ZZFeatureMap.num_clbits" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="qiskit.circuit.library.ZZFeatureMap.num_layers" />

### num\_layers

Return the number of layers in the n-local circuit.

**Return type**

`int`

**Returns**

The number of layers in the circuit.

<span id="qiskit.circuit.library.ZZFeatureMap.num_parameters" />

### num\_parameters

**Return type**

`int`

<span id="qiskit.circuit.library.ZZFeatureMap.num_parameters_settable" />

### num\_parameters\_settable

The number of distinct parameters.

<span id="qiskit.circuit.library.ZZFeatureMap.num_qubits" />

### num\_qubits

Returns the number of qubits in this circuit.

**Return type**

`int`

**Returns**

The number of qubits.

<span id="qiskit.circuit.library.ZZFeatureMap.ordered_parameters" />

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

<span id="qiskit.circuit.library.ZZFeatureMap.parameter_bounds" />

### parameter\_bounds

The parameter bounds for the unbound parameters in the circuit.

**Return type**

`Optional`\[`List`\[`Tuple`\[`float`, `float`]]]

**Returns**

A list of pairs indicating the bounds, as (lower, upper). None indicates an unbounded parameter in the corresponding direction. If None is returned, problem is fully unbounded.

<span id="qiskit.circuit.library.ZZFeatureMap.parameters" />

### parameters

**Return type**

`ParameterView`

<span id="qiskit.circuit.library.ZZFeatureMap.paulis" />

### paulis

The Pauli strings used in the entanglement of the qubits.

**Return type**

`List`\[`str`]

**Returns**

The Pauli strings as list.

<span id="qiskit.circuit.library.ZZFeatureMap.preferred_init_points" />

### preferred\_init\_points

The initial points for the parameters. Can be stored as initial guess in optimization.

**Return type**

`Optional`\[`List`\[`float`]]

**Returns**

The initial values for the parameters, or None, if none have been set.

<span id="qiskit.circuit.library.ZZFeatureMap.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.ZZFeatureMap.qregs" />

### qregs

A list of the quantum registers associated with the circuit.

<span id="qiskit.circuit.library.ZZFeatureMap.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[`Qubit`]

<span id="qiskit.circuit.library.ZZFeatureMap.reps" />

### reps

The number of times rotation and entanglement block are repeated.

**Return type**

`int`

**Returns**

The number of repetitions.

<span id="qiskit.circuit.library.ZZFeatureMap.rotation_blocks" />

### rotation\_blocks

The blocks in the rotation layers.

**Return type**

`List`\[`Instruction`]

**Returns**

The blocks in the rotation layers.

