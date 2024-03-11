---
title: RuntimeProgram
description: API reference for qiskit.providers.ibmq.runtime.RuntimeProgram
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.ibmq.runtime.RuntimeProgram
---

# qiskit.providers.ibmq.runtime.RuntimeProgram

<span id="qiskit.providers.ibmq.runtime.RuntimeProgram" />

`RuntimeProgram(program_name, program_id, description, parameters=None, return_values=None, interim_results=None, max_execution_time=0, version='0', backend_requirements=None, creation_date='')` [GitHub](https://github.com/qiskit/qiskit-ibmq-provider/tree/stable/0.13/qiskit/providers/ibmq/runtime/runtime_program.py "view source code")

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
print(f"Program {program.name} takes parameters {program.parameters}")
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

### \_\_init\_\_

<span id="qiskit.providers.ibmq.runtime.RuntimeProgram.__init__" />

`__init__(program_name, program_id, description, parameters=None, return_values=None, interim_results=None, max_execution_time=0, version='0', backend_requirements=None, creation_date='')`

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

## Methods

|                                                                                                                                                                       |                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [`__init__`](#qiskit.providers.ibmq.runtime.RuntimeProgram.__init__ "qiskit.providers.ibmq.runtime.RuntimeProgram.__init__")(program\_name, program\_id, description) | RuntimeProgram constructor.                    |
| [`to_dict`](#qiskit.providers.ibmq.runtime.RuntimeProgram.to_dict "qiskit.providers.ibmq.runtime.RuntimeProgram.to_dict")()                                           | Convert program metadata to dictionary format. |

## Attributes

|                                                                                                                                                                  |                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`backend_requirements`](#qiskit.providers.ibmq.runtime.RuntimeProgram.backend_requirements "qiskit.providers.ibmq.runtime.RuntimeProgram.backend_requirements") | Backend requirements.               |
| [`creation_date`](#qiskit.providers.ibmq.runtime.RuntimeProgram.creation_date "qiskit.providers.ibmq.runtime.RuntimeProgram.creation_date")                      | Program creation date.              |
| [`description`](#qiskit.providers.ibmq.runtime.RuntimeProgram.description "qiskit.providers.ibmq.runtime.RuntimeProgram.description")                            | Program description.                |
| [`interim_results`](#qiskit.providers.ibmq.runtime.RuntimeProgram.interim_results "qiskit.providers.ibmq.runtime.RuntimeProgram.interim_results")                | Program interim result definitions. |
| [`max_execution_time`](#qiskit.providers.ibmq.runtime.RuntimeProgram.max_execution_time "qiskit.providers.ibmq.runtime.RuntimeProgram.max_execution_time")       | Maximum execution time in seconds.  |
| [`name`](#qiskit.providers.ibmq.runtime.RuntimeProgram.name "qiskit.providers.ibmq.runtime.RuntimeProgram.name")                                                 | Program name.                       |
| [`parameters`](#qiskit.providers.ibmq.runtime.RuntimeProgram.parameters "qiskit.providers.ibmq.runtime.RuntimeProgram.parameters")                               | Program parameter definitions.      |
| [`program_id`](#qiskit.providers.ibmq.runtime.RuntimeProgram.program_id "qiskit.providers.ibmq.runtime.RuntimeProgram.program_id")                               | Program ID.                         |
| [`return_values`](#qiskit.providers.ibmq.runtime.RuntimeProgram.return_values "qiskit.providers.ibmq.runtime.RuntimeProgram.return_values")                      | Program return value definitions.   |
| [`version`](#qiskit.providers.ibmq.runtime.RuntimeProgram.version "qiskit.providers.ibmq.runtime.RuntimeProgram.version")                                        | Program version.                    |

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

`property parameters`

Program parameter definitions.

**Return type**

`List`\[`ProgramParameter`]

**Returns**

Parameter definitions for this program.

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

