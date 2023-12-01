# FasterAmplitudeEstimation

<span id="undefined" />

`FasterAmplitudeEstimation(delta, maxiter, rescale=True, quantum_instance=None)`

Bases: `qiskit.algorithms.amplitude_estimators.amplitude_estimator.AmplitudeEstimator`

The Faster Amplitude Estimation algorithm.

The Faster Amplitude Estimation (FAE) \[1] algorithm is a variant of Quantum Amplitude Estimation (QAE), where the Quantum Phase Estimation (QPE) by an iterative Grover search, similar to \[2].

Due to the iterative version of the QPE, this algorithm does not require any additional qubits, as the originally proposed QAE \[3] and thus the resulting circuits are less complex.

## References

**\[1]: K. Nakaji. Faster Amplitude Estimation, 2020;**

[arXiv:2002.02417](https://arxiv.org/pdf/2003.02417.pdf)

**\[2]: D. Grinko et al. Iterative Amplitude Estimation, 2019;**

[arXiv:1912.05559](http://arxiv.org/abs/1912.05559)

**\[3]: G. Brassard et al. Quantum Amplitude Amplification and Estimation, 2000;**

[arXiv:quant-ph/0005055](http://arxiv.org/abs/quant-ph/0005055)

**Parameters**

*   **delta** (`float`) – The probability that the true value is outside of the final confidence interval.
*   **maxiter** (`int`) – The number of iterations, the maximal power of Q is 2 \*\* (maxiter - 1).
*   **rescale** (`bool`) – Whether to rescale the problem passed to estimate.
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `BaseBackend`, `Backend`, `None`]) – The quantum instance or backend to run the circuits.

<Admonition title="Note" type="note">
  This algorithm overwrites the number of shots set in the `quantum_instance` argument, but will reset them to the initial number after running.
</Admonition>

## Methods

|                                                                                                                                                                                                                    |                                         |              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------- | ------------ |
| [`construct_circuit`](qiskit.algorithms.FasterAmplitudeEstimation.construct_circuit#qiskit.algorithms.FasterAmplitudeEstimation.construct_circuit "qiskit.algorithms.FasterAmplitudeEstimation.construct_circuit") | Construct the circuit \$Q^k X           | 0\rangle>\$. |
| [`estimate`](qiskit.algorithms.FasterAmplitudeEstimation.estimate#qiskit.algorithms.FasterAmplitudeEstimation.estimate "qiskit.algorithms.FasterAmplitudeEstimation.estimate")                                     | Run the amplitude estimation algorithm. |              |

## Attributes

<span id="undefined" />

### quantum\_instance

Get the quantum instance.

**Return type**

`Optional`\[`QuantumInstance`]

**Returns**

The quantum instance used to run this algorithm.
