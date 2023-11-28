# RunConfig

<span id="undefined" />

`RunConfig(shots=None, max_credits=None, seed_simulator=None, memory=None, parameter_binds=None, **kwargs)`

Bases: `types.SimpleNamespace`

Class for Run Configuration.

<span id="undefined" />

### shots

the number of shots

**Type**

int

<span id="undefined" />

### max\_credits

DEPRECATED This parameter is deprecated as of Qiskit Terra 0.20.0, and will be removed in a future release. This parameter has no effect on modern IBM Quantum systems, and no alternative is necessary.

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
*   **max\_credits** (*int*) – DEPRECATED the max\_credits to use on the IBM Q public devices
*   **seed\_simulator** (*int*) – the seed to use in the simulator
*   **memory** (*bool*) – whether to request memory from backend (per-shot readouts)
*   **parameter\_binds** (*list\[dict]*) – List of parameter bindings
*   **\*\*kwargs** – optional fields

## Methods

|                                                                                                                                 |                                                            |
| ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [`from_dict`](qiskit.assembler.RunConfig.from_dict#qiskit.assembler.RunConfig.from_dict "qiskit.assembler.RunConfig.from_dict") | Create a new RunConfig object from a dictionary.           |
| [`to_dict`](qiskit.assembler.RunConfig.to_dict#qiskit.assembler.RunConfig.to_dict "qiskit.assembler.RunConfig.to_dict")         | Return a dictionary format representation of the RunConfig |
