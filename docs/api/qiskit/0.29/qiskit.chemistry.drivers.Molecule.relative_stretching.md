# qiskit.chemistry.drivers.Molecule.relative\_stretching

`classmethod Molecule.relative_stretching(perturbation, geometry, atom_pair)`

**Parameters**

*   **perturbation** (`float`) – The magnitude of the stretch. (New distance = stretch \* old distance)
*   **geometry** (`List`\[`Tuple`\[`str`, `List`\[`float`]]]) – The initial geometry to perturb.
*   **atom\_pair** (`Tuple`\[`int`, `int`]) – A tuple with two integers, indexing which atoms from the starting geometry should be stretched apart. **Atom1 is stretched away from Atom2, while Atom2 remains stationary.**

**Return type**

`List`\[`Tuple`\[`str`, `List`\[`float`]]]

**Returns**

end geometry
