# qiskit.algorithms.VQE.construct\_expectation

`VQE.construct_expectation(parameter, operator, return_expectation=False)`

Generate the ansatz circuit and expectation value measurement, and return their runnable composition.

**Parameters**

*   **parameter** (`Union`\[`List`\[`float`], `List`\[`Parameter`], `ndarray`]) – Parameters for the ansatz circuit.
*   **operator** (`OperatorBase`) – Qubit operator of the Observable
*   **return\_expectation** (`bool`) – If True, return the `ExpectationBase` expectation converter used in the construction of the expectation value. Useful e.g. to compute the standard deviation of the expectation value.

**Return type**

`Union`\[`OperatorBase`, `Tuple`\[`OperatorBase`, `ExpectationBase`]]

**Returns**

The Operator equalling the measurement of the ansatz `StateFn` by the Observable’s expectation `StateFn`, and, optionally, the expectation converter.

**Raises**

*   [**AlgorithmError**](qiskit.algorithms.AlgorithmError#qiskit.algorithms.AlgorithmError "qiskit.algorithms.AlgorithmError") – If no operator has been provided.
*   [**AlgorithmError**](qiskit.algorithms.AlgorithmError#qiskit.algorithms.AlgorithmError "qiskit.algorithms.AlgorithmError") – If no expectation is passed and None could be inferred via the ExpectationFactory.
