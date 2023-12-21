# qiskit.chemistry.BosonicOperator.direct\_mapping\_filtering\_criterion

`BosonicOperator.direct_mapping_filtering_criterion(state, value, aux_values=None)`

Filters out the states of irrelevant symmetries

**Parameters**

*   **state** (`Union`\[`List`, `ndarray`]) – the statevector
*   **value** (`float`) – the energy
*   **aux\_values** (`Optional`\[`List`\[`float`]]) – the auxiliary energies

**Return type**

`bool`

**Returns**

True if the state is has one and only one modal occupied per mode meaning that the direct mapping symmetries are respected and False otherwise
