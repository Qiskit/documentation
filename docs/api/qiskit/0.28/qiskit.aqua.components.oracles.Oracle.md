# qiskit.aqua.components.oracles.Oracle



`Oracle(*args, **kwargs)`

Base class for oracles.

This method should initialize the module and use an exception if a component of the module is not available.

**Parameters**

*   **args** (*list*) – args
*   **kwargs** (*dict*) – kwargs



`abstract __init__(*args, **kwargs)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                             |                               |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| [`__init__`](#qiskit.aqua.components.oracles.Oracle.__init__ "qiskit.aqua.components.oracles.Oracle.__init__")(\*args, \*\*kwargs)          | Initialize self.              |
| [`construct_circuit`](#qiskit.aqua.components.oracles.Oracle.construct_circuit "qiskit.aqua.components.oracles.Oracle.construct_circuit")() | Construct the oracle circuit. |

## Attributes

|                                                                                                                                              |                            |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| [`ancillary_register`](#qiskit.aqua.components.oracles.Oracle.ancillary_register "qiskit.aqua.components.oracles.Oracle.ancillary_register") | returns ancillary register |
| [`circuit`](#qiskit.aqua.components.oracles.Oracle.circuit "qiskit.aqua.components.oracles.Oracle.circuit")                                  |                            |
| [`output_register`](#qiskit.aqua.components.oracles.Oracle.output_register "qiskit.aqua.components.oracles.Oracle.output_register")          | returns output register    |
| [`variable_register`](#qiskit.aqua.components.oracles.Oracle.variable_register "qiskit.aqua.components.oracles.Oracle.variable_register")    | returns variable register  |



`abstract property ancillary_register`

returns ancillary register



`property circuit`



`abstract construct_circuit()`

Construct the oracle circuit.

**Returns**

A quantum circuit for the oracle.



`abstract property output_register`

returns output register



`abstract property variable_register`

returns variable register
