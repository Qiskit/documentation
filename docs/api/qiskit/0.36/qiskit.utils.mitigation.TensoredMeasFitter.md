---
title: TensoredMeasFitter
description: API reference for qiskit.utils.mitigation.TensoredMeasFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.utils.mitigation.TensoredMeasFitter
---

# TensoredMeasFitter

<span id="qiskit.utils.mitigation.TensoredMeasFitter" />

`TensoredMeasFitter(results, mit_pattern, substate_labels_list=None, circlabel='')` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/utils/mitigation/fitters.py "view source code")

Bases: `object`

Measurement correction fitter for a tensored calibration.

Initialize a measurement calibration matrix from the results of running the circuits returned by measurement\_calibration\_circuits.

<Admonition title="Warning" type="caution">
  This class is not a public API. The internals are not stable and will likely change. It is used solely for the `measurement_error_mitigation_cls` kwarg of the [`QuantumInstance`](qiskit.utils.QuantumInstance "qiskit.utils.QuantumInstance") class’s constructor (as a class not an instance). Anything outside of that usage does not have the normal user-facing API stability.
</Admonition>

**Parameters**

*   **results** – the results of running the measurement calibration circuits. If this is None, the user will set calibration matrices later.
*   **mit\_pattern** (`List`\[`List`\[`int`]]) – qubits to perform the measurement correction on, divided to groups according to tensors
*   **substate\_labels\_list** (`Optional`\[`List`\[`List`\[`str`]]]) – for each calibration matrix, the labels of its rows and columns. If None, the labels are ordered lexicographically
*   **circlabel** (`str`) – if the qubits were labeled

**Raises**

**ValueError** – if the mit\_pattern doesn’t match the substate\_labels\_list

## Methods

### add\_data

<span id="qiskit.utils.mitigation.TensoredMeasFitter.add_data" />

`TensoredMeasFitter.add_data(new_results, rebuild_cal_matrix=True)`

Add measurement calibration data

**Parameters**

*   **new\_results** (*list or* [*qiskit.result.Result*](qiskit.result.Result "qiskit.result.Result")) – a single result or list of Result objects.
*   **rebuild\_cal\_matrix** (*bool*) – rebuild the calibration matrix

### readout\_fidelity

<span id="qiskit.utils.mitigation.TensoredMeasFitter.readout_fidelity" />

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

## Attributes

<span id="qiskit.utils.mitigation.TensoredMeasFitter.cal_matrices" />

### cal\_matrices

Return cal\_matrices.

<span id="qiskit.utils.mitigation.TensoredMeasFitter.filter" />

### filter

Return a measurement filter using the cal matrices.

<span id="qiskit.utils.mitigation.TensoredMeasFitter.nqubits" />

### nqubits

Return \_qubit\_list\_sizes.

<span id="qiskit.utils.mitigation.TensoredMeasFitter.substate_labels_list" />

### substate\_labels\_list

Return \_substate\_labels\_list.

