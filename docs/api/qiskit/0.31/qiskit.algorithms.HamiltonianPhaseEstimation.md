# HamiltonianPhaseEstimation[¶](#hamiltonianphaseestimation "Permalink to this headline")

<span id="undefined" />

`HamiltonianPhaseEstimation(num_evaluation_qubits, quantum_instance=None)`

Bases: `object`

Run the Quantum Phase Estimation algorithm to find the eigenvalues of a Hermitian operator.

This class is nearly the same as [`PhaseEstimation`](qiskit.algorithms.PhaseEstimation#qiskit.algorithms.PhaseEstimation "qiskit.algorithms.PhaseEstimation"), differing only in that the input in that class is a unitary operator, whereas here the input is a Hermitian operator from which a unitary will be obtained by scaling and exponentiating. The scaling is performed in order to prevent the phases from wrapping around $2\pi$. The problem of estimating eigenvalues $\lambda_j$ of the Hermitian operator $H$ is solved by running a circuit representing

$$
\exp(i b H) |\psi\rangle = \sum_j \exp(i b \lambda_j) c_j |\lambda_j\rangle,
$$

where the input state is

$$
|\psi\rangle = \sum_j c_j |\lambda_j\rangle,
$$

and $\lambda_j$ are the eigenvalues of $H$.

Here, $b$ is a scaling factor sufficiently large to map positive $\lambda$ to $[0,\pi)$ and negative $\lambda$ to $[\pi,2\pi)$. Each time the circuit is run, one measures a phase corresponding to $lambda_j$ with probability $|c_j|^2$.

If $H$ is a Pauli sum, the bound $b$ is computed from the sum of the absolute values of the coefficients of the terms. There is no way to reliably recover eigenvalues from phases very near the endpoints of these intervals. Because of this you should be aware that for degenerate cases, such as $H=Z$, the eigenvalues $\pm 1$ will be mapped to the same phase, $\pi$, and so cannot be distinguished. In this case, you need to specify a larger bound as an argument to the method `estimate`.

This class uses and works together with [`PhaseEstimationScale`](qiskit.algorithms.PhaseEstimationScale#qiskit.algorithms.PhaseEstimationScale "qiskit.algorithms.PhaseEstimationScale") to manage scaling the Hamiltonian and the phases that are obtained by the QPE algorithm. This includes setting, or computing, a bound on the eigenvalues of the operator, using this bound to obtain a scale factor, scaling the operator, and shifting and scaling the measured phases to recover the eigenvalues.

Note that, although we speak of “evolving” the state according the the Hamiltonian, in the present algorithm, we are not actually considering time evolution. Rather, the role of time is played by the scaling factor, which is chosen to best extract the eigenvalues of the Hamiltonian.

A few of the ideas in the algorithm may be found in Ref. \[1].

**Reference:**

**\[1]: Quantum phase estimation of multiple eigenvalues for small-scale (noisy) experiments**

T.E. O’Brien, B. Tarasinski, B.M. Terhal [arXiv:1809.09697](https://arxiv.org/abs/1809.09697)

**Parameters**

*   **num\_evaluation\_qubits** (`int`) – The number of qubits used in estimating the phase. The phase will be estimated as a binary string with this many bits.
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `BaseBackend`, `None`]) – The quantum instance on which the circuit will be run.

## Methods

|                                                                                                                                                                                   |                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [`estimate`](qiskit.algorithms.HamiltonianPhaseEstimation.estimate#qiskit.algorithms.HamiltonianPhaseEstimation.estimate "qiskit.algorithms.HamiltonianPhaseEstimation.estimate") | Run the Hamiltonian phase estimation algorithm. |
