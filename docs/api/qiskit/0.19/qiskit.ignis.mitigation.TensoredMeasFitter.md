---
title: TensoredMeasFitter
description: API reference for qiskit.ignis.mitigation.TensoredMeasFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.mitigation.TensoredMeasFitter
---

# TensoredMeasFitter

<span id="qiskit.ignis.mitigation.TensoredMeasFitter" />

`TensoredMeasFitter(results, mit_pattern, substate_labels_list=None, circlabel='')` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.3/qiskit/ignis/mitigation/measurement/fitters.py "view source code")

Measurement correction fitter for a tensored calibration.

Initialize a measurement calibration matrix from the results of running the circuits returned by measurement\_calibration\_circuits.

**Parameters**

*   **results** (`Union`\[[`Result`](qiskit.result.Result "qiskit.result.result.Result"), `List`\[[`Result`](qiskit.result.Result "qiskit.result.result.Result")]]) – the results of running the measurement calibration circuits. If this is None, the user will set calibration matrices later.
*   **mit\_pattern** (`List`\[`List`\[`int`]]) – qubits to perform the measurement correction on, divided to groups according to tensors
*   **substate\_labels\_list** (`Optional`\[`List`\[`List`\[`str`]]]) – for each calibration matrix, the labels of its rows and columns. If None, the labels are ordered lexicographically
*   **circlabel** (`str`) – if the qubits were labeled

**Raises**

**ValueError** – if the mit\_pattern doesn’t match the substate\_labels\_list

## Attributes

### cal\_matrices

Return cal\_matrices.

### filter

Return a measurement filter using the cal matrices.

### nqubits

Return \_qubit\_list\_sizes.

### substate\_labels\_list

Return \_substate\_labels\_list.

## Methods

### add\_data

<span id="qiskit.ignis.mitigation.TensoredMeasFitter.add_data" />

`TensoredMeasFitter.add_data(new_results, rebuild_cal_matrix=True)`

Add measurement calibration data

**Parameters**

*   **new\_results** (*list or* [*qiskit.result.Result*](qiskit.result.Result "qiskit.result.Result")) – a single result or list of Result objects.
*   **rebuild\_cal\_matrix** (*bool*) – rebuild the calibration matrix

### plot\_calibration

<span id="qiskit.ignis.mitigation.TensoredMeasFitter.plot_calibration" />

`TensoredMeasFitter.plot_calibration(cal_index=0, ax=None, show_plot=True)`

Plot one of the calibration matrices (2D color grid plot).

**Parameters**

*   **cal\_index** (*integer*) – calibration matrix to plot
*   **ax** (*matplotlib.axes*) – settings for the graph
*   **show\_plot** (*bool*) – call plt.show()

**Raises**

*   **QiskitError** – if \_cal\_matrices was not set.
*   **ImportError** – if matplotlib was not installed.

### readout\_fidelity

<span id="qiskit.ignis.mitigation.TensoredMeasFitter.readout_fidelity" />

`TensoredMeasFitter.readout_fidelity(cal_index=0, label_list=None)`

Based on the results, output the readout fidelity, which is the average of the diagonal entries in the calibration matrices.

**Parameters**

*   **cal\_index** (*integer*) – readout fidelity for this index in \_cal\_matrices
*   **label\_list** (*list*) – Returns the average fidelity over of the groups f states. In the form of a list of lists of states. If None, then each state used in the construction of the calibration matrices forms a group of size 1

**Returns**

The readout fidelity (assignment fidelity)

**Return type**

numpy.array

**Raises**

**QiskitError** – If the calibration matrix has not been set for the object.

#### Additional Information:

The on-diagonal elements of the calibration matrices are the probabilities of measuring state ‘x’ given preparation of state ‘x’.

