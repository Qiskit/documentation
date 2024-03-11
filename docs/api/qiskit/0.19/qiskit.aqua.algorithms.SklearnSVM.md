---
title: SklearnSVM
description: API reference for qiskit.aqua.algorithms.SklearnSVM
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.SklearnSVM
---

# SklearnSVM

<span id="qiskit.aqua.algorithms.SklearnSVM" />

`SklearnSVM(training_dataset, test_dataset=None, datapoints=None, gamma=None, multiclass_extension=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/algorithms/classifiers/sklearn_svm/sklearn_svm.py "view source code")

The Sklearn SVM algorithm (classical).

This scikit-learn based SVM algorithm uses a classical approach to experiment with feature map classification problems. See also the quantum classifier [`QSVM`](qiskit.aqua.algorithms.QSVM "qiskit.aqua.algorithms.QSVM").

Internally, this algorithm will run the binary classification or multiclass classification based on how many classes the data has. If the data has more than 2 classes then a *multiclass\_extension* is required to be supplied. Aqua provides several [`multiclass_extensions`](qiskit.aqua.components.multiclass_extensions#module-qiskit.aqua.components.multiclass_extensions "qiskit.aqua.components.multiclass_extensions").

**Parameters**

*   **training\_dataset** (`Dict`\[`str`, `ndarray`]) – Training dataset.
*   **test\_dataset** (`Optional`\[`Dict`\[`str`, `ndarray`]]) – Testing dataset.
*   **datapoints** (`Optional`\[`ndarray`]) – Prediction dataset.
*   **gamma** (`Optional`\[`int`]) – Used as input for sklearn rbf\_kernel which is used internally. See [sklearn.metrics.pairwise.rbf\_kernel](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.pairwise.rbf_kernel.html) for more information about gamma.
*   **multiclass\_extension** (`Optional`\[[`MulticlassExtension`](qiskit.aqua.components.multiclass_extensions.MulticlassExtension "qiskit.aqua.components.multiclass_extensions.multiclass_extension.MulticlassExtension")]) – If number of classes is greater than 2 then a multiclass scheme must be supplied, in the form of a multiclass extension.

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – Multiclass extension not supplied when number of classes > 2

## Attributes

### class\_to\_label

returns class to label

### label\_to\_class

returns label to class

### random

Return a numpy random.

### ret

returns result

## Methods

### load\_model

<span id="qiskit.aqua.algorithms.SklearnSVM.load_model" />

`SklearnSVM.load_model(file_path)`

Load a model from a file path.

**Parameters**

**file\_path** (*str*) – the path of the saved model.

### predict

<span id="qiskit.aqua.algorithms.SklearnSVM.predict" />

`SklearnSVM.predict(data)`

Predict using the SVM

**Parameters**

**data** (*numpy.ndarray*) – NxD array, where N is the number of data, D is the feature dimension.

**Returns**

predicted labels, Nx1 array

**Return type**

numpy.ndarray

### run

<span id="qiskit.aqua.algorithms.SklearnSVM.run" />

`SklearnSVM.run()`

Execute the classical algorithm.

**Returns**

results of an algorithm.

**Return type**

dict

### save\_model

<span id="qiskit.aqua.algorithms.SklearnSVM.save_model" />

`SklearnSVM.save_model(file_path)`

Save the model to a file path.

**Parameters**

**file\_path** (*str*) – a path to save the model.

### test

<span id="qiskit.aqua.algorithms.SklearnSVM.test" />

`SklearnSVM.test(data, labels)`

Test the SVM

**Parameters**

*   **data** (*numpy.ndarray*) – NxD array, where N is the number of data, D is the feature dimension.
*   **labels** (*numpy.ndarray*) – Nx1 array, where N is the number of data

**Returns**

accuracy

**Return type**

float

### train

<span id="qiskit.aqua.algorithms.SklearnSVM.train" />

`SklearnSVM.train(data, labels)`

Train the SVM

**Parameters**

*   **data** (*numpy.ndarray*) – NxD array, where N is the number of data, D is the feature dimension.
*   **labels** (*numpy.ndarray*) – Nx1 array, where N is the number of data

