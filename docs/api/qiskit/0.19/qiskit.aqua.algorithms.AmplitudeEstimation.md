---
title: AmplitudeEstimation
description: API reference for qiskit.aqua.algorithms.AmplitudeEstimation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.AmplitudeEstimation
---

# AmplitudeEstimation

<span id="qiskit.aqua.algorithms.AmplitudeEstimation" />

`AmplitudeEstimation(num_eval_qubits, a_factory=None, q_factory=None, i_objective=None, iqft=None, quantum_instance=None)`

The Quantum Phase Estimation-based Amplitude Estimation algorithm.

This class implements the original Quantum Amplitude Estimation (QAE) algorithm, introduced by [https://arxiv.org/abs/quant-ph/0005055](https://arxiv.org/abs/quant-ph/0005055). This (original) version uses quantum phase estimation along with a set of m ancilla qubits to find an estimate, that is restricted to the grid

> \{sin^2(pi y / 2^m) : y = 0, …, 2^\{m-1}}.

Using a maximum likelihood post processing, this grid constraint can be circumvented. This improved estimator is implemented as well, see [https://arxiv.org/abs/1912.05559](https://arxiv.org/abs/1912.05559) Appendix A for more detail.

**Parameters**

*   **num\_eval\_qubits** (`int`) – Number of evaluation qubits, has a min. value of 1.
*   **a\_factory** (`Optional`\[[`CircuitFactory`](qiskit.aqua.utils.CircuitFactory "qiskit.aqua.utils.circuit_factory.CircuitFactory")]) – The CircuitFactory subclass object representing the problem unitary.
*   **q\_factory** (`Optional`\[[`CircuitFactory`](qiskit.aqua.utils.CircuitFactory "qiskit.aqua.utils.circuit_factory.CircuitFactory")]) – The CircuitFactory subclass object representing an amplitude estimation sample (based on a\_factory).
*   **i\_objective** (`Optional`\[`int`]) – The index of the objective qubit, i.e. the qubit marking ‘good’ solutions with the state |1> and ‘bad’ solutions with the state |0>.
*   **iqft** (`Union`\[[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), [`IQFT`](qiskit.aqua.components.iqfts.IQFT "qiskit.aqua.components.iqfts.iqft.IQFT"), `None`]) – The Inverse Quantum Fourier Transform component, defaults to using a standard IQFT when None
*   **quantum\_instance** (`Union`\[[`QuantumInstance`](qiskit.aqua.QuantumInstance "qiskit.aqua.quantum_instance.QuantumInstance"), [`BaseBackend`](qiskit.providers.BaseBackend "qiskit.providers.basebackend.BaseBackend"), `None`]) – Quantum Instance or Backend

## Attributes

|                                                                                                                                                                     |                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`AmplitudeEstimation.a_factory`](qiskit.aqua.algorithms.AmplitudeEstimation.a_factory "qiskit.aqua.algorithms.AmplitudeEstimation.a_factory")                      | Get the A operator encoding the amplitude a that’s approximated, i.e.               |
| [`AmplitudeEstimation.backend`](qiskit.aqua.algorithms.AmplitudeEstimation.backend "qiskit.aqua.algorithms.AmplitudeEstimation.backend")                            | Returns backend.                                                                    |
| [`AmplitudeEstimation.i_objective`](qiskit.aqua.algorithms.AmplitudeEstimation.i_objective "qiskit.aqua.algorithms.AmplitudeEstimation.i_objective")                | Get the index of the objective qubit.                                               |
| [`AmplitudeEstimation.q_factory`](qiskit.aqua.algorithms.AmplitudeEstimation.q_factory "qiskit.aqua.algorithms.AmplitudeEstimation.q_factory")                      | Get the Q operator, or Grover-operator for the Amplitude Estimation algorithm, i.e. |
| [`AmplitudeEstimation.quantum_instance`](qiskit.aqua.algorithms.AmplitudeEstimation.quantum_instance "qiskit.aqua.algorithms.AmplitudeEstimation.quantum_instance") | Returns quantum instance.                                                           |
| [`AmplitudeEstimation.random`](qiskit.aqua.algorithms.AmplitudeEstimation.random "qiskit.aqua.algorithms.AmplitudeEstimation.random")                               | Return a numpy random.                                                              |

## Methods

|                                                                                                                                                                                     |                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| [`AmplitudeEstimation.confidence_interval`](qiskit.aqua.algorithms.AmplitudeEstimation.confidence_interval "qiskit.aqua.algorithms.AmplitudeEstimation.confidence_interval")(alpha) | Compute the (1 - alpha) confidence interval.        |
| [`AmplitudeEstimation.construct_circuit`](qiskit.aqua.algorithms.AmplitudeEstimation.construct_circuit "qiskit.aqua.algorithms.AmplitudeEstimation.construct_circuit")(\[…])        | Construct the Amplitude Estimation quantum circuit. |
| [`AmplitudeEstimation.run`](qiskit.aqua.algorithms.AmplitudeEstimation.run "qiskit.aqua.algorithms.AmplitudeEstimation.run")(\[quantum\_instance])                                  | Execute the algorithm with selected backend.        |
| [`AmplitudeEstimation.set_backend`](qiskit.aqua.algorithms.AmplitudeEstimation.set_backend "qiskit.aqua.algorithms.AmplitudeEstimation.set_backend")(backend, …)                    | Sets backend with configuration.                    |

