<span id="qiskit-aqua-components-initial-states-initialstate" />

# qiskit.aqua.components.initial\_states.InitialState

<span id="undefined" />

`InitialState`

Base class for InitialState.

This method should initialize the module and use an exception if a component of the module is not available.

<span id="undefined" />

`abstract __init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                                                        |                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| [`__init__`](#qiskit.aqua.components.initial_states.InitialState.__init__ "qiskit.aqua.components.initial_states.InitialState.__init__")()                                             | Initialize self.                                    |
| [`construct_circuit`](#qiskit.aqua.components.initial_states.InitialState.construct_circuit "qiskit.aqua.components.initial_states.InitialState.construct_circuit")(\[mode, register]) | Construct the statevector of desired initial state. |

## Attributes

|                                                                                                                                    |   |
| ---------------------------------------------------------------------------------------------------------------------------------- | - |
| [`bitstr`](#qiskit.aqua.components.initial_states.InitialState.bitstr "qiskit.aqua.components.initial_states.InitialState.bitstr") |   |

<span id="undefined" />

`property bitstr`

<span id="undefined" />

`abstract construct_circuit(mode='circuit', register=None)`

Construct the statevector of desired initial state.

**Parameters**

*   **mode** (`str`) – vector or circuit. The vector mode produces the vector. While the circuit constructs the quantum circuit corresponding that vector.
*   **register** (`Optional`\[`QuantumRegister`]) – qubits for circuit construction.

**Returns**

statevector.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") or numpy.ndarray

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – when mode is not ‘vector’ or ‘circuit’.
