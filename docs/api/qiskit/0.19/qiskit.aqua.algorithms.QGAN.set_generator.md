---
title: set_generator
description: API reference for qiskit.aqua.algorithms.QGAN.set_generator
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.algorithms.QGAN.set_generator
---

# set\_generator

<span id="qiskit.aqua.algorithms.QGAN.set_generator" />

`QGAN.set_generator(generator_circuit=None, generator_init_params=None, generator_optimizer=None)`

Initialize generator.

**Parameters**

*   **generator\_circuit** (`Union`\[[`UnivariateVariationalDistribution`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution "qiskit.aqua.components.uncertainty_models.univariate_variational_distribution.UnivariateVariationalDistribution"), [`MultivariateVariationalDistribution`](qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution "qiskit.aqua.components.uncertainty_models.multivariate_variational_distribution.MultivariateVariationalDistribution"), [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), `None`]) – parameterized quantum circuit which sets the structure of the quantum generator
*   **generator\_init\_params** (`Optional`\[`ndarray`]) – initial parameters for the generator circuit
*   **generator\_optimizer** (`Optional`\[[`Optimizer`](qiskit.aqua.components.optimizers.Optimizer "qiskit.aqua.components.optimizers.optimizer.Optimizer")]) – optimizer to be used for the training of the generator

