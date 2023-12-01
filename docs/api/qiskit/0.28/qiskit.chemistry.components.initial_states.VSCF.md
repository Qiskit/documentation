# qiskit.chemistry.components.initial\_states.VSCF

<span id="undefined" />

`VSCF(basis)`

Initial state for vibrational modes.

Creates an occupation number vector as defined in Ollitrault Pauline J., Chemical science 11 (2020): 6842-6855. e.g. for 2 modes with 4 modals per mode it creates: |1000 1000>

**Parameters**

**basis** (`List`\[`int`]) – Is a list defining the number of modals per mode. E.g. for a 3 modes system with 4 modals per mode basis = \[4,4,4]

<span id="undefined" />

`__init__(basis)`

**Parameters**

**basis** (`List`\[`int`]) – Is a list defining the number of modals per mode. E.g. for a 3 modes system with 4 modals per mode basis = \[4,4,4]

## Methods

|                                                                                                                                                                                  |                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.components.initial_states.VSCF.__init__ "qiskit.chemistry.components.initial_states.VSCF.__init__")(basis)                                        | **type basis**`List`\[`int`]                        |
| [`construct_circuit`](#qiskit.chemistry.components.initial_states.VSCF.construct_circuit "qiskit.chemistry.components.initial_states.VSCF.construct_circuit")(\[mode, register]) | Construct the statevector of desired initial state. |

## Attributes

|                                                                                                                              |                                                       |
| ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`bitstr`](#qiskit.chemistry.components.initial_states.VSCF.bitstr "qiskit.chemistry.components.initial_states.VSCF.bitstr") | Getter of the bit string represented the statevector. |

<span id="undefined" />

`property bitstr`

Getter of the bit string represented the statevector.

<span id="undefined" />

`construct_circuit(mode='circuit', register=None)`

Construct the statevector of desired initial state.

**Parameters**

*   **mode** (*string*) – vector or circuit. The vector mode produces the vector. While the circuit constructs the quantum circuit corresponding that vector.
*   **register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – register for circuit construction.

**Returns**

statevector.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") or numpy.ndarray

**Raises**

**ValueError** – when mode is not ‘vector’ or ‘circuit’.
