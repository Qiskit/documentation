---
title: RuntimeProgram
description: API reference for qiskit.providers.ibmq.runtime.RuntimeProgram
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.ibmq.runtime.RuntimeProgram
---

# qiskit.providers.ibmq.runtime.RuntimeProgram

<span id="qiskit.providers.ibmq.runtime.RuntimeProgram" />

`RuntimeProgram(program_name, program_id, description, parameters=None, return_values=None, interim_results=None, max_execution_time=0, version='0', backend_requirements=None, creation_date='', is_public=False)` [GitHub](https://github.com/qiskit/qiskit-ibmq-provider/tree/stable/0.15/qiskit/providers/ibmq/runtime/runtime_program.py "view source code")

Class representing program metadata.

This class contains the metadata describing a program, such as its name, ID, description, etc.

You can use the [`IBMRuntimeService`](qiskit.providers.ibmq.runtime.IBMRuntimeService "qiskit.providers.ibmq.runtime.IBMRuntimeService") to retrieve the metadata of a specific program or all programs. For example:

```python
from qiskit import IBMQ

provider = IBMQ.load_account()

# To retrieve metadata of all programs.
programs = provider.runtime.programs()

# To retrieve metadata of a single program.
program = provider.runtime.program(program_id='circuit-runner')
print(f"Program {program.name} takes parameters {program.parameters().metadata}")
```

RuntimeProgram constructor.

**Parameters**

*   **program\_name** (`str`) – Program name.
*   **program\_id** (`str`) – Program ID.
*   **description** (`str`) – Program description.
*   **parameters** (`Optional`\[`List`]) – Documentation on program parameters.
*   **return\_values** (`Optional`\[`List`]) – Documentation on program return values.
*   **interim\_results** (`Optional`\[`List`]) – Documentation on program interim results.
*   **max\_execution\_time** (`int`) – Maximum execution time.
*   **version** (`str`) – Program version.
*   **backend\_requirements** (`Optional`\[`Dict`]) – Backend requirements.
*   **creation\_date** (`str`) – Program creation date.
*   **is\_public** (`bool`) – `True` if program is visible to all. `False` if it’s only visible to you.

### \_\_init\_\_

<span id="qiskit.providers.ibmq.runtime.RuntimeProgram.__init__" />

`__init__(program_name, program_id, description, parameters=None, return_values=None, interim_results=None, max_execution_time=0, version='0', backend_requirements=None, creation_date='', is_public=False)`

RuntimeProgram constructor.

**Parameters**

*   **program\_name** (`str`) – Program name.
*   **program\_id** (`str`) – Program ID.
*   **description** (`str`) – Program description.
*   **parameters** (`Optional`\[`List`]) – Documentation on program parameters.
*   **return\_values** (`Optional`\[`List`]) – Documentation on program return values.
*   **interim\_results** (`Optional`\[`List`]) – Documentation on program interim results.
*   **max\_execution\_time** (`int`) – Maximum execution time.
*   **version** (`str`) – Program version.
*   **backend\_requirements** (`Optional`\[`Dict`]) – Backend requirements.
*   **creation\_date** (`str`) – Program creation date.
*   **is\_public** (`bool`) – `True` if program is visible to all. `False` if it’s only visible to you.

## Methods

|                                                                                                                                                                       |                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [`__init__`](#qiskit.providers.ibmq.runtime.RuntimeProgram.__init__ "qiskit.providers.ibmq.runtime.RuntimeProgram.__init__")(program\_name, program\_id, description) | RuntimeProgram constructor.                    |
| [`parameters`](#qiskit.providers.ibmq.runtime.RuntimeProgram.parameters "qiskit.providers.ibmq.runtime.RuntimeProgram.parameters")()                                  | Program parameter namespace.                   |
| [`to_dict`](#qiskit.providers.ibmq.runtime.RuntimeProgram.to_dict "qiskit.providers.ibmq.runtime.RuntimeProgram.to_dict")()                                           | Convert program metadata to dictionary format. |

## Attributes

|                                                                                                                                                                  |                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| [`backend_requirements`](#qiskit.providers.ibmq.runtime.RuntimeProgram.backend_requirements "qiskit.providers.ibmq.runtime.RuntimeProgram.backend_requirements") | Backend requirements.                  |
| [`creation_date`](#qiskit.providers.ibmq.runtime.RuntimeProgram.creation_date "qiskit.providers.ibmq.runtime.RuntimeProgram.creation_date")                      | Program creation date.                 |
| [`description`](#qiskit.providers.ibmq.runtime.RuntimeProgram.description "qiskit.providers.ibmq.runtime.RuntimeProgram.description")                            | Program description.                   |
| [`interim_results`](#qiskit.providers.ibmq.runtime.RuntimeProgram.interim_results "qiskit.providers.ibmq.runtime.RuntimeProgram.interim_results")                | Program interim result definitions.    |
| [`is_public`](#qiskit.providers.ibmq.runtime.RuntimeProgram.is_public "qiskit.providers.ibmq.runtime.RuntimeProgram.is_public")                                  | Whether the program is visible to all. |
| [`max_execution_time`](#qiskit.providers.ibmq.runtime.RuntimeProgram.max_execution_time "qiskit.providers.ibmq.runtime.RuntimeProgram.max_execution_time")       | Maximum execution time in seconds.     |
| [`name`](#qiskit.providers.ibmq.runtime.RuntimeProgram.name "qiskit.providers.ibmq.runtime.RuntimeProgram.name")                                                 | Program name.                          |
| [`program_id`](#qiskit.providers.ibmq.runtime.RuntimeProgram.program_id "qiskit.providers.ibmq.runtime.RuntimeProgram.program_id")                               | Program ID.                            |
| [`return_values`](#qiskit.providers.ibmq.runtime.RuntimeProgram.return_values "qiskit.providers.ibmq.runtime.RuntimeProgram.return_values")                      | Program return value definitions.      |
| [`version`](#qiskit.providers.ibmq.runtime.RuntimeProgram.version "qiskit.providers.ibmq.runtime.RuntimeProgram.version")                                        | Program version.                       |

### backend\_requirements

<span id="qiskit.providers.ibmq.runtime.RuntimeProgram.backend_requirements" />

`property backend_requirements`

Backend requirements.

**Return type**

`Dict`

**Returns**

Backend requirements for this program.

### creation\_date

<span id="qiskit.providers.ibmq.runtime.RuntimeProgram.creation_date" />

`property creation_date`

Program creation date.

**Return type**

`str`

**Returns**

Program creation date.

### description

<span id="qiskit.providers.ibmq.runtime.RuntimeProgram.description" />

`property description`

Program description.

**Return type**

`str`

**Returns**

Program description.

### interim\_results

<span id="qiskit.providers.ibmq.runtime.RuntimeProgram.interim_results" />

`property interim_results`

Program interim result definitions.

**Return type**

`List`\[`ProgramResult`]

**Returns**

Interim result definitions for this program.

### is\_public

<span id="qiskit.providers.ibmq.runtime.RuntimeProgram.is_public" />

`property is_public`

Whether the program is visible to all.

**Return type**

`bool`

**Returns**

Whether the program is public.

### max\_execution\_time

<span id="qiskit.providers.ibmq.runtime.RuntimeProgram.max_execution_time" />

`property max_execution_time`

Maximum execution time in seconds.

A program execution exceeding this time will be forcibly terminated.

**Return type**

`int`

**Returns**

Maximum execution time.

### name

<span id="qiskit.providers.ibmq.runtime.RuntimeProgram.name" />

`property name`

Program name.

**Return type**

`str`

**Returns**

Program name.

### parameters

<span id="qiskit.providers.ibmq.runtime.RuntimeProgram.parameters" />

`parameters()`

Program parameter namespace.

You can use the returned namespace to assign parameter values and pass the namespace to [`qiskit.providers.ibmq.runtime.IBMRuntimeService.run()`](qiskit.providers.ibmq.runtime.IBMRuntimeService#run "qiskit.providers.ibmq.runtime.IBMRuntimeService.run"). The namespace allows you to use auto-completion to find program parameters.

Note that each call to this method returns a new namespace instance and does not include any modification to the previous instance.

**Return type**

`ParameterNamespace`

**Returns**

Program parameter namespace.

### program\_id

<span id="qiskit.providers.ibmq.runtime.RuntimeProgram.program_id" />

`property program_id`

Program ID.

**Return type**

`str`

**Returns**

Program ID.

### return\_values

<span id="qiskit.providers.ibmq.runtime.RuntimeProgram.return_values" />

`property return_values`

Program return value definitions.

**Return type**

`List`\[`ProgramResult`]

**Returns**

Return value definitions for this program.

### to\_dict

<span id="qiskit.providers.ibmq.runtime.RuntimeProgram.to_dict" />

`to_dict()`

Convert program metadata to dictionary format.

**Return type**

`Dict`

**Returns**

Program metadata in dictionary format.

### version

<span id="qiskit.providers.ibmq.runtime.RuntimeProgram.version" />

`property version`

Program version.

**Return type**

`str`

**Returns**

Program version.

