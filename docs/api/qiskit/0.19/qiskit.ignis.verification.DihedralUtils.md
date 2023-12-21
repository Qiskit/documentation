---
title: DihedralUtils
description: API reference for qiskit.ignis.verification.DihedralUtils
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.verification.DihedralUtils
---

# DihedralUtils

<span id="qiskit.ignis.verification.DihedralUtils" />

`DihedralUtils(num_qubits=2, group_tables=None, elmnt=None, gatelist=None, elmnt_key=None)`

Class for util functions for the CNOT-dihedral group.

**Parameters**

*   **num\_qubits** (*int*) – number of qubits, dimension of the CNOT-dihedral object.
*   **group\_tables** (*dict*) – table of all CNOTDihedral objects of a given dimension.
*   **elmnt** ([*CNOTDihedral*](qiskit.ignis.verification.CNOTDihedral "qiskit.ignis.verification.CNOTDihedral")) – a CNOT-dihedral group element.
*   **elmnt\_key** (*str*) – a unique key of a CNOTDihedral object.
*   **gatelist** (*list*) – a list of gates corresponding to a CNOTDihedral object.

## Methods

|                                                                                                                                                                                        |                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`DihedralUtils.cnot_dihedral_gates`](qiskit.ignis.verification.DihedralUtils.cnot_dihedral_gates "qiskit.ignis.verification.DihedralUtils.cnot_dihedral_gates")(idx, …)               | Make a single CNOT-dihedral element on num\_qubits.                  |
| [`DihedralUtils.cnot_dihedral_tables`](qiskit.ignis.verification.DihedralUtils.cnot_dihedral_tables "qiskit.ignis.verification.DihedralUtils.cnot_dihedral_tables")(num\_qubits)       | Generate a table of all CNOT-dihedral group elements on num\_qubits. |
| [`DihedralUtils.compose_gates`](qiskit.ignis.verification.DihedralUtils.compose_gates "qiskit.ignis.verification.DihedralUtils.compose_gates")(elem, next\_elem)                       | Compose two CNOTDihedral objects.                                    |
| [`DihedralUtils.elem_to_gates`](qiskit.ignis.verification.DihedralUtils.elem_to_gates "qiskit.ignis.verification.DihedralUtils.elem_to_gates")(circ)                                   | Convert a CNOT-dihedral list of gates for the QuantumCircuit.        |
| [`DihedralUtils.elmnt`](qiskit.ignis.verification.DihedralUtils.elmnt "qiskit.ignis.verification.DihedralUtils.elmnt")()                                                               | Return a CNOTDihedral object.                                        |
| [`DihedralUtils.elmnt_key`](qiskit.ignis.verification.DihedralUtils.elmnt_key "qiskit.ignis.verification.DihedralUtils.elmnt_key")()                                                   | Return a unique key of a CNOTDihedral object.                        |
| [`DihedralUtils.find_inverse_gates`](qiskit.ignis.verification.DihedralUtils.find_inverse_gates "qiskit.ignis.verification.DihedralUtils.find_inverse_gates")(num\_qubits, …)          | Find the inverse of a CNOT-dihedral element.                         |
| [`DihedralUtils.find_key`](qiskit.ignis.verification.DihedralUtils.find_key "qiskit.ignis.verification.DihedralUtils.find_key")(elem, num\_qubits)                                     | Find the key of a CNOTDihedral object in the group table.            |
| [`DihedralUtils.gatelist`](qiskit.ignis.verification.DihedralUtils.gatelist "qiskit.ignis.verification.DihedralUtils.gatelist")()                                                      | Return a list of gates corresponding to a CNOTDihedral object.       |
| [`DihedralUtils.group_tables`](qiskit.ignis.verification.DihedralUtils.group_tables "qiskit.ignis.verification.DihedralUtils.group_tables")()                                          | Return the CNOT-dihedral group tables.                               |
| [`DihedralUtils.load_dihedral_table`](qiskit.ignis.verification.DihedralUtils.load_dihedral_table "qiskit.ignis.verification.DihedralUtils.load_dihedral_table")(\[picklefile])        | Load pickled files of the CNOT-dihedral group tables.                |
| [`DihedralUtils.load_tables`](qiskit.ignis.verification.DihedralUtils.load_tables "qiskit.ignis.verification.DihedralUtils.load_tables")(num\_qubits)                                  | Return the CNOT dihedral group tables.                               |
| [`DihedralUtils.num_qubits`](qiskit.ignis.verification.DihedralUtils.num_qubits "qiskit.ignis.verification.DihedralUtils.num_qubits")()                                                | Return the number of qubits of the CNOTDihedral object.              |
| [`DihedralUtils.pickle_dihedral_table`](qiskit.ignis.verification.DihedralUtils.pickle_dihedral_table "qiskit.ignis.verification.DihedralUtils.pickle_dihedral_table")(\[num\_qubits]) | Create pickled versions of the CNOT-dihedral group tables.           |
| [`DihedralUtils.random_gates`](qiskit.ignis.verification.DihedralUtils.random_gates "qiskit.ignis.verification.DihedralUtils.random_gates")(num\_qubits)                               | Pick a random CNOT-dihedral element on num\_qubits.                  |

