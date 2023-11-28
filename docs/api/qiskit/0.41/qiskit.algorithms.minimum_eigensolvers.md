<span id="qiskit-algorithms-minimum-eigensolvers" />

# qiskit.algorithms.minimum\_eigensolvers[¶](#module-qiskit.algorithms.minimum_eigensolvers "Permalink to this headline")

## Minimum Eigensolvers Package ([`qiskit.algorithms.minimum_eigensolvers`](#module-qiskit.algorithms.minimum_eigensolvers "qiskit.algorithms.minimum_eigensolvers"))[¶](#minimum-eigensolvers-package-qiskit-algorithms-minimum-eigensolvers "Permalink to this headline")

### Minimum Eigensolvers[¶](#minimum-eigensolvers "Permalink to this headline")

|                                                                                                                                                                                    |                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`MinimumEigensolver`](qiskit.algorithms.minimum_eigensolvers.MinimumEigensolver "qiskit.algorithms.minimum_eigensolvers.MinimumEigensolver")()                                    | The minimum eigensolver interface.                                                  |
| [`NumPyMinimumEigensolver`](qiskit.algorithms.minimum_eigensolvers.NumPyMinimumEigensolver "qiskit.algorithms.minimum_eigensolvers.NumPyMinimumEigensolver")(\[filter\_criterion]) | The NumPy minimum eigensolver algorithm.                                            |
| [`VQE`](qiskit.algorithms.minimum_eigensolvers.VQE "qiskit.algorithms.minimum_eigensolvers.VQE")(estimator, ansatz, optimizer, \*\[, ...])                                         | The variational quantum eigensolver (VQE) algorithm.                                |
| [`AdaptVQE`](qiskit.algorithms.minimum_eigensolvers.AdaptVQE "qiskit.algorithms.minimum_eigensolvers.AdaptVQE")(solver, \*\[, threshold, max\_iterations])                         | The Adaptive Variational Quantum Eigensolver algorithm.                             |
| [`SamplingMinimumEigensolver`](qiskit.algorithms.minimum_eigensolvers.SamplingMinimumEigensolver "qiskit.algorithms.minimum_eigensolvers.SamplingMinimumEigensolver")()            | The Sampling Minimum Eigensolver Interface.                                         |
| [`SamplingVQE`](qiskit.algorithms.minimum_eigensolvers.SamplingVQE "qiskit.algorithms.minimum_eigensolvers.SamplingVQE")(sampler, ansatz, optimizer, \*\[, ...])                   | The Variational Quantum Eigensolver algorithm, optimized for diagonal Hamiltonians. |
| [`QAOA`](qiskit.algorithms.minimum_eigensolvers.QAOA "qiskit.algorithms.minimum_eigensolvers.QAOA")(sampler, optimizer, \*\[, reps, ...])                                          | The Quantum Approximate Optimization Algorithm (QAOA).                              |

|                                                                                                                                                                                           |                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| [`MinimumEigensolverResult`](qiskit.algorithms.minimum_eigensolvers.MinimumEigensolverResult "qiskit.algorithms.minimum_eigensolvers.MinimumEigensolverResult")()                         | Minimum eigensolver result.             |
| [`NumPyMinimumEigensolverResult`](qiskit.algorithms.minimum_eigensolvers.NumPyMinimumEigensolverResult "qiskit.algorithms.minimum_eigensolvers.NumPyMinimumEigensolverResult")()          | NumPy minimum eigensolver result.       |
| [`VQEResult`](qiskit.algorithms.minimum_eigensolvers.VQEResult "qiskit.algorithms.minimum_eigensolvers.VQEResult")()                                                                      | Variational quantum eigensolver result. |
| [`AdaptVQEResult`](qiskit.algorithms.minimum_eigensolvers.AdaptVQEResult "qiskit.algorithms.minimum_eigensolvers.AdaptVQEResult")()                                                       | AdaptVQE Result.                        |
| [`SamplingMinimumEigensolverResult`](qiskit.algorithms.minimum_eigensolvers.SamplingMinimumEigensolverResult "qiskit.algorithms.minimum_eigensolvers.SamplingMinimumEigensolverResult")() | Sampling Minimum Eigensolver Result.    |
| [`SamplingVQEResult`](qiskit.algorithms.minimum_eigensolvers.SamplingVQEResult "qiskit.algorithms.minimum_eigensolvers.SamplingVQEResult")()                                              | VQE Result.                             |
