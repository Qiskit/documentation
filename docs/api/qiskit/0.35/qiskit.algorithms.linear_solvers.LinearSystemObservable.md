# LinearSystemObservable

<span id="undefined" />

`LinearSystemObservable`

Bases: `abc.ABC`

An abstract class for linear system observables in Qiskit.

## Methods

|                                                                                                                                                                                                                                                                    |                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| [`evaluate_classically`](qiskit.algorithms.linear_solvers.LinearSystemObservable.evaluate_classically#qiskit.algorithms.linear_solvers.LinearSystemObservable.evaluate_classically "qiskit.algorithms.linear_solvers.LinearSystemObservable.evaluate_classically") | Calculates the analytical value of the given observable from the solution vector to the |
| [`observable`](qiskit.algorithms.linear_solvers.LinearSystemObservable.observable#qiskit.algorithms.linear_solvers.LinearSystemObservable.observable "qiskit.algorithms.linear_solvers.LinearSystemObservable.observable")                                         | The observable operator.                                                                |
| [`observable_circuit`](qiskit.algorithms.linear_solvers.LinearSystemObservable.observable_circuit#qiskit.algorithms.linear_solvers.LinearSystemObservable.observable_circuit "qiskit.algorithms.linear_solvers.LinearSystemObservable.observable_circuit")         | The circuit implementing the observable.                                                |
| [`post_processing`](qiskit.algorithms.linear_solvers.LinearSystemObservable.post_processing#qiskit.algorithms.linear_solvers.LinearSystemObservable.post_processing "qiskit.algorithms.linear_solvers.LinearSystemObservable.post_processing")                     | Evaluates the given observable on the solution to the linear system.                    |
