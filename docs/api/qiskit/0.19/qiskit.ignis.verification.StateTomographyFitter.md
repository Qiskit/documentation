---
title: StateTomographyFitter
description: API reference for qiskit.ignis.verification.StateTomographyFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.verification.StateTomographyFitter
---

# StateTomographyFitter

<span id="qiskit.ignis.verification.StateTomographyFitter" />

`StateTomographyFitter(result, circuits, meas_basis='Pauli')`

Maximum-Likelihood estimation state tomography fitter.

Initialize state tomography fitter with experimental data.

**Parameters**

*   **result** ([`Result`](qiskit.result.Result "qiskit.result.result.Result")) – a Qiskit Result object obtained from executing tomography circuits.
*   **circuits** (`List`\[[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")]) – a list of circuits or circuit names to extract count information from the result object.
*   **meas\_basis** (`Union`\[`TomographyBasis`, `str`]) – (default: ‘Pauli’) A function to return measurement operators corresponding to measurement outcomes. See Additional Information (default: ‘Pauli’)

## Attributes

|                                                                                                                                                                                    |                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| [`StateTomographyFitter.data`](qiskit.ignis.verification.StateTomographyFitter.data "qiskit.ignis.verification.StateTomographyFitter.data")                                        | Return tomography data                   |
| [`StateTomographyFitter.measure_basis`](qiskit.ignis.verification.StateTomographyFitter.measure_basis "qiskit.ignis.verification.StateTomographyFitter.measure_basis")             | Return the tomography measurement basis. |
| [`StateTomographyFitter.preparation_basis`](qiskit.ignis.verification.StateTomographyFitter.preparation_basis "qiskit.ignis.verification.StateTomographyFitter.preparation_basis") | Return the tomography preparation basis. |

## Methods

|                                                                                                                                                                                                       |                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [`StateTomographyFitter.add_data`](qiskit.ignis.verification.StateTomographyFitter.add_data "qiskit.ignis.verification.StateTomographyFitter.add_data")(result, circuits)                             | Add tomography data from a Qiskit Result object.             |
| [`StateTomographyFitter.fit`](qiskit.ignis.verification.StateTomographyFitter.fit "qiskit.ignis.verification.StateTomographyFitter.fit")(\[method, …])                                                | Reconstruct a quantum state using CVXPY convex optimization. |
| [`StateTomographyFitter.set_measure_basis`](qiskit.ignis.verification.StateTomographyFitter.set_measure_basis "qiskit.ignis.verification.StateTomographyFitter.set_measure_basis")(basis)             | Set the measurement basis                                    |
| [`StateTomographyFitter.set_preparation_basis`](qiskit.ignis.verification.StateTomographyFitter.set_preparation_basis "qiskit.ignis.verification.StateTomographyFitter.set_preparation_basis")(basis) | Set the preparation basis function                           |

