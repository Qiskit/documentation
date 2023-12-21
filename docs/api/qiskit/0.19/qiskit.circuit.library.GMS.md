---
title: GMS
description: API reference for qiskit.circuit.library.GMS
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.GMS
---

# GMS

<span id="qiskit.circuit.library.GMS" />

`GMS(num_qubits, theta)`

Global Mølmer–Sørensen gate.

**Circuit symbol:**

```python
     ┌───────────┐
q_0: ┤0          ├
     │           │
q_1: ┤1   GMS    ├
     │           │
q_2: ┤2          ├
     └───────────┘
```

**Expanded Circuit:**

The Mølmer–Sørensen gate is native to ion-trap systems. The global MS can be applied to multiple ions to entangle multiple qubits simultaneously \[1].

In the two-qubit case, this is equivalent to an XX(theta) interaction, and is thus reduced to the RXXGate. The global MS gate is a sum of XX interactions on all pairs \[2].

$$
GMS(\chi_{12}, \chi_{13}, ..., \chi_{n-1 n}) =
exp(-i \sum_{i=1}^{n} \sum_{j=i+1}^{n} X{\otimes}X \frac{\chi_{ij}}{2}) =
$$

**References:**

\[1] Sørensen, A. and Mølmer, K., Multi-particle entanglement of hot trapped ions. Physical Review Letters. 82 (9): 1835–1838. [arXiv:9810040](https://arxiv.org/abs/9810040)

\[2] Maslov, D. and Nam, Y., Use of global interactions in efficient quantum circuit constructions. New Journal of Physics, 20(3), p.033018. [arXiv:1707.06356](https://arxiv.org/abs/1707.06356)

Create a new Global Mølmer–Sørensen (GMS) gate.

**Parameters**

*   **num\_qubits** (`int`) – width of gate.
*   **theta** (`Union`\[`List`\[`List`\[`float`]], `ndarray`]) – a num\_qubits x num\_qubits symmetric matrix of interaction angles for each qubit pair. The upper triangle is considered.

## Attributes

|                                                                                                               |                                                                              |
| ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [`GMS.clbits`](qiskit.circuit.library.GMS.clbits "qiskit.circuit.library.GMS.clbits")                         | Returns a list of classical bits in the order that the registers were added. |
| [`GMS.data`](qiskit.circuit.library.GMS.data "qiskit.circuit.library.GMS.data")                               | Return the circuit data (instructions and context).                          |
| [`GMS.extension_lib`](qiskit.circuit.library.GMS.extension_lib "qiskit.circuit.library.GMS.extension_lib")    |                                                                              |
| [`GMS.header`](qiskit.circuit.library.GMS.header "qiskit.circuit.library.GMS.header")                         |                                                                              |
| [`GMS.instances`](qiskit.circuit.library.GMS.instances "qiskit.circuit.library.GMS.instances")                |                                                                              |
| [`GMS.n_qubits`](qiskit.circuit.library.GMS.n_qubits "qiskit.circuit.library.GMS.n_qubits")                   | Deprecated, use `num_qubits` instead.                                        |
| [`GMS.num_clbits`](qiskit.circuit.library.GMS.num_clbits "qiskit.circuit.library.GMS.num_clbits")             | Return number of classical bits.                                             |
| [`GMS.num_parameters`](qiskit.circuit.library.GMS.num_parameters "qiskit.circuit.library.GMS.num_parameters") | Convenience function to get the number of parameter objects in the circuit.  |
| [`GMS.num_qubits`](qiskit.circuit.library.GMS.num_qubits "qiskit.circuit.library.GMS.num_qubits")             | Return number of qubits.                                                     |
| [`GMS.parameters`](qiskit.circuit.library.GMS.parameters "qiskit.circuit.library.GMS.parameters")             | Convenience function to get the parameters defined in the parameter table.   |
| [`GMS.prefix`](qiskit.circuit.library.GMS.prefix "qiskit.circuit.library.GMS.prefix")                         |                                                                              |
| [`GMS.qubits`](qiskit.circuit.library.GMS.qubits "qiskit.circuit.library.GMS.qubits")                         | Returns a list of quantum bits in the order that the registers were added.   |

## Methods

|                                                                                                                                                                      |                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| [`GMS.AND`](qiskit.circuit.library.GMS.AND "qiskit.circuit.library.GMS.AND")(qr\_variables, qb\_target, qr\_ancillae)                                                | Build a collective conjunction (AND) circuit in place using mct.                                             |
| [`GMS.OR`](qiskit.circuit.library.GMS.OR "qiskit.circuit.library.GMS.OR")(qr\_variables, qb\_target, qr\_ancillae)                                                   | Build a collective disjunction (OR) circuit in place using mct.                                              |
| [`GMS.__getitem__`](qiskit.circuit.library.GMS.__getitem__ "qiskit.circuit.library.GMS.__getitem__")(item)                                                           | Return indexed operation.                                                                                    |
| [`GMS.__len__`](qiskit.circuit.library.GMS.__len__ "qiskit.circuit.library.GMS.__len__")()                                                                           | Return number of operations in circuit.                                                                      |
| [`GMS.add_register`](qiskit.circuit.library.GMS.add_register "qiskit.circuit.library.GMS.add_register")(\*regs)                                                      | Add registers.                                                                                               |
| [`GMS.append`](qiskit.circuit.library.GMS.append "qiskit.circuit.library.GMS.append")(instruction\[, qargs, cargs])                                                  | Append one or more instructions to the end of the circuit, modifying the circuit in place.                   |
| [`GMS.assign_parameters`](qiskit.circuit.library.GMS.assign_parameters "qiskit.circuit.library.GMS.assign_parameters")(param\_dict\[, inplace])                      | Assign parameters to new parameters or values.                                                               |
| [`GMS.barrier`](qiskit.circuit.library.GMS.barrier "qiskit.circuit.library.GMS.barrier")(\*qargs)                                                                    | Apply `Barrier`.                                                                                             |
| [`GMS.bind_parameters`](qiskit.circuit.library.GMS.bind_parameters "qiskit.circuit.library.GMS.bind_parameters")(value\_dict)                                        | Assign numeric parameters to values yielding a new circuit.                                                  |
| [`GMS.cast`](qiskit.circuit.library.GMS.cast "qiskit.circuit.library.GMS.cast")(value, \_type)                                                                       | Best effort to cast value to type.                                                                           |
| [`GMS.cbit_argument_conversion`](qiskit.circuit.library.GMS.cbit_argument_conversion "qiskit.circuit.library.GMS.cbit_argument_conversion")(…)                       | Converts several classical bit representations (such as indexes, range, etc.) into a list of classical bits. |
| [`GMS.ccx`](qiskit.circuit.library.GMS.ccx "qiskit.circuit.library.GMS.ccx")(control\_qubit1, control\_qubit2, …)                                                    | Apply [`CCXGate`](qiskit.circuit.library.CCXGate "qiskit.circuit.library.CCXGate").                          |
| [`GMS.ch`](qiskit.circuit.library.GMS.ch "qiskit.circuit.library.GMS.ch")(control\_qubit, target\_qubit, \*\[, …])                                                   | Apply [`CHGate`](qiskit.circuit.library.CHGate "qiskit.circuit.library.CHGate").                             |
| [`GMS.cls_instances`](qiskit.circuit.library.GMS.cls_instances "qiskit.circuit.library.GMS.cls_instances")()                                                         | Return the current number of instances of this class, useful for auto naming.                                |
| [`GMS.cls_prefix`](qiskit.circuit.library.GMS.cls_prefix "qiskit.circuit.library.GMS.cls_prefix")()                                                                  | Return the prefix to use for auto naming.                                                                    |
| [`GMS.cnot`](qiskit.circuit.library.GMS.cnot "qiskit.circuit.library.GMS.cnot")(control\_qubit, target\_qubit, \*\[, …])                                             | Apply [`CXGate`](qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate").                             |
| [`GMS.combine`](qiskit.circuit.library.GMS.combine "qiskit.circuit.library.GMS.combine")(rhs)                                                                        | Append rhs to self if self contains compatible registers.                                                    |
| [`GMS.compose`](qiskit.circuit.library.GMS.compose "qiskit.circuit.library.GMS.compose")(other\[, qubits, clbits, front, …])                                         | Compose circuit with `other` circuit or instruction, optionally permuting wires.                             |
| [`GMS.copy`](qiskit.circuit.library.GMS.copy "qiskit.circuit.library.GMS.copy")(\[name])                                                                             | Copy the circuit.                                                                                            |
| [`GMS.count_ops`](qiskit.circuit.library.GMS.count_ops "qiskit.circuit.library.GMS.count_ops")()                                                                     | Count each operation kind in the circuit.                                                                    |
| [`GMS.crx`](qiskit.circuit.library.GMS.crx "qiskit.circuit.library.GMS.crx")(theta, control\_qubit, target\_qubit, \*)                                               | Apply [`CRXGate`](qiskit.circuit.library.CRXGate "qiskit.circuit.library.CRXGate").                          |
| [`GMS.cry`](qiskit.circuit.library.GMS.cry "qiskit.circuit.library.GMS.cry")(theta, control\_qubit, target\_qubit, \*)                                               | Apply [`CRYGate`](qiskit.circuit.library.CRYGate "qiskit.circuit.library.CRYGate").                          |
| [`GMS.crz`](qiskit.circuit.library.GMS.crz "qiskit.circuit.library.GMS.crz")(theta, control\_qubit, target\_qubit, \*)                                               | Apply [`CRZGate`](qiskit.circuit.library.CRZGate "qiskit.circuit.library.CRZGate").                          |
| [`GMS.cswap`](qiskit.circuit.library.GMS.cswap "qiskit.circuit.library.GMS.cswap")(control\_qubit, target\_qubit1, …)                                                | Apply [`CSwapGate`](qiskit.circuit.library.CSwapGate "qiskit.circuit.library.CSwapGate").                    |
| [`GMS.cu1`](qiskit.circuit.library.GMS.cu1 "qiskit.circuit.library.GMS.cu1")(theta, control\_qubit, target\_qubit, \*)                                               | Apply [`CU1Gate`](qiskit.circuit.library.CU1Gate "qiskit.circuit.library.CU1Gate").                          |
| [`GMS.cu3`](qiskit.circuit.library.GMS.cu3 "qiskit.circuit.library.GMS.cu3")(theta, phi, lam, control\_qubit, …)                                                     | Apply [`CU3Gate`](qiskit.circuit.library.CU3Gate "qiskit.circuit.library.CU3Gate").                          |
| [`GMS.cx`](qiskit.circuit.library.GMS.cx "qiskit.circuit.library.GMS.cx")(control\_qubit, target\_qubit, \*\[, …])                                                   | Apply [`CXGate`](qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate").                             |
| [`GMS.cy`](qiskit.circuit.library.GMS.cy "qiskit.circuit.library.GMS.cy")(control\_qubit, target\_qubit, \*\[, …])                                                   | Apply [`CYGate`](qiskit.circuit.library.CYGate "qiskit.circuit.library.CYGate").                             |
| [`GMS.cz`](qiskit.circuit.library.GMS.cz "qiskit.circuit.library.GMS.cz")(control\_qubit, target\_qubit, \*\[, …])                                                   | Apply [`CZGate`](qiskit.circuit.library.CZGate "qiskit.circuit.library.CZGate").                             |
| [`GMS.dcx`](qiskit.circuit.library.GMS.dcx "qiskit.circuit.library.GMS.dcx")(qubit1, qubit2)                                                                         | Apply [`DCXGate`](qiskit.circuit.library.DCXGate "qiskit.circuit.library.DCXGate").                          |
| [`GMS.decompose`](qiskit.circuit.library.GMS.decompose "qiskit.circuit.library.GMS.decompose")()                                                                     | Call a decomposition pass on this circuit, to decompose one level (shallow decompose).                       |
| [`GMS.depth`](qiskit.circuit.library.GMS.depth "qiskit.circuit.library.GMS.depth")()                                                                                 | Return circuit depth (i.e., length of critical path).                                                        |
| [`GMS.diag_gate`](qiskit.circuit.library.GMS.diag_gate "qiskit.circuit.library.GMS.diag_gate")(diag, qubit)                                                          | Deprecated version of QuantumCircuit.diagonal.                                                               |
| [`GMS.diagonal`](qiskit.circuit.library.GMS.diagonal "qiskit.circuit.library.GMS.diagonal")(diag, qubit)                                                             | Attach a diagonal gate to a circuit.                                                                         |
| [`GMS.draw`](qiskit.circuit.library.GMS.draw "qiskit.circuit.library.GMS.draw")(\[output, scale, filename, style, …])                                                | Draw the quantum circuit.                                                                                    |
| [`GMS.extend`](qiskit.circuit.library.GMS.extend "qiskit.circuit.library.GMS.extend")(rhs)                                                                           | Append QuantumCircuit to the right hand side if it contains compatible registers.                            |
| [`GMS.fredkin`](qiskit.circuit.library.GMS.fredkin "qiskit.circuit.library.GMS.fredkin")(control\_qubit, target\_qubit1, …)                                          | Apply [`CSwapGate`](qiskit.circuit.library.CSwapGate "qiskit.circuit.library.CSwapGate").                    |
| [`GMS.from_qasm_file`](qiskit.circuit.library.GMS.from_qasm_file "qiskit.circuit.library.GMS.from_qasm_file")(path)                                                  | Take in a QASM file and generate a QuantumCircuit object.                                                    |
| [`GMS.from_qasm_str`](qiskit.circuit.library.GMS.from_qasm_str "qiskit.circuit.library.GMS.from_qasm_str")(qasm\_str)                                                | Take in a QASM string and generate a QuantumCircuit object.                                                  |
| [`GMS.h`](qiskit.circuit.library.GMS.h "qiskit.circuit.library.GMS.h")(qubit, \*\[, q])                                                                              | Apply [`HGate`](qiskit.circuit.library.HGate "qiskit.circuit.library.HGate").                                |
| [`GMS.hamiltonian`](qiskit.circuit.library.GMS.hamiltonian "qiskit.circuit.library.GMS.hamiltonian")(operator, time, qubits\[, label])                               | Apply hamiltonian evolution to to qubits.                                                                    |
| [`GMS.has_register`](qiskit.circuit.library.GMS.has_register "qiskit.circuit.library.GMS.has_register")(register)                                                    | Test if this circuit has the register r.                                                                     |
| [`GMS.i`](qiskit.circuit.library.GMS.i "qiskit.circuit.library.GMS.i")(qubit, \*\[, q])                                                                              | Apply [`IGate`](qiskit.circuit.library.IGate "qiskit.circuit.library.IGate").                                |
| [`GMS.id`](qiskit.circuit.library.GMS.id "qiskit.circuit.library.GMS.id")(qubit, \*\[, q])                                                                           | Apply [`IGate`](qiskit.circuit.library.IGate "qiskit.circuit.library.IGate").                                |
| [`GMS.iden`](qiskit.circuit.library.GMS.iden "qiskit.circuit.library.GMS.iden")(qubit, \*\[, q])                                                                     | Deprecated identity gate.                                                                                    |
| [`GMS.initialize`](qiskit.circuit.library.GMS.initialize "qiskit.circuit.library.GMS.initialize")(params, qubits)                                                    | Apply initialize to circuit.                                                                                 |
| [`GMS.inverse`](qiskit.circuit.library.GMS.inverse "qiskit.circuit.library.GMS.inverse")()                                                                           | Invert this circuit.                                                                                         |
| [`GMS.iso`](qiskit.circuit.library.GMS.iso "qiskit.circuit.library.GMS.iso")(isometry, q\_input, q\_ancillas\_for\_output)                                           | Attach an arbitrary isometry from m to n qubits to a circuit.                                                |
| [`GMS.isometry`](qiskit.circuit.library.GMS.isometry "qiskit.circuit.library.GMS.isometry")(isometry, q\_input, …\[, …])                                             | Attach an arbitrary isometry from m to n qubits to a circuit.                                                |
| [`GMS.iswap`](qiskit.circuit.library.GMS.iswap "qiskit.circuit.library.GMS.iswap")(qubit1, qubit2)                                                                   | Apply [`iSwapGate`](qiskit.circuit.library.iSwapGate "qiskit.circuit.library.iSwapGate").                    |
| [`GMS.mcmt`](qiskit.circuit.library.GMS.mcmt "qiskit.circuit.library.GMS.mcmt")(gate, control\_qubits, target\_qubits)                                               | Apply a multi-control, multi-target using a generic gate.                                                    |
| [`GMS.mcrx`](qiskit.circuit.library.GMS.mcrx "qiskit.circuit.library.GMS.mcrx")(theta, q\_controls, q\_target\[, …])                                                 | Apply Multiple-Controlled X rotation gate                                                                    |
| [`GMS.mcry`](qiskit.circuit.library.GMS.mcry "qiskit.circuit.library.GMS.mcry")(theta, q\_controls, q\_target, q\_ancillae)                                          | Apply Multiple-Controlled Y rotation gate                                                                    |
| [`GMS.mcrz`](qiskit.circuit.library.GMS.mcrz "qiskit.circuit.library.GMS.mcrz")(lam, q\_controls, q\_target\[, …])                                                   | Apply Multiple-Controlled Z rotation gate                                                                    |
| [`GMS.mct`](qiskit.circuit.library.GMS.mct "qiskit.circuit.library.GMS.mct")(control\_qubits, target\_qubit\[, …])                                                   | Apply `MCXGate`.                                                                                             |
| [`GMS.mcu1`](qiskit.circuit.library.GMS.mcu1 "qiskit.circuit.library.GMS.mcu1")(lam, control\_qubits, target\_qubit)                                                 | Apply `MCU1Gate`.                                                                                            |
| [`GMS.mcx`](qiskit.circuit.library.GMS.mcx "qiskit.circuit.library.GMS.mcx")(control\_qubits, target\_qubit\[, …])                                                   | Apply `MCXGate`.                                                                                             |
| [`GMS.measure`](qiskit.circuit.library.GMS.measure "qiskit.circuit.library.GMS.measure")(qubit, cbit)                                                                | Measure quantum bit into classical bit (tuples).                                                             |
| [`GMS.measure_active`](qiskit.circuit.library.GMS.measure_active "qiskit.circuit.library.GMS.measure_active")(\[inplace])                                            | Adds measurement to all non-idle qubits.                                                                     |
| [`GMS.measure_all`](qiskit.circuit.library.GMS.measure_all "qiskit.circuit.library.GMS.measure_all")(\[inplace])                                                     | Adds measurement to all qubits.                                                                              |
| [`GMS.mirror`](qiskit.circuit.library.GMS.mirror "qiskit.circuit.library.GMS.mirror")()                                                                              | Mirror the circuit by reversing the instructions.                                                            |
| [`GMS.ms`](qiskit.circuit.library.GMS.ms "qiskit.circuit.library.GMS.ms")(theta, qubits)                                                                             | Apply [`MSGate`](qiskit.circuit.library.MSGate "qiskit.circuit.library.MSGate").                             |
| [`GMS.num_connected_components`](qiskit.circuit.library.GMS.num_connected_components "qiskit.circuit.library.GMS.num_connected_components")(\[unitary\_only])        | How many non-entangled subcircuits can the circuit be factored to.                                           |
| [`GMS.num_nonlocal_gates`](qiskit.circuit.library.GMS.num_nonlocal_gates "qiskit.circuit.library.GMS.num_nonlocal_gates")()                                          | Return number of non-local gates (i.e.                                                                       |
| [`GMS.num_tensor_factors`](qiskit.circuit.library.GMS.num_tensor_factors "qiskit.circuit.library.GMS.num_tensor_factors")()                                          | Computes the number of tensor factors in the unitary (quantum) part of the circuit only.                     |
| [`GMS.num_unitary_factors`](qiskit.circuit.library.GMS.num_unitary_factors "qiskit.circuit.library.GMS.num_unitary_factors")()                                       | Computes the number of tensor factors in the unitary (quantum) part of the circuit only.                     |
| [`GMS.qasm`](qiskit.circuit.library.GMS.qasm "qiskit.circuit.library.GMS.qasm")(\[formatted, filename])                                                              | Return OpenQASM string.                                                                                      |
| [`GMS.qbit_argument_conversion`](qiskit.circuit.library.GMS.qbit_argument_conversion "qiskit.circuit.library.GMS.qbit_argument_conversion")(…)                       | Converts several qubit representations (such as indexes, range, etc.) into a list of qubits.                 |
| [`GMS.r`](qiskit.circuit.library.GMS.r "qiskit.circuit.library.GMS.r")(theta, phi, qubit, \*\[, q])                                                                  | Apply `RGate`.                                                                                               |
| [`GMS.rcccx`](qiskit.circuit.library.GMS.rcccx "qiskit.circuit.library.GMS.rcccx")(control\_qubit1, control\_qubit2, …)                                              | Apply [`RC3XGate`](qiskit.circuit.library.RC3XGate "qiskit.circuit.library.RC3XGate").                       |
| [`GMS.rccx`](qiskit.circuit.library.GMS.rccx "qiskit.circuit.library.GMS.rccx")(control\_qubit1, control\_qubit2, …)                                                 | Apply [`RCCXGate`](qiskit.circuit.library.RCCXGate "qiskit.circuit.library.RCCXGate").                       |
| [`GMS.remove_final_measurements`](qiskit.circuit.library.GMS.remove_final_measurements "qiskit.circuit.library.GMS.remove_final_measurements")(\[inplace])           | Removes final measurement on all qubits if they are present.                                                 |
| [`GMS.reset`](qiskit.circuit.library.GMS.reset "qiskit.circuit.library.GMS.reset")(qubit)                                                                            | Reset q.                                                                                                     |
| [`GMS.rx`](qiskit.circuit.library.GMS.rx "qiskit.circuit.library.GMS.rx")(theta, qubit, \*\[, label, q])                                                             | Apply [`RXGate`](qiskit.circuit.library.RXGate "qiskit.circuit.library.RXGate").                             |
| [`GMS.rxx`](qiskit.circuit.library.GMS.rxx "qiskit.circuit.library.GMS.rxx")(theta, qubit1, qubit2)                                                                  | Apply [`RXXGate`](qiskit.circuit.library.RXXGate "qiskit.circuit.library.RXXGate").                          |
| [`GMS.ry`](qiskit.circuit.library.GMS.ry "qiskit.circuit.library.GMS.ry")(theta, qubit, \*\[, label, q])                                                             | Apply [`RYGate`](qiskit.circuit.library.RYGate "qiskit.circuit.library.RYGate").                             |
| [`GMS.ryy`](qiskit.circuit.library.GMS.ryy "qiskit.circuit.library.GMS.ryy")(theta, qubit1, qubit2)                                                                  | Apply [`RYYGate`](qiskit.circuit.library.RYYGate "qiskit.circuit.library.RYYGate").                          |
| [`GMS.rz`](qiskit.circuit.library.GMS.rz "qiskit.circuit.library.GMS.rz")(phi, qubit, \*\[, q])                                                                      | Apply [`RZGate`](qiskit.circuit.library.RZGate "qiskit.circuit.library.RZGate").                             |
| [`GMS.rzx`](qiskit.circuit.library.GMS.rzx "qiskit.circuit.library.GMS.rzx")(theta, qubit1, qubit2)                                                                  | Apply [`RZXGate`](qiskit.circuit.library.RZXGate "qiskit.circuit.library.RZXGate").                          |
| [`GMS.rzz`](qiskit.circuit.library.GMS.rzz "qiskit.circuit.library.GMS.rzz")(theta, qubit1, qubit2)                                                                  | Apply [`RZZGate`](qiskit.circuit.library.RZZGate "qiskit.circuit.library.RZZGate").                          |
| [`GMS.s`](qiskit.circuit.library.GMS.s "qiskit.circuit.library.GMS.s")(qubit, \*\[, q])                                                                              | Apply [`SGate`](qiskit.circuit.library.SGate "qiskit.circuit.library.SGate").                                |
| [`GMS.sdg`](qiskit.circuit.library.GMS.sdg "qiskit.circuit.library.GMS.sdg")(qubit, \*\[, q])                                                                        | Apply [`SdgGate`](qiskit.circuit.library.SdgGate "qiskit.circuit.library.SdgGate").                          |
| [`GMS.size`](qiskit.circuit.library.GMS.size "qiskit.circuit.library.GMS.size")()                                                                                    | Returns total number of gate operations in circuit.                                                          |
| [`GMS.snapshot`](qiskit.circuit.library.GMS.snapshot "qiskit.circuit.library.GMS.snapshot")(label\[, snapshot\_type, qubits, …])                                     | Take a statevector snapshot of the internal simulator representation.                                        |
| [`GMS.snapshot_density_matrix`](qiskit.circuit.library.GMS.snapshot_density_matrix "qiskit.circuit.library.GMS.snapshot_density_matrix")(label\[, qubits])           | Take a density matrix snapshot of simulator state.                                                           |
| [`GMS.snapshot_expectation_value`](qiskit.circuit.library.GMS.snapshot_expectation_value "qiskit.circuit.library.GMS.snapshot_expectation_value")(label, op, qubits) | Take a snapshot of expectation value \<O> of an Operator.                                                    |
| [`GMS.snapshot_probabilities`](qiskit.circuit.library.GMS.snapshot_probabilities "qiskit.circuit.library.GMS.snapshot_probabilities")(label, qubits\[, …])           | Take a probability snapshot of the simulator state.                                                          |
| [`GMS.snapshot_stabilizer`](qiskit.circuit.library.GMS.snapshot_stabilizer "qiskit.circuit.library.GMS.snapshot_stabilizer")(label)                                  | Take a stabilizer snapshot of the simulator state.                                                           |
| [`GMS.snapshot_statevector`](qiskit.circuit.library.GMS.snapshot_statevector "qiskit.circuit.library.GMS.snapshot_statevector")(label)                               | Take a statevector snapshot of the simulator state.                                                          |
| [`GMS.squ`](qiskit.circuit.library.GMS.squ "qiskit.circuit.library.GMS.squ")(unitary\_matrix, qubit\[, mode, …])                                                     | Decompose an arbitrary 2\*2 unitary into three rotation gates.                                               |
| [`GMS.swap`](qiskit.circuit.library.GMS.swap "qiskit.circuit.library.GMS.swap")(qubit1, qubit2)                                                                      | Apply [`SwapGate`](qiskit.circuit.library.SwapGate "qiskit.circuit.library.SwapGate").                       |
| [`GMS.t`](qiskit.circuit.library.GMS.t "qiskit.circuit.library.GMS.t")(qubit, \*\[, q])                                                                              | Apply [`TGate`](qiskit.circuit.library.TGate "qiskit.circuit.library.TGate").                                |
| [`GMS.tdg`](qiskit.circuit.library.GMS.tdg "qiskit.circuit.library.GMS.tdg")(qubit, \*\[, q])                                                                        | Apply [`TdgGate`](qiskit.circuit.library.TdgGate "qiskit.circuit.library.TdgGate").                          |
| [`GMS.to_gate`](qiskit.circuit.library.GMS.to_gate "qiskit.circuit.library.GMS.to_gate")(\[parameter\_map])                                                          | Create a Gate out of this circuit.                                                                           |
| [`GMS.to_instruction`](qiskit.circuit.library.GMS.to_instruction "qiskit.circuit.library.GMS.to_instruction")(\[parameter\_map])                                     | Create an Instruction out of this circuit.                                                                   |
| [`GMS.toffoli`](qiskit.circuit.library.GMS.toffoli "qiskit.circuit.library.GMS.toffoli")(control\_qubit1, control\_qubit2, …)                                        | Apply [`CCXGate`](qiskit.circuit.library.CCXGate "qiskit.circuit.library.CCXGate").                          |
| [`GMS.u1`](qiskit.circuit.library.GMS.u1 "qiskit.circuit.library.GMS.u1")(theta, qubit, \*\[, q])                                                                    | Apply [`U1Gate`](qiskit.circuit.library.U1Gate "qiskit.circuit.library.U1Gate").                             |
| [`GMS.u2`](qiskit.circuit.library.GMS.u2 "qiskit.circuit.library.GMS.u2")(phi, lam, qubit, \*\[, q])                                                                 | Apply [`U2Gate`](qiskit.circuit.library.U2Gate "qiskit.circuit.library.U2Gate").                             |
| [`GMS.u3`](qiskit.circuit.library.GMS.u3 "qiskit.circuit.library.GMS.u3")(theta, phi, lam, qubit, \*\[, q])                                                          | Apply [`U3Gate`](qiskit.circuit.library.U3Gate "qiskit.circuit.library.U3Gate").                             |
| [`GMS.uc`](qiskit.circuit.library.GMS.uc "qiskit.circuit.library.GMS.uc")(gate\_list, q\_controls, q\_target\[, …])                                                  | Attach a uniformly controlled gates (also called multiplexed gates) to a circuit.                            |
| [`GMS.ucg`](qiskit.circuit.library.GMS.ucg "qiskit.circuit.library.GMS.ucg")(angle\_list, q\_controls, q\_target\[, …])                                              | Deprecated version of uc.                                                                                    |
| [`GMS.ucrx`](qiskit.circuit.library.GMS.ucrx "qiskit.circuit.library.GMS.ucrx")(angle\_list, q\_controls, q\_target)                                                 | Attach a uniformly controlled (also called multiplexed) Rx rotation gate to a circuit.                       |
| [`GMS.ucry`](qiskit.circuit.library.GMS.ucry "qiskit.circuit.library.GMS.ucry")(angle\_list, q\_controls, q\_target)                                                 | Attach a uniformly controlled (also called multiplexed) Ry rotation gate to a circuit.                       |
| [`GMS.ucrz`](qiskit.circuit.library.GMS.ucrz "qiskit.circuit.library.GMS.ucrz")(angle\_list, q\_controls, q\_target)                                                 | Attach a uniformly controlled (also called multiplexed gates) Rz rotation gate to a circuit.                 |
| [`GMS.ucx`](qiskit.circuit.library.GMS.ucx "qiskit.circuit.library.GMS.ucx")(angle\_list, q\_controls, q\_target)                                                    | Deprecated version of ucrx.                                                                                  |
| [`GMS.ucy`](qiskit.circuit.library.GMS.ucy "qiskit.circuit.library.GMS.ucy")(angle\_list, q\_controls, q\_target)                                                    | Deprecated version of ucry.                                                                                  |
| [`GMS.ucz`](qiskit.circuit.library.GMS.ucz "qiskit.circuit.library.GMS.ucz")(angle\_list, q\_controls, q\_target)                                                    | Deprecated version of ucrz.                                                                                  |
| [`GMS.unitary`](qiskit.circuit.library.GMS.unitary "qiskit.circuit.library.GMS.unitary")(obj, qubits\[, label])                                                      | Apply unitary gate to q.                                                                                     |
| [`GMS.width`](qiskit.circuit.library.GMS.width "qiskit.circuit.library.GMS.width")()                                                                                 | Return number of qubits plus clbits in circuit.                                                              |
| [`GMS.x`](qiskit.circuit.library.GMS.x "qiskit.circuit.library.GMS.x")(qubit, \*\[, label, ctrl\_state, q])                                                          | Apply [`XGate`](qiskit.circuit.library.XGate "qiskit.circuit.library.XGate").                                |
| [`GMS.y`](qiskit.circuit.library.GMS.y "qiskit.circuit.library.GMS.y")(qubit, \*\[, q])                                                                              | Apply [`YGate`](qiskit.circuit.library.YGate "qiskit.circuit.library.YGate").                                |
| [`GMS.z`](qiskit.circuit.library.GMS.z "qiskit.circuit.library.GMS.z")(qubit, \*\[, q])                                                                              | Apply [`ZGate`](qiskit.circuit.library.ZGate "qiskit.circuit.library.ZGate").                                |
| [`GMS.__getitem__`](qiskit.circuit.library.GMS.__getitem__ "qiskit.circuit.library.GMS.__getitem__")(item)                                                           | Return indexed operation.                                                                                    |
| [`GMS.__len__`](qiskit.circuit.library.GMS.__len__ "qiskit.circuit.library.GMS.__len__")()                                                                           | Return number of operations in circuit.                                                                      |

