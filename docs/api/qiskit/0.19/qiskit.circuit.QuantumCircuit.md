---
title: QuantumCircuit
description: API reference for qiskit.circuit.QuantumCircuit
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.QuantumCircuit
---

# QuantumCircuit

<span id="qiskit.circuit.QuantumCircuit" />

`QuantumCircuit(*regs, name=None)`

Create a new circuit.

A circuit is a list of instructions bound to some registers.

**Parameters**

*   **regs** –

    list(`Register`) or list(`int`) The registers to be included in the circuit.

    > *   If a list of `Register` objects, represents the [`QuantumRegister`](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister") and/or [`ClassicalRegister`](qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister") objects to include in the circuit.
    >
    > For example:
    >
    > *   `QuantumCircuit(QuantumRegister(4))`
    > *   `QuantumCircuit(QuantumRegister(4), ClassicalRegister(3))`
    > *   `QuantumCircuit(QuantumRegister(4, 'qr0'), QuantumRegister(2, 'qr1'))`
    > *   If a list of `int`, the amount of qubits and/or classical bits to include in the circuit. It can either be a single int for just the number of quantum bits, or 2 ints for the number of quantum bits and classical bits, respectively.
    >
    > For example:
    >
    > *   `QuantumCircuit(4) # A QuantumCircuit with 4 qubits`
    > *   `QuantumCircuit(4, 3) # A QuantumCircuit with 4 qubits and 3 classical bits`

*   **name** (*str*) – the name of the quantum circuit. If not set, an automatically generated string will be assigned.

**Raises**

**CircuitError** – if the circuit name, if given, is not valid.

## Examples

Construct a simple Bell state circuit.

```python
from qiskit import QuantumCircuit

qc = QuantumCircuit(2, 2)
qc.h(0)
qc.cx(0, 1)
qc.measure([0, 1], [0, 1])
qc.draw()
```

```python
     ┌───┐     ┌─┐   
q_0: ┤ H ├──■──┤M├───
     └───┘┌─┴─┐└╥┘┌─┐
q_1: ─────┤ X ├─╫─┤M├
          └───┘ ║ └╥┘
c_0: ═══════════╩══╬═
                   ║ 
c_1: ══════════════╩═
                     
```

Construct a 5-qubit GHZ circuit.

```python
from qiskit import QuantumCircuit

qc = QuantumCircuit(5)
qc.h(0)
qc.cx(0, range(1, 5))
qc.measure_all()
```

Construct a 4-qubit Berstein-Vazirani circuit using registers.

```python
from qiskit import QuantumRegister, ClassicalRegister, QuantumCircuit

qr = QuantumRegister(3, 'q')
anc = QuantumRegister(1, 'ancilla')
cr = ClassicalRegister(3, 'c')
qc = QuantumCircuit(qr, anc, cr)

qc.x(anc[0])
qc.h(anc[0])
qc.h(qr[0:3])
qc.cx(qr[0:3], anc[0])
qc.h(qr[0:3])
qc.barrier(qr)
qc.measure(qr, cr)

qc.draw()
```

```python
           ┌───┐          ┌───┐           ░ ┌─┐      
      q_0: ┤ H ├───────■──┤ H ├───────────░─┤M├──────
           ├───┤       │  └───┘┌───┐      ░ └╥┘┌─┐   
      q_1: ┤ H ├───────┼────■──┤ H ├──────░──╫─┤M├───
           ├───┤       │    │  └───┘┌───┐ ░  ║ └╥┘┌─┐
      q_2: ┤ H ├───────┼────┼────■──┤ H ├─░──╫──╫─┤M├
           ├───┤┌───┐┌─┴─┐┌─┴─┐┌─┴─┐└───┘ ░  ║  ║ └╥┘
ancilla_0: ┤ X ├┤ H ├┤ X ├┤ X ├┤ X ├─────────╫──╫──╫─
           └───┘└───┘└───┘└───┘└───┘         ║  ║  ║ 
      c_0: ══════════════════════════════════╩══╬══╬═
                                                ║  ║ 
      c_1: ═════════════════════════════════════╩══╬═
                                                   ║ 
      c_2: ════════════════════════════════════════╩═
                                                     
```

## Attributes

|                                                                                                                                |                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| [`QuantumCircuit.clbits`](qiskit.circuit.QuantumCircuit.clbits "qiskit.circuit.QuantumCircuit.clbits")                         | Returns a list of classical bits in the order that the registers were added. |
| [`QuantumCircuit.data`](qiskit.circuit.QuantumCircuit.data "qiskit.circuit.QuantumCircuit.data")                               | Return the circuit data (instructions and context).                          |
| [`QuantumCircuit.extension_lib`](qiskit.circuit.QuantumCircuit.extension_lib "qiskit.circuit.QuantumCircuit.extension_lib")    |                                                                              |
| [`QuantumCircuit.header`](qiskit.circuit.QuantumCircuit.header "qiskit.circuit.QuantumCircuit.header")                         |                                                                              |
| [`QuantumCircuit.instances`](qiskit.circuit.QuantumCircuit.instances "qiskit.circuit.QuantumCircuit.instances")                |                                                                              |
| [`QuantumCircuit.n_qubits`](qiskit.circuit.QuantumCircuit.n_qubits "qiskit.circuit.QuantumCircuit.n_qubits")                   | Deprecated, use `num_qubits` instead.                                        |
| [`QuantumCircuit.num_clbits`](qiskit.circuit.QuantumCircuit.num_clbits "qiskit.circuit.QuantumCircuit.num_clbits")             | Return number of classical bits.                                             |
| [`QuantumCircuit.num_parameters`](qiskit.circuit.QuantumCircuit.num_parameters "qiskit.circuit.QuantumCircuit.num_parameters") | Convenience function to get the number of parameter objects in the circuit.  |
| [`QuantumCircuit.num_qubits`](qiskit.circuit.QuantumCircuit.num_qubits "qiskit.circuit.QuantumCircuit.num_qubits")             | Return number of qubits.                                                     |
| [`QuantumCircuit.parameters`](qiskit.circuit.QuantumCircuit.parameters "qiskit.circuit.QuantumCircuit.parameters")             | Convenience function to get the parameters defined in the parameter table.   |
| [`QuantumCircuit.prefix`](qiskit.circuit.QuantumCircuit.prefix "qiskit.circuit.QuantumCircuit.prefix")                         |                                                                              |
| [`QuantumCircuit.qubits`](qiskit.circuit.QuantumCircuit.qubits "qiskit.circuit.QuantumCircuit.qubits")                         | Returns a list of quantum bits in the order that the registers were added.   |

## Methods

|                                                                                                                                                                       |                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| [`QuantumCircuit.AND`](qiskit.circuit.QuantumCircuit.AND "qiskit.circuit.QuantumCircuit.AND")(qr\_variables, qb\_target, …)                                           | Build a collective conjunction (AND) circuit in place using mct.                                             |
| [`QuantumCircuit.OR`](qiskit.circuit.QuantumCircuit.OR "qiskit.circuit.QuantumCircuit.OR")(qr\_variables, qb\_target, …)                                              | Build a collective disjunction (OR) circuit in place using mct.                                              |
| [`QuantumCircuit.__getitem__`](qiskit.circuit.QuantumCircuit.__getitem__ "qiskit.circuit.QuantumCircuit.__getitem__")(item)                                           | Return indexed operation.                                                                                    |
| [`QuantumCircuit.__len__`](qiskit.circuit.QuantumCircuit.__len__ "qiskit.circuit.QuantumCircuit.__len__")()                                                           | Return number of operations in circuit.                                                                      |
| [`QuantumCircuit.add_register`](qiskit.circuit.QuantumCircuit.add_register "qiskit.circuit.QuantumCircuit.add_register")(\*regs)                                      | Add registers.                                                                                               |
| [`QuantumCircuit.append`](qiskit.circuit.QuantumCircuit.append "qiskit.circuit.QuantumCircuit.append")(instruction\[, qargs, …])                                      | Append one or more instructions to the end of the circuit, modifying the circuit in place.                   |
| [`QuantumCircuit.assign_parameters`](qiskit.circuit.QuantumCircuit.assign_parameters "qiskit.circuit.QuantumCircuit.assign_parameters")(param\_dict)                  | Assign parameters to new parameters or values.                                                               |
| [`QuantumCircuit.barrier`](qiskit.circuit.QuantumCircuit.barrier "qiskit.circuit.QuantumCircuit.barrier")(\*qargs)                                                    | Apply `Barrier`.                                                                                             |
| [`QuantumCircuit.bind_parameters`](qiskit.circuit.QuantumCircuit.bind_parameters "qiskit.circuit.QuantumCircuit.bind_parameters")(value\_dict)                        | Assign numeric parameters to values yielding a new circuit.                                                  |
| [`QuantumCircuit.cast`](qiskit.circuit.QuantumCircuit.cast "qiskit.circuit.QuantumCircuit.cast")(value, \_type)                                                       | Best effort to cast value to type.                                                                           |
| [`QuantumCircuit.cbit_argument_conversion`](qiskit.circuit.QuantumCircuit.cbit_argument_conversion "qiskit.circuit.QuantumCircuit.cbit_argument_conversion")(…)       | Converts several classical bit representations (such as indexes, range, etc.) into a list of classical bits. |
| [`QuantumCircuit.ccx`](qiskit.circuit.QuantumCircuit.ccx "qiskit.circuit.QuantumCircuit.ccx")(control\_qubit1, …\[, …])                                               | Apply [`CCXGate`](qiskit.circuit.library.CCXGate "qiskit.circuit.library.CCXGate").                          |
| [`QuantumCircuit.ch`](qiskit.circuit.QuantumCircuit.ch "qiskit.circuit.QuantumCircuit.ch")(control\_qubit, target\_qubit, \*)                                         | Apply [`CHGate`](qiskit.circuit.library.CHGate "qiskit.circuit.library.CHGate").                             |
| [`QuantumCircuit.cls_instances`](qiskit.circuit.QuantumCircuit.cls_instances "qiskit.circuit.QuantumCircuit.cls_instances")()                                         | Return the current number of instances of this class, useful for auto naming.                                |
| [`QuantumCircuit.cls_prefix`](qiskit.circuit.QuantumCircuit.cls_prefix "qiskit.circuit.QuantumCircuit.cls_prefix")()                                                  | Return the prefix to use for auto naming.                                                                    |
| [`QuantumCircuit.cnot`](qiskit.circuit.QuantumCircuit.cnot "qiskit.circuit.QuantumCircuit.cnot")(control\_qubit, …\[, …])                                             | Apply [`CXGate`](qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate").                             |
| [`QuantumCircuit.combine`](qiskit.circuit.QuantumCircuit.combine "qiskit.circuit.QuantumCircuit.combine")(rhs)                                                        | Append rhs to self if self contains compatible registers.                                                    |
| [`QuantumCircuit.compose`](qiskit.circuit.QuantumCircuit.compose "qiskit.circuit.QuantumCircuit.compose")(other\[, qubits, …])                                        | Compose circuit with `other` circuit or instruction, optionally permuting wires.                             |
| [`QuantumCircuit.copy`](qiskit.circuit.QuantumCircuit.copy "qiskit.circuit.QuantumCircuit.copy")(\[name])                                                             | Copy the circuit.                                                                                            |
| [`QuantumCircuit.count_ops`](qiskit.circuit.QuantumCircuit.count_ops "qiskit.circuit.QuantumCircuit.count_ops")()                                                     | Count each operation kind in the circuit.                                                                    |
| [`QuantumCircuit.crx`](qiskit.circuit.QuantumCircuit.crx "qiskit.circuit.QuantumCircuit.crx")(theta, control\_qubit, …)                                               | Apply [`CRXGate`](qiskit.circuit.library.CRXGate "qiskit.circuit.library.CRXGate").                          |
| [`QuantumCircuit.cry`](qiskit.circuit.QuantumCircuit.cry "qiskit.circuit.QuantumCircuit.cry")(theta, control\_qubit, …)                                               | Apply [`CRYGate`](qiskit.circuit.library.CRYGate "qiskit.circuit.library.CRYGate").                          |
| [`QuantumCircuit.crz`](qiskit.circuit.QuantumCircuit.crz "qiskit.circuit.QuantumCircuit.crz")(theta, control\_qubit, …)                                               | Apply [`CRZGate`](qiskit.circuit.library.CRZGate "qiskit.circuit.library.CRZGate").                          |
| [`QuantumCircuit.cswap`](qiskit.circuit.QuantumCircuit.cswap "qiskit.circuit.QuantumCircuit.cswap")(control\_qubit, …\[, …])                                          | Apply [`CSwapGate`](qiskit.circuit.library.CSwapGate "qiskit.circuit.library.CSwapGate").                    |
| [`QuantumCircuit.cu1`](qiskit.circuit.QuantumCircuit.cu1 "qiskit.circuit.QuantumCircuit.cu1")(theta, control\_qubit, …)                                               | Apply [`CU1Gate`](qiskit.circuit.library.CU1Gate "qiskit.circuit.library.CU1Gate").                          |
| [`QuantumCircuit.cu3`](qiskit.circuit.QuantumCircuit.cu3 "qiskit.circuit.QuantumCircuit.cu3")(theta, phi, lam, …\[, …])                                               | Apply [`CU3Gate`](qiskit.circuit.library.CU3Gate "qiskit.circuit.library.CU3Gate").                          |
| [`QuantumCircuit.cx`](qiskit.circuit.QuantumCircuit.cx "qiskit.circuit.QuantumCircuit.cx")(control\_qubit, target\_qubit, \*)                                         | Apply [`CXGate`](qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate").                             |
| [`QuantumCircuit.cy`](qiskit.circuit.QuantumCircuit.cy "qiskit.circuit.QuantumCircuit.cy")(control\_qubit, target\_qubit, \*)                                         | Apply [`CYGate`](qiskit.circuit.library.CYGate "qiskit.circuit.library.CYGate").                             |
| [`QuantumCircuit.cz`](qiskit.circuit.QuantumCircuit.cz "qiskit.circuit.QuantumCircuit.cz")(control\_qubit, target\_qubit, \*)                                         | Apply [`CZGate`](qiskit.circuit.library.CZGate "qiskit.circuit.library.CZGate").                             |
| [`QuantumCircuit.dcx`](qiskit.circuit.QuantumCircuit.dcx "qiskit.circuit.QuantumCircuit.dcx")(qubit1, qubit2)                                                         | Apply [`DCXGate`](qiskit.circuit.library.DCXGate "qiskit.circuit.library.DCXGate").                          |
| [`QuantumCircuit.decompose`](qiskit.circuit.QuantumCircuit.decompose "qiskit.circuit.QuantumCircuit.decompose")()                                                     | Call a decomposition pass on this circuit, to decompose one level (shallow decompose).                       |
| [`QuantumCircuit.depth`](qiskit.circuit.QuantumCircuit.depth "qiskit.circuit.QuantumCircuit.depth")()                                                                 | Return circuit depth (i.e., length of critical path).                                                        |
| [`QuantumCircuit.diag_gate`](qiskit.circuit.QuantumCircuit.diag_gate "qiskit.circuit.QuantumCircuit.diag_gate")(diag, qubit)                                          | Deprecated version of QuantumCircuit.diagonal.                                                               |
| [`QuantumCircuit.diagonal`](qiskit.circuit.QuantumCircuit.diagonal "qiskit.circuit.QuantumCircuit.diagonal")(diag, qubit)                                             | Attach a diagonal gate to a circuit.                                                                         |
| [`QuantumCircuit.draw`](qiskit.circuit.QuantumCircuit.draw "qiskit.circuit.QuantumCircuit.draw")(\[output, scale, …])                                                 | Draw the quantum circuit.                                                                                    |
| [`QuantumCircuit.extend`](qiskit.circuit.QuantumCircuit.extend "qiskit.circuit.QuantumCircuit.extend")(rhs)                                                           | Append QuantumCircuit to the right hand side if it contains compatible registers.                            |
| [`QuantumCircuit.fredkin`](qiskit.circuit.QuantumCircuit.fredkin "qiskit.circuit.QuantumCircuit.fredkin")(control\_qubit, …\[, …])                                    | Apply [`CSwapGate`](qiskit.circuit.library.CSwapGate "qiskit.circuit.library.CSwapGate").                    |
| [`QuantumCircuit.from_qasm_file`](qiskit.circuit.QuantumCircuit.from_qasm_file "qiskit.circuit.QuantumCircuit.from_qasm_file")(path)                                  | Take in a QASM file and generate a QuantumCircuit object.                                                    |
| [`QuantumCircuit.from_qasm_str`](qiskit.circuit.QuantumCircuit.from_qasm_str "qiskit.circuit.QuantumCircuit.from_qasm_str")(qasm\_str)                                | Take in a QASM string and generate a QuantumCircuit object.                                                  |
| [`QuantumCircuit.h`](qiskit.circuit.QuantumCircuit.h "qiskit.circuit.QuantumCircuit.h")(qubit, \*\[, q])                                                              | Apply [`HGate`](qiskit.circuit.library.HGate "qiskit.circuit.library.HGate").                                |
| [`QuantumCircuit.hamiltonian`](qiskit.circuit.QuantumCircuit.hamiltonian "qiskit.circuit.QuantumCircuit.hamiltonian")(operator, time, …)                              | Apply hamiltonian evolution to to qubits.                                                                    |
| [`QuantumCircuit.has_register`](qiskit.circuit.QuantumCircuit.has_register "qiskit.circuit.QuantumCircuit.has_register")(register)                                    | Test if this circuit has the register r.                                                                     |
| [`QuantumCircuit.i`](qiskit.circuit.QuantumCircuit.i "qiskit.circuit.QuantumCircuit.i")(qubit, \*\[, q])                                                              | Apply [`IGate`](qiskit.circuit.library.IGate "qiskit.circuit.library.IGate").                                |
| [`QuantumCircuit.id`](qiskit.circuit.QuantumCircuit.id "qiskit.circuit.QuantumCircuit.id")(qubit, \*\[, q])                                                           | Apply [`IGate`](qiskit.circuit.library.IGate "qiskit.circuit.library.IGate").                                |
| [`QuantumCircuit.iden`](qiskit.circuit.QuantumCircuit.iden "qiskit.circuit.QuantumCircuit.iden")(qubit, \*\[, q])                                                     | Deprecated identity gate.                                                                                    |
| [`QuantumCircuit.initialize`](qiskit.circuit.QuantumCircuit.initialize "qiskit.circuit.QuantumCircuit.initialize")(params, qubits)                                    | Apply initialize to circuit.                                                                                 |
| [`QuantumCircuit.inverse`](qiskit.circuit.QuantumCircuit.inverse "qiskit.circuit.QuantumCircuit.inverse")()                                                           | Invert this circuit.                                                                                         |
| [`QuantumCircuit.iso`](qiskit.circuit.QuantumCircuit.iso "qiskit.circuit.QuantumCircuit.iso")(isometry, q\_input, …\[, …])                                            | Attach an arbitrary isometry from m to n qubits to a circuit.                                                |
| [`QuantumCircuit.isometry`](qiskit.circuit.QuantumCircuit.isometry "qiskit.circuit.QuantumCircuit.isometry")(isometry, q\_input, …)                                   | Attach an arbitrary isometry from m to n qubits to a circuit.                                                |
| [`QuantumCircuit.iswap`](qiskit.circuit.QuantumCircuit.iswap "qiskit.circuit.QuantumCircuit.iswap")(qubit1, qubit2)                                                   | Apply [`iSwapGate`](qiskit.circuit.library.iSwapGate "qiskit.circuit.library.iSwapGate").                    |
| [`QuantumCircuit.mcmt`](qiskit.circuit.QuantumCircuit.mcmt "qiskit.circuit.QuantumCircuit.mcmt")(gate, control\_qubits, …)                                            | Apply a multi-control, multi-target using a generic gate.                                                    |
| [`QuantumCircuit.mcrx`](qiskit.circuit.QuantumCircuit.mcrx "qiskit.circuit.QuantumCircuit.mcrx")(theta, q\_controls, q\_target)                                       | Apply Multiple-Controlled X rotation gate                                                                    |
| [`QuantumCircuit.mcry`](qiskit.circuit.QuantumCircuit.mcry "qiskit.circuit.QuantumCircuit.mcry")(theta, q\_controls, …)                                               | Apply Multiple-Controlled Y rotation gate                                                                    |
| [`QuantumCircuit.mcrz`](qiskit.circuit.QuantumCircuit.mcrz "qiskit.circuit.QuantumCircuit.mcrz")(lam, q\_controls, q\_target)                                         | Apply Multiple-Controlled Z rotation gate                                                                    |
| [`QuantumCircuit.mct`](qiskit.circuit.QuantumCircuit.mct "qiskit.circuit.QuantumCircuit.mct")(control\_qubits, target\_qubit)                                         | Apply `MCXGate`.                                                                                             |
| [`QuantumCircuit.mcu1`](qiskit.circuit.QuantumCircuit.mcu1 "qiskit.circuit.QuantumCircuit.mcu1")(lam, control\_qubits, …)                                             | Apply `MCU1Gate`.                                                                                            |
| [`QuantumCircuit.mcx`](qiskit.circuit.QuantumCircuit.mcx "qiskit.circuit.QuantumCircuit.mcx")(control\_qubits, target\_qubit)                                         | Apply `MCXGate`.                                                                                             |
| [`QuantumCircuit.measure`](qiskit.circuit.QuantumCircuit.measure "qiskit.circuit.QuantumCircuit.measure")(qubit, cbit)                                                | Measure quantum bit into classical bit (tuples).                                                             |
| [`QuantumCircuit.measure_active`](qiskit.circuit.QuantumCircuit.measure_active "qiskit.circuit.QuantumCircuit.measure_active")(\[inplace])                            | Adds measurement to all non-idle qubits.                                                                     |
| [`QuantumCircuit.measure_all`](qiskit.circuit.QuantumCircuit.measure_all "qiskit.circuit.QuantumCircuit.measure_all")(\[inplace])                                     | Adds measurement to all qubits.                                                                              |
| [`QuantumCircuit.mirror`](qiskit.circuit.QuantumCircuit.mirror "qiskit.circuit.QuantumCircuit.mirror")()                                                              | Mirror the circuit by reversing the instructions.                                                            |
| [`QuantumCircuit.ms`](qiskit.circuit.QuantumCircuit.ms "qiskit.circuit.QuantumCircuit.ms")(theta, qubits)                                                             | Apply [`MSGate`](qiskit.circuit.library.MSGate "qiskit.circuit.library.MSGate").                             |
| [`QuantumCircuit.num_connected_components`](qiskit.circuit.QuantumCircuit.num_connected_components "qiskit.circuit.QuantumCircuit.num_connected_components")(\[…])    | How many non-entangled subcircuits can the circuit be factored to.                                           |
| [`QuantumCircuit.num_nonlocal_gates`](qiskit.circuit.QuantumCircuit.num_nonlocal_gates "qiskit.circuit.QuantumCircuit.num_nonlocal_gates")()                          | Return number of non-local gates (i.e.                                                                       |
| [`QuantumCircuit.num_tensor_factors`](qiskit.circuit.QuantumCircuit.num_tensor_factors "qiskit.circuit.QuantumCircuit.num_tensor_factors")()                          | Computes the number of tensor factors in the unitary (quantum) part of the circuit only.                     |
| [`QuantumCircuit.num_unitary_factors`](qiskit.circuit.QuantumCircuit.num_unitary_factors "qiskit.circuit.QuantumCircuit.num_unitary_factors")()                       | Computes the number of tensor factors in the unitary (quantum) part of the circuit only.                     |
| [`QuantumCircuit.qasm`](qiskit.circuit.QuantumCircuit.qasm "qiskit.circuit.QuantumCircuit.qasm")(\[formatted, filename])                                              | Return OpenQASM string.                                                                                      |
| [`QuantumCircuit.qbit_argument_conversion`](qiskit.circuit.QuantumCircuit.qbit_argument_conversion "qiskit.circuit.QuantumCircuit.qbit_argument_conversion")(…)       | Converts several qubit representations (such as indexes, range, etc.) into a list of qubits.                 |
| [`QuantumCircuit.r`](qiskit.circuit.QuantumCircuit.r "qiskit.circuit.QuantumCircuit.r")(theta, phi, qubit, \*\[, q])                                                  | Apply `RGate`.                                                                                               |
| [`QuantumCircuit.rcccx`](qiskit.circuit.QuantumCircuit.rcccx "qiskit.circuit.QuantumCircuit.rcccx")(control\_qubit1, …)                                               | Apply [`RC3XGate`](qiskit.circuit.library.RC3XGate "qiskit.circuit.library.RC3XGate").                       |
| [`QuantumCircuit.rccx`](qiskit.circuit.QuantumCircuit.rccx "qiskit.circuit.QuantumCircuit.rccx")(control\_qubit1, …)                                                  | Apply [`RCCXGate`](qiskit.circuit.library.RCCXGate "qiskit.circuit.library.RCCXGate").                       |
| [`QuantumCircuit.remove_final_measurements`](qiskit.circuit.QuantumCircuit.remove_final_measurements "qiskit.circuit.QuantumCircuit.remove_final_measurements")(\[…]) | Removes final measurement on all qubits if they are present.                                                 |
| [`QuantumCircuit.reset`](qiskit.circuit.QuantumCircuit.reset "qiskit.circuit.QuantumCircuit.reset")(qubit)                                                            | Reset q.                                                                                                     |
| [`QuantumCircuit.rx`](qiskit.circuit.QuantumCircuit.rx "qiskit.circuit.QuantumCircuit.rx")(theta, qubit, \*\[, label, q])                                             | Apply [`RXGate`](qiskit.circuit.library.RXGate "qiskit.circuit.library.RXGate").                             |
| [`QuantumCircuit.rxx`](qiskit.circuit.QuantumCircuit.rxx "qiskit.circuit.QuantumCircuit.rxx")(theta, qubit1, qubit2)                                                  | Apply [`RXXGate`](qiskit.circuit.library.RXXGate "qiskit.circuit.library.RXXGate").                          |
| [`QuantumCircuit.ry`](qiskit.circuit.QuantumCircuit.ry "qiskit.circuit.QuantumCircuit.ry")(theta, qubit, \*\[, label, q])                                             | Apply [`RYGate`](qiskit.circuit.library.RYGate "qiskit.circuit.library.RYGate").                             |
| [`QuantumCircuit.ryy`](qiskit.circuit.QuantumCircuit.ryy "qiskit.circuit.QuantumCircuit.ryy")(theta, qubit1, qubit2)                                                  | Apply [`RYYGate`](qiskit.circuit.library.RYYGate "qiskit.circuit.library.RYYGate").                          |
| [`QuantumCircuit.rz`](qiskit.circuit.QuantumCircuit.rz "qiskit.circuit.QuantumCircuit.rz")(phi, qubit, \*\[, q])                                                      | Apply [`RZGate`](qiskit.circuit.library.RZGate "qiskit.circuit.library.RZGate").                             |
| [`QuantumCircuit.rzx`](qiskit.circuit.QuantumCircuit.rzx "qiskit.circuit.QuantumCircuit.rzx")(theta, qubit1, qubit2)                                                  | Apply [`RZXGate`](qiskit.circuit.library.RZXGate "qiskit.circuit.library.RZXGate").                          |
| [`QuantumCircuit.rzz`](qiskit.circuit.QuantumCircuit.rzz "qiskit.circuit.QuantumCircuit.rzz")(theta, qubit1, qubit2)                                                  | Apply [`RZZGate`](qiskit.circuit.library.RZZGate "qiskit.circuit.library.RZZGate").                          |
| [`QuantumCircuit.s`](qiskit.circuit.QuantumCircuit.s "qiskit.circuit.QuantumCircuit.s")(qubit, \*\[, q])                                                              | Apply [`SGate`](qiskit.circuit.library.SGate "qiskit.circuit.library.SGate").                                |
| [`QuantumCircuit.sdg`](qiskit.circuit.QuantumCircuit.sdg "qiskit.circuit.QuantumCircuit.sdg")(qubit, \*\[, q])                                                        | Apply [`SdgGate`](qiskit.circuit.library.SdgGate "qiskit.circuit.library.SdgGate").                          |
| [`QuantumCircuit.size`](qiskit.circuit.QuantumCircuit.size "qiskit.circuit.QuantumCircuit.size")()                                                                    | Returns total number of gate operations in circuit.                                                          |
| [`QuantumCircuit.snapshot`](qiskit.circuit.QuantumCircuit.snapshot "qiskit.circuit.QuantumCircuit.snapshot")(label\[, …])                                             | Take a statevector snapshot of the internal simulator representation.                                        |
| [`QuantumCircuit.snapshot_density_matrix`](qiskit.circuit.QuantumCircuit.snapshot_density_matrix "qiskit.circuit.QuantumCircuit.snapshot_density_matrix")(label)      | Take a density matrix snapshot of simulator state.                                                           |
| [`QuantumCircuit.snapshot_expectation_value`](qiskit.circuit.QuantumCircuit.snapshot_expectation_value "qiskit.circuit.QuantumCircuit.snapshot_expectation_value")(…) | Take a snapshot of expectation value \<O> of an Operator.                                                    |
| [`QuantumCircuit.snapshot_probabilities`](qiskit.circuit.QuantumCircuit.snapshot_probabilities "qiskit.circuit.QuantumCircuit.snapshot_probabilities")(label, …)      | Take a probability snapshot of the simulator state.                                                          |
| [`QuantumCircuit.snapshot_stabilizer`](qiskit.circuit.QuantumCircuit.snapshot_stabilizer "qiskit.circuit.QuantumCircuit.snapshot_stabilizer")(label)                  | Take a stabilizer snapshot of the simulator state.                                                           |
| [`QuantumCircuit.snapshot_statevector`](qiskit.circuit.QuantumCircuit.snapshot_statevector "qiskit.circuit.QuantumCircuit.snapshot_statevector")(label)               | Take a statevector snapshot of the simulator state.                                                          |
| [`QuantumCircuit.squ`](qiskit.circuit.QuantumCircuit.squ "qiskit.circuit.QuantumCircuit.squ")(unitary\_matrix, qubit\[, …])                                           | Decompose an arbitrary 2\*2 unitary into three rotation gates.                                               |
| [`QuantumCircuit.swap`](qiskit.circuit.QuantumCircuit.swap "qiskit.circuit.QuantumCircuit.swap")(qubit1, qubit2)                                                      | Apply [`SwapGate`](qiskit.circuit.library.SwapGate "qiskit.circuit.library.SwapGate").                       |
| [`QuantumCircuit.t`](qiskit.circuit.QuantumCircuit.t "qiskit.circuit.QuantumCircuit.t")(qubit, \*\[, q])                                                              | Apply [`TGate`](qiskit.circuit.library.TGate "qiskit.circuit.library.TGate").                                |
| [`QuantumCircuit.tdg`](qiskit.circuit.QuantumCircuit.tdg "qiskit.circuit.QuantumCircuit.tdg")(qubit, \*\[, q])                                                        | Apply [`TdgGate`](qiskit.circuit.library.TdgGate "qiskit.circuit.library.TdgGate").                          |
| [`QuantumCircuit.to_gate`](qiskit.circuit.QuantumCircuit.to_gate "qiskit.circuit.QuantumCircuit.to_gate")(\[parameter\_map])                                          | Create a Gate out of this circuit.                                                                           |
| [`QuantumCircuit.to_instruction`](qiskit.circuit.QuantumCircuit.to_instruction "qiskit.circuit.QuantumCircuit.to_instruction")(\[parameter\_map])                     | Create an Instruction out of this circuit.                                                                   |
| [`QuantumCircuit.toffoli`](qiskit.circuit.QuantumCircuit.toffoli "qiskit.circuit.QuantumCircuit.toffoli")(control\_qubit1, …)                                         | Apply [`CCXGate`](qiskit.circuit.library.CCXGate "qiskit.circuit.library.CCXGate").                          |
| [`QuantumCircuit.u1`](qiskit.circuit.QuantumCircuit.u1 "qiskit.circuit.QuantumCircuit.u1")(theta, qubit, \*\[, q])                                                    | Apply [`U1Gate`](qiskit.circuit.library.U1Gate "qiskit.circuit.library.U1Gate").                             |
| [`QuantumCircuit.u2`](qiskit.circuit.QuantumCircuit.u2 "qiskit.circuit.QuantumCircuit.u2")(phi, lam, qubit, \*\[, q])                                                 | Apply [`U2Gate`](qiskit.circuit.library.U2Gate "qiskit.circuit.library.U2Gate").                             |
| [`QuantumCircuit.u3`](qiskit.circuit.QuantumCircuit.u3 "qiskit.circuit.QuantumCircuit.u3")(theta, phi, lam, qubit, \*)                                                | Apply [`U3Gate`](qiskit.circuit.library.U3Gate "qiskit.circuit.library.U3Gate").                             |
| [`QuantumCircuit.uc`](qiskit.circuit.QuantumCircuit.uc "qiskit.circuit.QuantumCircuit.uc")(gate\_list, q\_controls, …)                                                | Attach a uniformly controlled gates (also called multiplexed gates) to a circuit.                            |
| [`QuantumCircuit.ucg`](qiskit.circuit.QuantumCircuit.ucg "qiskit.circuit.QuantumCircuit.ucg")(angle\_list, q\_controls, …)                                            | Deprecated version of uc.                                                                                    |
| [`QuantumCircuit.ucrx`](qiskit.circuit.QuantumCircuit.ucrx "qiskit.circuit.QuantumCircuit.ucrx")(angle\_list, q\_controls, …)                                         | Attach a uniformly controlled (also called multiplexed) Rx rotation gate to a circuit.                       |
| [`QuantumCircuit.ucry`](qiskit.circuit.QuantumCircuit.ucry "qiskit.circuit.QuantumCircuit.ucry")(angle\_list, q\_controls, …)                                         | Attach a uniformly controlled (also called multiplexed) Ry rotation gate to a circuit.                       |
| [`QuantumCircuit.ucrz`](qiskit.circuit.QuantumCircuit.ucrz "qiskit.circuit.QuantumCircuit.ucrz")(angle\_list, q\_controls, …)                                         | Attach a uniformly controlled (also called multiplexed gates) Rz rotation gate to a circuit.                 |
| [`QuantumCircuit.ucx`](qiskit.circuit.QuantumCircuit.ucx "qiskit.circuit.QuantumCircuit.ucx")(angle\_list, q\_controls, …)                                            | Deprecated version of ucrx.                                                                                  |
| [`QuantumCircuit.ucy`](qiskit.circuit.QuantumCircuit.ucy "qiskit.circuit.QuantumCircuit.ucy")(angle\_list, q\_controls, …)                                            | Deprecated version of ucry.                                                                                  |
| [`QuantumCircuit.ucz`](qiskit.circuit.QuantumCircuit.ucz "qiskit.circuit.QuantumCircuit.ucz")(angle\_list, q\_controls, …)                                            | Deprecated version of ucrz.                                                                                  |
| [`QuantumCircuit.unitary`](qiskit.circuit.QuantumCircuit.unitary "qiskit.circuit.QuantumCircuit.unitary")(obj, qubits\[, label])                                      | Apply unitary gate to q.                                                                                     |
| [`QuantumCircuit.width`](qiskit.circuit.QuantumCircuit.width "qiskit.circuit.QuantumCircuit.width")()                                                                 | Return number of qubits plus clbits in circuit.                                                              |
| [`QuantumCircuit.x`](qiskit.circuit.QuantumCircuit.x "qiskit.circuit.QuantumCircuit.x")(qubit, \*\[, label, …])                                                       | Apply [`XGate`](qiskit.circuit.library.XGate "qiskit.circuit.library.XGate").                                |
| [`QuantumCircuit.y`](qiskit.circuit.QuantumCircuit.y "qiskit.circuit.QuantumCircuit.y")(qubit, \*\[, q])                                                              | Apply [`YGate`](qiskit.circuit.library.YGate "qiskit.circuit.library.YGate").                                |
| [`QuantumCircuit.z`](qiskit.circuit.QuantumCircuit.z "qiskit.circuit.QuantumCircuit.z")(qubit, \*\[, q])                                                              | Apply [`ZGate`](qiskit.circuit.library.ZGate "qiskit.circuit.library.ZGate").                                |

