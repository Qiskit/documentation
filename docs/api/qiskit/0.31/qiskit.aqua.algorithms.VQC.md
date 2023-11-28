# VQC

<span id="undefined" />

`VQC(optimizer, feature_map, var_form, training_dataset, test_dataset=None, datapoints=None, max_evals_grouped=1, minibatch_size=- 1, callback=None, use_sigmoid_cross_entropy=False, quantum_instance=None)`

Bases: `qiskit.aqua.algorithms.vq_algorithm.VQAlgorithm`

The Variational Quantum Classifier algorithm.

Similar to [`QSVM`](qiskit.aqua.algorithms.QSVM#qiskit.aqua.algorithms.QSVM "qiskit.aqua.algorithms.QSVM"), the VQC algorithm also applies to classification problems. VQC uses the variational method to solve such problems in a quantum processor. Specifically, it optimizes a parameterized quantum circuit to provide a solution that cleanly separates the data.

<Admonition title="Note" type="note">
  The VQC stores the parameters of var\_form and feature\_map sorted by name to map the values provided by the optimizer to the circuit. This is done to ensure reproducible results, for example such that running the optimization twice with same random seeds yields the same result.
</Admonition>

**Parameters**

*   **optimizer** (`Optimizer`) – The classical optimizer to use.
*   **feature\_map** (`Union`\[`QuantumCircuit`, `FeatureMap`]) – The FeatureMap instance to use.
*   **var\_form** (`Union`\[`QuantumCircuit`, `VariationalForm`]) – The variational form instance.
*   **training\_dataset** (`Dict`\[`str`, `ndarray`]) – The training dataset, in the format \{‘A’: np.ndarray, ‘B’: np.ndarray, …}.
*   **test\_dataset** (`Optional`\[`Dict`\[`str`, `ndarray`]]) – The test dataset, in same format as training\_dataset.
*   **datapoints** (`Optional`\[`ndarray`]) – NxD array, N is the number of data and D is data dimension.
*   **max\_evals\_grouped** (`int`) – The maximum number of evaluations to perform simultaneously.
*   **minibatch\_size** (`int`) – The size of a mini-batch.
*   **callback** (`Optional`\[`Callable`\[\[`int`, `ndarray`, `float`, `int`], `None`]]) – a callback that can access the intermediate data during the optimization. Four parameter values are passed to the callback as follows during each evaluation. These are: the evaluation count, parameters of the variational form, the evaluated value, the index of data batch.
*   **use\_sigmoid\_cross\_entropy** (`bool`) – whether to use sigmoid cross entropy or not.
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

<Admonition title="Note" type="note">
  We use label to denote numeric results and class the class names (str).
</Admonition>

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – Missing feature map or missing training dataset.

## Methods

|                                                                                                                                                                                                                     |                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [`batch_data`](qiskit.aqua.algorithms.VQC.batch_data#qiskit.aqua.algorithms.VQC.batch_data "qiskit.aqua.algorithms.VQC.batch_data")                                                                                 | batch data                                                                  |
| [`cleanup_parameterized_circuits`](qiskit.aqua.algorithms.VQC.cleanup_parameterized_circuits#qiskit.aqua.algorithms.VQC.cleanup_parameterized_circuits "qiskit.aqua.algorithms.VQC.cleanup_parameterized_circuits") | set parameterized circuits to None                                          |
| [`construct_circuit`](qiskit.aqua.algorithms.VQC.construct_circuit#qiskit.aqua.algorithms.VQC.construct_circuit "qiskit.aqua.algorithms.VQC.construct_circuit")                                                     | Construct circuit based on data and parameters in variational form.         |
| [`find_minimum`](qiskit.aqua.algorithms.VQC.find_minimum#qiskit.aqua.algorithms.VQC.find_minimum "qiskit.aqua.algorithms.VQC.find_minimum")                                                                         | Optimize to find the minimum cost value.                                    |
| [`get_optimal_circuit`](qiskit.aqua.algorithms.VQC.get_optimal_circuit#qiskit.aqua.algorithms.VQC.get_optimal_circuit "qiskit.aqua.algorithms.VQC.get_optimal_circuit")                                             | get optimal circuit                                                         |
| [`get_optimal_cost`](qiskit.aqua.algorithms.VQC.get_optimal_cost#qiskit.aqua.algorithms.VQC.get_optimal_cost "qiskit.aqua.algorithms.VQC.get_optimal_cost")                                                         | get optimal cost                                                            |
| [`get_optimal_vector`](qiskit.aqua.algorithms.VQC.get_optimal_vector#qiskit.aqua.algorithms.VQC.get_optimal_vector "qiskit.aqua.algorithms.VQC.get_optimal_vector")                                                 | get optimal vector                                                          |
| [`get_prob_vector_for_params`](qiskit.aqua.algorithms.VQC.get_prob_vector_for_params#qiskit.aqua.algorithms.VQC.get_prob_vector_for_params "qiskit.aqua.algorithms.VQC.get_prob_vector_for_params")                 | Helper function to get probability vectors for a set of params              |
| [`get_probabilities_for_counts`](qiskit.aqua.algorithms.VQC.get_probabilities_for_counts#qiskit.aqua.algorithms.VQC.get_probabilities_for_counts "qiskit.aqua.algorithms.VQC.get_probabilities_for_counts")         | get probabilities for counts                                                |
| [`is_gradient_really_supported`](qiskit.aqua.algorithms.VQC.is_gradient_really_supported#qiskit.aqua.algorithms.VQC.is_gradient_really_supported "qiskit.aqua.algorithms.VQC.is_gradient_really_supported")         | returns is gradient really supported                                        |
| [`load_model`](qiskit.aqua.algorithms.VQC.load_model#qiskit.aqua.algorithms.VQC.load_model "qiskit.aqua.algorithms.VQC.load_model")                                                                                 | load model                                                                  |
| [`predict`](qiskit.aqua.algorithms.VQC.predict#qiskit.aqua.algorithms.VQC.predict "qiskit.aqua.algorithms.VQC.predict")                                                                                             | Predict the labels for the data.                                            |
| [`run`](qiskit.aqua.algorithms.VQC.run#qiskit.aqua.algorithms.VQC.run "qiskit.aqua.algorithms.VQC.run")                                                                                                             | Execute the algorithm with selected backend.                                |
| [`save_model`](qiskit.aqua.algorithms.VQC.save_model#qiskit.aqua.algorithms.VQC.save_model "qiskit.aqua.algorithms.VQC.save_model")                                                                                 | save model                                                                  |
| [`set_backend`](qiskit.aqua.algorithms.VQC.set_backend#qiskit.aqua.algorithms.VQC.set_backend "qiskit.aqua.algorithms.VQC.set_backend")                                                                             | Sets backend with configuration.                                            |
| [`test`](qiskit.aqua.algorithms.VQC.test#qiskit.aqua.algorithms.VQC.test "qiskit.aqua.algorithms.VQC.test")                                                                                                         | Predict the labels for the data, and test against with ground truth labels. |
| [`train`](qiskit.aqua.algorithms.VQC.train#qiskit.aqua.algorithms.VQC.train "qiskit.aqua.algorithms.VQC.train")                                                                                                     | Train the models, and save results.                                         |

## Attributes

<span id="undefined" />

### backend

Returns backend.

**Return type**

`Union`\[`Backend`, `BaseBackend`]

<span id="undefined" />

### class\_to\_label

returns class to label

<span id="undefined" />

### datapoints

return data points

<span id="undefined" />

### feature\_map

Return the feature map.

**Return type**

`Union`\[`FeatureMap`, `QuantumCircuit`, `None`]

<span id="undefined" />

### initial\_point

Returns initial point

**Return type**

`Optional`\[`ndarray`]

<span id="undefined" />

### label\_to\_class

returns label to class

<span id="undefined" />

### optimal\_params

returns optimal parameters

<span id="undefined" />

### optimizer

Returns optimizer

**Return type**

`Optional`\[`Optimizer`]

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

<span id="undefined" />

### test\_dataset

returns test dataset

<span id="undefined" />

### training\_dataset

returns training dataset

<span id="undefined" />

### var\_form

Returns variational form

**Return type**

`Union`\[`QuantumCircuit`, `VariationalForm`, `None`]
