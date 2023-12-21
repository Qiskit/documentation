# qiskit.chemistry.drivers.Molecule.absolute\_distance

`classmethod Molecule.absolute_distance(distance, geometry, atom_pair)`

**Parameters**

*   **distance** (`float`) – The (new) distance between the two atoms.
*   **geometry** (`List`\[`Tuple`\[`str`, `List`\[`float`]]]) – The initial geometry to perturb.
*   **atom\_pair** (`Tuple`\[`int`, `int`]) – A tuple with two integers, indexing which atoms from the starting geometry should be moved apart. **Atom1 is moved away (at the given distance) from Atom2, while Atom2 remains stationary.**

**Return type**

`List`\[`Tuple`\[`str`, `List`\[`float`]]]

**Returns**

end geometry
