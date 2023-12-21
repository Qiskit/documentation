# qiskit.chemistry.drivers.FCIDumpDriver.dump

`static FCIDumpDriver.dump(q_mol, outpath, orbsym=None, isym=1)`

Convenience method to produce an FCIDump output file.

**Parameters**

*   **outpath** (`str`) – Path to the output file.
*   **q\_mol** (`QMolecule`) – QMolecule data to be dumped. It is assumed that the nuclear\_repulsion\_energy in this QMolecule instance contains the inactive core energy.
*   **orbsym** (`Optional`\[`List`\[`str`]]) – A list of spatial symmetries of the orbitals.
*   **isym** (`int`) – The spatial symmetry of the wave function.

**Return type**

`None`
