---
title: TwoQubitBasisDecomposer
description: API reference for qiskit.quantum_info.TwoQubitBasisDecomposer
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.TwoQubitBasisDecomposer
---

# TwoQubitBasisDecomposer

<span id="qiskit.quantum_info.TwoQubitBasisDecomposer" />

`TwoQubitBasisDecomposer(gate, basis_fidelity=1.0)`

A class for decomposing 2-qubit unitaries into minimal number of uses of a 2-qubit basis gate.

## Methods

|                                                                                                                                                                                                        |                                                                                                                                              |                         |                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | --------------------------------------- |
| [`TwoQubitBasisDecomposer.__call__`](qiskit.quantum_info.TwoQubitBasisDecomposer.__call__ "qiskit.quantum_info.TwoQubitBasisDecomposer.__call__")(target\[, …])                                        | Decompose a two-qubit unitary over fixed basis + SU(2) using the best approximation given that each basis application has a finite fidelity. |                         |                                         |
| [`TwoQubitBasisDecomposer.decomp0`](qiskit.quantum_info.TwoQubitBasisDecomposer.decomp0 "qiskit.quantum_info.TwoQubitBasisDecomposer.decomp0")(target)                                                 | Decompose target \~Ud(x, y, z) with 0 uses of the basis gate.                                                                                |                         |                                         |
| [`TwoQubitBasisDecomposer.decomp1`](qiskit.quantum_info.TwoQubitBasisDecomposer.decomp1 "qiskit.quantum_info.TwoQubitBasisDecomposer.decomp1")(target)                                                 | Decompose target \~Ud(x, y, z) with 1 uses of the basis gate \~Ud(a, b, c). Result Ur has trace: .. math::.                                  |                         |                                         |
| [`TwoQubitBasisDecomposer.decomp2_supercontrolled`](qiskit.quantum_info.TwoQubitBasisDecomposer.decomp2_supercontrolled "qiskit.quantum_info.TwoQubitBasisDecomposer.decomp2_supercontrolled")(target) | Decompose target \~Ud(x, y, z) with 2 uses of the basis gate.                                                                                |                         |                                         |
| [`TwoQubitBasisDecomposer.decomp3_supercontrolled`](qiskit.quantum_info.TwoQubitBasisDecomposer.decomp3_supercontrolled "qiskit.quantum_info.TwoQubitBasisDecomposer.decomp3_supercontrolled")(target) | Decompose target with 3 uses of the basis.                                                                                                   |                         |                                         |
| [`TwoQubitBasisDecomposer.num_basis_gates`](qiskit.quantum_info.TwoQubitBasisDecomposer.num_basis_gates "qiskit.quantum_info.TwoQubitBasisDecomposer.num_basis_gates")(unitary)                        | Computes the number of basis gates needed in a decomposition of input unitary                                                                |                         |                                         |
| [`TwoQubitBasisDecomposer.traces`](qiskit.quantum_info.TwoQubitBasisDecomposer.traces "qiskit.quantum_info.TwoQubitBasisDecomposer.traces")(target)                                                    | Give the expected traces \$                                                                                                                  | Tr(U \cdot Utarget^dag) | \$ for different number of basis gates. |

