# Qubit

<span id="undefined" />

`Qubit(register=None, index=None)`

Bases: `qiskit.circuit.bit.Bit`

Implement a quantum bit.

Creates a qubit.

**Parameters**

*   **register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – Optional. A quantum register containing the bit.
*   **index** (*int*) – Optional. The index of the bit in its containing register.

**Raises**

**CircuitError** – if the provided register is not a valid [`QuantumRegister`](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")

## Attributes

<span id="undefined" />

### index

Get bit’s index.

<span id="undefined" />

### register

Get bit’s register.
