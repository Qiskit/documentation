# TensoredMeasFitter

<span id="undefined" />

`TensoredMeasFitter(results, mit_pattern, substate_labels_list=None, circlabel='')`

Bases: `object`

Measurement correction fitter for a tensored calibration.

Initialize a measurement calibration matrix from the results of running the circuits returned by measurement\_calibration\_circuits.

**Parameters**

*   **results** (`Union`\[`Result`, `List`\[`Result`]]) – the results of running the measurement calibration circuits. If this is None, the user will set calibration matrices later.
*   **mit\_pattern** (`List`\[`List`\[`int`]]) – qubits to perform the measurement correction on, divided to groups according to tensors
*   **substate\_labels\_list** (`Optional`\[`List`\[`List`\[`str`]]]) – for each calibration matrix, the labels of its rows and columns. If None, the labels are ordered lexicographically
*   **circlabel** (`str`) – if the qubits were labeled

**Raises**

**ValueError** – if the mit\_pattern doesn’t match the substate\_labels\_list

## Methods

|                                                                                                                                                                                                             |                                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [`add_data`](qiskit.ignis.mitigation.TensoredMeasFitter.add_data#qiskit.ignis.mitigation.TensoredMeasFitter.add_data "qiskit.ignis.mitigation.TensoredMeasFitter.add_data")                                 | Add measurement calibration data                                                                                             |
| [`plot_calibration`](qiskit.ignis.mitigation.TensoredMeasFitter.plot_calibration#qiskit.ignis.mitigation.TensoredMeasFitter.plot_calibration "qiskit.ignis.mitigation.TensoredMeasFitter.plot_calibration") | Plot one of the calibration matrices (2D color grid plot).                                                                   |
| [`readout_fidelity`](qiskit.ignis.mitigation.TensoredMeasFitter.readout_fidelity#qiskit.ignis.mitigation.TensoredMeasFitter.readout_fidelity "qiskit.ignis.mitigation.TensoredMeasFitter.readout_fidelity") | Based on the results, output the readout fidelity, which is the average of the diagonal entries in the calibration matrices. |

## Attributes

<span id="undefined" />

### cal\_matrices

Return cal\_matrices.

<span id="undefined" />

### filter

Return a measurement filter using the cal matrices.

<span id="undefined" />

### nqubits

Return \_qubit\_list\_sizes.

<span id="undefined" />

### substate\_labels\_list

Return \_substate\_labels\_list.
