# qiskit.circuit.library.QuadraticForm.required\_result\_qubits

`static QuadraticForm.required_result_qubits(quadratic, linear, offset)`

Get the number of required result qubits.

**Parameters**

*   **quadratic** (`Union`\[`ndarray`, `List`\[`List`\[`float`]]]) – A matrix containing the quadratic coefficients.
*   **linear** (`Union`\[`ndarray`, `List`\[`float`]]) – An array containing the linear coefficients.
*   **offset** (`float`) – A constant offset.

**Return type**

`int`

**Returns**

The number of qubits needed to represent the value of the quadratic form in twos complement.
