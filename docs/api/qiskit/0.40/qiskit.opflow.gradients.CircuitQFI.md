---
title: CircuitQFI
description: API reference for qiskit.opflow.gradients.CircuitQFI
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.gradients.CircuitQFI
---

# CircuitQFI

<span id="qiskit.opflow.gradients.CircuitQFI" />

`CircuitQFI`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/opflow/gradients/circuit_qfis/circuit_qfi.py "view source code")

Bases: [`qiskit.opflow.converters.converter_base.ConverterBase`](qiskit.opflow.converters.ConverterBase "qiskit.opflow.converters.converter_base.ConverterBase")

Circuit to Quantum Fisher Information operator converter.

Converter for changing parameterized circuits into operators whose evaluation yields Quantum Fisher Information metric tensor with respect to the given circuit parameters

This is distinct from DerivativeBase converters which take gradients of composite operators and handle things like differentiating combo\_fn’s and enforcing product rules when operator coefficients are parameterized.

CircuitQFI - uses quantum techniques to get the QFI of circuits DerivativeBase - uses classical techniques to differentiate opflow data structures

**Methods Defined Here**

|                                                                                                      |                                                                                                          |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [`convert`](qiskit.opflow.gradients.CircuitQFI#convert "qiskit.opflow.gradients.CircuitQFI.convert") | **type operator**[`OperatorBase`](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase") |

