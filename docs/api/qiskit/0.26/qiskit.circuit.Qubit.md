# qiskit.circuit.Qubit

`Qubit(register=None, index=None)`

Implement a quantum bit.

Creates a qubit.

**Parameters**

*   **register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – Optional. A quantum register containing the bit.
*   **index** (*int*) – Optional. The index of the bit in its containing register.

**Raises**

**CircuitError** – if the provided register is not a valid [`QuantumRegister`](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")

`__init__(register=None, index=None)`

Creates a qubit.

**Parameters**

*   **register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – Optional. A quantum register containing the bit.
*   **index** (*int*) – Optional. The index of the bit in its containing register.

**Raises**

**CircuitError** – if the provided register is not a valid [`QuantumRegister`](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")

## Methods

|                                                                                                  |                  |
| ------------------------------------------------------------------------------------------------ | ---------------- |
| [`__init__`](#qiskit.circuit.Qubit.__init__ "qiskit.circuit.Qubit.__init__")(\[register, index]) | Creates a qubit. |

## Attributes

|                                                                              |                     |
| ---------------------------------------------------------------------------- | ------------------- |
| [`index`](#qiskit.circuit.Qubit.index "qiskit.circuit.Qubit.index")          | Get bit’s index.    |
| [`register`](#qiskit.circuit.Qubit.register "qiskit.circuit.Qubit.register") | Get bit’s register. |

`property index`

Get bit’s index.

`property register`

Get bit’s register.
