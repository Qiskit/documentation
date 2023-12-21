---
title: BasicUtils
description: API reference for qiskit.ignis.verification.BasicUtils
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.verification.BasicUtils
---

# BasicUtils

<span id="qiskit.ignis.verification.BasicUtils" />

`BasicUtils`

Abstract base class (ABS) for utils for various groups and sets of gates for randomized benchmarking.

## Methods

|                                                                                                                                                        |                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| [`BasicUtils.compose_gates`](qiskit.ignis.verification.BasicUtils.compose_gates "qiskit.ignis.verification.BasicUtils.compose_gates")()                | Compose group elements.                                           |
| [`BasicUtils.elmnt`](qiskit.ignis.verification.BasicUtils.elmnt "qiskit.ignis.verification.BasicUtils.elmnt")()                                        | Return a group element.                                           |
| [`BasicUtils.elmnt_key`](qiskit.ignis.verification.BasicUtils.elmnt_key "qiskit.ignis.verification.BasicUtils.elmnt_key")()                            | Return a key of a group element in the table.                     |
| [`BasicUtils.find_inverse_gates`](qiskit.ignis.verification.BasicUtils.find_inverse_gates "qiskit.ignis.verification.BasicUtils.find_inverse_gates")() | Compute an inverse of a group element.                            |
| [`BasicUtils.find_key`](qiskit.ignis.verification.BasicUtils.find_key "qiskit.ignis.verification.BasicUtils.find_key")()                               | Return a key to the group element.                                |
| [`BasicUtils.gatelist`](qiskit.ignis.verification.BasicUtils.gatelist "qiskit.ignis.verification.BasicUtils.gatelist")()                               | Return a list of gates corresponding to a group element.          |
| [`BasicUtils.group_tables`](qiskit.ignis.verification.BasicUtils.group_tables "qiskit.ignis.verification.BasicUtils.group_tables")()                   | Return the group tables.                                          |
| [`BasicUtils.load_tables`](qiskit.ignis.verification.BasicUtils.load_tables "qiskit.ignis.verification.BasicUtils.load_tables")()                      | Load pickled group tables, or generate them if they do not exist. |
| [`BasicUtils.num_qubits`](qiskit.ignis.verification.BasicUtils.num_qubits "qiskit.ignis.verification.BasicUtils.num_qubits")()                         | Return the number of qubits.                                      |
| [`BasicUtils.random_gates`](qiskit.ignis.verification.BasicUtils.random_gates "qiskit.ignis.verification.BasicUtils.random_gates")()                   | Pick a random group element.                                      |

