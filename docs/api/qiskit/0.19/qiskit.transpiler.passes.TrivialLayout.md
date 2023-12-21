---
title: TrivialLayout
description: API reference for qiskit.transpiler.passes.TrivialLayout
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.TrivialLayout
---

# TrivialLayout

<span id="qiskit.transpiler.passes.TrivialLayout" />

`TrivialLayout(*args, **kwargs)`

Choose a Layout by assigning `n` circuit qubits to device qubits `0, .., n-1`.

A pass for choosing a Layout of a circuit onto a Coupling graph, using a simple round-robin order.

This pass associates a physical qubit (int) to each virtual qubit of the circuit (Qubit) in increasing order.

Does not assume any ancilla.

TrivialLayout initializer.

**Parameters**

**coupling\_map** (*Coupling*) – directed graph representing a coupling map.

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if invalid options

## Attributes

|                                                                                                                                                                         |                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`TrivialLayout.is_analysis_pass`](qiskit.transpiler.passes.TrivialLayout.is_analysis_pass "qiskit.transpiler.passes.TrivialLayout.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`TrivialLayout.is_transformation_pass`](qiskit.transpiler.passes.TrivialLayout.is_transformation_pass "qiskit.transpiler.passes.TrivialLayout.is_transformation_pass") | Check if the pass is a transformation pass. |

## Methods

|                                                                                                                     |                                    |
| ------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [`TrivialLayout.name`](qiskit.transpiler.passes.TrivialLayout.name "qiskit.transpiler.passes.TrivialLayout.name")() | Return the name of the pass.       |
| [`TrivialLayout.run`](qiskit.transpiler.passes.TrivialLayout.run "qiskit.transpiler.passes.TrivialLayout.run")(dag) | Run the TrivialLayout pass on dag. |

