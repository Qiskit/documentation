---
title: predict
description: API reference for qiskit.aqua.algorithms.VQC.predict
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.algorithms.VQC.predict
---

# predict

<span id="qiskit.aqua.algorithms.VQC.predict" />

`VQC.predict(data, quantum_instance=None, minibatch_size=- 1, params=None)`

Predict the labels for the data.

**Parameters**

*   **data** (*numpy.ndarray*) – NxD array, N is number of data, D is data dimension
*   **quantum\_instance** ([*QuantumInstance*](qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance")) – quantum backend with all setting
*   **minibatch\_size** (*int*) – the size of each minibatched accuracy evaluation
*   **params** (*list*) – list of parameters to populate in the variational form

**Returns**

for each data point, generates the predicted probability for each class list: for each data point, generates the predicted label (that with the highest prob)

**Return type**

list

