---
title: CircuitQFI
description: API reference for qiskit.opflow.gradients.CircuitQFI
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.gradients.CircuitQFI
---

# CircuitQFI

<span id="qiskit.opflow.gradients.CircuitQFI" />

`CircuitQFI`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/opflow/gradients/circuit_qfis/circuit_qfi.py "view source code")

Bases: [`ConverterBase`](qiskit.opflow.converters.ConverterBase "qiskit.opflow.converters.converter_base.ConverterBase")

Deprecated: Circuit to Quantum Fisher Information operator converter.

Converter for changing parameterized circuits into operators whose evaluation yields Quantum Fisher Information metric tensor with respect to the given circuit parameters

This is distinct from DerivativeBase converters which take gradients of composite operators and handle things like differentiating combo\_fn’s and enforcing product rules when operator coefficients are parameterized.

CircuitQFI - uses quantum techniques to get the QFI of circuits DerivativeBase - uses classical techniques to differentiate opflow data structures

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.gradients.circuit_qfis.circuit_qfi.CircuitQFI` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

**Methods Defined Here**

|                                                                                                      |                                                                                               |
| ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [`convert`](qiskit.opflow.gradients.CircuitQFI#convert "qiskit.opflow.gradients.CircuitQFI.convert") | **param operator**The operator corresponding to the quantum state $\vert \psi(\omega)\rangle$ |

