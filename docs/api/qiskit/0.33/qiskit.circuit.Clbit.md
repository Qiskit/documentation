# Clbit



`Clbit(register=None, index=None)`

Bases: `qiskit.circuit.bit.Bit`

Implement a classical bit.

Creates a classical bit.

**Parameters**

*   **register** ([*ClassicalRegister*](qiskit.circuit.ClassicalRegister#qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister")) – Optional. A classical register containing the bit.
*   **index** (*int*) – Optional. The index of the bit in its containing register.

**Raises**

**CircuitError** – if the provided register is not a valid [`ClassicalRegister`](qiskit.circuit.ClassicalRegister#qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister")

## Attributes



### index

Get bit’s index.



### register

Get bit’s register.
