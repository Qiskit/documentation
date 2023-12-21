# qiskit.chemistry.components.variational\_forms.UCCSD.group\_excitations

`static UCCSD.group_excitations(list_de, num_orbitals)`

Groups the excitations and gives out the remaining ones in the list\_de\_temp list because those excitations are controlled by the same parameter in full singlet UCCSD unlike in usual UCCSD where every excitation has its own parameter.

**Parameters**

*   **list\_de** (*list*) – list of the double excitations grouped
*   **num\_orbitals** (*int*) – number of spin-orbitals (qubits)

**Returns**

list\_same\_ao\_group, list\_de\_temp, the grouped double\_exc (that involve same spatial orbitals)

**Return type**

tuple
