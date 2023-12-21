# qiskit.aqua.components.multiclass\_extensions.OneAgainstRest.train

`OneAgainstRest.train(x, y)`

Training multiple estimators each for distinguishing a pair of classes.

**Parameters**

*   **x** (*numpy.ndarray*) – input points
*   **y** (*numpy.ndarray*) – input labels

**Raises**

**Exception** – given all data points are assigned to the same class, the prediction would be boring
