# CompleteMeasFitter[¶](#completemeasfitter "Permalink to this headline")

<span id="undefined" />

`CompleteMeasFitter(results, state_labels, qubit_list=None, circlabel='')`

Bases: `object`

Measurement correction fitter for a full calibration

Initialize a measurement calibration matrix from the results of running the circuits returned by measurement\_calibration\_circuits

A wrapper for the tensored fitter

<Admonition title="Warning" type="caution">
  This class is not a public API. The internals are not stable and will likely change. It is used solely for the `measurement_error_mitigation_cls` kwarg of the [`QuantumInstance`](qiskit.utils.QuantumInstance#qiskit.utils.QuantumInstance "qiskit.utils.QuantumInstance") class’s constructor (as a class not an instance). Anything outside of that usage does not have the normal user-facing API stability.
</Admonition>

**Parameters**

*   **results** – the results of running the measurement calibration circuits. If this is None the user will set a calibration matrix later.
*   **state\_labels** (`List`\[`str`]) – list of calibration state labels returned from measurement\_calibration\_circuits. The output matrix will obey this ordering.
*   **qubit\_list** (`Optional`\[`List`\[`int`]]) – List of the qubits (for reference and if the subset is needed). If None, the qubit\_list will be created according to the length of state\_labels\[0].
*   **circlabel** (`str`) – if the qubits were labeled.

## Methods

|                                                                                                                                                                                                             |                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`add_data`](qiskit.utils.mitigation.CompleteMeasFitter.add_data#qiskit.utils.mitigation.CompleteMeasFitter.add_data "qiskit.utils.mitigation.CompleteMeasFitter.add_data")                                 | Add measurement calibration data                                                                          |
| [`readout_fidelity`](qiskit.utils.mitigation.CompleteMeasFitter.readout_fidelity#qiskit.utils.mitigation.CompleteMeasFitter.readout_fidelity "qiskit.utils.mitigation.CompleteMeasFitter.readout_fidelity") | Based on the results, output the readout fidelity which is the normalized trace of the calibration matrix |
| [`subset_fitter`](qiskit.utils.mitigation.CompleteMeasFitter.subset_fitter#qiskit.utils.mitigation.CompleteMeasFitter.subset_fitter "qiskit.utils.mitigation.CompleteMeasFitter.subset_fitter")             | Return a fitter object that is a subset of the qubits in the original list.                               |

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
