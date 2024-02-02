---
title: QFI
description: API reference for qiskit.opflow.gradients.QFI
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.gradients.QFI
---

# QFI

<span id="qiskit.opflow.gradients.QFI" />

`QFI(qfi_method='lin_comb_full')`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/opflow/gradients/qfi.py "view source code")

Bases: [`QFIBase`](qiskit.opflow.gradients.QFIBase "qiskit.opflow.gradients.qfi_base.QFIBase")

Deprecated: Compute the Quantum Fisher Information (QFI).

Computes the QFI given a pure, parameterized quantum state, where QFI is:

$$
\mathrm{QFI}_{kl}= 4 \mathrm{Re}[\langle \partial_k \psi \vert  \partial_l \psi \rangle
    − \langle\partial_k \psi \vert  \psi \rangle \langle\psi \vert  \partial_l \psi \rangle].
$$

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.gradients.qfi.QFI` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

**Methods Defined Here**

|                                                                                        |                                                                                               |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [`convert`](qiskit.opflow.gradients.QFI#convert "qiskit.opflow.gradients.QFI.convert") | **param operator**The operator corresponding to the quantum state \|ψ(ω)〉for which we compute |

## Attributes

<span id="qiskit.opflow.gradients.QFI.qfi_method" />

### qfi\_method

Returns `CircuitQFI`.

**Returns**

`CircuitQFI`.

