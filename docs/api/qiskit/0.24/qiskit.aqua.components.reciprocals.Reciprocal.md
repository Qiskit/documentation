<span id="qiskit-aqua-components-reciprocals-reciprocal" />

# qiskit.aqua.components.reciprocals.Reciprocal

<span id="undefined" />

`Reciprocal`

Base class for reciprocal calculation.

This method should initialize the module and use an exception if a component of the module is not available.

<span id="undefined" />

`abstract __init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                                                       |                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| [`__init__`](#qiskit.aqua.components.reciprocals.Reciprocal.__init__ "qiskit.aqua.components.reciprocals.Reciprocal.__init__")()                                                      | Initialize self.                      |
| [`construct_circuit`](#qiskit.aqua.components.reciprocals.Reciprocal.construct_circuit "qiskit.aqua.components.reciprocals.Reciprocal.construct_circuit")(mode\[, register, circuit]) | Construct the initial state circuit.  |
| [`sv_to_resvec`](#qiskit.aqua.components.reciprocals.Reciprocal.sv_to_resvec "qiskit.aqua.components.reciprocals.Reciprocal.sv_to_resvec")(statevector, num\_q)                       | Convert statevector to result vector. |

<span id="undefined" />

`abstract construct_circuit(mode, register=None, circuit=None)`

Construct the initial state circuit.

**Parameters**

*   **mode** (*str*) – ‘matrix’ or ‘circuit’
*   **register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – register for circuit construction.
*   **circuit** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – circuit for construction.

**Returns**

The reciprocal circuit.

<span id="undefined" />

`abstract sv_to_resvec(statevector, num_q)`

Convert statevector to result vector.

**Parameters**

*   **statevector** (*list*) – The statevector from simulation.
*   **num\_q** (*int*) – Number of qubits of result register.

**Returns**

The result vector.
