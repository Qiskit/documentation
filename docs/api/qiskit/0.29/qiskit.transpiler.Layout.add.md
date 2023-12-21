# qiskit.transpiler.Layout.add

`Layout.add(virtual_bit, physical_bit=None)`

Adds a map element between bit and physical\_bit. If physical\_bit is not defined, bit will be mapped to a new physical bit (extending the length of the layout by one.)

**Parameters**

*   **virtual\_bit** (*tuple*) – A (qu)bit. For example, (QuantumRegister(3, ‘qr’), 2).
*   **physical\_bit** (*int*) – A physical bit. For example, 3.
