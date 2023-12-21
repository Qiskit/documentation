---
title: MulticlassExtension
description: API reference for qiskit.aqua.components.multiclass_extensions.MulticlassExtension
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.multiclass_extensions.MulticlassExtension
---

# MulticlassExtension

<span id="qiskit.aqua.components.multiclass_extensions.MulticlassExtension" />

`MulticlassExtension`

Base class for multiclass extension.

This method should initialize the module and use an exception if a component of the module is not available.

## Methods

|                                                                                                                                                                                                                        |                                                                                                                                                                                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`MulticlassExtension.predict`](qiskit.aqua.components.multiclass_extensions.MulticlassExtension.predict "qiskit.aqua.components.multiclass_extensions.MulticlassExtension.predict")(x)                                | Applying multiple estimators for prediction.                                                                                                                                                                                            |
| [`MulticlassExtension.set_estimator`](qiskit.aqua.components.multiclass_extensions.MulticlassExtension.set_estimator "qiskit.aqua.components.multiclass_extensions.MulticlassExtension.set_estimator")(estimator\_cls) | Called internally to set `Estimator` and parameters :type estimator\_cls: `Callable`\[\[`List`], `Estimator`] :param estimator\_cls: An `Estimator` class :type params: `Optional`\[`List`] :param params: Parameters for the estimator |
| [`MulticlassExtension.test`](qiskit.aqua.components.multiclass_extensions.MulticlassExtension.test "qiskit.aqua.components.multiclass_extensions.MulticlassExtension.test")(x, y)                                      | Testing multiple estimators each for distinguishing a pair of classes.                                                                                                                                                                  |
| [`MulticlassExtension.train`](qiskit.aqua.components.multiclass_extensions.MulticlassExtension.train "qiskit.aqua.components.multiclass_extensions.MulticlassExtension.train")(x, y)                                   | Training multiple estimators each for distinguishing a pair of classes.                                                                                                                                                                 |

