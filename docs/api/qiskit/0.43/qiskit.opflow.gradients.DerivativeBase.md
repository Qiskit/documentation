---
title: DerivativeBase
description: API reference for qiskit.opflow.gradients.DerivativeBase
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.gradients.DerivativeBase
---

# DerivativeBase

<span id="qiskit.opflow.gradients.DerivativeBase" />

`DerivativeBase`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/opflow/gradients/derivative_base.py "view source code")

Bases: [`ConverterBase`](qiskit.opflow.converters.ConverterBase "qiskit.opflow.converters.converter_base.ConverterBase")

Deprecated: Base class for differentiating opflow objects.

Converter for differentiating opflow objects and handling things like properly differentiating combo\_fn’s and enforcing product rules when operator coefficients are parameterized.

This is distinct from CircuitGradient converters which use quantum techniques such as parameter shifts and linear combination of unitaries to compute derivatives of circuits.

CircuitGradient - uses quantum techniques to get derivatives of circuits DerivativeBase - uses classical techniques to differentiate opflow data structures

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.gradients.derivative_base.DerivativeBase` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

**Methods Defined Here**

|                                                                                                                                                                    |                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| [`convert`](qiskit.opflow.gradients.DerivativeBase#convert "qiskit.opflow.gradients.DerivativeBase.convert")                                                       | **param operator**The operator we are taking the gradient, Hessian or QFI of                               |
| [`gradient_wrapper`](qiskit.opflow.gradients.DerivativeBase#gradient_wrapper "qiskit.opflow.gradients.DerivativeBase.gradient_wrapper")                            | Get a callable function which provides the respective gradient, Hessian or QFI for given parameter values. |
| [`parameter_expression_grad`](qiskit.opflow.gradients.DerivativeBase#parameter_expression_grad "qiskit.opflow.gradients.DerivativeBase.parameter_expression_grad") | Get the derivative of a parameter expression w\.r.t.                                                       |

