# qiskit.opflow\.gradients.QFI.convert

`QFI.convert(operator, params=None)`

**Parameters**

*   **operator** (`CircuitStateFn`) – The operator corresponding to the quantum state |ψ(ω)〉for which we compute the QFI
*   **params** (`Union`\[`ParameterVector`, `ParameterExpression`, `List`\[`ParameterExpression`], `None`]) – The parameters we are computing the QFI wrt: ω If not explicitly passed, they are inferred from the operator and sorted by name.

**Return type**

`ListOp`

**Returns**

ListOp\[ListOp] where the operator at position k,l corresponds to QFI\_kl

**Raises**

**ValueError** – If operator is not parameterized.
