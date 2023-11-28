<span id="qiskit-circuit-ancillaqubit" />

# qiskit.circuit.AncillaQubit

<span id="undefined" />

`AncillaQubit(register, index)`

A qubit used as ancillary qubit.

Creates a qubit.

**Parameters**

*   **register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – a quantum register.
*   **index** (*int*) – the index to insert the qubit

**Raises**

**CircuitError** – if the provided register is not a valid [`QuantumRegister`](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")

<span id="undefined" />

`__init__(register, index)`

Creates a qubit.

**Parameters**

*   **register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – a quantum register.
*   **index** (*int*) – the index to insert the qubit

**Raises**

**CircuitError** – if the provided register is not a valid [`QuantumRegister`](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")

## Methods

|                                                                                                             |                  |
| ----------------------------------------------------------------------------------------------------------- | ---------------- |
| [`__init__`](#qiskit.circuit.AncillaQubit.__init__ "qiskit.circuit.AncillaQubit.__init__")(register, index) | Creates a qubit. |

## Attributes

|                                                                                            |                     |
| ------------------------------------------------------------------------------------------ | ------------------- |
| [`index`](#qiskit.circuit.AncillaQubit.index "qiskit.circuit.AncillaQubit.index")          | Get bit’s index.    |
| [`register`](#qiskit.circuit.AncillaQubit.register "qiskit.circuit.AncillaQubit.register") | Get bit’s register. |

<span id="undefined" />

`property index`

Get bit’s index.

<span id="undefined" />

`property register`

Get bit’s register.
