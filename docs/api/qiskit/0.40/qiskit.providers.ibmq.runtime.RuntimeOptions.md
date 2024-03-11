---
title: RuntimeOptions
description: API reference for qiskit.providers.ibmq.runtime.RuntimeOptions
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.ibmq.runtime.RuntimeOptions
---

# RuntimeOptions

<span id="qiskit.providers.ibmq.runtime.RuntimeOptions" />

`RuntimeOptions(backend_name=None, image=None, log_level=None)` [GitHub](https://github.com/qiskit/qiskit-ibmq-provider/tree/stable/0.19/qiskit/providers/ibmq/runtime/runtime_options.py "view source code")

Bases: `object`

Class for representing runtime execution options.

**Parameters**

*   **backend\_name** (`Optional`\[`str`]) – target backend to run on. This is required.
*   **image** (`Optional`\[`str`]) – the runtime image used to execute the program, specified in the form of `image_name:tag`. Not all accounts are authorized to select a different image.
*   **log\_level** (`Optional`\[`str`]) – logging level to set in the execution environment. The valid log levels are: `DEBUG`, `INFO`, `WARNING`, `ERROR`, and `CRITICAL`. The default level is `WARNING`.

## Methods

### validate

<span id="qiskit.providers.ibmq.runtime.RuntimeOptions.validate" />

`RuntimeOptions.validate()`

Validate options.

**Raises**

**IBMQInputValueError** – If one or more option is invalid.

**Return type**

`None`

## Attributes

<span id="qiskit.providers.ibmq.runtime.RuntimeOptions.backend_name" />

### backend\_name

`str`

`= None`

<span id="qiskit.providers.ibmq.runtime.RuntimeOptions.image" />

### image

`Optional[str]`

`= None`

<span id="qiskit.providers.ibmq.runtime.RuntimeOptions.log_level" />

### log\_level

`Optional[str]`

`= None`

