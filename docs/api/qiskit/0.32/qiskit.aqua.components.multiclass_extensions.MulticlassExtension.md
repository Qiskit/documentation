# MulticlassExtension

<span id="undefined" />

`MulticlassExtension`

Bases: `abc.ABC`

Base class for multiclass extension.

This method should initialize the module and use an exception if a component of the module is not available.

## Methods

|                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`predict`](qiskit.aqua.components.multiclass_extensions.MulticlassExtension.predict#qiskit.aqua.components.multiclass_extensions.MulticlassExtension.predict "qiskit.aqua.components.multiclass_extensions.MulticlassExtension.predict")                         | Applying multiple estimators for prediction.                                                                                                                                                                                            |
| [`set_estimator`](qiskit.aqua.components.multiclass_extensions.MulticlassExtension.set_estimator#qiskit.aqua.components.multiclass_extensions.MulticlassExtension.set_estimator "qiskit.aqua.components.multiclass_extensions.MulticlassExtension.set_estimator") | Called internally to set `Estimator` and parameters :type estimator\_cls: `Callable`\[\[`List`], `Estimator`] :param estimator\_cls: An `Estimator` class :type params: `Optional`\[`List`] :param params: Parameters for the estimator |
| [`test`](qiskit.aqua.components.multiclass_extensions.MulticlassExtension.test#qiskit.aqua.components.multiclass_extensions.MulticlassExtension.test "qiskit.aqua.components.multiclass_extensions.MulticlassExtension.test")                                     | Testing multiple estimators each for distinguishing a pair of classes.                                                                                                                                                                  |
| [`train`](qiskit.aqua.components.multiclass_extensions.MulticlassExtension.train#qiskit.aqua.components.multiclass_extensions.MulticlassExtension.train "qiskit.aqua.components.multiclass_extensions.MulticlassExtension.train")                                 | Training multiple estimators each for distinguishing a pair of classes.                                                                                                                                                                 |
