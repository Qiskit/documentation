# IterativePhaseEstimation[¶](#iterativephaseestimation "Permalink to this headline")

<span id="undefined" />

`IterativePhaseEstimation(num_iterations, quantum_instance=None)`

Bases: `qiskit.algorithms.phase_estimators.phase_estimator.PhaseEstimator`

Run the Iterative quantum phase estimation (QPE) algorithm.

Given a unitary circuit and a circuit preparing an eigenstate, return the phase of the eigenvalue as a number in $[0,1)$ using the iterative phase estimation algorithm.

**\[1]: Dobsicek et al. (2006), Arbitrary accuracy iterative phase estimation algorithm as a two**

qubit benchmark, [arxiv/quant-ph/0610214](https://arxiv.org/abs/quant-ph/0610214)

**Parameters**

*   **num\_iterations** (`int`) – The number of iterations (rounds) of the phase estimation to run.
*   **quantum\_instance** (`Union`\[`Backend`, `BaseBackend`, `QuantumInstance`, `None`]) – The quantum instance on which the circuit will be run.

**Raises**

**ValueError** – if num\_iterations is not greater than zero.

## Methods

|                                                                                                                                                                                                                 |                                                                      |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`construct_circuit`](qiskit.algorithms.IterativePhaseEstimation.construct_circuit#qiskit.algorithms.IterativePhaseEstimation.construct_circuit "qiskit.algorithms.IterativePhaseEstimation.construct_circuit") | Construct the kth iteration Quantum Phase Estimation circuit.        |
| [`estimate`](qiskit.algorithms.IterativePhaseEstimation.estimate#qiskit.algorithms.IterativePhaseEstimation.estimate "qiskit.algorithms.IterativePhaseEstimation.estimate")                                     | Estimate the eigenphase of the input unitary and initial-state pair. |
