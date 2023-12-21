# qiskit.aqua.algorithms.IQPE.compute\_minimum\_eigenvalue

`IQPE.compute_minimum_eigenvalue(operator=None, aux_operators=None)`

Computes minimum eigenvalue. Operator and aux\_operators can be supplied here and if not None will override any already set into algorithm so it can be reused with different operators. While an operator is required by algorithms, aux\_operators are optional. To ‘remove’ a previous aux\_operators array use an empty list here.

**Parameters**

*   **operator** (`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]) – If not None replaces operator in algorithm
*   **aux\_operators** (`Optional`\[`List`\[`Union`\[`OperatorBase`, `LegacyBaseOperator`]]]) – If not None replaces aux\_operators in algorithm

**Return type**

`MinimumEigensolverResult`

**Returns**

MinimumEigensolverResult
