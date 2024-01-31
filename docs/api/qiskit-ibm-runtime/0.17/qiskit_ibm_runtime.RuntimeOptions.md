---
title: RuntimeOptions
description: API reference for qiskit_ibm_runtime.RuntimeOptions
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_runtime.RuntimeOptions
---

# RuntimeOptions

<span id="qiskit_ibm_runtime.RuntimeOptions" />

`RuntimeOptions(backend=None, image=None, log_level=None, instance=None, job_tags=None, max_execution_time=None, session_time=None)`[GitHub](https://github.com/qiskit/qiskit-ibm-runtime/tree/stable/0.17/qiskit_ibm_runtime/runtime_options.py "view source code")

Class for representing generic runtime execution options.

RuntimeOptions constructor.

**Parameters**

*   **backend** (`Optional`\[`str`]) – target backend to run on. This is required for `ibm_quantum` channel.
*   **image** (`Optional`\[`str`]) – the runtime image used to execute the program, specified in the form of `image_name:tag`. Not all accounts are authorized to select a different image.
*   **log\_level** (`Optional`\[`str`]) – logging level to set in the execution environment. The valid log levels are: `DEBUG`, `INFO`, `WARNING`, `ERROR`, and `CRITICAL`. The default level is `WARNING`.
*   **instance** (`Optional`\[`str`]) – The hub/group/project to use, in that format. This is only supported for `ibm_quantum` channel. If `None`, a hub/group/project that provides access to the target backend is randomly selected.
*   **job\_tags** (`Optional`\[`List`\[`str`]]) – Tags to be assigned to the job. The tags can subsequently be used as a filter in the `jobs()` function call.
*   **max\_execution\_time** (`Optional`\[`int`]) – Maximum execution time in seconds, which is based on system execution time (not wall clock time). System execution time is the amount of time that the system is dedicated to processing your job. If a job exceeds this time limit, it is forcibly cancelled. Simulator jobs continue to use wall clock time.
*   **session\_time** (`Optional`\[`int`]) – Length of session in seconds.

## Attributes

<span id="qiskit_ibm_runtime.RuntimeOptions.backend" />

### backend

`str | None`

`= None`

<span id="qiskit_ibm_runtime.RuntimeOptions.image" />

### image

`str | None`

`= None`

<span id="qiskit_ibm_runtime.RuntimeOptions.instance" />

### instance

`str | None`

`= None`

<span id="qiskit_ibm_runtime.RuntimeOptions.job_tags" />

### job\_tags

`List[str] | None`

`= None`

<span id="qiskit_ibm_runtime.RuntimeOptions.log_level" />

### log\_level

`str | None`

`= None`

<span id="qiskit_ibm_runtime.RuntimeOptions.max_execution_time" />

### max\_execution\_time

`int | None`

`= None`

<span id="qiskit_ibm_runtime.RuntimeOptions.session_time" />

### session\_time

`int | None`

`= None`

## Methods

### validate

<span id="qiskit_ibm_runtime.RuntimeOptions.validate" />

`validate(channel)`

Validate options.

**Parameters**

**channel** (`str`) – channel type.

**Raises**

**IBMInputValueError** – If one or more option is invalid.

**Return type**

`None`

