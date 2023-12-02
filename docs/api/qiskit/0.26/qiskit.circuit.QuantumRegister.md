# qiskit.circuit.QuantumRegister

<span id="undefined" />

`QuantumRegister(size=None, name=None, bits=None)`

Implement a quantum register.

Create a new generic register.

Either the `size` or the `bits` argument must be provided. If `size` is not None, the register will be pre-populated with bits of the correct type.

**Parameters**

*   **size** (*int*) – Optional. The number of bits to include in the register.
*   **name** (*str*) – Optional. The name of the register. If not provided, a unique name will be auto-generated from the register type.
*   **bits** (*list\[Bit]*) – Optional. A list of Bit() instances to be used to populate the register.

**Raises**

*   **CircuitError** – if both the `size` and `bits` arguments are provided, or if neither are.
*   **CircuitError** – if `size` is not valid.
*   **CircuitError** – if `name` is not a valid name according to the OpenQASM spec.
*   **CircuitError** – if `bits` contained bits of an incorrect type.

<span id="undefined" />

`__init__(size=None, name=None, bits=None)`

Create a new generic register.

Either the `size` or the `bits` argument must be provided. If `size` is not None, the register will be pre-populated with bits of the correct type.

**Parameters**

*   **size** (*int*) – Optional. The number of bits to include in the register.
*   **name** (*str*) – Optional. The name of the register. If not provided, a unique name will be auto-generated from the register type.
*   **bits** (*list\[Bit]*) – Optional. A list of Bit() instances to be used to populate the register.

**Raises**

*   **CircuitError** – if both the `size` and `bits` arguments are provided, or if neither are.
*   **CircuitError** – if `size` is not valid.
*   **CircuitError** – if `name` is not a valid name according to the OpenQASM spec.
*   **CircuitError** – if `bits` contained bits of an incorrect type.

## Methods

|                                                                                                                       |                                           |
| --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| [`__init__`](#qiskit.circuit.QuantumRegister.__init__ "qiskit.circuit.QuantumRegister.__init__")(\[size, name, bits]) | Create a new generic register.            |
| [`qasm`](#qiskit.circuit.QuantumRegister.qasm "qiskit.circuit.QuantumRegister.qasm")()                                | Return OPENQASM string for this register. |

## Attributes

|                                                                                      |                        |
| ------------------------------------------------------------------------------------ | ---------------------- |
| `instances_counter`                                                                  |                        |
| [`name`](#qiskit.circuit.QuantumRegister.name "qiskit.circuit.QuantumRegister.name") | Get the register name. |
| `name_format`                                                                        |                        |
| `prefix`                                                                             |                        |
| [`size`](#qiskit.circuit.QuantumRegister.size "qiskit.circuit.QuantumRegister.size") | Get the register size. |

<span id="undefined" />

### bit\_type

alias of [`Qubit`](qiskit.circuit.Qubit#qiskit.circuit.Qubit "qiskit.circuit.Qubit")

<span id="undefined" />

`property name`

Get the register name.

<span id="undefined" />

`qasm()`

Return OPENQASM string for this register.

<span id="undefined" />

`property size`

Get the register size.
