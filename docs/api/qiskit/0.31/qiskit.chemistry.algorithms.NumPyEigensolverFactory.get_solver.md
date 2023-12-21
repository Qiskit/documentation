# qiskit.chemistry.algorithms.NumPyEigensolverFactory.get\_solver

`NumPyEigensolverFactory.get_solver(transformation)`

Returns a NumPyEigensolver with the desired filter

**Parameters**

**transformation** (`Transformation`) – a fermionic/bosonic qubit operator transformation.

**Return type**

`Eigensolver`

**Returns**

A NumPyEigensolver suitable to compute the ground state of the molecule transformed by `transformation`.
