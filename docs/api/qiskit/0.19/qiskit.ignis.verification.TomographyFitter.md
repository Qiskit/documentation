---
title: TomographyFitter
description: API reference for qiskit.ignis.verification.TomographyFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.verification.TomographyFitter
---

# TomographyFitter

<span id="qiskit.ignis.verification.TomographyFitter" />

`TomographyFitter(result, circuits, meas_basis='Pauli', prep_basis='Pauli')`

Base maximum-likelihood estimate tomography fitter class

Initialize tomography fitter with experimental data.

**Parameters**

*   **result** ([`Result`](qiskit.result.Result "qiskit.result.result.Result")) – a Qiskit Result object obtained from executing tomography circuits.
*   **circuits** (`Union`\[`List`\[[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")], `List`\[`str`]]) – a list of circuits or circuit names to extract count information from the result object.
*   **meas\_basis** (`Union`\[`TomographyBasis`, `str`]) – (default: ‘Pauli’) A function to return measurement operators corresponding to measurement outcomes. See Additional Information.
*   **prep\_basis** (`Union`\[`TomographyBasis`, `str`]) – (default: ‘Pauli’) A function to return preparation operators. See Additional Information

## Attributes

|                                                                                                                                                                     |                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| [`TomographyFitter.data`](qiskit.ignis.verification.TomographyFitter.data "qiskit.ignis.verification.TomographyFitter.data")                                        | Return tomography data                   |
| [`TomographyFitter.measure_basis`](qiskit.ignis.verification.TomographyFitter.measure_basis "qiskit.ignis.verification.TomographyFitter.measure_basis")             | Return the tomography measurement basis. |
| [`TomographyFitter.preparation_basis`](qiskit.ignis.verification.TomographyFitter.preparation_basis "qiskit.ignis.verification.TomographyFitter.preparation_basis") | Return the tomography preparation basis. |

## Methods

|                                                                                                                                                                                        |                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [`TomographyFitter.add_data`](qiskit.ignis.verification.TomographyFitter.add_data "qiskit.ignis.verification.TomographyFitter.add_data")(result, circuits)                             | Add tomography data from a Qiskit Result object.             |
| [`TomographyFitter.fit`](qiskit.ignis.verification.TomographyFitter.fit "qiskit.ignis.verification.TomographyFitter.fit")(\[method, …])                                                | Reconstruct a quantum state using CVXPY convex optimization. |
| [`TomographyFitter.set_measure_basis`](qiskit.ignis.verification.TomographyFitter.set_measure_basis "qiskit.ignis.verification.TomographyFitter.set_measure_basis")(basis)             | Set the measurement basis                                    |
| [`TomographyFitter.set_preparation_basis`](qiskit.ignis.verification.TomographyFitter.set_preparation_basis "qiskit.ignis.verification.TomographyFitter.set_preparation_basis")(basis) | Set the preparation basis function                           |

