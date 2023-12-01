<span id="qiskit-providers-models-gateconfig" />

# qiskit.providers.models.GateConfig

<span id="undefined" />

`GateConfig(name, parameters, qasm_def, coupling_map=None, latency_map=None, conditional=None, description=None)`

Class representing a Gate Configuration

<span id="undefined" />

### name

the gate name as it will be referred to in Qasm.

<span id="undefined" />

### parameters

variable names for the gate parameters (if any).

<span id="undefined" />

### qasm\_def

definition of this gate in terms of Qasm primitives U and CX.

Initialize a GateConfig object

**Parameters**

*   **name** (*str*) – the gate name as it will be referred to in Qasm.
*   **parameters** (*list*) – variable names for the gate parameters (if any) as a list of strings.
*   **qasm\_def** (*str*) – definition of this gate in terms of Qasm primitives U and CX.
*   **coupling\_map** (*list*) – An optional coupling map for the gate. In the form of a list of lists of integers representing the qubit groupings which are coupled by this gate.
*   **latency\_map** (*list*) – An optional map of latency for the gate. In the the form of a list of lists of integers of either 0 or 1 representing an array of dimension len(coupling\_map) X n\_registers that specifies the register latency (1: fast, 0: slow) conditional operations on the gate
*   **conditional** (*bool*) – Optionally specify whether this gate supports conditional operations (true/false). If this is not specified, then the gate inherits the conditional property of the backend.
*   **description** (*str*) – Description of the gate operation

<span id="undefined" />

`__init__(name, parameters, qasm_def, coupling_map=None, latency_map=None, conditional=None, description=None)`

Initialize a GateConfig object

**Parameters**

*   **name** (*str*) – the gate name as it will be referred to in Qasm.
*   **parameters** (*list*) – variable names for the gate parameters (if any) as a list of strings.
*   **qasm\_def** (*str*) – definition of this gate in terms of Qasm primitives U and CX.
*   **coupling\_map** (*list*) – An optional coupling map for the gate. In the form of a list of lists of integers representing the qubit groupings which are coupled by this gate.
*   **latency\_map** (*list*) – An optional map of latency for the gate. In the the form of a list of lists of integers of either 0 or 1 representing an array of dimension len(coupling\_map) X n\_registers that specifies the register latency (1: fast, 0: slow) conditional operations on the gate
*   **conditional** (*bool*) – Optionally specify whether this gate supports conditional operations (true/false). If this is not specified, then the gate inherits the conditional property of the backend.
*   **description** (*str*) – Description of the gate operation

## Methods

|                                                                                                                                             |                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [`__init__`](#qiskit.providers.models.GateConfig.__init__ "qiskit.providers.models.GateConfig.__init__")(name, parameters, qasm\_def\[, …]) | Initialize a GateConfig object                               |
| [`from_dict`](#qiskit.providers.models.GateConfig.from_dict "qiskit.providers.models.GateConfig.from_dict")(data)                           | Create a new GateConfig object from a dictionary.            |
| [`to_dict`](#qiskit.providers.models.GateConfig.to_dict "qiskit.providers.models.GateConfig.to_dict")()                                     | Return a dictionary format representation of the GateConfig. |

<span id="undefined" />

`classmethod from_dict(data)`

Create a new GateConfig object from a dictionary.

**Parameters**

**data** (*dict*) – A dictionary representing the GateConfig to create. It will be in the same format as output by [`to_dict()`](#qiskit.providers.models.GateConfig.to_dict "qiskit.providers.models.GateConfig.to_dict").

**Returns**

The GateConfig from the input dictionary.

**Return type**

[GateConfig](#qiskit.providers.models.GateConfig "qiskit.providers.models.GateConfig")

<span id="undefined" />

`to_dict()`

Return a dictionary format representation of the GateConfig.

**Returns**

The dictionary form of the GateConfig.

**Return type**

dict
