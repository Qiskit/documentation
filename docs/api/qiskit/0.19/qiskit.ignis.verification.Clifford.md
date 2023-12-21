---
title: Clifford
description: API reference for qiskit.ignis.verification.Clifford
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.verification.Clifford
---

# Clifford

<span id="qiskit.ignis.verification.Clifford" />

`Clifford(num_qubits=None, table=None, phases=None)`

Clifford Operator Class.

## Attributes

|                                                                                                                        |                                               |
| ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| [`Clifford.num_qubits`](qiskit.ignis.verification.Clifford.num_qubits "qiskit.ignis.verification.Clifford.num_qubits") | Return the number of qubits for the Clifford. |
| [`Clifford.phases`](qiskit.ignis.verification.Clifford.phases "qiskit.ignis.verification.Clifford.phases")             | Return the Clifford phases.                   |
| [`Clifford.table`](qiskit.ignis.verification.Clifford.table "qiskit.ignis.verification.Clifford.table")                | Return the Clifford table.                    |

## Methods

|                                                                                                                                                                 |                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| [`Clifford.__getitem__`](qiskit.ignis.verification.Clifford.__getitem__ "qiskit.ignis.verification.Clifford.__getitem__")(index)                                | Get element from internal symplectic table.               |
| [`Clifford.as_dict`](qiskit.ignis.verification.Clifford.as_dict "qiskit.ignis.verification.Clifford.as_dict")()                                                 | Return dictionary (JSON) represenation of Clifford object |
| [`Clifford.cx`](qiskit.ignis.verification.Clifford.cx "qiskit.ignis.verification.Clifford.cx")(qubit\_ctrl, qubit\_trgt)                                        | Apply a Controlled-NOT “cx” gate.                         |
| [`Clifford.cz`](qiskit.ignis.verification.Clifford.cz "qiskit.ignis.verification.Clifford.cz")(qubit\_ctrl, qubit\_trgt)                                        | Apply a Controlled-z “cz” gate.                           |
| [`Clifford.destabilizer`](qiskit.ignis.verification.Clifford.destabilizer "qiskit.ignis.verification.Clifford.destabilizer")(row)                               | Return the destabilizer as a Pauli object.                |
| [`Clifford.from_dict`](qiskit.ignis.verification.Clifford.from_dict "qiskit.ignis.verification.Clifford.from_dict")(clifford\_dict)                             | Load a Clifford from a dictionary.                        |
| [`Clifford.h`](qiskit.ignis.verification.Clifford.h "qiskit.ignis.verification.Clifford.h")(qubit)                                                              | Apply an Hadamard “h” gate to qubit.                      |
| [`Clifford.index`](qiskit.ignis.verification.Clifford.index "qiskit.ignis.verification.Clifford.index")()                                                       | Returns a unique index for the Clifford.                  |
| [`Clifford.s`](qiskit.ignis.verification.Clifford.s "qiskit.ignis.verification.Clifford.s")(qubit)                                                              | Apply a phase “s” gate to qubit.                          |
| [`Clifford.sdg`](qiskit.ignis.verification.Clifford.sdg "qiskit.ignis.verification.Clifford.sdg")(qubit)                                                        | Apply an adjoint phase “sdg” gate to qubit.               |
| [`Clifford.stabilizer`](qiskit.ignis.verification.Clifford.stabilizer "qiskit.ignis.verification.Clifford.stabilizer")(qubit)                                   | Return the qubit stabilizer as a Pauli object.            |
| [`Clifford.swap`](qiskit.ignis.verification.Clifford.swap "qiskit.ignis.verification.Clifford.swap")(qubit0, qubit1)                                            | Apply SWAP gate between two qubits.                       |
| [`Clifford.update_destabilizer`](qiskit.ignis.verification.Clifford.update_destabilizer "qiskit.ignis.verification.Clifford.update_destabilizer")(qubit, pauli) | Update the qubit destabilizer row from a Pauli object.    |
| [`Clifford.update_stabilizer`](qiskit.ignis.verification.Clifford.update_stabilizer "qiskit.ignis.verification.Clifford.update_stabilizer")(qubit, pauli)       | Update the qubit stabilizer row from a Pauli object.      |
| [`Clifford.v`](qiskit.ignis.verification.Clifford.v "qiskit.ignis.verification.Clifford.v")(qubit)                                                              | Apply v gate v = sdg.h .                                  |
| [`Clifford.w`](qiskit.ignis.verification.Clifford.w "qiskit.ignis.verification.Clifford.w")(qubit)                                                              | Apply w gate w = v.v .                                    |
| [`Clifford.x`](qiskit.ignis.verification.Clifford.x "qiskit.ignis.verification.Clifford.x")(qubit)                                                              | Apply a Pauli “x” gate to a qubit.                        |
| [`Clifford.y`](qiskit.ignis.verification.Clifford.y "qiskit.ignis.verification.Clifford.y")(qubit)                                                              | Apply an Pauli “y” gate to a qubit.                       |
| [`Clifford.z`](qiskit.ignis.verification.Clifford.z "qiskit.ignis.verification.Clifford.z")(qubit)                                                              | Apply an Pauli “z” gate to qubit.                         |

