# qiskit.chemistry.algorithms.NumPyMinimumEigensolverFactory.get\_solver

`NumPyMinimumEigensolverFactory.get_solver(transformation)`

Returns a NumPyMinimumEigensolver which possibly uses the default filter criterion provided by the `transformation`.

**Parameters**

**transformation** (`Transformation`) – a fermionic/bosonic qubit operator transformation.

**Return type**

`MinimumEigensolver`

**Returns**

A NumPyMinimumEigensolver suitable to compute the ground state of the molecule transformed by `transformation`.
