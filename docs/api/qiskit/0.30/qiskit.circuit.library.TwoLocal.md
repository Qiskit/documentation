---
title: TwoLocal
description: API reference for qiskit.circuit.library.TwoLocal
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.TwoLocal
---

# TwoLocal

<span id="qiskit.circuit.library.TwoLocal" />

`TwoLocal(num_qubits=None, rotation_blocks=None, entanglement_blocks=None, entanglement='full', reps=3, skip_unentangled_qubits=False, skip_final_rotation_layer=False, parameter_prefix='θ', insert_barriers=False, initial_state=None, name='TwoLocal')` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/circuit/library/n_local/two_local.py "view source code")

Bases: `qiskit.circuit.library.n_local.n_local.NLocal`

The two-local circuit.

The two-local circuit is a parameterized circuit consisting of alternating rotation layers and entanglement layers. The rotation layers are single qubit gates applied on all qubits. The entanglement layer uses two-qubit gates to entangle the qubits according to a strategy set using `entanglement`. Both the rotation and entanglement gates can be specified as string (e.g. `'ry'` or `'cx'`), as gate-type (e.g. `RYGate` or `CXGate`) or as QuantumCircuit (e.g. a 1-qubit circuit or 2-qubit circuit).

A set of default entanglement strategies is provided:

*   `'full'` entanglement is each qubit is entangled with all the others.
*   `'linear'` entanglement is qubit $i$ entangled with qubit $i + 1$, for all $i \in \{0, 1, ... , n - 2\}$, where $n$ is the total number of qubits.
*   `'circular'` entanglement is linear entanglement but with an additional entanglement of the first and last qubit before the linear part.
*   `'sca'` (shifted-circular-alternating) entanglement is a generalized and modified version of the proposed circuit 14 in [Sim et al.](https://arxiv.org/abs/1905.10876). It consists of circular entanglement where the ‘long’ entanglement connecting the first with the last qubit is shifted by one each block. Furthermore the role of control and target qubits are swapped every block (therefore alternating).

The entanglement can further be specified using an entangler map, which is a list of index pairs, such as

```python
>>> entangler_map = [(0, 1), (1, 2), (2, 0)]
```

If different entanglements per block should be used, provide a list of entangler maps. See the examples below on how this can be used.

```python
>>> entanglement = [entangler_map_layer_1, entangler_map_layer_2, ... ]
```

Barriers can be inserted in between the different layers for better visualization using the `insert_barriers` attribute.

For each parameterized gate a new parameter is generated using a `ParameterVector`. The name of these parameters can be chosen using the `parameter_prefix`.

**Examples**

```python
>>> two = TwoLocal(3, 'ry', 'cx', 'linear', reps=2, insert_barriers=True)
>>> print(two)  # decompose the layers into standard gates
     ┌──────────┐ ░            ░ ┌──────────┐ ░            ░ ┌──────────┐
q_0: ┤ Ry(θ[0]) ├─░───■────────░─┤ Ry(θ[3]) ├─░───■────────░─┤ Ry(θ[6]) ├
     ├──────────┤ ░ ┌─┴─┐      ░ ├──────────┤ ░ ┌─┴─┐      ░ ├──────────┤
q_1: ┤ Ry(θ[1]) ├─░─┤ X ├──■───░─┤ Ry(θ[4]) ├─░─┤ X ├──■───░─┤ Ry(θ[7]) ├
     ├──────────┤ ░ └───┘┌─┴─┐ ░ ├──────────┤ ░ └───┘┌─┴─┐ ░ ├──────────┤
q_2: ┤ Ry(θ[2]) ├─░──────┤ X ├─░─┤ Ry(θ[5]) ├─░──────┤ X ├─░─┤ Ry(θ[8]) ├
     └──────────┘ ░      └───┘ ░ └──────────┘ ░      └───┘ ░ └──────────┘
```

```python
>>> two = TwoLocal(3, ['ry','rz'], 'cz', 'full', reps=1, insert_barriers=True)
>>> qc = QuantumCircuit(3)
>>> qc += two
>>> print(qc.decompose().draw())
     ┌──────────┐┌──────────┐ ░           ░ ┌──────────┐ ┌──────────┐
q_0: ┤ Ry(θ[0]) ├┤ Rz(θ[3]) ├─░──■──■─────░─┤ Ry(θ[6]) ├─┤ Rz(θ[9]) ├
     ├──────────┤├──────────┤ ░  │  │     ░ ├──────────┤┌┴──────────┤
q_1: ┤ Ry(θ[1]) ├┤ Rz(θ[4]) ├─░──■──┼──■──░─┤ Ry(θ[7]) ├┤ Rz(θ[10]) ├
     ├──────────┤├──────────┤ ░     │  │  ░ ├──────────┤├───────────┤
q_2: ┤ Ry(θ[2]) ├┤ Rz(θ[5]) ├─░─────■──■──░─┤ Ry(θ[8]) ├┤ Rz(θ[11]) ├
     └──────────┘└──────────┘ ░           ░ └──────────┘└───────────┘
```

```python
>>> entangler_map = [[0, 1], [1, 2], [2, 0]]  # circular entanglement for 3 qubits
>>> two = TwoLocal(3, 'x', 'crx', entangler_map, reps=1)
>>> print(two)  # note: no barriers inserted this time!
        ┌───┐                             ┌──────────┐┌───┐
q_0: |0>┤ X ├─────■───────────────────────┤ Rx(θ[2]) ├┤ X ├
        ├───┤┌────┴─────┐            ┌───┐└─────┬────┘└───┘
q_1: |0>┤ X ├┤ Rx(θ[0]) ├─────■──────┤ X ├──────┼──────────
        ├───┤└──────────┘┌────┴─────┐└───┘      │     ┌───┐
q_2: |0>┤ X ├────────────┤ Rx(θ[1]) ├───────────■─────┤ X ├
        └───┘            └──────────┘                 └───┘
```

```python
>>> entangler_map = [[0, 3], [0, 2]]  # entangle the first and last two-way
>>> two = TwoLocal(4, [], 'cry', entangler_map, reps=1)
>>> circuit = two + two
>>> print(circuit.decompose().draw())  # note, that the parameters are the same!
q_0: ─────■───────────■───────────■───────────■──────
          │           │           │           │
q_1: ─────┼───────────┼───────────┼───────────┼──────
          │      ┌────┴─────┐     │      ┌────┴─────┐
q_2: ─────┼──────┤ Ry(θ[1]) ├─────┼──────┤ Ry(θ[1]) ├
     ┌────┴─────┐└──────────┘┌────┴─────┐└──────────┘
q_3: ┤ Ry(θ[0]) ├────────────┤ Ry(θ[0]) ├────────────
     └──────────┘            └─────────
```

```python
>>> layer_1 = [(0, 1), (0, 2)]
>>> layer_2 = [(1, 2)]
>>> two = TwoLocal(3, 'x', 'cx', [layer_1, layer_2], reps=2, insert_barriers=True)
>>> print(two)
     ┌───┐ ░            ░ ┌───┐ ░       ░ ┌───┐
q_0: ┤ X ├─░───■────■───░─┤ X ├─░───────░─┤ X ├
     ├───┤ ░ ┌─┴─┐  │   ░ ├───┤ ░       ░ ├───┤
q_1: ┤ X ├─░─┤ X ├──┼───░─┤ X ├─░───■───░─┤ X ├
     ├───┤ ░ └───┘┌─┴─┐ ░ ├───┤ ░ ┌─┴─┐ ░ ├───┤
q_2: ┤ X ├─░──────┤ X ├─░─┤ X ├─░─┤ X ├─░─┤ X ├
     └───┘ ░      └───┘ ░ └───┘ ░ └───┘ ░ └───┘
```

Construct a new two-local circuit.

**Parameters**

*   **num\_qubits** (`Optional`\[`int`]) – The number of qubits of the two-local circuit.
*   **rotation\_blocks** (`Union`\[`str`, `List`\[`str`], `type`, `List`\[`type`], `QuantumCircuit`, `List`\[`QuantumCircuit`], `None`]) – The gates used in the rotation layer. Can be specified via the name of a gate (e.g. ‘ry’) or the gate type itself (e.g. RYGate). If only one gate is provided, the gate same gate is applied to each qubit. If a list of gates is provided, all gates are applied to each qubit in the provided order. See the Examples section for more detail.
*   **entanglement\_blocks** (`Union`\[`str`, `List`\[`str`], `type`, `List`\[`type`], `QuantumCircuit`, `List`\[`QuantumCircuit`], `None`]) – The gates used in the entanglement layer. Can be specified in the same format as rotation\_blocks.
*   **entanglement** (`Union`\[`str`, `List`\[`List`\[`int`]], `Callable`\[\[`int`], `List`\[`int`]]]) – Specifies the entanglement structure. Can be a string (‘full’, ‘linear’ , ‘circular’ or ‘sca’), a list of integer-pairs specifying the indices of qubits entangled with one another, or a callable returning such a list provided with the index of the entanglement layer. Default to ‘full’ entanglement. See the Examples section for more detail.
*   **reps** (`int`) – Specifies how often a block consisting of a rotation layer and entanglement layer is repeated.
*   **skip\_unentangled\_qubits** (`bool`) – If True, the single qubit gates are only applied to qubits that are entangled with another qubit. If False, the single qubit gates are applied to each qubit in the Ansatz. Defaults to False.
*   **skip\_final\_rotation\_layer** (`bool`) – If False, a rotation layer is added at the end of the ansatz. If True, no rotation layer is added.
*   **parameter\_prefix** (`str`) – The parameterized gates require a parameter to be defined, for which we use instances of qiskit.circuit.Parameter. The name of each parameter will be this specified prefix plus its index.
*   **insert\_barriers** (`bool`) – If True, barriers are inserted in between each layer. If False, no barriers are inserted. Defaults to False.
*   **initial\_state** (`Optional`\[`Any`]) – A QuantumCircuit object to prepend to the circuit.

## Methods Defined Here

### get\_entangler\_map

<span id="qiskit.circuit.library.TwoLocal.get_entangler_map" />

`TwoLocal.get_entangler_map(rep_num, block_num, num_block_qubits)`

Overloading to handle the special case of 1 qubit where the entanglement are ignored.

**Return type**

`List`\[`List`\[`int`]]

## Attributes

<span id="qiskit.circuit.library.TwoLocal.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

<span id="qiskit.circuit.library.TwoLocal.calibrations" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

<span id="qiskit.circuit.library.TwoLocal.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

<span id="qiskit.circuit.library.TwoLocal.data" />

### data

<span id="qiskit.circuit.library.TwoLocal.entanglement" />

### entanglement

Get the entanglement strategy.

**Return type**

`Union`\[`str`, `List`\[`str`], `List`\[`List`\[`str`]], `List`\[`int`], `List`\[`List`\[`int`]], `List`\[`List`\[`List`\[`int`]]], `List`\[`List`\[`List`\[`List`\[`int`]]]], `Callable`\[\[`int`], `str`], `Callable`\[\[`int`], `List`\[`List`\[`int`]]]]

**Returns**

The entanglement strategy, see [`get_entangler_map()`](qiskit.circuit.library.TwoLocal#get_entangler_map "qiskit.circuit.library.TwoLocal.get_entangler_map") for more detail on how the format is interpreted.

<span id="qiskit.circuit.library.TwoLocal.entanglement_blocks" />

### entanglement\_blocks

The blocks in the entanglement layers.

**Return type**

`List`\[`Instruction`]

**Returns**

The blocks in the entanglement layers.

<span id="qiskit.circuit.library.TwoLocal.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.TwoLocal.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

<span id="qiskit.circuit.library.TwoLocal.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.TwoLocal.initial_state" />

### initial\_state

Return the initial state that is added in front of the n-local circuit.

**Return type**

`Any`

**Returns**

The initial state.

<span id="qiskit.circuit.library.TwoLocal.insert_barriers" />

### insert\_barriers

If barriers are inserted in between the layers or not.

**Return type**

`bool`

**Returns**

True, if barriers are inserted in between the layers, False if not.

<span id="qiskit.circuit.library.TwoLocal.instances" />

### instances

`= 16`

<span id="qiskit.circuit.library.TwoLocal.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

<span id="qiskit.circuit.library.TwoLocal.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

<span id="qiskit.circuit.library.TwoLocal.num_clbits" />

### num\_clbits

Return number of classical bits.

<span id="qiskit.circuit.library.TwoLocal.num_layers" />

### num\_layers

Return the number of layers in the n-local circuit.

**Return type**

`int`

**Returns**

The number of layers in the circuit.

<span id="qiskit.circuit.library.TwoLocal.num_parameters" />

### num\_parameters

**Return type**

`int`

<span id="qiskit.circuit.library.TwoLocal.num_parameters_settable" />

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

<span id="qiskit.circuit.library.TwoLocal.num_qubits" />

### num\_qubits

Returns the number of qubits in this circuit.

**Return type**

`int`

**Returns**

The number of qubits.

<span id="qiskit.circuit.library.TwoLocal.ordered_parameters" />

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

<span id="qiskit.circuit.library.TwoLocal.parameter_bounds" />

### parameter\_bounds

The parameter bounds for the unbound parameters in the circuit.

**Return type**

`Optional`\[`List`\[`Tuple`\[`float`, `float`]]]

**Returns**

A list of pairs indicating the bounds, as (lower, upper). None indicates an unbounded parameter in the corresponding direction. If None is returned, problem is fully unbounded.

<span id="qiskit.circuit.library.TwoLocal.parameters" />

### parameters

**Return type**

`ParameterView`

<span id="qiskit.circuit.library.TwoLocal.preferred_init_points" />

### preferred\_init\_points

The initial points for the parameters. Can be stored as initial guess in optimization.

**Return type**

`Optional`\[`List`\[`float`]]

**Returns**

The initial values for the parameters, or None, if none have been set.

<span id="qiskit.circuit.library.TwoLocal.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.TwoLocal.qregs" />

### qregs

A list of the quantum registers associated with the circuit.

<span id="qiskit.circuit.library.TwoLocal.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

<span id="qiskit.circuit.library.TwoLocal.reps" />

### reps

The number of times rotation and entanglement block are repeated.

**Return type**

`int`

**Returns**

The number of repetitions.

<span id="qiskit.circuit.library.TwoLocal.rotation_blocks" />

### rotation\_blocks

The blocks in the rotation layers.

**Return type**

`List`\[`Instruction`]

**Returns**

The blocks in the rotation layers.

