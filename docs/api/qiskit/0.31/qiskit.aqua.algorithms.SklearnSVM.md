# SklearnSVM

<span id="undefined" />

`SklearnSVM(training_dataset, test_dataset=None, datapoints=None, gamma=None, multiclass_extension=None)`

Bases: `qiskit.aqua.algorithms.classical_algorithm.ClassicalAlgorithm`

The Sklearn SVM algorithm (classical).

This scikit-learn based SVM algorithm uses a classical approach to experiment with feature map classification problems. See also the quantum classifier [`QSVM`](qiskit.aqua.algorithms.QSVM#qiskit.aqua.algorithms.QSVM "qiskit.aqua.algorithms.QSVM").

Internally, this algorithm will run the binary classification or multiclass classification based on how many classes the data has. If the data has more than 2 classes then a *multiclass\_extension* is required to be supplied. Aqua provides several [`multiclass_extensions`](qiskit.aqua.components.multiclass_extensions#module-qiskit.aqua.components.multiclass_extensions "qiskit.aqua.components.multiclass_extensions").

**Parameters**

*   **training\_dataset** (`Dict`\[`str`, `ndarray`]) – Training dataset.
*   **test\_dataset** (`Optional`\[`Dict`\[`str`, `ndarray`]]) – Testing dataset.
*   **datapoints** (`Optional`\[`ndarray`]) – Prediction dataset.
*   **gamma** (`Optional`\[`int`]) – Used as input for sklearn rbf\_kernel which is used internally. See [sklearn.metrics.pairwise.rbf\_kernel](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.pairwise.rbf_kernel.html) for more information about gamma.
*   **multiclass\_extension** (`Optional`\[`MulticlassExtension`]) – If number of classes is greater than 2 then a multiclass scheme must be supplied, in the form of a multiclass extension.

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – Multiclass extension not supplied when number of classes > 2

## Methods

|                                                                                                                                                          |                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| [`load_model`](qiskit.aqua.algorithms.SklearnSVM.load_model#qiskit.aqua.algorithms.SklearnSVM.load_model "qiskit.aqua.algorithms.SklearnSVM.load_model") | Load a model from a file path.   |
| [`predict`](qiskit.aqua.algorithms.SklearnSVM.predict#qiskit.aqua.algorithms.SklearnSVM.predict "qiskit.aqua.algorithms.SklearnSVM.predict")             | Predict using the SVM            |
| [`run`](qiskit.aqua.algorithms.SklearnSVM.run#qiskit.aqua.algorithms.SklearnSVM.run "qiskit.aqua.algorithms.SklearnSVM.run")                             | Execute the classical algorithm. |
| [`save_model`](qiskit.aqua.algorithms.SklearnSVM.save_model#qiskit.aqua.algorithms.SklearnSVM.save_model "qiskit.aqua.algorithms.SklearnSVM.save_model") | Save the model to a file path.   |
| [`test`](qiskit.aqua.algorithms.SklearnSVM.test#qiskit.aqua.algorithms.SklearnSVM.test "qiskit.aqua.algorithms.SklearnSVM.test")                         | Test the SVM                     |
| [`train`](qiskit.aqua.algorithms.SklearnSVM.train#qiskit.aqua.algorithms.SklearnSVM.train "qiskit.aqua.algorithms.SklearnSVM.train")                     | Train the SVM                    |

## Attributes

<span id="undefined" />

### class\_to\_label

returns class to label

<span id="undefined" />

### label\_to\_class

returns label to class

<span id="undefined" />

### random

Return a numpy random.

<span id="undefined" />

### ret

returns result
