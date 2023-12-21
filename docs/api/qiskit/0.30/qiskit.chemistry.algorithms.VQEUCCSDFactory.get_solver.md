# qiskit.chemistry.algorithms.VQEUCCSDFactory.get\_solver

`VQEUCCSDFactory.get_solver(transformation)`

Returns a VQE with a UCCSD wavefunction ansatz, based on `transformation`. This works only with a `FermionicTransformation`.

**Parameters**

**transformation** (`Transformation`) – a fermionic qubit operator transformation.

**Return type**

`MinimumEigensolver`

**Returns**

A VQE suitable to compute the ground state of the molecule transformed by `transformation`.

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – in case a Transformation of wrong type is given.
