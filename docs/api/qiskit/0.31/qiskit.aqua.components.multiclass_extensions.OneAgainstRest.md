# OneAgainstRest

<span id="undefined" />

`OneAgainstRest`

Bases: `qiskit.aqua.components.multiclass_extensions.multiclass_extension.MulticlassExtension`

The One Against Rest multiclass extension.

For an $n$-class problem, the **one-against-rest** method constructs $n$ SVM classifiers, with the $i$-th classifier separating class $i$ from all the remaining classes, $\forall i \in \{1, 2, \ldots, n\}$. When the $n$ classifiers are combined to make the final decision, the classifier that generates the highest value from its decision function is selected as the winner and the corresponding class label is returned.

## Methods

|                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`predict`](qiskit.aqua.components.multiclass_extensions.OneAgainstRest.predict#qiskit.aqua.components.multiclass_extensions.OneAgainstRest.predict "qiskit.aqua.components.multiclass_extensions.OneAgainstRest.predict")                         | Applying multiple estimators for prediction.                                                                                                                                                                                            |
| [`set_estimator`](qiskit.aqua.components.multiclass_extensions.OneAgainstRest.set_estimator#qiskit.aqua.components.multiclass_extensions.OneAgainstRest.set_estimator "qiskit.aqua.components.multiclass_extensions.OneAgainstRest.set_estimator") | Called internally to set `Estimator` and parameters :type estimator\_cls: `Callable`\[\[`List`], `Estimator`] :param estimator\_cls: An `Estimator` class :type params: `Optional`\[`List`] :param params: Parameters for the estimator |
| [`test`](qiskit.aqua.components.multiclass_extensions.OneAgainstRest.test#qiskit.aqua.components.multiclass_extensions.OneAgainstRest.test "qiskit.aqua.components.multiclass_extensions.OneAgainstRest.test")                                     | Testing multiple estimators each for distinguishing a pair of classes.                                                                                                                                                                  |
| [`train`](qiskit.aqua.components.multiclass_extensions.OneAgainstRest.train#qiskit.aqua.components.multiclass_extensions.OneAgainstRest.train "qiskit.aqua.components.multiclass_extensions.OneAgainstRest.train")                                 | Training multiple estimators each for distinguishing a pair of classes.                                                                                                                                                                 |
