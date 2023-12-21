---
title: Quaternion
description: API reference for qiskit.quantum_info.Quaternion
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.Quaternion
---

# Quaternion

<span id="qiskit.quantum_info.Quaternion" />

`Quaternion(data)`

A class representing a Quaternion.

## Methods

|                                                                                                                                                       |                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [`Quaternion.__call__`](qiskit.quantum_info.Quaternion.__call__ "qiskit.quantum_info.Quaternion.__call__")(idx)                                       | Call self as a function.                                                       |
| [`Quaternion.__mul__`](qiskit.quantum_info.Quaternion.__mul__ "qiskit.quantum_info.Quaternion.__mul__")(r)                                            |                                                                                |
| [`Quaternion.from_axis_rotation`](qiskit.quantum_info.Quaternion.from_axis_rotation "qiskit.quantum_info.Quaternion.from_axis_rotation")(angle, axis) | Return quaternion for rotation about given axis.                               |
| [`Quaternion.from_euler`](qiskit.quantum_info.Quaternion.from_euler "qiskit.quantum_info.Quaternion.from_euler")(angles\[, order])                    | Generate a quaternion from a set of Euler angles.                              |
| [`Quaternion.norm`](qiskit.quantum_info.Quaternion.norm "qiskit.quantum_info.Quaternion.norm")()                                                      | Norm of quaternion.                                                            |
| [`Quaternion.normalize`](qiskit.quantum_info.Quaternion.normalize "qiskit.quantum_info.Quaternion.normalize")(\[inplace])                             | Normalizes a Quaternion to unit length so that it represents a valid rotation. |
| [`Quaternion.to_matrix`](qiskit.quantum_info.Quaternion.to_matrix "qiskit.quantum_info.Quaternion.to_matrix")()                                       | Converts a unit-length quaternion to a rotation matrix.                        |
| [`Quaternion.to_zyz`](qiskit.quantum_info.Quaternion.to_zyz "qiskit.quantum_info.Quaternion.to_zyz")()                                                | Converts a unit-length quaternion to a sequence of ZYZ Euler angles.           |

