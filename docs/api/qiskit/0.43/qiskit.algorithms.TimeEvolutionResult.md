---
title: TimeEvolutionResult
description: API reference for qiskit.algorithms.TimeEvolutionResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.TimeEvolutionResult
---

# TimeEvolutionResult

<span id="qiskit.algorithms.TimeEvolutionResult" />

`TimeEvolutionResult(evolved_state, aux_ops_evaluated=None, observables=None, times=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/algorithms/time_evolvers/time_evolution_result.py "view source code")

Bases: `AlgorithmResult`

Class for holding time evolution result.

<span id="qiskit.algorithms.TimeEvolutionResult.evolved_state" />

### evolved\_state

An evolved quantum state.

**Type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")|[Statevector](qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")

<span id="qiskit.algorithms.TimeEvolutionResult.aux_ops_evaluated" />

### aux\_ops\_evaluated

Optional list of observables for which expected values on an evolved state are calculated. These values are in fact tuples formatted as (mean, standard deviation).

**Type**

ListOrDict\[tuple\[complex, complex]] | None

<span id="qiskit.algorithms.TimeEvolutionResult.observables" />

### observables

Optional list of observables for which expected on an evolved state are calculated at each timestep. These values are in fact lists of tuples formatted as (mean, standard deviation).

**Type**

ListOrDict\[tuple\[np.ndarray, np.ndarray]] | None

<span id="qiskit.algorithms.TimeEvolutionResult.times" />

### times

Optional list of times at which each observable has been evaluated.

**Type**

np.array | None

**Parameters**

*   **evolved\_state** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")  *|*[*Statevector*](qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")) – An evolved quantum state.
*   **aux\_ops\_evaluated** (*ListOrDict\[tuple\[complex, complex]] | None*) – Optional list of observables for which expected values on an evolved state are calculated. These values are in fact tuples formatted as (mean, standard deviation).
*   **observables** (*ListOrDict\[tuple\[np.ndarray, np.ndarray]] | None*) – Optional list of observables for which expected values are calculated for each timestep. These values are in fact tuples formatted as (mean array, standard deviation array).
*   **times** (*np.ndarray | None*) – Optional list of times at which each observable has been evaluated.

## Methods

<span id="qiskit-algorithms-timeevolutionresult-combine" />

### combine

<span id="qiskit.algorithms.TimeEvolutionResult.combine" />

`TimeEvolutionResult.combine(result)`

Any property from the argument that exists in the receiver is updated. :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

