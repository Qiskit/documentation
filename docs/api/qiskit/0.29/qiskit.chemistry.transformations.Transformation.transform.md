# qiskit.chemistry.transformations.Transformation.transform

`abstract Transformation.transform(driver, aux_operators=None)`

Transformation from the `driver` to a qubit operator.

**Parameters**

*   **driver** (`BaseDriver`) – A driver encoding the molecule information.
*   **aux\_operators** (`Union`\[`List`\[`FermionicOperator`], `List`\[`BosonicOperator`], `None`]) – Additional auxiliary operators to evaluate. Must be of type `FermionicOperator` if the qubit transformation is fermionic and of type `BosonicOperator` it is bosonic.

**Return type**

`Tuple`\[`OperatorBase`, `List`\[`OperatorBase`]]

**Returns**

A qubit operator and a dictionary of auxiliary operators.
