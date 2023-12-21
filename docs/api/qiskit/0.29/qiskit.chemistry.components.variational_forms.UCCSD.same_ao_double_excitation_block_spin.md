# qiskit.chemistry.components.variational\_forms.UCCSD.same\_ao\_double\_excitation\_block\_spin

`static UCCSD.same_ao_double_excitation_block_spin(de_1, de_2, num_orbitals)`

Regroups the excitations that involve same spatial orbitals for example, with labeling.

2— —5 1— —4 0-o- -o-3

excitations \[0,1,3,5] and \[0,2,3,4] are controlled by the same parameter in the full singlet UCCSD unlike in usual UCCSD where every excitation is controlled by independent parameter.

**Parameters**

*   **de\_1** (*list*) – double exc in block spin \[ from to from to ]
*   **de\_2** (*list*) – double exc in block spin \[ from to from to ]
*   **num\_orbitals** (*int*) – number of molecular orbitals

**Returns**

says if given excitation involves same spatial orbitals 1 = yes, 0 = no.

**Return type**

int
