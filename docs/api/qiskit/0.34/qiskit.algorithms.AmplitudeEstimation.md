# AmplitudeEstimation[¶](#amplitudeestimation "Permalink to this headline")

<span id="undefined" />

`AmplitudeEstimation(num_eval_qubits, phase_estimation_circuit=None, iqft=None, quantum_instance=None)`

Bases: `qiskit.algorithms.amplitude_estimators.amplitude_estimator.AmplitudeEstimator`

The Quantum Phase Estimation-based Amplitude Estimation algorithm.

This class implements the original Quantum Amplitude Estimation (QAE) algorithm, introduced by \[1]. This canonical version uses quantum phase estimation along with a set of $m$ additional evaluation qubits to find an estimate $\tilde{a}$, that is restricted to the grid

$$
\tilde{a} \in \{\sin^2(\pi  y / 2^m) : y = 0, ..., 2^{m-1}\}
$$

More evaluation qubits produce a finer sampling grid, therefore the accuracy of the algorithm increases with $m$.

Using a maximum likelihood post processing, this grid constraint can be circumvented. This improved estimator is implemented as well, see \[2] Appendix A for more detail.

## References

**\[1]: Brassard, G., Hoyer, P., Mosca, M., & Tapp, A. (2000).**

Quantum Amplitude Amplification and Estimation. [arXiv:quant-ph/0005055](http://arxiv.org/abs/quant-ph/0005055).

**\[2]: Grinko, D., Gacon, J., Zoufal, C., & Woerner, S. (2019).**

Iterative Quantum Amplitude Estimation. [arXiv:1912.05559](https://arxiv.org/abs/1912.05559).

**Parameters**

*   **num\_eval\_qubits** (`int`) – The number of evaluation qubits.
*   **phase\_estimation\_circuit** (`Optional`\[`QuantumCircuit`]) – The phase estimation circuit used to run the algorithm. Defaults to the standard phase estimation circuit from the circuit library, qiskit.circuit.library.PhaseEstimation when None.
*   **iqft** (`Optional`\[`QuantumCircuit`]) – The inverse quantum Fourier transform component, defaults to using a standard implementation from qiskit.circuit.library.QFT when None.
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – The backend (or QuantumInstance) to execute the circuits on.

**Raises**

**ValueError** – If the number of evaluation qubits is smaller than 1.

## Methods

|                                                                                                                                                                                                                                          |                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`compute_confidence_interval`](qiskit.algorithms.AmplitudeEstimation.compute_confidence_interval#qiskit.algorithms.AmplitudeEstimation.compute_confidence_interval "qiskit.algorithms.AmplitudeEstimation.compute_confidence_interval") | Compute the (1 - alpha) confidence interval.                           |
| [`compute_mle`](qiskit.algorithms.AmplitudeEstimation.compute_mle#qiskit.algorithms.AmplitudeEstimation.compute_mle "qiskit.algorithms.AmplitudeEstimation.compute_mle")                                                                 | Compute the Maximum Likelihood Estimator (MLE).                        |
| [`construct_circuit`](qiskit.algorithms.AmplitudeEstimation.construct_circuit#qiskit.algorithms.AmplitudeEstimation.construct_circuit "qiskit.algorithms.AmplitudeEstimation.construct_circuit")                                         | Construct the Amplitude Estimation quantum circuit.                    |
| [`estimate`](qiskit.algorithms.AmplitudeEstimation.estimate#qiskit.algorithms.AmplitudeEstimation.estimate "qiskit.algorithms.AmplitudeEstimation.estimate")                                                                             | Run the amplitude estimation algorithm on provided estimation problem. |
| [`evaluate_measurements`](qiskit.algorithms.AmplitudeEstimation.evaluate_measurements#qiskit.algorithms.AmplitudeEstimation.evaluate_measurements "qiskit.algorithms.AmplitudeEstimation.evaluate_measurements")                         | Evaluate the results from the circuit simulation.                      |

## Attributes

<span id="undefined" />

### quantum\_instance

Get the quantum instance.

**Return type**

`Optional`\[`QuantumInstance`]

**Returns**

The quantum instance used to run this algorithm.
