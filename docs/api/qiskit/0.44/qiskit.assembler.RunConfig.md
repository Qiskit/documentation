---
title: RunConfig
description: API reference for qiskit.assembler.RunConfig
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.assembler.RunConfig
---

# RunConfig

<span id="qiskit.assembler.RunConfig" />

`qiskit.assembler.RunConfig(shots=None, seed_simulator=None, memory=None, parameter_binds=None, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/assembler/run_config.py "view source code")

Bases: [`SimpleNamespace`](https://docs.python.org/3/library/types.html#types.SimpleNamespace "(in Python v3.12)")

Class for Run Configuration.

<span id="qiskit.assembler.RunConfig.shots" />

### shots

the number of shots

**Type**

[int](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")

<span id="qiskit.assembler.RunConfig.seed_simulator" />

### seed\_simulator

the seed to use in the simulator

**Type**

[int](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")

<span id="qiskit.assembler.RunConfig.memory" />

### memory

whether to request memory from backend (per-shot readouts)

**Type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

<span id="qiskit.assembler.RunConfig.parameter_binds" />

### parameter\_binds

List of parameter bindings

**Type**

[list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")\[[dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)")]

Initialize a RunConfig object

**Parameters**

*   **shots** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – the number of shots
*   **seed\_simulator** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – the seed to use in the simulator
*   **memory** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – whether to request memory from backend (per-shot readouts)
*   **parameter\_binds** ([*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")*\[*[*dict*](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)")*]*) – List of parameter bindings
*   **\*\*kwargs** – optional fields

## Methods

### from\_dict

<span id="qiskit.assembler.RunConfig.from_dict" />

`classmethod from_dict(data)`

Create a new RunConfig object from a dictionary.

**Parameters**

**data** ([*dict*](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)")) – A dictionary representing the RunConfig to create. It will be in the same format as output by [`to_dict()`](#qiskit.assembler.RunConfig.to_dict "qiskit.assembler.RunConfig.to_dict").

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

[dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)")

