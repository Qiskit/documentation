---
title: EnvironmentOptions
description: API reference for qiskit_ibm_runtime.options.EnvironmentOptions
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_runtime.options.EnvironmentOptions
---

# EnvironmentOptions

<span id="qiskit_ibm_runtime.options.EnvironmentOptions" />

`EnvironmentOptions(log_level='WARNING', callback=None, job_tags=<factory>)`[GitHub](https://github.com/qiskit/qiskit-ibm-runtime/tree/stable/0.17/qiskit_ibm_runtime/options/environment_options.py "view source code")

Options related to the execution environment.

**Parameters**

*   **log\_level** (`str`) – logging level to set in the execution environment. The valid log levels are: `DEBUG`, `INFO`, `WARNING`, `ERROR`, and `CRITICAL`. The default level is `WARNING`.

*   **callback** (`Optional`\[`Callable`]) –

    Callback function to be invoked for any interim results and final result. The callback function will receive 2 positional parameters:

    > 1.  Job ID
    > 2.  Job result.

*   **job\_tags** (`Optional`\[`List`]) – Tags to be assigned to the job. The tags can subsequently be used as a filter in the `qiskit_ibm_runtime.qiskit_runtime_service.jobs()` function call.

## Attributes

<span id="qiskit_ibm_runtime.options.EnvironmentOptions.callback" />

### callback

`Callable | None`

`= None`

<span id="qiskit_ibm_runtime.options.EnvironmentOptions.log_level" />

### log\_level

`str`

`= 'WARNING'`

<span id="qiskit_ibm_runtime.options.EnvironmentOptions.job_tags" />

### job\_tags

`List | None`

## Methods

### validate\_environment\_options

<span id="qiskit_ibm_runtime.options.EnvironmentOptions.validate_environment_options" />

`static validate_environment_options(environment_options)`

Validate that environment options are legal. :raises ValueError: if log\_level is not in LogLevelType.

**Return type**

`None`

