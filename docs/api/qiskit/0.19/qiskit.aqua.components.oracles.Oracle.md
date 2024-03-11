---
title: Oracle
description: API reference for qiskit.aqua.components.oracles.Oracle
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.oracles.Oracle
---

# Oracle

<span id="qiskit.aqua.components.oracles.Oracle" />

`Oracle(*args, **kwargs)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/components/oracles/oracle.py "view source code")

Base class for oracles.

This method should initialize the module and use an exception if a component of the module is not available.

**Parameters**

*   **args** (*list*) – args
*   **kwargs** (*dict*) – kwargs

## Attributes

### ancillary\_register

<span id="qiskit.aqua.components.oracles.Oracle.ancillary_register" />

`abstract property`

returns ancillary register

### circuit

### output\_register

<span id="qiskit.aqua.components.oracles.Oracle.output_register" />

`abstract property`

returns output register

### variable\_register

<span id="qiskit.aqua.components.oracles.Oracle.variable_register" />

`abstract property`

returns variable register

## Methods

### construct\_circuit

<span id="qiskit.aqua.components.oracles.Oracle.construct_circuit" />

`abstract Oracle.construct_circuit()`

Construct the oracle circuit.

**Returns**

A quantum circuit for the oracle.

