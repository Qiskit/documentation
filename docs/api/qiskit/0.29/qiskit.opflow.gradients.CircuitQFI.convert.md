# qiskit.opflow\.gradients.CircuitQFI.convert

`abstract CircuitQFI.convert(operator, params)`

**Parameters**

*   **operator** (`OperatorBase`) – The operator corresponding to the quantum state $|\psi(\omega)\rangle$ for which we compute the QFI.
*   **params** (`Union`\[`ParameterExpression`, `ParameterVector`, `List`\[`ParameterExpression`]]) – The parameters $\omega$ with respect to which we are computing the QFI.

**Return type**

`OperatorBase`

**Returns**

An operator whose evaluation yields the QFI metric tensor.

**Raises**

**ValueError** – If `params` contains a parameter not present in `operator`.
