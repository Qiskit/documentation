---
title: TimeEvolutionProblem
description: API reference for qiskit.algorithms.TimeEvolutionProblem
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.TimeEvolutionProblem
---

# TimeEvolutionProblem

<span id="qiskit.algorithms.TimeEvolutionProblem" />

`TimeEvolutionProblem(hamiltonian, time, initial_state=None, aux_operators=None, truncation_threshold=1e-12, t_param=None, param_value_map=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.22/qiskit/algorithms/time_evolvers/time_evolution_problem.py "view source code")

Bases: `object`

Time evolution problem class.

This class is the input to time evolution algorithms and must contain information on the total evolution time, a quantum state to be evolved and under which Hamiltonian the state is evolved.

<span id="qiskit.algorithms.TimeEvolutionProblem.hamiltonian" />

### hamiltonian

The Hamiltonian under which to evolve the system.

**Type**

BaseOperator | [PauliSumOp](qiskit.opflow.primitive_ops.PauliSumOp "qiskit.opflow.primitive_ops.PauliSumOp")

<span id="qiskit.algorithms.TimeEvolutionProblem.initial_state" />

### initial\_state

The quantum state to be evolved for methods like Trotterization. For variational time evolutions, where the evolution happens in an ansatz, this argument is not required.

**Type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") | [Statevector](qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector") | None

<span id="qiskit.algorithms.TimeEvolutionProblem.aux_operators" />

### aux\_operators

Optional list of auxiliary operators to be evaluated with the evolved `initial_state` and their expectation values returned.

**Type**

ListOrDict\[BaseOperator | [PauliSumOp](qiskit.opflow.primitive_ops.PauliSumOp "qiskit.opflow.primitive_ops.PauliSumOp")] | None

<span id="qiskit.algorithms.TimeEvolutionProblem.truncation_threshold" />

### truncation\_threshold

Defines a threshold under which values can be assumed to be 0. Used when `aux_operators` is provided.

**Type**

float

<span id="qiskit.algorithms.TimeEvolutionProblem.t_param" />

### t\_param

Time parameter in case of a time-dependent Hamiltonian. This free parameter must be within the `hamiltonian`.

**Type**

[Parameter](qiskit.circuit.Parameter "qiskit.circuit.Parameter") | None

<span id="qiskit.algorithms.TimeEvolutionProblem.param_value_map" />

### param\_value\_map

Maps free parameters in the problem to values. Depending on the algorithm, it might refer to e.g. a Hamiltonian or an initial state.

**Type**

dict\[[Parameter](qiskit.circuit.Parameter "qiskit.circuit.Parameter"), complex] | None

**Parameters**

*   **hamiltonian** (*BaseOperator |* [*PauliSumOp*](qiskit.opflow.primitive_ops.PauliSumOp "qiskit.opflow.primitive_ops.PauliSumOp")) – The Hamiltonian under which to evolve the system.
*   **time** (*float*) – Total time of evolution.
*   **initial\_state** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")  *|*[*Statevector*](qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector") *| None*) – The quantum state to be evolved for methods like Trotterization. For variational time evolutions, where the evolution happens in an ansatz, this argument is not required.
*   **aux\_operators** (*ListOrDict\[BaseOperator |* [*PauliSumOp*](qiskit.opflow.primitive_ops.PauliSumOp "qiskit.opflow.primitive_ops.PauliSumOp")*] | None*) – Optional list of auxiliary operators to be evaluated with the evolved `initial_state` and their expectation values returned.
*   **truncation\_threshold** (*float*) – Defines a threshold under which values can be assumed to be 0. Used when `aux_operators` is provided.
*   **t\_param** ([*Parameter*](qiskit.circuit.Parameter "qiskit.circuit.Parameter") *| None*) – Time parameter in case of a time-dependent Hamiltonian. This free parameter must be within the `hamiltonian`.
*   **param\_value\_map** (*Mapping\[*[*Parameter*](qiskit.circuit.Parameter "qiskit.circuit.Parameter")*, complex] | None*) – Maps free parameters in the problem to values. Depending on the algorithm, it might refer to e.g. a Hamiltonian or an initial state.

**Raises**

**ValueError** – If non-positive time of evolution is provided.

## Methods

### validate\_params

<span id="qiskit.algorithms.TimeEvolutionProblem.validate_params" />

`TimeEvolutionProblem.validate_params()`

Checks if all parameters present in the Hamiltonian are also present in the dictionary that maps them to values.

**Raises**

**ValueError** – If Hamiltonian parameters cannot be bound with data provided.

**Return type**

`None`

## Attributes

<span id="qiskit.algorithms.TimeEvolutionProblem.time" />

### time

Returns time.

**Return type**

`float`

