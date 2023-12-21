<span id="qiskit-circuit-qubit" />

# qiskit.circuit.Qubit

`Qubit(register, index)`

Implement a quantum bit.

Creates a qubit.

**Parameters**

*   **register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – a quantum register.
*   **index** (*int*) – the index to insert the qubit

**Raises**

**CircuitError** – if the provided register is not a valid [`QuantumRegister`](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")

`__init__(register, index)`

Creates a qubit.

**Parameters**

*   **register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – a quantum register.
*   **index** (*int*) – the index to insert the qubit

**Raises**

**CircuitError** – if the provided register is not a valid [`QuantumRegister`](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")

## Methods

|                                                                                               |                  |
| --------------------------------------------------------------------------------------------- | ---------------- |
| [`__init__`](#qiskit.circuit.Qubit.__init__ "qiskit.circuit.Qubit.__init__")(register, index) | Creates a qubit. |

## Attributes

|                                                                              |                     |
| ---------------------------------------------------------------------------- | ------------------- |
| [`index`](#qiskit.circuit.Qubit.index "qiskit.circuit.Qubit.index")          | Get bit’s index.    |
| [`register`](#qiskit.circuit.Qubit.register "qiskit.circuit.Qubit.register") | Get bit’s register. |

`property index`

Get bit’s index.

`property register`

Get bit’s register.
