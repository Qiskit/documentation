# MaximumLikelihoodAmplitudeEstimation

<span id="undefined" />

`MaximumLikelihoodAmplitudeEstimation(evaluation_schedule, minimizer=None, quantum_instance=None)`

Bases: `qiskit.algorithms.amplitude_estimators.amplitude_estimator.AmplitudeEstimator`

The Maximum Likelihood Amplitude Estimation algorithm.

This class implements the quantum amplitude estimation (QAE) algorithm without phase estimation, as introduced in \[1]. In comparison to the original QAE algorithm \[2], this implementation relies solely on different powers of the Grover operator and does not require additional evaluation qubits. Finally, the estimate is determined via a maximum likelihood estimation, which is why this class in named `MaximumLikelihoodAmplitudeEstimation`.

## References

**\[1]: Suzuki, Y., Uno, S., Raymond, R., Tanaka, T., Onodera, T., & Yamamoto, N. (2019).**

Amplitude Estimation without Phase Estimation. [arXiv:1904.10246](https://arxiv.org/abs/1904.10246).

**\[2]: Brassard, G., Hoyer, P., Mosca, M., & Tapp, A. (2000).**

Quantum Amplitude Amplification and Estimation. [arXiv:quant-ph/0005055](http://arxiv.org/abs/quant-ph/0005055).

**Parameters**

*   **evaluation\_schedule** (`Union`\[`List`\[`int`], `int`]) – If a list, the powers applied to the Grover operator. The list element must be non-negative. If a non-negative integer, an exponential schedule is used where the highest power is 2 to the integer minus 1: \[id, Q^2^0, …, Q^2^(evaluation\_schedule-1)].
*   **minimizer** (`Optional`\[`Callable`\[\[`Callable`\[\[`float`], `float`], `List`\[`Tuple`\[`float`, `float`]]], `float`]]) – A minimizer used to find the minimum of the likelihood function. Defaults to a brute search where the number of evaluation points is determined according to `evaluation_schedule`. The minimizer takes a function as first argument and a list of (float, float) tuples (as bounds) as second argument and returns a single float which is the found minimum.
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `BaseBackend`, `Backend`, `None`]) – Quantum Instance or Backend

**Raises**

**ValueError** – If the number of oracle circuits is smaller than 1.

## Methods

|                                                                                                                                                                                                                                                                                             |                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [`compute_confidence_interval`](qiskit.algorithms.MaximumLikelihoodAmplitudeEstimation.compute_confidence_interval#qiskit.algorithms.MaximumLikelihoodAmplitudeEstimation.compute_confidence_interval "qiskit.algorithms.MaximumLikelihoodAmplitudeEstimation.compute_confidence_interval") | Compute the alpha confidence interval using the method kind. |
| [`compute_mle`](qiskit.algorithms.MaximumLikelihoodAmplitudeEstimation.compute_mle#qiskit.algorithms.MaximumLikelihoodAmplitudeEstimation.compute_mle "qiskit.algorithms.MaximumLikelihoodAmplitudeEstimation.compute_mle")                                                                 | Compute the MLE via a grid-search.                           |
| [`construct_circuits`](qiskit.algorithms.MaximumLikelihoodAmplitudeEstimation.construct_circuits#qiskit.algorithms.MaximumLikelihoodAmplitudeEstimation.construct_circuits "qiskit.algorithms.MaximumLikelihoodAmplitudeEstimation.construct_circuits")                                     | Construct the Amplitude Estimation w/o QPE quantum circuits. |
| [`estimate`](qiskit.algorithms.MaximumLikelihoodAmplitudeEstimation.estimate#qiskit.algorithms.MaximumLikelihoodAmplitudeEstimation.estimate "qiskit.algorithms.MaximumLikelihoodAmplitudeEstimation.estimate")                                                                             | Run the amplitude estimation algorithm.                      |

## Attributes

<span id="undefined" />

### quantum\_instance

Get the quantum instance.

**Return type**

`Optional`\[`QuantumInstance`]

**Returns**

The quantum instance used to run this algorithm.
