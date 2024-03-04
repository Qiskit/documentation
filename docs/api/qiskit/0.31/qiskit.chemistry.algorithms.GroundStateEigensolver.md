---
title: GroundStateEigensolver
description: API reference for qiskit.chemistry.algorithms.GroundStateEigensolver
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.algorithms.GroundStateEigensolver
---

# GroundStateEigensolver

<span id="qiskit.chemistry.algorithms.GroundStateEigensolver" />

`GroundStateEigensolver(transformation, solver)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/chemistry/algorithms/ground_state_solvers/ground_state_eigensolver.py "view source code")

Bases: `qiskit.chemistry.algorithms.ground_state_solvers.ground_state_solver.GroundStateSolver`

Ground state computation using a minimum eigensolver.

**Parameters**

*   **transformation** (`Transformation`) – Qubit Operator Transformation
*   **solver** (`Union`\[`MinimumEigensolver`, `MinimumEigensolverFactory`]) – Minimum Eigensolver or MESFactory object, e.g. the VQEUCCSDFactory.

## Methods

### evaluate\_operators

<span id="qiskit.chemistry.algorithms.GroundStateEigensolver.evaluate_operators" />

`GroundStateEigensolver.evaluate_operators(state, operators)`

Evaluates additional operators at the given state.

**Parameters**

*   **state** (`Union`\[`str`, `dict`, `Result`, `list`, `ndarray`, `Statevector`, `QuantumCircuit`, `Instruction`, `OperatorBase`]) – any kind of input that can be used to specify a state. See also `StateFn` for more details.
*   **operators** (`Union`\[`WeightedPauliOperator`, `OperatorBase`, `list`, `dict`]) – either a single, list or dictionary of `WeightedPauliOperator``s or any kind of operator implementing the ``OperatorBase`.

**Return type**

`Union`\[`float`, `None`, `List`\[`Optional`\[`float`]], `Dict`\[`str`, `List`\[`Optional`\[`float`]]]]

**Returns**

The expectation value of the given operator(s). The return type will be identical to the format of the provided operators.

### returns\_groundstate

<span id="qiskit.chemistry.algorithms.GroundStateEigensolver.returns_groundstate" />

`GroundStateEigensolver.returns_groundstate()`

Whether the eigensolver returns the ground state or only ground state energy.

**Return type**

`bool`

### solve

<span id="qiskit.chemistry.algorithms.GroundStateEigensolver.solve" />

`GroundStateEigensolver.solve(driver, aux_operators=None)`

Compute Ground State properties.

**Parameters**

*   **driver** (`BaseDriver`) – a chemistry driver object which defines the chemical problem that is to be solved by this calculation.
*   **aux\_operators** (`Union`\[`List`\[`FermionicOperator`], `List`\[`BosonicOperator`], `None`]) – Additional auxiliary operators to evaluate at the ground state. Depending on whether a fermionic or bosonic system is solved, the type of the operators must be `FermionicOperator` or `BosonicOperator`, respectively.

**Raises**

**NotImplementedError** – If an operator in `aux_operators` is not of type `FermionicOperator`.

**Return type**

`Union`\[`ElectronicStructureResult`, `VibronicStructureResult`]

**Returns**

An eigenstate result. Depending on the transformation this can be an electronic structure or bosonic result.

## Attributes

<span id="qiskit.chemistry.algorithms.GroundStateEigensolver.solver" />

### solver

Returns the minimum eigensolver or factory.

**Return type**

`Union`\[`MinimumEigensolver`, `MinimumEigensolverFactory`]

<span id="qiskit.chemistry.algorithms.GroundStateEigensolver.transformation" />

### transformation

Returns the transformation used to obtain a qubit operator from the molecule.

**Return type**

`Transformation`

