# qiskit.transpiler.Target.operations\_for\_qargs

`Target.operations_for_qargs(qargs)`

Get the operation class object for a specified qarg

**Parameters**

**qargs** (*tuple*) – A qargs tuple of the qubits to get the gates that apply to it. For example, `(0,)` will return the set of all instructions that apply to qubit 0.

**Returns**

The list of [`Instruction`](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction") instances that apply to the specified qarg.

**Return type**

list

**Raises**

**KeyError** – If qargs is not in target
