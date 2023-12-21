# qiskit.chemistry.transformations.BosonicTransformation.transform

`BosonicTransformation.transform(driver, aux_operators=None)`

Transformation to qubit operator from the driver

**Parameters**

*   **driver** (`BaseDriver`) – BaseDriver
*   **aux\_operators** (`Optional`\[`List`\[`Any`]]) – Optional additional aux ops to evaluate

**Return type**

`Tuple`\[`WeightedPauliOperator`, `List`\[`WeightedPauliOperator`]]

**Returns**

qubit operator, auxiliary operators
