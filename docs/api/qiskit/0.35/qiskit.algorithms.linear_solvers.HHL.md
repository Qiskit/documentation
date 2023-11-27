# HHL[¶](#hhl "Permalink to this headline")

<span id="undefined" />

`HHL(epsilon=0.01, expectation=None, quantum_instance=None)`

Bases: `qiskit.algorithms.linear_solvers.linear_solver.LinearSolver`

Systems of linear equations arise naturally in many real-life applications in a wide range of areas, such as in the solution of Partial Differential Equations, the calibration of financial models, fluid simulation or numerical field calculation. The problem can be defined as, given a matrix $A\in\mathbb{C}^{N\times N}$ and a vector $\vec{b}\in\mathbb{C}^{N}$, find $\vec{x}\in\mathbb{C}^{N}$ satisfying $A\vec{x}=\vec{b}$.

A system of linear equations is called $s$-sparse if $A$ has at most $s$ non-zero entries per row or column. Solving an $s$-sparse system of size $N$ with a classical computer requires $\mathcal{ O }(Ns\kappa\log(1/\epsilon))$ running time using the conjugate gradient method. Here $\kappa$ denotes the condition number of the system and $\epsilon$ the accuracy of the approximation.

The HHL is a quantum algorithm to estimate a function of the solution with running time complexity of $\mathcal{ O }(\log(N)s^{2}\kappa^{2}/\epsilon)$ when $A$ is a Hermitian matrix under the assumptions of efficient oracles for loading the data, Hamiltonian simulation and computing a function of the solution. This is an exponential speed up in the size of the system, however one crucial remark to keep in mind is that the classical algorithm returns the full solution, while the HHL can only approximate functions of the solution vector.

## Examples

```python
import numpy as np
from qiskit import QuantumCircuit
from qiskit.algorithms.linear_solvers.hhl import HHL
from qiskit.algorithms.linear_solvers.matrices import TridiagonalToeplitz
from qiskit.algorithms.linear_solvers.observables import MatrixFunctional

matrix = TridiagonalToeplitz(2, 1, 1 / 3, trotter_steps=2)
right_hand_side = [1.0, -2.1, 3.2, -4.3]
observable = MatrixFunctional(1, 1 / 2)
rhs = right_hand_side / np.linalg.norm(right_hand_side)

# Initial state circuit
num_qubits = matrix.num_state_qubits
qc = QuantumCircuit(num_qubits)
qc.isometry(rhs, list(range(num_qubits)), None)

hhl = HHL()
solution = hhl.solve(matrix, qc, observable)
approx_result = solution.observable
```

## References

\[1]: Harrow, A. W., Hassidim, A., Lloyd, S. (2009). Quantum algorithm for linear systems of equations. [Phys. Rev. Lett. 103, 15 (2009), 1–15.](https://doi.org/10.1103/PhysRevLett.103.150502)

\[2]: Carrera Vazquez, A., Hiptmair, R., & Woerner, S. (2020). Enhancing the Quantum Linear Systems Algorithm using Richardson Extrapolation. [arXiv:2009.04484](http://arxiv.org/abs/2009.04484)

**Parameters**

*   **epsilon** (`float`) – Error tolerance of the approximation to the solution, i.e. if $x$ is the exact solution and $\tilde{x}$ the one calculated by the algorithm, then $||x - \tilde{x}|| \le epsilon$.
*   **expectation** (`Optional`\[`ExpectationBase`]) – The expectation converter applied to the expectation values before evaluation. If None then PauliExpectation is used.
*   **quantum\_instance** (`Union`\[`Backend`, `BaseBackend`, `QuantumInstance`, `None`]) – Quantum Instance or Backend. If None, a Statevector calculation is done.

## Methods

|                                                                                                                                                                                               |                                                      |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| [`construct_circuit`](qiskit.algorithms.linear_solvers.HHL.construct_circuit#qiskit.algorithms.linear_solvers.HHL.construct_circuit "qiskit.algorithms.linear_solvers.HHL.construct_circuit") | Construct the HHL circuit.                           |
| [`solve`](qiskit.algorithms.linear_solvers.HHL.solve#qiskit.algorithms.linear_solvers.HHL.solve "qiskit.algorithms.linear_solvers.HHL.solve")                                                 | Tries to solve the given linear system of equations. |

## Attributes

<span id="undefined" />

### expectation

The expectation value algorithm used to construct the expectation measurement from the observable.

**Return type**

`ExpectationBase`

<span id="undefined" />

### quantum\_instance

Get the quantum instance.

**Return type**

`Optional`\[`QuantumInstance`]

**Returns**

The quantum instance used to run this algorithm.

<span id="undefined" />

### scaling

The scaling of the solution vector.

**Return type**

`float`
