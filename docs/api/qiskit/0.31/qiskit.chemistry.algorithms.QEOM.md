# QEOM

<span id="undefined" />

`QEOM(ground_state_solver, excitations='sd')`

Bases: `qiskit.chemistry.algorithms.excited_states_solvers.excited_states_solver.ExcitedStatesSolver`

The calculation of excited states via the qEOM algorithm

**Parameters**

*   **ground\_state\_solver** (`GroundStateSolver`) – a GroundStateSolver object. The qEOM algorithm will use this ground state to compute the EOM matrix elements
*   **excitations** (`Union`\[`str`, `List`\[`List`\[`int`]]]) – The excitations to be included in the eom pseudo-eigenvalue problem. If a string (‘s’, ‘d’ or ‘sd’) then all excitations of the given type will be used. Otherwise a list of custom excitations can directly be provided.

## Methods

|                                                                                                                                   |                                     |
| --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`solve`](qiskit.chemistry.algorithms.QEOM.solve#qiskit.chemistry.algorithms.QEOM.solve "qiskit.chemistry.algorithms.QEOM.solve") | Run the excited-states calculation. |

## Attributes

<span id="undefined" />

### excitations

Returns the excitations to be included in the eom pseudo-eigenvalue problem.

**Return type**

`Union`\[`str`, `List`\[`List`\[`int`]]]
