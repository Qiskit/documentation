---
title: ExecutionOptionsV2
description: API reference for qiskit_ibm_runtime.options.ExecutionOptionsV2
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_runtime.options.ExecutionOptionsV2
---

# ExecutionOptionsV2

<span id="qiskit_ibm_runtime.options.ExecutionOptionsV2" />

`ExecutionOptionsV2(*args, **kwargs)` [GitHub](https://github.com/Qiskit/qiskit-ibm-runtime/tree/stable/0.21/qiskit_ibm_runtime/options/execution_options.py#L20-L37 "view source code")

Execution options for V2 primitives.

**Parameters**

*   **init\_qubits** – Whether to reset the qubits to the ground state for each shot. Default: `True`.
*   **rep\_delay** – The repetition delay. This is the delay between a measurement and the subsequent quantum circuit. This is only supported on backends that have `backend.dynamic_reprate_enabled=True`. It must be from the range supplied by `backend.rep_delay_range`. Default is given by `backend.default_rep_delay`.

## Attributes

<span id="qiskit_ibm_runtime.options.ExecutionOptionsV2.init_qubits" />

### init\_qubits

`UnsetType | bool`

`= Unset`

<span id="qiskit_ibm_runtime.options.ExecutionOptionsV2.rep_delay" />

### rep\_delay

`UnsetType | float`

`= Unset`

## Methods

