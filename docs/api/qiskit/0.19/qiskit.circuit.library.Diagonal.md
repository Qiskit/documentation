---
title: Diagonal
description: API reference for qiskit.circuit.library.Diagonal
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.Diagonal
---

# Diagonal

<span id="qiskit.circuit.library.Diagonal" />

`Diagonal(diag)`

Diagonal circuit.

Circuit symbol:

```python
     ┌───────────┐
q_0: ┤0          ├
     │           │
q_1: ┤1 Diagonal ├
     │           │
q_2: ┤2          ├
     └───────────┘
```

Matrix form:

$$
\begin{split}\text{DiagonalGate}\ q_0, q_1, .., q_{n-1} =
    \begin{pmatrix}
        D[0]    & 0         & \dots     & 0 \\
        0       & D[1]      & \dots     & 0 \\
        \vdots  & \vdots    & \ddots    & 0 \\
        0       & 0         & \dots     & D[n-1]
    \end{pmatrix}\end{split}
$$

Diagonal gates are useful as representations of Boolean functions, as they can map from \{0,1}^2\*\*n to \{0,1}^2\*\*n space. For example a phase oracle can be seen as a diagonal gate with \{+1, -1} on the diagonals. Such an oracle will induce a +1 or -1 phase on the amplitude of any corresponding basis state.

Diagonal gates appear in many classically hard oracular problems such as Forrelation or Hidden Shift circuits.

Diagonal gates are represented and simulated more efficiently than a dense 2\*\*n x 2\*\*n unitary matrix.

The reference implementation is via the method described in Theorem 7 of \[1]. The code is based on Emanuel Malvetti’s semester thesis at ETH in 2018, supervised by Raban Iten and Prof. Renato Renner.

**Reference:**

\[1] Shende et al., Synthesis of Quantum Logic Circuits, 2009 [arXiv:0406176](https://arxiv.org/pdf/quant-ph/0406176.pdf)

Create a new Diagonal circuit.

**Parameters**

**diag** (`Union`\[`List`, `array`]) – list of the 2^k diagonal entries (for a diagonal gate on k qubits).

**Raises**

**CircuitError** – if the list of the diagonal entries or the qubit list is in bad format; if the number of diagonal entries is not 2^k, where k denotes the number of qubits

## Attributes

|                                                                                                                              |                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [`Diagonal.clbits`](qiskit.circuit.library.Diagonal.clbits "qiskit.circuit.library.Diagonal.clbits")                         | Returns a list of classical bits in the order that the registers were added. |
| [`Diagonal.data`](qiskit.circuit.library.Diagonal.data "qiskit.circuit.library.Diagonal.data")                               | Return the circuit data (instructions and context).                          |
| [`Diagonal.extension_lib`](qiskit.circuit.library.Diagonal.extension_lib "qiskit.circuit.library.Diagonal.extension_lib")    |                                                                              |
| [`Diagonal.header`](qiskit.circuit.library.Diagonal.header "qiskit.circuit.library.Diagonal.header")                         |                                                                              |
| [`Diagonal.instances`](qiskit.circuit.library.Diagonal.instances "qiskit.circuit.library.Diagonal.instances")                |                                                                              |
| [`Diagonal.n_qubits`](qiskit.circuit.library.Diagonal.n_qubits "qiskit.circuit.library.Diagonal.n_qubits")                   | Deprecated, use `num_qubits` instead.                                        |
| [`Diagonal.num_clbits`](qiskit.circuit.library.Diagonal.num_clbits "qiskit.circuit.library.Diagonal.num_clbits")             | Return number of classical bits.                                             |
| [`Diagonal.num_parameters`](qiskit.circuit.library.Diagonal.num_parameters "qiskit.circuit.library.Diagonal.num_parameters") | Convenience function to get the number of parameter objects in the circuit.  |
| [`Diagonal.num_qubits`](qiskit.circuit.library.Diagonal.num_qubits "qiskit.circuit.library.Diagonal.num_qubits")             | Return number of qubits.                                                     |
| [`Diagonal.parameters`](qiskit.circuit.library.Diagonal.parameters "qiskit.circuit.library.Diagonal.parameters")             | Convenience function to get the parameters defined in the parameter table.   |
| [`Diagonal.prefix`](qiskit.circuit.library.Diagonal.prefix "qiskit.circuit.library.Diagonal.prefix")                         |                                                                              |
| [`Diagonal.qubits`](qiskit.circuit.library.Diagonal.qubits "qiskit.circuit.library.Diagonal.qubits")                         | Returns a list of quantum bits in the order that the registers were added.   |

## Methods

|                                                                                                                                                                              |                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| [`Diagonal.AND`](qiskit.circuit.library.Diagonal.AND "qiskit.circuit.library.Diagonal.AND")(qr\_variables, qb\_target, …\[, …])                                              | Build a collective conjunction (AND) circuit in place using mct.                                             |
| [`Diagonal.OR`](qiskit.circuit.library.Diagonal.OR "qiskit.circuit.library.Diagonal.OR")(qr\_variables, qb\_target, qr\_ancillae)                                            | Build a collective disjunction (OR) circuit in place using mct.                                              |
| [`Diagonal.__getitem__`](qiskit.circuit.library.Diagonal.__getitem__ "qiskit.circuit.library.Diagonal.__getitem__")(item)                                                    | Return indexed operation.                                                                                    |
| [`Diagonal.__len__`](qiskit.circuit.library.Diagonal.__len__ "qiskit.circuit.library.Diagonal.__len__")()                                                                    | Return number of operations in circuit.                                                                      |
| [`Diagonal.add_register`](qiskit.circuit.library.Diagonal.add_register "qiskit.circuit.library.Diagonal.add_register")(\*regs)                                               | Add registers.                                                                                               |
| [`Diagonal.append`](qiskit.circuit.library.Diagonal.append "qiskit.circuit.library.Diagonal.append")(instruction\[, qargs, cargs])                                           | Append one or more instructions to the end of the circuit, modifying the circuit in place.                   |
| [`Diagonal.assign_parameters`](qiskit.circuit.library.Diagonal.assign_parameters "qiskit.circuit.library.Diagonal.assign_parameters")(param\_dict\[, inplace])               | Assign parameters to new parameters or values.                                                               |
| [`Diagonal.barrier`](qiskit.circuit.library.Diagonal.barrier "qiskit.circuit.library.Diagonal.barrier")(\*qargs)                                                             | Apply `Barrier`.                                                                                             |
| [`Diagonal.bind_parameters`](qiskit.circuit.library.Diagonal.bind_parameters "qiskit.circuit.library.Diagonal.bind_parameters")(value\_dict)                                 | Assign numeric parameters to values yielding a new circuit.                                                  |
| [`Diagonal.cast`](qiskit.circuit.library.Diagonal.cast "qiskit.circuit.library.Diagonal.cast")(value, \_type)                                                                | Best effort to cast value to type.                                                                           |
| [`Diagonal.cbit_argument_conversion`](qiskit.circuit.library.Diagonal.cbit_argument_conversion "qiskit.circuit.library.Diagonal.cbit_argument_conversion")(…)                | Converts several classical bit representations (such as indexes, range, etc.) into a list of classical bits. |
| [`Diagonal.ccx`](qiskit.circuit.library.Diagonal.ccx "qiskit.circuit.library.Diagonal.ccx")(control\_qubit1, control\_qubit2, …)                                             | Apply [`CCXGate`](qiskit.circuit.library.CCXGate "qiskit.circuit.library.CCXGate").                          |
| [`Diagonal.ch`](qiskit.circuit.library.Diagonal.ch "qiskit.circuit.library.Diagonal.ch")(control\_qubit, target\_qubit, \*)                                                  | Apply [`CHGate`](qiskit.circuit.library.CHGate "qiskit.circuit.library.CHGate").                             |
| [`Diagonal.cls_instances`](qiskit.circuit.library.Diagonal.cls_instances "qiskit.circuit.library.Diagonal.cls_instances")()                                                  | Return the current number of instances of this class, useful for auto naming.                                |
| [`Diagonal.cls_prefix`](qiskit.circuit.library.Diagonal.cls_prefix "qiskit.circuit.library.Diagonal.cls_prefix")()                                                           | Return the prefix to use for auto naming.                                                                    |
| [`Diagonal.cnot`](qiskit.circuit.library.Diagonal.cnot "qiskit.circuit.library.Diagonal.cnot")(control\_qubit, target\_qubit, \*)                                            | Apply [`CXGate`](qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate").                             |
| [`Diagonal.combine`](qiskit.circuit.library.Diagonal.combine "qiskit.circuit.library.Diagonal.combine")(rhs)                                                                 | Append rhs to self if self contains compatible registers.                                                    |
| [`Diagonal.compose`](qiskit.circuit.library.Diagonal.compose "qiskit.circuit.library.Diagonal.compose")(other\[, qubits, clbits, …])                                         | Compose circuit with `other` circuit or instruction, optionally permuting wires.                             |
| [`Diagonal.copy`](qiskit.circuit.library.Diagonal.copy "qiskit.circuit.library.Diagonal.copy")(\[name])                                                                      | Copy the circuit.                                                                                            |
| [`Diagonal.count_ops`](qiskit.circuit.library.Diagonal.count_ops "qiskit.circuit.library.Diagonal.count_ops")()                                                              | Count each operation kind in the circuit.                                                                    |
| [`Diagonal.crx`](qiskit.circuit.library.Diagonal.crx "qiskit.circuit.library.Diagonal.crx")(theta, control\_qubit, …\[, …])                                                  | Apply [`CRXGate`](qiskit.circuit.library.CRXGate "qiskit.circuit.library.CRXGate").                          |
| [`Diagonal.cry`](qiskit.circuit.library.Diagonal.cry "qiskit.circuit.library.Diagonal.cry")(theta, control\_qubit, …\[, …])                                                  | Apply [`CRYGate`](qiskit.circuit.library.CRYGate "qiskit.circuit.library.CRYGate").                          |
| [`Diagonal.crz`](qiskit.circuit.library.Diagonal.crz "qiskit.circuit.library.Diagonal.crz")(theta, control\_qubit, …\[, …])                                                  | Apply [`CRZGate`](qiskit.circuit.library.CRZGate "qiskit.circuit.library.CRZGate").                          |
| [`Diagonal.cswap`](qiskit.circuit.library.Diagonal.cswap "qiskit.circuit.library.Diagonal.cswap")(control\_qubit, target\_qubit1, …)                                         | Apply [`CSwapGate`](qiskit.circuit.library.CSwapGate "qiskit.circuit.library.CSwapGate").                    |
| [`Diagonal.cu1`](qiskit.circuit.library.Diagonal.cu1 "qiskit.circuit.library.Diagonal.cu1")(theta, control\_qubit, …\[, …])                                                  | Apply [`CU1Gate`](qiskit.circuit.library.CU1Gate "qiskit.circuit.library.CU1Gate").                          |
| [`Diagonal.cu3`](qiskit.circuit.library.Diagonal.cu3 "qiskit.circuit.library.Diagonal.cu3")(theta, phi, lam, control\_qubit, …)                                              | Apply [`CU3Gate`](qiskit.circuit.library.CU3Gate "qiskit.circuit.library.CU3Gate").                          |
| [`Diagonal.cx`](qiskit.circuit.library.Diagonal.cx "qiskit.circuit.library.Diagonal.cx")(control\_qubit, target\_qubit, \*)                                                  | Apply [`CXGate`](qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate").                             |
| [`Diagonal.cy`](qiskit.circuit.library.Diagonal.cy "qiskit.circuit.library.Diagonal.cy")(control\_qubit, target\_qubit, \*)                                                  | Apply [`CYGate`](qiskit.circuit.library.CYGate "qiskit.circuit.library.CYGate").                             |
| [`Diagonal.cz`](qiskit.circuit.library.Diagonal.cz "qiskit.circuit.library.Diagonal.cz")(control\_qubit, target\_qubit, \*)                                                  | Apply [`CZGate`](qiskit.circuit.library.CZGate "qiskit.circuit.library.CZGate").                             |
| [`Diagonal.dcx`](qiskit.circuit.library.Diagonal.dcx "qiskit.circuit.library.Diagonal.dcx")(qubit1, qubit2)                                                                  | Apply [`DCXGate`](qiskit.circuit.library.DCXGate "qiskit.circuit.library.DCXGate").                          |
| [`Diagonal.decompose`](qiskit.circuit.library.Diagonal.decompose "qiskit.circuit.library.Diagonal.decompose")()                                                              | Call a decomposition pass on this circuit, to decompose one level (shallow decompose).                       |
| [`Diagonal.depth`](qiskit.circuit.library.Diagonal.depth "qiskit.circuit.library.Diagonal.depth")()                                                                          | Return circuit depth (i.e., length of critical path).                                                        |
| [`Diagonal.diag_gate`](qiskit.circuit.library.Diagonal.diag_gate "qiskit.circuit.library.Diagonal.diag_gate")(diag, qubit)                                                   | Deprecated version of QuantumCircuit.diagonal.                                                               |
| [`Diagonal.diagonal`](qiskit.circuit.library.Diagonal.diagonal "qiskit.circuit.library.Diagonal.diagonal")(diag, qubit)                                                      | Attach a diagonal gate to a circuit.                                                                         |
| [`Diagonal.draw`](qiskit.circuit.library.Diagonal.draw "qiskit.circuit.library.Diagonal.draw")(\[output, scale, filename, …])                                                | Draw the quantum circuit.                                                                                    |
| [`Diagonal.extend`](qiskit.circuit.library.Diagonal.extend "qiskit.circuit.library.Diagonal.extend")(rhs)                                                                    | Append QuantumCircuit to the right hand side if it contains compatible registers.                            |
| [`Diagonal.fredkin`](qiskit.circuit.library.Diagonal.fredkin "qiskit.circuit.library.Diagonal.fredkin")(control\_qubit, …\[, ctl, …])                                        | Apply [`CSwapGate`](qiskit.circuit.library.CSwapGate "qiskit.circuit.library.CSwapGate").                    |
| [`Diagonal.from_qasm_file`](qiskit.circuit.library.Diagonal.from_qasm_file "qiskit.circuit.library.Diagonal.from_qasm_file")(path)                                           | Take in a QASM file and generate a QuantumCircuit object.                                                    |
| [`Diagonal.from_qasm_str`](qiskit.circuit.library.Diagonal.from_qasm_str "qiskit.circuit.library.Diagonal.from_qasm_str")(qasm\_str)                                         | Take in a QASM string and generate a QuantumCircuit object.                                                  |
| [`Diagonal.h`](qiskit.circuit.library.Diagonal.h "qiskit.circuit.library.Diagonal.h")(qubit, \*\[, q])                                                                       | Apply [`HGate`](qiskit.circuit.library.HGate "qiskit.circuit.library.HGate").                                |
| [`Diagonal.hamiltonian`](qiskit.circuit.library.Diagonal.hamiltonian "qiskit.circuit.library.Diagonal.hamiltonian")(operator, time, qubits)                                  | Apply hamiltonian evolution to to qubits.                                                                    |
| [`Diagonal.has_register`](qiskit.circuit.library.Diagonal.has_register "qiskit.circuit.library.Diagonal.has_register")(register)                                             | Test if this circuit has the register r.                                                                     |
| [`Diagonal.i`](qiskit.circuit.library.Diagonal.i "qiskit.circuit.library.Diagonal.i")(qubit, \*\[, q])                                                                       | Apply [`IGate`](qiskit.circuit.library.IGate "qiskit.circuit.library.IGate").                                |
| [`Diagonal.id`](qiskit.circuit.library.Diagonal.id "qiskit.circuit.library.Diagonal.id")(qubit, \*\[, q])                                                                    | Apply [`IGate`](qiskit.circuit.library.IGate "qiskit.circuit.library.IGate").                                |
| [`Diagonal.iden`](qiskit.circuit.library.Diagonal.iden "qiskit.circuit.library.Diagonal.iden")(qubit, \*\[, q])                                                              | Deprecated identity gate.                                                                                    |
| [`Diagonal.initialize`](qiskit.circuit.library.Diagonal.initialize "qiskit.circuit.library.Diagonal.initialize")(params, qubits)                                             | Apply initialize to circuit.                                                                                 |
| [`Diagonal.inverse`](qiskit.circuit.library.Diagonal.inverse "qiskit.circuit.library.Diagonal.inverse")()                                                                    | Invert this circuit.                                                                                         |
| [`Diagonal.iso`](qiskit.circuit.library.Diagonal.iso "qiskit.circuit.library.Diagonal.iso")(isometry, q\_input, …\[, …])                                                     | Attach an arbitrary isometry from m to n qubits to a circuit.                                                |
| [`Diagonal.isometry`](qiskit.circuit.library.Diagonal.isometry "qiskit.circuit.library.Diagonal.isometry")(isometry, q\_input, …\[, …])                                      | Attach an arbitrary isometry from m to n qubits to a circuit.                                                |
| [`Diagonal.iswap`](qiskit.circuit.library.Diagonal.iswap "qiskit.circuit.library.Diagonal.iswap")(qubit1, qubit2)                                                            | Apply [`iSwapGate`](qiskit.circuit.library.iSwapGate "qiskit.circuit.library.iSwapGate").                    |
| [`Diagonal.mcmt`](qiskit.circuit.library.Diagonal.mcmt "qiskit.circuit.library.Diagonal.mcmt")(gate, control\_qubits, …\[, …])                                               | Apply a multi-control, multi-target using a generic gate.                                                    |
| [`Diagonal.mcrx`](qiskit.circuit.library.Diagonal.mcrx "qiskit.circuit.library.Diagonal.mcrx")(theta, q\_controls, q\_target\[, …])                                          | Apply Multiple-Controlled X rotation gate                                                                    |
| [`Diagonal.mcry`](qiskit.circuit.library.Diagonal.mcry "qiskit.circuit.library.Diagonal.mcry")(theta, q\_controls, q\_target, …)                                             | Apply Multiple-Controlled Y rotation gate                                                                    |
| [`Diagonal.mcrz`](qiskit.circuit.library.Diagonal.mcrz "qiskit.circuit.library.Diagonal.mcrz")(lam, q\_controls, q\_target\[, …])                                            | Apply Multiple-Controlled Z rotation gate                                                                    |
| [`Diagonal.mct`](qiskit.circuit.library.Diagonal.mct "qiskit.circuit.library.Diagonal.mct")(control\_qubits, target\_qubit\[, …])                                            | Apply `MCXGate`.                                                                                             |
| [`Diagonal.mcu1`](qiskit.circuit.library.Diagonal.mcu1 "qiskit.circuit.library.Diagonal.mcu1")(lam, control\_qubits, target\_qubit)                                          | Apply `MCU1Gate`.                                                                                            |
| [`Diagonal.mcx`](qiskit.circuit.library.Diagonal.mcx "qiskit.circuit.library.Diagonal.mcx")(control\_qubits, target\_qubit\[, …])                                            | Apply `MCXGate`.                                                                                             |
| [`Diagonal.measure`](qiskit.circuit.library.Diagonal.measure "qiskit.circuit.library.Diagonal.measure")(qubit, cbit)                                                         | Measure quantum bit into classical bit (tuples).                                                             |
| [`Diagonal.measure_active`](qiskit.circuit.library.Diagonal.measure_active "qiskit.circuit.library.Diagonal.measure_active")(\[inplace])                                     | Adds measurement to all non-idle qubits.                                                                     |
| [`Diagonal.measure_all`](qiskit.circuit.library.Diagonal.measure_all "qiskit.circuit.library.Diagonal.measure_all")(\[inplace])                                              | Adds measurement to all qubits.                                                                              |
| [`Diagonal.mirror`](qiskit.circuit.library.Diagonal.mirror "qiskit.circuit.library.Diagonal.mirror")()                                                                       | Mirror the circuit by reversing the instructions.                                                            |
| [`Diagonal.ms`](qiskit.circuit.library.Diagonal.ms "qiskit.circuit.library.Diagonal.ms")(theta, qubits)                                                                      | Apply [`MSGate`](qiskit.circuit.library.MSGate "qiskit.circuit.library.MSGate").                             |
| [`Diagonal.num_connected_components`](qiskit.circuit.library.Diagonal.num_connected_components "qiskit.circuit.library.Diagonal.num_connected_components")(\[unitary\_only]) | How many non-entangled subcircuits can the circuit be factored to.                                           |
| [`Diagonal.num_nonlocal_gates`](qiskit.circuit.library.Diagonal.num_nonlocal_gates "qiskit.circuit.library.Diagonal.num_nonlocal_gates")()                                   | Return number of non-local gates (i.e.                                                                       |
| [`Diagonal.num_tensor_factors`](qiskit.circuit.library.Diagonal.num_tensor_factors "qiskit.circuit.library.Diagonal.num_tensor_factors")()                                   | Computes the number of tensor factors in the unitary (quantum) part of the circuit only.                     |
| [`Diagonal.num_unitary_factors`](qiskit.circuit.library.Diagonal.num_unitary_factors "qiskit.circuit.library.Diagonal.num_unitary_factors")()                                | Computes the number of tensor factors in the unitary (quantum) part of the circuit only.                     |
| [`Diagonal.qasm`](qiskit.circuit.library.Diagonal.qasm "qiskit.circuit.library.Diagonal.qasm")(\[formatted, filename])                                                       | Return OpenQASM string.                                                                                      |
| [`Diagonal.qbit_argument_conversion`](qiskit.circuit.library.Diagonal.qbit_argument_conversion "qiskit.circuit.library.Diagonal.qbit_argument_conversion")(…)                | Converts several qubit representations (such as indexes, range, etc.) into a list of qubits.                 |
| [`Diagonal.r`](qiskit.circuit.library.Diagonal.r "qiskit.circuit.library.Diagonal.r")(theta, phi, qubit, \*\[, q])                                                           | Apply `RGate`.                                                                                               |
| [`Diagonal.rcccx`](qiskit.circuit.library.Diagonal.rcccx "qiskit.circuit.library.Diagonal.rcccx")(control\_qubit1, …)                                                        | Apply [`RC3XGate`](qiskit.circuit.library.RC3XGate "qiskit.circuit.library.RC3XGate").                       |
| [`Diagonal.rccx`](qiskit.circuit.library.Diagonal.rccx "qiskit.circuit.library.Diagonal.rccx")(control\_qubit1, …)                                                           | Apply [`RCCXGate`](qiskit.circuit.library.RCCXGate "qiskit.circuit.library.RCCXGate").                       |
| [`Diagonal.remove_final_measurements`](qiskit.circuit.library.Diagonal.remove_final_measurements "qiskit.circuit.library.Diagonal.remove_final_measurements")(\[inplace])    | Removes final measurement on all qubits if they are present.                                                 |
| [`Diagonal.reset`](qiskit.circuit.library.Diagonal.reset "qiskit.circuit.library.Diagonal.reset")(qubit)                                                                     | Reset q.                                                                                                     |
| [`Diagonal.rx`](qiskit.circuit.library.Diagonal.rx "qiskit.circuit.library.Diagonal.rx")(theta, qubit, \*\[, label, q])                                                      | Apply [`RXGate`](qiskit.circuit.library.RXGate "qiskit.circuit.library.RXGate").                             |
| [`Diagonal.rxx`](qiskit.circuit.library.Diagonal.rxx "qiskit.circuit.library.Diagonal.rxx")(theta, qubit1, qubit2)                                                           | Apply [`RXXGate`](qiskit.circuit.library.RXXGate "qiskit.circuit.library.RXXGate").                          |
| [`Diagonal.ry`](qiskit.circuit.library.Diagonal.ry "qiskit.circuit.library.Diagonal.ry")(theta, qubit, \*\[, label, q])                                                      | Apply [`RYGate`](qiskit.circuit.library.RYGate "qiskit.circuit.library.RYGate").                             |
| [`Diagonal.ryy`](qiskit.circuit.library.Diagonal.ryy "qiskit.circuit.library.Diagonal.ryy")(theta, qubit1, qubit2)                                                           | Apply [`RYYGate`](qiskit.circuit.library.RYYGate "qiskit.circuit.library.RYYGate").                          |
| [`Diagonal.rz`](qiskit.circuit.library.Diagonal.rz "qiskit.circuit.library.Diagonal.rz")(phi, qubit, \*\[, q])                                                               | Apply [`RZGate`](qiskit.circuit.library.RZGate "qiskit.circuit.library.RZGate").                             |
| [`Diagonal.rzx`](qiskit.circuit.library.Diagonal.rzx "qiskit.circuit.library.Diagonal.rzx")(theta, qubit1, qubit2)                                                           | Apply [`RZXGate`](qiskit.circuit.library.RZXGate "qiskit.circuit.library.RZXGate").                          |
| [`Diagonal.rzz`](qiskit.circuit.library.Diagonal.rzz "qiskit.circuit.library.Diagonal.rzz")(theta, qubit1, qubit2)                                                           | Apply [`RZZGate`](qiskit.circuit.library.RZZGate "qiskit.circuit.library.RZZGate").                          |
| [`Diagonal.s`](qiskit.circuit.library.Diagonal.s "qiskit.circuit.library.Diagonal.s")(qubit, \*\[, q])                                                                       | Apply [`SGate`](qiskit.circuit.library.SGate "qiskit.circuit.library.SGate").                                |
| [`Diagonal.sdg`](qiskit.circuit.library.Diagonal.sdg "qiskit.circuit.library.Diagonal.sdg")(qubit, \*\[, q])                                                                 | Apply [`SdgGate`](qiskit.circuit.library.SdgGate "qiskit.circuit.library.SdgGate").                          |
| [`Diagonal.size`](qiskit.circuit.library.Diagonal.size "qiskit.circuit.library.Diagonal.size")()                                                                             | Returns total number of gate operations in circuit.                                                          |
| [`Diagonal.snapshot`](qiskit.circuit.library.Diagonal.snapshot "qiskit.circuit.library.Diagonal.snapshot")(label\[, snapshot\_type, …])                                      | Take a statevector snapshot of the internal simulator representation.                                        |
| [`Diagonal.snapshot_density_matrix`](qiskit.circuit.library.Diagonal.snapshot_density_matrix "qiskit.circuit.library.Diagonal.snapshot_density_matrix")(label\[, qubits])    | Take a density matrix snapshot of simulator state.                                                           |
| [`Diagonal.snapshot_expectation_value`](qiskit.circuit.library.Diagonal.snapshot_expectation_value "qiskit.circuit.library.Diagonal.snapshot_expectation_value")(label, …)   | Take a snapshot of expectation value \<O> of an Operator.                                                    |
| [`Diagonal.snapshot_probabilities`](qiskit.circuit.library.Diagonal.snapshot_probabilities "qiskit.circuit.library.Diagonal.snapshot_probabilities")(label, qubits)          | Take a probability snapshot of the simulator state.                                                          |
| [`Diagonal.snapshot_stabilizer`](qiskit.circuit.library.Diagonal.snapshot_stabilizer "qiskit.circuit.library.Diagonal.snapshot_stabilizer")(label)                           | Take a stabilizer snapshot of the simulator state.                                                           |
| [`Diagonal.snapshot_statevector`](qiskit.circuit.library.Diagonal.snapshot_statevector "qiskit.circuit.library.Diagonal.snapshot_statevector")(label)                        | Take a statevector snapshot of the simulator state.                                                          |
| [`Diagonal.squ`](qiskit.circuit.library.Diagonal.squ "qiskit.circuit.library.Diagonal.squ")(unitary\_matrix, qubit\[, mode, …])                                              | Decompose an arbitrary 2\*2 unitary into three rotation gates.                                               |
| [`Diagonal.swap`](qiskit.circuit.library.Diagonal.swap "qiskit.circuit.library.Diagonal.swap")(qubit1, qubit2)                                                               | Apply [`SwapGate`](qiskit.circuit.library.SwapGate "qiskit.circuit.library.SwapGate").                       |
| [`Diagonal.t`](qiskit.circuit.library.Diagonal.t "qiskit.circuit.library.Diagonal.t")(qubit, \*\[, q])                                                                       | Apply [`TGate`](qiskit.circuit.library.TGate "qiskit.circuit.library.TGate").                                |
| [`Diagonal.tdg`](qiskit.circuit.library.Diagonal.tdg "qiskit.circuit.library.Diagonal.tdg")(qubit, \*\[, q])                                                                 | Apply [`TdgGate`](qiskit.circuit.library.TdgGate "qiskit.circuit.library.TdgGate").                          |
| [`Diagonal.to_gate`](qiskit.circuit.library.Diagonal.to_gate "qiskit.circuit.library.Diagonal.to_gate")(\[parameter\_map])                                                   | Create a Gate out of this circuit.                                                                           |
| [`Diagonal.to_instruction`](qiskit.circuit.library.Diagonal.to_instruction "qiskit.circuit.library.Diagonal.to_instruction")(\[parameter\_map])                              | Create an Instruction out of this circuit.                                                                   |
| [`Diagonal.toffoli`](qiskit.circuit.library.Diagonal.toffoli "qiskit.circuit.library.Diagonal.toffoli")(control\_qubit1, …\[, …])                                            | Apply [`CCXGate`](qiskit.circuit.library.CCXGate "qiskit.circuit.library.CCXGate").                          |
| [`Diagonal.u1`](qiskit.circuit.library.Diagonal.u1 "qiskit.circuit.library.Diagonal.u1")(theta, qubit, \*\[, q])                                                             | Apply [`U1Gate`](qiskit.circuit.library.U1Gate "qiskit.circuit.library.U1Gate").                             |
| [`Diagonal.u2`](qiskit.circuit.library.Diagonal.u2 "qiskit.circuit.library.Diagonal.u2")(phi, lam, qubit, \*\[, q])                                                          | Apply [`U2Gate`](qiskit.circuit.library.U2Gate "qiskit.circuit.library.U2Gate").                             |
| [`Diagonal.u3`](qiskit.circuit.library.Diagonal.u3 "qiskit.circuit.library.Diagonal.u3")(theta, phi, lam, qubit, \*\[, q])                                                   | Apply [`U3Gate`](qiskit.circuit.library.U3Gate "qiskit.circuit.library.U3Gate").                             |
| [`Diagonal.uc`](qiskit.circuit.library.Diagonal.uc "qiskit.circuit.library.Diagonal.uc")(gate\_list, q\_controls, q\_target)                                                 | Attach a uniformly controlled gates (also called multiplexed gates) to a circuit.                            |
| [`Diagonal.ucg`](qiskit.circuit.library.Diagonal.ucg "qiskit.circuit.library.Diagonal.ucg")(angle\_list, q\_controls, q\_target)                                             | Deprecated version of uc.                                                                                    |
| [`Diagonal.ucrx`](qiskit.circuit.library.Diagonal.ucrx "qiskit.circuit.library.Diagonal.ucrx")(angle\_list, q\_controls, q\_target)                                          | Attach a uniformly controlled (also called multiplexed) Rx rotation gate to a circuit.                       |
| [`Diagonal.ucry`](qiskit.circuit.library.Diagonal.ucry "qiskit.circuit.library.Diagonal.ucry")(angle\_list, q\_controls, q\_target)                                          | Attach a uniformly controlled (also called multiplexed) Ry rotation gate to a circuit.                       |
| [`Diagonal.ucrz`](qiskit.circuit.library.Diagonal.ucrz "qiskit.circuit.library.Diagonal.ucrz")(angle\_list, q\_controls, q\_target)                                          | Attach a uniformly controlled (also called multiplexed gates) Rz rotation gate to a circuit.                 |
| [`Diagonal.ucx`](qiskit.circuit.library.Diagonal.ucx "qiskit.circuit.library.Diagonal.ucx")(angle\_list, q\_controls, q\_target)                                             | Deprecated version of ucrx.                                                                                  |
| [`Diagonal.ucy`](qiskit.circuit.library.Diagonal.ucy "qiskit.circuit.library.Diagonal.ucy")(angle\_list, q\_controls, q\_target)                                             | Deprecated version of ucry.                                                                                  |
| [`Diagonal.ucz`](qiskit.circuit.library.Diagonal.ucz "qiskit.circuit.library.Diagonal.ucz")(angle\_list, q\_controls, q\_target)                                             | Deprecated version of ucrz.                                                                                  |
| [`Diagonal.unitary`](qiskit.circuit.library.Diagonal.unitary "qiskit.circuit.library.Diagonal.unitary")(obj, qubits\[, label])                                               | Apply unitary gate to q.                                                                                     |
| [`Diagonal.width`](qiskit.circuit.library.Diagonal.width "qiskit.circuit.library.Diagonal.width")()                                                                          | Return number of qubits plus clbits in circuit.                                                              |
| [`Diagonal.x`](qiskit.circuit.library.Diagonal.x "qiskit.circuit.library.Diagonal.x")(qubit, \*\[, label, ctrl\_state, q])                                                   | Apply [`XGate`](qiskit.circuit.library.XGate "qiskit.circuit.library.XGate").                                |
| [`Diagonal.y`](qiskit.circuit.library.Diagonal.y "qiskit.circuit.library.Diagonal.y")(qubit, \*\[, q])                                                                       | Apply [`YGate`](qiskit.circuit.library.YGate "qiskit.circuit.library.YGate").                                |
| [`Diagonal.z`](qiskit.circuit.library.Diagonal.z "qiskit.circuit.library.Diagonal.z")(qubit, \*\[, q])                                                                       | Apply [`ZGate`](qiskit.circuit.library.ZGate "qiskit.circuit.library.ZGate").                                |
| [`Diagonal.__getitem__`](qiskit.circuit.library.Diagonal.__getitem__ "qiskit.circuit.library.Diagonal.__getitem__")(item)                                                    | Return indexed operation.                                                                                    |
| [`Diagonal.__len__`](qiskit.circuit.library.Diagonal.__len__ "qiskit.circuit.library.Diagonal.__len__")()                                                                    | Return number of operations in circuit.                                                                      |

