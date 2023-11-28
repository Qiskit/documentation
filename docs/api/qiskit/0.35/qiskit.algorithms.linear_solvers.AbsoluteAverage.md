# AbsoluteAverage

<span id="undefined" />

`AbsoluteAverage`

Bases: `qiskit.algorithms.linear_solvers.observables.linear_system_observable.LinearSystemObservable`

An observable for the absolute average of a linear system of equations solution.

For a vector $x=(x_1,...,x_N)$, the absolute average is defined as $\abs{\frac{1}{N}\sum_{i=1}^{N}x_i}$.

## Examples

```python
import numpy as np
from qiskit import QuantumCircuit
from qiskit.algorithms.linear_solvers.observables.absolute_average import \
AbsoluteAverage
from qiskit.opflow import StateFn

observable = AbsoluteAverage()
vector = [1.0, -2.1, 3.2, -4.3]

init_state = vector / np.linalg.norm(vector)
num_qubits = int(np.log2(len(vector)))

qc = QuantumCircuit(num_qubits)
qc.isometry(init_state, list(range(num_qubits)), None)
qc.append(observable.observable_circuit(num_qubits), list(range(num_qubits)))

# Observable operator
observable_op = observable.observable(num_qubits)
state_vec = (~StateFn(observable_op) @ StateFn(qc)).eval()

# Obtain result
result = observable.post_processing(state_vec, num_qubits)

# Obtain analytical evaluation
exact = observable.evaluate_classically(init_state)
```

## Methods

|                                                                                                                                                                                                                                               |                                                                      |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`evaluate_classically`](qiskit.algorithms.linear_solvers.AbsoluteAverage.evaluate_classically#qiskit.algorithms.linear_solvers.AbsoluteAverage.evaluate_classically "qiskit.algorithms.linear_solvers.AbsoluteAverage.evaluate_classically") | Evaluates the given observable on the solution to the linear system. |
| [`observable`](qiskit.algorithms.linear_solvers.AbsoluteAverage.observable#qiskit.algorithms.linear_solvers.AbsoluteAverage.observable "qiskit.algorithms.linear_solvers.AbsoluteAverage.observable")                                         | The observable operator.                                             |
| [`observable_circuit`](qiskit.algorithms.linear_solvers.AbsoluteAverage.observable_circuit#qiskit.algorithms.linear_solvers.AbsoluteAverage.observable_circuit "qiskit.algorithms.linear_solvers.AbsoluteAverage.observable_circuit")         | The circuit implementing the absolute average observable.            |
| [`post_processing`](qiskit.algorithms.linear_solvers.AbsoluteAverage.post_processing#qiskit.algorithms.linear_solvers.AbsoluteAverage.post_processing "qiskit.algorithms.linear_solvers.AbsoluteAverage.post_processing")                     | Evaluates the absolute average on the solution to the linear system. |
