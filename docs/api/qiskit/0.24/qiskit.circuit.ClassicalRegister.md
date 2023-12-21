<span id="qiskit-circuit-classicalregister" />

# qiskit.circuit.ClassicalRegister

`ClassicalRegister(size, name=None)`

Implement a classical register.

Create a new generic register.

`__init__(size, name=None)`

Create a new generic register.

## Methods

|                                                                                                                     |                                           |
| ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| [`__init__`](#qiskit.circuit.ClassicalRegister.__init__ "qiskit.circuit.ClassicalRegister.__init__")(size\[, name]) | Create a new generic register.            |
| [`qasm`](#qiskit.circuit.ClassicalRegister.qasm "qiskit.circuit.ClassicalRegister.qasm")()                          | Return OPENQASM string for this register. |

## Attributes

|                                                                                          |                        |
| ---------------------------------------------------------------------------------------- | ---------------------- |
| `instances_counter`                                                                      |                        |
| [`name`](#qiskit.circuit.ClassicalRegister.name "qiskit.circuit.ClassicalRegister.name") | Get the register name. |
| `prefix`                                                                                 |                        |
| [`size`](#qiskit.circuit.ClassicalRegister.size "qiskit.circuit.ClassicalRegister.size") | Get the register size. |

### bit\_type

alias of [`Clbit`](qiskit.circuit.Clbit#qiskit.circuit.Clbit "qiskit.circuit.Clbit")

`property name`

Get the register name.

`qasm()`

Return OPENQASM string for this register.

`property size`

Get the register size.
