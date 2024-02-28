---
title: LegacyBaseOperator
description: API reference for qiskit.aqua.operators.legacy.LegacyBaseOperator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.legacy.LegacyBaseOperator
---

# qiskit.aqua.operators.legacy.LegacyBaseOperator

<span id="qiskit.aqua.operators.legacy.LegacyBaseOperator" />

`LegacyBaseOperator(basis=None, z2_symmetries=None, name=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/operators/legacy/base_operator.py "view source code")

Operators relevant for quantum applications.

Constructor.

### \_\_init\_\_

<span id="qiskit.aqua.operators.legacy.LegacyBaseOperator.__init__" />

`abstract __init__(basis=None, z2_symmetries=None, name=None)`

Constructor.

## Methods

|                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.operators.legacy.LegacyBaseOperator.__init__ "qiskit.aqua.operators.legacy.LegacyBaseOperator.__init__")(\[basis, z2\_symmetries, name])                                                | Constructor.                                                                                                                                                                                                                                                                                                     |
| [`chop`](#qiskit.aqua.operators.legacy.LegacyBaseOperator.chop "qiskit.aqua.operators.legacy.LegacyBaseOperator.chop")(threshold\[, copy])                                                                        |                                                                                                                                                                                                                                                                                                                  |
| [`construct_evaluation_circuit`](#qiskit.aqua.operators.legacy.LegacyBaseOperator.construct_evaluation_circuit "qiskit.aqua.operators.legacy.LegacyBaseOperator.construct_evaluation_circuit")(wave\_function, …) | Build circuits to compute the expectation w\.r.t the wavefunction.                                                                                                                                                                                                                                               |
| [`evaluate_with_result`](#qiskit.aqua.operators.legacy.LegacyBaseOperator.evaluate_with_result "qiskit.aqua.operators.legacy.LegacyBaseOperator.evaluate_with_result")(result, …)                                 | Consume the result from the quantum computer to build the expectation, will be only used along with the [`construct_evaluation_circuit()`](#qiskit.aqua.operators.legacy.LegacyBaseOperator.construct_evaluation_circuit "qiskit.aqua.operators.legacy.LegacyBaseOperator.construct_evaluation_circuit") method. |
| [`evolve`](#qiskit.aqua.operators.legacy.LegacyBaseOperator.evolve "qiskit.aqua.operators.legacy.LegacyBaseOperator.evolve")(state\_in, evo\_time, num\_time\_slices, …)                                          | Time evolution, exp^(-jt H).                                                                                                                                                                                                                                                                                     |
| [`is_empty`](#qiskit.aqua.operators.legacy.LegacyBaseOperator.is_empty "qiskit.aqua.operators.legacy.LegacyBaseOperator.is_empty")()                                                                              | Check Operator is empty or not                                                                                                                                                                                                                                                                                   |
| [`print_details`](#qiskit.aqua.operators.legacy.LegacyBaseOperator.print_details "qiskit.aqua.operators.legacy.LegacyBaseOperator.print_details")()                                                               | print details                                                                                                                                                                                                                                                                                                    |
| [`to_opflow`](#qiskit.aqua.operators.legacy.LegacyBaseOperator.to_opflow "qiskit.aqua.operators.legacy.LegacyBaseOperator.to_opflow")()                                                                           | Convert to new Operator format.                                                                                                                                                                                                                                                                                  |

## Attributes

|                                                                                                                                                   |                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| [`basis`](#qiskit.aqua.operators.legacy.LegacyBaseOperator.basis "qiskit.aqua.operators.legacy.LegacyBaseOperator.basis")                         | returns basis                         |
| [`name`](#qiskit.aqua.operators.legacy.LegacyBaseOperator.name "qiskit.aqua.operators.legacy.LegacyBaseOperator.name")                            | returns name                          |
| [`num_qubits`](#qiskit.aqua.operators.legacy.LegacyBaseOperator.num_qubits "qiskit.aqua.operators.legacy.LegacyBaseOperator.num_qubits")          | Returns number of qubits for operator |
| [`z2_symmetries`](#qiskit.aqua.operators.legacy.LegacyBaseOperator.z2_symmetries "qiskit.aqua.operators.legacy.LegacyBaseOperator.z2_symmetries") | returns z2 symmetries                 |

### basis

<span id="qiskit.aqua.operators.legacy.LegacyBaseOperator.basis" />

`property basis`

returns basis

### chop

<span id="qiskit.aqua.operators.legacy.LegacyBaseOperator.chop" />

`abstract chop(threshold, copy=False)`

### construct\_evaluation\_circuit

<span id="qiskit.aqua.operators.legacy.LegacyBaseOperator.construct_evaluation_circuit" />

`abstract construct_evaluation_circuit(wave_function, statevector_mode, **kwargs)`

Build circuits to compute the expectation w\.r.t the wavefunction.

### evaluate\_with\_result

<span id="qiskit.aqua.operators.legacy.LegacyBaseOperator.evaluate_with_result" />

`abstract evaluate_with_result(result, statevector_mode, **kwargs)`

Consume the result from the quantum computer to build the expectation, will be only used along with the [`construct_evaluation_circuit()`](#qiskit.aqua.operators.legacy.LegacyBaseOperator.construct_evaluation_circuit "qiskit.aqua.operators.legacy.LegacyBaseOperator.construct_evaluation_circuit") method.

### evolve

<span id="qiskit.aqua.operators.legacy.LegacyBaseOperator.evolve" />

`abstract evolve(state_in, evo_time, num_time_slices, expansion_mode, expansion_order, **kwargs)`

Time evolution, exp^(-jt H).

### is\_empty

<span id="qiskit.aqua.operators.legacy.LegacyBaseOperator.is_empty" />

`abstract is_empty()`

Check Operator is empty or not

### name

<span id="qiskit.aqua.operators.legacy.LegacyBaseOperator.name" />

`property name`

returns name

### num\_qubits

<span id="qiskit.aqua.operators.legacy.LegacyBaseOperator.num_qubits" />

`abstract property num_qubits`

Returns number of qubits for operator

### print\_details

<span id="qiskit.aqua.operators.legacy.LegacyBaseOperator.print_details" />

`abstract print_details()`

print details

### to\_opflow

<span id="qiskit.aqua.operators.legacy.LegacyBaseOperator.to_opflow" />

`abstract to_opflow()`

Convert to new Operator format.

### z2\_symmetries

<span id="qiskit.aqua.operators.legacy.LegacyBaseOperator.z2_symmetries" />

`property z2_symmetries`

returns z2 symmetries

