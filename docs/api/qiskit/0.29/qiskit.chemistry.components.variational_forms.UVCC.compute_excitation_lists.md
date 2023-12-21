# qiskit.chemistry.components.variational\_forms.UVCC.compute\_excitation\_lists

`static UVCC.compute_excitation_lists(basis, degrees)`

Compute the list with all possible excitation for given orders

**Parameters**

*   **basis** (`List`\[`int`]) – Is a list defining the number of modals per mode. E.g. for a 3 modes system with 4 modals per mode basis = \[4,4,4]
*   **degrees** (`List`\[`int`]) – degree of excitation to be included (for single and double excitations degrees=\[0,1])

**Return type**

`List`\[`List`\[`int`]]

**Returns**

List of excitation indexes in terms of modes and modals

**Raises**

**ValueError** – If excitation degree is greater than size of basis
