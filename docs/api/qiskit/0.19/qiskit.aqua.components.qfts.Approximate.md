---
title: Approximate
description: API reference for qiskit.aqua.components.qfts.Approximate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.qfts.Approximate
---

# Approximate

<span id="qiskit.aqua.components.qfts.Approximate" />

`Approximate(num_qubits, degree=0)`

The Approximate QFT.

This is an Approximate Quantum Fourier Transform as described in [https://arxiv.org/abs/1803.04933](https://arxiv.org/abs/1803.04933).

**Parameters**

*   **num\_qubits** (`int`) – The number of qubits
*   **degree** (`int`) – The degree of approximation. 0 is the minimum value and causes no approximation so will in fact be the same as a `StandardQFT`.

## Methods

|                                                                                                                                                                      |                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| [`Approximate.construct_circuit`](qiskit.aqua.components.qfts.Approximate.construct_circuit "qiskit.aqua.components.qfts.Approximate.construct_circuit")(\[mode, …]) | Construct the circuit. |

