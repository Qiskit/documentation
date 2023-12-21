<span id="qiskit-circuit-ancillaregister" />

# qiskit.circuit.AncillaRegister

`AncillaRegister(size, name=None)`

Implement an ancilla register.

Create a new generic register.

`__init__(size, name=None)`

Create a new generic register.

## Methods

|                                                                                                                 |                                           |
| --------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| [`__init__`](#qiskit.circuit.AncillaRegister.__init__ "qiskit.circuit.AncillaRegister.__init__")(size\[, name]) | Create a new generic register.            |
| [`qasm`](#qiskit.circuit.AncillaRegister.qasm "qiskit.circuit.AncillaRegister.qasm")()                          | Return OPENQASM string for this register. |

## Attributes

|                                                                                      |                        |
| ------------------------------------------------------------------------------------ | ---------------------- |
| `instances_counter`                                                                  |                        |
| [`name`](#qiskit.circuit.AncillaRegister.name "qiskit.circuit.AncillaRegister.name") | Get the register name. |
| `prefix`                                                                             |                        |
| [`size`](#qiskit.circuit.AncillaRegister.size "qiskit.circuit.AncillaRegister.size") | Get the register size. |

### bit\_type

alias of [`AncillaQubit`](qiskit.circuit.AncillaQubit#qiskit.circuit.AncillaQubit "qiskit.circuit.AncillaQubit")

`property name`

Get the register name.

`qasm()`

Return OPENQASM string for this register.

`property size`

Get the register size.
