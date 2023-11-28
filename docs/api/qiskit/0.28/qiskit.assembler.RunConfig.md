# qiskit.assembler.RunConfig

<span id="undefined" />

`RunConfig(shots=None, max_credits=None, seed_simulator=None, memory=None, parameter_binds=None, **kwargs)`

Class for Run Configuration.

<span id="undefined" />

### shots

the number of shots

**Type**

int

<span id="undefined" />

### max\_credits

the max\_credits to use on the IBM Q public devices

**Type**

int

<span id="undefined" />

### seed\_simulator

the seed to use in the simulator

**Type**

int

<span id="undefined" />

### memory

whether to request memory from backend (per-shot readouts)

**Type**

bool

<span id="undefined" />

### parameter\_binds

List of parameter bindings

**Type**

list\[dict]

Initialize a RunConfig object

**Parameters**

*   **shots** (*int*) – the number of shots
*   **max\_credits** (*int*) – the max\_credits to use on the IBM Q public devices
*   **seed\_simulator** (*int*) – the seed to use in the simulator
*   **memory** (*bool*) – whether to request memory from backend (per-shot readouts)
*   **parameter\_binds** (*list\[dict]*) – List of parameter bindings
*   **\*\*kwargs** – optional fields

<span id="undefined" />

`__init__(shots=None, max_credits=None, seed_simulator=None, memory=None, parameter_binds=None, **kwargs)`

Initialize a RunConfig object

**Parameters**

*   **shots** (*int*) – the number of shots
*   **max\_credits** (*int*) – the max\_credits to use on the IBM Q public devices
*   **seed\_simulator** (*int*) – the seed to use in the simulator
*   **memory** (*bool*) – whether to request memory from backend (per-shot readouts)
*   **parameter\_binds** (*list\[dict]*) – List of parameter bindings
*   **\*\*kwargs** – optional fields

## Methods

|                                                                                                                     |                                                            |
| ------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [`__init__`](#qiskit.assembler.RunConfig.__init__ "qiskit.assembler.RunConfig.__init__")(\[shots, max\_credits, …]) | Initialize a RunConfig object                              |
| [`from_dict`](#qiskit.assembler.RunConfig.from_dict "qiskit.assembler.RunConfig.from_dict")(data)                   | Create a new RunConfig object from a dictionary.           |
| [`to_dict`](#qiskit.assembler.RunConfig.to_dict "qiskit.assembler.RunConfig.to_dict")()                             | Return a dictionary format representation of the RunConfig |

<span id="undefined" />

`classmethod from_dict(data)`

Create a new RunConfig object from a dictionary.

**Parameters**

**data** (*dict*) – A dictionary representing the RunConfig to create. It will be in the same format as output by [`to_dict()`](#qiskit.assembler.RunConfig.to_dict "qiskit.assembler.RunConfig.to_dict").

**Returns**

The RunConfig from the input dictionary.

**Return type**

[RunConfig](#qiskit.assembler.RunConfig "qiskit.assembler.RunConfig")

<span id="undefined" />

`to_dict()`

Return a dictionary format representation of the RunConfig

**Returns**

The dictionary form of the RunConfig.

**Return type**

dict
