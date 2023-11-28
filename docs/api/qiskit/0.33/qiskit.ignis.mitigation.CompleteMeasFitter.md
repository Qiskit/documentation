# CompleteMeasFitter[¶](#completemeasfitter "Permalink to this headline")

<span id="undefined" />

`CompleteMeasFitter(results, state_labels, qubit_list=None, circlabel='')`

Bases: `object`

Measurement correction fitter for a full calibration

Initialize a measurement calibration matrix from the results of running the circuits returned by measurement\_calibration\_circuits

A wrapper for the tensored fitter

**Parameters**

*   **results** (`Union`\[`Result`, `List`\[`Result`]]) – the results of running the measurement calibration circuits. If this is None the user will set a calibration matrix later.
*   **state\_labels** (`List`\[`str`]) – list of calibration state labels returned from measurement\_calibration\_circuits. The output matrix will obey this ordering.
*   **qubit\_list** (`Optional`\[`List`\[`int`]]) – List of the qubits (for reference and if the subset is needed). If None, the qubit\_list will be created according to the length of state\_labels\[0].
*   **circlabel** (`str`) – if the qubits were labeled.

## Methods

|                                                                                                                                                                                                             |                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`add_data`](qiskit.ignis.mitigation.CompleteMeasFitter.add_data#qiskit.ignis.mitigation.CompleteMeasFitter.add_data "qiskit.ignis.mitigation.CompleteMeasFitter.add_data")                                 | Add measurement calibration data                                                                          |
| [`plot_calibration`](qiskit.ignis.mitigation.CompleteMeasFitter.plot_calibration#qiskit.ignis.mitigation.CompleteMeasFitter.plot_calibration "qiskit.ignis.mitigation.CompleteMeasFitter.plot_calibration") | Plot the calibration matrix (2D color grid plot)                                                          |
| [`readout_fidelity`](qiskit.ignis.mitigation.CompleteMeasFitter.readout_fidelity#qiskit.ignis.mitigation.CompleteMeasFitter.readout_fidelity "qiskit.ignis.mitigation.CompleteMeasFitter.readout_fidelity") | Based on the results, output the readout fidelity which is the normalized trace of the calibration matrix |
| [`subset_fitter`](qiskit.ignis.mitigation.CompleteMeasFitter.subset_fitter#qiskit.ignis.mitigation.CompleteMeasFitter.subset_fitter "qiskit.ignis.mitigation.CompleteMeasFitter.subset_fitter")             | Return a fitter object that is a subset of the qubits in the original list.                               |

## Attributes

<span id="undefined" />

### cal\_matrix

Return cal\_matrix.

<span id="undefined" />

### filter

Return a measurement filter using the cal matrix.

<span id="undefined" />

### qubit\_list

Return list of qubits.

<span id="undefined" />

### state\_labels

Return state\_labels.
