---
title: ExecutionOptions
description: API reference for qiskit_ibm_runtime.options.ExecutionOptions
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_runtime.options.ExecutionOptions
---

# ExecutionOptions

<span id="qiskit_ibm_runtime.options.ExecutionOptions" />

`ExecutionOptions(shots=4000, init_qubits=True)`[GitHub](https://github.com/qiskit/qiskit-ibm-runtime/tree/stable/0.17/qiskit_ibm_runtime/options/execution_options.py "view source code")

Execution options.

**Parameters**

*   **shots** (`int`) – Number of repetitions of each circuit, for sampling. Default: 4000.
*   **init\_qubits** (`bool`) – Whether to reset the qubits to the ground state for each shot. Default: `True`.

## Attributes

<span id="qiskit_ibm_runtime.options.ExecutionOptions.init_qubits" />

### init\_qubits

`bool`

`= True`

<span id="qiskit_ibm_runtime.options.ExecutionOptions.shots" />

### shots

`int`

`= 4000`

## Methods

### validate\_execution\_options

<span id="qiskit_ibm_runtime.options.ExecutionOptions.validate_execution_options" />

`static validate_execution_options(execution_options)`

Validate that execution options are legal. :raises ValueError: if any execution option is not supported

**Return type**

`None`

