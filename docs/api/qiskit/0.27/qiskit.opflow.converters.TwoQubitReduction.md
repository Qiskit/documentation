# qiskit.opflow\.converters.TwoQubitReduction

<span id="undefined" />

`TwoQubitReduction(num_particles)`

Two qubit reduction converter which eliminates the central and last qubit in a list of Pauli that has diagonal operators (Z,I) at those positions.

Chemistry specific method: It can be used to taper two qubits in parity and binary-tree mapped fermionic Hamiltonians when the spin orbitals are ordered in two spin sectors, (block spin order) according to the number of particles in the system.

**Parameters**

**num\_particles** (`Union`\[`int`, `List`\[`int`], `Tuple`\[`int`, `int`]]) – number of particles, if it is a list, the first number is alpha and the second number if beta.

<span id="undefined" />

`__init__(num_particles)`

**Parameters**

**num\_particles** (`Union`\[`int`, `List`\[`int`], `Tuple`\[`int`, `int`]]) – number of particles, if it is a list, the first number is alpha and the second number if beta.

## Methods

|                                                                                                                                          |                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [`__init__`](#qiskit.opflow.converters.TwoQubitReduction.__init__ "qiskit.opflow.converters.TwoQubitReduction.__init__")(num\_particles) | **type num\_particles**`Union`\[`int`, `List`\[`int`], `Tuple`\[`int`, `int`]] |
| [`convert`](#qiskit.opflow.converters.TwoQubitReduction.convert "qiskit.opflow.converters.TwoQubitReduction.convert")(operator)          | Converts the Operator to tapered one by Z2 symmetries.                         |

<span id="undefined" />

`convert(operator)`

Converts the Operator to tapered one by Z2 symmetries.

**Parameters**

**operator** (`OperatorBase`) – the operator

**Return type**

`OperatorBase`

**Returns**

A new operator whose qubit number is reduced by 2.
