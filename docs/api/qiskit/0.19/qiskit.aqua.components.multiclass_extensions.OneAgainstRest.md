---
title: OneAgainstRest
description: API reference for qiskit.aqua.components.multiclass_extensions.OneAgainstRest
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.multiclass_extensions.OneAgainstRest
---

# OneAgainstRest

<span id="qiskit.aqua.components.multiclass_extensions.OneAgainstRest" />

`OneAgainstRest`

The One Against Rest multiclass extension.

For an $n$-class problem, the **one-against-rest** method constructs $n$ SVM classifiers, with the $i$-th classifier separating class $i$ from all the remaining classes, $\forall i \in \{1, 2, \ldots, n\}$. When the $n$ classifiers are combined to make the final decision, the classifier that generates the highest value from its decision function is selected as the winner and the corresponding class label is returned.

## Methods

|                                                                                                                                                                                                         |                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`OneAgainstRest.predict`](qiskit.aqua.components.multiclass_extensions.OneAgainstRest.predict "qiskit.aqua.components.multiclass_extensions.OneAgainstRest.predict")(x)                                | Applying multiple estimators for prediction.                                                                                                                                                                                            |
| [`OneAgainstRest.set_estimator`](qiskit.aqua.components.multiclass_extensions.OneAgainstRest.set_estimator "qiskit.aqua.components.multiclass_extensions.OneAgainstRest.set_estimator")(estimator\_cls) | Called internally to set `Estimator` and parameters :type estimator\_cls: `Callable`\[\[`List`], `Estimator`] :param estimator\_cls: An `Estimator` class :type params: `Optional`\[`List`] :param params: Parameters for the estimator |
| [`OneAgainstRest.test`](qiskit.aqua.components.multiclass_extensions.OneAgainstRest.test "qiskit.aqua.components.multiclass_extensions.OneAgainstRest.test")(x, y)                                      | Testing multiple estimators each for distinguishing a pair of classes.                                                                                                                                                                  |
| [`OneAgainstRest.train`](qiskit.aqua.components.multiclass_extensions.OneAgainstRest.train "qiskit.aqua.components.multiclass_extensions.OneAgainstRest.train")(x, y)                                   | Training multiple estimators each for distinguishing a pair of classes.                                                                                                                                                                 |

