---
title: MaximumLikelihoodAmplitudeEstimation
description: API reference for qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation
---

# MaximumLikelihoodAmplitudeEstimation

<span id="qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation" />

`MaximumLikelihoodAmplitudeEstimation(num_oracle_circuits, a_factory=None, q_factory=None, i_objective=None, likelihood_evals=None, quantum_instance=None)`

The Maximum Likelihood Amplitude Estimation algorithm.

This class implements the an quantum amplitude estimation (QAE) algorithm without phase estimation, according to [https://arxiv.org/abs/1904.10246](https://arxiv.org/abs/1904.10246). In comparison to the original QAE algorithm ([https://arxiv.org/abs/quant-ph/0005055](https://arxiv.org/abs/quant-ph/0005055)), this implementation relies solely on different powers of the Grover algorithm and does not require ancilla qubits. Finally, the estimate is determined via a maximum likelihood estimation, which is why this class in named MaximumLikelihoodAmplitudeEstimation.

**Parameters**

*   **num\_oracle\_circuits** (`int`) – The number of circuits applying different powers of the Grover oracle Q. The (num\_oracle\_circuits + 1) executed circuits will be \[id, Q^2^0, …, Q^2^\{num\_oracle\_circuits-1}] A |0>, where A is the problem unitary encoded in the argument a\_factory. Has a minimum value of 1.
*   **a\_factory** (`Optional`\[[`CircuitFactory`](qiskit.aqua.utils.CircuitFactory "qiskit.aqua.utils.circuit_factory.CircuitFactory")]) – The CircuitFactory subclass object representing the problem unitary.
*   **q\_factory** (`Optional`\[[`CircuitFactory`](qiskit.aqua.utils.CircuitFactory "qiskit.aqua.utils.circuit_factory.CircuitFactory")]) – The CircuitFactory subclass object representing. an amplitude estimation sample (based on a\_factory)
*   **i\_objective** (`Optional`\[`int`]) – The index of the objective qubit, i.e. the qubit marking ‘good’ solutions with the state |1> and ‘bad’ solutions with the state |0>
*   **likelihood\_evals** (`Optional`\[`int`]) – The number of gridpoints for the maximum search of the likelihood function
*   **quantum\_instance** (`Union`\[[`QuantumInstance`](qiskit.aqua.QuantumInstance "qiskit.aqua.quantum_instance.QuantumInstance"), [`BaseBackend`](qiskit.providers.BaseBackend "qiskit.providers.basebackend.BaseBackend"), `None`]) – Quantum Instance or Backend

## Attributes

|                                                                                                                                                                                                                        |                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`MaximumLikelihoodAmplitudeEstimation.a_factory`](qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.a_factory "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.a_factory")                      | Get the A operator encoding the amplitude a that’s approximated, i.e.               |
| [`MaximumLikelihoodAmplitudeEstimation.backend`](qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.backend "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.backend")                            | Returns backend.                                                                    |
| [`MaximumLikelihoodAmplitudeEstimation.i_objective`](qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.i_objective "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.i_objective")                | Get the index of the objective qubit.                                               |
| [`MaximumLikelihoodAmplitudeEstimation.q_factory`](qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.q_factory "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.q_factory")                      | Get the Q operator, or Grover-operator for the Amplitude Estimation algorithm, i.e. |
| [`MaximumLikelihoodAmplitudeEstimation.quantum_instance`](qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.quantum_instance "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.quantum_instance") | Returns quantum instance.                                                           |
| [`MaximumLikelihoodAmplitudeEstimation.random`](qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.random "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.random")                               | Return a numpy random.                                                              |

## Methods

|                                                                                                                                                                                                                                        |                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [`MaximumLikelihoodAmplitudeEstimation.confidence_interval`](qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.confidence_interval "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.confidence_interval")(alpha) | Compute the alpha confidence interval using the method kind. |
| [`MaximumLikelihoodAmplitudeEstimation.construct_circuits`](qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.construct_circuits "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.construct_circuits")(\[…])     | Construct the Amplitude Estimation w/o QPE quantum circuits. |
| [`MaximumLikelihoodAmplitudeEstimation.run`](qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.run "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.run")(\[…])                                                  | Execute the algorithm with selected backend.                 |
| [`MaximumLikelihoodAmplitudeEstimation.set_backend`](qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.set_backend "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.set_backend")(…)                             | Sets backend with configuration.                             |

