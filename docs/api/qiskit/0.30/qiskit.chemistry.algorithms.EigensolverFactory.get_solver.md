# qiskit.chemistry.algorithms.EigensolverFactory.get\_solver

`abstract EigensolverFactory.get_solver(transformation)`

Returns a eigensolver, based on the qubit operator transformation.

**Parameters**

**transformation** (`Transformation`) – The qubit operator transformation.

**Return type**

`Eigensolver`

**Returns**

An eigensolver suitable to compute the excited states of the molecule transformed by `transformation`.
