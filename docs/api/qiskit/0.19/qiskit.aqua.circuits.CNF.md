---
title: CNF
description: API reference for qiskit.aqua.circuits.CNF
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.circuits.CNF
---

# CNF

<span id="qiskit.aqua.circuits.CNF" />

`CNF(ast, num_vars=None)`

Class for constructing circuits for Conjunctive Normal Forms

Constructor.

**Parameters**

*   **ast** (*tuple*) – The logic expression as an Abstract Syntax Tree (AST) tuple
*   **num\_vars** (*int*) – Number of boolean variables

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input

## Attributes

|                                                                                                                       |                            |
| --------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| [`CNF.ancillary_register`](qiskit.aqua.circuits.CNF.ancillary_register "qiskit.aqua.circuits.CNF.ancillary_register") | returns ancillary register |
| [`CNF.clause_register`](qiskit.aqua.circuits.CNF.clause_register "qiskit.aqua.circuits.CNF.clause_register")          | returns clause register    |
| [`CNF.num_clauses`](qiskit.aqua.circuits.CNF.num_clauses "qiskit.aqua.circuits.CNF.num_clauses")                      | returns num clauses        |
| [`CNF.num_variables`](qiskit.aqua.circuits.CNF.num_variables "qiskit.aqua.circuits.CNF.num_variables")                | return num variables       |
| [`CNF.output_register`](qiskit.aqua.circuits.CNF.output_register "qiskit.aqua.circuits.CNF.output_register")          | returns output register    |
| [`CNF.variable_register`](qiskit.aqua.circuits.CNF.variable_register "qiskit.aqua.circuits.CNF.variable_register")    | returns variable register  |

## Methods

|                                                                                                                                   |                    |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| [`CNF.construct_circuit`](qiskit.aqua.circuits.CNF.construct_circuit "qiskit.aqua.circuits.CNF.construct_circuit")(\[circuit, …]) | Construct circuit. |

