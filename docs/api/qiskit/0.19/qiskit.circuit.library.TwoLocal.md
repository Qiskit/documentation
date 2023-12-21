---
title: TwoLocal
description: API reference for qiskit.circuit.library.TwoLocal
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.TwoLocal
---

# TwoLocal

<span id="qiskit.circuit.library.TwoLocal" />

`TwoLocal(num_qubits=None, rotation_blocks=None, entanglement_blocks=None, entanglement='full', reps=3, skip_unentangled_qubits=False, skip_final_rotation_layer=False, parameter_prefix='θ', insert_barriers=False, initial_state=None)`

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

Construct a new two-local circuit.

**Parameters**

*   **num\_qubits** (`Optional`\[`int`]) – The number of qubits of the two-local circuit.
*   **rotation\_blocks** (`Union`\[`str`, `List`\[`str`], `type`, `List`\[`type`], [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), `List`\[[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")], `None`]) – The gates used in the rotation layer. Can be specified via the name of a gate (e.g. ‘ry’) or the gate type itself (e.g. RYGate). If only one gate is provided, the gate same gate is applied to each qubit. If a list of gates is provided, all gates are applied to each qubit in the provided order. See the Examples section for more detail.
*   **entanglement\_blocks** (`Union`\[`str`, `List`\[`str`], `type`, `List`\[`type`], [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), `List`\[[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")], `None`]) – The gates used in the entanglement layer. Can be specified in the same format as rotation\_blocks.
*   **entanglement** (`Union`\[`str`, `List`\[`List`\[`int`]], `Callable`\[\[`int`], `List`\[`int`]]]) – Specifies the entanglement structure. Can be a string (‘full’, ‘linear’ , ‘circular’ or ‘sca’), a list of integer-pairs specifying the indices of qubits entangled with one another, or a callable returning such a list provided with the index of the entanglement layer. Default to ‘full’ entanglement. See the Examples section for more detail.
*   **reps** (`int`) – Specifies how often a block consisting of a rotation layer and entanglement layer is repeated.
*   **skip\_unentangled\_qubits** (`bool`) – If True, the single qubit gates are only applied to qubits that are entangled with another qubit. If False, the single qubit gates are applied to each qubit in the Ansatz. Defaults to False.
*   **skip\_final\_rotation\_layer** (`bool`) – If False, a rotation layer is added at the end of the ansatz. If True, no rotation layer is added.
*   **parameter\_prefix** (`str`) – The parameterized gates require a parameter to be defined, for which we use instances of qiskit.circuit.Parameter. The name of each parameter will be this specified prefix plus its index.
*   **insert\_barriers** (`bool`) – If True, barriers are inserted in between each layer. If False, no barriers are inserted. Defaults to False.
*   **initial\_state** (`Optional`\[`Any`]) – An InitialState object to prepend to the circuit.

## Examples

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

## Attributes

|                                                                                                                                                         |                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [`TwoLocal.clbits`](qiskit.circuit.library.TwoLocal.clbits "qiskit.circuit.library.TwoLocal.clbits")                                                    | Returns a list of classical bits in the order that the registers were added.                       |
| [`TwoLocal.data`](qiskit.circuit.library.TwoLocal.data "qiskit.circuit.library.TwoLocal.data")                                                          | Return the circuit data (instructions and context).                                                |
| [`TwoLocal.entanglement`](qiskit.circuit.library.TwoLocal.entanglement "qiskit.circuit.library.TwoLocal.entanglement")                                  | Get the entanglement strategy.                                                                     |
| [`TwoLocal.entanglement_blocks`](qiskit.circuit.library.TwoLocal.entanglement_blocks "qiskit.circuit.library.TwoLocal.entanglement_blocks")             | The blocks in the entanglement layers.                                                             |
| [`TwoLocal.extension_lib`](qiskit.circuit.library.TwoLocal.extension_lib "qiskit.circuit.library.TwoLocal.extension_lib")                               |                                                                                                    |
| [`TwoLocal.header`](qiskit.circuit.library.TwoLocal.header "qiskit.circuit.library.TwoLocal.header")                                                    |                                                                                                    |
| [`TwoLocal.initial_state`](qiskit.circuit.library.TwoLocal.initial_state "qiskit.circuit.library.TwoLocal.initial_state")                               | Return the initial state that is added in front of the n-local circuit.                            |
| [`TwoLocal.insert_barriers`](qiskit.circuit.library.TwoLocal.insert_barriers "qiskit.circuit.library.TwoLocal.insert_barriers")                         | If barriers are inserted in between the layers or not.                                             |
| [`TwoLocal.instances`](qiskit.circuit.library.TwoLocal.instances "qiskit.circuit.library.TwoLocal.instances")                                           |                                                                                                    |
| [`TwoLocal.n_qubits`](qiskit.circuit.library.TwoLocal.n_qubits "qiskit.circuit.library.TwoLocal.n_qubits")                                              | Deprecated, use `num_qubits` instead.                                                              |
| [`TwoLocal.num_clbits`](qiskit.circuit.library.TwoLocal.num_clbits "qiskit.circuit.library.TwoLocal.num_clbits")                                        | Return number of classical bits.                                                                   |
| [`TwoLocal.num_layers`](qiskit.circuit.library.TwoLocal.num_layers "qiskit.circuit.library.TwoLocal.num_layers")                                        | Return the number of layers in the n-local circuit.                                                |
| [`TwoLocal.num_parameters`](qiskit.circuit.library.TwoLocal.num_parameters "qiskit.circuit.library.TwoLocal.num_parameters")                            | Convenience function to get the number of parameter objects in the circuit.                        |
| [`TwoLocal.num_parameters_settable`](qiskit.circuit.library.TwoLocal.num_parameters_settable "qiskit.circuit.library.TwoLocal.num_parameters_settable") | The number of total parameters that can be set to distinct values.                                 |
| [`TwoLocal.num_qubits`](qiskit.circuit.library.TwoLocal.num_qubits "qiskit.circuit.library.TwoLocal.num_qubits")                                        | Returns the number of qubits in this circuit.                                                      |
| [`TwoLocal.ordered_parameters`](qiskit.circuit.library.TwoLocal.ordered_parameters "qiskit.circuit.library.TwoLocal.ordered_parameters")                | The parameters used in the underlying circuit.                                                     |
| [`TwoLocal.parameter_bounds`](qiskit.circuit.library.TwoLocal.parameter_bounds "qiskit.circuit.library.TwoLocal.parameter_bounds")                      | The parameter bounds for the unbound parameters in the circuit.                                    |
| [`TwoLocal.parameters`](qiskit.circuit.library.TwoLocal.parameters "qiskit.circuit.library.TwoLocal.parameters")                                        | Get the [`Parameter`](qiskit.circuit.Parameter "qiskit.circuit.Parameter") objects in the circuit. |
| [`TwoLocal.preferred_init_points`](qiskit.circuit.library.TwoLocal.preferred_init_points "qiskit.circuit.library.TwoLocal.preferred_init_points")       | The initial points for the parameters.                                                             |
| [`TwoLocal.prefix`](qiskit.circuit.library.TwoLocal.prefix "qiskit.circuit.library.TwoLocal.prefix")                                                    |                                                                                                    |
| [`TwoLocal.qregs`](qiskit.circuit.library.TwoLocal.qregs "qiskit.circuit.library.TwoLocal.qregs")                                                       | A list of the quantum registers associated with the circuit.                                       |
| [`TwoLocal.qubits`](qiskit.circuit.library.TwoLocal.qubits "qiskit.circuit.library.TwoLocal.qubits")                                                    | Returns a list of quantum bits in the order that the registers were added.                         |
| [`TwoLocal.reps`](qiskit.circuit.library.TwoLocal.reps "qiskit.circuit.library.TwoLocal.reps")                                                          | The number of times rotation and entanglement block are repeated.                                  |
| [`TwoLocal.rotation_blocks`](qiskit.circuit.library.TwoLocal.rotation_blocks "qiskit.circuit.library.TwoLocal.rotation_blocks")                         | The blocks in the rotation layers.                                                                 |

## Methods

|                                                                                                                                                                              |                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| [`TwoLocal.AND`](qiskit.circuit.library.TwoLocal.AND "qiskit.circuit.library.TwoLocal.AND")(qr\_variables, qb\_target, …\[, …])                                              | Build a collective conjunction (AND) circuit in place using mct.                                             |
| [`TwoLocal.OR`](qiskit.circuit.library.TwoLocal.OR "qiskit.circuit.library.TwoLocal.OR")(qr\_variables, qb\_target, qr\_ancillae)                                            | Build a collective disjunction (OR) circuit in place using mct.                                              |
| [`TwoLocal.__getitem__`](qiskit.circuit.library.TwoLocal.__getitem__ "qiskit.circuit.library.TwoLocal.__getitem__")(item)                                                    | Return indexed operation.                                                                                    |
| [`TwoLocal.__len__`](qiskit.circuit.library.TwoLocal.__len__ "qiskit.circuit.library.TwoLocal.__len__")()                                                                    | Return number of operations in circuit.                                                                      |
| [`TwoLocal.add_layer`](qiskit.circuit.library.TwoLocal.add_layer "qiskit.circuit.library.TwoLocal.add_layer")(other\[, entanglement, front])                                 | Append another layer to the NLocal.                                                                          |
| [`TwoLocal.add_register`](qiskit.circuit.library.TwoLocal.add_register "qiskit.circuit.library.TwoLocal.add_register")(\*regs)                                               | Add registers.                                                                                               |
| [`TwoLocal.append`](qiskit.circuit.library.TwoLocal.append "qiskit.circuit.library.TwoLocal.append")(instruction\[, qargs, cargs])                                           | Append one or more instructions to the end of the circuit, modifying the circuit in place.                   |
| [`TwoLocal.assign_parameters`](qiskit.circuit.library.TwoLocal.assign_parameters "qiskit.circuit.library.TwoLocal.assign_parameters")(param\_dict\[, inplace])               | Assign parameters to the n-local circuit.                                                                    |
| [`TwoLocal.barrier`](qiskit.circuit.library.TwoLocal.barrier "qiskit.circuit.library.TwoLocal.barrier")(\*qargs)                                                             | Apply `Barrier`.                                                                                             |
| [`TwoLocal.bind_parameters`](qiskit.circuit.library.TwoLocal.bind_parameters "qiskit.circuit.library.TwoLocal.bind_parameters")(value\_dict)                                 | Assign numeric parameters to values yielding a new circuit.                                                  |
| [`TwoLocal.cast`](qiskit.circuit.library.TwoLocal.cast "qiskit.circuit.library.TwoLocal.cast")(value, \_type)                                                                | Best effort to cast value to type.                                                                           |
| [`TwoLocal.cbit_argument_conversion`](qiskit.circuit.library.TwoLocal.cbit_argument_conversion "qiskit.circuit.library.TwoLocal.cbit_argument_conversion")(…)                | Converts several classical bit representations (such as indexes, range, etc.) into a list of classical bits. |
| [`TwoLocal.ccx`](qiskit.circuit.library.TwoLocal.ccx "qiskit.circuit.library.TwoLocal.ccx")(control\_qubit1, control\_qubit2, …)                                             | Apply [`CCXGate`](qiskit.circuit.library.CCXGate "qiskit.circuit.library.CCXGate").                          |
| [`TwoLocal.ch`](qiskit.circuit.library.TwoLocal.ch "qiskit.circuit.library.TwoLocal.ch")(control\_qubit, target\_qubit, \*)                                                  | Apply [`CHGate`](qiskit.circuit.library.CHGate "qiskit.circuit.library.CHGate").                             |
| [`TwoLocal.cls_instances`](qiskit.circuit.library.TwoLocal.cls_instances "qiskit.circuit.library.TwoLocal.cls_instances")()                                                  | Return the current number of instances of this class, useful for auto naming.                                |
| [`TwoLocal.cls_prefix`](qiskit.circuit.library.TwoLocal.cls_prefix "qiskit.circuit.library.TwoLocal.cls_prefix")()                                                           | Return the prefix to use for auto naming.                                                                    |
| [`TwoLocal.cnot`](qiskit.circuit.library.TwoLocal.cnot "qiskit.circuit.library.TwoLocal.cnot")(control\_qubit, target\_qubit, \*)                                            | Apply [`CXGate`](qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate").                             |
| [`TwoLocal.combine`](qiskit.circuit.library.TwoLocal.combine "qiskit.circuit.library.TwoLocal.combine")(rhs)                                                                 | Append rhs to self if self contains compatible registers.                                                    |
| [`TwoLocal.compose`](qiskit.circuit.library.TwoLocal.compose "qiskit.circuit.library.TwoLocal.compose")(other\[, qubits, clbits, …])                                         | Compose circuit with `other` circuit or instruction, optionally permuting wires.                             |
| [`TwoLocal.copy`](qiskit.circuit.library.TwoLocal.copy "qiskit.circuit.library.TwoLocal.copy")(\[name])                                                                      | Copy the circuit.                                                                                            |
| [`TwoLocal.count_ops`](qiskit.circuit.library.TwoLocal.count_ops "qiskit.circuit.library.TwoLocal.count_ops")()                                                              | Count each operation kind in the circuit.                                                                    |
| [`TwoLocal.crx`](qiskit.circuit.library.TwoLocal.crx "qiskit.circuit.library.TwoLocal.crx")(theta, control\_qubit, …\[, …])                                                  | Apply [`CRXGate`](qiskit.circuit.library.CRXGate "qiskit.circuit.library.CRXGate").                          |
| [`TwoLocal.cry`](qiskit.circuit.library.TwoLocal.cry "qiskit.circuit.library.TwoLocal.cry")(theta, control\_qubit, …\[, …])                                                  | Apply [`CRYGate`](qiskit.circuit.library.CRYGate "qiskit.circuit.library.CRYGate").                          |
| [`TwoLocal.crz`](qiskit.circuit.library.TwoLocal.crz "qiskit.circuit.library.TwoLocal.crz")(theta, control\_qubit, …\[, …])                                                  | Apply [`CRZGate`](qiskit.circuit.library.CRZGate "qiskit.circuit.library.CRZGate").                          |
| [`TwoLocal.cswap`](qiskit.circuit.library.TwoLocal.cswap "qiskit.circuit.library.TwoLocal.cswap")(control\_qubit, target\_qubit1, …)                                         | Apply [`CSwapGate`](qiskit.circuit.library.CSwapGate "qiskit.circuit.library.CSwapGate").                    |
| [`TwoLocal.cu1`](qiskit.circuit.library.TwoLocal.cu1 "qiskit.circuit.library.TwoLocal.cu1")(theta, control\_qubit, …\[, …])                                                  | Apply [`CU1Gate`](qiskit.circuit.library.CU1Gate "qiskit.circuit.library.CU1Gate").                          |
| [`TwoLocal.cu3`](qiskit.circuit.library.TwoLocal.cu3 "qiskit.circuit.library.TwoLocal.cu3")(theta, phi, lam, control\_qubit, …)                                              | Apply [`CU3Gate`](qiskit.circuit.library.CU3Gate "qiskit.circuit.library.CU3Gate").                          |
| [`TwoLocal.cx`](qiskit.circuit.library.TwoLocal.cx "qiskit.circuit.library.TwoLocal.cx")(control\_qubit, target\_qubit, \*)                                                  | Apply [`CXGate`](qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate").                             |
| [`TwoLocal.cy`](qiskit.circuit.library.TwoLocal.cy "qiskit.circuit.library.TwoLocal.cy")(control\_qubit, target\_qubit, \*)                                                  | Apply [`CYGate`](qiskit.circuit.library.CYGate "qiskit.circuit.library.CYGate").                             |
| [`TwoLocal.cz`](qiskit.circuit.library.TwoLocal.cz "qiskit.circuit.library.TwoLocal.cz")(control\_qubit, target\_qubit, \*)                                                  | Apply [`CZGate`](qiskit.circuit.library.CZGate "qiskit.circuit.library.CZGate").                             |
| [`TwoLocal.dcx`](qiskit.circuit.library.TwoLocal.dcx "qiskit.circuit.library.TwoLocal.dcx")(qubit1, qubit2)                                                                  | Apply [`DCXGate`](qiskit.circuit.library.DCXGate "qiskit.circuit.library.DCXGate").                          |
| [`TwoLocal.decompose`](qiskit.circuit.library.TwoLocal.decompose "qiskit.circuit.library.TwoLocal.decompose")()                                                              | Call a decomposition pass on this circuit, to decompose one level (shallow decompose).                       |
| [`TwoLocal.depth`](qiskit.circuit.library.TwoLocal.depth "qiskit.circuit.library.TwoLocal.depth")()                                                                          | Return circuit depth (i.e., length of critical path).                                                        |
| [`TwoLocal.diag_gate`](qiskit.circuit.library.TwoLocal.diag_gate "qiskit.circuit.library.TwoLocal.diag_gate")(diag, qubit)                                                   | Deprecated version of QuantumCircuit.diagonal.                                                               |
| [`TwoLocal.diagonal`](qiskit.circuit.library.TwoLocal.diagonal "qiskit.circuit.library.TwoLocal.diagonal")(diag, qubit)                                                      | Attach a diagonal gate to a circuit.                                                                         |
| [`TwoLocal.draw`](qiskit.circuit.library.TwoLocal.draw "qiskit.circuit.library.TwoLocal.draw")(\[output, scale, filename, …])                                                | Draw the quantum circuit.                                                                                    |
| [`TwoLocal.extend`](qiskit.circuit.library.TwoLocal.extend "qiskit.circuit.library.TwoLocal.extend")(rhs)                                                                    | Append QuantumCircuit to the right hand side if it contains compatible registers.                            |
| [`TwoLocal.fredkin`](qiskit.circuit.library.TwoLocal.fredkin "qiskit.circuit.library.TwoLocal.fredkin")(control\_qubit, …\[, ctl, …])                                        | Apply [`CSwapGate`](qiskit.circuit.library.CSwapGate "qiskit.circuit.library.CSwapGate").                    |
| [`TwoLocal.from_qasm_file`](qiskit.circuit.library.TwoLocal.from_qasm_file "qiskit.circuit.library.TwoLocal.from_qasm_file")(path)                                           | Take in a QASM file and generate a QuantumCircuit object.                                                    |
| [`TwoLocal.from_qasm_str`](qiskit.circuit.library.TwoLocal.from_qasm_str "qiskit.circuit.library.TwoLocal.from_qasm_str")(qasm\_str)                                         | Take in a QASM string and generate a QuantumCircuit object.                                                  |
| [`TwoLocal.get_entangler_map`](qiskit.circuit.library.TwoLocal.get_entangler_map "qiskit.circuit.library.TwoLocal.get_entangler_map")(rep\_num, …)                           | Overloading to handle the special case of 1 qubit where the entanglement are ignored.                        |
| [`TwoLocal.get_unentangled_qubits`](qiskit.circuit.library.TwoLocal.get_unentangled_qubits "qiskit.circuit.library.TwoLocal.get_unentangled_qubits")()                       | Get the indices of unentangled qubits in a set.                                                              |
| [`TwoLocal.h`](qiskit.circuit.library.TwoLocal.h "qiskit.circuit.library.TwoLocal.h")(qubit, \*\[, q])                                                                       | Apply [`HGate`](qiskit.circuit.library.HGate "qiskit.circuit.library.HGate").                                |
| [`TwoLocal.hamiltonian`](qiskit.circuit.library.TwoLocal.hamiltonian "qiskit.circuit.library.TwoLocal.hamiltonian")(operator, time, qubits)                                  | Apply hamiltonian evolution to to qubits.                                                                    |
| [`TwoLocal.has_register`](qiskit.circuit.library.TwoLocal.has_register "qiskit.circuit.library.TwoLocal.has_register")(register)                                             | Test if this circuit has the register r.                                                                     |
| [`TwoLocal.i`](qiskit.circuit.library.TwoLocal.i "qiskit.circuit.library.TwoLocal.i")(qubit, \*\[, q])                                                                       | Apply [`IGate`](qiskit.circuit.library.IGate "qiskit.circuit.library.IGate").                                |
| [`TwoLocal.id`](qiskit.circuit.library.TwoLocal.id "qiskit.circuit.library.TwoLocal.id")(qubit, \*\[, q])                                                                    | Apply [`IGate`](qiskit.circuit.library.IGate "qiskit.circuit.library.IGate").                                |
| [`TwoLocal.iden`](qiskit.circuit.library.TwoLocal.iden "qiskit.circuit.library.TwoLocal.iden")(qubit, \*\[, q])                                                              | Deprecated identity gate.                                                                                    |
| [`TwoLocal.initialize`](qiskit.circuit.library.TwoLocal.initialize "qiskit.circuit.library.TwoLocal.initialize")(params, qubits)                                             | Apply initialize to circuit.                                                                                 |
| [`TwoLocal.inverse`](qiskit.circuit.library.TwoLocal.inverse "qiskit.circuit.library.TwoLocal.inverse")()                                                                    | Invert this circuit.                                                                                         |
| [`TwoLocal.iso`](qiskit.circuit.library.TwoLocal.iso "qiskit.circuit.library.TwoLocal.iso")(isometry, q\_input, …\[, …])                                                     | Attach an arbitrary isometry from m to n qubits to a circuit.                                                |
| [`TwoLocal.isometry`](qiskit.circuit.library.TwoLocal.isometry "qiskit.circuit.library.TwoLocal.isometry")(isometry, q\_input, …\[, …])                                      | Attach an arbitrary isometry from m to n qubits to a circuit.                                                |
| [`TwoLocal.iswap`](qiskit.circuit.library.TwoLocal.iswap "qiskit.circuit.library.TwoLocal.iswap")(qubit1, qubit2)                                                            | Apply [`iSwapGate`](qiskit.circuit.library.iSwapGate "qiskit.circuit.library.iSwapGate").                    |
| [`TwoLocal.mcmt`](qiskit.circuit.library.TwoLocal.mcmt "qiskit.circuit.library.TwoLocal.mcmt")(gate, control\_qubits, …\[, …])                                               | Apply a multi-control, multi-target using a generic gate.                                                    |
| [`TwoLocal.mcrx`](qiskit.circuit.library.TwoLocal.mcrx "qiskit.circuit.library.TwoLocal.mcrx")(theta, q\_controls, q\_target\[, …])                                          | Apply Multiple-Controlled X rotation gate                                                                    |
| [`TwoLocal.mcry`](qiskit.circuit.library.TwoLocal.mcry "qiskit.circuit.library.TwoLocal.mcry")(theta, q\_controls, q\_target, …)                                             | Apply Multiple-Controlled Y rotation gate                                                                    |
| [`TwoLocal.mcrz`](qiskit.circuit.library.TwoLocal.mcrz "qiskit.circuit.library.TwoLocal.mcrz")(lam, q\_controls, q\_target\[, …])                                            | Apply Multiple-Controlled Z rotation gate                                                                    |
| [`TwoLocal.mct`](qiskit.circuit.library.TwoLocal.mct "qiskit.circuit.library.TwoLocal.mct")(control\_qubits, target\_qubit\[, …])                                            | Apply `MCXGate`.                                                                                             |
| [`TwoLocal.mcu1`](qiskit.circuit.library.TwoLocal.mcu1 "qiskit.circuit.library.TwoLocal.mcu1")(lam, control\_qubits, target\_qubit)                                          | Apply `MCU1Gate`.                                                                                            |
| [`TwoLocal.mcx`](qiskit.circuit.library.TwoLocal.mcx "qiskit.circuit.library.TwoLocal.mcx")(control\_qubits, target\_qubit\[, …])                                            | Apply `MCXGate`.                                                                                             |
| [`TwoLocal.measure`](qiskit.circuit.library.TwoLocal.measure "qiskit.circuit.library.TwoLocal.measure")(qubit, cbit)                                                         | Measure quantum bit into classical bit (tuples).                                                             |
| [`TwoLocal.measure_active`](qiskit.circuit.library.TwoLocal.measure_active "qiskit.circuit.library.TwoLocal.measure_active")(\[inplace])                                     | Adds measurement to all non-idle qubits.                                                                     |
| [`TwoLocal.measure_all`](qiskit.circuit.library.TwoLocal.measure_all "qiskit.circuit.library.TwoLocal.measure_all")(\[inplace])                                              | Adds measurement to all qubits.                                                                              |
| [`TwoLocal.mirror`](qiskit.circuit.library.TwoLocal.mirror "qiskit.circuit.library.TwoLocal.mirror")()                                                                       | Mirror the circuit by reversing the instructions.                                                            |
| [`TwoLocal.ms`](qiskit.circuit.library.TwoLocal.ms "qiskit.circuit.library.TwoLocal.ms")(theta, qubits)                                                                      | Apply [`MSGate`](qiskit.circuit.library.MSGate "qiskit.circuit.library.MSGate").                             |
| [`TwoLocal.num_connected_components`](qiskit.circuit.library.TwoLocal.num_connected_components "qiskit.circuit.library.TwoLocal.num_connected_components")(\[unitary\_only]) | How many non-entangled subcircuits can the circuit be factored to.                                           |
| [`TwoLocal.num_nonlocal_gates`](qiskit.circuit.library.TwoLocal.num_nonlocal_gates "qiskit.circuit.library.TwoLocal.num_nonlocal_gates")()                                   | Return number of non-local gates (i.e.                                                                       |
| [`TwoLocal.num_tensor_factors`](qiskit.circuit.library.TwoLocal.num_tensor_factors "qiskit.circuit.library.TwoLocal.num_tensor_factors")()                                   | Computes the number of tensor factors in the unitary (quantum) part of the circuit only.                     |
| [`TwoLocal.num_unitary_factors`](qiskit.circuit.library.TwoLocal.num_unitary_factors "qiskit.circuit.library.TwoLocal.num_unitary_factors")()                                | Computes the number of tensor factors in the unitary (quantum) part of the circuit only.                     |
| [`TwoLocal.print_settings`](qiskit.circuit.library.TwoLocal.print_settings "qiskit.circuit.library.TwoLocal.print_settings")()                                               | Returns information about the setting.                                                                       |
| [`TwoLocal.qasm`](qiskit.circuit.library.TwoLocal.qasm "qiskit.circuit.library.TwoLocal.qasm")(\[formatted, filename])                                                       | Return OpenQASM string.                                                                                      |
| [`TwoLocal.qbit_argument_conversion`](qiskit.circuit.library.TwoLocal.qbit_argument_conversion "qiskit.circuit.library.TwoLocal.qbit_argument_conversion")(…)                | Converts several qubit representations (such as indexes, range, etc.) into a list of qubits.                 |
| [`TwoLocal.r`](qiskit.circuit.library.TwoLocal.r "qiskit.circuit.library.TwoLocal.r")(theta, phi, qubit, \*\[, q])                                                           | Apply `RGate`.                                                                                               |
| [`TwoLocal.rcccx`](qiskit.circuit.library.TwoLocal.rcccx "qiskit.circuit.library.TwoLocal.rcccx")(control\_qubit1, …)                                                        | Apply [`RC3XGate`](qiskit.circuit.library.RC3XGate "qiskit.circuit.library.RC3XGate").                       |
| [`TwoLocal.rccx`](qiskit.circuit.library.TwoLocal.rccx "qiskit.circuit.library.TwoLocal.rccx")(control\_qubit1, …)                                                           | Apply [`RCCXGate`](qiskit.circuit.library.RCCXGate "qiskit.circuit.library.RCCXGate").                       |
| [`TwoLocal.remove_final_measurements`](qiskit.circuit.library.TwoLocal.remove_final_measurements "qiskit.circuit.library.TwoLocal.remove_final_measurements")(\[inplace])    | Removes final measurement on all qubits if they are present.                                                 |
| [`TwoLocal.reset`](qiskit.circuit.library.TwoLocal.reset "qiskit.circuit.library.TwoLocal.reset")(qubit)                                                                     | Reset q.                                                                                                     |
| [`TwoLocal.rx`](qiskit.circuit.library.TwoLocal.rx "qiskit.circuit.library.TwoLocal.rx")(theta, qubit, \*\[, label, q])                                                      | Apply [`RXGate`](qiskit.circuit.library.RXGate "qiskit.circuit.library.RXGate").                             |
| [`TwoLocal.rxx`](qiskit.circuit.library.TwoLocal.rxx "qiskit.circuit.library.TwoLocal.rxx")(theta, qubit1, qubit2)                                                           | Apply [`RXXGate`](qiskit.circuit.library.RXXGate "qiskit.circuit.library.RXXGate").                          |
| [`TwoLocal.ry`](qiskit.circuit.library.TwoLocal.ry "qiskit.circuit.library.TwoLocal.ry")(theta, qubit, \*\[, label, q])                                                      | Apply [`RYGate`](qiskit.circuit.library.RYGate "qiskit.circuit.library.RYGate").                             |
| [`TwoLocal.ryy`](qiskit.circuit.library.TwoLocal.ryy "qiskit.circuit.library.TwoLocal.ryy")(theta, qubit1, qubit2)                                                           | Apply [`RYYGate`](qiskit.circuit.library.RYYGate "qiskit.circuit.library.RYYGate").                          |
| [`TwoLocal.rz`](qiskit.circuit.library.TwoLocal.rz "qiskit.circuit.library.TwoLocal.rz")(phi, qubit, \*\[, q])                                                               | Apply [`RZGate`](qiskit.circuit.library.RZGate "qiskit.circuit.library.RZGate").                             |
| [`TwoLocal.rzx`](qiskit.circuit.library.TwoLocal.rzx "qiskit.circuit.library.TwoLocal.rzx")(theta, qubit1, qubit2)                                                           | Apply [`RZXGate`](qiskit.circuit.library.RZXGate "qiskit.circuit.library.RZXGate").                          |
| [`TwoLocal.rzz`](qiskit.circuit.library.TwoLocal.rzz "qiskit.circuit.library.TwoLocal.rzz")(theta, qubit1, qubit2)                                                           | Apply [`RZZGate`](qiskit.circuit.library.RZZGate "qiskit.circuit.library.RZZGate").                          |
| [`TwoLocal.s`](qiskit.circuit.library.TwoLocal.s "qiskit.circuit.library.TwoLocal.s")(qubit, \*\[, q])                                                                       | Apply [`SGate`](qiskit.circuit.library.SGate "qiskit.circuit.library.SGate").                                |
| [`TwoLocal.sdg`](qiskit.circuit.library.TwoLocal.sdg "qiskit.circuit.library.TwoLocal.sdg")(qubit, \*\[, q])                                                                 | Apply [`SdgGate`](qiskit.circuit.library.SdgGate "qiskit.circuit.library.SdgGate").                          |
| [`TwoLocal.size`](qiskit.circuit.library.TwoLocal.size "qiskit.circuit.library.TwoLocal.size")()                                                                             | Returns total number of gate operations in circuit.                                                          |
| [`TwoLocal.snapshot`](qiskit.circuit.library.TwoLocal.snapshot "qiskit.circuit.library.TwoLocal.snapshot")(label\[, snapshot\_type, …])                                      | Take a statevector snapshot of the internal simulator representation.                                        |
| [`TwoLocal.snapshot_density_matrix`](qiskit.circuit.library.TwoLocal.snapshot_density_matrix "qiskit.circuit.library.TwoLocal.snapshot_density_matrix")(label\[, qubits])    | Take a density matrix snapshot of simulator state.                                                           |
| [`TwoLocal.snapshot_expectation_value`](qiskit.circuit.library.TwoLocal.snapshot_expectation_value "qiskit.circuit.library.TwoLocal.snapshot_expectation_value")(label, …)   | Take a snapshot of expectation value \<O> of an Operator.                                                    |
| [`TwoLocal.snapshot_probabilities`](qiskit.circuit.library.TwoLocal.snapshot_probabilities "qiskit.circuit.library.TwoLocal.snapshot_probabilities")(label, qubits)          | Take a probability snapshot of the simulator state.                                                          |
| [`TwoLocal.snapshot_stabilizer`](qiskit.circuit.library.TwoLocal.snapshot_stabilizer "qiskit.circuit.library.TwoLocal.snapshot_stabilizer")(label)                           | Take a stabilizer snapshot of the simulator state.                                                           |
| [`TwoLocal.snapshot_statevector`](qiskit.circuit.library.TwoLocal.snapshot_statevector "qiskit.circuit.library.TwoLocal.snapshot_statevector")(label)                        | Take a statevector snapshot of the simulator state.                                                          |
| [`TwoLocal.squ`](qiskit.circuit.library.TwoLocal.squ "qiskit.circuit.library.TwoLocal.squ")(unitary\_matrix, qubit\[, mode, …])                                              | Decompose an arbitrary 2\*2 unitary into three rotation gates.                                               |
| [`TwoLocal.swap`](qiskit.circuit.library.TwoLocal.swap "qiskit.circuit.library.TwoLocal.swap")(qubit1, qubit2)                                                               | Apply [`SwapGate`](qiskit.circuit.library.SwapGate "qiskit.circuit.library.SwapGate").                       |
| [`TwoLocal.t`](qiskit.circuit.library.TwoLocal.t "qiskit.circuit.library.TwoLocal.t")(qubit, \*\[, q])                                                                       | Apply [`TGate`](qiskit.circuit.library.TGate "qiskit.circuit.library.TGate").                                |
| [`TwoLocal.tdg`](qiskit.circuit.library.TwoLocal.tdg "qiskit.circuit.library.TwoLocal.tdg")(qubit, \*\[, q])                                                                 | Apply [`TdgGate`](qiskit.circuit.library.TdgGate "qiskit.circuit.library.TdgGate").                          |
| [`TwoLocal.to_gate`](qiskit.circuit.library.TwoLocal.to_gate "qiskit.circuit.library.TwoLocal.to_gate")(\[parameter\_map])                                                   | Create a Gate out of this circuit.                                                                           |
| [`TwoLocal.to_instruction`](qiskit.circuit.library.TwoLocal.to_instruction "qiskit.circuit.library.TwoLocal.to_instruction")(\[parameter\_map])                              | Create an Instruction out of this circuit.                                                                   |
| [`TwoLocal.toffoli`](qiskit.circuit.library.TwoLocal.toffoli "qiskit.circuit.library.TwoLocal.toffoli")(control\_qubit1, …\[, …])                                            | Apply [`CCXGate`](qiskit.circuit.library.CCXGate "qiskit.circuit.library.CCXGate").                          |
| [`TwoLocal.u1`](qiskit.circuit.library.TwoLocal.u1 "qiskit.circuit.library.TwoLocal.u1")(theta, qubit, \*\[, q])                                                             | Apply [`U1Gate`](qiskit.circuit.library.U1Gate "qiskit.circuit.library.U1Gate").                             |
| [`TwoLocal.u2`](qiskit.circuit.library.TwoLocal.u2 "qiskit.circuit.library.TwoLocal.u2")(phi, lam, qubit, \*\[, q])                                                          | Apply [`U2Gate`](qiskit.circuit.library.U2Gate "qiskit.circuit.library.U2Gate").                             |
| [`TwoLocal.u3`](qiskit.circuit.library.TwoLocal.u3 "qiskit.circuit.library.TwoLocal.u3")(theta, phi, lam, qubit, \*\[, q])                                                   | Apply [`U3Gate`](qiskit.circuit.library.U3Gate "qiskit.circuit.library.U3Gate").                             |
| [`TwoLocal.uc`](qiskit.circuit.library.TwoLocal.uc "qiskit.circuit.library.TwoLocal.uc")(gate\_list, q\_controls, q\_target)                                                 | Attach a uniformly controlled gates (also called multiplexed gates) to a circuit.                            |
| [`TwoLocal.ucg`](qiskit.circuit.library.TwoLocal.ucg "qiskit.circuit.library.TwoLocal.ucg")(angle\_list, q\_controls, q\_target)                                             | Deprecated version of uc.                                                                                    |
| [`TwoLocal.ucrx`](qiskit.circuit.library.TwoLocal.ucrx "qiskit.circuit.library.TwoLocal.ucrx")(angle\_list, q\_controls, q\_target)                                          | Attach a uniformly controlled (also called multiplexed) Rx rotation gate to a circuit.                       |
| [`TwoLocal.ucry`](qiskit.circuit.library.TwoLocal.ucry "qiskit.circuit.library.TwoLocal.ucry")(angle\_list, q\_controls, q\_target)                                          | Attach a uniformly controlled (also called multiplexed) Ry rotation gate to a circuit.                       |
| [`TwoLocal.ucrz`](qiskit.circuit.library.TwoLocal.ucrz "qiskit.circuit.library.TwoLocal.ucrz")(angle\_list, q\_controls, q\_target)                                          | Attach a uniformly controlled (also called multiplexed gates) Rz rotation gate to a circuit.                 |
| [`TwoLocal.ucx`](qiskit.circuit.library.TwoLocal.ucx "qiskit.circuit.library.TwoLocal.ucx")(angle\_list, q\_controls, q\_target)                                             | Deprecated version of ucrx.                                                                                  |
| [`TwoLocal.ucy`](qiskit.circuit.library.TwoLocal.ucy "qiskit.circuit.library.TwoLocal.ucy")(angle\_list, q\_controls, q\_target)                                             | Deprecated version of ucry.                                                                                  |
| [`TwoLocal.ucz`](qiskit.circuit.library.TwoLocal.ucz "qiskit.circuit.library.TwoLocal.ucz")(angle\_list, q\_controls, q\_target)                                             | Deprecated version of ucrz.                                                                                  |
| [`TwoLocal.unitary`](qiskit.circuit.library.TwoLocal.unitary "qiskit.circuit.library.TwoLocal.unitary")(obj, qubits\[, label])                                               | Apply unitary gate to q.                                                                                     |
| [`TwoLocal.width`](qiskit.circuit.library.TwoLocal.width "qiskit.circuit.library.TwoLocal.width")()                                                                          | Return number of qubits plus clbits in circuit.                                                              |
| [`TwoLocal.x`](qiskit.circuit.library.TwoLocal.x "qiskit.circuit.library.TwoLocal.x")(qubit, \*\[, label, ctrl\_state, q])                                                   | Apply [`XGate`](qiskit.circuit.library.XGate "qiskit.circuit.library.XGate").                                |
| [`TwoLocal.y`](qiskit.circuit.library.TwoLocal.y "qiskit.circuit.library.TwoLocal.y")(qubit, \*\[, q])                                                                       | Apply [`YGate`](qiskit.circuit.library.YGate "qiskit.circuit.library.YGate").                                |
| [`TwoLocal.z`](qiskit.circuit.library.TwoLocal.z "qiskit.circuit.library.TwoLocal.z")(qubit, \*\[, q])                                                                       | Apply [`ZGate`](qiskit.circuit.library.ZGate "qiskit.circuit.library.ZGate").                                |
| [`TwoLocal.__getitem__`](qiskit.circuit.library.TwoLocal.__getitem__ "qiskit.circuit.library.TwoLocal.__getitem__")(item)                                                    | Return indexed operation.                                                                                    |
| [`TwoLocal.__len__`](qiskit.circuit.library.TwoLocal.__len__ "qiskit.circuit.library.TwoLocal.__len__")()                                                                    | Return number of operations in circuit.                                                                      |

