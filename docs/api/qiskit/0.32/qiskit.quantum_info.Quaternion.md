# Quaternion

<span id="undefined" />

`Quaternion(data)`

Bases: `object`

A class representing a Quaternion.

## Methods

|                                                                                                                                                                                 |                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [`from_axis_rotation`](qiskit.quantum_info.Quaternion.from_axis_rotation#qiskit.quantum_info.Quaternion.from_axis_rotation "qiskit.quantum_info.Quaternion.from_axis_rotation") | Return quaternion for rotation about given axis.                               |
| [`from_euler`](qiskit.quantum_info.Quaternion.from_euler#qiskit.quantum_info.Quaternion.from_euler "qiskit.quantum_info.Quaternion.from_euler")                                 | Generate a quaternion from a set of Euler angles.                              |
| [`norm`](qiskit.quantum_info.Quaternion.norm#qiskit.quantum_info.Quaternion.norm "qiskit.quantum_info.Quaternion.norm")                                                         | Norm of quaternion.                                                            |
| [`normalize`](qiskit.quantum_info.Quaternion.normalize#qiskit.quantum_info.Quaternion.normalize "qiskit.quantum_info.Quaternion.normalize")                                     | Normalizes a Quaternion to unit length so that it represents a valid rotation. |
| [`to_matrix`](qiskit.quantum_info.Quaternion.to_matrix#qiskit.quantum_info.Quaternion.to_matrix "qiskit.quantum_info.Quaternion.to_matrix")                                     | Converts a unit-length quaternion to a rotation matrix.                        |
| [`to_zyz`](qiskit.quantum_info.Quaternion.to_zyz#qiskit.quantum_info.Quaternion.to_zyz "qiskit.quantum_info.Quaternion.to_zyz")                                                 | Converts a unit-length quaternion to a sequence of ZYZ Euler angles.           |
