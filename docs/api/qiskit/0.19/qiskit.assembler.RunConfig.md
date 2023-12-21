---
title: RunConfig
description: API reference for qiskit.assembler.RunConfig
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.assembler.RunConfig
---

# RunConfig

<span id="qiskit.assembler.RunConfig" />

`RunConfig(shots=None, max_credits=None, seed_simulator=None, memory=None, parameter_binds=None, **kwargs)`

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

## Methods

|                                                                                                            |                                                            |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [`RunConfig.from_dict`](qiskit.assembler.RunConfig.from_dict "qiskit.assembler.RunConfig.from_dict")(data) | Create a new RunConfig object from a dictionary.           |
| [`RunConfig.to_dict`](qiskit.assembler.RunConfig.to_dict "qiskit.assembler.RunConfig.to_dict")()           | Return a dictionary format representation of the RunConfig |

