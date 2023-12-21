---
title: train
description: API reference for qiskit.aqua.components.multiclass_extensions.AllPairs.train
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.multiclass_extensions.AllPairs.train
---

# train

<span id="qiskit.aqua.components.multiclass_extensions.AllPairs.train" />

`AllPairs.train(x, y)`

Training multiple estimators each for distinguishing a pair of classes.

**Parameters**

*   **x** (*numpy.ndarray*) – input points
*   **y** (*numpy.ndarray*) – input labels

**Raises**

**ValueError** – can not be fit when only one class is present.

