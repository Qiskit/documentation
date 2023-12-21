# qiskit.chemistry.algorithms.MinimumEigensolverFactory.get\_solver

`abstract MinimumEigensolverFactory.get_solver(transformation)`

Returns a minimum eigensolver, based on the qubit operator transformation.

**Parameters**

**transformation** (`Transformation`) – The qubit operator transformation.

**Return type**

`MinimumEigensolver`

**Returns**

A minimum eigensolver suitable to compute the ground state of the molecule transformed by `transformation`.
