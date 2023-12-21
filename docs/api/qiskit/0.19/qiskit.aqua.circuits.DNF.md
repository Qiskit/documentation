---
title: DNF
description: API reference for qiskit.aqua.circuits.DNF
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.circuits.DNF
---

# DNF

<span id="qiskit.aqua.circuits.DNF" />

`DNF(ast, num_vars=None)`

Class for constructing circuits for Disjunctive Normal Forms

Constructor.

**Parameters**

*   **ast** (*tuple*) – The logic expression as an Abstract Syntax Tree (AST) tuple
*   **num\_vars** (*int*) – Number of boolean variables

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input

## Attributes

|                                                                                                                       |                            |
| --------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| [`DNF.ancillary_register`](qiskit.aqua.circuits.DNF.ancillary_register "qiskit.aqua.circuits.DNF.ancillary_register") | returns ancillary register |
| [`DNF.clause_register`](qiskit.aqua.circuits.DNF.clause_register "qiskit.aqua.circuits.DNF.clause_register")          | returns clause register    |
| [`DNF.num_clauses`](qiskit.aqua.circuits.DNF.num_clauses "qiskit.aqua.circuits.DNF.num_clauses")                      | returns num clauses        |
| [`DNF.num_variables`](qiskit.aqua.circuits.DNF.num_variables "qiskit.aqua.circuits.DNF.num_variables")                | return num variables       |
| [`DNF.output_register`](qiskit.aqua.circuits.DNF.output_register "qiskit.aqua.circuits.DNF.output_register")          | returns output register    |
| [`DNF.variable_register`](qiskit.aqua.circuits.DNF.variable_register "qiskit.aqua.circuits.DNF.variable_register")    | returns variable register  |

## Methods

|                                                                                                                                   |                    |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| [`DNF.construct_circuit`](qiskit.aqua.circuits.DNF.construct_circuit "qiskit.aqua.circuits.DNF.construct_circuit")(\[circuit, …]) | Construct circuit. |

