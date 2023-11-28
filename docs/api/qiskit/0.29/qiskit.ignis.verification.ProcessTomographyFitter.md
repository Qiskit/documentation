# ProcessTomographyFitter[¶](#processtomographyfitter "Permalink to this headline")

<span id="undefined" />

`ProcessTomographyFitter(result, circuits, meas_basis='Pauli', prep_basis='Pauli')`

Bases: `qiskit.ignis.verification.tomography.fitters.base_fitter.TomographyFitter`

Maximum-Likelihood estimation process tomography fitter.

Initialize tomography fitter with experimental data.

**Parameters**

*   **result** (`Union`\[`Result`, `List`\[`Result`]]) – a Qiskit Result object obtained from executing tomography circuits.
*   **circuits** (`Union`\[`List`\[`QuantumCircuit`], `List`\[`str`]]) – a list of circuits or circuit names to extract count information from the result object.
*   **meas\_basis** (`Union`\[`TomographyBasis`, `str`]) – (default: ‘Pauli’) A function to return measurement operators corresponding to measurement outcomes. See Additional Information.
*   **prep\_basis** (`Union`\[`TomographyBasis`, `str`]) – (default: ‘Pauli’) A function to return preparation operators. See Additional Information

## Methods

|                                                                                                                                                                                                                                                      |                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [`add_data`](qiskit.ignis.verification.ProcessTomographyFitter.add_data#qiskit.ignis.verification.ProcessTomographyFitter.add_data "qiskit.ignis.verification.ProcessTomographyFitter.add_data")                                                     | Add tomography data from a Qiskit Result object.               |
| [`fit`](qiskit.ignis.verification.ProcessTomographyFitter.fit#qiskit.ignis.verification.ProcessTomographyFitter.fit "qiskit.ignis.verification.ProcessTomographyFitter.fit")                                                                         | Reconstruct a quantum channel using CVXPY convex optimization. |
| [`set_measure_basis`](qiskit.ignis.verification.ProcessTomographyFitter.set_measure_basis#qiskit.ignis.verification.ProcessTomographyFitter.set_measure_basis "qiskit.ignis.verification.ProcessTomographyFitter.set_measure_basis")                 | Set the measurement basis                                      |
| [`set_preparation_basis`](qiskit.ignis.verification.ProcessTomographyFitter.set_preparation_basis#qiskit.ignis.verification.ProcessTomographyFitter.set_preparation_basis "qiskit.ignis.verification.ProcessTomographyFitter.set_preparation_basis") | Set the preparation basis function                             |

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
