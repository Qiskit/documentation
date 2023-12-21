---
title: PauliFeatureMap
description: API reference for qiskit.circuit.library.PauliFeatureMap
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.PauliFeatureMap
---

# PauliFeatureMap

<span id="qiskit.circuit.library.PauliFeatureMap" />

`PauliFeatureMap(feature_dimension=None, reps=2, entanglement='full', paulis=None, data_map_func=None, parameter_prefix='x', insert_barriers=False)`

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
    \prod_{j \in S} (\pi - x_j)\end{split}
$$

For example, if the Pauli strings are chosen to be $P_0 = Z$ and $P_{0,1} = YY$ on 2 qubits and with 1 repetition using the default data-mapping, the Pauli evolution feature map is represented by:

```python
┌───┐┌──────────────┐┌──────────┐                                             ┌───────────┐
┤ H ├┤ U1(2.0*x[0]) ├┤ RX(pi/2) ├──■───────────────────────────────────────■──┤ RX(-pi/2) ├
├───┤├──────────────┤├──────────┤┌─┴─┐┌─────────────────────────────────┐┌─┴─┐├───────────┤
┤ H ├┤ U1(2.0*x[1]) ├┤ RX(pi/2) ├┤ X ├┤ U1(2.0*(pi - x[0])*(pi - x[1])) ├┤ X ├┤ RX(-pi/2) ├
└───┘└──────────────┘└──────────┘└───┘└─────────────────────────────────┘└───┘└───────────┘
```

Please refer to [`ZFeatureMap`](qiskit.circuit.library.ZFeatureMap "qiskit.circuit.library.ZFeatureMap") for the case $k = 1$, $P_0 = Z$ and to [`ZZFeatureMap`](qiskit.circuit.library.ZZFeatureMap "qiskit.circuit.library.ZZFeatureMap") for the case $k = 2$, $P_0 = Z$ and $P_{0,1} = ZZ$.

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
*   **entanglement** (`Union`\[`str`, `List`\[`List`\[`int`]], `Callable`\[\[`int`], `List`\[`int`]]]) – Specifies the entanglement structure. Refer to [`NLocal`](qiskit.circuit.library.NLocal "qiskit.circuit.library.NLocal") for detail.
*   **paulis** (`Optional`\[`List`\[`str`]]) – A list of strings for to-be-used paulis. If None are provided, `['Z', 'ZZ']` will be used.
*   **data\_map\_func** (`Optional`\[`Callable`\[\[`ndarray`], `float`]]) – A mapping function for data x which can be supplied to override the default mapping from `self_product()`.
*   **parameter\_prefix** (`str`) – The prefix used if default parameters are generated.
*   **insert\_barriers** (`bool`) – If True, barriers are inserted in between the evolution instructions and hadamard layers.

## Attributes

|                                                                                                                                                                              |                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [`PauliFeatureMap.clbits`](qiskit.circuit.library.PauliFeatureMap.clbits "qiskit.circuit.library.PauliFeatureMap.clbits")                                                    | Returns a list of classical bits in the order that the registers were added.                       |
| [`PauliFeatureMap.data`](qiskit.circuit.library.PauliFeatureMap.data "qiskit.circuit.library.PauliFeatureMap.data")                                                          | Return the circuit data (instructions and context).                                                |
| [`PauliFeatureMap.entanglement`](qiskit.circuit.library.PauliFeatureMap.entanglement "qiskit.circuit.library.PauliFeatureMap.entanglement")                                  | Get the entanglement strategy.                                                                     |
| [`PauliFeatureMap.entanglement_blocks`](qiskit.circuit.library.PauliFeatureMap.entanglement_blocks "qiskit.circuit.library.PauliFeatureMap.entanglement_blocks")             | The blocks in the entanglement layers.                                                             |
| [`PauliFeatureMap.extension_lib`](qiskit.circuit.library.PauliFeatureMap.extension_lib "qiskit.circuit.library.PauliFeatureMap.extension_lib")                               |                                                                                                    |
| [`PauliFeatureMap.feature_dimension`](qiskit.circuit.library.PauliFeatureMap.feature_dimension "qiskit.circuit.library.PauliFeatureMap.feature_dimension")                   | Returns the feature dimension (which is equal to the number of qubits).                            |
| [`PauliFeatureMap.header`](qiskit.circuit.library.PauliFeatureMap.header "qiskit.circuit.library.PauliFeatureMap.header")                                                    |                                                                                                    |
| [`PauliFeatureMap.initial_state`](qiskit.circuit.library.PauliFeatureMap.initial_state "qiskit.circuit.library.PauliFeatureMap.initial_state")                               | Return the initial state that is added in front of the n-local circuit.                            |
| [`PauliFeatureMap.insert_barriers`](qiskit.circuit.library.PauliFeatureMap.insert_barriers "qiskit.circuit.library.PauliFeatureMap.insert_barriers")                         | If barriers are inserted in between the layers or not.                                             |
| [`PauliFeatureMap.instances`](qiskit.circuit.library.PauliFeatureMap.instances "qiskit.circuit.library.PauliFeatureMap.instances")                                           |                                                                                                    |
| [`PauliFeatureMap.n_qubits`](qiskit.circuit.library.PauliFeatureMap.n_qubits "qiskit.circuit.library.PauliFeatureMap.n_qubits")                                              | Deprecated, use `num_qubits` instead.                                                              |
| [`PauliFeatureMap.num_clbits`](qiskit.circuit.library.PauliFeatureMap.num_clbits "qiskit.circuit.library.PauliFeatureMap.num_clbits")                                        | Return number of classical bits.                                                                   |
| [`PauliFeatureMap.num_layers`](qiskit.circuit.library.PauliFeatureMap.num_layers "qiskit.circuit.library.PauliFeatureMap.num_layers")                                        | Return the number of layers in the n-local circuit.                                                |
| [`PauliFeatureMap.num_parameters`](qiskit.circuit.library.PauliFeatureMap.num_parameters "qiskit.circuit.library.PauliFeatureMap.num_parameters")                            | Convenience function to get the number of parameter objects in the circuit.                        |
| [`PauliFeatureMap.num_parameters_settable`](qiskit.circuit.library.PauliFeatureMap.num_parameters_settable "qiskit.circuit.library.PauliFeatureMap.num_parameters_settable") | The number of distinct parameters.                                                                 |
| [`PauliFeatureMap.num_qubits`](qiskit.circuit.library.PauliFeatureMap.num_qubits "qiskit.circuit.library.PauliFeatureMap.num_qubits")                                        | Returns the number of qubits in this circuit.                                                      |
| [`PauliFeatureMap.ordered_parameters`](qiskit.circuit.library.PauliFeatureMap.ordered_parameters "qiskit.circuit.library.PauliFeatureMap.ordered_parameters")                | The parameters used in the underlying circuit.                                                     |
| [`PauliFeatureMap.parameter_bounds`](qiskit.circuit.library.PauliFeatureMap.parameter_bounds "qiskit.circuit.library.PauliFeatureMap.parameter_bounds")                      | The parameter bounds for the unbound parameters in the circuit.                                    |
| [`PauliFeatureMap.parameters`](qiskit.circuit.library.PauliFeatureMap.parameters "qiskit.circuit.library.PauliFeatureMap.parameters")                                        | Get the [`Parameter`](qiskit.circuit.Parameter "qiskit.circuit.Parameter") objects in the circuit. |
| [`PauliFeatureMap.paulis`](qiskit.circuit.library.PauliFeatureMap.paulis "qiskit.circuit.library.PauliFeatureMap.paulis")                                                    | The Pauli strings used in the entanglement of the qubits.                                          |
| [`PauliFeatureMap.preferred_init_points`](qiskit.circuit.library.PauliFeatureMap.preferred_init_points "qiskit.circuit.library.PauliFeatureMap.preferred_init_points")       | The initial points for the parameters.                                                             |
| [`PauliFeatureMap.prefix`](qiskit.circuit.library.PauliFeatureMap.prefix "qiskit.circuit.library.PauliFeatureMap.prefix")                                                    |                                                                                                    |
| [`PauliFeatureMap.qregs`](qiskit.circuit.library.PauliFeatureMap.qregs "qiskit.circuit.library.PauliFeatureMap.qregs")                                                       | A list of the quantum registers associated with the circuit.                                       |
| [`PauliFeatureMap.qubits`](qiskit.circuit.library.PauliFeatureMap.qubits "qiskit.circuit.library.PauliFeatureMap.qubits")                                                    | Returns a list of quantum bits in the order that the registers were added.                         |
| [`PauliFeatureMap.reps`](qiskit.circuit.library.PauliFeatureMap.reps "qiskit.circuit.library.PauliFeatureMap.reps")                                                          | The number of times rotation and entanglement block are repeated.                                  |
| [`PauliFeatureMap.rotation_blocks`](qiskit.circuit.library.PauliFeatureMap.rotation_blocks "qiskit.circuit.library.PauliFeatureMap.rotation_blocks")                         | The blocks in the rotation layers.                                                                 |

## Methods

|                                                                                                                                                                                          |                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| [`PauliFeatureMap.AND`](qiskit.circuit.library.PauliFeatureMap.AND "qiskit.circuit.library.PauliFeatureMap.AND")(qr\_variables, qb\_target, …)                                           | Build a collective conjunction (AND) circuit in place using mct.                                             |
| [`PauliFeatureMap.OR`](qiskit.circuit.library.PauliFeatureMap.OR "qiskit.circuit.library.PauliFeatureMap.OR")(qr\_variables, qb\_target, …)                                              | Build a collective disjunction (OR) circuit in place using mct.                                              |
| [`PauliFeatureMap.__getitem__`](qiskit.circuit.library.PauliFeatureMap.__getitem__ "qiskit.circuit.library.PauliFeatureMap.__getitem__")(item)                                           | Return indexed operation.                                                                                    |
| [`PauliFeatureMap.__len__`](qiskit.circuit.library.PauliFeatureMap.__len__ "qiskit.circuit.library.PauliFeatureMap.__len__")()                                                           | Return number of operations in circuit.                                                                      |
| [`PauliFeatureMap.add_layer`](qiskit.circuit.library.PauliFeatureMap.add_layer "qiskit.circuit.library.PauliFeatureMap.add_layer")(other\[, …])                                          | Append another layer to the NLocal.                                                                          |
| [`PauliFeatureMap.add_register`](qiskit.circuit.library.PauliFeatureMap.add_register "qiskit.circuit.library.PauliFeatureMap.add_register")(\*regs)                                      | Add registers.                                                                                               |
| [`PauliFeatureMap.append`](qiskit.circuit.library.PauliFeatureMap.append "qiskit.circuit.library.PauliFeatureMap.append")(instruction\[, qargs, …])                                      | Append one or more instructions to the end of the circuit, modifying the circuit in place.                   |
| [`PauliFeatureMap.assign_parameters`](qiskit.circuit.library.PauliFeatureMap.assign_parameters "qiskit.circuit.library.PauliFeatureMap.assign_parameters")(param\_dict)                  | Assign parameters to the n-local circuit.                                                                    |
| [`PauliFeatureMap.barrier`](qiskit.circuit.library.PauliFeatureMap.barrier "qiskit.circuit.library.PauliFeatureMap.barrier")(\*qargs)                                                    | Apply `Barrier`.                                                                                             |
| [`PauliFeatureMap.bind_parameters`](qiskit.circuit.library.PauliFeatureMap.bind_parameters "qiskit.circuit.library.PauliFeatureMap.bind_parameters")(value\_dict)                        | Assign numeric parameters to values yielding a new circuit.                                                  |
| [`PauliFeatureMap.cast`](qiskit.circuit.library.PauliFeatureMap.cast "qiskit.circuit.library.PauliFeatureMap.cast")(value, \_type)                                                       | Best effort to cast value to type.                                                                           |
| [`PauliFeatureMap.cbit_argument_conversion`](qiskit.circuit.library.PauliFeatureMap.cbit_argument_conversion "qiskit.circuit.library.PauliFeatureMap.cbit_argument_conversion")(…)       | Converts several classical bit representations (such as indexes, range, etc.) into a list of classical bits. |
| [`PauliFeatureMap.ccx`](qiskit.circuit.library.PauliFeatureMap.ccx "qiskit.circuit.library.PauliFeatureMap.ccx")(control\_qubit1, …\[, …])                                               | Apply [`CCXGate`](qiskit.circuit.library.CCXGate "qiskit.circuit.library.CCXGate").                          |
| [`PauliFeatureMap.ch`](qiskit.circuit.library.PauliFeatureMap.ch "qiskit.circuit.library.PauliFeatureMap.ch")(control\_qubit, …\[, …])                                                   | Apply [`CHGate`](qiskit.circuit.library.CHGate "qiskit.circuit.library.CHGate").                             |
| [`PauliFeatureMap.cls_instances`](qiskit.circuit.library.PauliFeatureMap.cls_instances "qiskit.circuit.library.PauliFeatureMap.cls_instances")()                                         | Return the current number of instances of this class, useful for auto naming.                                |
| [`PauliFeatureMap.cls_prefix`](qiskit.circuit.library.PauliFeatureMap.cls_prefix "qiskit.circuit.library.PauliFeatureMap.cls_prefix")()                                                  | Return the prefix to use for auto naming.                                                                    |
| [`PauliFeatureMap.cnot`](qiskit.circuit.library.PauliFeatureMap.cnot "qiskit.circuit.library.PauliFeatureMap.cnot")(control\_qubit, …\[, …])                                             | Apply [`CXGate`](qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate").                             |
| [`PauliFeatureMap.combine`](qiskit.circuit.library.PauliFeatureMap.combine "qiskit.circuit.library.PauliFeatureMap.combine")(rhs)                                                        | Append rhs to self if self contains compatible registers.                                                    |
| [`PauliFeatureMap.compose`](qiskit.circuit.library.PauliFeatureMap.compose "qiskit.circuit.library.PauliFeatureMap.compose")(other\[, qubits, …])                                        | Compose circuit with `other` circuit or instruction, optionally permuting wires.                             |
| [`PauliFeatureMap.copy`](qiskit.circuit.library.PauliFeatureMap.copy "qiskit.circuit.library.PauliFeatureMap.copy")(\[name])                                                             | Copy the circuit.                                                                                            |
| [`PauliFeatureMap.count_ops`](qiskit.circuit.library.PauliFeatureMap.count_ops "qiskit.circuit.library.PauliFeatureMap.count_ops")()                                                     | Count each operation kind in the circuit.                                                                    |
| [`PauliFeatureMap.crx`](qiskit.circuit.library.PauliFeatureMap.crx "qiskit.circuit.library.PauliFeatureMap.crx")(theta, control\_qubit, …)                                               | Apply [`CRXGate`](qiskit.circuit.library.CRXGate "qiskit.circuit.library.CRXGate").                          |
| [`PauliFeatureMap.cry`](qiskit.circuit.library.PauliFeatureMap.cry "qiskit.circuit.library.PauliFeatureMap.cry")(theta, control\_qubit, …)                                               | Apply [`CRYGate`](qiskit.circuit.library.CRYGate "qiskit.circuit.library.CRYGate").                          |
| [`PauliFeatureMap.crz`](qiskit.circuit.library.PauliFeatureMap.crz "qiskit.circuit.library.PauliFeatureMap.crz")(theta, control\_qubit, …)                                               | Apply [`CRZGate`](qiskit.circuit.library.CRZGate "qiskit.circuit.library.CRZGate").                          |
| [`PauliFeatureMap.cswap`](qiskit.circuit.library.PauliFeatureMap.cswap "qiskit.circuit.library.PauliFeatureMap.cswap")(control\_qubit, …\[, …])                                          | Apply [`CSwapGate`](qiskit.circuit.library.CSwapGate "qiskit.circuit.library.CSwapGate").                    |
| [`PauliFeatureMap.cu1`](qiskit.circuit.library.PauliFeatureMap.cu1 "qiskit.circuit.library.PauliFeatureMap.cu1")(theta, control\_qubit, …)                                               | Apply [`CU1Gate`](qiskit.circuit.library.CU1Gate "qiskit.circuit.library.CU1Gate").                          |
| [`PauliFeatureMap.cu3`](qiskit.circuit.library.PauliFeatureMap.cu3 "qiskit.circuit.library.PauliFeatureMap.cu3")(theta, phi, lam, …\[, …])                                               | Apply [`CU3Gate`](qiskit.circuit.library.CU3Gate "qiskit.circuit.library.CU3Gate").                          |
| [`PauliFeatureMap.cx`](qiskit.circuit.library.PauliFeatureMap.cx "qiskit.circuit.library.PauliFeatureMap.cx")(control\_qubit, …\[, …])                                                   | Apply [`CXGate`](qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate").                             |
| [`PauliFeatureMap.cy`](qiskit.circuit.library.PauliFeatureMap.cy "qiskit.circuit.library.PauliFeatureMap.cy")(control\_qubit, …\[, …])                                                   | Apply [`CYGate`](qiskit.circuit.library.CYGate "qiskit.circuit.library.CYGate").                             |
| [`PauliFeatureMap.cz`](qiskit.circuit.library.PauliFeatureMap.cz "qiskit.circuit.library.PauliFeatureMap.cz")(control\_qubit, …\[, …])                                                   | Apply [`CZGate`](qiskit.circuit.library.CZGate "qiskit.circuit.library.CZGate").                             |
| [`PauliFeatureMap.dcx`](qiskit.circuit.library.PauliFeatureMap.dcx "qiskit.circuit.library.PauliFeatureMap.dcx")(qubit1, qubit2)                                                         | Apply [`DCXGate`](qiskit.circuit.library.DCXGate "qiskit.circuit.library.DCXGate").                          |
| [`PauliFeatureMap.decompose`](qiskit.circuit.library.PauliFeatureMap.decompose "qiskit.circuit.library.PauliFeatureMap.decompose")()                                                     | Call a decomposition pass on this circuit, to decompose one level (shallow decompose).                       |
| [`PauliFeatureMap.depth`](qiskit.circuit.library.PauliFeatureMap.depth "qiskit.circuit.library.PauliFeatureMap.depth")()                                                                 | Return circuit depth (i.e., length of critical path).                                                        |
| [`PauliFeatureMap.diag_gate`](qiskit.circuit.library.PauliFeatureMap.diag_gate "qiskit.circuit.library.PauliFeatureMap.diag_gate")(diag, qubit)                                          | Deprecated version of QuantumCircuit.diagonal.                                                               |
| [`PauliFeatureMap.diagonal`](qiskit.circuit.library.PauliFeatureMap.diagonal "qiskit.circuit.library.PauliFeatureMap.diagonal")(diag, qubit)                                             | Attach a diagonal gate to a circuit.                                                                         |
| [`PauliFeatureMap.draw`](qiskit.circuit.library.PauliFeatureMap.draw "qiskit.circuit.library.PauliFeatureMap.draw")(\[output, scale, …])                                                 | Draw the quantum circuit.                                                                                    |
| [`PauliFeatureMap.extend`](qiskit.circuit.library.PauliFeatureMap.extend "qiskit.circuit.library.PauliFeatureMap.extend")(rhs)                                                           | Append QuantumCircuit to the right hand side if it contains compatible registers.                            |
| [`PauliFeatureMap.fredkin`](qiskit.circuit.library.PauliFeatureMap.fredkin "qiskit.circuit.library.PauliFeatureMap.fredkin")(control\_qubit, …)                                          | Apply [`CSwapGate`](qiskit.circuit.library.CSwapGate "qiskit.circuit.library.CSwapGate").                    |
| [`PauliFeatureMap.from_qasm_file`](qiskit.circuit.library.PauliFeatureMap.from_qasm_file "qiskit.circuit.library.PauliFeatureMap.from_qasm_file")(path)                                  | Take in a QASM file and generate a QuantumCircuit object.                                                    |
| [`PauliFeatureMap.from_qasm_str`](qiskit.circuit.library.PauliFeatureMap.from_qasm_str "qiskit.circuit.library.PauliFeatureMap.from_qasm_str")(qasm\_str)                                | Take in a QASM string and generate a QuantumCircuit object.                                                  |
| [`PauliFeatureMap.get_entangler_map`](qiskit.circuit.library.PauliFeatureMap.get_entangler_map "qiskit.circuit.library.PauliFeatureMap.get_entangler_map")(rep\_num, …)                  | Get the entangler map for in the repetition `rep_num` and the block `block_num`.                             |
| [`PauliFeatureMap.get_unentangled_qubits`](qiskit.circuit.library.PauliFeatureMap.get_unentangled_qubits "qiskit.circuit.library.PauliFeatureMap.get_unentangled_qubits")()              | Get the indices of unentangled qubits in a set.                                                              |
| [`PauliFeatureMap.h`](qiskit.circuit.library.PauliFeatureMap.h "qiskit.circuit.library.PauliFeatureMap.h")(qubit, \*\[, q])                                                              | Apply [`HGate`](qiskit.circuit.library.HGate "qiskit.circuit.library.HGate").                                |
| [`PauliFeatureMap.hamiltonian`](qiskit.circuit.library.PauliFeatureMap.hamiltonian "qiskit.circuit.library.PauliFeatureMap.hamiltonian")(operator, time, …)                              | Apply hamiltonian evolution to to qubits.                                                                    |
| [`PauliFeatureMap.has_register`](qiskit.circuit.library.PauliFeatureMap.has_register "qiskit.circuit.library.PauliFeatureMap.has_register")(register)                                    | Test if this circuit has the register r.                                                                     |
| [`PauliFeatureMap.i`](qiskit.circuit.library.PauliFeatureMap.i "qiskit.circuit.library.PauliFeatureMap.i")(qubit, \*\[, q])                                                              | Apply [`IGate`](qiskit.circuit.library.IGate "qiskit.circuit.library.IGate").                                |
| [`PauliFeatureMap.id`](qiskit.circuit.library.PauliFeatureMap.id "qiskit.circuit.library.PauliFeatureMap.id")(qubit, \*\[, q])                                                           | Apply [`IGate`](qiskit.circuit.library.IGate "qiskit.circuit.library.IGate").                                |
| [`PauliFeatureMap.iden`](qiskit.circuit.library.PauliFeatureMap.iden "qiskit.circuit.library.PauliFeatureMap.iden")(qubit, \*\[, q])                                                     | Deprecated identity gate.                                                                                    |
| [`PauliFeatureMap.initialize`](qiskit.circuit.library.PauliFeatureMap.initialize "qiskit.circuit.library.PauliFeatureMap.initialize")(params, qubits)                                    | Apply initialize to circuit.                                                                                 |
| [`PauliFeatureMap.inverse`](qiskit.circuit.library.PauliFeatureMap.inverse "qiskit.circuit.library.PauliFeatureMap.inverse")()                                                           | Invert this circuit.                                                                                         |
| [`PauliFeatureMap.iso`](qiskit.circuit.library.PauliFeatureMap.iso "qiskit.circuit.library.PauliFeatureMap.iso")(isometry, q\_input, …)                                                  | Attach an arbitrary isometry from m to n qubits to a circuit.                                                |
| [`PauliFeatureMap.isometry`](qiskit.circuit.library.PauliFeatureMap.isometry "qiskit.circuit.library.PauliFeatureMap.isometry")(isometry, q\_input, …)                                   | Attach an arbitrary isometry from m to n qubits to a circuit.                                                |
| [`PauliFeatureMap.iswap`](qiskit.circuit.library.PauliFeatureMap.iswap "qiskit.circuit.library.PauliFeatureMap.iswap")(qubit1, qubit2)                                                   | Apply [`iSwapGate`](qiskit.circuit.library.iSwapGate "qiskit.circuit.library.iSwapGate").                    |
| [`PauliFeatureMap.mcmt`](qiskit.circuit.library.PauliFeatureMap.mcmt "qiskit.circuit.library.PauliFeatureMap.mcmt")(gate, control\_qubits, …)                                            | Apply a multi-control, multi-target using a generic gate.                                                    |
| [`PauliFeatureMap.mcrx`](qiskit.circuit.library.PauliFeatureMap.mcrx "qiskit.circuit.library.PauliFeatureMap.mcrx")(theta, q\_controls, q\_target)                                       | Apply Multiple-Controlled X rotation gate                                                                    |
| [`PauliFeatureMap.mcry`](qiskit.circuit.library.PauliFeatureMap.mcry "qiskit.circuit.library.PauliFeatureMap.mcry")(theta, q\_controls, …)                                               | Apply Multiple-Controlled Y rotation gate                                                                    |
| [`PauliFeatureMap.mcrz`](qiskit.circuit.library.PauliFeatureMap.mcrz "qiskit.circuit.library.PauliFeatureMap.mcrz")(lam, q\_controls, q\_target)                                         | Apply Multiple-Controlled Z rotation gate                                                                    |
| [`PauliFeatureMap.mct`](qiskit.circuit.library.PauliFeatureMap.mct "qiskit.circuit.library.PauliFeatureMap.mct")(control\_qubits, target\_qubit)                                         | Apply `MCXGate`.                                                                                             |
| [`PauliFeatureMap.mcu1`](qiskit.circuit.library.PauliFeatureMap.mcu1 "qiskit.circuit.library.PauliFeatureMap.mcu1")(lam, control\_qubits, …)                                             | Apply `MCU1Gate`.                                                                                            |
| [`PauliFeatureMap.mcx`](qiskit.circuit.library.PauliFeatureMap.mcx "qiskit.circuit.library.PauliFeatureMap.mcx")(control\_qubits, target\_qubit)                                         | Apply `MCXGate`.                                                                                             |
| [`PauliFeatureMap.measure`](qiskit.circuit.library.PauliFeatureMap.measure "qiskit.circuit.library.PauliFeatureMap.measure")(qubit, cbit)                                                | Measure quantum bit into classical bit (tuples).                                                             |
| [`PauliFeatureMap.measure_active`](qiskit.circuit.library.PauliFeatureMap.measure_active "qiskit.circuit.library.PauliFeatureMap.measure_active")(\[inplace])                            | Adds measurement to all non-idle qubits.                                                                     |
| [`PauliFeatureMap.measure_all`](qiskit.circuit.library.PauliFeatureMap.measure_all "qiskit.circuit.library.PauliFeatureMap.measure_all")(\[inplace])                                     | Adds measurement to all qubits.                                                                              |
| [`PauliFeatureMap.mirror`](qiskit.circuit.library.PauliFeatureMap.mirror "qiskit.circuit.library.PauliFeatureMap.mirror")()                                                              | Mirror the circuit by reversing the instructions.                                                            |
| [`PauliFeatureMap.ms`](qiskit.circuit.library.PauliFeatureMap.ms "qiskit.circuit.library.PauliFeatureMap.ms")(theta, qubits)                                                             | Apply [`MSGate`](qiskit.circuit.library.MSGate "qiskit.circuit.library.MSGate").                             |
| [`PauliFeatureMap.num_connected_components`](qiskit.circuit.library.PauliFeatureMap.num_connected_components "qiskit.circuit.library.PauliFeatureMap.num_connected_components")(\[…])    | How many non-entangled subcircuits can the circuit be factored to.                                           |
| [`PauliFeatureMap.num_nonlocal_gates`](qiskit.circuit.library.PauliFeatureMap.num_nonlocal_gates "qiskit.circuit.library.PauliFeatureMap.num_nonlocal_gates")()                          | Return number of non-local gates (i.e.                                                                       |
| [`PauliFeatureMap.num_tensor_factors`](qiskit.circuit.library.PauliFeatureMap.num_tensor_factors "qiskit.circuit.library.PauliFeatureMap.num_tensor_factors")()                          | Computes the number of tensor factors in the unitary (quantum) part of the circuit only.                     |
| [`PauliFeatureMap.num_unitary_factors`](qiskit.circuit.library.PauliFeatureMap.num_unitary_factors "qiskit.circuit.library.PauliFeatureMap.num_unitary_factors")()                       | Computes the number of tensor factors in the unitary (quantum) part of the circuit only.                     |
| [`PauliFeatureMap.pauli_block`](qiskit.circuit.library.PauliFeatureMap.pauli_block "qiskit.circuit.library.PauliFeatureMap.pauli_block")(pauli\_string)                                  | Get the Pauli block for the feature map circuit.                                                             |
| [`PauliFeatureMap.pauli_evolution`](qiskit.circuit.library.PauliFeatureMap.pauli_evolution "qiskit.circuit.library.PauliFeatureMap.pauli_evolution")(…)                                  | Get the evolution block for the given pauli string.                                                          |
| [`PauliFeatureMap.print_settings`](qiskit.circuit.library.PauliFeatureMap.print_settings "qiskit.circuit.library.PauliFeatureMap.print_settings")()                                      | Returns information about the setting.                                                                       |
| [`PauliFeatureMap.qasm`](qiskit.circuit.library.PauliFeatureMap.qasm "qiskit.circuit.library.PauliFeatureMap.qasm")(\[formatted, filename])                                              | Return OpenQASM string.                                                                                      |
| [`PauliFeatureMap.qbit_argument_conversion`](qiskit.circuit.library.PauliFeatureMap.qbit_argument_conversion "qiskit.circuit.library.PauliFeatureMap.qbit_argument_conversion")(…)       | Converts several qubit representations (such as indexes, range, etc.) into a list of qubits.                 |
| [`PauliFeatureMap.r`](qiskit.circuit.library.PauliFeatureMap.r "qiskit.circuit.library.PauliFeatureMap.r")(theta, phi, qubit, \*\[, q])                                                  | Apply `RGate`.                                                                                               |
| [`PauliFeatureMap.rcccx`](qiskit.circuit.library.PauliFeatureMap.rcccx "qiskit.circuit.library.PauliFeatureMap.rcccx")(control\_qubit1, …)                                               | Apply [`RC3XGate`](qiskit.circuit.library.RC3XGate "qiskit.circuit.library.RC3XGate").                       |
| [`PauliFeatureMap.rccx`](qiskit.circuit.library.PauliFeatureMap.rccx "qiskit.circuit.library.PauliFeatureMap.rccx")(control\_qubit1, …)                                                  | Apply [`RCCXGate`](qiskit.circuit.library.RCCXGate "qiskit.circuit.library.RCCXGate").                       |
| [`PauliFeatureMap.remove_final_measurements`](qiskit.circuit.library.PauliFeatureMap.remove_final_measurements "qiskit.circuit.library.PauliFeatureMap.remove_final_measurements")(\[…]) | Removes final measurement on all qubits if they are present.                                                 |
| [`PauliFeatureMap.reset`](qiskit.circuit.library.PauliFeatureMap.reset "qiskit.circuit.library.PauliFeatureMap.reset")(qubit)                                                            | Reset q.                                                                                                     |
| [`PauliFeatureMap.rx`](qiskit.circuit.library.PauliFeatureMap.rx "qiskit.circuit.library.PauliFeatureMap.rx")(theta, qubit, \*\[, label, q])                                             | Apply [`RXGate`](qiskit.circuit.library.RXGate "qiskit.circuit.library.RXGate").                             |
| [`PauliFeatureMap.rxx`](qiskit.circuit.library.PauliFeatureMap.rxx "qiskit.circuit.library.PauliFeatureMap.rxx")(theta, qubit1, qubit2)                                                  | Apply [`RXXGate`](qiskit.circuit.library.RXXGate "qiskit.circuit.library.RXXGate").                          |
| [`PauliFeatureMap.ry`](qiskit.circuit.library.PauliFeatureMap.ry "qiskit.circuit.library.PauliFeatureMap.ry")(theta, qubit, \*\[, label, q])                                             | Apply [`RYGate`](qiskit.circuit.library.RYGate "qiskit.circuit.library.RYGate").                             |
| [`PauliFeatureMap.ryy`](qiskit.circuit.library.PauliFeatureMap.ryy "qiskit.circuit.library.PauliFeatureMap.ryy")(theta, qubit1, qubit2)                                                  | Apply [`RYYGate`](qiskit.circuit.library.RYYGate "qiskit.circuit.library.RYYGate").                          |
| [`PauliFeatureMap.rz`](qiskit.circuit.library.PauliFeatureMap.rz "qiskit.circuit.library.PauliFeatureMap.rz")(phi, qubit, \*\[, q])                                                      | Apply [`RZGate`](qiskit.circuit.library.RZGate "qiskit.circuit.library.RZGate").                             |
| [`PauliFeatureMap.rzx`](qiskit.circuit.library.PauliFeatureMap.rzx "qiskit.circuit.library.PauliFeatureMap.rzx")(theta, qubit1, qubit2)                                                  | Apply [`RZXGate`](qiskit.circuit.library.RZXGate "qiskit.circuit.library.RZXGate").                          |
| [`PauliFeatureMap.rzz`](qiskit.circuit.library.PauliFeatureMap.rzz "qiskit.circuit.library.PauliFeatureMap.rzz")(theta, qubit1, qubit2)                                                  | Apply [`RZZGate`](qiskit.circuit.library.RZZGate "qiskit.circuit.library.RZZGate").                          |
| [`PauliFeatureMap.s`](qiskit.circuit.library.PauliFeatureMap.s "qiskit.circuit.library.PauliFeatureMap.s")(qubit, \*\[, q])                                                              | Apply [`SGate`](qiskit.circuit.library.SGate "qiskit.circuit.library.SGate").                                |
| [`PauliFeatureMap.sdg`](qiskit.circuit.library.PauliFeatureMap.sdg "qiskit.circuit.library.PauliFeatureMap.sdg")(qubit, \*\[, q])                                                        | Apply [`SdgGate`](qiskit.circuit.library.SdgGate "qiskit.circuit.library.SdgGate").                          |
| [`PauliFeatureMap.size`](qiskit.circuit.library.PauliFeatureMap.size "qiskit.circuit.library.PauliFeatureMap.size")()                                                                    | Returns total number of gate operations in circuit.                                                          |
| [`PauliFeatureMap.snapshot`](qiskit.circuit.library.PauliFeatureMap.snapshot "qiskit.circuit.library.PauliFeatureMap.snapshot")(label\[, …])                                             | Take a statevector snapshot of the internal simulator representation.                                        |
| [`PauliFeatureMap.snapshot_density_matrix`](qiskit.circuit.library.PauliFeatureMap.snapshot_density_matrix "qiskit.circuit.library.PauliFeatureMap.snapshot_density_matrix")(label)      | Take a density matrix snapshot of simulator state.                                                           |
| [`PauliFeatureMap.snapshot_expectation_value`](qiskit.circuit.library.PauliFeatureMap.snapshot_expectation_value "qiskit.circuit.library.PauliFeatureMap.snapshot_expectation_value")(…) | Take a snapshot of expectation value \<O> of an Operator.                                                    |
| [`PauliFeatureMap.snapshot_probabilities`](qiskit.circuit.library.PauliFeatureMap.snapshot_probabilities "qiskit.circuit.library.PauliFeatureMap.snapshot_probabilities")(…)             | Take a probability snapshot of the simulator state.                                                          |
| [`PauliFeatureMap.snapshot_stabilizer`](qiskit.circuit.library.PauliFeatureMap.snapshot_stabilizer "qiskit.circuit.library.PauliFeatureMap.snapshot_stabilizer")(label)                  | Take a stabilizer snapshot of the simulator state.                                                           |
| [`PauliFeatureMap.snapshot_statevector`](qiskit.circuit.library.PauliFeatureMap.snapshot_statevector "qiskit.circuit.library.PauliFeatureMap.snapshot_statevector")(label)               | Take a statevector snapshot of the simulator state.                                                          |
| [`PauliFeatureMap.squ`](qiskit.circuit.library.PauliFeatureMap.squ "qiskit.circuit.library.PauliFeatureMap.squ")(unitary\_matrix, qubit\[, …])                                           | Decompose an arbitrary 2\*2 unitary into three rotation gates.                                               |
| [`PauliFeatureMap.swap`](qiskit.circuit.library.PauliFeatureMap.swap "qiskit.circuit.library.PauliFeatureMap.swap")(qubit1, qubit2)                                                      | Apply [`SwapGate`](qiskit.circuit.library.SwapGate "qiskit.circuit.library.SwapGate").                       |
| [`PauliFeatureMap.t`](qiskit.circuit.library.PauliFeatureMap.t "qiskit.circuit.library.PauliFeatureMap.t")(qubit, \*\[, q])                                                              | Apply [`TGate`](qiskit.circuit.library.TGate "qiskit.circuit.library.TGate").                                |
| [`PauliFeatureMap.tdg`](qiskit.circuit.library.PauliFeatureMap.tdg "qiskit.circuit.library.PauliFeatureMap.tdg")(qubit, \*\[, q])                                                        | Apply [`TdgGate`](qiskit.circuit.library.TdgGate "qiskit.circuit.library.TdgGate").                          |
| [`PauliFeatureMap.to_gate`](qiskit.circuit.library.PauliFeatureMap.to_gate "qiskit.circuit.library.PauliFeatureMap.to_gate")(\[parameter\_map])                                          | Create a Gate out of this circuit.                                                                           |
| [`PauliFeatureMap.to_instruction`](qiskit.circuit.library.PauliFeatureMap.to_instruction "qiskit.circuit.library.PauliFeatureMap.to_instruction")(\[parameter\_map])                     | Create an Instruction out of this circuit.                                                                   |
| [`PauliFeatureMap.toffoli`](qiskit.circuit.library.PauliFeatureMap.toffoli "qiskit.circuit.library.PauliFeatureMap.toffoli")(control\_qubit1, …)                                         | Apply [`CCXGate`](qiskit.circuit.library.CCXGate "qiskit.circuit.library.CCXGate").                          |
| [`PauliFeatureMap.u1`](qiskit.circuit.library.PauliFeatureMap.u1 "qiskit.circuit.library.PauliFeatureMap.u1")(theta, qubit, \*\[, q])                                                    | Apply [`U1Gate`](qiskit.circuit.library.U1Gate "qiskit.circuit.library.U1Gate").                             |
| [`PauliFeatureMap.u2`](qiskit.circuit.library.PauliFeatureMap.u2 "qiskit.circuit.library.PauliFeatureMap.u2")(phi, lam, qubit, \*\[, q])                                                 | Apply [`U2Gate`](qiskit.circuit.library.U2Gate "qiskit.circuit.library.U2Gate").                             |
| [`PauliFeatureMap.u3`](qiskit.circuit.library.PauliFeatureMap.u3 "qiskit.circuit.library.PauliFeatureMap.u3")(theta, phi, lam, qubit, \*)                                                | Apply [`U3Gate`](qiskit.circuit.library.U3Gate "qiskit.circuit.library.U3Gate").                             |
| [`PauliFeatureMap.uc`](qiskit.circuit.library.PauliFeatureMap.uc "qiskit.circuit.library.PauliFeatureMap.uc")(gate\_list, q\_controls, …)                                                | Attach a uniformly controlled gates (also called multiplexed gates) to a circuit.                            |
| [`PauliFeatureMap.ucg`](qiskit.circuit.library.PauliFeatureMap.ucg "qiskit.circuit.library.PauliFeatureMap.ucg")(angle\_list, q\_controls, …)                                            | Deprecated version of uc.                                                                                    |
| [`PauliFeatureMap.ucrx`](qiskit.circuit.library.PauliFeatureMap.ucrx "qiskit.circuit.library.PauliFeatureMap.ucrx")(angle\_list, q\_controls, …)                                         | Attach a uniformly controlled (also called multiplexed) Rx rotation gate to a circuit.                       |
| [`PauliFeatureMap.ucry`](qiskit.circuit.library.PauliFeatureMap.ucry "qiskit.circuit.library.PauliFeatureMap.ucry")(angle\_list, q\_controls, …)                                         | Attach a uniformly controlled (also called multiplexed) Ry rotation gate to a circuit.                       |
| [`PauliFeatureMap.ucrz`](qiskit.circuit.library.PauliFeatureMap.ucrz "qiskit.circuit.library.PauliFeatureMap.ucrz")(angle\_list, q\_controls, …)                                         | Attach a uniformly controlled (also called multiplexed gates) Rz rotation gate to a circuit.                 |
| [`PauliFeatureMap.ucx`](qiskit.circuit.library.PauliFeatureMap.ucx "qiskit.circuit.library.PauliFeatureMap.ucx")(angle\_list, q\_controls, …)                                            | Deprecated version of ucrx.                                                                                  |
| [`PauliFeatureMap.ucy`](qiskit.circuit.library.PauliFeatureMap.ucy "qiskit.circuit.library.PauliFeatureMap.ucy")(angle\_list, q\_controls, …)                                            | Deprecated version of ucry.                                                                                  |
| [`PauliFeatureMap.ucz`](qiskit.circuit.library.PauliFeatureMap.ucz "qiskit.circuit.library.PauliFeatureMap.ucz")(angle\_list, q\_controls, …)                                            | Deprecated version of ucrz.                                                                                  |
| [`PauliFeatureMap.unitary`](qiskit.circuit.library.PauliFeatureMap.unitary "qiskit.circuit.library.PauliFeatureMap.unitary")(obj, qubits\[, label])                                      | Apply unitary gate to q.                                                                                     |
| [`PauliFeatureMap.width`](qiskit.circuit.library.PauliFeatureMap.width "qiskit.circuit.library.PauliFeatureMap.width")()                                                                 | Return number of qubits plus clbits in circuit.                                                              |
| [`PauliFeatureMap.x`](qiskit.circuit.library.PauliFeatureMap.x "qiskit.circuit.library.PauliFeatureMap.x")(qubit, \*\[, label, …])                                                       | Apply [`XGate`](qiskit.circuit.library.XGate "qiskit.circuit.library.XGate").                                |
| [`PauliFeatureMap.y`](qiskit.circuit.library.PauliFeatureMap.y "qiskit.circuit.library.PauliFeatureMap.y")(qubit, \*\[, q])                                                              | Apply [`YGate`](qiskit.circuit.library.YGate "qiskit.circuit.library.YGate").                                |
| [`PauliFeatureMap.z`](qiskit.circuit.library.PauliFeatureMap.z "qiskit.circuit.library.PauliFeatureMap.z")(qubit, \*\[, q])                                                              | Apply [`ZGate`](qiskit.circuit.library.ZGate "qiskit.circuit.library.ZGate").                                |
| [`PauliFeatureMap.__getitem__`](qiskit.circuit.library.PauliFeatureMap.__getitem__ "qiskit.circuit.library.PauliFeatureMap.__getitem__")(item)                                           | Return indexed operation.                                                                                    |
| [`PauliFeatureMap.__len__`](qiskit.circuit.library.PauliFeatureMap.__len__ "qiskit.circuit.library.PauliFeatureMap.__len__")()                                                           | Return number of operations in circuit.                                                                      |

