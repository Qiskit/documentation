---
title: QFI
description: API reference for qiskit.opflow.gradients.QFI
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.gradients.QFI
---

# QFI

<span id="qiskit.opflow.gradients.QFI" />

`QFI(qfi_method='lin_comb_full')`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/opflow/gradients/qfi.py "view source code")

Bases: [`qiskit.opflow.gradients.qfi_base.QFIBase`](qiskit.opflow.gradients.QFIBase "qiskit.opflow.gradients.qfi_base.QFIBase")

Compute the Quantum Fisher Information (QFI).

Computes the QFI given a pure, parameterized quantum state, where QFI is:

$$
\mathrm{QFI}_{kl}= 4 \mathrm{Re}[\langle \partial_k \psi \vert  \partial_l \psi \rangle
    − \langle\partial_k \psi \vert  \psi \rangle \langle\psi \vert  \partial_l \psi \rangle].
$$

**Parameters**

**qfi\_method** (`Union`\[`str`, [`CircuitQFI`](qiskit.opflow.gradients.CircuitQFI "qiskit.opflow.gradients.circuit_qfis.circuit_qfi.CircuitQFI")]) – The method used to compute the state/probability gradient. Can be either a [`CircuitQFI`](qiskit.opflow.gradients.CircuitQFI "qiskit.opflow.gradients.CircuitQFI") instance or one of the following pre-defined strings `'lin_comb_full'`, `` 'overlap_diag'` `` or `` 'overlap_block_diag'` ``.

**Raises**

**ValueError** – if `qfi_method` is neither a `CircuitQFI` object nor one of the predefined strings.

**Methods Defined Here**

|                                                                                        |                                                                                                                                       |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [`convert`](qiskit.opflow.gradients.QFI#convert "qiskit.opflow.gradients.QFI.convert") | **type operator**[`CircuitStateFn`](qiskit.opflow.state_fns.CircuitStateFn "qiskit.opflow.state_fns.circuit_state_fn.CircuitStateFn") |

## Attributes

<span id="qiskit.opflow.gradients.QFI.qfi_method" />

### qfi\_method

Returns `CircuitQFI`.

**Return type**

[`CircuitQFI`](qiskit.opflow.gradients.CircuitQFI "qiskit.opflow.gradients.circuit_qfis.circuit_qfi.CircuitQFI")

**Returns**

`CircuitQFI`.

