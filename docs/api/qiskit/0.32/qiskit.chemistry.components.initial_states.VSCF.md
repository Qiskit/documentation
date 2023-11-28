# VSCF

<span id="undefined" />

`VSCF(basis)`

Bases: `qiskit.aqua.components.initial_states.initial_state.InitialState`

Initial state for vibrational modes.

Creates an occupation number vector as defined in Ollitrault Pauline J., Chemical science 11 (2020): 6842-6855. e.g. for 2 modes with 4 modals per mode it creates: |1000 1000>

**Parameters**

**basis** (`List`\[`int`]) – Is a list defining the number of modals per mode. E.g. for a 3 modes system with 4 modals per mode basis = \[4,4,4]

## Methods

|                                                                                                                                                                                                                                |                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------- |
| [`construct_circuit`](qiskit.chemistry.components.initial_states.VSCF.construct_circuit#qiskit.chemistry.components.initial_states.VSCF.construct_circuit "qiskit.chemistry.components.initial_states.VSCF.construct_circuit") | Construct the statevector of desired initial state. |

## Attributes

<span id="undefined" />

### bitstr

Getter of the bit string represented the statevector.
