---
title: RealAmplitudes
description: API reference for qiskit.circuit.library.RealAmplitudes
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.RealAmplitudes
---

# RealAmplitudes

<span id="qiskit.circuit.library.RealAmplitudes" />

`RealAmplitudes(num_qubits=None, entanglement='full', reps=3, skip_unentangled_qubits=False, skip_final_rotation_layer=False, parameter_prefix='θ', insert_barriers=False, initial_state=None)`

The RealAmplitudes 2-local circuit.

The `RealAmplitudes` circuit is a heuristic trial wave function used as Ansatz in chemistry applications or classification circuits in machine learning. The circuit consists of of alternating layers of $Y$ rotations and $CX$ entanglements. The entanglement pattern can be user-defined or selected from a predefined set.

For example a `RealAmplitudes` circuit with 2 repetitions on 3 qubits with `'full'` entanglement is

```python
┌──────────┐ ░                 ░ ┌──────────┐ ░                 ░ ┌──────────┐
┤ RY(θ[0]) ├─░───■────■────────░─┤ RY(θ[3]) ├─░───■────■────────░─┤ RY(θ[6]) ├
├──────────┤ ░ ┌─┴─┐  │        ░ ├──────────┤ ░ ┌─┴─┐  │        ░ ├──────────┤
┤ RY(θ[1]) ├─░─┤ X ├──┼────■───░─┤ RY(θ[4]) ├─░─┤ X ├──┼────■───░─┤ RY(θ[7]) ├
├──────────┤ ░ └───┘┌─┴─┐┌─┴─┐ ░ ├──────────┤ ░ └───┘┌─┴─┐┌─┴─┐ ░ ├──────────┤
┤ RY(θ[2]) ├─░──────┤ X ├┤ X ├─░─┤ RY(θ[5]) ├─░──────┤ X ├┤ X ├─░─┤ RY(θ[8]) ├
└──────────┘ ░      └───┘└───┘ ░ └──────────┘ ░      └───┘└───┘ ░ └──────────┘
```

The entanglement can be set using the `entanglement` keyword as string or a list of index-pairs. See the documentation of [`TwoLocal`](qiskit.circuit.library.TwoLocal "qiskit.circuit.library.TwoLocal") and `NLocal` for more detail. Additional options that can be set include the number of repetitions, skipping rotation gates on qubits that are not entangled, leaving out the final rotation layer and inserting barriers in between the rotation and entanglement layers.

If some qubits are not entangled with other qubits it makes sense to not apply rotation gates on these qubits, since a sequence of $Y$ rotations can be reduced to a single $Y$ rotation with summed rotation angles.

## Examples

```python
>>> ansatz = RealAmplitudes(3, reps=2)  # create the circuit on 3 qubits
>>> print(ansatz)
     ┌──────────┐          ┌──────────┐                      ┌──────────┐
q_0: ┤ RY(θ[0]) ├──■────■──┤ RY(θ[3]) ├──────────────■────■──┤ RY(θ[6]) ├────────────
     ├──────────┤┌─┴─┐  │  └──────────┘┌──────────┐┌─┴─┐  │  └──────────┘┌──────────┐
q_1: ┤ RY(θ[1]) ├┤ X ├──┼───────■──────┤ RY(θ[4]) ├┤ X ├──┼───────■──────┤ RY(θ[7]) ├
     ├──────────┤└───┘┌─┴─┐   ┌─┴─┐    ├──────────┤└───┘┌─┴─┐   ┌─┴─┐    ├──────────┤
q_2: ┤ RY(θ[2]) ├─────┤ X ├───┤ X ├────┤ RY(θ[5]) ├─────┤ X ├───┤ X ├────┤ RY(θ[8]) ├
     └──────────┘     └───┘   └───┘    └──────────┘     └───┘   └───┘    └──────────┘
```

```python
>>> ansatz = RealAmplitudes(3, entanglement='linear', reps=2, insert_barriers=True)
>>> qc = QuantumCircuit(3)  # create a circuit and append the RY variational form
>>> qc.compose(ansatz, inplace=True)
>>> qc.draw()
     ┌──────────┐ ░            ░ ┌──────────┐ ░            ░ ┌──────────┐
q_0: ┤ RY(θ[0]) ├─░───■────────░─┤ RY(θ[3]) ├─░───■────────░─┤ RY(θ[6]) ├
     ├──────────┤ ░ ┌─┴─┐      ░ ├──────────┤ ░ ┌─┴─┐      ░ ├──────────┤
q_1: ┤ RY(θ[1]) ├─░─┤ X ├──■───░─┤ RY(θ[4]) ├─░─┤ X ├──■───░─┤ RY(θ[7]) ├
     ├──────────┤ ░ └───┘┌─┴─┐ ░ ├──────────┤ ░ └───┘┌─┴─┐ ░ ├──────────┤
q_2: ┤ RY(θ[2]) ├─░──────┤ X ├─░─┤ RY(θ[5]) ├─░──────┤ X ├─░─┤ RY(θ[8]) ├
     └──────────┘ ░      └───┘ ░ └──────────┘ ░      └───┘ ░ └──────────┘
```

```python
>>> ansatz = RealAmplitudes(4, reps=1, entanglement='circular', insert_barriers=True)
>>> print(ansatz)
     ┌──────────┐ ░ ┌───┐                ░ ┌──────────┐
q_0: ┤ RY(θ[0]) ├─░─┤ X ├──■─────────────░─┤ RY(θ[4]) ├
     ├──────────┤ ░ └─┬─┘┌─┴─┐           ░ ├──────────┤
q_1: ┤ RY(θ[1]) ├─░───┼──┤ X ├──■────────░─┤ RY(θ[5]) ├
     ├──────────┤ ░   │  └───┘┌─┴─┐      ░ ├──────────┤
q_2: ┤ RY(θ[2]) ├─░───┼───────┤ X ├──■───░─┤ RY(θ[6]) ├
     ├──────────┤ ░   │       └───┘┌─┴─┐ ░ ├──────────┤
q_3: ┤ RY(θ[3]) ├─░───■────────────┤ X ├─░─┤ RY(θ[7]) ├
     └──────────┘ ░                └───┘ ░ └──────────┘
```

```python
>>> ansatz = RealAmplitudes(4, reps=2, entanglement=[[0,3], [0,2]],
... skip_unentangled_qubits=True)
>>> print(ansatz)
     ┌──────────┐                 ┌──────────┐                 ┌──────────┐
q_0: ┤ RY(θ[0]) ├──■───────■──────┤ RY(θ[3]) ├──■───────■──────┤ RY(θ[6]) ├
     └──────────┘  │       │      └──────────┘  │       │      └──────────┘
q_1: ──────────────┼───────┼────────────────────┼───────┼──────────────────
     ┌──────────┐  │     ┌─┴─┐    ┌──────────┐  │     ┌─┴─┐    ┌──────────┐
q_2: ┤ RY(θ[1]) ├──┼─────┤ X ├────┤ RY(θ[4]) ├──┼─────┤ X ├────┤ RY(θ[7]) ├
     ├──────────┤┌─┴─┐┌──┴───┴───┐└──────────┘┌─┴─┐┌──┴───┴───┐└──────────┘
q_3: ┤ RY(θ[2]) ├┤ X ├┤ RY(θ[5]) ├────────────┤ X ├┤ RY(θ[8]) ├────────────
     └──────────┘└───┘└──────────┘            └───┘└──────────┘
```

Create a new RealAmplitudes 2-local circuit.

**Parameters**

*   **num\_qubits** (`Optional`\[`int`]) – The number of qubits of the RealAmplitudes circuit.
*   **reps** (`int`) – Specifies how often the structure of a rotation layer followed by an entanglement layer is repeated.
*   **entanglement** (`Union`\[`str`, `List`\[`List`\[`int`]], `Callable`\[\[`int`], `List`\[`int`]]]) – Specifies the entanglement structure. Can be a string (‘full’, ‘linear’ or ‘sca’), a list of integer-pairs specifying the indices of qubits entangled with one another, or a callable returning such a list provided with the index of the entanglement layer. See the Examples section of [`TwoLocal`](qiskit.circuit.library.TwoLocal "qiskit.circuit.library.TwoLocal") for more detail.
*   **initial\_state** (`Optional`\[`Any`]) – An InitialState object to prepend to the circuit.
*   **skip\_unentangled\_qubits** (`bool`) – If True, the single qubit gates are only applied to qubits that are entangled with another qubit. If False, the single qubit gates are applied to each qubit in the Ansatz. Defaults to False.
*   **skip\_unentangled\_qubits** – If True, the single qubit gates are only applied to qubits that are entangled with another qubit. If False, the single qubit gates are applied to each qubit in the Ansatz. Defaults to False.
*   **skip\_final\_rotation\_layer** (`bool`) – If False, a rotation layer is added at the end of the ansatz. If True, no rotation layer is added.
*   **parameter\_prefix** (`str`) – The parameterized gates require a parameter to be defined, for which we use [`ParameterVector`](qiskit.circuit.ParameterVector "qiskit.circuit.ParameterVector").
*   **insert\_barriers** (`bool`) – If True, barriers are inserted in between each layer. If False, no barriers are inserted.

## Attributes

|                                                                                                                                                                           |                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [`RealAmplitudes.clbits`](qiskit.circuit.library.RealAmplitudes.clbits "qiskit.circuit.library.RealAmplitudes.clbits")                                                    | Returns a list of classical bits in the order that the registers were added.                       |
| [`RealAmplitudes.data`](qiskit.circuit.library.RealAmplitudes.data "qiskit.circuit.library.RealAmplitudes.data")                                                          | Return the circuit data (instructions and context).                                                |
| [`RealAmplitudes.entanglement`](qiskit.circuit.library.RealAmplitudes.entanglement "qiskit.circuit.library.RealAmplitudes.entanglement")                                  | Get the entanglement strategy.                                                                     |
| [`RealAmplitudes.entanglement_blocks`](qiskit.circuit.library.RealAmplitudes.entanglement_blocks "qiskit.circuit.library.RealAmplitudes.entanglement_blocks")             | The blocks in the entanglement layers.                                                             |
| [`RealAmplitudes.extension_lib`](qiskit.circuit.library.RealAmplitudes.extension_lib "qiskit.circuit.library.RealAmplitudes.extension_lib")                               |                                                                                                    |
| [`RealAmplitudes.header`](qiskit.circuit.library.RealAmplitudes.header "qiskit.circuit.library.RealAmplitudes.header")                                                    |                                                                                                    |
| [`RealAmplitudes.initial_state`](qiskit.circuit.library.RealAmplitudes.initial_state "qiskit.circuit.library.RealAmplitudes.initial_state")                               | Return the initial state that is added in front of the n-local circuit.                            |
| [`RealAmplitudes.insert_barriers`](qiskit.circuit.library.RealAmplitudes.insert_barriers "qiskit.circuit.library.RealAmplitudes.insert_barriers")                         | If barriers are inserted in between the layers or not.                                             |
| [`RealAmplitudes.instances`](qiskit.circuit.library.RealAmplitudes.instances "qiskit.circuit.library.RealAmplitudes.instances")                                           |                                                                                                    |
| [`RealAmplitudes.n_qubits`](qiskit.circuit.library.RealAmplitudes.n_qubits "qiskit.circuit.library.RealAmplitudes.n_qubits")                                              | Deprecated, use `num_qubits` instead.                                                              |
| [`RealAmplitudes.num_clbits`](qiskit.circuit.library.RealAmplitudes.num_clbits "qiskit.circuit.library.RealAmplitudes.num_clbits")                                        | Return number of classical bits.                                                                   |
| [`RealAmplitudes.num_layers`](qiskit.circuit.library.RealAmplitudes.num_layers "qiskit.circuit.library.RealAmplitudes.num_layers")                                        | Return the number of layers in the n-local circuit.                                                |
| [`RealAmplitudes.num_parameters`](qiskit.circuit.library.RealAmplitudes.num_parameters "qiskit.circuit.library.RealAmplitudes.num_parameters")                            | Convenience function to get the number of parameter objects in the circuit.                        |
| [`RealAmplitudes.num_parameters_settable`](qiskit.circuit.library.RealAmplitudes.num_parameters_settable "qiskit.circuit.library.RealAmplitudes.num_parameters_settable") | The number of total parameters that can be set to distinct values.                                 |
| [`RealAmplitudes.num_qubits`](qiskit.circuit.library.RealAmplitudes.num_qubits "qiskit.circuit.library.RealAmplitudes.num_qubits")                                        | Returns the number of qubits in this circuit.                                                      |
| [`RealAmplitudes.ordered_parameters`](qiskit.circuit.library.RealAmplitudes.ordered_parameters "qiskit.circuit.library.RealAmplitudes.ordered_parameters")                | The parameters used in the underlying circuit.                                                     |
| [`RealAmplitudes.parameter_bounds`](qiskit.circuit.library.RealAmplitudes.parameter_bounds "qiskit.circuit.library.RealAmplitudes.parameter_bounds")                      | Return the parameter bounds.                                                                       |
| [`RealAmplitudes.parameters`](qiskit.circuit.library.RealAmplitudes.parameters "qiskit.circuit.library.RealAmplitudes.parameters")                                        | Get the [`Parameter`](qiskit.circuit.Parameter "qiskit.circuit.Parameter") objects in the circuit. |
| [`RealAmplitudes.preferred_init_points`](qiskit.circuit.library.RealAmplitudes.preferred_init_points "qiskit.circuit.library.RealAmplitudes.preferred_init_points")       | The initial points for the parameters.                                                             |
| [`RealAmplitudes.prefix`](qiskit.circuit.library.RealAmplitudes.prefix "qiskit.circuit.library.RealAmplitudes.prefix")                                                    |                                                                                                    |
| [`RealAmplitudes.qregs`](qiskit.circuit.library.RealAmplitudes.qregs "qiskit.circuit.library.RealAmplitudes.qregs")                                                       | A list of the quantum registers associated with the circuit.                                       |
| [`RealAmplitudes.qubits`](qiskit.circuit.library.RealAmplitudes.qubits "qiskit.circuit.library.RealAmplitudes.qubits")                                                    | Returns a list of quantum bits in the order that the registers were added.                         |
| [`RealAmplitudes.reps`](qiskit.circuit.library.RealAmplitudes.reps "qiskit.circuit.library.RealAmplitudes.reps")                                                          | The number of times rotation and entanglement block are repeated.                                  |
| [`RealAmplitudes.rotation_blocks`](qiskit.circuit.library.RealAmplitudes.rotation_blocks "qiskit.circuit.library.RealAmplitudes.rotation_blocks")                         | The blocks in the rotation layers.                                                                 |

## Methods

|                                                                                                                                                                                       |                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| [`RealAmplitudes.AND`](qiskit.circuit.library.RealAmplitudes.AND "qiskit.circuit.library.RealAmplitudes.AND")(qr\_variables, qb\_target, …)                                           | Build a collective conjunction (AND) circuit in place using mct.                                             |
| [`RealAmplitudes.OR`](qiskit.circuit.library.RealAmplitudes.OR "qiskit.circuit.library.RealAmplitudes.OR")(qr\_variables, qb\_target, …)                                              | Build a collective disjunction (OR) circuit in place using mct.                                              |
| [`RealAmplitudes.__getitem__`](qiskit.circuit.library.RealAmplitudes.__getitem__ "qiskit.circuit.library.RealAmplitudes.__getitem__")(item)                                           | Return indexed operation.                                                                                    |
| [`RealAmplitudes.__len__`](qiskit.circuit.library.RealAmplitudes.__len__ "qiskit.circuit.library.RealAmplitudes.__len__")()                                                           | Return number of operations in circuit.                                                                      |
| [`RealAmplitudes.add_layer`](qiskit.circuit.library.RealAmplitudes.add_layer "qiskit.circuit.library.RealAmplitudes.add_layer")(other\[, …])                                          | Append another layer to the NLocal.                                                                          |
| [`RealAmplitudes.add_register`](qiskit.circuit.library.RealAmplitudes.add_register "qiskit.circuit.library.RealAmplitudes.add_register")(\*regs)                                      | Add registers.                                                                                               |
| [`RealAmplitudes.append`](qiskit.circuit.library.RealAmplitudes.append "qiskit.circuit.library.RealAmplitudes.append")(instruction\[, qargs, …])                                      | Append one or more instructions to the end of the circuit, modifying the circuit in place.                   |
| [`RealAmplitudes.assign_parameters`](qiskit.circuit.library.RealAmplitudes.assign_parameters "qiskit.circuit.library.RealAmplitudes.assign_parameters")(param\_dict)                  | Assign parameters to the n-local circuit.                                                                    |
| [`RealAmplitudes.barrier`](qiskit.circuit.library.RealAmplitudes.barrier "qiskit.circuit.library.RealAmplitudes.barrier")(\*qargs)                                                    | Apply `Barrier`.                                                                                             |
| [`RealAmplitudes.bind_parameters`](qiskit.circuit.library.RealAmplitudes.bind_parameters "qiskit.circuit.library.RealAmplitudes.bind_parameters")(value\_dict)                        | Assign numeric parameters to values yielding a new circuit.                                                  |
| [`RealAmplitudes.cast`](qiskit.circuit.library.RealAmplitudes.cast "qiskit.circuit.library.RealAmplitudes.cast")(value, \_type)                                                       | Best effort to cast value to type.                                                                           |
| [`RealAmplitudes.cbit_argument_conversion`](qiskit.circuit.library.RealAmplitudes.cbit_argument_conversion "qiskit.circuit.library.RealAmplitudes.cbit_argument_conversion")(…)       | Converts several classical bit representations (such as indexes, range, etc.) into a list of classical bits. |
| [`RealAmplitudes.ccx`](qiskit.circuit.library.RealAmplitudes.ccx "qiskit.circuit.library.RealAmplitudes.ccx")(control\_qubit1, …\[, …])                                               | Apply [`CCXGate`](qiskit.circuit.library.CCXGate "qiskit.circuit.library.CCXGate").                          |
| [`RealAmplitudes.ch`](qiskit.circuit.library.RealAmplitudes.ch "qiskit.circuit.library.RealAmplitudes.ch")(control\_qubit, target\_qubit, \*)                                         | Apply [`CHGate`](qiskit.circuit.library.CHGate "qiskit.circuit.library.CHGate").                             |
| [`RealAmplitudes.cls_instances`](qiskit.circuit.library.RealAmplitudes.cls_instances "qiskit.circuit.library.RealAmplitudes.cls_instances")()                                         | Return the current number of instances of this class, useful for auto naming.                                |
| [`RealAmplitudes.cls_prefix`](qiskit.circuit.library.RealAmplitudes.cls_prefix "qiskit.circuit.library.RealAmplitudes.cls_prefix")()                                                  | Return the prefix to use for auto naming.                                                                    |
| [`RealAmplitudes.cnot`](qiskit.circuit.library.RealAmplitudes.cnot "qiskit.circuit.library.RealAmplitudes.cnot")(control\_qubit, …\[, …])                                             | Apply [`CXGate`](qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate").                             |
| [`RealAmplitudes.combine`](qiskit.circuit.library.RealAmplitudes.combine "qiskit.circuit.library.RealAmplitudes.combine")(rhs)                                                        | Append rhs to self if self contains compatible registers.                                                    |
| [`RealAmplitudes.compose`](qiskit.circuit.library.RealAmplitudes.compose "qiskit.circuit.library.RealAmplitudes.compose")(other\[, qubits, …])                                        | Compose circuit with `other` circuit or instruction, optionally permuting wires.                             |
| [`RealAmplitudes.copy`](qiskit.circuit.library.RealAmplitudes.copy "qiskit.circuit.library.RealAmplitudes.copy")(\[name])                                                             | Copy the circuit.                                                                                            |
| [`RealAmplitudes.count_ops`](qiskit.circuit.library.RealAmplitudes.count_ops "qiskit.circuit.library.RealAmplitudes.count_ops")()                                                     | Count each operation kind in the circuit.                                                                    |
| [`RealAmplitudes.crx`](qiskit.circuit.library.RealAmplitudes.crx "qiskit.circuit.library.RealAmplitudes.crx")(theta, control\_qubit, …)                                               | Apply [`CRXGate`](qiskit.circuit.library.CRXGate "qiskit.circuit.library.CRXGate").                          |
| [`RealAmplitudes.cry`](qiskit.circuit.library.RealAmplitudes.cry "qiskit.circuit.library.RealAmplitudes.cry")(theta, control\_qubit, …)                                               | Apply [`CRYGate`](qiskit.circuit.library.CRYGate "qiskit.circuit.library.CRYGate").                          |
| [`RealAmplitudes.crz`](qiskit.circuit.library.RealAmplitudes.crz "qiskit.circuit.library.RealAmplitudes.crz")(theta, control\_qubit, …)                                               | Apply [`CRZGate`](qiskit.circuit.library.CRZGate "qiskit.circuit.library.CRZGate").                          |
| [`RealAmplitudes.cswap`](qiskit.circuit.library.RealAmplitudes.cswap "qiskit.circuit.library.RealAmplitudes.cswap")(control\_qubit, …\[, …])                                          | Apply [`CSwapGate`](qiskit.circuit.library.CSwapGate "qiskit.circuit.library.CSwapGate").                    |
| [`RealAmplitudes.cu1`](qiskit.circuit.library.RealAmplitudes.cu1 "qiskit.circuit.library.RealAmplitudes.cu1")(theta, control\_qubit, …)                                               | Apply [`CU1Gate`](qiskit.circuit.library.CU1Gate "qiskit.circuit.library.CU1Gate").                          |
| [`RealAmplitudes.cu3`](qiskit.circuit.library.RealAmplitudes.cu3 "qiskit.circuit.library.RealAmplitudes.cu3")(theta, phi, lam, …\[, …])                                               | Apply [`CU3Gate`](qiskit.circuit.library.CU3Gate "qiskit.circuit.library.CU3Gate").                          |
| [`RealAmplitudes.cx`](qiskit.circuit.library.RealAmplitudes.cx "qiskit.circuit.library.RealAmplitudes.cx")(control\_qubit, target\_qubit, \*)                                         | Apply [`CXGate`](qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate").                             |
| [`RealAmplitudes.cy`](qiskit.circuit.library.RealAmplitudes.cy "qiskit.circuit.library.RealAmplitudes.cy")(control\_qubit, target\_qubit, \*)                                         | Apply [`CYGate`](qiskit.circuit.library.CYGate "qiskit.circuit.library.CYGate").                             |
| [`RealAmplitudes.cz`](qiskit.circuit.library.RealAmplitudes.cz "qiskit.circuit.library.RealAmplitudes.cz")(control\_qubit, target\_qubit, \*)                                         | Apply [`CZGate`](qiskit.circuit.library.CZGate "qiskit.circuit.library.CZGate").                             |
| [`RealAmplitudes.dcx`](qiskit.circuit.library.RealAmplitudes.dcx "qiskit.circuit.library.RealAmplitudes.dcx")(qubit1, qubit2)                                                         | Apply [`DCXGate`](qiskit.circuit.library.DCXGate "qiskit.circuit.library.DCXGate").                          |
| [`RealAmplitudes.decompose`](qiskit.circuit.library.RealAmplitudes.decompose "qiskit.circuit.library.RealAmplitudes.decompose")()                                                     | Call a decomposition pass on this circuit, to decompose one level (shallow decompose).                       |
| [`RealAmplitudes.depth`](qiskit.circuit.library.RealAmplitudes.depth "qiskit.circuit.library.RealAmplitudes.depth")()                                                                 | Return circuit depth (i.e., length of critical path).                                                        |
| [`RealAmplitudes.diag_gate`](qiskit.circuit.library.RealAmplitudes.diag_gate "qiskit.circuit.library.RealAmplitudes.diag_gate")(diag, qubit)                                          | Deprecated version of QuantumCircuit.diagonal.                                                               |
| [`RealAmplitudes.diagonal`](qiskit.circuit.library.RealAmplitudes.diagonal "qiskit.circuit.library.RealAmplitudes.diagonal")(diag, qubit)                                             | Attach a diagonal gate to a circuit.                                                                         |
| [`RealAmplitudes.draw`](qiskit.circuit.library.RealAmplitudes.draw "qiskit.circuit.library.RealAmplitudes.draw")(\[output, scale, …])                                                 | Draw the quantum circuit.                                                                                    |
| [`RealAmplitudes.extend`](qiskit.circuit.library.RealAmplitudes.extend "qiskit.circuit.library.RealAmplitudes.extend")(rhs)                                                           | Append QuantumCircuit to the right hand side if it contains compatible registers.                            |
| [`RealAmplitudes.fredkin`](qiskit.circuit.library.RealAmplitudes.fredkin "qiskit.circuit.library.RealAmplitudes.fredkin")(control\_qubit, …\[, …])                                    | Apply [`CSwapGate`](qiskit.circuit.library.CSwapGate "qiskit.circuit.library.CSwapGate").                    |
| [`RealAmplitudes.from_qasm_file`](qiskit.circuit.library.RealAmplitudes.from_qasm_file "qiskit.circuit.library.RealAmplitudes.from_qasm_file")(path)                                  | Take in a QASM file and generate a QuantumCircuit object.                                                    |
| [`RealAmplitudes.from_qasm_str`](qiskit.circuit.library.RealAmplitudes.from_qasm_str "qiskit.circuit.library.RealAmplitudes.from_qasm_str")(qasm\_str)                                | Take in a QASM string and generate a QuantumCircuit object.                                                  |
| [`RealAmplitudes.get_entangler_map`](qiskit.circuit.library.RealAmplitudes.get_entangler_map "qiskit.circuit.library.RealAmplitudes.get_entangler_map")(rep\_num, …)                  | Overloading to handle the special case of 1 qubit where the entanglement are ignored.                        |
| [`RealAmplitudes.get_unentangled_qubits`](qiskit.circuit.library.RealAmplitudes.get_unentangled_qubits "qiskit.circuit.library.RealAmplitudes.get_unentangled_qubits")()              | Get the indices of unentangled qubits in a set.                                                              |
| [`RealAmplitudes.h`](qiskit.circuit.library.RealAmplitudes.h "qiskit.circuit.library.RealAmplitudes.h")(qubit, \*\[, q])                                                              | Apply [`HGate`](qiskit.circuit.library.HGate "qiskit.circuit.library.HGate").                                |
| [`RealAmplitudes.hamiltonian`](qiskit.circuit.library.RealAmplitudes.hamiltonian "qiskit.circuit.library.RealAmplitudes.hamiltonian")(operator, time, …)                              | Apply hamiltonian evolution to to qubits.                                                                    |
| [`RealAmplitudes.has_register`](qiskit.circuit.library.RealAmplitudes.has_register "qiskit.circuit.library.RealAmplitudes.has_register")(register)                                    | Test if this circuit has the register r.                                                                     |
| [`RealAmplitudes.i`](qiskit.circuit.library.RealAmplitudes.i "qiskit.circuit.library.RealAmplitudes.i")(qubit, \*\[, q])                                                              | Apply [`IGate`](qiskit.circuit.library.IGate "qiskit.circuit.library.IGate").                                |
| [`RealAmplitudes.id`](qiskit.circuit.library.RealAmplitudes.id "qiskit.circuit.library.RealAmplitudes.id")(qubit, \*\[, q])                                                           | Apply [`IGate`](qiskit.circuit.library.IGate "qiskit.circuit.library.IGate").                                |
| [`RealAmplitudes.iden`](qiskit.circuit.library.RealAmplitudes.iden "qiskit.circuit.library.RealAmplitudes.iden")(qubit, \*\[, q])                                                     | Deprecated identity gate.                                                                                    |
| [`RealAmplitudes.initialize`](qiskit.circuit.library.RealAmplitudes.initialize "qiskit.circuit.library.RealAmplitudes.initialize")(params, qubits)                                    | Apply initialize to circuit.                                                                                 |
| [`RealAmplitudes.inverse`](qiskit.circuit.library.RealAmplitudes.inverse "qiskit.circuit.library.RealAmplitudes.inverse")()                                                           | Invert this circuit.                                                                                         |
| [`RealAmplitudes.iso`](qiskit.circuit.library.RealAmplitudes.iso "qiskit.circuit.library.RealAmplitudes.iso")(isometry, q\_input, …\[, …])                                            | Attach an arbitrary isometry from m to n qubits to a circuit.                                                |
| [`RealAmplitudes.isometry`](qiskit.circuit.library.RealAmplitudes.isometry "qiskit.circuit.library.RealAmplitudes.isometry")(isometry, q\_input, …)                                   | Attach an arbitrary isometry from m to n qubits to a circuit.                                                |
| [`RealAmplitudes.iswap`](qiskit.circuit.library.RealAmplitudes.iswap "qiskit.circuit.library.RealAmplitudes.iswap")(qubit1, qubit2)                                                   | Apply [`iSwapGate`](qiskit.circuit.library.iSwapGate "qiskit.circuit.library.iSwapGate").                    |
| [`RealAmplitudes.mcmt`](qiskit.circuit.library.RealAmplitudes.mcmt "qiskit.circuit.library.RealAmplitudes.mcmt")(gate, control\_qubits, …)                                            | Apply a multi-control, multi-target using a generic gate.                                                    |
| [`RealAmplitudes.mcrx`](qiskit.circuit.library.RealAmplitudes.mcrx "qiskit.circuit.library.RealAmplitudes.mcrx")(theta, q\_controls, q\_target)                                       | Apply Multiple-Controlled X rotation gate                                                                    |
| [`RealAmplitudes.mcry`](qiskit.circuit.library.RealAmplitudes.mcry "qiskit.circuit.library.RealAmplitudes.mcry")(theta, q\_controls, …)                                               | Apply Multiple-Controlled Y rotation gate                                                                    |
| [`RealAmplitudes.mcrz`](qiskit.circuit.library.RealAmplitudes.mcrz "qiskit.circuit.library.RealAmplitudes.mcrz")(lam, q\_controls, q\_target)                                         | Apply Multiple-Controlled Z rotation gate                                                                    |
| [`RealAmplitudes.mct`](qiskit.circuit.library.RealAmplitudes.mct "qiskit.circuit.library.RealAmplitudes.mct")(control\_qubits, target\_qubit)                                         | Apply `MCXGate`.                                                                                             |
| [`RealAmplitudes.mcu1`](qiskit.circuit.library.RealAmplitudes.mcu1 "qiskit.circuit.library.RealAmplitudes.mcu1")(lam, control\_qubits, …)                                             | Apply `MCU1Gate`.                                                                                            |
| [`RealAmplitudes.mcx`](qiskit.circuit.library.RealAmplitudes.mcx "qiskit.circuit.library.RealAmplitudes.mcx")(control\_qubits, target\_qubit)                                         | Apply `MCXGate`.                                                                                             |
| [`RealAmplitudes.measure`](qiskit.circuit.library.RealAmplitudes.measure "qiskit.circuit.library.RealAmplitudes.measure")(qubit, cbit)                                                | Measure quantum bit into classical bit (tuples).                                                             |
| [`RealAmplitudes.measure_active`](qiskit.circuit.library.RealAmplitudes.measure_active "qiskit.circuit.library.RealAmplitudes.measure_active")(\[inplace])                            | Adds measurement to all non-idle qubits.                                                                     |
| [`RealAmplitudes.measure_all`](qiskit.circuit.library.RealAmplitudes.measure_all "qiskit.circuit.library.RealAmplitudes.measure_all")(\[inplace])                                     | Adds measurement to all qubits.                                                                              |
| [`RealAmplitudes.mirror`](qiskit.circuit.library.RealAmplitudes.mirror "qiskit.circuit.library.RealAmplitudes.mirror")()                                                              | Mirror the circuit by reversing the instructions.                                                            |
| [`RealAmplitudes.ms`](qiskit.circuit.library.RealAmplitudes.ms "qiskit.circuit.library.RealAmplitudes.ms")(theta, qubits)                                                             | Apply [`MSGate`](qiskit.circuit.library.MSGate "qiskit.circuit.library.MSGate").                             |
| [`RealAmplitudes.num_connected_components`](qiskit.circuit.library.RealAmplitudes.num_connected_components "qiskit.circuit.library.RealAmplitudes.num_connected_components")(\[…])    | How many non-entangled subcircuits can the circuit be factored to.                                           |
| [`RealAmplitudes.num_nonlocal_gates`](qiskit.circuit.library.RealAmplitudes.num_nonlocal_gates "qiskit.circuit.library.RealAmplitudes.num_nonlocal_gates")()                          | Return number of non-local gates (i.e.                                                                       |
| [`RealAmplitudes.num_tensor_factors`](qiskit.circuit.library.RealAmplitudes.num_tensor_factors "qiskit.circuit.library.RealAmplitudes.num_tensor_factors")()                          | Computes the number of tensor factors in the unitary (quantum) part of the circuit only.                     |
| [`RealAmplitudes.num_unitary_factors`](qiskit.circuit.library.RealAmplitudes.num_unitary_factors "qiskit.circuit.library.RealAmplitudes.num_unitary_factors")()                       | Computes the number of tensor factors in the unitary (quantum) part of the circuit only.                     |
| [`RealAmplitudes.print_settings`](qiskit.circuit.library.RealAmplitudes.print_settings "qiskit.circuit.library.RealAmplitudes.print_settings")()                                      | Returns information about the setting.                                                                       |
| [`RealAmplitudes.qasm`](qiskit.circuit.library.RealAmplitudes.qasm "qiskit.circuit.library.RealAmplitudes.qasm")(\[formatted, filename])                                              | Return OpenQASM string.                                                                                      |
| [`RealAmplitudes.qbit_argument_conversion`](qiskit.circuit.library.RealAmplitudes.qbit_argument_conversion "qiskit.circuit.library.RealAmplitudes.qbit_argument_conversion")(…)       | Converts several qubit representations (such as indexes, range, etc.) into a list of qubits.                 |
| [`RealAmplitudes.r`](qiskit.circuit.library.RealAmplitudes.r "qiskit.circuit.library.RealAmplitudes.r")(theta, phi, qubit, \*\[, q])                                                  | Apply `RGate`.                                                                                               |
| [`RealAmplitudes.rcccx`](qiskit.circuit.library.RealAmplitudes.rcccx "qiskit.circuit.library.RealAmplitudes.rcccx")(control\_qubit1, …)                                               | Apply [`RC3XGate`](qiskit.circuit.library.RC3XGate "qiskit.circuit.library.RC3XGate").                       |
| [`RealAmplitudes.rccx`](qiskit.circuit.library.RealAmplitudes.rccx "qiskit.circuit.library.RealAmplitudes.rccx")(control\_qubit1, …)                                                  | Apply [`RCCXGate`](qiskit.circuit.library.RCCXGate "qiskit.circuit.library.RCCXGate").                       |
| [`RealAmplitudes.remove_final_measurements`](qiskit.circuit.library.RealAmplitudes.remove_final_measurements "qiskit.circuit.library.RealAmplitudes.remove_final_measurements")(\[…]) | Removes final measurement on all qubits if they are present.                                                 |
| [`RealAmplitudes.reset`](qiskit.circuit.library.RealAmplitudes.reset "qiskit.circuit.library.RealAmplitudes.reset")(qubit)                                                            | Reset q.                                                                                                     |
| [`RealAmplitudes.rx`](qiskit.circuit.library.RealAmplitudes.rx "qiskit.circuit.library.RealAmplitudes.rx")(theta, qubit, \*\[, label, q])                                             | Apply [`RXGate`](qiskit.circuit.library.RXGate "qiskit.circuit.library.RXGate").                             |
| [`RealAmplitudes.rxx`](qiskit.circuit.library.RealAmplitudes.rxx "qiskit.circuit.library.RealAmplitudes.rxx")(theta, qubit1, qubit2)                                                  | Apply [`RXXGate`](qiskit.circuit.library.RXXGate "qiskit.circuit.library.RXXGate").                          |
| [`RealAmplitudes.ry`](qiskit.circuit.library.RealAmplitudes.ry "qiskit.circuit.library.RealAmplitudes.ry")(theta, qubit, \*\[, label, q])                                             | Apply [`RYGate`](qiskit.circuit.library.RYGate "qiskit.circuit.library.RYGate").                             |
| [`RealAmplitudes.ryy`](qiskit.circuit.library.RealAmplitudes.ryy "qiskit.circuit.library.RealAmplitudes.ryy")(theta, qubit1, qubit2)                                                  | Apply [`RYYGate`](qiskit.circuit.library.RYYGate "qiskit.circuit.library.RYYGate").                          |
| [`RealAmplitudes.rz`](qiskit.circuit.library.RealAmplitudes.rz "qiskit.circuit.library.RealAmplitudes.rz")(phi, qubit, \*\[, q])                                                      | Apply [`RZGate`](qiskit.circuit.library.RZGate "qiskit.circuit.library.RZGate").                             |
| [`RealAmplitudes.rzx`](qiskit.circuit.library.RealAmplitudes.rzx "qiskit.circuit.library.RealAmplitudes.rzx")(theta, qubit1, qubit2)                                                  | Apply [`RZXGate`](qiskit.circuit.library.RZXGate "qiskit.circuit.library.RZXGate").                          |
| [`RealAmplitudes.rzz`](qiskit.circuit.library.RealAmplitudes.rzz "qiskit.circuit.library.RealAmplitudes.rzz")(theta, qubit1, qubit2)                                                  | Apply [`RZZGate`](qiskit.circuit.library.RZZGate "qiskit.circuit.library.RZZGate").                          |
| [`RealAmplitudes.s`](qiskit.circuit.library.RealAmplitudes.s "qiskit.circuit.library.RealAmplitudes.s")(qubit, \*\[, q])                                                              | Apply [`SGate`](qiskit.circuit.library.SGate "qiskit.circuit.library.SGate").                                |
| [`RealAmplitudes.sdg`](qiskit.circuit.library.RealAmplitudes.sdg "qiskit.circuit.library.RealAmplitudes.sdg")(qubit, \*\[, q])                                                        | Apply [`SdgGate`](qiskit.circuit.library.SdgGate "qiskit.circuit.library.SdgGate").                          |
| [`RealAmplitudes.size`](qiskit.circuit.library.RealAmplitudes.size "qiskit.circuit.library.RealAmplitudes.size")()                                                                    | Returns total number of gate operations in circuit.                                                          |
| [`RealAmplitudes.snapshot`](qiskit.circuit.library.RealAmplitudes.snapshot "qiskit.circuit.library.RealAmplitudes.snapshot")(label\[, …])                                             | Take a statevector snapshot of the internal simulator representation.                                        |
| [`RealAmplitudes.snapshot_density_matrix`](qiskit.circuit.library.RealAmplitudes.snapshot_density_matrix "qiskit.circuit.library.RealAmplitudes.snapshot_density_matrix")(label)      | Take a density matrix snapshot of simulator state.                                                           |
| [`RealAmplitudes.snapshot_expectation_value`](qiskit.circuit.library.RealAmplitudes.snapshot_expectation_value "qiskit.circuit.library.RealAmplitudes.snapshot_expectation_value")(…) | Take a snapshot of expectation value \<O> of an Operator.                                                    |
| [`RealAmplitudes.snapshot_probabilities`](qiskit.circuit.library.RealAmplitudes.snapshot_probabilities "qiskit.circuit.library.RealAmplitudes.snapshot_probabilities")(label, …)      | Take a probability snapshot of the simulator state.                                                          |
| [`RealAmplitudes.snapshot_stabilizer`](qiskit.circuit.library.RealAmplitudes.snapshot_stabilizer "qiskit.circuit.library.RealAmplitudes.snapshot_stabilizer")(label)                  | Take a stabilizer snapshot of the simulator state.                                                           |
| [`RealAmplitudes.snapshot_statevector`](qiskit.circuit.library.RealAmplitudes.snapshot_statevector "qiskit.circuit.library.RealAmplitudes.snapshot_statevector")(label)               | Take a statevector snapshot of the simulator state.                                                          |
| [`RealAmplitudes.squ`](qiskit.circuit.library.RealAmplitudes.squ "qiskit.circuit.library.RealAmplitudes.squ")(unitary\_matrix, qubit\[, …])                                           | Decompose an arbitrary 2\*2 unitary into three rotation gates.                                               |
| [`RealAmplitudes.swap`](qiskit.circuit.library.RealAmplitudes.swap "qiskit.circuit.library.RealAmplitudes.swap")(qubit1, qubit2)                                                      | Apply [`SwapGate`](qiskit.circuit.library.SwapGate "qiskit.circuit.library.SwapGate").                       |
| [`RealAmplitudes.t`](qiskit.circuit.library.RealAmplitudes.t "qiskit.circuit.library.RealAmplitudes.t")(qubit, \*\[, q])                                                              | Apply [`TGate`](qiskit.circuit.library.TGate "qiskit.circuit.library.TGate").                                |
| [`RealAmplitudes.tdg`](qiskit.circuit.library.RealAmplitudes.tdg "qiskit.circuit.library.RealAmplitudes.tdg")(qubit, \*\[, q])                                                        | Apply [`TdgGate`](qiskit.circuit.library.TdgGate "qiskit.circuit.library.TdgGate").                          |
| [`RealAmplitudes.to_gate`](qiskit.circuit.library.RealAmplitudes.to_gate "qiskit.circuit.library.RealAmplitudes.to_gate")(\[parameter\_map])                                          | Create a Gate out of this circuit.                                                                           |
| [`RealAmplitudes.to_instruction`](qiskit.circuit.library.RealAmplitudes.to_instruction "qiskit.circuit.library.RealAmplitudes.to_instruction")(\[parameter\_map])                     | Create an Instruction out of this circuit.                                                                   |
| [`RealAmplitudes.toffoli`](qiskit.circuit.library.RealAmplitudes.toffoli "qiskit.circuit.library.RealAmplitudes.toffoli")(control\_qubit1, …)                                         | Apply [`CCXGate`](qiskit.circuit.library.CCXGate "qiskit.circuit.library.CCXGate").                          |
| [`RealAmplitudes.u1`](qiskit.circuit.library.RealAmplitudes.u1 "qiskit.circuit.library.RealAmplitudes.u1")(theta, qubit, \*\[, q])                                                    | Apply [`U1Gate`](qiskit.circuit.library.U1Gate "qiskit.circuit.library.U1Gate").                             |
| [`RealAmplitudes.u2`](qiskit.circuit.library.RealAmplitudes.u2 "qiskit.circuit.library.RealAmplitudes.u2")(phi, lam, qubit, \*\[, q])                                                 | Apply [`U2Gate`](qiskit.circuit.library.U2Gate "qiskit.circuit.library.U2Gate").                             |
| [`RealAmplitudes.u3`](qiskit.circuit.library.RealAmplitudes.u3 "qiskit.circuit.library.RealAmplitudes.u3")(theta, phi, lam, qubit, \*)                                                | Apply [`U3Gate`](qiskit.circuit.library.U3Gate "qiskit.circuit.library.U3Gate").                             |
| [`RealAmplitudes.uc`](qiskit.circuit.library.RealAmplitudes.uc "qiskit.circuit.library.RealAmplitudes.uc")(gate\_list, q\_controls, …)                                                | Attach a uniformly controlled gates (also called multiplexed gates) to a circuit.                            |
| [`RealAmplitudes.ucg`](qiskit.circuit.library.RealAmplitudes.ucg "qiskit.circuit.library.RealAmplitudes.ucg")(angle\_list, q\_controls, …)                                            | Deprecated version of uc.                                                                                    |
| [`RealAmplitudes.ucrx`](qiskit.circuit.library.RealAmplitudes.ucrx "qiskit.circuit.library.RealAmplitudes.ucrx")(angle\_list, q\_controls, …)                                         | Attach a uniformly controlled (also called multiplexed) Rx rotation gate to a circuit.                       |
| [`RealAmplitudes.ucry`](qiskit.circuit.library.RealAmplitudes.ucry "qiskit.circuit.library.RealAmplitudes.ucry")(angle\_list, q\_controls, …)                                         | Attach a uniformly controlled (also called multiplexed) Ry rotation gate to a circuit.                       |
| [`RealAmplitudes.ucrz`](qiskit.circuit.library.RealAmplitudes.ucrz "qiskit.circuit.library.RealAmplitudes.ucrz")(angle\_list, q\_controls, …)                                         | Attach a uniformly controlled (also called multiplexed gates) Rz rotation gate to a circuit.                 |
| [`RealAmplitudes.ucx`](qiskit.circuit.library.RealAmplitudes.ucx "qiskit.circuit.library.RealAmplitudes.ucx")(angle\_list, q\_controls, …)                                            | Deprecated version of ucrx.                                                                                  |
| [`RealAmplitudes.ucy`](qiskit.circuit.library.RealAmplitudes.ucy "qiskit.circuit.library.RealAmplitudes.ucy")(angle\_list, q\_controls, …)                                            | Deprecated version of ucry.                                                                                  |
| [`RealAmplitudes.ucz`](qiskit.circuit.library.RealAmplitudes.ucz "qiskit.circuit.library.RealAmplitudes.ucz")(angle\_list, q\_controls, …)                                            | Deprecated version of ucrz.                                                                                  |
| [`RealAmplitudes.unitary`](qiskit.circuit.library.RealAmplitudes.unitary "qiskit.circuit.library.RealAmplitudes.unitary")(obj, qubits\[, label])                                      | Apply unitary gate to q.                                                                                     |
| [`RealAmplitudes.width`](qiskit.circuit.library.RealAmplitudes.width "qiskit.circuit.library.RealAmplitudes.width")()                                                                 | Return number of qubits plus clbits in circuit.                                                              |
| [`RealAmplitudes.x`](qiskit.circuit.library.RealAmplitudes.x "qiskit.circuit.library.RealAmplitudes.x")(qubit, \*\[, label, …])                                                       | Apply [`XGate`](qiskit.circuit.library.XGate "qiskit.circuit.library.XGate").                                |
| [`RealAmplitudes.y`](qiskit.circuit.library.RealAmplitudes.y "qiskit.circuit.library.RealAmplitudes.y")(qubit, \*\[, q])                                                              | Apply [`YGate`](qiskit.circuit.library.YGate "qiskit.circuit.library.YGate").                                |
| [`RealAmplitudes.z`](qiskit.circuit.library.RealAmplitudes.z "qiskit.circuit.library.RealAmplitudes.z")(qubit, \*\[, q])                                                              | Apply [`ZGate`](qiskit.circuit.library.ZGate "qiskit.circuit.library.ZGate").                                |
| [`RealAmplitudes.__getitem__`](qiskit.circuit.library.RealAmplitudes.__getitem__ "qiskit.circuit.library.RealAmplitudes.__getitem__")(item)                                           | Return indexed operation.                                                                                    |
| [`RealAmplitudes.__len__`](qiskit.circuit.library.RealAmplitudes.__len__ "qiskit.circuit.library.RealAmplitudes.__len__")()                                                           | Return number of operations in circuit.                                                                      |

