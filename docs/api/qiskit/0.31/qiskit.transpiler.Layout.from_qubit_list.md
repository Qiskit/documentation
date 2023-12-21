# qiskit.transpiler.Layout.from\_qubit\_list

`static Layout.from_qubit_list(qubit_list, *qregs)`

Populates a Layout from a list containing virtual qubits, Qubit or None.

**Parameters**

*   **qubit\_list** (*list*) – e.g.: \[qr\[0], None, qr\[2], qr\[3]]
*   **\*qregs** (*QuantumRegisters*) – The quantum registers to apply the layout to.

**Returns**

the corresponding Layout object

**Return type**

[Layout](qiskit.transpiler.Layout#qiskit.transpiler.Layout "qiskit.transpiler.Layout")

**Raises**

**LayoutError** – If the elements are not Qubit or None
