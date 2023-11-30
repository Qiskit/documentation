# MatrixFunctional

<span id="undefined" />

`MatrixFunctional(main_diag, off_diag)`

Bases: `qiskit.algorithms.linear_solvers.observables.linear_system_observable.LinearSystemObservable`

A class for the matrix functional of the vector solution to the linear systems.

## Examples

```python
import numpy as np
from qiskit import QuantumCircuit
from qiskit.algorithms.linear_solvers.observables.matrix_functional import             MatrixFunctional
from qiskit.transpiler.passes import RemoveResetInZeroState
from qiskit.opflow import StateFn

tpass = RemoveResetInZeroState()

vector = [1.0, -2.1, 3.2, -4.3]
observable = MatrixFunctional(1, -1 / 3)

init_state = vector / np.linalg.norm(vector)
num_qubits = int(np.log2(len(vector)))

# Get observable circuits
obs_circuits = observable.observable_circuit(num_qubits)
qcs = []
for obs_circ in obs_circuits:
    qc = QuantumCircuit(num_qubits)
    qc.isometry(init_state, list(range(num_qubits)), None)
    qc.append(obs_circ, list(range(num_qubits)))
    qcs.append(tpass(qc.decompose()))

# Get observables
observable_ops = observable.observable(num_qubits)
state_vecs = []
# First is the norm
state_vecs.append((~StateFn(observable_ops[0]) @ StateFn(qcs[0])).eval())
for i in range(1, len(observable_ops), 2):
    state_vecs += [(~StateFn(observable_ops[i]) @ StateFn(qcs[i])).eval(),
                   (~StateFn(observable_ops[i + 1]) @ StateFn(qcs[i + 1])).eval()]

# Obtain result
result = observable.post_processing(state_vecs, num_qubits)

# Obtain analytical evaluation
exact = observable.evaluate_classically(init_state)
```

**Parameters**

*   **main\_diag** (`float`) – The main diagonal of the tridiagonal Toeplitz symmetric matrix to compute the functional.
*   **off\_diag** (`int`) – The off diagonal of the tridiagonal Toeplitz symmetric matrix to compute the functional.

## Methods

|                                                                                                                                                                                                                                                  |                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| [`evaluate_classically`](qiskit.algorithms.linear_solvers.MatrixFunctional.evaluate_classically#qiskit.algorithms.linear_solvers.MatrixFunctional.evaluate_classically "qiskit.algorithms.linear_solvers.MatrixFunctional.evaluate_classically") | Evaluates the given observable on the solution to the linear system.  |
| [`observable`](qiskit.algorithms.linear_solvers.MatrixFunctional.observable#qiskit.algorithms.linear_solvers.MatrixFunctional.observable "qiskit.algorithms.linear_solvers.MatrixFunctional.observable")                                         | The observable operators.                                             |
| [`observable_circuit`](qiskit.algorithms.linear_solvers.MatrixFunctional.observable_circuit#qiskit.algorithms.linear_solvers.MatrixFunctional.observable_circuit "qiskit.algorithms.linear_solvers.MatrixFunctional.observable_circuit")         | The circuits to implement the matrix functional observable.           |
| [`post_processing`](qiskit.algorithms.linear_solvers.MatrixFunctional.post_processing#qiskit.algorithms.linear_solvers.MatrixFunctional.post_processing "qiskit.algorithms.linear_solvers.MatrixFunctional.post_processing")                     | Evaluates the matrix functional on the solution to the linear system. |
