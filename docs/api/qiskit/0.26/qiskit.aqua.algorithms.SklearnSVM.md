# qiskit.aqua.algorithms.SklearnSVM

<span id="undefined" />

`SklearnSVM(training_dataset, test_dataset=None, datapoints=None, gamma=None, multiclass_extension=None)`

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

<span id="undefined" />

`__init__(training_dataset, test_dataset=None, datapoints=None, gamma=None, multiclass_extension=None)`

**Parameters**

*   **training\_dataset** (`Dict`\[`str`, `ndarray`]) – Training dataset.

*   **test\_dataset** (`Optional`\[`Dict`\[`str`, `ndarray`]]) – Testing dataset.

*   **datapoints** (`Optional`\[`ndarray`]) – Prediction dataset.

*   **gamma** (`Optional`\[`int`]) –

    Used as input for sklearn rbf\_kernel which is used internally. See [sklearn.metrics.pairwise.rbf\_kernel](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.pairwise.rbf_kernel.html) for more information about gamma.

*   **multiclass\_extension** (`Optional`\[`MulticlassExtension`]) – If number of classes is greater than 2 then a multiclass scheme must be supplied, in the form of a multiclass extension.

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – Multiclass extension not supplied when number of classes > 2

## Methods

|                                                                                                                                                |                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| [`__init__`](#qiskit.aqua.algorithms.SklearnSVM.__init__ "qiskit.aqua.algorithms.SklearnSVM.__init__")(training\_dataset\[, test\_dataset, …]) | **type training\_dataset**`Dict`\[`str`, `ndarray`] |
| [`load_model`](#qiskit.aqua.algorithms.SklearnSVM.load_model "qiskit.aqua.algorithms.SklearnSVM.load_model")(file\_path)                       | Load a model from a file path.                      |
| [`predict`](#qiskit.aqua.algorithms.SklearnSVM.predict "qiskit.aqua.algorithms.SklearnSVM.predict")(data)                                      | Predict using the SVM                               |
| [`run`](#qiskit.aqua.algorithms.SklearnSVM.run "qiskit.aqua.algorithms.SklearnSVM.run")()                                                      | Execute the classical algorithm.                    |
| [`save_model`](#qiskit.aqua.algorithms.SklearnSVM.save_model "qiskit.aqua.algorithms.SklearnSVM.save_model")(file\_path)                       | Save the model to a file path.                      |
| [`test`](#qiskit.aqua.algorithms.SklearnSVM.test "qiskit.aqua.algorithms.SklearnSVM.test")(data, labels)                                       | Test the SVM                                        |
| [`train`](#qiskit.aqua.algorithms.SklearnSVM.train "qiskit.aqua.algorithms.SklearnSVM.train")(data, labels)                                    | Train the SVM                                       |

## Attributes

|                                                                                                                          |                        |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------- |
| [`class_to_label`](#qiskit.aqua.algorithms.SklearnSVM.class_to_label "qiskit.aqua.algorithms.SklearnSVM.class_to_label") | returns class to label |
| [`label_to_class`](#qiskit.aqua.algorithms.SklearnSVM.label_to_class "qiskit.aqua.algorithms.SklearnSVM.label_to_class") | returns label to class |
| [`random`](#qiskit.aqua.algorithms.SklearnSVM.random "qiskit.aqua.algorithms.SklearnSVM.random")                         | Return a numpy random. |
| [`ret`](#qiskit.aqua.algorithms.SklearnSVM.ret "qiskit.aqua.algorithms.SklearnSVM.ret")                                  | returns result         |

<span id="undefined" />

`property class_to_label`

returns class to label

<span id="undefined" />

`property label_to_class`

returns label to class

<span id="undefined" />

`load_model(file_path)`

Load a model from a file path.

**Parameters**

**file\_path** (*str*) – the path of the saved model.

<span id="undefined" />

`predict(data)`

Predict using the SVM

**Parameters**

**data** (*numpy.ndarray*) – NxD array, where N is the number of data, D is the feature dimension.

**Returns**

predicted labels, Nx1 array

**Return type**

numpy.ndarray

<span id="undefined" />

`property random`

Return a numpy random.

<span id="undefined" />

`property ret`

returns result

<span id="undefined" />

`run()`

Execute the classical algorithm.

**Returns**

results of an algorithm.

**Return type**

dict

<span id="undefined" />

`save_model(file_path)`

Save the model to a file path.

**Parameters**

**file\_path** (*str*) – a path to save the model.

<span id="undefined" />

`test(data, labels)`

Test the SVM

**Parameters**

*   **data** (*numpy.ndarray*) – NxD array, where N is the number of data, D is the feature dimension.
*   **labels** (*numpy.ndarray*) – Nx1 array, where N is the number of data

**Returns**

accuracy

**Return type**

float

<span id="undefined" />

`train(data, labels)`

Train the SVM

**Parameters**

*   **data** (*numpy.ndarray*) – NxD array, where N is the number of data, D is the feature dimension.
*   **labels** (*numpy.ndarray*) – Nx1 array, where N is the number of data
