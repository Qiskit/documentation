# ZFeatureMap

<span id="undefined" />

`ZFeatureMap(feature_dimension, reps=2, data_map_func=None, insert_barriers=False, name='ZFeatureMap')`

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

This is a sub-class of [`PauliFeatureMap`](qiskit.circuit.library.PauliFeatureMap#qiskit.circuit.library.PauliFeatureMap "qiskit.circuit.library.PauliFeatureMap") where the Pauli strings are fixed as \[‘Z’]. As a result the first order expansion will be a circuit without entangling gates.

## Examples

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
*   **insert\_barriers** (`bool`) – If True, barriers are inserted in between the evolution instructions and hadamard layers.

## Attributes

<span id="undefined" />

### alpha

The Pauli rotation factor (alpha).

**Return type**

`float`

**Returns**

The Pauli rotation factor.

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

<span id="undefined" />

### entanglement

Get the entanglement strategy.

**Return type**

`Union`\[`str`, `List`\[`str`], `List`\[`List`\[`str`]], `List`\[`int`], `List`\[`List`\[`int`]], `List`\[`List`\[`List`\[`int`]]], `List`\[`List`\[`List`\[`List`\[`int`]]]], `Callable`\[\[`int`], `str`], `Callable`\[\[`int`], `List`\[`List`\[`int`]]]]

**Returns**

The entanglement strategy, see `get_entangler_map()` for more detail on how the format is interpreted.

<span id="undefined" />

### entanglement\_blocks

<span id="undefined" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="undefined" />

### feature\_dimension

Returns the feature dimension (which is equal to the number of qubits).

**Return type**

`int`

**Returns**

The feature dimension of this feature map.

<span id="undefined" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[`ParameterExpression`, `float`]

<span id="undefined" />

### header

`= 'OPENQASM 2.0;'`

<span id="undefined" />

### initial\_state

Return the initial state that is added in front of the n-local circuit.

**Return type**

`Any`

**Returns**

The initial state.

<span id="undefined" />

### insert\_barriers

If barriers are inserted in between the layers or not.

**Return type**

`bool`

**Returns**

True, if barriers are inserted in between the layers, False if not.

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

### num\_layers

Return the number of layers in the n-local circuit.

**Return type**

`int`

**Returns**

The number of layers in the circuit.

<span id="undefined" />

### num\_parameters

**Return type**

`int`

<span id="undefined" />

### num\_parameters\_settable

The number of distinct parameters.

<span id="undefined" />

### num\_qubits

Returns the number of qubits in this circuit.

**Return type**

`int`

**Returns**

The number of qubits.

<span id="undefined" />

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

<span id="undefined" />

### parameter\_bounds

The parameter bounds for the unbound parameters in the circuit.

**Return type**

`Optional`\[`List`\[`Tuple`\[`float`, `float`]]]

**Returns**

A list of pairs indicating the bounds, as (lower, upper). None indicates an unbounded parameter in the corresponding direction. If None is returned, problem is fully unbounded.

<span id="undefined" />

### parameters

**Return type**

`ParameterView`

<span id="undefined" />

### paulis

The Pauli strings used in the entanglement of the qubits.

**Return type**

`List`\[`str`]

**Returns**

The Pauli strings as list.

<span id="undefined" />

### preferred\_init\_points

The initial points for the parameters. Can be stored as initial guess in optimization.

**Return type**

`Optional`\[`List`\[`float`]]

**Returns**

The initial values for the parameters, or None, if none have been set.

<span id="undefined" />

### prefix

`= 'circuit'`

<span id="undefined" />

### qregs

A list of the quantum registers associated with the circuit.

<span id="undefined" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[`Qubit`]

<span id="undefined" />

### reps

The number of times rotation and entanglement block are repeated.

**Return type**

`int`

**Returns**

The number of repetitions.

<span id="undefined" />

### rotation\_blocks

The blocks in the rotation layers.

**Return type**

`List`\[`Instruction`]

**Returns**

The blocks in the rotation layers.
