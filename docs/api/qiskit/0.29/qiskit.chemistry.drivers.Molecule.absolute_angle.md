# qiskit.chemistry.drivers.Molecule.absolute\_angle

`classmethod Molecule.absolute_angle(angle, geometry, atom_trio)`

**Parameters**

*   **angle** (`float`) – The magnitude of the perturbation in **radians**. **Positive bend is always in the direction toward Atom3.** the direction of increasing the starting angle.\*\*
*   **geometry** (`List`\[`Tuple`\[`str`, `List`\[`float`]]]) – The initial geometry to perturb.
*   **atom\_trio** (`Tuple`\[`int`, `int`, `int`]) – A tuple with three integers, indexing which atoms from the starting geometry should be bent apart. **Atom1 is bent \*away\* from Atom3 by an angle whose vertex is Atom2 and equal to \*\*angle**, while Atom2 and Atom3 remain stationary.\*\*

**Return type**

`List`\[`Tuple`\[`str`, `List`\[`float`]]]

**Returns**

end geometry
