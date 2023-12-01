# qiskit.providers.ibmq.runtime.RuntimeProgram

<span id="undefined" />

`RuntimeProgram(program_name, program_id, description, parameters=None, return_values=None, interim_results=None, max_execution_time=0, version='0', backend_requirements=None, creation_date='')`

Class representing program metadata.

This class contains the metadata describing a program, such as its name, ID, description, etc.

You can use the [`IBMRuntimeService`](qiskit.providers.ibmq.runtime.IBMRuntimeService#qiskit.providers.ibmq.runtime.IBMRuntimeService "qiskit.providers.ibmq.runtime.IBMRuntimeService") to retrieve the metadata of a specific program or all programs. For example:

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

<span id="undefined" />

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

<span id="undefined" />

`property backend_requirements`

Backend requirements.

**Return type**

`Dict`

**Returns**

Backend requirements for this program.

<span id="undefined" />

`property creation_date`

Program creation date.

**Return type**

`str`

**Returns**

Program creation date.

<span id="undefined" />

`property description`

Program description.

**Return type**

`str`

**Returns**

Program description.

<span id="undefined" />

`property interim_results`

Program interim result definitions.

**Return type**

`List`\[`ProgramResult`]

**Returns**

Interim result definitions for this program.

<span id="undefined" />

`property max_execution_time`

Maximum execution time in seconds.

A program execution exceeding this time will be forcibly terminated.

**Return type**

`int`

**Returns**

Maximum execution time.

<span id="undefined" />

`property name`

Program name.

**Return type**

`str`

**Returns**

Program name.

<span id="undefined" />

`property parameters`

Program parameter definitions.

**Return type**

`List`\[`ProgramParameter`]

**Returns**

Parameter definitions for this program.

<span id="undefined" />

`property program_id`

Program ID.

**Return type**

`str`

**Returns**

Program ID.

<span id="undefined" />

`property return_values`

Program return value definitions.

**Return type**

`List`\[`ProgramResult`]

**Returns**

Return value definitions for this program.

<span id="undefined" />

`to_dict()`

Convert program metadata to dictionary format.

**Return type**

`Dict`

**Returns**

Program metadata in dictionary format.

<span id="undefined" />

`property version`

Program version.

**Return type**

`str`

**Returns**

Program version.
