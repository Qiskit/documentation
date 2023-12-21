---
title: train
description: API reference for qiskit.aqua.components.multiclass_extensions.OneAgainstRest.train
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.multiclass_extensions.OneAgainstRest.train
---

# train

<span id="qiskit.aqua.components.multiclass_extensions.OneAgainstRest.train" />

`OneAgainstRest.train(x, y)`

Training multiple estimators each for distinguishing a pair of classes.

**Parameters**

*   **x** (*numpy.ndarray*) – input points
*   **y** (*numpy.ndarray*) – input labels

**Raises**

**Exception** – given all data points are assigned to the same class, the prediction would be boring

