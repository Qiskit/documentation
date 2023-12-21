---
title: LegacyBaseOperator
description: API reference for qiskit.aqua.operators.legacy.LegacyBaseOperator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.legacy.LegacyBaseOperator
---

# LegacyBaseOperator

<span id="qiskit.aqua.operators.legacy.LegacyBaseOperator" />

`LegacyBaseOperator(basis=None, z2_symmetries=None, name=None)`

Operators relevant for quantum applications.

Constructor.

## Attributes

|                                                                                                                                                                     |                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| [`LegacyBaseOperator.basis`](qiskit.aqua.operators.legacy.LegacyBaseOperator.basis "qiskit.aqua.operators.legacy.LegacyBaseOperator.basis")                         | returns basis                         |
| [`LegacyBaseOperator.name`](qiskit.aqua.operators.legacy.LegacyBaseOperator.name "qiskit.aqua.operators.legacy.LegacyBaseOperator.name")                            | returns name                          |
| [`LegacyBaseOperator.num_qubits`](qiskit.aqua.operators.legacy.LegacyBaseOperator.num_qubits "qiskit.aqua.operators.legacy.LegacyBaseOperator.num_qubits")          | Returns number of qubits for operator |
| [`LegacyBaseOperator.z2_symmetries`](qiskit.aqua.operators.legacy.LegacyBaseOperator.z2_symmetries "qiskit.aqua.operators.legacy.LegacyBaseOperator.z2_symmetries") | returns z2 symmetries                 |

## Methods

|                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`LegacyBaseOperator.__mul__`](qiskit.aqua.operators.legacy.LegacyBaseOperator.__mul__ "qiskit.aqua.operators.legacy.LegacyBaseOperator.__mul__")(other)                                                            | Overload \*                                                                                                                                                                                                                                                                                                     |
| [`LegacyBaseOperator.chop`](qiskit.aqua.operators.legacy.LegacyBaseOperator.chop "qiskit.aqua.operators.legacy.LegacyBaseOperator.chop")(threshold\[, copy])                                                        |                                                                                                                                                                                                                                                                                                                 |
| [`LegacyBaseOperator.construct_evaluation_circuit`](qiskit.aqua.operators.legacy.LegacyBaseOperator.construct_evaluation_circuit "qiskit.aqua.operators.legacy.LegacyBaseOperator.construct_evaluation_circuit")(…) | Build circuits to compute the expectation w\.r.t the wavefunction.                                                                                                                                                                                                                                              |
| [`LegacyBaseOperator.evaluate_with_result`](qiskit.aqua.operators.legacy.LegacyBaseOperator.evaluate_with_result "qiskit.aqua.operators.legacy.LegacyBaseOperator.evaluate_with_result")(…)                         | Consume the result from the quantum computer to build the expectation, will be only used along with the [`construct_evaluation_circuit()`](qiskit.aqua.operators.legacy.LegacyBaseOperator.construct_evaluation_circuit "qiskit.aqua.operators.legacy.LegacyBaseOperator.construct_evaluation_circuit") method. |
| [`LegacyBaseOperator.evolve`](qiskit.aqua.operators.legacy.LegacyBaseOperator.evolve "qiskit.aqua.operators.legacy.LegacyBaseOperator.evolve")(state\_in, …)                                                        | Time evolution, exp^(-jt H).                                                                                                                                                                                                                                                                                    |
| [`LegacyBaseOperator.is_empty`](qiskit.aqua.operators.legacy.LegacyBaseOperator.is_empty "qiskit.aqua.operators.legacy.LegacyBaseOperator.is_empty")()                                                              | Check Operator is empty or not                                                                                                                                                                                                                                                                                  |
| [`LegacyBaseOperator.print_details`](qiskit.aqua.operators.legacy.LegacyBaseOperator.print_details "qiskit.aqua.operators.legacy.LegacyBaseOperator.print_details")()                                               | print details                                                                                                                                                                                                                                                                                                   |
| [`LegacyBaseOperator.to_opflow`](qiskit.aqua.operators.legacy.LegacyBaseOperator.to_opflow "qiskit.aqua.operators.legacy.LegacyBaseOperator.to_opflow")()                                                           | Convert to new Operator format.                                                                                                                                                                                                                                                                                 |

