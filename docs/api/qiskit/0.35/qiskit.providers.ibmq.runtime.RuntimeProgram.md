# RuntimeProgram[¶](#runtimeprogram "Permalink to this headline")

<span id="undefined" />

`RuntimeProgram(program_name, program_id, description, parameters=None, return_values=None, interim_results=None, max_execution_time=0, backend_requirements=None, creation_date='', update_date='', is_public=False, data='', api_client=None)`

Bases: `object`

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

## Methods

|                                                                                                                                                                                           |                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [`parameters`](qiskit.providers.ibmq.runtime.RuntimeProgram.parameters#qiskit.providers.ibmq.runtime.RuntimeProgram.parameters "qiskit.providers.ibmq.runtime.RuntimeProgram.parameters") | Program parameter namespace.                   |
| [`to_dict`](qiskit.providers.ibmq.runtime.RuntimeProgram.to_dict#qiskit.providers.ibmq.runtime.RuntimeProgram.to_dict "qiskit.providers.ibmq.runtime.RuntimeProgram.to_dict")             | Convert program metadata to dictionary format. |

## Attributes

<span id="undefined" />

### backend\_requirements

Backend requirements.

**Return type**

`Dict`

**Returns**

Backend requirements for this program.

<span id="undefined" />

### creation\_date

Program creation date.

**Return type**

`str`

**Returns**

Program creation date.

<span id="undefined" />

### data

Program data.

**Return type**

`str`

**Returns**

Program data.

**Raises**

**IBMQNotAuthorizedError** – if user is not the program author.

<span id="undefined" />

### description

Program description.

**Return type**

`str`

**Returns**

Program description.

<span id="undefined" />

### interim\_results

Program interim result definitions.

**Return type**

`Dict`

**Returns**

Interim result definitions for this program.

<span id="undefined" />

### is\_public

Whether the program is visible to all.

**Return type**

`bool`

**Returns**

Whether the program is public.

<span id="undefined" />

### max\_execution\_time

Maximum execution time in seconds.

A program execution exceeding this time will be forcibly terminated.

**Return type**

`int`

**Returns**

Maximum execution time.

<span id="undefined" />

### name

Program name.

**Return type**

`str`

**Returns**

Program name.

<span id="undefined" />

### program\_id

Program ID.

**Return type**

`str`

**Returns**

Program ID.

<span id="undefined" />

### return\_values

Program return value definitions.

**Return type**

`Dict`

**Returns**

Return value definitions for this program.

<span id="undefined" />

### update\_date

Program last updated date.

**Return type**

`str`

**Returns**

Program last updated date.
