# CircuitGradient

<span id="undefined" />

`CircuitGradient`

Bases: `qiskit.aqua.operators.converters.converter_base.ConverterBase`

Circuit to gradient operator converter.

Converter for changing parameterized circuits into operators whose evaluation yields the gradient with respect to the circuit parameters.

This is distinct from DerivativeBase converters which take gradients of composite operators and handle things like differentiating combo\_fn’s and enforcing product rules when operator coefficients are parameterized.

CircuitGradient - uses quantum techniques to get derivatives of circuits DerivativeBase - uses classical techniques to differentiate operator flow data structures

## Methods

|                                                                                                                                                                                        |                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| [`convert`](qiskit.aqua.operators.gradients.CircuitGradient.convert#qiskit.aqua.operators.gradients.CircuitGradient.convert "qiskit.aqua.operators.gradients.CircuitGradient.convert") | **type operator**`OperatorBase` |
