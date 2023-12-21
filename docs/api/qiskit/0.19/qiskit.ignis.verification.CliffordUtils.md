---
title: CliffordUtils
description: API reference for qiskit.ignis.verification.CliffordUtils
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.verification.CliffordUtils
---

# CliffordUtils

<span id="qiskit.ignis.verification.CliffordUtils" />

`CliffordUtils(num_qubits=2, group_tables=None, elmnt=None, gatelist=None, elmnt_key=None)`

Class for util functions for the Clifford group.

**Parameters**

*   **num\_qubits** (*int*) – number of qubits, dimension of the Clifford object.
*   **group\_tables** (*dict*) – table of all the Clifford objects of a given dimension.
*   **elmnt** ([*Clifford*](qiskit.ignis.verification.Clifford "qiskit.ignis.verification.Clifford")) – a Clifford group element.
*   **elmnt\_key** (*str*) – a unique index of a Clifford object.
*   **gatelist** (*list*) – a list of gates corresponding to a Clifford object.

## Methods

|                                                                                                                                                                                 |                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [`CliffordUtils.clifford1_gates`](qiskit.ignis.verification.CliffordUtils.clifford1_gates "qiskit.ignis.verification.CliffordUtils.clifford1_gates")(idx)                       | Make a single qubit Clifford gate.                                        |
| [`CliffordUtils.clifford1_gates_table`](qiskit.ignis.verification.CliffordUtils.clifford1_gates_table "qiskit.ignis.verification.CliffordUtils.clifford1_gates_table")()        | Generate a table of all 1-qubit Clifford gates.                           |
| [`CliffordUtils.clifford2_gates`](qiskit.ignis.verification.CliffordUtils.clifford2_gates "qiskit.ignis.verification.CliffordUtils.clifford2_gates")(idx)                       | Make a 2-qubit Clifford gate.                                             |
| [`CliffordUtils.clifford2_gates_table`](qiskit.ignis.verification.CliffordUtils.clifford2_gates_table "qiskit.ignis.verification.CliffordUtils.clifford2_gates_table")()        | Generate a table of all 2-qubit Clifford gates.                           |
| [`CliffordUtils.clifford_from_gates`](qiskit.ignis.verification.CliffordUtils.clifford_from_gates "qiskit.ignis.verification.CliffordUtils.clifford_from_gates")(…)             | Generate a Clifford object from a list of gates.                          |
| [`CliffordUtils.compose_gates`](qiskit.ignis.verification.CliffordUtils.compose_gates "qiskit.ignis.verification.CliffordUtils.compose_gates")(cliff, gatelist)                 | Add gates to a Clifford object from a list of gates.                      |
| [`CliffordUtils.cx_gates`](qiskit.ignis.verification.CliffordUtils.cx_gates "qiskit.ignis.verification.CliffordUtils.cx_gates")(gatelist, ctrl, tgt)                            | Adds a controlled-x gate on qubits ctrl and tgt to a given list of gates. |
| [`CliffordUtils.elmnt`](qiskit.ignis.verification.CliffordUtils.elmnt "qiskit.ignis.verification.CliffordUtils.elmnt")()                                                        | Return a Clifford object.                                                 |
| [`CliffordUtils.elmnt_key`](qiskit.ignis.verification.CliffordUtils.elmnt_key "qiskit.ignis.verification.CliffordUtils.elmnt_key")()                                            | Return a unique index of a Clifford object.                               |
| [`CliffordUtils.find_inverse_gates`](qiskit.ignis.verification.CliffordUtils.find_inverse_gates "qiskit.ignis.verification.CliffordUtils.find_inverse_gates")(num\_qubits, …)   | Find the inverse of a Clifford gate.                                      |
| [`CliffordUtils.find_key`](qiskit.ignis.verification.CliffordUtils.find_key "qiskit.ignis.verification.CliffordUtils.find_key")(cliff, num\_qubits)                             | Find the Clifford index.                                                  |
| [`CliffordUtils.gatelist`](qiskit.ignis.verification.CliffordUtils.gatelist "qiskit.ignis.verification.CliffordUtils.gatelist")()                                               | Return a list of gates corresponding to a Clifford object.                |
| [`CliffordUtils.group_tables`](qiskit.ignis.verification.CliffordUtils.group_tables "qiskit.ignis.verification.CliffordUtils.group_tables")()                                   | Return the Clifford group tables.                                         |
| [`CliffordUtils.h_gates`](qiskit.ignis.verification.CliffordUtils.h_gates "qiskit.ignis.verification.CliffordUtils.h_gates")(gatelist, q, h)                                    | Append a hadamard gate on qubit q to a given list of gates.               |
| [`CliffordUtils.load_clifford_table`](qiskit.ignis.verification.CliffordUtils.load_clifford_table "qiskit.ignis.verification.CliffordUtils.load_clifford_table")(\[picklefile]) | Load pickled files of the tables of 1 and 2 qubit Clifford group tables.  |
| [`CliffordUtils.load_tables`](qiskit.ignis.verification.CliffordUtils.load_tables "qiskit.ignis.verification.CliffordUtils.load_tables")(num\_qubits)                           | Return the Clifford group tables.                                         |
| [`CliffordUtils.num_qubits`](qiskit.ignis.verification.CliffordUtils.num_qubits "qiskit.ignis.verification.CliffordUtils.num_qubits")()                                         | Return the number of qubits of the Clifford object.                       |
| [`CliffordUtils.pauli_gates`](qiskit.ignis.verification.CliffordUtils.pauli_gates "qiskit.ignis.verification.CliffordUtils.pauli_gates")(gatelist, q, pauli)                    | Append a pauli gate on qubit q to a given list of gates.                  |
| [`CliffordUtils.pickle_clifford_table`](qiskit.ignis.verification.CliffordUtils.pickle_clifford_table "qiskit.ignis.verification.CliffordUtils.pickle_clifford_table")(\[…])    | Create pickled versions of the 1 or 2 qubit Clifford group tables.        |
| [`CliffordUtils.random_gates`](qiskit.ignis.verification.CliffordUtils.random_gates "qiskit.ignis.verification.CliffordUtils.random_gates")(num\_qubits\[, …])                  | Pick a random Clifford gate on num\_qubits.                               |
| [`CliffordUtils.v_gates`](qiskit.ignis.verification.CliffordUtils.v_gates "qiskit.ignis.verification.CliffordUtils.v_gates")(gatelist, q, v)                                    | Adds an axis-swap gate V or W on qubit q to a given list of gates.        |

