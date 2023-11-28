# qiskit.circuit.Clbit

<span id="undefined" />

`Clbit(register=None, index=None)`

Implement a classical bit.

Creates a classical bit.

**Parameters**

*   **register** ([*ClassicalRegister*](qiskit.circuit.ClassicalRegister#qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister")) – Optional. A classical register containing the bit.
*   **index** (*int*) – Optional. The index of the bit in its containing register.

**Raises**

**CircuitError** – if the provided register is not a valid [`ClassicalRegister`](qiskit.circuit.ClassicalRegister#qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister")

<span id="undefined" />

`__init__(register=None, index=None)`

Creates a classical bit.

**Parameters**

*   **register** ([*ClassicalRegister*](qiskit.circuit.ClassicalRegister#qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister")) – Optional. A classical register containing the bit.
*   **index** (*int*) – Optional. The index of the bit in its containing register.

**Raises**

**CircuitError** – if the provided register is not a valid [`ClassicalRegister`](qiskit.circuit.ClassicalRegister#qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister")

## Methods

|                                                                                                  |                          |
| ------------------------------------------------------------------------------------------------ | ------------------------ |
| [`__init__`](#qiskit.circuit.Clbit.__init__ "qiskit.circuit.Clbit.__init__")(\[register, index]) | Creates a classical bit. |

## Attributes

|                                                                              |                     |
| ---------------------------------------------------------------------------- | ------------------- |
| [`index`](#qiskit.circuit.Clbit.index "qiskit.circuit.Clbit.index")          | Get bit’s index.    |
| [`register`](#qiskit.circuit.Clbit.register "qiskit.circuit.Clbit.register") | Get bit’s register. |

<span id="undefined" />

`property index`

Get bit’s index.

<span id="undefined" />

`property register`

Get bit’s register.
