# QSVM

<span id="undefined" />

`QSVM(feature_map, training_dataset=None, test_dataset=None, datapoints=None, multiclass_extension=None, lambda2=0.001, quantum_instance=None)`

Bases: `qiskit.aqua.algorithms.quantum_algorithm.QuantumAlgorithm`

Quantum SVM algorithm.

A key concept in classification methods is that of a kernel. Data cannot typically be separated by a hyperplane in its original space. A common technique used to find such a hyperplane consists on applying a non-linear transformation function to the data. This function is called a *feature map*, as it transforms the raw features, or measurable properties, of the phenomenon or subject under study. Classifying in this new feature space – and, as a matter of fact, also in any other space, including the raw original one – is nothing more than seeing how close data points are to each other. This is the same as computing the inner product for each pair of data in the set. In fact we do not need to compute the non-linear feature map for each datum, but only the inner product of each pair of data points in the new feature space. This collection of inner products is called the **kernel** and it is perfectly possible to have feature maps that are hard to compute but whose kernels are not.

The QSVM algorithm applies to classification problems that require a feature map for which computing the kernel is not efficient classically. This means that the required computational resources are expected to scale exponentially with the size of the problem. QSVM uses a Quantum processor to solve this problem by a direct estimation of the kernel in the feature space. The method used falls in the category of what is called **supervised learning**, consisting of a **training phase** (where the kernel is calculated and the support vectors obtained) and a **test or classification phase** (where new data without labels is classified according to the solution found in the training phase).

Internally, QSVM will run the binary classification or multiclass classification based on how many classes the data has. If the data has more than 2 classes then a *multiclass\_extension* is required to be supplied. Aqua provides several [`multiclass_extensions`](qiskit.aqua.components.multiclass_extensions#module-qiskit.aqua.components.multiclass_extensions "qiskit.aqua.components.multiclass_extensions").

See also [https://arxiv.org/abs/1804.11326](https://arxiv.org/abs/1804.11326)

**Parameters**

*   **feature\_map** (`Union`\[`QuantumCircuit`, `FeatureMap`]) – Feature map module, used to transform data
*   **training\_dataset** (`Optional`\[`Dict`\[`str`, `ndarray`]]) – Training dataset.
*   **test\_dataset** (`Optional`\[`Dict`\[`str`, `ndarray`]]) – Testing dataset.
*   **datapoints** (`Optional`\[`ndarray`]) – Prediction dataset.
*   **multiclass\_extension** (`Optional`\[`MulticlassExtension`]) – If number of classes is greater than 2 then a multiclass scheme must be supplied, in the form of a multiclass extension.
*   **lambda2** (`float`) – L2 norm regularization factor
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – Multiclass extension not supplied when number of classes > 2

## Methods

|                                                                                                                                                                                            |                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| [`construct_circuit`](qiskit.aqua.algorithms.QSVM.construct_circuit#qiskit.aqua.algorithms.QSVM.construct_circuit "qiskit.aqua.algorithms.QSVM.construct_circuit")                         | Generate inner product of x1 and x2 with the given feature map.              |
| [`construct_kernel_matrix`](qiskit.aqua.algorithms.QSVM.construct_kernel_matrix#qiskit.aqua.algorithms.QSVM.construct_kernel_matrix "qiskit.aqua.algorithms.QSVM.construct_kernel_matrix") | Construct kernel matrix, if x2\_vec is None, self-innerproduct is conducted. |
| [`get_kernel_matrix`](qiskit.aqua.algorithms.QSVM.get_kernel_matrix#qiskit.aqua.algorithms.QSVM.get_kernel_matrix "qiskit.aqua.algorithms.QSVM.get_kernel_matrix")                         | Construct kernel matrix, if x2\_vec is None, self-innerproduct is conducted. |
| [`load_model`](qiskit.aqua.algorithms.QSVM.load_model#qiskit.aqua.algorithms.QSVM.load_model "qiskit.aqua.algorithms.QSVM.load_model")                                                     | Load a model from a file path.                                               |
| [`predict`](qiskit.aqua.algorithms.QSVM.predict#qiskit.aqua.algorithms.QSVM.predict "qiskit.aqua.algorithms.QSVM.predict")                                                                 | Predict using the svm.                                                       |
| [`run`](qiskit.aqua.algorithms.QSVM.run#qiskit.aqua.algorithms.QSVM.run "qiskit.aqua.algorithms.QSVM.run")                                                                                 | Execute the algorithm with selected backend.                                 |
| [`save_model`](qiskit.aqua.algorithms.QSVM.save_model#qiskit.aqua.algorithms.QSVM.save_model "qiskit.aqua.algorithms.QSVM.save_model")                                                     | Save the model to a file path.                                               |
| [`set_backend`](qiskit.aqua.algorithms.QSVM.set_backend#qiskit.aqua.algorithms.QSVM.set_backend "qiskit.aqua.algorithms.QSVM.set_backend")                                                 | Sets backend with configuration.                                             |
| [`setup_datapoint`](qiskit.aqua.algorithms.QSVM.setup_datapoint#qiskit.aqua.algorithms.QSVM.setup_datapoint "qiskit.aqua.algorithms.QSVM.setup_datapoint")                                 | Setup data points, if the data were there, they would be overwritten.        |
| [`setup_test_data`](qiskit.aqua.algorithms.QSVM.setup_test_data#qiskit.aqua.algorithms.QSVM.setup_test_data "qiskit.aqua.algorithms.QSVM.setup_test_data")                                 | Setup test data, if the data were there, they would be overwritten.          |
| [`setup_training_data`](qiskit.aqua.algorithms.QSVM.setup_training_data#qiskit.aqua.algorithms.QSVM.setup_training_data "qiskit.aqua.algorithms.QSVM.setup_training_data")                 | Setup training data, if the data were there, they would be overwritten.      |
| [`test`](qiskit.aqua.algorithms.QSVM.test#qiskit.aqua.algorithms.QSVM.test "qiskit.aqua.algorithms.QSVM.test")                                                                             | Test the svm.                                                                |
| [`train`](qiskit.aqua.algorithms.QSVM.train#qiskit.aqua.algorithms.QSVM.train "qiskit.aqua.algorithms.QSVM.train")                                                                         | Train the svm.                                                               |

## Attributes

<span id="undefined" />

### BATCH\_SIZE

`= 1000`

<span id="undefined" />

### backend

Returns backend.

**Return type**

`Union`\[`Backend`, `BaseBackend`]

<span id="undefined" />

### quantum\_instance

Returns quantum instance.

**Return type**

`Optional`\[`QuantumInstance`]

<span id="undefined" />

### random

Return a numpy random.

<span id="undefined" />

### ret

returns result
