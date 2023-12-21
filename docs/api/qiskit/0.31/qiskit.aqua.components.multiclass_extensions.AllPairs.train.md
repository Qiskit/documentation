# qiskit.aqua.components.multiclass\_extensions.AllPairs.train

`AllPairs.train(x, y)`

Training multiple estimators each for distinguishing a pair of classes.

**Parameters**

*   **x** (*numpy.ndarray*) – input points
*   **y** (*numpy.ndarray*) – input labels

**Raises**

**ValueError** – can not be fit when only one class is present.
