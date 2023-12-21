---
title: Oracle
description: API reference for qiskit.aqua.components.oracles.Oracle
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.oracles.Oracle
---

# Oracle

<span id="qiskit.aqua.components.oracles.Oracle" />

`Oracle(*args, **kwargs)`

Base class for oracles.

This method should initialize the module and use an exception if a component of the module is not available.

**Parameters**

*   **args** (*list*) – args
*   **kwargs** (*dict*) – kwargs

## Attributes

|                                                                                                                                                    |                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| [`Oracle.ancillary_register`](qiskit.aqua.components.oracles.Oracle.ancillary_register "qiskit.aqua.components.oracles.Oracle.ancillary_register") | returns ancillary register |
| [`Oracle.circuit`](qiskit.aqua.components.oracles.Oracle.circuit "qiskit.aqua.components.oracles.Oracle.circuit")                                  |                            |
| [`Oracle.output_register`](qiskit.aqua.components.oracles.Oracle.output_register "qiskit.aqua.components.oracles.Oracle.output_register")          | returns output register    |
| [`Oracle.variable_register`](qiskit.aqua.components.oracles.Oracle.variable_register "qiskit.aqua.components.oracles.Oracle.variable_register")    | returns variable register  |

## Methods

|                                                                                                                                                   |                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| [`Oracle.construct_circuit`](qiskit.aqua.components.oracles.Oracle.construct_circuit "qiskit.aqua.components.oracles.Oracle.construct_circuit")() | Construct the oracle circuit. |

