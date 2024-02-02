---
title: TwoQubitReduction
description: API reference for qiskit.opflow.converters.TwoQubitReduction
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.converters.TwoQubitReduction
---

# TwoQubitReduction

<span id="qiskit.opflow.converters.TwoQubitReduction" />

`TwoQubitReduction(num_particles)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/opflow/converters/two_qubit_reduction.py "view source code")

Bases: [`qiskit.opflow.converters.converter_base.ConverterBase`](qiskit.opflow.converters.ConverterBase "qiskit.opflow.converters.converter_base.ConverterBase")

Two qubit reduction converter which eliminates the central and last qubit in a list of Pauli that has diagonal operators (Z,I) at those positions.

Chemistry specific method: It can be used to taper two qubits in parity and binary-tree mapped fermionic Hamiltonians when the spin orbitals are ordered in two spin sectors, (block spin order) according to the number of particles in the system.

**Parameters**

**num\_particles** (`Union`\[`int`, `List`\[`int`], `Tuple`\[`int`, `int`]]) – number of particles, if it is a list, the first number is alpha and the second number if beta.

**Methods Defined Here**

|                                                                                                                      |                                                        |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| [`convert`](qiskit.opflow.converters.TwoQubitReduction#convert "qiskit.opflow.converters.TwoQubitReduction.convert") | Converts the Operator to tapered one by Z2 symmetries. |

