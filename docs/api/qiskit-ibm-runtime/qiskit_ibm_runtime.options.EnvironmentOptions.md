---
title: EnvironmentOptions
description: API reference for qiskit_ibm_runtime.options.EnvironmentOptions
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_runtime.options.EnvironmentOptions
---

# EnvironmentOptions[¶](#environmentoptions "Link to this heading")

<span id="qiskit_ibm_runtime.options.EnvironmentOptions" />

`EnvironmentOptions(log_level='WARNING', callback=None, job_tags=<factory>)¶`

Options related to the execution environment.

**Parameters**

*   **log\_level** (`str`) – logging level to set in the execution environment. The valid log levels are: `DEBUG`, `INFO`, `WARNING`, `ERROR`, and `CRITICAL`. The default level is `WARNING`.

*   **callback** (`Optional`\[`Callable`]) –

    Callback function to be invoked for any interim results and final result. The callback function will receive 2 positional parameters:

    > 1.  Job ID
    > 2.  Job result.

*   **job\_tags** (`Optional`\[`List`]) – Tags to be assigned to the job. The tags can subsequently be used as a filter in the `qiskit_ibm_runtime.qiskit_runtime_service.jobs()` function call.

## Attributes

<span id="environmentoptions-callback" />

### callback

<span id="qiskit_ibm_runtime.options.EnvironmentOptions.callback" />

`Callable | None = None`

<span id="environmentoptions-job-tags" />

### job\_tags

<span id="qiskit_ibm_runtime.options.EnvironmentOptions.job_tags" />

`List | None`

<span id="environmentoptions-log-level" />

### log\_level

<span id="qiskit_ibm_runtime.options.EnvironmentOptions.log_level" />

`str = 'WARNING'`

## Methods

<span id="environmentoptions-validate-environment-options" />

### validate\_environment\_options

<span id="qiskit_ibm_runtime.options.EnvironmentOptions.validate_environment_options" />

`static EnvironmentOptions.validate_environment_options(environment_options)¶`

Validate that environment options are legal. :raises ValueError: if log\_level is not in LogLevelType.

**Return type**

`None`

