# MaximumLikelihoodAmplitudeEstimation

<span id="undefined" />

`MaximumLikelihoodAmplitudeEstimation(num_oracle_circuits, state_preparation=None, grover_operator=None, objective_qubits=None, post_processing=None, a_factory=None, q_factory=None, i_objective=None, likelihood_evals=None, quantum_instance=None)`

Bases: `qiskit.aqua.algorithms.amplitude_estimators.ae_algorithm.AmplitudeEstimationAlgorithm`

The Maximum Likelihood Amplitude Estimation algorithm.

This class implements the quantum amplitude estimation (QAE) algorithm without phase estimation, as introduced in \[1]. In comparison to the original QAE algorithm \[2], this implementation relies solely on different powers of the Grover operator and does not require additional evaluation qubits. Finally, the estimate is determined via a maximum likelihood estimation, which is why this class in named `MaximumLikelihoodAmplitudeEstimation`.

## References

**\[1]: Suzuki, Y., Uno, S., Raymond, R., Tanaka, T., Onodera, T., & Yamamoto, N. (2019).**

Amplitude Estimation without Phase Estimation. [arXiv:1904.10246](https://arxiv.org/abs/1904.10246).

**\[2]: Brassard, G., Hoyer, P., Mosca, M., & Tapp, A. (2000).**

Quantum Amplitude Amplification and Estimation. [arXiv:quant-ph/0005055](http://arxiv.org/abs/quant-ph/0005055).

**Parameters**

*   **num\_oracle\_circuits** (`int`) – The number of circuits applying different powers of the Grover oracle Q. The (num\_oracle\_circuits + 1) executed circuits will be \[id, Q^2^0, …, Q^2^\{num\_oracle\_circuits-1}] A |0>, where A is the problem unitary encoded in the argument a\_factory. Has a minimum value of 1.
*   **state\_preparation** (`Union`\[`QuantumCircuit`, `CircuitFactory`, `None`]) – A circuit preparing the input state, referred to as $\mathcal{A}$.
*   **grover\_operator** (`Union`\[`QuantumCircuit`, `CircuitFactory`, `None`]) – The Grover operator $\mathcal{Q}$ used as unitary in the phase estimation circuit.
*   **objective\_qubits** (`Optional`\[`List`\[`int`]]) – A list of qubit indices. A measurement outcome is classified as ‘good’ state if all objective qubits are in state $|1\rangle$, otherwise it is classified as ‘bad’.
*   **post\_processing** (`Optional`\[`Callable`\[\[`float`], `float`]]) – A mapping applied to the estimate of $0 \leq a \leq 1$, usually used to map the estimate to a target interval.
*   **a\_factory** (`Optional`\[`CircuitFactory`]) – The CircuitFactory subclass object representing the problem unitary.
*   **q\_factory** (`Optional`\[`CircuitFactory`]) – The CircuitFactory subclass object representing. an amplitude estimation sample (based on a\_factory)
*   **i\_objective** (`Optional`\[`int`]) – The index of the objective qubit, i.e. the qubit marking ‘good’ solutions with the state |1> and ‘bad’ solutions with the state |0>
*   **likelihood\_evals** (`Optional`\[`int`]) – The number of gridpoints for the maximum search of the likelihood function
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

## Methods

|                                                                                                                                                                                                                                                                            |                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [`confidence_interval`](qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.confidence_interval#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.confidence_interval "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.confidence_interval") | Compute the alpha confidence interval using the method kind.              |
| [`construct_circuits`](qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.construct_circuits#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.construct_circuits "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.construct_circuits")     | Construct the Amplitude Estimation w/o QPE quantum circuits.              |
| [`is_good_state`](qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.is_good_state#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.is_good_state "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.is_good_state")                         | Determine whether a given state is a good state.                          |
| [`post_processing`](qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.post_processing#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.post_processing "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.post_processing")                 | Post processing of the raw amplitude estimation output $0 \leq a \leq 1$. |
| [`run`](qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.run#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.run "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.run")                                                                 | Execute the algorithm with selected backend.                              |
| [`set_backend`](qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.set_backend#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.set_backend "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.set_backend")                                 | Sets backend with configuration.                                          |

## Attributes

<span id="undefined" />

### a\_factory

Get the A operator encoding the amplitude a that’s approximated, i.e.

> A |0>\_n |0> = sqrt\{1 - a} |psi\_0>\_n |0> + sqrt\{a} |psi\_1>\_n |1>

see the original Brassard paper ([https://arxiv.org/abs/quant-ph/0005055](https://arxiv.org/abs/quant-ph/0005055)) for more detail.

**Returns**

the A operator as CircuitFactory

**Return type**

[CircuitFactory](qiskit.aqua.utils.CircuitFactory#qiskit.aqua.utils.CircuitFactory "qiskit.aqua.utils.CircuitFactory")

<span id="undefined" />

### backend

Returns backend.

**Return type**

`Union`\[`Backend`, `BaseBackend`]

<span id="undefined" />

### grover\_operator

Get the $\mathcal{Q}$ operator, or Grover operator.

If the Grover operator is not set, we try to build it from the $\mathcal{A}$ operator and objective\_qubits. This only works if objective\_qubits is a list of integers.

**Return type**

`Optional`\[`QuantumCircuit`]

**Returns**

The Grover operator, or None if neither the Grover operator nor the $\mathcal{A}$ operator is set.

<span id="undefined" />

### i\_objective

Get the index of the objective qubit. The objective qubit marks the |psi\_0> state (called ‘bad states’ in [https://arxiv.org/abs/quant-ph/0005055](https://arxiv.org/abs/quant-ph/0005055)) with |0> and |psi\_1> (‘good’ states) with |1>. If the A operator performs the mapping

> A |0>\_n |0> = sqrt\{1 - a} |psi\_0>\_n |0> + sqrt\{a} |psi\_1>\_n |1>

then, the objective qubit is the last one (which is either |0> or |1>).

If the objective qubit (i\_objective) is not set, we check if the Q operator (q\_factory) is set and return the index specified there. If the q\_factory is not defined, the index equals the number of qubits of the A operator (a\_factory) minus one. If also the a\_factory is not set, return None.

**Returns**

the index of the objective qubit

**Return type**

int

<span id="undefined" />

### objective\_qubits

Get the criterion for a measurement outcome to be in a ‘good’ state.

**Return type**

`Optional`\[`List`\[`int`]]

**Returns**

The criterion as list of qubit indices.

<span id="undefined" />

### q\_factory

Get the Q operator, or Grover-operator for the Amplitude Estimation algorithm, i.e.

$$
\mathcal{Q} = \mathcal{A} \mathcal{S}_0 \mathcal{A}^\dagger \mathcal{S}_f,
$$

where $\mathcal{S}_0$ reflects about the |0>\_n state and S\_psi0 reflects about $|\Psi_0\rangle_n$. See [https://arxiv.org/abs/quant-ph/0005055](https://arxiv.org/abs/quant-ph/0005055) for more detail.

If the Q operator is not set, we try to build it from the A operator. If neither the A operator is set, None is returned.

**Returns**

returns the current Q factory of the algorithm

**Return type**

QFactory

<span id="undefined" />

### quantum\_instance

Returns quantum instance.

**Return type**

`Optional`\[`QuantumInstance`]

<span id="undefined" />

### random

Return a numpy random.

<span id="undefined" />

### state\_preparation

Get the $\mathcal{A}$ operator encoding the amplitude $a$.

**Return type**

`QuantumCircuit`

**Returns**

The $\mathcal{A}$ operator as QuantumCircuit.
