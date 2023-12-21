---
title: QSVM
description: API reference for qiskit.aqua.algorithms.QSVM
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.QSVM
---

# QSVM

<span id="qiskit.aqua.algorithms.QSVM" />

`QSVM(feature_map, training_dataset=None, test_dataset=None, datapoints=None, multiclass_extension=None, quantum_instance=None)`

Quantum SVM algorithm.

A key concept in classification methods is that of a kernel. Data cannot typically be separated by a hyperplane in its original space. A common technique used to find such a hyperplane consists on applying a non-linear transformation function to the data. This function is called a *feature map*, as it transforms the raw features, or measurable properties, of the phenomenon or subject under study. Classifying in this new feature space – and, as a matter of fact, also in any other space, including the raw original one – is nothing more than seeing how close data points are to each other. This is the same as computing the inner product for each pair of data in the set. In fact we do not need to compute the non-linear feature map for each datum, but only the inner product of each pair of data points in the new feature space. This collection of inner products is called the **kernel** and it is perfectly possible to have feature maps that are hard to compute but whose kernels are not.

The QSVM algorithm applies to classification problems that require a feature map for which computing the kernel is not efficient classically. This means that the required computational resources are expected to scale exponentially with the size of the problem. QSVM uses a Quantum processor to solve this problem by a direct estimation of the kernel in the feature space. The method used falls in the category of what is called **supervised learning**, consisting of a **training phase** (where the kernel is calculated and the support vectors obtained) and a **test or classification phase** (where new data without labels is classified according to the solution found in the training phase).

Internally, QSVM will run the binary classification or multiclass classification based on how many classes the data has. If the data has more than 2 classes then a *multiclass\_extension* is required to be supplied. Aqua provides several [`multiclass_extensions`](qiskit.aqua.components.multiclass_extensions#module-qiskit.aqua.components.multiclass_extensions "qiskit.aqua.components.multiclass_extensions").

See also [https://arxiv.org/abs/1804.11326](https://arxiv.org/abs/1804.11326)

**Parameters**

*   **feature\_map** (`Union`\[[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), [`FeatureMap`](qiskit.aqua.components.feature_maps.FeatureMap "qiskit.aqua.components.feature_maps.feature_map.FeatureMap")]) – Feature map module, used to transform data
*   **training\_dataset** (`Optional`\[`Dict`\[`str`, `ndarray`]]) – Training dataset.
*   **test\_dataset** (`Optional`\[`Dict`\[`str`, `ndarray`]]) – Testing dataset.
*   **datapoints** (`Optional`\[`ndarray`]) – Prediction dataset.
*   **multiclass\_extension** (`Optional`\[[`MulticlassExtension`](qiskit.aqua.components.multiclass_extensions.MulticlassExtension "qiskit.aqua.components.multiclass_extensions.multiclass_extension.MulticlassExtension")]) – If number of classes is greater than 2 then a multiclass scheme must be supplied, in the form of a multiclass extension.
*   **quantum\_instance** (`Union`\[[`QuantumInstance`](qiskit.aqua.QuantumInstance "qiskit.aqua.quantum_instance.QuantumInstance"), [`BaseBackend`](qiskit.providers.BaseBackend "qiskit.providers.basebackend.BaseBackend"), `None`]) – Quantum Instance or Backend

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – Multiclass extension not supplied when number of classes > 2

## Attributes

|                                                                                                                        |                           |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [`QSVM.BATCH_SIZE`](qiskit.aqua.algorithms.QSVM.BATCH_SIZE "qiskit.aqua.algorithms.QSVM.BATCH_SIZE")                   |                           |
| [`QSVM.backend`](qiskit.aqua.algorithms.QSVM.backend "qiskit.aqua.algorithms.QSVM.backend")                            | Returns backend.          |
| [`QSVM.quantum_instance`](qiskit.aqua.algorithms.QSVM.quantum_instance "qiskit.aqua.algorithms.QSVM.quantum_instance") | Returns quantum instance. |
| [`QSVM.random`](qiskit.aqua.algorithms.QSVM.random "qiskit.aqua.algorithms.QSVM.random")                               | Return a numpy random.    |
| [`QSVM.ret`](qiskit.aqua.algorithms.QSVM.ret "qiskit.aqua.algorithms.QSVM.ret")                                        | returns result            |

## Methods

|                                                                                                                                                            |                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [`QSVM.construct_circuit`](qiskit.aqua.algorithms.QSVM.construct_circuit "qiskit.aqua.algorithms.QSVM.construct_circuit")(x1, x2\[, measurement])          | Generate inner product of x1 and x2 with the given feature map.              |
| [`QSVM.construct_kernel_matrix`](qiskit.aqua.algorithms.QSVM.construct_kernel_matrix "qiskit.aqua.algorithms.QSVM.construct_kernel_matrix")(x1\_vec\[, …]) | Construct kernel matrix, if x2\_vec is None, self-innerproduct is conducted. |
| [`QSVM.get_kernel_matrix`](qiskit.aqua.algorithms.QSVM.get_kernel_matrix "qiskit.aqua.algorithms.QSVM.get_kernel_matrix")(quantum\_instance, …)            | Construct kernel matrix, if x2\_vec is None, self-innerproduct is conducted. |
| [`QSVM.load_model`](qiskit.aqua.algorithms.QSVM.load_model "qiskit.aqua.algorithms.QSVM.load_model")(file\_path)                                           | Load a model from a file path.                                               |
| [`QSVM.predict`](qiskit.aqua.algorithms.QSVM.predict "qiskit.aqua.algorithms.QSVM.predict")(data\[, quantum\_instance])                                    | Predict using the svm.                                                       |
| [`QSVM.run`](qiskit.aqua.algorithms.QSVM.run "qiskit.aqua.algorithms.QSVM.run")(\[quantum\_instance])                                                      | Execute the algorithm with selected backend.                                 |
| [`QSVM.save_model`](qiskit.aqua.algorithms.QSVM.save_model "qiskit.aqua.algorithms.QSVM.save_model")(file\_path)                                           | Save the model to a file path.                                               |
| [`QSVM.set_backend`](qiskit.aqua.algorithms.QSVM.set_backend "qiskit.aqua.algorithms.QSVM.set_backend")(backend, \*\*kwargs)                               | Sets backend with configuration.                                             |
| [`QSVM.setup_datapoint`](qiskit.aqua.algorithms.QSVM.setup_datapoint "qiskit.aqua.algorithms.QSVM.setup_datapoint")(datapoints)                            | Setup data points, if the data were there, they would be overwritten.        |
| [`QSVM.setup_test_data`](qiskit.aqua.algorithms.QSVM.setup_test_data "qiskit.aqua.algorithms.QSVM.setup_test_data")(test\_dataset)                         | Setup test data, if the data were there, they would be overwritten.          |
| [`QSVM.setup_training_data`](qiskit.aqua.algorithms.QSVM.setup_training_data "qiskit.aqua.algorithms.QSVM.setup_training_data")(training\_dataset)         | Setup training data, if the data were there, they would be overwritten.      |
| [`QSVM.test`](qiskit.aqua.algorithms.QSVM.test "qiskit.aqua.algorithms.QSVM.test")(data, labels\[, quantum\_instance])                                     | Test the svm.                                                                |
| [`QSVM.train`](qiskit.aqua.algorithms.QSVM.train "qiskit.aqua.algorithms.QSVM.train")(data, labels\[, quantum\_instance])                                  | Train the svm.                                                               |

