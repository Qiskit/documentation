# qiskit.chemistry.transformations.FermionicTransformation.get\_default\_filter\_criterion

`FermionicTransformation.get_default_filter_criterion()`

Returns a default filter criterion method to filter the eigenvalues computed by the eigen solver. For more information see also aqua.algorithms.eigen\_solvers.NumPyEigensolver.filter\_criterion.

In the fermionic case the default filter ensures that the number of particles is being preserved.

**Return type**

`Optional`\[`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Optional`\[`List`\[`float`]]], `bool`]]
