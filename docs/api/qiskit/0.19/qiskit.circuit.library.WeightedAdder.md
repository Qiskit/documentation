---
title: WeightedAdder
description: API reference for qiskit.circuit.library.WeightedAdder
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.WeightedAdder
---

# WeightedAdder

<span id="qiskit.circuit.library.WeightedAdder" />

`WeightedAdder(num_state_qubits=None, weights=None, name='adder')`

A circuit to compute the weighted sum of qubit registers.

Given $n$ qubit basis states $q_0, \ldots, q_{n-1} \in \{0, 1\}$ and non-negative integer weights $\lambda_0, \ldots, \lambda_{n-1}$, this circuit performs the operation

$$
|q_0 \ldots q_{n-1}\rangle |0\rangle_s
\mapsto |q_0 \ldots q_{n-1}\rangle |\sum_{j=0}^{n-1} \lambda_j q_j\rangle_s
$$

where $s$ is the number of sum qubits required. This can be computed as

$$
s = 1 + \left\lfloor \log_2\left( \sum_{j=0}^{n-1} \lambda_j \right) \right\rfloor
$$

or $s = 1$ if the sum of the weights is 0 (then the expression in the logarithm is invalid).

For qubits in a circuit diagram, the first weight applies to the upper-most qubit. For an example where the state of 4 qubits is added into a sum register, the circuit can be schematically drawn as

```python
           ┌────────┐
  state_0: ┤0       ├ | state_0 * weights[0]
           │        │ |
  state_1: ┤1       ├ | + state_1 * weights[1]
           │        │ |
  state_2: ┤2       ├ | + state_2 * weights[2]
           │        │ |
  state_3: ┤3       ├ | + state_3 * weights[3]
           │        │
    sum_0: ┤4       ├ |
           │  Adder │ |
    sum_1: ┤5       ├ | = sum_0 * 2^0 + sum_1 * 2^1 + sum_2 * 2^2
           │        │ |
    sum_2: ┤6       ├ |
           │        │
  carry_0: ┤7       ├
           │        │
  carry_1: ┤8       ├
           │        │
control_0: ┤9       ├
           └────────┘
```

Computes the weighted sum controlled by state qubits.

**Parameters**

*   **num\_state\_qubits** (`Optional`\[`int`]) – The number of state qubits.
*   **weights** (`Optional`\[`List`\[`int`]]) – List of weights, one for each state qubit. If none are provided they default to 1 for every qubit.
*   **name** (`str`) – The name of the circuit.

## Attributes

|                                                                                                                                                         |                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [`WeightedAdder.clbits`](qiskit.circuit.library.WeightedAdder.clbits "qiskit.circuit.library.WeightedAdder.clbits")                                     | Returns a list of classical bits in the order that the registers were added. |
| [`WeightedAdder.data`](qiskit.circuit.library.WeightedAdder.data "qiskit.circuit.library.WeightedAdder.data")                                           | Return the circuit data (instructions and context).                          |
| [`WeightedAdder.extension_lib`](qiskit.circuit.library.WeightedAdder.extension_lib "qiskit.circuit.library.WeightedAdder.extension_lib")                |                                                                              |
| [`WeightedAdder.header`](qiskit.circuit.library.WeightedAdder.header "qiskit.circuit.library.WeightedAdder.header")                                     |                                                                              |
| [`WeightedAdder.instances`](qiskit.circuit.library.WeightedAdder.instances "qiskit.circuit.library.WeightedAdder.instances")                            |                                                                              |
| [`WeightedAdder.n_qubits`](qiskit.circuit.library.WeightedAdder.n_qubits "qiskit.circuit.library.WeightedAdder.n_qubits")                               | Deprecated, use `num_qubits` instead.                                        |
| [`WeightedAdder.num_ancilla_qubits`](qiskit.circuit.library.WeightedAdder.num_ancilla_qubits "qiskit.circuit.library.WeightedAdder.num_ancilla_qubits") | The number of ancilla qubits required to implement the weighted sum.         |
| [`WeightedAdder.num_carry_qubits`](qiskit.circuit.library.WeightedAdder.num_carry_qubits "qiskit.circuit.library.WeightedAdder.num_carry_qubits")       | The number of carry qubits required to compute the sum.                      |
| [`WeightedAdder.num_clbits`](qiskit.circuit.library.WeightedAdder.num_clbits "qiskit.circuit.library.WeightedAdder.num_clbits")                         | Return number of classical bits.                                             |
| [`WeightedAdder.num_control_qubits`](qiskit.circuit.library.WeightedAdder.num_control_qubits "qiskit.circuit.library.WeightedAdder.num_control_qubits") | The number of additional control qubits required.                            |
| [`WeightedAdder.num_parameters`](qiskit.circuit.library.WeightedAdder.num_parameters "qiskit.circuit.library.WeightedAdder.num_parameters")             | Convenience function to get the number of parameter objects in the circuit.  |
| [`WeightedAdder.num_qubits`](qiskit.circuit.library.WeightedAdder.num_qubits "qiskit.circuit.library.WeightedAdder.num_qubits")                         | Return number of qubits.                                                     |
| [`WeightedAdder.num_state_qubits`](qiskit.circuit.library.WeightedAdder.num_state_qubits "qiskit.circuit.library.WeightedAdder.num_state_qubits")       | The number of qubits to be summed.                                           |
| [`WeightedAdder.num_sum_qubits`](qiskit.circuit.library.WeightedAdder.num_sum_qubits "qiskit.circuit.library.WeightedAdder.num_sum_qubits")             | The number of sum qubits in the circuit.                                     |
| [`WeightedAdder.parameters`](qiskit.circuit.library.WeightedAdder.parameters "qiskit.circuit.library.WeightedAdder.parameters")                         | Convenience function to get the parameters defined in the parameter table.   |
| [`WeightedAdder.prefix`](qiskit.circuit.library.WeightedAdder.prefix "qiskit.circuit.library.WeightedAdder.prefix")                                     |                                                                              |
| [`WeightedAdder.qregs`](qiskit.circuit.library.WeightedAdder.qregs "qiskit.circuit.library.WeightedAdder.qregs")                                        | A list of the quantum registers associated with the circuit.                 |
| [`WeightedAdder.qubits`](qiskit.circuit.library.WeightedAdder.qubits "qiskit.circuit.library.WeightedAdder.qubits")                                     | Returns a list of quantum bits in the order that the registers were added.   |
| [`WeightedAdder.weights`](qiskit.circuit.library.WeightedAdder.weights "qiskit.circuit.library.WeightedAdder.weights")                                  | The weights for the qubit states.                                            |

## Methods

|                                                                                                                                                                                    |                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| [`WeightedAdder.AND`](qiskit.circuit.library.WeightedAdder.AND "qiskit.circuit.library.WeightedAdder.AND")(qr\_variables, qb\_target, …)                                           | Build a collective conjunction (AND) circuit in place using mct.                                             |
| [`WeightedAdder.OR`](qiskit.circuit.library.WeightedAdder.OR "qiskit.circuit.library.WeightedAdder.OR")(qr\_variables, qb\_target, …)                                              | Build a collective disjunction (OR) circuit in place using mct.                                              |
| [`WeightedAdder.__getitem__`](qiskit.circuit.library.WeightedAdder.__getitem__ "qiskit.circuit.library.WeightedAdder.__getitem__")(item)                                           | Return indexed operation.                                                                                    |
| [`WeightedAdder.__len__`](qiskit.circuit.library.WeightedAdder.__len__ "qiskit.circuit.library.WeightedAdder.__len__")()                                                           | Return number of operations in circuit.                                                                      |
| [`WeightedAdder.add_register`](qiskit.circuit.library.WeightedAdder.add_register "qiskit.circuit.library.WeightedAdder.add_register")(\*regs)                                      | Add registers.                                                                                               |
| [`WeightedAdder.append`](qiskit.circuit.library.WeightedAdder.append "qiskit.circuit.library.WeightedAdder.append")(instruction\[, qargs, cargs])                                  | Append one or more instructions to the end of the circuit, modifying the circuit in place.                   |
| [`WeightedAdder.assign_parameters`](qiskit.circuit.library.WeightedAdder.assign_parameters "qiskit.circuit.library.WeightedAdder.assign_parameters")(param\_dict)                  | Assign parameters to new parameters or values.                                                               |
| [`WeightedAdder.barrier`](qiskit.circuit.library.WeightedAdder.barrier "qiskit.circuit.library.WeightedAdder.barrier")(\*qargs)                                                    | Apply `Barrier`.                                                                                             |
| [`WeightedAdder.bind_parameters`](qiskit.circuit.library.WeightedAdder.bind_parameters "qiskit.circuit.library.WeightedAdder.bind_parameters")(value\_dict)                        | Assign numeric parameters to values yielding a new circuit.                                                  |
| [`WeightedAdder.cast`](qiskit.circuit.library.WeightedAdder.cast "qiskit.circuit.library.WeightedAdder.cast")(value, \_type)                                                       | Best effort to cast value to type.                                                                           |
| [`WeightedAdder.cbit_argument_conversion`](qiskit.circuit.library.WeightedAdder.cbit_argument_conversion "qiskit.circuit.library.WeightedAdder.cbit_argument_conversion")(…)       | Converts several classical bit representations (such as indexes, range, etc.) into a list of classical bits. |
| [`WeightedAdder.ccx`](qiskit.circuit.library.WeightedAdder.ccx "qiskit.circuit.library.WeightedAdder.ccx")(control\_qubit1, …\[, …])                                               | Apply [`CCXGate`](qiskit.circuit.library.CCXGate "qiskit.circuit.library.CCXGate").                          |
| [`WeightedAdder.ch`](qiskit.circuit.library.WeightedAdder.ch "qiskit.circuit.library.WeightedAdder.ch")(control\_qubit, target\_qubit, \*)                                         | Apply [`CHGate`](qiskit.circuit.library.CHGate "qiskit.circuit.library.CHGate").                             |
| [`WeightedAdder.cls_instances`](qiskit.circuit.library.WeightedAdder.cls_instances "qiskit.circuit.library.WeightedAdder.cls_instances")()                                         | Return the current number of instances of this class, useful for auto naming.                                |
| [`WeightedAdder.cls_prefix`](qiskit.circuit.library.WeightedAdder.cls_prefix "qiskit.circuit.library.WeightedAdder.cls_prefix")()                                                  | Return the prefix to use for auto naming.                                                                    |
| [`WeightedAdder.cnot`](qiskit.circuit.library.WeightedAdder.cnot "qiskit.circuit.library.WeightedAdder.cnot")(control\_qubit, …\[, …])                                             | Apply [`CXGate`](qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate").                             |
| [`WeightedAdder.combine`](qiskit.circuit.library.WeightedAdder.combine "qiskit.circuit.library.WeightedAdder.combine")(rhs)                                                        | Append rhs to self if self contains compatible registers.                                                    |
| [`WeightedAdder.compose`](qiskit.circuit.library.WeightedAdder.compose "qiskit.circuit.library.WeightedAdder.compose")(other\[, qubits, …])                                        | Compose circuit with `other` circuit or instruction, optionally permuting wires.                             |
| [`WeightedAdder.copy`](qiskit.circuit.library.WeightedAdder.copy "qiskit.circuit.library.WeightedAdder.copy")(\[name])                                                             | Copy the circuit.                                                                                            |
| [`WeightedAdder.count_ops`](qiskit.circuit.library.WeightedAdder.count_ops "qiskit.circuit.library.WeightedAdder.count_ops")()                                                     | Count each operation kind in the circuit.                                                                    |
| [`WeightedAdder.crx`](qiskit.circuit.library.WeightedAdder.crx "qiskit.circuit.library.WeightedAdder.crx")(theta, control\_qubit, …)                                               | Apply [`CRXGate`](qiskit.circuit.library.CRXGate "qiskit.circuit.library.CRXGate").                          |
| [`WeightedAdder.cry`](qiskit.circuit.library.WeightedAdder.cry "qiskit.circuit.library.WeightedAdder.cry")(theta, control\_qubit, …)                                               | Apply [`CRYGate`](qiskit.circuit.library.CRYGate "qiskit.circuit.library.CRYGate").                          |
| [`WeightedAdder.crz`](qiskit.circuit.library.WeightedAdder.crz "qiskit.circuit.library.WeightedAdder.crz")(theta, control\_qubit, …)                                               | Apply [`CRZGate`](qiskit.circuit.library.CRZGate "qiskit.circuit.library.CRZGate").                          |
| [`WeightedAdder.cswap`](qiskit.circuit.library.WeightedAdder.cswap "qiskit.circuit.library.WeightedAdder.cswap")(control\_qubit, …\[, …])                                          | Apply [`CSwapGate`](qiskit.circuit.library.CSwapGate "qiskit.circuit.library.CSwapGate").                    |
| [`WeightedAdder.cu1`](qiskit.circuit.library.WeightedAdder.cu1 "qiskit.circuit.library.WeightedAdder.cu1")(theta, control\_qubit, …)                                               | Apply [`CU1Gate`](qiskit.circuit.library.CU1Gate "qiskit.circuit.library.CU1Gate").                          |
| [`WeightedAdder.cu3`](qiskit.circuit.library.WeightedAdder.cu3 "qiskit.circuit.library.WeightedAdder.cu3")(theta, phi, lam, …\[, …])                                               | Apply [`CU3Gate`](qiskit.circuit.library.CU3Gate "qiskit.circuit.library.CU3Gate").                          |
| [`WeightedAdder.cx`](qiskit.circuit.library.WeightedAdder.cx "qiskit.circuit.library.WeightedAdder.cx")(control\_qubit, target\_qubit, \*)                                         | Apply [`CXGate`](qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate").                             |
| [`WeightedAdder.cy`](qiskit.circuit.library.WeightedAdder.cy "qiskit.circuit.library.WeightedAdder.cy")(control\_qubit, target\_qubit, \*)                                         | Apply [`CYGate`](qiskit.circuit.library.CYGate "qiskit.circuit.library.CYGate").                             |
| [`WeightedAdder.cz`](qiskit.circuit.library.WeightedAdder.cz "qiskit.circuit.library.WeightedAdder.cz")(control\_qubit, target\_qubit, \*)                                         | Apply [`CZGate`](qiskit.circuit.library.CZGate "qiskit.circuit.library.CZGate").                             |
| [`WeightedAdder.dcx`](qiskit.circuit.library.WeightedAdder.dcx "qiskit.circuit.library.WeightedAdder.dcx")(qubit1, qubit2)                                                         | Apply [`DCXGate`](qiskit.circuit.library.DCXGate "qiskit.circuit.library.DCXGate").                          |
| [`WeightedAdder.decompose`](qiskit.circuit.library.WeightedAdder.decompose "qiskit.circuit.library.WeightedAdder.decompose")()                                                     | Call a decomposition pass on this circuit, to decompose one level (shallow decompose).                       |
| [`WeightedAdder.depth`](qiskit.circuit.library.WeightedAdder.depth "qiskit.circuit.library.WeightedAdder.depth")()                                                                 | Return circuit depth (i.e., length of critical path).                                                        |
| [`WeightedAdder.diag_gate`](qiskit.circuit.library.WeightedAdder.diag_gate "qiskit.circuit.library.WeightedAdder.diag_gate")(diag, qubit)                                          | Deprecated version of QuantumCircuit.diagonal.                                                               |
| [`WeightedAdder.diagonal`](qiskit.circuit.library.WeightedAdder.diagonal "qiskit.circuit.library.WeightedAdder.diagonal")(diag, qubit)                                             | Attach a diagonal gate to a circuit.                                                                         |
| [`WeightedAdder.draw`](qiskit.circuit.library.WeightedAdder.draw "qiskit.circuit.library.WeightedAdder.draw")(\[output, scale, …])                                                 | Draw the quantum circuit.                                                                                    |
| [`WeightedAdder.extend`](qiskit.circuit.library.WeightedAdder.extend "qiskit.circuit.library.WeightedAdder.extend")(rhs)                                                           | Append QuantumCircuit to the right hand side if it contains compatible registers.                            |
| [`WeightedAdder.fredkin`](qiskit.circuit.library.WeightedAdder.fredkin "qiskit.circuit.library.WeightedAdder.fredkin")(control\_qubit, …\[, …])                                    | Apply [`CSwapGate`](qiskit.circuit.library.CSwapGate "qiskit.circuit.library.CSwapGate").                    |
| [`WeightedAdder.from_qasm_file`](qiskit.circuit.library.WeightedAdder.from_qasm_file "qiskit.circuit.library.WeightedAdder.from_qasm_file")(path)                                  | Take in a QASM file and generate a QuantumCircuit object.                                                    |
| [`WeightedAdder.from_qasm_str`](qiskit.circuit.library.WeightedAdder.from_qasm_str "qiskit.circuit.library.WeightedAdder.from_qasm_str")(qasm\_str)                                | Take in a QASM string and generate a QuantumCircuit object.                                                  |
| [`WeightedAdder.h`](qiskit.circuit.library.WeightedAdder.h "qiskit.circuit.library.WeightedAdder.h")(qubit, \*\[, q])                                                              | Apply [`HGate`](qiskit.circuit.library.HGate "qiskit.circuit.library.HGate").                                |
| [`WeightedAdder.hamiltonian`](qiskit.circuit.library.WeightedAdder.hamiltonian "qiskit.circuit.library.WeightedAdder.hamiltonian")(operator, time, qubits)                         | Apply hamiltonian evolution to to qubits.                                                                    |
| [`WeightedAdder.has_register`](qiskit.circuit.library.WeightedAdder.has_register "qiskit.circuit.library.WeightedAdder.has_register")(register)                                    | Test if this circuit has the register r.                                                                     |
| [`WeightedAdder.i`](qiskit.circuit.library.WeightedAdder.i "qiskit.circuit.library.WeightedAdder.i")(qubit, \*\[, q])                                                              | Apply [`IGate`](qiskit.circuit.library.IGate "qiskit.circuit.library.IGate").                                |
| [`WeightedAdder.id`](qiskit.circuit.library.WeightedAdder.id "qiskit.circuit.library.WeightedAdder.id")(qubit, \*\[, q])                                                           | Apply [`IGate`](qiskit.circuit.library.IGate "qiskit.circuit.library.IGate").                                |
| [`WeightedAdder.iden`](qiskit.circuit.library.WeightedAdder.iden "qiskit.circuit.library.WeightedAdder.iden")(qubit, \*\[, q])                                                     | Deprecated identity gate.                                                                                    |
| [`WeightedAdder.initialize`](qiskit.circuit.library.WeightedAdder.initialize "qiskit.circuit.library.WeightedAdder.initialize")(params, qubits)                                    | Apply initialize to circuit.                                                                                 |
| [`WeightedAdder.inverse`](qiskit.circuit.library.WeightedAdder.inverse "qiskit.circuit.library.WeightedAdder.inverse")()                                                           | Invert this circuit.                                                                                         |
| [`WeightedAdder.iso`](qiskit.circuit.library.WeightedAdder.iso "qiskit.circuit.library.WeightedAdder.iso")(isometry, q\_input, …\[, …])                                            | Attach an arbitrary isometry from m to n qubits to a circuit.                                                |
| [`WeightedAdder.isometry`](qiskit.circuit.library.WeightedAdder.isometry "qiskit.circuit.library.WeightedAdder.isometry")(isometry, q\_input, …)                                   | Attach an arbitrary isometry from m to n qubits to a circuit.                                                |
| [`WeightedAdder.iswap`](qiskit.circuit.library.WeightedAdder.iswap "qiskit.circuit.library.WeightedAdder.iswap")(qubit1, qubit2)                                                   | Apply [`iSwapGate`](qiskit.circuit.library.iSwapGate "qiskit.circuit.library.iSwapGate").                    |
| [`WeightedAdder.mcmt`](qiskit.circuit.library.WeightedAdder.mcmt "qiskit.circuit.library.WeightedAdder.mcmt")(gate, control\_qubits, …)                                            | Apply a multi-control, multi-target using a generic gate.                                                    |
| [`WeightedAdder.mcrx`](qiskit.circuit.library.WeightedAdder.mcrx "qiskit.circuit.library.WeightedAdder.mcrx")(theta, q\_controls, q\_target)                                       | Apply Multiple-Controlled X rotation gate                                                                    |
| [`WeightedAdder.mcry`](qiskit.circuit.library.WeightedAdder.mcry "qiskit.circuit.library.WeightedAdder.mcry")(theta, q\_controls, …\[, …])                                         | Apply Multiple-Controlled Y rotation gate                                                                    |
| [`WeightedAdder.mcrz`](qiskit.circuit.library.WeightedAdder.mcrz "qiskit.circuit.library.WeightedAdder.mcrz")(lam, q\_controls, q\_target)                                         | Apply Multiple-Controlled Z rotation gate                                                                    |
| [`WeightedAdder.mct`](qiskit.circuit.library.WeightedAdder.mct "qiskit.circuit.library.WeightedAdder.mct")(control\_qubits, target\_qubit)                                         | Apply `MCXGate`.                                                                                             |
| [`WeightedAdder.mcu1`](qiskit.circuit.library.WeightedAdder.mcu1 "qiskit.circuit.library.WeightedAdder.mcu1")(lam, control\_qubits, …)                                             | Apply `MCU1Gate`.                                                                                            |
| [`WeightedAdder.mcx`](qiskit.circuit.library.WeightedAdder.mcx "qiskit.circuit.library.WeightedAdder.mcx")(control\_qubits, target\_qubit)                                         | Apply `MCXGate`.                                                                                             |
| [`WeightedAdder.measure`](qiskit.circuit.library.WeightedAdder.measure "qiskit.circuit.library.WeightedAdder.measure")(qubit, cbit)                                                | Measure quantum bit into classical bit (tuples).                                                             |
| [`WeightedAdder.measure_active`](qiskit.circuit.library.WeightedAdder.measure_active "qiskit.circuit.library.WeightedAdder.measure_active")(\[inplace])                            | Adds measurement to all non-idle qubits.                                                                     |
| [`WeightedAdder.measure_all`](qiskit.circuit.library.WeightedAdder.measure_all "qiskit.circuit.library.WeightedAdder.measure_all")(\[inplace])                                     | Adds measurement to all qubits.                                                                              |
| [`WeightedAdder.mirror`](qiskit.circuit.library.WeightedAdder.mirror "qiskit.circuit.library.WeightedAdder.mirror")()                                                              | Mirror the circuit by reversing the instructions.                                                            |
| [`WeightedAdder.ms`](qiskit.circuit.library.WeightedAdder.ms "qiskit.circuit.library.WeightedAdder.ms")(theta, qubits)                                                             | Apply [`MSGate`](qiskit.circuit.library.MSGate "qiskit.circuit.library.MSGate").                             |
| [`WeightedAdder.num_connected_components`](qiskit.circuit.library.WeightedAdder.num_connected_components "qiskit.circuit.library.WeightedAdder.num_connected_components")(\[…])    | How many non-entangled subcircuits can the circuit be factored to.                                           |
| [`WeightedAdder.num_nonlocal_gates`](qiskit.circuit.library.WeightedAdder.num_nonlocal_gates "qiskit.circuit.library.WeightedAdder.num_nonlocal_gates")()                          | Return number of non-local gates (i.e.                                                                       |
| [`WeightedAdder.num_tensor_factors`](qiskit.circuit.library.WeightedAdder.num_tensor_factors "qiskit.circuit.library.WeightedAdder.num_tensor_factors")()                          | Computes the number of tensor factors in the unitary (quantum) part of the circuit only.                     |
| [`WeightedAdder.num_unitary_factors`](qiskit.circuit.library.WeightedAdder.num_unitary_factors "qiskit.circuit.library.WeightedAdder.num_unitary_factors")()                       | Computes the number of tensor factors in the unitary (quantum) part of the circuit only.                     |
| [`WeightedAdder.qasm`](qiskit.circuit.library.WeightedAdder.qasm "qiskit.circuit.library.WeightedAdder.qasm")(\[formatted, filename])                                              | Return OpenQASM string.                                                                                      |
| [`WeightedAdder.qbit_argument_conversion`](qiskit.circuit.library.WeightedAdder.qbit_argument_conversion "qiskit.circuit.library.WeightedAdder.qbit_argument_conversion")(…)       | Converts several qubit representations (such as indexes, range, etc.) into a list of qubits.                 |
| [`WeightedAdder.r`](qiskit.circuit.library.WeightedAdder.r "qiskit.circuit.library.WeightedAdder.r")(theta, phi, qubit, \*\[, q])                                                  | Apply `RGate`.                                                                                               |
| [`WeightedAdder.rcccx`](qiskit.circuit.library.WeightedAdder.rcccx "qiskit.circuit.library.WeightedAdder.rcccx")(control\_qubit1, …)                                               | Apply [`RC3XGate`](qiskit.circuit.library.RC3XGate "qiskit.circuit.library.RC3XGate").                       |
| [`WeightedAdder.rccx`](qiskit.circuit.library.WeightedAdder.rccx "qiskit.circuit.library.WeightedAdder.rccx")(control\_qubit1, …)                                                  | Apply [`RCCXGate`](qiskit.circuit.library.RCCXGate "qiskit.circuit.library.RCCXGate").                       |
| [`WeightedAdder.remove_final_measurements`](qiskit.circuit.library.WeightedAdder.remove_final_measurements "qiskit.circuit.library.WeightedAdder.remove_final_measurements")(\[…]) | Removes final measurement on all qubits if they are present.                                                 |
| [`WeightedAdder.reset`](qiskit.circuit.library.WeightedAdder.reset "qiskit.circuit.library.WeightedAdder.reset")(qubit)                                                            | Reset q.                                                                                                     |
| [`WeightedAdder.rx`](qiskit.circuit.library.WeightedAdder.rx "qiskit.circuit.library.WeightedAdder.rx")(theta, qubit, \*\[, label, q])                                             | Apply [`RXGate`](qiskit.circuit.library.RXGate "qiskit.circuit.library.RXGate").                             |
| [`WeightedAdder.rxx`](qiskit.circuit.library.WeightedAdder.rxx "qiskit.circuit.library.WeightedAdder.rxx")(theta, qubit1, qubit2)                                                  | Apply [`RXXGate`](qiskit.circuit.library.RXXGate "qiskit.circuit.library.RXXGate").                          |
| [`WeightedAdder.ry`](qiskit.circuit.library.WeightedAdder.ry "qiskit.circuit.library.WeightedAdder.ry")(theta, qubit, \*\[, label, q])                                             | Apply [`RYGate`](qiskit.circuit.library.RYGate "qiskit.circuit.library.RYGate").                             |
| [`WeightedAdder.ryy`](qiskit.circuit.library.WeightedAdder.ryy "qiskit.circuit.library.WeightedAdder.ryy")(theta, qubit1, qubit2)                                                  | Apply [`RYYGate`](qiskit.circuit.library.RYYGate "qiskit.circuit.library.RYYGate").                          |
| [`WeightedAdder.rz`](qiskit.circuit.library.WeightedAdder.rz "qiskit.circuit.library.WeightedAdder.rz")(phi, qubit, \*\[, q])                                                      | Apply [`RZGate`](qiskit.circuit.library.RZGate "qiskit.circuit.library.RZGate").                             |
| [`WeightedAdder.rzx`](qiskit.circuit.library.WeightedAdder.rzx "qiskit.circuit.library.WeightedAdder.rzx")(theta, qubit1, qubit2)                                                  | Apply [`RZXGate`](qiskit.circuit.library.RZXGate "qiskit.circuit.library.RZXGate").                          |
| [`WeightedAdder.rzz`](qiskit.circuit.library.WeightedAdder.rzz "qiskit.circuit.library.WeightedAdder.rzz")(theta, qubit1, qubit2)                                                  | Apply [`RZZGate`](qiskit.circuit.library.RZZGate "qiskit.circuit.library.RZZGate").                          |
| [`WeightedAdder.s`](qiskit.circuit.library.WeightedAdder.s "qiskit.circuit.library.WeightedAdder.s")(qubit, \*\[, q])                                                              | Apply [`SGate`](qiskit.circuit.library.SGate "qiskit.circuit.library.SGate").                                |
| [`WeightedAdder.sdg`](qiskit.circuit.library.WeightedAdder.sdg "qiskit.circuit.library.WeightedAdder.sdg")(qubit, \*\[, q])                                                        | Apply [`SdgGate`](qiskit.circuit.library.SdgGate "qiskit.circuit.library.SdgGate").                          |
| [`WeightedAdder.size`](qiskit.circuit.library.WeightedAdder.size "qiskit.circuit.library.WeightedAdder.size")()                                                                    | Returns total number of gate operations in circuit.                                                          |
| [`WeightedAdder.snapshot`](qiskit.circuit.library.WeightedAdder.snapshot "qiskit.circuit.library.WeightedAdder.snapshot")(label\[, …])                                             | Take a statevector snapshot of the internal simulator representation.                                        |
| [`WeightedAdder.snapshot_density_matrix`](qiskit.circuit.library.WeightedAdder.snapshot_density_matrix "qiskit.circuit.library.WeightedAdder.snapshot_density_matrix")(label)      | Take a density matrix snapshot of simulator state.                                                           |
| [`WeightedAdder.snapshot_expectation_value`](qiskit.circuit.library.WeightedAdder.snapshot_expectation_value "qiskit.circuit.library.WeightedAdder.snapshot_expectation_value")(…) | Take a snapshot of expectation value \<O> of an Operator.                                                    |
| [`WeightedAdder.snapshot_probabilities`](qiskit.circuit.library.WeightedAdder.snapshot_probabilities "qiskit.circuit.library.WeightedAdder.snapshot_probabilities")(label, …)      | Take a probability snapshot of the simulator state.                                                          |
| [`WeightedAdder.snapshot_stabilizer`](qiskit.circuit.library.WeightedAdder.snapshot_stabilizer "qiskit.circuit.library.WeightedAdder.snapshot_stabilizer")(label)                  | Take a stabilizer snapshot of the simulator state.                                                           |
| [`WeightedAdder.snapshot_statevector`](qiskit.circuit.library.WeightedAdder.snapshot_statevector "qiskit.circuit.library.WeightedAdder.snapshot_statevector")(label)               | Take a statevector snapshot of the simulator state.                                                          |
| [`WeightedAdder.squ`](qiskit.circuit.library.WeightedAdder.squ "qiskit.circuit.library.WeightedAdder.squ")(unitary\_matrix, qubit\[, …])                                           | Decompose an arbitrary 2\*2 unitary into three rotation gates.                                               |
| [`WeightedAdder.swap`](qiskit.circuit.library.WeightedAdder.swap "qiskit.circuit.library.WeightedAdder.swap")(qubit1, qubit2)                                                      | Apply [`SwapGate`](qiskit.circuit.library.SwapGate "qiskit.circuit.library.SwapGate").                       |
| [`WeightedAdder.t`](qiskit.circuit.library.WeightedAdder.t "qiskit.circuit.library.WeightedAdder.t")(qubit, \*\[, q])                                                              | Apply [`TGate`](qiskit.circuit.library.TGate "qiskit.circuit.library.TGate").                                |
| [`WeightedAdder.tdg`](qiskit.circuit.library.WeightedAdder.tdg "qiskit.circuit.library.WeightedAdder.tdg")(qubit, \*\[, q])                                                        | Apply [`TdgGate`](qiskit.circuit.library.TdgGate "qiskit.circuit.library.TdgGate").                          |
| [`WeightedAdder.to_gate`](qiskit.circuit.library.WeightedAdder.to_gate "qiskit.circuit.library.WeightedAdder.to_gate")(\[parameter\_map])                                          | Create a Gate out of this circuit.                                                                           |
| [`WeightedAdder.to_instruction`](qiskit.circuit.library.WeightedAdder.to_instruction "qiskit.circuit.library.WeightedAdder.to_instruction")(\[parameter\_map])                     | Create an Instruction out of this circuit.                                                                   |
| [`WeightedAdder.toffoli`](qiskit.circuit.library.WeightedAdder.toffoli "qiskit.circuit.library.WeightedAdder.toffoli")(control\_qubit1, …\[, …])                                   | Apply [`CCXGate`](qiskit.circuit.library.CCXGate "qiskit.circuit.library.CCXGate").                          |
| [`WeightedAdder.u1`](qiskit.circuit.library.WeightedAdder.u1 "qiskit.circuit.library.WeightedAdder.u1")(theta, qubit, \*\[, q])                                                    | Apply [`U1Gate`](qiskit.circuit.library.U1Gate "qiskit.circuit.library.U1Gate").                             |
| [`WeightedAdder.u2`](qiskit.circuit.library.WeightedAdder.u2 "qiskit.circuit.library.WeightedAdder.u2")(phi, lam, qubit, \*\[, q])                                                 | Apply [`U2Gate`](qiskit.circuit.library.U2Gate "qiskit.circuit.library.U2Gate").                             |
| [`WeightedAdder.u3`](qiskit.circuit.library.WeightedAdder.u3 "qiskit.circuit.library.WeightedAdder.u3")(theta, phi, lam, qubit, \*)                                                | Apply [`U3Gate`](qiskit.circuit.library.U3Gate "qiskit.circuit.library.U3Gate").                             |
| [`WeightedAdder.uc`](qiskit.circuit.library.WeightedAdder.uc "qiskit.circuit.library.WeightedAdder.uc")(gate\_list, q\_controls, q\_target)                                        | Attach a uniformly controlled gates (also called multiplexed gates) to a circuit.                            |
| [`WeightedAdder.ucg`](qiskit.circuit.library.WeightedAdder.ucg "qiskit.circuit.library.WeightedAdder.ucg")(angle\_list, q\_controls, …)                                            | Deprecated version of uc.                                                                                    |
| [`WeightedAdder.ucrx`](qiskit.circuit.library.WeightedAdder.ucrx "qiskit.circuit.library.WeightedAdder.ucrx")(angle\_list, q\_controls, …)                                         | Attach a uniformly controlled (also called multiplexed) Rx rotation gate to a circuit.                       |
| [`WeightedAdder.ucry`](qiskit.circuit.library.WeightedAdder.ucry "qiskit.circuit.library.WeightedAdder.ucry")(angle\_list, q\_controls, …)                                         | Attach a uniformly controlled (also called multiplexed) Ry rotation gate to a circuit.                       |
| [`WeightedAdder.ucrz`](qiskit.circuit.library.WeightedAdder.ucrz "qiskit.circuit.library.WeightedAdder.ucrz")(angle\_list, q\_controls, …)                                         | Attach a uniformly controlled (also called multiplexed gates) Rz rotation gate to a circuit.                 |
| [`WeightedAdder.ucx`](qiskit.circuit.library.WeightedAdder.ucx "qiskit.circuit.library.WeightedAdder.ucx")(angle\_list, q\_controls, …)                                            | Deprecated version of ucrx.                                                                                  |
| [`WeightedAdder.ucy`](qiskit.circuit.library.WeightedAdder.ucy "qiskit.circuit.library.WeightedAdder.ucy")(angle\_list, q\_controls, …)                                            | Deprecated version of ucry.                                                                                  |
| [`WeightedAdder.ucz`](qiskit.circuit.library.WeightedAdder.ucz "qiskit.circuit.library.WeightedAdder.ucz")(angle\_list, q\_controls, …)                                            | Deprecated version of ucrz.                                                                                  |
| [`WeightedAdder.unitary`](qiskit.circuit.library.WeightedAdder.unitary "qiskit.circuit.library.WeightedAdder.unitary")(obj, qubits\[, label])                                      | Apply unitary gate to q.                                                                                     |
| [`WeightedAdder.width`](qiskit.circuit.library.WeightedAdder.width "qiskit.circuit.library.WeightedAdder.width")()                                                                 | Return number of qubits plus clbits in circuit.                                                              |
| [`WeightedAdder.x`](qiskit.circuit.library.WeightedAdder.x "qiskit.circuit.library.WeightedAdder.x")(qubit, \*\[, label, ctrl\_state, q])                                          | Apply [`XGate`](qiskit.circuit.library.XGate "qiskit.circuit.library.XGate").                                |
| [`WeightedAdder.y`](qiskit.circuit.library.WeightedAdder.y "qiskit.circuit.library.WeightedAdder.y")(qubit, \*\[, q])                                                              | Apply [`YGate`](qiskit.circuit.library.YGate "qiskit.circuit.library.YGate").                                |
| [`WeightedAdder.z`](qiskit.circuit.library.WeightedAdder.z "qiskit.circuit.library.WeightedAdder.z")(qubit, \*\[, q])                                                              | Apply [`ZGate`](qiskit.circuit.library.ZGate "qiskit.circuit.library.ZGate").                                |
| [`WeightedAdder.__getitem__`](qiskit.circuit.library.WeightedAdder.__getitem__ "qiskit.circuit.library.WeightedAdder.__getitem__")(item)                                           | Return indexed operation.                                                                                    |
| [`WeightedAdder.__len__`](qiskit.circuit.library.WeightedAdder.__len__ "qiskit.circuit.library.WeightedAdder.__len__")()                                                           | Return number of operations in circuit.                                                                      |

