# AllPairs

<span id="undefined" />

`AllPairs`

Bases: `qiskit.aqua.components.multiclass_extensions.multiclass_extension.MulticlassExtension`

The All-Pairs multiclass extension.

In the **all-pairs** reduction, one trains $k(k−1)/2$ binary classifiers for a $k$-way multiclass problem; each receives the samples of a pair of classes from the original training set, and must learn to distinguish these two classes. At prediction time, a **weighted voting scheme** is used: all $k(k−1)/2$ classifiers are applied to an unseen sample, and each class gets assigned the sum of all the scores obtained by the various classifiers. The combined classifier returns as a result the class getting the highest value.

## Methods

|                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`predict`](qiskit.aqua.components.multiclass_extensions.AllPairs.predict#qiskit.aqua.components.multiclass_extensions.AllPairs.predict "qiskit.aqua.components.multiclass_extensions.AllPairs.predict")                         | Applying multiple estimators for prediction.                                                                                                                                                                                            |
| [`set_estimator`](qiskit.aqua.components.multiclass_extensions.AllPairs.set_estimator#qiskit.aqua.components.multiclass_extensions.AllPairs.set_estimator "qiskit.aqua.components.multiclass_extensions.AllPairs.set_estimator") | Called internally to set `Estimator` and parameters :type estimator\_cls: `Callable`\[\[`List`], `Estimator`] :param estimator\_cls: An `Estimator` class :type params: `Optional`\[`List`] :param params: Parameters for the estimator |
| [`test`](qiskit.aqua.components.multiclass_extensions.AllPairs.test#qiskit.aqua.components.multiclass_extensions.AllPairs.test "qiskit.aqua.components.multiclass_extensions.AllPairs.test")                                     | Testing multiple estimators each for distinguishing a pair of classes.                                                                                                                                                                  |
| [`train`](qiskit.aqua.components.multiclass_extensions.AllPairs.train#qiskit.aqua.components.multiclass_extensions.AllPairs.train "qiskit.aqua.components.multiclass_extensions.AllPairs.train")                                 | Training multiple estimators each for distinguishing a pair of classes.                                                                                                                                                                 |
