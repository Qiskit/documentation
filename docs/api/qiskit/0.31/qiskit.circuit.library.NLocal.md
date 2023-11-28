# NLocal

<span id="undefined" />

`NLocal(num_qubits=None, rotation_blocks=None, entanglement_blocks=None, entanglement=None, reps=1, insert_barriers=False, parameter_prefix='θ', overwrite_block_parameters=True, skip_final_rotation_layer=False, skip_unentangled_qubits=False, initial_state=None, name='nlocal')`

Bases: `qiskit.circuit.library.blueprintcircuit.BlueprintCircuit`

The n-local circuit class.

The structure of the n-local circuit are alternating rotation and entanglement layers. In both layers, parameterized circuit-blocks act on the circuit in a defined way. In the rotation layer, the blocks are applied stacked on top of each other, while in the entanglement layer according to the `entanglement` strategy. The circuit blocks can have arbitrary sizes (smaller equal to the number of qubits in the circuit). Each layer is repeated `reps` times, and by default a final rotation layer is appended.

For instance, a rotation block on 2 qubits and an entanglement block on 4 qubits using `'linear'` entanglement yields the following circuit.

```python
┌──────┐ ░ ┌──────┐                      ░ ┌──────┐
┤0     ├─░─┤0     ├──────────────── ... ─░─┤0     ├
│  Rot │ ░ │      │┌──────┐              ░ │  Rot │
┤1     ├─░─┤1     ├┤0     ├──────── ... ─░─┤1     ├
├──────┤ ░ │  Ent ││      │┌──────┐      ░ ├──────┤
┤0     ├─░─┤2     ├┤1     ├┤0     ├ ... ─░─┤0     ├
│  Rot │ ░ │      ││  Ent ││      │      ░ │  Rot │
┤1     ├─░─┤3     ├┤2     ├┤1     ├ ... ─░─┤1     ├
├──────┤ ░ └──────┘│      ││  Ent │      ░ ├──────┤
┤0     ├─░─────────┤3     ├┤2     ├ ... ─░─┤0     ├
│  Rot │ ░         └──────┘│      │      ░ │  Rot │
┤1     ├─░─────────────────┤3     ├ ... ─░─┤1     ├
└──────┘ ░                 └──────┘      ░ └──────┘

|                                 |
+---------------------------------+
       repeated reps times
```

If specified, barriers can be inserted in between every block. If an initial state object of Qiskit Aqua is provided, it is added in front of the NLocal.

Create a new n-local circuit.

**Parameters**

*   **num\_qubits** (`Optional`\[`int`]) – The number of qubits of the circuit.
*   **rotation\_blocks** (`Union`\[`QuantumCircuit`, `List`\[`QuantumCircuit`], `Instruction`, `List`\[`Instruction`], `None`]) – The blocks used in the rotation layers. If multiple are passed, these will be applied one after another (like new sub-layers).
*   **entanglement\_blocks** (`Union`\[`QuantumCircuit`, `List`\[`QuantumCircuit`], `Instruction`, `List`\[`Instruction`], `None`]) – The blocks used in the entanglement layers. If multiple are passed, these will be applied one after another. To use different entanglements for the sub-layers, see [`get_entangler_map()`](qiskit.circuit.library.NLocal.get_entangler_map#qiskit.circuit.library.NLocal.get_entangler_map "qiskit.circuit.library.NLocal.get_entangler_map").
*   **entanglement** (`Union`\[`List`\[`int`], `List`\[`List`\[`int`]], `None`]) – The indices specifying on which qubits the input blocks act. If None, the entanglement blocks are applied at the top of the circuit.
*   **reps** (`int`) – Specifies how often the rotation blocks and entanglement blocks are repeated.
*   **insert\_barriers** (`bool`) – If True, barriers are inserted in between each layer. If False, no barriers are inserted.
*   **parameter\_prefix** (`str`) – The prefix used if default parameters are generated.
*   **overwrite\_block\_parameters** (`Union`\[`bool`, `List`\[`List`\[`Parameter`]]]) – If the parameters in the added blocks should be overwritten. If False, the parameters in the blocks are not changed.
*   **skip\_final\_rotation\_layer** (`bool`) – Whether a final rotation layer is added to the circuit.
*   **skip\_unentangled\_qubits** (`bool`) – If `True`, the rotation gates act only on qubits that are entangled. If `False`, the rotation gates act on all qubits.
*   **initial\_state** (`Optional`\[`Any`]) – A QuantumCircuit object which can be used to describe an initial state prepended to the NLocal circuit.
*   **name** (`Optional`\[`str`]) – The name of the circuit.

## Examples

TODO

**Raises**

*   **ImportError** – If an `initial_state` is specified but Qiskit Aqua is not installed.
*   **ValueError** – If reps parameter is less than or equal to 0.
*   **TypeError** – If reps parameter is not an int value.

## Methods Defined Here

|                                                                                                                                                                                              |                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [`add_layer`](qiskit.circuit.library.NLocal.add_layer#qiskit.circuit.library.NLocal.add_layer "qiskit.circuit.library.NLocal.add_layer")                                                     | Append another layer to the NLocal.                                              |
| [`assign_parameters`](qiskit.circuit.library.NLocal.assign_parameters#qiskit.circuit.library.NLocal.assign_parameters "qiskit.circuit.library.NLocal.assign_parameters")                     | Assign parameters to the n-local circuit.                                        |
| [`get_entangler_map`](qiskit.circuit.library.NLocal.get_entangler_map#qiskit.circuit.library.NLocal.get_entangler_map "qiskit.circuit.library.NLocal.get_entangler_map")                     | Get the entangler map for in the repetition `rep_num` and the block `block_num`. |
| [`get_unentangled_qubits`](qiskit.circuit.library.NLocal.get_unentangled_qubits#qiskit.circuit.library.NLocal.get_unentangled_qubits "qiskit.circuit.library.NLocal.get_unentangled_qubits") | Get the indices of unentangled qubits in a set.                                  |
| [`print_settings`](qiskit.circuit.library.NLocal.print_settings#qiskit.circuit.library.NLocal.print_settings "qiskit.circuit.library.NLocal.print_settings")                                 | Returns information about the setting.                                           |

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

### entanglement

Get the entanglement strategy.

**Return type**

`Union`\[`str`, `List`\[`str`], `List`\[`List`\[`str`]], `List`\[`int`], `List`\[`List`\[`int`]], `List`\[`List`\[`List`\[`int`]]], `List`\[`List`\[`List`\[`List`\[`int`]]]], `Callable`\[\[`int`], `str`], `Callable`\[\[`int`], `List`\[`List`\[`int`]]]]

**Returns**

The entanglement strategy, see [`get_entangler_map()`](qiskit.circuit.library.NLocal.get_entangler_map#qiskit.circuit.library.NLocal.get_entangler_map "qiskit.circuit.library.NLocal.get_entangler_map") for more detail on how the format is interpreted.

<span id="undefined" />

### entanglement\_blocks

The blocks in the entanglement layers.

**Return type**

`List`\[`Instruction`]

**Returns**

The blocks in the entanglement layers.

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

The number of total parameters that can be set to distinct values.

This does not change when the parameters are bound or exchanged for same parameters, and therefore is different from `num_parameters` which counts the number of unique [`Parameter`](qiskit.circuit.Parameter#qiskit.circuit.Parameter "qiskit.circuit.Parameter") objects currently in the circuit.

**Return type**

`int`

**Returns**

The number of parameters originally available in the circuit.

<Admonition title="Note" type="note">
  This quantity does not require the circuit to be built yet.
</Admonition>

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
