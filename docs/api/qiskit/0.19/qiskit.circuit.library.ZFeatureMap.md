---
title: ZFeatureMap
description: API reference for qiskit.circuit.library.ZFeatureMap
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.ZFeatureMap
---

# ZFeatureMap

<span id="qiskit.circuit.library.ZFeatureMap" />

`ZFeatureMap(feature_dimension, reps=2, data_map_func=None, insert_barriers=False)`

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

|                                                                                                                                                                  |                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [`ZFeatureMap.clbits`](qiskit.circuit.library.ZFeatureMap.clbits "qiskit.circuit.library.ZFeatureMap.clbits")                                                    | Returns a list of classical bits in the order that the registers were added.                       |
| [`ZFeatureMap.data`](qiskit.circuit.library.ZFeatureMap.data "qiskit.circuit.library.ZFeatureMap.data")                                                          | Return the circuit data (instructions and context).                                                |
| [`ZFeatureMap.entanglement`](qiskit.circuit.library.ZFeatureMap.entanglement "qiskit.circuit.library.ZFeatureMap.entanglement")                                  | Get the entanglement strategy.                                                                     |
| [`ZFeatureMap.entanglement_blocks`](qiskit.circuit.library.ZFeatureMap.entanglement_blocks "qiskit.circuit.library.ZFeatureMap.entanglement_blocks")             | The blocks in the entanglement layers.                                                             |
| [`ZFeatureMap.extension_lib`](qiskit.circuit.library.ZFeatureMap.extension_lib "qiskit.circuit.library.ZFeatureMap.extension_lib")                               |                                                                                                    |
| [`ZFeatureMap.feature_dimension`](qiskit.circuit.library.ZFeatureMap.feature_dimension "qiskit.circuit.library.ZFeatureMap.feature_dimension")                   | Returns the feature dimension (which is equal to the number of qubits).                            |
| [`ZFeatureMap.header`](qiskit.circuit.library.ZFeatureMap.header "qiskit.circuit.library.ZFeatureMap.header")                                                    |                                                                                                    |
| [`ZFeatureMap.initial_state`](qiskit.circuit.library.ZFeatureMap.initial_state "qiskit.circuit.library.ZFeatureMap.initial_state")                               | Return the initial state that is added in front of the n-local circuit.                            |
| [`ZFeatureMap.insert_barriers`](qiskit.circuit.library.ZFeatureMap.insert_barriers "qiskit.circuit.library.ZFeatureMap.insert_barriers")                         | If barriers are inserted in between the layers or not.                                             |
| [`ZFeatureMap.instances`](qiskit.circuit.library.ZFeatureMap.instances "qiskit.circuit.library.ZFeatureMap.instances")                                           |                                                                                                    |
| [`ZFeatureMap.n_qubits`](qiskit.circuit.library.ZFeatureMap.n_qubits "qiskit.circuit.library.ZFeatureMap.n_qubits")                                              | Deprecated, use `num_qubits` instead.                                                              |
| [`ZFeatureMap.num_clbits`](qiskit.circuit.library.ZFeatureMap.num_clbits "qiskit.circuit.library.ZFeatureMap.num_clbits")                                        | Return number of classical bits.                                                                   |
| [`ZFeatureMap.num_layers`](qiskit.circuit.library.ZFeatureMap.num_layers "qiskit.circuit.library.ZFeatureMap.num_layers")                                        | Return the number of layers in the n-local circuit.                                                |
| [`ZFeatureMap.num_parameters`](qiskit.circuit.library.ZFeatureMap.num_parameters "qiskit.circuit.library.ZFeatureMap.num_parameters")                            | Convenience function to get the number of parameter objects in the circuit.                        |
| [`ZFeatureMap.num_parameters_settable`](qiskit.circuit.library.ZFeatureMap.num_parameters_settable "qiskit.circuit.library.ZFeatureMap.num_parameters_settable") | The number of distinct parameters.                                                                 |
| [`ZFeatureMap.num_qubits`](qiskit.circuit.library.ZFeatureMap.num_qubits "qiskit.circuit.library.ZFeatureMap.num_qubits")                                        | Returns the number of qubits in this circuit.                                                      |
| [`ZFeatureMap.ordered_parameters`](qiskit.circuit.library.ZFeatureMap.ordered_parameters "qiskit.circuit.library.ZFeatureMap.ordered_parameters")                | The parameters used in the underlying circuit.                                                     |
| [`ZFeatureMap.parameter_bounds`](qiskit.circuit.library.ZFeatureMap.parameter_bounds "qiskit.circuit.library.ZFeatureMap.parameter_bounds")                      | The parameter bounds for the unbound parameters in the circuit.                                    |
| [`ZFeatureMap.parameters`](qiskit.circuit.library.ZFeatureMap.parameters "qiskit.circuit.library.ZFeatureMap.parameters")                                        | Get the [`Parameter`](qiskit.circuit.Parameter "qiskit.circuit.Parameter") objects in the circuit. |
| [`ZFeatureMap.paulis`](qiskit.circuit.library.ZFeatureMap.paulis "qiskit.circuit.library.ZFeatureMap.paulis")                                                    | The Pauli strings used in the entanglement of the qubits.                                          |
| [`ZFeatureMap.preferred_init_points`](qiskit.circuit.library.ZFeatureMap.preferred_init_points "qiskit.circuit.library.ZFeatureMap.preferred_init_points")       | The initial points for the parameters.                                                             |
| [`ZFeatureMap.prefix`](qiskit.circuit.library.ZFeatureMap.prefix "qiskit.circuit.library.ZFeatureMap.prefix")                                                    |                                                                                                    |
| [`ZFeatureMap.qregs`](qiskit.circuit.library.ZFeatureMap.qregs "qiskit.circuit.library.ZFeatureMap.qregs")                                                       | A list of the quantum registers associated with the circuit.                                       |
| [`ZFeatureMap.qubits`](qiskit.circuit.library.ZFeatureMap.qubits "qiskit.circuit.library.ZFeatureMap.qubits")                                                    | Returns a list of quantum bits in the order that the registers were added.                         |
| [`ZFeatureMap.reps`](qiskit.circuit.library.ZFeatureMap.reps "qiskit.circuit.library.ZFeatureMap.reps")                                                          | The number of times rotation and entanglement block are repeated.                                  |
| [`ZFeatureMap.rotation_blocks`](qiskit.circuit.library.ZFeatureMap.rotation_blocks "qiskit.circuit.library.ZFeatureMap.rotation_blocks")                         | The blocks in the rotation layers.                                                                 |

## Methods

|                                                                                                                                                                                    |                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| [`ZFeatureMap.AND`](qiskit.circuit.library.ZFeatureMap.AND "qiskit.circuit.library.ZFeatureMap.AND")(qr\_variables, qb\_target, …)                                                 | Build a collective conjunction (AND) circuit in place using mct.                                             |
| [`ZFeatureMap.OR`](qiskit.circuit.library.ZFeatureMap.OR "qiskit.circuit.library.ZFeatureMap.OR")(qr\_variables, qb\_target, …)                                                    | Build a collective disjunction (OR) circuit in place using mct.                                              |
| [`ZFeatureMap.__getitem__`](qiskit.circuit.library.ZFeatureMap.__getitem__ "qiskit.circuit.library.ZFeatureMap.__getitem__")(item)                                                 | Return indexed operation.                                                                                    |
| [`ZFeatureMap.__len__`](qiskit.circuit.library.ZFeatureMap.__len__ "qiskit.circuit.library.ZFeatureMap.__len__")()                                                                 | Return number of operations in circuit.                                                                      |
| [`ZFeatureMap.add_layer`](qiskit.circuit.library.ZFeatureMap.add_layer "qiskit.circuit.library.ZFeatureMap.add_layer")(other\[, entanglement, …])                                  | Append another layer to the NLocal.                                                                          |
| [`ZFeatureMap.add_register`](qiskit.circuit.library.ZFeatureMap.add_register "qiskit.circuit.library.ZFeatureMap.add_register")(\*regs)                                            | Add registers.                                                                                               |
| [`ZFeatureMap.append`](qiskit.circuit.library.ZFeatureMap.append "qiskit.circuit.library.ZFeatureMap.append")(instruction\[, qargs, cargs])                                        | Append one or more instructions to the end of the circuit, modifying the circuit in place.                   |
| [`ZFeatureMap.assign_parameters`](qiskit.circuit.library.ZFeatureMap.assign_parameters "qiskit.circuit.library.ZFeatureMap.assign_parameters")(param\_dict\[, …])                  | Assign parameters to the n-local circuit.                                                                    |
| [`ZFeatureMap.barrier`](qiskit.circuit.library.ZFeatureMap.barrier "qiskit.circuit.library.ZFeatureMap.barrier")(\*qargs)                                                          | Apply `Barrier`.                                                                                             |
| [`ZFeatureMap.bind_parameters`](qiskit.circuit.library.ZFeatureMap.bind_parameters "qiskit.circuit.library.ZFeatureMap.bind_parameters")(value\_dict)                              | Assign numeric parameters to values yielding a new circuit.                                                  |
| [`ZFeatureMap.cast`](qiskit.circuit.library.ZFeatureMap.cast "qiskit.circuit.library.ZFeatureMap.cast")(value, \_type)                                                             | Best effort to cast value to type.                                                                           |
| [`ZFeatureMap.cbit_argument_conversion`](qiskit.circuit.library.ZFeatureMap.cbit_argument_conversion "qiskit.circuit.library.ZFeatureMap.cbit_argument_conversion")(…)             | Converts several classical bit representations (such as indexes, range, etc.) into a list of classical bits. |
| [`ZFeatureMap.ccx`](qiskit.circuit.library.ZFeatureMap.ccx "qiskit.circuit.library.ZFeatureMap.ccx")(control\_qubit1, …\[, ctl1, …])                                               | Apply [`CCXGate`](qiskit.circuit.library.CCXGate "qiskit.circuit.library.CCXGate").                          |
| [`ZFeatureMap.ch`](qiskit.circuit.library.ZFeatureMap.ch "qiskit.circuit.library.ZFeatureMap.ch")(control\_qubit, target\_qubit, \*)                                               | Apply [`CHGate`](qiskit.circuit.library.CHGate "qiskit.circuit.library.CHGate").                             |
| [`ZFeatureMap.cls_instances`](qiskit.circuit.library.ZFeatureMap.cls_instances "qiskit.circuit.library.ZFeatureMap.cls_instances")()                                               | Return the current number of instances of this class, useful for auto naming.                                |
| [`ZFeatureMap.cls_prefix`](qiskit.circuit.library.ZFeatureMap.cls_prefix "qiskit.circuit.library.ZFeatureMap.cls_prefix")()                                                        | Return the prefix to use for auto naming.                                                                    |
| [`ZFeatureMap.cnot`](qiskit.circuit.library.ZFeatureMap.cnot "qiskit.circuit.library.ZFeatureMap.cnot")(control\_qubit, target\_qubit, \*)                                         | Apply [`CXGate`](qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate").                             |
| [`ZFeatureMap.combine`](qiskit.circuit.library.ZFeatureMap.combine "qiskit.circuit.library.ZFeatureMap.combine")(rhs)                                                              | Append rhs to self if self contains compatible registers.                                                    |
| [`ZFeatureMap.compose`](qiskit.circuit.library.ZFeatureMap.compose "qiskit.circuit.library.ZFeatureMap.compose")(other\[, qubits, clbits, …])                                      | Compose circuit with `other` circuit or instruction, optionally permuting wires.                             |
| [`ZFeatureMap.copy`](qiskit.circuit.library.ZFeatureMap.copy "qiskit.circuit.library.ZFeatureMap.copy")(\[name])                                                                   | Copy the circuit.                                                                                            |
| [`ZFeatureMap.count_ops`](qiskit.circuit.library.ZFeatureMap.count_ops "qiskit.circuit.library.ZFeatureMap.count_ops")()                                                           | Count each operation kind in the circuit.                                                                    |
| [`ZFeatureMap.crx`](qiskit.circuit.library.ZFeatureMap.crx "qiskit.circuit.library.ZFeatureMap.crx")(theta, control\_qubit, …\[, …])                                               | Apply [`CRXGate`](qiskit.circuit.library.CRXGate "qiskit.circuit.library.CRXGate").                          |
| [`ZFeatureMap.cry`](qiskit.circuit.library.ZFeatureMap.cry "qiskit.circuit.library.ZFeatureMap.cry")(theta, control\_qubit, …\[, …])                                               | Apply [`CRYGate`](qiskit.circuit.library.CRYGate "qiskit.circuit.library.CRYGate").                          |
| [`ZFeatureMap.crz`](qiskit.circuit.library.ZFeatureMap.crz "qiskit.circuit.library.ZFeatureMap.crz")(theta, control\_qubit, …\[, …])                                               | Apply [`CRZGate`](qiskit.circuit.library.CRZGate "qiskit.circuit.library.CRZGate").                          |
| [`ZFeatureMap.cswap`](qiskit.circuit.library.ZFeatureMap.cswap "qiskit.circuit.library.ZFeatureMap.cswap")(control\_qubit, …\[, …])                                                | Apply [`CSwapGate`](qiskit.circuit.library.CSwapGate "qiskit.circuit.library.CSwapGate").                    |
| [`ZFeatureMap.cu1`](qiskit.circuit.library.ZFeatureMap.cu1 "qiskit.circuit.library.ZFeatureMap.cu1")(theta, control\_qubit, …\[, …])                                               | Apply [`CU1Gate`](qiskit.circuit.library.CU1Gate "qiskit.circuit.library.CU1Gate").                          |
| [`ZFeatureMap.cu3`](qiskit.circuit.library.ZFeatureMap.cu3 "qiskit.circuit.library.ZFeatureMap.cu3")(theta, phi, lam, …\[, …])                                                     | Apply [`CU3Gate`](qiskit.circuit.library.CU3Gate "qiskit.circuit.library.CU3Gate").                          |
| [`ZFeatureMap.cx`](qiskit.circuit.library.ZFeatureMap.cx "qiskit.circuit.library.ZFeatureMap.cx")(control\_qubit, target\_qubit, \*)                                               | Apply [`CXGate`](qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate").                             |
| [`ZFeatureMap.cy`](qiskit.circuit.library.ZFeatureMap.cy "qiskit.circuit.library.ZFeatureMap.cy")(control\_qubit, target\_qubit, \*)                                               | Apply [`CYGate`](qiskit.circuit.library.CYGate "qiskit.circuit.library.CYGate").                             |
| [`ZFeatureMap.cz`](qiskit.circuit.library.ZFeatureMap.cz "qiskit.circuit.library.ZFeatureMap.cz")(control\_qubit, target\_qubit, \*)                                               | Apply [`CZGate`](qiskit.circuit.library.CZGate "qiskit.circuit.library.CZGate").                             |
| [`ZFeatureMap.dcx`](qiskit.circuit.library.ZFeatureMap.dcx "qiskit.circuit.library.ZFeatureMap.dcx")(qubit1, qubit2)                                                               | Apply [`DCXGate`](qiskit.circuit.library.DCXGate "qiskit.circuit.library.DCXGate").                          |
| [`ZFeatureMap.decompose`](qiskit.circuit.library.ZFeatureMap.decompose "qiskit.circuit.library.ZFeatureMap.decompose")()                                                           | Call a decomposition pass on this circuit, to decompose one level (shallow decompose).                       |
| [`ZFeatureMap.depth`](qiskit.circuit.library.ZFeatureMap.depth "qiskit.circuit.library.ZFeatureMap.depth")()                                                                       | Return circuit depth (i.e., length of critical path).                                                        |
| [`ZFeatureMap.diag_gate`](qiskit.circuit.library.ZFeatureMap.diag_gate "qiskit.circuit.library.ZFeatureMap.diag_gate")(diag, qubit)                                                | Deprecated version of QuantumCircuit.diagonal.                                                               |
| [`ZFeatureMap.diagonal`](qiskit.circuit.library.ZFeatureMap.diagonal "qiskit.circuit.library.ZFeatureMap.diagonal")(diag, qubit)                                                   | Attach a diagonal gate to a circuit.                                                                         |
| [`ZFeatureMap.draw`](qiskit.circuit.library.ZFeatureMap.draw "qiskit.circuit.library.ZFeatureMap.draw")(\[output, scale, filename, …])                                             | Draw the quantum circuit.                                                                                    |
| [`ZFeatureMap.extend`](qiskit.circuit.library.ZFeatureMap.extend "qiskit.circuit.library.ZFeatureMap.extend")(rhs)                                                                 | Append QuantumCircuit to the right hand side if it contains compatible registers.                            |
| [`ZFeatureMap.fredkin`](qiskit.circuit.library.ZFeatureMap.fredkin "qiskit.circuit.library.ZFeatureMap.fredkin")(control\_qubit, …\[, …])                                          | Apply [`CSwapGate`](qiskit.circuit.library.CSwapGate "qiskit.circuit.library.CSwapGate").                    |
| [`ZFeatureMap.from_qasm_file`](qiskit.circuit.library.ZFeatureMap.from_qasm_file "qiskit.circuit.library.ZFeatureMap.from_qasm_file")(path)                                        | Take in a QASM file and generate a QuantumCircuit object.                                                    |
| [`ZFeatureMap.from_qasm_str`](qiskit.circuit.library.ZFeatureMap.from_qasm_str "qiskit.circuit.library.ZFeatureMap.from_qasm_str")(qasm\_str)                                      | Take in a QASM string and generate a QuantumCircuit object.                                                  |
| [`ZFeatureMap.get_entangler_map`](qiskit.circuit.library.ZFeatureMap.get_entangler_map "qiskit.circuit.library.ZFeatureMap.get_entangler_map")(rep\_num, …)                        | Get the entangler map for in the repetition `rep_num` and the block `block_num`.                             |
| [`ZFeatureMap.get_unentangled_qubits`](qiskit.circuit.library.ZFeatureMap.get_unentangled_qubits "qiskit.circuit.library.ZFeatureMap.get_unentangled_qubits")()                    | Get the indices of unentangled qubits in a set.                                                              |
| [`ZFeatureMap.h`](qiskit.circuit.library.ZFeatureMap.h "qiskit.circuit.library.ZFeatureMap.h")(qubit, \*\[, q])                                                                    | Apply [`HGate`](qiskit.circuit.library.HGate "qiskit.circuit.library.HGate").                                |
| [`ZFeatureMap.hamiltonian`](qiskit.circuit.library.ZFeatureMap.hamiltonian "qiskit.circuit.library.ZFeatureMap.hamiltonian")(operator, time, qubits)                               | Apply hamiltonian evolution to to qubits.                                                                    |
| [`ZFeatureMap.has_register`](qiskit.circuit.library.ZFeatureMap.has_register "qiskit.circuit.library.ZFeatureMap.has_register")(register)                                          | Test if this circuit has the register r.                                                                     |
| [`ZFeatureMap.i`](qiskit.circuit.library.ZFeatureMap.i "qiskit.circuit.library.ZFeatureMap.i")(qubit, \*\[, q])                                                                    | Apply [`IGate`](qiskit.circuit.library.IGate "qiskit.circuit.library.IGate").                                |
| [`ZFeatureMap.id`](qiskit.circuit.library.ZFeatureMap.id "qiskit.circuit.library.ZFeatureMap.id")(qubit, \*\[, q])                                                                 | Apply [`IGate`](qiskit.circuit.library.IGate "qiskit.circuit.library.IGate").                                |
| [`ZFeatureMap.iden`](qiskit.circuit.library.ZFeatureMap.iden "qiskit.circuit.library.ZFeatureMap.iden")(qubit, \*\[, q])                                                           | Deprecated identity gate.                                                                                    |
| [`ZFeatureMap.initialize`](qiskit.circuit.library.ZFeatureMap.initialize "qiskit.circuit.library.ZFeatureMap.initialize")(params, qubits)                                          | Apply initialize to circuit.                                                                                 |
| [`ZFeatureMap.inverse`](qiskit.circuit.library.ZFeatureMap.inverse "qiskit.circuit.library.ZFeatureMap.inverse")()                                                                 | Invert this circuit.                                                                                         |
| [`ZFeatureMap.iso`](qiskit.circuit.library.ZFeatureMap.iso "qiskit.circuit.library.ZFeatureMap.iso")(isometry, q\_input, …\[, …])                                                  | Attach an arbitrary isometry from m to n qubits to a circuit.                                                |
| [`ZFeatureMap.isometry`](qiskit.circuit.library.ZFeatureMap.isometry "qiskit.circuit.library.ZFeatureMap.isometry")(isometry, q\_input, …)                                         | Attach an arbitrary isometry from m to n qubits to a circuit.                                                |
| [`ZFeatureMap.iswap`](qiskit.circuit.library.ZFeatureMap.iswap "qiskit.circuit.library.ZFeatureMap.iswap")(qubit1, qubit2)                                                         | Apply [`iSwapGate`](qiskit.circuit.library.iSwapGate "qiskit.circuit.library.iSwapGate").                    |
| [`ZFeatureMap.mcmt`](qiskit.circuit.library.ZFeatureMap.mcmt "qiskit.circuit.library.ZFeatureMap.mcmt")(gate, control\_qubits, …)                                                  | Apply a multi-control, multi-target using a generic gate.                                                    |
| [`ZFeatureMap.mcrx`](qiskit.circuit.library.ZFeatureMap.mcrx "qiskit.circuit.library.ZFeatureMap.mcrx")(theta, q\_controls, q\_target)                                             | Apply Multiple-Controlled X rotation gate                                                                    |
| [`ZFeatureMap.mcry`](qiskit.circuit.library.ZFeatureMap.mcry "qiskit.circuit.library.ZFeatureMap.mcry")(theta, q\_controls, …\[, …])                                               | Apply Multiple-Controlled Y rotation gate                                                                    |
| [`ZFeatureMap.mcrz`](qiskit.circuit.library.ZFeatureMap.mcrz "qiskit.circuit.library.ZFeatureMap.mcrz")(lam, q\_controls, q\_target)                                               | Apply Multiple-Controlled Z rotation gate                                                                    |
| [`ZFeatureMap.mct`](qiskit.circuit.library.ZFeatureMap.mct "qiskit.circuit.library.ZFeatureMap.mct")(control\_qubits, target\_qubit)                                               | Apply `MCXGate`.                                                                                             |
| [`ZFeatureMap.mcu1`](qiskit.circuit.library.ZFeatureMap.mcu1 "qiskit.circuit.library.ZFeatureMap.mcu1")(lam, control\_qubits, …)                                                   | Apply `MCU1Gate`.                                                                                            |
| [`ZFeatureMap.mcx`](qiskit.circuit.library.ZFeatureMap.mcx "qiskit.circuit.library.ZFeatureMap.mcx")(control\_qubits, target\_qubit)                                               | Apply `MCXGate`.                                                                                             |
| [`ZFeatureMap.measure`](qiskit.circuit.library.ZFeatureMap.measure "qiskit.circuit.library.ZFeatureMap.measure")(qubit, cbit)                                                      | Measure quantum bit into classical bit (tuples).                                                             |
| [`ZFeatureMap.measure_active`](qiskit.circuit.library.ZFeatureMap.measure_active "qiskit.circuit.library.ZFeatureMap.measure_active")(\[inplace])                                  | Adds measurement to all non-idle qubits.                                                                     |
| [`ZFeatureMap.measure_all`](qiskit.circuit.library.ZFeatureMap.measure_all "qiskit.circuit.library.ZFeatureMap.measure_all")(\[inplace])                                           | Adds measurement to all qubits.                                                                              |
| [`ZFeatureMap.mirror`](qiskit.circuit.library.ZFeatureMap.mirror "qiskit.circuit.library.ZFeatureMap.mirror")()                                                                    | Mirror the circuit by reversing the instructions.                                                            |
| [`ZFeatureMap.ms`](qiskit.circuit.library.ZFeatureMap.ms "qiskit.circuit.library.ZFeatureMap.ms")(theta, qubits)                                                                   | Apply [`MSGate`](qiskit.circuit.library.MSGate "qiskit.circuit.library.MSGate").                             |
| [`ZFeatureMap.num_connected_components`](qiskit.circuit.library.ZFeatureMap.num_connected_components "qiskit.circuit.library.ZFeatureMap.num_connected_components")(\[…])          | How many non-entangled subcircuits can the circuit be factored to.                                           |
| [`ZFeatureMap.num_nonlocal_gates`](qiskit.circuit.library.ZFeatureMap.num_nonlocal_gates "qiskit.circuit.library.ZFeatureMap.num_nonlocal_gates")()                                | Return number of non-local gates (i.e.                                                                       |
| [`ZFeatureMap.num_tensor_factors`](qiskit.circuit.library.ZFeatureMap.num_tensor_factors "qiskit.circuit.library.ZFeatureMap.num_tensor_factors")()                                | Computes the number of tensor factors in the unitary (quantum) part of the circuit only.                     |
| [`ZFeatureMap.num_unitary_factors`](qiskit.circuit.library.ZFeatureMap.num_unitary_factors "qiskit.circuit.library.ZFeatureMap.num_unitary_factors")()                             | Computes the number of tensor factors in the unitary (quantum) part of the circuit only.                     |
| [`ZFeatureMap.pauli_block`](qiskit.circuit.library.ZFeatureMap.pauli_block "qiskit.circuit.library.ZFeatureMap.pauli_block")(pauli\_string)                                        | Get the Pauli block for the feature map circuit.                                                             |
| [`ZFeatureMap.pauli_evolution`](qiskit.circuit.library.ZFeatureMap.pauli_evolution "qiskit.circuit.library.ZFeatureMap.pauli_evolution")(pauli\_string, time)                      | Get the evolution block for the given pauli string.                                                          |
| [`ZFeatureMap.print_settings`](qiskit.circuit.library.ZFeatureMap.print_settings "qiskit.circuit.library.ZFeatureMap.print_settings")()                                            | Returns information about the setting.                                                                       |
| [`ZFeatureMap.qasm`](qiskit.circuit.library.ZFeatureMap.qasm "qiskit.circuit.library.ZFeatureMap.qasm")(\[formatted, filename])                                                    | Return OpenQASM string.                                                                                      |
| [`ZFeatureMap.qbit_argument_conversion`](qiskit.circuit.library.ZFeatureMap.qbit_argument_conversion "qiskit.circuit.library.ZFeatureMap.qbit_argument_conversion")(…)             | Converts several qubit representations (such as indexes, range, etc.) into a list of qubits.                 |
| [`ZFeatureMap.r`](qiskit.circuit.library.ZFeatureMap.r "qiskit.circuit.library.ZFeatureMap.r")(theta, phi, qubit, \*\[, q])                                                        | Apply `RGate`.                                                                                               |
| [`ZFeatureMap.rcccx`](qiskit.circuit.library.ZFeatureMap.rcccx "qiskit.circuit.library.ZFeatureMap.rcccx")(control\_qubit1, …)                                                     | Apply [`RC3XGate`](qiskit.circuit.library.RC3XGate "qiskit.circuit.library.RC3XGate").                       |
| [`ZFeatureMap.rccx`](qiskit.circuit.library.ZFeatureMap.rccx "qiskit.circuit.library.ZFeatureMap.rccx")(control\_qubit1, …)                                                        | Apply [`RCCXGate`](qiskit.circuit.library.RCCXGate "qiskit.circuit.library.RCCXGate").                       |
| [`ZFeatureMap.remove_final_measurements`](qiskit.circuit.library.ZFeatureMap.remove_final_measurements "qiskit.circuit.library.ZFeatureMap.remove_final_measurements")(\[inplace]) | Removes final measurement on all qubits if they are present.                                                 |
| [`ZFeatureMap.reset`](qiskit.circuit.library.ZFeatureMap.reset "qiskit.circuit.library.ZFeatureMap.reset")(qubit)                                                                  | Reset q.                                                                                                     |
| [`ZFeatureMap.rx`](qiskit.circuit.library.ZFeatureMap.rx "qiskit.circuit.library.ZFeatureMap.rx")(theta, qubit, \*\[, label, q])                                                   | Apply [`RXGate`](qiskit.circuit.library.RXGate "qiskit.circuit.library.RXGate").                             |
| [`ZFeatureMap.rxx`](qiskit.circuit.library.ZFeatureMap.rxx "qiskit.circuit.library.ZFeatureMap.rxx")(theta, qubit1, qubit2)                                                        | Apply [`RXXGate`](qiskit.circuit.library.RXXGate "qiskit.circuit.library.RXXGate").                          |
| [`ZFeatureMap.ry`](qiskit.circuit.library.ZFeatureMap.ry "qiskit.circuit.library.ZFeatureMap.ry")(theta, qubit, \*\[, label, q])                                                   | Apply [`RYGate`](qiskit.circuit.library.RYGate "qiskit.circuit.library.RYGate").                             |
| [`ZFeatureMap.ryy`](qiskit.circuit.library.ZFeatureMap.ryy "qiskit.circuit.library.ZFeatureMap.ryy")(theta, qubit1, qubit2)                                                        | Apply [`RYYGate`](qiskit.circuit.library.RYYGate "qiskit.circuit.library.RYYGate").                          |
| [`ZFeatureMap.rz`](qiskit.circuit.library.ZFeatureMap.rz "qiskit.circuit.library.ZFeatureMap.rz")(phi, qubit, \*\[, q])                                                            | Apply [`RZGate`](qiskit.circuit.library.RZGate "qiskit.circuit.library.RZGate").                             |
| [`ZFeatureMap.rzx`](qiskit.circuit.library.ZFeatureMap.rzx "qiskit.circuit.library.ZFeatureMap.rzx")(theta, qubit1, qubit2)                                                        | Apply [`RZXGate`](qiskit.circuit.library.RZXGate "qiskit.circuit.library.RZXGate").                          |
| [`ZFeatureMap.rzz`](qiskit.circuit.library.ZFeatureMap.rzz "qiskit.circuit.library.ZFeatureMap.rzz")(theta, qubit1, qubit2)                                                        | Apply [`RZZGate`](qiskit.circuit.library.RZZGate "qiskit.circuit.library.RZZGate").                          |
| [`ZFeatureMap.s`](qiskit.circuit.library.ZFeatureMap.s "qiskit.circuit.library.ZFeatureMap.s")(qubit, \*\[, q])                                                                    | Apply [`SGate`](qiskit.circuit.library.SGate "qiskit.circuit.library.SGate").                                |
| [`ZFeatureMap.sdg`](qiskit.circuit.library.ZFeatureMap.sdg "qiskit.circuit.library.ZFeatureMap.sdg")(qubit, \*\[, q])                                                              | Apply [`SdgGate`](qiskit.circuit.library.SdgGate "qiskit.circuit.library.SdgGate").                          |
| [`ZFeatureMap.size`](qiskit.circuit.library.ZFeatureMap.size "qiskit.circuit.library.ZFeatureMap.size")()                                                                          | Returns total number of gate operations in circuit.                                                          |
| [`ZFeatureMap.snapshot`](qiskit.circuit.library.ZFeatureMap.snapshot "qiskit.circuit.library.ZFeatureMap.snapshot")(label\[, snapshot\_type, …])                                   | Take a statevector snapshot of the internal simulator representation.                                        |
| [`ZFeatureMap.snapshot_density_matrix`](qiskit.circuit.library.ZFeatureMap.snapshot_density_matrix "qiskit.circuit.library.ZFeatureMap.snapshot_density_matrix")(label\[, …])      | Take a density matrix snapshot of simulator state.                                                           |
| [`ZFeatureMap.snapshot_expectation_value`](qiskit.circuit.library.ZFeatureMap.snapshot_expectation_value "qiskit.circuit.library.ZFeatureMap.snapshot_expectation_value")(…)       | Take a snapshot of expectation value \<O> of an Operator.                                                    |
| [`ZFeatureMap.snapshot_probabilities`](qiskit.circuit.library.ZFeatureMap.snapshot_probabilities "qiskit.circuit.library.ZFeatureMap.snapshot_probabilities")(label, qubits)       | Take a probability snapshot of the simulator state.                                                          |
| [`ZFeatureMap.snapshot_stabilizer`](qiskit.circuit.library.ZFeatureMap.snapshot_stabilizer "qiskit.circuit.library.ZFeatureMap.snapshot_stabilizer")(label)                        | Take a stabilizer snapshot of the simulator state.                                                           |
| [`ZFeatureMap.snapshot_statevector`](qiskit.circuit.library.ZFeatureMap.snapshot_statevector "qiskit.circuit.library.ZFeatureMap.snapshot_statevector")(label)                     | Take a statevector snapshot of the simulator state.                                                          |
| [`ZFeatureMap.squ`](qiskit.circuit.library.ZFeatureMap.squ "qiskit.circuit.library.ZFeatureMap.squ")(unitary\_matrix, qubit\[, …])                                                 | Decompose an arbitrary 2\*2 unitary into three rotation gates.                                               |
| [`ZFeatureMap.swap`](qiskit.circuit.library.ZFeatureMap.swap "qiskit.circuit.library.ZFeatureMap.swap")(qubit1, qubit2)                                                            | Apply [`SwapGate`](qiskit.circuit.library.SwapGate "qiskit.circuit.library.SwapGate").                       |
| [`ZFeatureMap.t`](qiskit.circuit.library.ZFeatureMap.t "qiskit.circuit.library.ZFeatureMap.t")(qubit, \*\[, q])                                                                    | Apply [`TGate`](qiskit.circuit.library.TGate "qiskit.circuit.library.TGate").                                |
| [`ZFeatureMap.tdg`](qiskit.circuit.library.ZFeatureMap.tdg "qiskit.circuit.library.ZFeatureMap.tdg")(qubit, \*\[, q])                                                              | Apply [`TdgGate`](qiskit.circuit.library.TdgGate "qiskit.circuit.library.TdgGate").                          |
| [`ZFeatureMap.to_gate`](qiskit.circuit.library.ZFeatureMap.to_gate "qiskit.circuit.library.ZFeatureMap.to_gate")(\[parameter\_map])                                                | Create a Gate out of this circuit.                                                                           |
| [`ZFeatureMap.to_instruction`](qiskit.circuit.library.ZFeatureMap.to_instruction "qiskit.circuit.library.ZFeatureMap.to_instruction")(\[parameter\_map])                           | Create an Instruction out of this circuit.                                                                   |
| [`ZFeatureMap.toffoli`](qiskit.circuit.library.ZFeatureMap.toffoli "qiskit.circuit.library.ZFeatureMap.toffoli")(control\_qubit1, …\[, …])                                         | Apply [`CCXGate`](qiskit.circuit.library.CCXGate "qiskit.circuit.library.CCXGate").                          |
| [`ZFeatureMap.u1`](qiskit.circuit.library.ZFeatureMap.u1 "qiskit.circuit.library.ZFeatureMap.u1")(theta, qubit, \*\[, q])                                                          | Apply [`U1Gate`](qiskit.circuit.library.U1Gate "qiskit.circuit.library.U1Gate").                             |
| [`ZFeatureMap.u2`](qiskit.circuit.library.ZFeatureMap.u2 "qiskit.circuit.library.ZFeatureMap.u2")(phi, lam, qubit, \*\[, q])                                                       | Apply [`U2Gate`](qiskit.circuit.library.U2Gate "qiskit.circuit.library.U2Gate").                             |
| [`ZFeatureMap.u3`](qiskit.circuit.library.ZFeatureMap.u3 "qiskit.circuit.library.ZFeatureMap.u3")(theta, phi, lam, qubit, \*\[, q])                                                | Apply [`U3Gate`](qiskit.circuit.library.U3Gate "qiskit.circuit.library.U3Gate").                             |
| [`ZFeatureMap.uc`](qiskit.circuit.library.ZFeatureMap.uc "qiskit.circuit.library.ZFeatureMap.uc")(gate\_list, q\_controls, q\_target)                                              | Attach a uniformly controlled gates (also called multiplexed gates) to a circuit.                            |
| [`ZFeatureMap.ucg`](qiskit.circuit.library.ZFeatureMap.ucg "qiskit.circuit.library.ZFeatureMap.ucg")(angle\_list, q\_controls, q\_target)                                          | Deprecated version of uc.                                                                                    |
| [`ZFeatureMap.ucrx`](qiskit.circuit.library.ZFeatureMap.ucrx "qiskit.circuit.library.ZFeatureMap.ucrx")(angle\_list, q\_controls, …)                                               | Attach a uniformly controlled (also called multiplexed) Rx rotation gate to a circuit.                       |
| [`ZFeatureMap.ucry`](qiskit.circuit.library.ZFeatureMap.ucry "qiskit.circuit.library.ZFeatureMap.ucry")(angle\_list, q\_controls, …)                                               | Attach a uniformly controlled (also called multiplexed) Ry rotation gate to a circuit.                       |
| [`ZFeatureMap.ucrz`](qiskit.circuit.library.ZFeatureMap.ucrz "qiskit.circuit.library.ZFeatureMap.ucrz")(angle\_list, q\_controls, …)                                               | Attach a uniformly controlled (also called multiplexed gates) Rz rotation gate to a circuit.                 |
| [`ZFeatureMap.ucx`](qiskit.circuit.library.ZFeatureMap.ucx "qiskit.circuit.library.ZFeatureMap.ucx")(angle\_list, q\_controls, q\_target)                                          | Deprecated version of ucrx.                                                                                  |
| [`ZFeatureMap.ucy`](qiskit.circuit.library.ZFeatureMap.ucy "qiskit.circuit.library.ZFeatureMap.ucy")(angle\_list, q\_controls, q\_target)                                          | Deprecated version of ucry.                                                                                  |
| [`ZFeatureMap.ucz`](qiskit.circuit.library.ZFeatureMap.ucz "qiskit.circuit.library.ZFeatureMap.ucz")(angle\_list, q\_controls, q\_target)                                          | Deprecated version of ucrz.                                                                                  |
| [`ZFeatureMap.unitary`](qiskit.circuit.library.ZFeatureMap.unitary "qiskit.circuit.library.ZFeatureMap.unitary")(obj, qubits\[, label])                                            | Apply unitary gate to q.                                                                                     |
| [`ZFeatureMap.width`](qiskit.circuit.library.ZFeatureMap.width "qiskit.circuit.library.ZFeatureMap.width")()                                                                       | Return number of qubits plus clbits in circuit.                                                              |
| [`ZFeatureMap.x`](qiskit.circuit.library.ZFeatureMap.x "qiskit.circuit.library.ZFeatureMap.x")(qubit, \*\[, label, ctrl\_state, q])                                                | Apply [`XGate`](qiskit.circuit.library.XGate "qiskit.circuit.library.XGate").                                |
| [`ZFeatureMap.y`](qiskit.circuit.library.ZFeatureMap.y "qiskit.circuit.library.ZFeatureMap.y")(qubit, \*\[, q])                                                                    | Apply [`YGate`](qiskit.circuit.library.YGate "qiskit.circuit.library.YGate").                                |
| [`ZFeatureMap.z`](qiskit.circuit.library.ZFeatureMap.z "qiskit.circuit.library.ZFeatureMap.z")(qubit, \*\[, q])                                                                    | Apply [`ZGate`](qiskit.circuit.library.ZGate "qiskit.circuit.library.ZGate").                                |
| [`ZFeatureMap.__getitem__`](qiskit.circuit.library.ZFeatureMap.__getitem__ "qiskit.circuit.library.ZFeatureMap.__getitem__")(item)                                                 | Return indexed operation.                                                                                    |
| [`ZFeatureMap.__len__`](qiskit.circuit.library.ZFeatureMap.__len__ "qiskit.circuit.library.ZFeatureMap.__len__")()                                                                 | Return number of operations in circuit.                                                                      |

