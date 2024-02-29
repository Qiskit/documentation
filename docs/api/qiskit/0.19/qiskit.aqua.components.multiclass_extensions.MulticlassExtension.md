---
title: MulticlassExtension
description: API reference for qiskit.aqua.components.multiclass_extensions.MulticlassExtension
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.multiclass_extensions.MulticlassExtension
---

# MulticlassExtension

<span id="qiskit.aqua.components.multiclass_extensions.MulticlassExtension" />

`MulticlassExtension` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/components/multiclass_extensions/multiclass_extension.py "view source code")

Base class for multiclass extension.

This method should initialize the module and use an exception if a component of the module is not available.

## Methods

### predict

<span id="qiskit.aqua.components.multiclass_extensions.MulticlassExtension.predict" />

`abstract MulticlassExtension.predict(x)`

Applying multiple estimators for prediction.

**Parameters**

**x** (*numpy.ndarray*) – input points

### set\_estimator

<span id="qiskit.aqua.components.multiclass_extensions.MulticlassExtension.set_estimator" />

`MulticlassExtension.set_estimator(estimator_cls, params=None)`

Called internally to set `Estimator` and parameters :type estimator\_cls: `Callable`\[\[`List`], `Estimator`] :param estimator\_cls: An `Estimator` class :type params: `Optional`\[`List`] :param params: Parameters for the estimator

**Return type**

`None`

### test

<span id="qiskit.aqua.components.multiclass_extensions.MulticlassExtension.test" />

`abstract MulticlassExtension.test(x, y)`

Testing multiple estimators each for distinguishing a pair of classes.

**Parameters**

*   **x** (*numpy.ndarray*) – input points
*   **y** (*numpy.ndarray*) – input labels

### train

<span id="qiskit.aqua.components.multiclass_extensions.MulticlassExtension.train" />

`abstract MulticlassExtension.train(x, y)`

Training multiple estimators each for distinguishing a pair of classes.

**Parameters**

*   **x** (*numpy.ndarray*) – input points
*   **y** (*numpy.ndarray*) – input labels

