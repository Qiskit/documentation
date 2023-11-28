<span id="qiskit-aqua-components-multiclass-extensions-multiclassextension" />

# qiskit.aqua.components.multiclass\_extensions.MulticlassExtension

<span id="undefined" />

`MulticlassExtension`

Base class for multiclass extension.

This method should initialize the module and use an exception if a component of the module is not available.

<span id="undefined" />

`abstract __init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                                                                                |                                                                                                                                                                                                                                         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.components.multiclass_extensions.MulticlassExtension.__init__ "qiskit.aqua.components.multiclass_extensions.MulticlassExtension.__init__")()                                         | Initialize self.                                                                                                                                                                                                                        |
| [`predict`](#qiskit.aqua.components.multiclass_extensions.MulticlassExtension.predict "qiskit.aqua.components.multiclass_extensions.MulticlassExtension.predict")(x)                                           | Applying multiple estimators for prediction.                                                                                                                                                                                            |
| [`set_estimator`](#qiskit.aqua.components.multiclass_extensions.MulticlassExtension.set_estimator "qiskit.aqua.components.multiclass_extensions.MulticlassExtension.set_estimator")(estimator\_cls\[, params]) | Called internally to set `Estimator` and parameters :type estimator\_cls: `Callable`\[\[`List`], `Estimator`] :param estimator\_cls: An `Estimator` class :type params: `Optional`\[`List`] :param params: Parameters for the estimator |
| [`test`](#qiskit.aqua.components.multiclass_extensions.MulticlassExtension.test "qiskit.aqua.components.multiclass_extensions.MulticlassExtension.test")(x, y)                                                 | Testing multiple estimators each for distinguishing a pair of classes.                                                                                                                                                                  |
| [`train`](#qiskit.aqua.components.multiclass_extensions.MulticlassExtension.train "qiskit.aqua.components.multiclass_extensions.MulticlassExtension.train")(x, y)                                              | Training multiple estimators each for distinguishing a pair of classes.                                                                                                                                                                 |

<span id="undefined" />

`abstract predict(x)`

Applying multiple estimators for prediction.

**Parameters**

**x** (*numpy.ndarray*) – input points

<span id="undefined" />

`set_estimator(estimator_cls, params=None)`

Called internally to set `Estimator` and parameters :type estimator\_cls: `Callable`\[\[`List`], `Estimator`] :param estimator\_cls: An `Estimator` class :type params: `Optional`\[`List`] :param params: Parameters for the estimator

**Return type**

`None`

<span id="undefined" />

`abstract test(x, y)`

Testing multiple estimators each for distinguishing a pair of classes.

**Parameters**

*   **x** (*numpy.ndarray*) – input points
*   **y** (*numpy.ndarray*) – input labels

<span id="undefined" />

`abstract train(x, y)`

Training multiple estimators each for distinguishing a pair of classes.

**Parameters**

*   **x** (*numpy.ndarray*) – input points
*   **y** (*numpy.ndarray*) – input labels
