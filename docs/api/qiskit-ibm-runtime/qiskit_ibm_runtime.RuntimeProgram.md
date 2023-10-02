---
title: RuntimeProgram
description: API reference for qiskit_ibm_runtime.RuntimeProgram
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_runtime.RuntimeProgram
---

# RuntimeProgram

<span id="qiskit_ibm_runtime.RuntimeProgram" />

`RuntimeProgram(program_name, program_id, description, parameters=None, return_values=None, interim_results=None, max_execution_time=0, backend_requirements=None, creation_date='', update_date='', is_public=False, data='', api_client=None)`

Class representing program metadata.

This class contains the metadata describing a program, such as its name, ID, description, etc.

You can use the [`QiskitRuntimeService`](qiskit_ibm_runtime.QiskitRuntimeService "qiskit_ibm_runtime.QiskitRuntimeService") to retrieve the metadata of a specific program or all programs. For example:

```python
from qiskit_ibm_runtime import QiskitRuntimeService

service = QiskitRuntimeService()

# To retrieve metadata of all programs.
programs = service.programs()

# To retrieve metadata of a single program.
program = service.program(program_id='sampler')
print(f"Program {program.name} takes parameters {program.parameters().metadata}")
```

RuntimeProgram constructor.

**Parameters**

*   **program\_name** (`str`) – Program name.
*   **program\_id** (`str`) – Program ID.
*   **description** (`str`) – Program description.
*   **parameters** (`Optional`\[`Dict`]) – Documentation on program parameters.
*   **return\_values** (`Optional`\[`Dict`]) – Documentation on program return values.
*   **interim\_results** (`Optional`\[`Dict`]) – Documentation on program interim results.
*   **max\_execution\_time** (`int`) – Maximum execution time.
*   **backend\_requirements** (`Optional`\[`Dict`]) – Backend requirements.
*   **creation\_date** (`str`) – Program creation date.
*   **update\_date** (`str`) – Program last updated date.
*   **is\_public** (`Optional`\[`bool`]) – `True` if program is visible to all. `False` if it’s only visible to you.
*   **data** (`str`) – Program data.
*   **api\_client** (`Optional`\[`RuntimeClient`]) – Runtime api client.

## Attributes

<span id="runtimeprogram-backend-requirements" />

### backend\_requirements

<span id="qiskit_ibm_runtime.RuntimeProgram.backend_requirements" />

`Dict`

Backend requirements.

**Return type**

`Dict`

**Returns**

Backend requirements for this program.

<span id="runtimeprogram-creation-date" />

### creation\_date

<span id="qiskit_ibm_runtime.RuntimeProgram.creation_date" />

`str`

Program creation date.

**Return type**

`str`

**Returns**

Program creation date.

<span id="runtimeprogram-data" />

### data

<span id="qiskit_ibm_runtime.RuntimeProgram.data" />

`str`

Program data.

**Return type**

`str`

**Returns**

Program data.

**Raises**

**IBMNotAuthorizedError** – if user is not the program author.

<span id="runtimeprogram-description" />

### description

<span id="qiskit_ibm_runtime.RuntimeProgram.description" />

`str`

Program description.

**Return type**

`str`

**Returns**

Program description.

<span id="runtimeprogram-interim-results" />

### interim\_results

<span id="qiskit_ibm_runtime.RuntimeProgram.interim_results" />

`Dict`

Program interim result definitions.

**Return type**

`Dict`

**Returns**

Interim result definitions for this program.

<span id="runtimeprogram-is-public" />

### is\_public

<span id="qiskit_ibm_runtime.RuntimeProgram.is_public" />

`bool`

Whether the program is visible to all.

**Return type**

`bool`

**Returns**

Whether the program is public.

<span id="runtimeprogram-max-execution-time" />

### max\_execution\_time

<span id="qiskit_ibm_runtime.RuntimeProgram.max_execution_time" />

`int`

Maximum execution time in seconds.

A program execution exceeding this time will be forcibly terminated.

**Return type**

`int`

**Returns**

Maximum execution time.

<span id="runtimeprogram-name" />

### name

<span id="qiskit_ibm_runtime.RuntimeProgram.name" />

`str`

Program name.

**Return type**

`str`

**Returns**

Program name.

<span id="runtimeprogram-program-id" />

### program\_id

<span id="qiskit_ibm_runtime.RuntimeProgram.program_id" />

`str`

Program ID.

**Return type**

`str`

**Returns**

Program ID.

<span id="runtimeprogram-return-values" />

### return\_values

<span id="qiskit_ibm_runtime.RuntimeProgram.return_values" />

`Dict`

Program return value definitions.

**Return type**

`Dict`

**Returns**

Return value definitions for this program.

<span id="runtimeprogram-update-date" />

### update\_date

<span id="qiskit_ibm_runtime.RuntimeProgram.update_date" />

`str`

Program last updated date.

**Return type**

`str`

**Returns**

Program last updated date.

## Methods

<span id="runtimeprogram-parameters" />

### parameters

<span id="qiskit_ibm_runtime.RuntimeProgram.parameters" />

`RuntimeProgram.parameters()`

Program parameter namespace.

You can use the returned namespace to assign parameter values and pass the namespace to [`qiskit_ibm_runtime.QiskitRuntimeService.run()`](qiskit_ibm_runtime.QiskitRuntimeService#run "qiskit_ibm_runtime.QiskitRuntimeService.run"). The namespace allows you to use auto-completion to find program parameters.

Note that each call to this method returns a new namespace instance and does not include any modification to the previous instance.

**Return type**

[`ParameterNamespace`](qiskit_ibm_runtime.ParameterNamespace "qiskit_ibm_runtime.runtime_program.ParameterNamespace")

**Returns**

Program parameter namespace.

<span id="runtimeprogram-to-dict" />

### to\_dict

<span id="qiskit_ibm_runtime.RuntimeProgram.to_dict" />

`RuntimeProgram.to_dict()`

Convert program metadata to dictionary format.

**Return type**

`Dict`

**Returns**

Program metadata in dictionary format.

