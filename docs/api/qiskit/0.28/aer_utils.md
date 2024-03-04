---
title: utils
description: API reference for qiskit.providers.aer.utils
in_page_toc_min_heading_level: 2
python_api_type: module
python_api_name: qiskit.providers.aer.utils
---

<span id="module-qiskit.providers.aer.utils" />

<span id="aer-utils" />

# Utilities

<span id="module-qiskit.providers.aer.utils" />

`qiskit.providers.aer.utils`

This module contains utility functions for modifying [`NoiseModel`](qiskit.providers.aer.noise.NoiseModel "qiskit.providers.aer.noise.NoiseModel") objects and `QuantumCircuits` using noise models.

## Classes

|                                                                                                                   |                                                                          |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`NoiseTransformer`](qiskit.providers.aer.utils.NoiseTransformer "qiskit.providers.aer.utils.NoiseTransformer")() | Transforms one quantum channel to another based on a specified criteria. |

## Functions

|                                                                                                                                                             |                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [`remap_noise_model`](qiskit.providers.aer.utils.remap_noise_model "qiskit.providers.aer.utils.remap_noise_model")(noise\_model, remapping\[, …])           | Remap qubits in a noise model.                                          |
| [`insert_noise`](qiskit.providers.aer.utils.insert_noise "qiskit.providers.aer.utils.insert_noise")(circuits, noise\_model\[, transpile])                   | Return a noisy version of a QuantumCircuit.                             |
| [`approximate_quantum_error`](qiskit.providers.aer.utils.approximate_quantum_error "qiskit.providers.aer.utils.approximate_quantum_error")(error, \*\[, …]) | Return an approximate QuantumError bases on the Hilbert-Schmidt metric. |
| [`approximate_noise_model`](qiskit.providers.aer.utils.approximate_noise_model "qiskit.providers.aer.utils.approximate_noise_model")(model, \*\[, …])       | Return an approximate noise model.                                      |

