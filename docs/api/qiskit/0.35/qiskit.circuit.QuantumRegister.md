# QuantumRegister

<span id="undefined" />

`QuantumRegister(size=None, name=None, bits=None)`

Bases: `qiskit.circuit.register.Register`

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
*   **CircuitError** – if `bits` contained duplicated bits.
*   **CircuitError** – if `bits` contained bits of an incorrect type.

## Methods

|                                                                                                                             |                                                          |
| --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [`index`](qiskit.circuit.QuantumRegister.index#qiskit.circuit.QuantumRegister.index "qiskit.circuit.QuantumRegister.index") | Find the index of the provided bit within this register. |
| [`qasm`](qiskit.circuit.QuantumRegister.qasm#qiskit.circuit.QuantumRegister.qasm "qiskit.circuit.QuantumRegister.qasm")     | Return OPENQASM string for this register.                |

## Attributes

<span id="undefined" />

### instances\_counter

`= count(0)`

<span id="undefined" />

### name

Get the register name.

<span id="undefined" />

### name\_format

`= re.compile('[a-z][a-zA-Z0-9_]*')`

<span id="undefined" />

### prefix

`= 'q'`

<span id="undefined" />

### size

Get the register size.
