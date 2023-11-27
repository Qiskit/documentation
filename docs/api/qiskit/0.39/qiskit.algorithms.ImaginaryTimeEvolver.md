---
title: ImaginaryTimeEvolver
description: API reference for qiskit.algorithms.ImaginaryTimeEvolver
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.ImaginaryTimeEvolver
---

# ImaginaryTimeEvolver[¶](#imaginarytimeevolver "Permalink to this headline")

<span id="qiskit.algorithms.ImaginaryTimeEvolver" />

`ImaginaryTimeEvolver`

Bases: `abc.ABC`

Interface for Quantum Imaginary Time Evolution.

## Methods

### evolve

<span id="qiskit.algorithms.ImaginaryTimeEvolver.evolve" />

`abstract ImaginaryTimeEvolver.evolve(evolution_problem)`

Perform imaginary time evolution $\exp(-\tau H)|\Psi\rangle$.

Evolves an initial state $|\Psi\rangle$ for an imaginary time $\tau$ under a Hamiltonian $H$, as provided in the `evolution_problem`.

**Parameters**

**evolution\_problem** ([`TimeEvolutionProblem`](qiskit.algorithms.TimeEvolutionProblem "qiskit.algorithms.time_evolvers.time_evolution_problem.TimeEvolutionProblem")) – The definition of the evolution problem.

**Return type**

[`TimeEvolutionResult`](qiskit.algorithms.TimeEvolutionResult "qiskit.algorithms.time_evolvers.time_evolution_result.TimeEvolutionResult")

**Returns**

Evolution result which includes an evolved quantum state.

