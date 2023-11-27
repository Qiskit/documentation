# PauliFeatureMap[¶](#paulifeaturemap "Permalink to this headline")

<span id="undefined" />

`PauliFeatureMap(feature_dimension=None, reps=2, entanglement='full', alpha=2.0, paulis=None, data_map_func=None, parameter_prefix='x', insert_barriers=False, name='PauliFeatureMap')`

Bases: `qiskit.circuit.library.n_local.n_local.NLocal`

The Pauli Expansion circuit.

The Pauli Expansion circuit is a data encoding circuit that transforms input data $\vec{x} \in \mathbb{R}^n$ as

$$
U_{\Phi(\vec{x})}=\exp\left(i\sum_{S\subseteq [n]}
\phi_S(\vec{x})\prod_{i\in S} P_i\right)
$$

The circuit contains `reps` repetitions of this transformation. The variable $P_i \in \{ I, X, Y, Z \}$ denotes the Pauli matrices. The index $S$ describes connectivities between different qubits or datapoints: $S \in \{\binom{n}{k}\ combinations,\ k = 1,... n \}$. Per default the data-mapping $\phi_S$ is

$$
\begin{split}\phi_S(\vec{x}) = \begin{cases}
    x_0 \text{ if } k = 1 \\
    \prod_{j \in S} (\pi - x_j) \text{ otherwise }
    \end{cases}\end{split}
$$

For example, if the Pauli strings are chosen to be $P_0 = Z$ and $P_{0,1} = YY$ on 2 qubits and with 1 repetition using the default data-mapping, the Pauli evolution feature map is represented by:

```python
┌───┐┌──────────────┐┌──────────┐                                             ┌───────────┐
┤ H ├┤ U1(2.0*x[0]) ├┤ RX(pi/2) ├──■───────────────────────────────────────■──┤ RX(-pi/2) ├
├───┤├──────────────┤├──────────┤┌─┴─┐┌─────────────────────────────────┐┌─┴─┐├───────────┤
┤ H ├┤ U1(2.0*x[1]) ├┤ RX(pi/2) ├┤ X ├┤ U1(2.0*(pi - x[0])*(pi - x[1])) ├┤ X ├┤ RX(-pi/2) ├
└───┘└──────────────┘└──────────┘└───┘└─────────────────────────────────┘└───┘└───────────┘
```

Please refer to [`ZFeatureMap`](qiskit.circuit.library.ZFeatureMap#qiskit.circuit.library.ZFeatureMap "qiskit.circuit.library.ZFeatureMap") for the case $k = 1$, $P_0 = Z$ and to [`ZZFeatureMap`](qiskit.circuit.library.ZZFeatureMap#qiskit.circuit.library.ZZFeatureMap "qiskit.circuit.library.ZZFeatureMap") for the case $k = 2$, $P_0 = Z$ and $P_{0,1} = ZZ$.

## Examples

```python
>>> prep = PauliFeatureMap(2, reps=1, paulis=['ZZ'])
>>> print(prep)
     ┌───┐
q_0: ┤ H ├──■───────────────────────────────────────■──
     ├───┤┌─┴─┐┌─────────────────────────────────┐┌─┴─┐
q_1: ┤ H ├┤ X ├┤ U1(2.0*(pi - x[0])*(pi - x[1])) ├┤ X ├
     └───┘└───┘└─────────────────────────────────┘└───┘
```

```python
>>> prep = PauliFeatureMap(2, reps=1, paulis=['Z', 'XX'])
>>> print(prep)
     ┌───┐┌──────────────┐┌───┐                                             ┌───┐
q_0: ┤ H ├┤ U1(2.0*x[0]) ├┤ H ├──■───────────────────────────────────────■──┤ H ├
     ├───┤├──────────────┤├───┤┌─┴─┐┌─────────────────────────────────┐┌─┴─┐├───┤
q_1: ┤ H ├┤ U1(2.0*x[1]) ├┤ H ├┤ X ├┤ U1(2.0*(pi - x[0])*(pi - x[1])) ├┤ X ├┤ H ├
     └───┘└──────────────┘└───┘└───┘└─────────────────────────────────┘└───┘└───┘
```

```python
>>> prep = PauliFeatureMap(2, reps=1, paulis=['ZY'])
>>> print(prep)
     ┌───┐┌──────────┐                                             ┌───────────┐
q_0: ┤ H ├┤ RX(pi/2) ├──■───────────────────────────────────────■──┤ RX(-pi/2) ├
     ├───┤└──────────┘┌─┴─┐┌─────────────────────────────────┐┌─┴─┐└───────────┘
q_1: ┤ H ├────────────┤ X ├┤ U1(2.0*(pi - x[0])*(pi - x[1])) ├┤ X ├─────────────
     └───┘            └───┘└─────────────────────────────────┘└───┘
```

```python
>>> from qiskit.circuit.library import EfficientSU2
>>> prep = PauliFeatureMap(3, reps=3, paulis=['Z', 'YY', 'ZXZ'])
>>> wavefunction = EfficientSU2(3)
>>> classifier = prep.compose(wavefunction
>>> classifier.num_parameters
27
>>> classifier.count_ops()
OrderedDict([('cx', 39), ('rx', 36), ('u1', 21), ('h', 15), ('ry', 12), ('rz', 12)])
```

## References

**\[1]: Havlicek et al. (2018), Supervised learning with quantum enhanced feature spaces.**

[arXiv:1804.11326](https://arxiv.org/abs/1804.11326)

Create a new Pauli expansion circuit.

**Parameters**

*   **feature\_dimension** (`Optional`\[`int`]) – Number of qubits in the circuit.
*   **reps** (`int`) – The number of repeated circuits.
*   **entanglement** (`Union`\[`str`, `List`\[`List`\[`int`]], `Callable`\[\[`int`], `List`\[`int`]]]) – Specifies the entanglement structure. Refer to [`NLocal`](qiskit.circuit.library.NLocal#qiskit.circuit.library.NLocal "qiskit.circuit.library.NLocal") for detail.
*   **alpha** (`float`) – The Pauli rotation factor, multiplicative to the pauli rotations
*   **paulis** (`Optional`\[`List`\[`str`]]) – A list of strings for to-be-used paulis. If None are provided, `['Z', 'ZZ']` will be used.
*   **data\_map\_func** (`Optional`\[`Callable`\[\[`ndarray`], `float`]]) – A mapping function for data x which can be supplied to override the default mapping from `self_product()`.
*   **parameter\_prefix** (`str`) – The prefix used if default parameters are generated.
*   **insert\_barriers** (`bool`) – If True, barriers are inserted in between the evolution instructions and hadamard layers.

## Methods Defined Here

|                                                                                                                                                                                             |                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| [`pauli_block`](qiskit.circuit.library.PauliFeatureMap.pauli_block#qiskit.circuit.library.PauliFeatureMap.pauli_block "qiskit.circuit.library.PauliFeatureMap.pauli_block")                 | Get the Pauli block for the feature map circuit.    |
| [`pauli_evolution`](qiskit.circuit.library.PauliFeatureMap.pauli_evolution#qiskit.circuit.library.PauliFeatureMap.pauli_evolution "qiskit.circuit.library.PauliFeatureMap.pauli_evolution") | Get the evolution block for the given pauli string. |

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
