---
title: EvolutionResult
description: API reference for qiskit.algorithms.EvolutionResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.EvolutionResult
---

# EvolutionResult

<span id="qiskit.algorithms.EvolutionResult" />

`EvolutionResult(evolved_state, aux_ops_evaluated=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/algorithms/evolvers/evolution_result.py "view source code")

Bases: `AlgorithmResult`

Deprecated: Class for holding evolution result.

The EvolutionResult class has been superseded by the `qiskit.algorithms.time_evolvers.TimeEvolutionResult` class. This class will be deprecated in a future release and subsequently removed after that.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.algorithms.evolvers.evolution_result.EvolutionResult` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. Instead, use the class `qiskit.algorithms.time_evolvers.TimeEvolutionResult`. See [https://qisk.it/algo\_migration](https://qisk.it/algo_migration) for a migration guide.
</Admonition>

**Parameters**

*   **evolved\_state** ([*StateFn*](qiskit.opflow.state_fns.StateFn "qiskit.opflow.state_fns.StateFn")  *|*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")  *|*[*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.OperatorBase")) – An evolved quantum state.
*   **aux\_ops\_evaluated** (*ListOrDict\[tuple\[complex, complex]] | None*) – Optional list of observables for which expected values on an evolved state are calculated. These values are in fact tuples formatted as (mean, standard deviation).

## Methods

<span id="qiskit-algorithms-evolutionresult-combine" />

### combine

<span id="qiskit.algorithms.EvolutionResult.combine" />

`EvolutionResult.combine(result)`

Any property from the argument that exists in the receiver is updated. :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

