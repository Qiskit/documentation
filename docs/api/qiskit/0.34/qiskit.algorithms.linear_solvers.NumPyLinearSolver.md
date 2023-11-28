# NumPyLinearSolver

<span id="undefined" />

`NumPyLinearSolver`

Bases: `qiskit.algorithms.linear_solvers.linear_solver.LinearSolver`

The Numpy Linear Solver algorithm (classical).

This linear system solver computes the exact value of the given observable(s) or the full solution vector if no observable is specified.

## Examples

```python
import numpy as np
from qiskit.algorithms import NumPyLinearSolver
from qiskit.algorithms.linear_solvers.matrices import TridiagonalToeplitz
from qiskit.algorithms.linear_solvers.observables import MatrixFunctional

matrix = TridiagonalToeplitz(2, 1, 1 / 3, trotter_steps=2)
right_hand_side = [1.0, -2.1, 3.2, -4.3]
observable = MatrixFunctional(1, 1 / 2)
rhs = right_hand_side / np.linalg.norm(right_hand_side)

np_solver = NumPyLinearSolver()
solution = np_solver.solve(matrix, rhs, observable)
result = solution.observable
```

## Methods

|                                                                                                                                                                                         |                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [`solve`](qiskit.algorithms.linear_solvers.NumPyLinearSolver.solve#qiskit.algorithms.linear_solvers.NumPyLinearSolver.solve "qiskit.algorithms.linear_solvers.NumPyLinearSolver.solve") | Solve classically the linear system and compute the observable(s) |
