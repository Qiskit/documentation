---
title: IterativeAmplitudeEstimation
description: API reference for qiskit.aqua.algorithms.IterativeAmplitudeEstimation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.IterativeAmplitudeEstimation
---

# IterativeAmplitudeEstimation

<span id="qiskit.aqua.algorithms.IterativeAmplitudeEstimation" />

`IterativeAmplitudeEstimation(epsilon, alpha, confint_method='beta', min_ratio=2, a_factory=None, q_factory=None, i_objective=None, quantum_instance=None)`

The Iterative Amplitude Estimation algorithm.

This class implements the Iterative Quantum Amplitude Estimation (QAE) algorithm, proposed in [https://arxiv.org/abs/1912.05559](https://arxiv.org/abs/1912.05559). The output of the algorithm is an estimate that, with at least probability 1 - alpha, differs by epsilon to the target value, where both alpha and epsilon can be specified.

It differs from the original QAE algorithm proposed by Brassard ([https://arxiv.org/abs/quant-ph/0005055](https://arxiv.org/abs/quant-ph/0005055)) in that it does not rely on Quantum Phase Estimation, but is only based on Grover’s algorithm. Iterative IQAE iteratively applies carefully selected Grover iterations to find an estimate for the target amplitude.

The output of the algorithm is an estimate for the amplitude a, that with at least probability 1 - alpha has an error of epsilon. The number of A operator calls scales linearly in 1/epsilon (up to a logarithmic factor).

**Parameters**

*   **epsilon** (`float`) – Target precision for estimation target a, has values between 0 and 0.5
*   **alpha** (`float`) – Confidence level, the target probability is 1 - alpha, has values between 0 and 1
*   **confint\_method** (`str`) – Statistical method used to estimate the confidence intervals in each iteration, can be ‘chernoff’ for the Chernoff intervals or ‘beta’ for the Clopper-Pearson intervals (default)
*   **min\_ratio** (`float`) – Minimal q-ratio (K\_\{i+1} / K\_i) for FindNextK
*   **a\_factory** (`Optional`\[[`CircuitFactory`](qiskit.aqua.utils.CircuitFactory "qiskit.aqua.utils.circuit_factory.CircuitFactory")]) – The A operator, specifying the QAE problem
*   **q\_factory** (`Optional`\[[`CircuitFactory`](qiskit.aqua.utils.CircuitFactory "qiskit.aqua.utils.circuit_factory.CircuitFactory")]) – The Q operator (Grover operator), constructed from the A operator
*   **i\_objective** (`Optional`\[`int`]) – Index of the objective qubit, that marks the ‘good/bad’ states
*   **quantum\_instance** (`Union`\[[`QuantumInstance`](qiskit.aqua.QuantumInstance "qiskit.aqua.quantum_instance.QuantumInstance"), [`BaseBackend`](qiskit.providers.BaseBackend "qiskit.providers.basebackend.BaseBackend"), `None`]) – Quantum Instance or Backend

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – if the method to compute the confidence intervals is not supported

## Attributes

|                                                                                                                                                                                                |                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`IterativeAmplitudeEstimation.a_factory`](qiskit.aqua.algorithms.IterativeAmplitudeEstimation.a_factory "qiskit.aqua.algorithms.IterativeAmplitudeEstimation.a_factory")                      | Get the A operator encoding the amplitude a that’s approximated, i.e.               |
| [`IterativeAmplitudeEstimation.backend`](qiskit.aqua.algorithms.IterativeAmplitudeEstimation.backend "qiskit.aqua.algorithms.IterativeAmplitudeEstimation.backend")                            | Returns backend.                                                                    |
| [`IterativeAmplitudeEstimation.i_objective`](qiskit.aqua.algorithms.IterativeAmplitudeEstimation.i_objective "qiskit.aqua.algorithms.IterativeAmplitudeEstimation.i_objective")                | Get the index of the objective qubit.                                               |
| [`IterativeAmplitudeEstimation.precision`](qiskit.aqua.algorithms.IterativeAmplitudeEstimation.precision "qiskit.aqua.algorithms.IterativeAmplitudeEstimation.precision")                      | Returns the target precision epsilon of the algorithm.                              |
| [`IterativeAmplitudeEstimation.q_factory`](qiskit.aqua.algorithms.IterativeAmplitudeEstimation.q_factory "qiskit.aqua.algorithms.IterativeAmplitudeEstimation.q_factory")                      | Get the Q operator, or Grover-operator for the Amplitude Estimation algorithm, i.e. |
| [`IterativeAmplitudeEstimation.quantum_instance`](qiskit.aqua.algorithms.IterativeAmplitudeEstimation.quantum_instance "qiskit.aqua.algorithms.IterativeAmplitudeEstimation.quantum_instance") | Returns quantum instance.                                                           |
| [`IterativeAmplitudeEstimation.random`](qiskit.aqua.algorithms.IterativeAmplitudeEstimation.random "qiskit.aqua.algorithms.IterativeAmplitudeEstimation.random")                               | Return a numpy random.                                                              |

## Methods

|                                                                                                                                                                                                      |                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [`IterativeAmplitudeEstimation.construct_circuit`](qiskit.aqua.algorithms.IterativeAmplitudeEstimation.construct_circuit "qiskit.aqua.algorithms.IterativeAmplitudeEstimation.construct_circuit")(k) | Construct the circuit Q^k A \|0>.            |
| [`IterativeAmplitudeEstimation.run`](qiskit.aqua.algorithms.IterativeAmplitudeEstimation.run "qiskit.aqua.algorithms.IterativeAmplitudeEstimation.run")(\[…])                                        | Execute the algorithm with selected backend. |
| [`IterativeAmplitudeEstimation.set_backend`](qiskit.aqua.algorithms.IterativeAmplitudeEstimation.set_backend "qiskit.aqua.algorithms.IterativeAmplitudeEstimation.set_backend")(…)                   | Sets backend with configuration.             |

