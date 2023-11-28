# DerivativeBase

<span id="undefined" />

`DerivativeBase`

Bases: `qiskit.aqua.operators.converters.converter_base.ConverterBase`

Base class for differentiating opflow objects.

Converter for differentiating opflow objects and handling things like properly differentiating combo\_fn’s and enforcing product rules when operator coefficients are parameterized.

This is distinct from CircuitGradient converters which use quantum techniques such as parameter shifts and linear combination of unitaries to compute derivatives of circuits.

CircuitGradient - uses quantum techniques to get derivatives of circuits DerivativeBase - uses classical techniques to differentiate opflow data structures

## Methods

|                                                                                                                                                                                                                                                             |                                                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| [`convert`](qiskit.aqua.operators.gradients.DerivativeBase.convert#qiskit.aqua.operators.gradients.DerivativeBase.convert "qiskit.aqua.operators.gradients.DerivativeBase.convert")                                                                         | **type operator**`OperatorBase`                                                                            |
| [`gradient_wrapper`](qiskit.aqua.operators.gradients.DerivativeBase.gradient_wrapper#qiskit.aqua.operators.gradients.DerivativeBase.gradient_wrapper "qiskit.aqua.operators.gradients.DerivativeBase.gradient_wrapper")                                     | Get a callable function which provides the respective gradient, Hessian or QFI for given parameter values. |
| [`parameter_expression_grad`](qiskit.aqua.operators.gradients.DerivativeBase.parameter_expression_grad#qiskit.aqua.operators.gradients.DerivativeBase.parameter_expression_grad "qiskit.aqua.operators.gradients.DerivativeBase.parameter_expression_grad") | Get the derivative of a parameter expression w\.r.t.                                                       |
