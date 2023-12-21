# qiskit.transpiler.Layout.from\_intlist

`static Layout.from_intlist(int_list, *qregs)`

Converts a list of integers to a Layout mapping virtual qubits (index of the list) to physical qubits (the list values).

**Parameters**

*   **int\_list** (*list*) – A list of integers.
*   **\*qregs** (*QuantumRegisters*) – The quantum registers to apply the layout to.

**Returns**

The corresponding Layout object.

**Return type**

[Layout](qiskit.transpiler.Layout#qiskit.transpiler.Layout "qiskit.transpiler.Layout")

**Raises**

**LayoutError** – Invalid input layout.
