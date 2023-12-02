# qiskit.aqua.operators.gradients.CircuitGradient

<span id="undefined" />

`CircuitGradient`

Circuit to gradient operator converter.

Converter for changing parameterized circuits into operators whose evaluation yields the gradient with respect to the circuit parameters.

This is distinct from DerivativeBase converters which take gradients of composite operators and handle things like differentiating combo\_fn’s and enforcing product rules when operator coefficients are parameterized.

CircuitGradient - uses quantum techniques to get derivatives of circuits DerivativeBase - uses classical techniques to differentiate operator flow data structures

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                      |                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| [`__init__`](#qiskit.aqua.operators.gradients.CircuitGradient.__init__ "qiskit.aqua.operators.gradients.CircuitGradient.__init__")()                 | Initialize self.                |
| [`convert`](#qiskit.aqua.operators.gradients.CircuitGradient.convert "qiskit.aqua.operators.gradients.CircuitGradient.convert")(operator\[, params]) | **type operator**`OperatorBase` |

<span id="undefined" />

`abstract convert(operator, params=None)`

**Parameters**

*   **operator** (`OperatorBase`) – The operator we are taking the gradient of
*   **params** (`Union`\[`ParameterExpression`, `ParameterVector`, `List`\[`ParameterExpression`], `Tuple`\[`ParameterExpression`, `ParameterExpression`], `List`\[`Tuple`\[`ParameterExpression`, `ParameterExpression`]], `None`]) – The parameters we are taking the gradient wrt: ω If a ParameterExpression, ParameterVector or List\[ParameterExpression] is given, then the 1st order derivative of the operator is calculated. If a Tuple\[ParameterExpression, ParameterExpression] or List\[Tuple\[ParameterExpression, ParameterExpression]] is given, then the 2nd order derivative of the operator is calculated.

**Return type**

`OperatorBase`

**Returns**

An operator whose evaluation yields the Gradient.

**Raises**

**ValueError** – If `params` contains a parameter not present in `operator`.
