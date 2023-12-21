---
title: ESOP
description: API reference for qiskit.aqua.circuits.ESOP
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.circuits.ESOP
---

# ESOP

<span id="qiskit.aqua.circuits.ESOP" />

`ESOP(ast, num_vars=None)`

Class for constructing circuits for Exclusive Sum of Products

Constructor.

**Parameters**

*   **ast** (*tuple*) – The logic expression as an Abstract Syntax Tree (AST) tuple
*   **num\_vars** (*int*) – Number of boolean variables

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input

## Attributes

|                                                                                                                          |                            |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| [`ESOP.ancillary_register`](qiskit.aqua.circuits.ESOP.ancillary_register "qiskit.aqua.circuits.ESOP.ancillary_register") | returns ancillary register |
| [`ESOP.clause_register`](qiskit.aqua.circuits.ESOP.clause_register "qiskit.aqua.circuits.ESOP.clause_register")          | returns clause register    |
| [`ESOP.num_clauses`](qiskit.aqua.circuits.ESOP.num_clauses "qiskit.aqua.circuits.ESOP.num_clauses")                      | returns num clauses        |
| [`ESOP.num_variables`](qiskit.aqua.circuits.ESOP.num_variables "qiskit.aqua.circuits.ESOP.num_variables")                | return num variables       |
| [`ESOP.output_register`](qiskit.aqua.circuits.ESOP.output_register "qiskit.aqua.circuits.ESOP.output_register")          | returns output register    |
| [`ESOP.variable_register`](qiskit.aqua.circuits.ESOP.variable_register "qiskit.aqua.circuits.ESOP.variable_register")    | returns variable register  |

## Methods

|                                                                                                                                      |                    |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| [`ESOP.construct_circuit`](qiskit.aqua.circuits.ESOP.construct_circuit "qiskit.aqua.circuits.ESOP.construct_circuit")(\[circuit, …]) | Construct circuit. |

