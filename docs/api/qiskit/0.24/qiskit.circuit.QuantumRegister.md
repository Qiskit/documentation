<span id="qiskit-circuit-quantumregister" />

# qiskit.circuit.QuantumRegister

`QuantumRegister(size, name=None)`

Implement a quantum register.

Create a new generic register.

`__init__(size, name=None)`

Create a new generic register.

## Methods

|                                                                                                                 |                                           |
| --------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| [`__init__`](#qiskit.circuit.QuantumRegister.__init__ "qiskit.circuit.QuantumRegister.__init__")(size\[, name]) | Create a new generic register.            |
| [`qasm`](#qiskit.circuit.QuantumRegister.qasm "qiskit.circuit.QuantumRegister.qasm")()                          | Return OPENQASM string for this register. |

## Attributes

|                                                                                      |                        |
| ------------------------------------------------------------------------------------ | ---------------------- |
| `instances_counter`                                                                  |                        |
| [`name`](#qiskit.circuit.QuantumRegister.name "qiskit.circuit.QuantumRegister.name") | Get the register name. |
| `prefix`                                                                             |                        |
| [`size`](#qiskit.circuit.QuantumRegister.size "qiskit.circuit.QuantumRegister.size") | Get the register size. |

### bit\_type

alias of [`Qubit`](qiskit.circuit.Qubit#qiskit.circuit.Qubit "qiskit.circuit.Qubit")

`property name`

Get the register name.

`qasm()`

Return OPENQASM string for this register.

`property size`

Get the register size.
