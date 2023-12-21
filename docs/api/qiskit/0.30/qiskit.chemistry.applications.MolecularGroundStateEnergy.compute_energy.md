# qiskit.chemistry.applications.MolecularGroundStateEnergy.compute\_energy

`MolecularGroundStateEnergy.compute_energy(callback=None)`

Compute the ground state energy of the molecule that was supplied via the driver

**Parameters**

**callback** (`Optional`\[`Callable`\[\[`List`, `int`, `str`, `bool`, `Z2Symmetries`], `MinimumEigensolver`]]) – If not None will be called with the following values num\_particles, num\_orbitals, qubit\_mapping, two\_qubit\_reduction, z2\_symmetries in that order. This information can then be used to setup chemistry specific component(s) that are needed by the chosen MinimumEigensolver. The MinimumEigensolver can then be built and returned from this callback for use as the solver here.

**Return type**

`MolecularGroundStateResult`

**Returns**

A molecular ground state result

**Raises**

[**QiskitChemistryError**](qiskit.chemistry.QiskitChemistryError#qiskit.chemistry.QiskitChemistryError "qiskit.chemistry.QiskitChemistryError") – If no MinimumEigensolver was given and no callback is being used that could supply one instead.
