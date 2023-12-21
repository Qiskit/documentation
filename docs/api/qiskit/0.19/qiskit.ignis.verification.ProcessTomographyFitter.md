---
title: ProcessTomographyFitter
description: API reference for qiskit.ignis.verification.ProcessTomographyFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.verification.ProcessTomographyFitter
---

# ProcessTomographyFitter

<span id="qiskit.ignis.verification.ProcessTomographyFitter" />

`ProcessTomographyFitter(result, circuits, meas_basis='Pauli', prep_basis='Pauli')`

Maximum-Likelihood estimation process tomography fitter.

Initialize tomography fitter with experimental data.

**Parameters**

*   **result** ([`Result`](qiskit.result.Result "qiskit.result.result.Result")) – a Qiskit Result object obtained from executing tomography circuits.
*   **circuits** (`Union`\[`List`\[[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")], `List`\[`str`]]) – a list of circuits or circuit names to extract count information from the result object.
*   **meas\_basis** (`Union`\[`TomographyBasis`, `str`]) – (default: ‘Pauli’) A function to return measurement operators corresponding to measurement outcomes. See Additional Information.
*   **prep\_basis** (`Union`\[`TomographyBasis`, `str`]) – (default: ‘Pauli’) A function to return preparation operators. See Additional Information

## Attributes

|                                                                                                                                                                                          |                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| [`ProcessTomographyFitter.data`](qiskit.ignis.verification.ProcessTomographyFitter.data "qiskit.ignis.verification.ProcessTomographyFitter.data")                                        | Return tomography data                   |
| [`ProcessTomographyFitter.measure_basis`](qiskit.ignis.verification.ProcessTomographyFitter.measure_basis "qiskit.ignis.verification.ProcessTomographyFitter.measure_basis")             | Return the tomography measurement basis. |
| [`ProcessTomographyFitter.preparation_basis`](qiskit.ignis.verification.ProcessTomographyFitter.preparation_basis "qiskit.ignis.verification.ProcessTomographyFitter.preparation_basis") | Return the tomography preparation basis. |

## Methods

|                                                                                                                                                                                                             |                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [`ProcessTomographyFitter.add_data`](qiskit.ignis.verification.ProcessTomographyFitter.add_data "qiskit.ignis.verification.ProcessTomographyFitter.add_data")(result, …)                                    | Add tomography data from a Qiskit Result object.               |
| [`ProcessTomographyFitter.fit`](qiskit.ignis.verification.ProcessTomographyFitter.fit "qiskit.ignis.verification.ProcessTomographyFitter.fit")(\[method, …])                                                | Reconstruct a quantum channel using CVXPY convex optimization. |
| [`ProcessTomographyFitter.set_measure_basis`](qiskit.ignis.verification.ProcessTomographyFitter.set_measure_basis "qiskit.ignis.verification.ProcessTomographyFitter.set_measure_basis")(basis)             | Set the measurement basis                                      |
| [`ProcessTomographyFitter.set_preparation_basis`](qiskit.ignis.verification.ProcessTomographyFitter.set_preparation_basis "qiskit.ignis.verification.ProcessTomographyFitter.set_preparation_basis")(basis) | Set the preparation basis function                             |

