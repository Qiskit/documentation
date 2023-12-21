# qiskit.chemistry.transformations.FermionicTransformation.transform

`FermionicTransformation.transform(driver, aux_operators=None)`

Transformation from the `driver` to a qubit operator.

**Parameters**

*   **driver** (`BaseDriver`) – A driver encoding the molecule information.
*   **aux\_operators** (`Optional`\[`List`\[`FermionicOperator`]]) – Additional auxiliary `FermionicOperator` instances to evaluate.

**Return type**

`Tuple`\[`OperatorBase`, `List`\[`OperatorBase`]]

**Returns**

A qubit operator and a dictionary of auxiliary operators.
