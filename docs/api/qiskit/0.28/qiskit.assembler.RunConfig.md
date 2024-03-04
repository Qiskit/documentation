---
title: RunConfig
description: API reference for qiskit.assembler.RunConfig
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.assembler.RunConfig
---

# qiskit.assembler.RunConfig

<span id="qiskit.assembler.RunConfig" />

`RunConfig(shots=None, max_credits=None, seed_simulator=None, memory=None, parameter_binds=None, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/assembler/run_config.py "view source code")

Class for Run Configuration.

<span id="qiskit.assembler.RunConfig.shots" />

### shots

the number of shots

**Type**

int

<span id="qiskit.assembler.RunConfig.max_credits" />

### max\_credits

the max\_credits to use on the IBM Q public devices

**Type**

int

<span id="qiskit.assembler.RunConfig.seed_simulator" />

### seed\_simulator

the seed to use in the simulator

**Type**

int

<span id="qiskit.assembler.RunConfig.memory" />

### memory

whether to request memory from backend (per-shot readouts)

**Type**

bool

<span id="qiskit.assembler.RunConfig.parameter_binds" />

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

### \_\_init\_\_

<span id="qiskit.assembler.RunConfig.__init__" />

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

### from\_dict

<span id="qiskit.assembler.RunConfig.from_dict" />

`classmethod from_dict(data)`

Create a new RunConfig object from a dictionary.

**Parameters**

**data** (*dict*) – A dictionary representing the RunConfig to create. It will be in the same format as output by [`to_dict()`](#qiskit.assembler.RunConfig.to_dict "qiskit.assembler.RunConfig.to_dict").

**Returns**

The RunConfig from the input dictionary.

**Return type**

[RunConfig](#qiskit.assembler.RunConfig "qiskit.assembler.RunConfig")

### to\_dict

<span id="qiskit.assembler.RunConfig.to_dict" />

`to_dict()`

Return a dictionary format representation of the RunConfig

**Returns**

The dictionary form of the RunConfig.

**Return type**

dict

