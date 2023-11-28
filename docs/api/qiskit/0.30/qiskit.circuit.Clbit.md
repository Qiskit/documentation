# Clbit[¶](#clbit "Permalink to this headline")

<span id="undefined" />

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

<span id="undefined" />

### index

Get bit’s index.

<span id="undefined" />

### register

Get bit’s register.
