# HartreeFock

<span id="undefined" />

`HartreeFock(num_orbitals, num_particles, qubit_mapping='parity', two_qubit_reduction=True, sq_list=None)`

Bases: `qiskit.aqua.components.initial_states.initial_state.InitialState`

A Hartree-Fock initial state.

**Parameters**

*   **num\_orbitals** (`int`) – number of spin orbitals, has a min. value of 1.
*   **num\_particles** (`Union`\[`List`\[`int`], `int`]) – number of particles, if it is a list, the first number is alpha and the second number if beta.
*   **qubit\_mapping** (`str`) – mapping type for qubit operator
*   **two\_qubit\_reduction** (`bool`) – flag indicating whether or not two qubit is reduced
*   **sq\_list** (`Optional`\[`List`\[`int`]]) – position of the single-qubit operators that anticommute with the cliffords

**Raises**

*   **ValueError** – wrong setting in num\_particles and num\_orbitals.
*   **ValueError** – wrong setting for computed num\_qubits and supplied num\_qubits.

## Methods

|                                                                                                                                                                                                                                                     |                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| [`construct_circuit`](qiskit.chemistry.components.initial_states.HartreeFock.construct_circuit#qiskit.chemistry.components.initial_states.HartreeFock.construct_circuit "qiskit.chemistry.components.initial_states.HartreeFock.construct_circuit") | Construct the statevector of desired initial state. |

## Attributes

<span id="undefined" />

### bitstr

Getter of the bit string represented the statevector.
