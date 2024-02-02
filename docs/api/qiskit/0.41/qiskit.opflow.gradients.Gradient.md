---
title: Gradient
description: API reference for qiskit.opflow.gradients.Gradient
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.gradients.Gradient
---

# Gradient

<span id="qiskit.opflow.gradients.Gradient" />

`Gradient(grad_method='param_shift', **kwargs)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/opflow/gradients/gradient.py "view source code")

Bases: [`qiskit.opflow.gradients.gradient_base.GradientBase`](qiskit.opflow.gradients.GradientBase "qiskit.opflow.gradients.gradient_base.GradientBase")

Convert an operator expression to the first-order gradient.

**Parameters**

*   **grad\_method** (`Union`\[`str`, [`CircuitGradient`](qiskit.opflow.gradients.CircuitGradient "qiskit.opflow.gradients.circuit_gradients.circuit_gradient.CircuitGradient")]) – The method used to compute the state/probability gradient. Can be either `'param_shift'` or `'lin_comb'` or `'fin_diff'`. Ignored for gradients w\.r.t observable parameters.
*   **kwargs** (*dict*) – Optional parameters for a CircuitGradient

**Raises**

**ValueError** – If method != `fin_diff` and `epsilon` is not None.

**Methods Defined Here**

|                                                                                                                 |                                                                                                          |
| --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [`convert`](qiskit.opflow.gradients.Gradient#convert "qiskit.opflow.gradients.Gradient.convert")                | **type operator**[`OperatorBase`](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase") |
| [`get_gradient`](qiskit.opflow.gradients.Gradient#get_gradient "qiskit.opflow.gradients.Gradient.get_gradient") | Get the gradient for the given operator w\.r.t.                                                          |

## Attributes

<span id="qiskit.opflow.gradients.Gradient.grad_method" />

### grad\_method

Returns `CircuitGradient`.

**Return type**

[`CircuitGradient`](qiskit.opflow.gradients.CircuitGradient "qiskit.opflow.gradients.circuit_gradients.circuit_gradient.CircuitGradient")

**Returns**

`CircuitGradient`.

