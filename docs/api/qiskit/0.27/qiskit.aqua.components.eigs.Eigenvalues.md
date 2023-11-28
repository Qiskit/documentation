# qiskit.aqua.components.eigs.Eigenvalues

<span id="undefined" />

`Eigenvalues`

Base class for eigenvalue estimation.

This method should initialize the module and use an exception if a component of the module is not available.

<span id="undefined" />

`abstract __init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                                  |                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [`__init__`](#qiskit.aqua.components.eigs.Eigenvalues.__init__ "qiskit.aqua.components.eigs.Eigenvalues.__init__")()                                             | Initialize self.                                             |
| [`construct_circuit`](#qiskit.aqua.components.eigs.Eigenvalues.construct_circuit "qiskit.aqua.components.eigs.Eigenvalues.construct_circuit")(mode\[, register]) | Construct the eigenvalue estimation quantum circuit.         |
| [`construct_inverse`](#qiskit.aqua.components.eigs.Eigenvalues.construct_inverse "qiskit.aqua.components.eigs.Eigenvalues.construct_inverse")(mode, circuit)     | Construct the inverse eigenvalue estimation quantum circuit. |
| [`get_register_sizes`](#qiskit.aqua.components.eigs.Eigenvalues.get_register_sizes "qiskit.aqua.components.eigs.Eigenvalues.get_register_sizes")()               | get register sizes                                           |
| [`get_scaling`](#qiskit.aqua.components.eigs.Eigenvalues.get_scaling "qiskit.aqua.components.eigs.Eigenvalues.get_scaling")()                                    | get scaling                                                  |

<span id="undefined" />

`abstract construct_circuit(mode, register=None)`

Construct the eigenvalue estimation quantum circuit.

**Parameters**

*   **mode** (*str*) – ‘matrix’ or ‘circuit’
*   **register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – register for circuit construction where eigenvalues will be stored.

**Returns**

object for the eigenvalue estimation circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**NotImplementedError** – not implemented

<span id="undefined" />

`construct_inverse(mode, circuit)`

Construct the inverse eigenvalue estimation quantum circuit.

**Parameters**

*   **mode** (*str*) – construction mode, ‘matrix’ not supported
*   **circuit** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – the quantum circuit to invert

**Returns**

**object for of the inverted eigenvalue estimation**

circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

*   **NotImplementedError** – not implemented for matrix mode
*   **ValueError** – Circuit was not constructed beforehand

<span id="undefined" />

`abstract get_register_sizes()`

get register sizes

<span id="undefined" />

`abstract get_scaling()`

get scaling
