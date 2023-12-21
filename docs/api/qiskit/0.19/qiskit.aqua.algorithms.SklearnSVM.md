---
title: SklearnSVM
description: API reference for qiskit.aqua.algorithms.SklearnSVM
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.SklearnSVM
---

# SklearnSVM

<span id="qiskit.aqua.algorithms.SklearnSVM" />

`SklearnSVM(training_dataset, test_dataset=None, datapoints=None, gamma=None, multiclass_extension=None)`

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

|                                                                                                                                    |                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| [`SklearnSVM.class_to_label`](qiskit.aqua.algorithms.SklearnSVM.class_to_label "qiskit.aqua.algorithms.SklearnSVM.class_to_label") | returns class to label |
| [`SklearnSVM.label_to_class`](qiskit.aqua.algorithms.SklearnSVM.label_to_class "qiskit.aqua.algorithms.SklearnSVM.label_to_class") | returns label to class |
| [`SklearnSVM.random`](qiskit.aqua.algorithms.SklearnSVM.random "qiskit.aqua.algorithms.SklearnSVM.random")                         | Return a numpy random. |
| [`SklearnSVM.ret`](qiskit.aqua.algorithms.SklearnSVM.ret "qiskit.aqua.algorithms.SklearnSVM.ret")                                  | returns result         |

## Methods

|                                                                                                                                    |                                  |
| ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| [`SklearnSVM.load_model`](qiskit.aqua.algorithms.SklearnSVM.load_model "qiskit.aqua.algorithms.SklearnSVM.load_model")(file\_path) | Load a model from a file path.   |
| [`SklearnSVM.predict`](qiskit.aqua.algorithms.SklearnSVM.predict "qiskit.aqua.algorithms.SklearnSVM.predict")(data)                | Predict using the SVM            |
| [`SklearnSVM.run`](qiskit.aqua.algorithms.SklearnSVM.run "qiskit.aqua.algorithms.SklearnSVM.run")()                                | Execute the classical algorithm. |
| [`SklearnSVM.save_model`](qiskit.aqua.algorithms.SklearnSVM.save_model "qiskit.aqua.algorithms.SklearnSVM.save_model")(file\_path) | Save the model to a file path.   |
| [`SklearnSVM.test`](qiskit.aqua.algorithms.SklearnSVM.test "qiskit.aqua.algorithms.SklearnSVM.test")(data, labels)                 | Test the SVM                     |
| [`SklearnSVM.train`](qiskit.aqua.algorithms.SklearnSVM.train "qiskit.aqua.algorithms.SklearnSVM.train")(data, labels)              | Train the SVM                    |

