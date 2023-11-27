# StateTomographyFitter[¶](#statetomographyfitter "Permalink to this headline")

<span id="undefined" />

`StateTomographyFitter(result, circuits, meas_basis='Pauli')`

Bases: `qiskit.ignis.verification.tomography.fitters.base_fitter.TomographyFitter`

Maximum-Likelihood estimation state tomography fitter.

Initialize state tomography fitter with experimental data.

**Parameters**

*   **result** (`Result`) – a Qiskit Result object obtained from executing tomography circuits.
*   **circuits** (`List`\[`QuantumCircuit`]) – a list of circuits or circuit names to extract count information from the result object.
*   **meas\_basis** (`Union`\[`TomographyBasis`, `str`]) – (default: ‘Pauli’) A function to return measurement operators corresponding to measurement outcomes. See Additional Information (default: ‘Pauli’)

## Methods

|                                                                                                                                                                                                                                                |                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [`add_data`](qiskit.ignis.verification.StateTomographyFitter.add_data#qiskit.ignis.verification.StateTomographyFitter.add_data "qiskit.ignis.verification.StateTomographyFitter.add_data")                                                     | Add tomography data from a Qiskit Result object.             |
| [`fit`](qiskit.ignis.verification.StateTomographyFitter.fit#qiskit.ignis.verification.StateTomographyFitter.fit "qiskit.ignis.verification.StateTomographyFitter.fit")                                                                         | Reconstruct a quantum state using CVXPY convex optimization. |
| [`set_measure_basis`](qiskit.ignis.verification.StateTomographyFitter.set_measure_basis#qiskit.ignis.verification.StateTomographyFitter.set_measure_basis "qiskit.ignis.verification.StateTomographyFitter.set_measure_basis")                 | Set the measurement basis                                    |
| [`set_preparation_basis`](qiskit.ignis.verification.StateTomographyFitter.set_preparation_basis#qiskit.ignis.verification.StateTomographyFitter.set_preparation_basis "qiskit.ignis.verification.StateTomographyFitter.set_preparation_basis") | Set the preparation basis function                           |

## Attributes

<span id="undefined" />

### data

Return tomography data

<span id="undefined" />

### measure\_basis

Return the tomography measurement basis.

<span id="undefined" />

### preparation\_basis

Return the tomography preparation basis.
