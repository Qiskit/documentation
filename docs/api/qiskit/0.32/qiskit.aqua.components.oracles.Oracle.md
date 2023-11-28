# Oracle

<span id="undefined" />

`Oracle(*args, **kwargs)`

Bases: `abc.ABC`

Base class for oracles.

This method should initialize the module and use an exception if a component of the module is not available.

**Parameters**

*   **args** (*list*) – args
*   **kwargs** (*dict*) – kwargs

## Methods

|                                                                                                                                                                                                  |                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------- |
| [`construct_circuit`](qiskit.aqua.components.oracles.Oracle.construct_circuit#qiskit.aqua.components.oracles.Oracle.construct_circuit "qiskit.aqua.components.oracles.Oracle.construct_circuit") | Construct the oracle circuit. |

## Attributes

<span id="undefined" />

### ancillary\_register

returns ancillary register

<span id="undefined" />

### circuit

<span id="undefined" />

### output\_register

returns output register

<span id="undefined" />

### variable\_register

returns variable register
