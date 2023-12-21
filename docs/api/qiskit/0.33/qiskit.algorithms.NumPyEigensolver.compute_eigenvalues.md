# qiskit.algorithms.NumPyEigensolver.compute\_eigenvalues

`NumPyEigensolver.compute_eigenvalues(operator, aux_operators=None)`

Computes eigenvalues. Operator and aux\_operators can be supplied here and if not None will override any already set into algorithm so it can be reused with different operators. While an operator is required by algorithms, aux\_operators are optional. To ‘remove’ a previous aux\_operators array use an empty list here.

**Parameters**

*   **operator** (`OperatorBase`) – Qubit operator of the Observable
*   **aux\_operators** (`Union`\[`List`\[`Optional`\[`OperatorBase`]], `Dict`\[`str`, `OperatorBase`], `None`]) – Optional list of auxiliary operators to be evaluated with the eigenstate of the minimum eigenvalue main result and their expectation values returned. For instance in chemistry these can be dipole operators, total particle count operators so we can get values for these at the ground state.

**Return type**

`EigensolverResult`

**Returns**

EigensolverResult
