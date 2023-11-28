<span id="qiskit-aqua-components-multiclass-extensions-allpairs" />

# qiskit.aqua.components.multiclass\_extensions.AllPairs

<span id="undefined" />

`AllPairs`

The All-Pairs multiclass extension.

In the **all-pairs** reduction, one trains $k(k−1)/2$ binary classifiers for a $k$-way multiclass problem; each receives the samples of a pair of classes from the original training set, and must learn to distinguish these two classes. At prediction time, a **weighted voting scheme** is used: all $k(k−1)/2$ classifiers are applied to an unseen sample, and each class gets assigned the sum of all the scores obtained by the various classifiers. The combined classifier returns as a result the class getting the highest value.

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                                                          |                                                                                                                                                                                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.components.multiclass_extensions.AllPairs.__init__ "qiskit.aqua.components.multiclass_extensions.AllPairs.__init__")()                                         | Initialize self.                                                                                                                                                                                                                        |
| [`predict`](#qiskit.aqua.components.multiclass_extensions.AllPairs.predict "qiskit.aqua.components.multiclass_extensions.AllPairs.predict")(x)                                           | Applying multiple estimators for prediction.                                                                                                                                                                                            |
| [`set_estimator`](#qiskit.aqua.components.multiclass_extensions.AllPairs.set_estimator "qiskit.aqua.components.multiclass_extensions.AllPairs.set_estimator")(estimator\_cls\[, params]) | Called internally to set `Estimator` and parameters :type estimator\_cls: `Callable`\[\[`List`], `Estimator`] :param estimator\_cls: An `Estimator` class :type params: `Optional`\[`List`] :param params: Parameters for the estimator |
| [`test`](#qiskit.aqua.components.multiclass_extensions.AllPairs.test "qiskit.aqua.components.multiclass_extensions.AllPairs.test")(x, y)                                                 | Testing multiple estimators each for distinguishing a pair of classes.                                                                                                                                                                  |
| [`train`](#qiskit.aqua.components.multiclass_extensions.AllPairs.train "qiskit.aqua.components.multiclass_extensions.AllPairs.train")(x, y)                                              | Training multiple estimators each for distinguishing a pair of classes.                                                                                                                                                                 |

<span id="undefined" />

`predict(x)`

Applying multiple estimators for prediction.

**Parameters**

**x** (*numpy.ndarray*) – NxD array

**Returns**

predicted labels, Nx1 array

**Return type**

numpy.ndarray

<span id="undefined" />

`set_estimator(estimator_cls, params=None)`

Called internally to set `Estimator` and parameters :type estimator\_cls: `Callable`\[\[`List`], `Estimator`] :param estimator\_cls: An `Estimator` class :type params: `Optional`\[`List`] :param params: Parameters for the estimator

**Return type**

`None`

<span id="undefined" />

`test(x, y)`

Testing multiple estimators each for distinguishing a pair of classes.

**Parameters**

*   **x** (*numpy.ndarray*) – input points
*   **y** (*numpy.ndarray*) – input labels

**Returns**

accuracy

**Return type**

float

<span id="undefined" />

`train(x, y)`

Training multiple estimators each for distinguishing a pair of classes.

**Parameters**

*   **x** (*numpy.ndarray*) – input points
*   **y** (*numpy.ndarray*) – input labels

**Raises**

**ValueError** – can not be fit when only one class is present.
