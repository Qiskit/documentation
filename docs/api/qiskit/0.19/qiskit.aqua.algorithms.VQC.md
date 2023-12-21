---
title: VQC
description: API reference for qiskit.aqua.algorithms.VQC
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.VQC
---

# VQC

<span id="qiskit.aqua.algorithms.VQC" />

`VQC(optimizer, feature_map, var_form, training_dataset, test_dataset=None, datapoints=None, max_evals_grouped=1, minibatch_size=- 1, callback=None, quantum_instance=None)`

The Variational Quantum Classifier algorithm.

Similar to [`QSVM`](qiskit.aqua.algorithms.QSVM "qiskit.aqua.algorithms.QSVM"), the VQC algorithm also applies to classification problems. VQC uses the variational method to solve such problems in a quantum processor. Specifically, it optimizes a parameterized quantum circuit to provide a solution that cleanly separates the data.

<Admonition title="Note" type="note">
  The VQC stores the parameters of var\_form and feature\_map sorted by name to map the values provided by the optimizer to the circuit. This is done to ensure reproducible results, for example such that running the optimization twice with same random seeds yields the same result.
</Admonition>

**Parameters**

*   **optimizer** ([`Optimizer`](qiskit.aqua.components.optimizers.Optimizer "qiskit.aqua.components.optimizers.optimizer.Optimizer")) – The classical optimizer to use.
*   **feature\_map** (`Union`\[[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), [`FeatureMap`](qiskit.aqua.components.feature_maps.FeatureMap "qiskit.aqua.components.feature_maps.feature_map.FeatureMap")]) – The FeatureMap instance to use.
*   **var\_form** (`Union`\[[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), [`VariationalForm`](qiskit.aqua.components.variational_forms.VariationalForm "qiskit.aqua.components.variational_forms.variational_form.VariationalForm")]) – The variational form instance.
*   **training\_dataset** (`Dict`\[`str`, `ndarray`]) – The training dataset, in the format \{‘A’: np.ndarray, ‘B’: np.ndarray, …}.
*   **test\_dataset** (`Optional`\[`Dict`\[`str`, `ndarray`]]) – The test dataset, in same format as training\_dataset.
*   **datapoints** (`Optional`\[`ndarray`]) – NxD array, N is the number of data and D is data dimension.
*   **max\_evals\_grouped** (`int`) – The maximum number of evaluations to perform simultaneously.
*   **minibatch\_size** (`int`) – The size of a mini-batch.
*   **callback** (`Optional`\[`Callable`\[\[`int`, `ndarray`, `float`, `int`], `None`]]) – a callback that can access the intermediate data during the optimization. Four parameter values are passed to the callback as follows during each evaluation. These are: the evaluation count, parameters of the variational form, the evaluated value, the index of data batch.
*   **quantum\_instance** (`Union`\[[`QuantumInstance`](qiskit.aqua.QuantumInstance "qiskit.aqua.quantum_instance.QuantumInstance"), [`BaseBackend`](qiskit.providers.BaseBackend "qiskit.providers.basebackend.BaseBackend"), `None`]) – Quantum Instance or Backend

<Admonition title="Note" type="note">
  We use label to denotes numeric results and class the class names (str).
</Admonition>

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – Missing feature map or missing training dataset.

## Attributes

|                                                                                                                     |                            |
| ------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| [`VQC.backend`](qiskit.aqua.algorithms.VQC.backend "qiskit.aqua.algorithms.VQC.backend")                            | Returns backend.           |
| [`VQC.class_to_label`](qiskit.aqua.algorithms.VQC.class_to_label "qiskit.aqua.algorithms.VQC.class_to_label")       | returns class to label     |
| [`VQC.datapoints`](qiskit.aqua.algorithms.VQC.datapoints "qiskit.aqua.algorithms.VQC.datapoints")                   | return data points         |
| [`VQC.feature_map`](qiskit.aqua.algorithms.VQC.feature_map "qiskit.aqua.algorithms.VQC.feature_map")                | Return the feature map.    |
| [`VQC.initial_point`](qiskit.aqua.algorithms.VQC.initial_point "qiskit.aqua.algorithms.VQC.initial_point")          | Returns initial point      |
| [`VQC.label_to_class`](qiskit.aqua.algorithms.VQC.label_to_class "qiskit.aqua.algorithms.VQC.label_to_class")       | returns label to class     |
| [`VQC.optimal_params`](qiskit.aqua.algorithms.VQC.optimal_params "qiskit.aqua.algorithms.VQC.optimal_params")       | returns optimal parameters |
| [`VQC.optimizer`](qiskit.aqua.algorithms.VQC.optimizer "qiskit.aqua.algorithms.VQC.optimizer")                      | Returns optimizer          |
| [`VQC.quantum_instance`](qiskit.aqua.algorithms.VQC.quantum_instance "qiskit.aqua.algorithms.VQC.quantum_instance") | Returns quantum instance.  |
| [`VQC.random`](qiskit.aqua.algorithms.VQC.random "qiskit.aqua.algorithms.VQC.random")                               | Return a numpy random.     |
| [`VQC.ret`](qiskit.aqua.algorithms.VQC.ret "qiskit.aqua.algorithms.VQC.ret")                                        | returns result             |
| [`VQC.test_dataset`](qiskit.aqua.algorithms.VQC.test_dataset "qiskit.aqua.algorithms.VQC.test_dataset")             | returns test dataset       |
| [`VQC.training_dataset`](qiskit.aqua.algorithms.VQC.training_dataset "qiskit.aqua.algorithms.VQC.training_dataset") | returns training dataset   |
| [`VQC.var_form`](qiskit.aqua.algorithms.VQC.var_form "qiskit.aqua.algorithms.VQC.var_form")                         | Returns variational form   |

## Methods

|                                                                                                                                                                 |                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [`VQC.batch_data`](qiskit.aqua.algorithms.VQC.batch_data "qiskit.aqua.algorithms.VQC.batch_data")(data\[, labels, minibatch\_size])                             | batch data                                                                  |
| [`VQC.cleanup_parameterized_circuits`](qiskit.aqua.algorithms.VQC.cleanup_parameterized_circuits "qiskit.aqua.algorithms.VQC.cleanup_parameterized_circuits")() | set parameterized circuits to None                                          |
| [`VQC.construct_circuit`](qiskit.aqua.algorithms.VQC.construct_circuit "qiskit.aqua.algorithms.VQC.construct_circuit")(x, theta\[, measurement])                | Construct circuit based on data and parameters in variational form.         |
| [`VQC.find_minimum`](qiskit.aqua.algorithms.VQC.find_minimum "qiskit.aqua.algorithms.VQC.find_minimum")(\[initial\_point, var\_form, …])                        | Optimize to find the minimum cost value.                                    |
| [`VQC.get_optimal_circuit`](qiskit.aqua.algorithms.VQC.get_optimal_circuit "qiskit.aqua.algorithms.VQC.get_optimal_circuit")()                                  | get optimal circuit                                                         |
| [`VQC.get_optimal_cost`](qiskit.aqua.algorithms.VQC.get_optimal_cost "qiskit.aqua.algorithms.VQC.get_optimal_cost")()                                           | get optimal cost                                                            |
| [`VQC.get_optimal_vector`](qiskit.aqua.algorithms.VQC.get_optimal_vector "qiskit.aqua.algorithms.VQC.get_optimal_vector")()                                     | get optimal vector                                                          |
| [`VQC.get_prob_vector_for_params`](qiskit.aqua.algorithms.VQC.get_prob_vector_for_params "qiskit.aqua.algorithms.VQC.get_prob_vector_for_params")(…\[, …])      | Helper function to get probability vectors for a set of params              |
| [`VQC.get_probabilities_for_counts`](qiskit.aqua.algorithms.VQC.get_probabilities_for_counts "qiskit.aqua.algorithms.VQC.get_probabilities_for_counts")(counts) | get probabilities for counts                                                |
| [`VQC.is_gradient_really_supported`](qiskit.aqua.algorithms.VQC.is_gradient_really_supported "qiskit.aqua.algorithms.VQC.is_gradient_really_supported")()       | returns is gradient really supported                                        |
| [`VQC.load_model`](qiskit.aqua.algorithms.VQC.load_model "qiskit.aqua.algorithms.VQC.load_model")(file\_path)                                                   | load model                                                                  |
| [`VQC.predict`](qiskit.aqua.algorithms.VQC.predict "qiskit.aqua.algorithms.VQC.predict")(data\[, quantum\_instance, …])                                         | Predict the labels for the data.                                            |
| [`VQC.run`](qiskit.aqua.algorithms.VQC.run "qiskit.aqua.algorithms.VQC.run")(\[quantum\_instance])                                                              | Execute the algorithm with selected backend.                                |
| [`VQC.save_model`](qiskit.aqua.algorithms.VQC.save_model "qiskit.aqua.algorithms.VQC.save_model")(file\_path)                                                   | save model                                                                  |
| [`VQC.set_backend`](qiskit.aqua.algorithms.VQC.set_backend "qiskit.aqua.algorithms.VQC.set_backend")(backend, \*\*kwargs)                                       | Sets backend with configuration.                                            |
| [`VQC.test`](qiskit.aqua.algorithms.VQC.test "qiskit.aqua.algorithms.VQC.test")(data, labels\[, quantum\_instance, …])                                          | Predict the labels for the data, and test against with ground truth labels. |
| [`VQC.train`](qiskit.aqua.algorithms.VQC.train "qiskit.aqua.algorithms.VQC.train")(data, labels\[, quantum\_instance, …])                                       | Train the models, and save results.                                         |

