---
title: BackendProperties
description: API reference for qiskit.providers.models.BackendProperties
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.models.BackendProperties
---

# BackendProperties

<span id="qiskit.providers.models.BackendProperties" />

`BackendProperties(backend_name, backend_version, last_update_date, qubits, gates, general, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/providers/models/backendproperties.py "view source code")

Bases: `object`

Class representing backend properties

This holds backend properties measured by the provider. All properties which are provided optionally. These properties may describe qubits, gates, or other general properties of the backend.

Initialize a BackendProperties instance.

**Parameters**

*   **backend\_name** (*str*) – Backend name.
*   **backend\_version** (*str*) – Backend version in the form X.Y.Z.
*   **last\_update\_date** (*datetime or str*) – Last date/time that a property was updated. If specified as a `str`, it must be in ISO format.
*   **qubits** (*list*) – System qubit parameters as a list of lists of `Nduv` objects
*   **gates** (*list*) – System gate parameters as a list of `Gate` objects
*   **general** (*list*) – General parameters as a list of `Nduv` objects
*   **kwargs** – optional additional fields

## Methods

<span id="qiskit-providers-models-backendproperties-faulty-gates" />

### faulty\_gates

<span id="qiskit.providers.models.BackendProperties.faulty_gates" />

`BackendProperties.faulty_gates()`

Return a list of faulty gates.

<span id="qiskit-providers-models-backendproperties-faulty-qubits" />

### faulty\_qubits

<span id="qiskit.providers.models.BackendProperties.faulty_qubits" />

`BackendProperties.faulty_qubits()`

Return a list of faulty qubits.

<span id="qiskit-providers-models-backendproperties-frequency" />

### frequency

<span id="qiskit.providers.models.BackendProperties.frequency" />

`BackendProperties.frequency(qubit)`

Return the frequency of the given qubit.

**Parameters**

**qubit** (*int*) – Qubit for which to return frequency of.

**Returns**

Frequency of the given qubit.

**Return type**

float

<span id="qiskit-providers-models-backendproperties-from-dict" />

### from\_dict

<span id="qiskit.providers.models.BackendProperties.from_dict" />

`classmethod BackendProperties.from_dict(data)`

Create a new BackendProperties object from a dictionary.

**Parameters**

**data** (*dict*) – A dictionary representing the BackendProperties to create. It will be in the same format as output by [`to_dict()`](qiskit.providers.models.BackendProperties#to_dict "qiskit.providers.models.BackendProperties.to_dict").

**Returns**

**The BackendProperties from the input**

dictionary.

**Return type**

[BackendProperties](qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties")

<span id="qiskit-providers-models-backendproperties-gate-error" />

### gate\_error

<span id="qiskit.providers.models.BackendProperties.gate_error" />

`BackendProperties.gate_error(gate, qubits)`

Return gate error estimates from backend properties.

**Parameters**

*   **gate** (*str*) – The gate for which to get the error.
*   **qubits** (*int | Iterable\[int]*) – The specific qubits for the gate.

**Returns**

Gate error of the given gate and qubit(s).

**Return type**

float

<span id="qiskit-providers-models-backendproperties-gate-length" />

### gate\_length

<span id="qiskit.providers.models.BackendProperties.gate_length" />

`BackendProperties.gate_length(gate, qubits)`

Return the duration of the gate in units of seconds.

**Parameters**

*   **gate** (*str*) – The gate for which to get the duration.
*   **qubits** (*int | Iterable\[int]*) – The specific qubits for the gate.

**Returns**

Gate length of the given gate and qubit(s).

**Return type**

float

<span id="qiskit-providers-models-backendproperties-gate-property" />

### gate\_property

<span id="qiskit.providers.models.BackendProperties.gate_property" />

`BackendProperties.gate_property(gate, qubits=None, name=None)`

Return the property of the given gate.

**Parameters**

*   **gate** (*str*) – Name of the gate.
*   **qubits** (*int | Iterable\[int] | None*) – The qubit to find the property for.
*   **name** (*str | None*) – Optionally used to specify which gate property to return.

**Returns**

Gate property as a tuple of the value and the time it was measured.

**Raises**

[**BackendPropertyError**](qiskit.providers.BackendPropertyError "qiskit.providers.BackendPropertyError") – If the property is not found or name is specified but qubit is not.

**Return type**

*Tuple*\[*Any*, *datetime*]

<span id="qiskit-providers-models-backendproperties-is-gate-operational" />

### is\_gate\_operational

<span id="qiskit.providers.models.BackendProperties.is_gate_operational" />

`BackendProperties.is_gate_operational(gate, qubits=None)`

Return the operational status of the given gate.

**Parameters**

*   **gate** (*str*) – Name of the gate.
*   **qubits** (*int | Iterable\[int] | None*) – The qubit to find the operational status for.

**Returns**

Operational status of the given gate. True if the gate is operational, False otherwise.

**Return type**

bool

<span id="qiskit-providers-models-backendproperties-is-qubit-operational" />

### is\_qubit\_operational

<span id="qiskit.providers.models.BackendProperties.is_qubit_operational" />

`BackendProperties.is_qubit_operational(qubit)`

Return the operational status of the given qubit.

**Parameters**

**qubit** (*int*) – Qubit for which to return operational status of.

**Returns**

Operational status of the given qubit.

**Return type**

bool

<span id="qiskit-providers-models-backendproperties-qubit-property" />

### qubit\_property

<span id="qiskit.providers.models.BackendProperties.qubit_property" />

`BackendProperties.qubit_property(qubit, name=None)`

Return the property of the given qubit.

**Parameters**

*   **qubit** (*int*) – The property to look for.
*   **name** (*str | None*) – Optionally used to specify within the hierarchy which property to return.

**Returns**

Qubit property as a tuple of the value and the time it was measured.

**Raises**

[**BackendPropertyError**](qiskit.providers.BackendPropertyError "qiskit.providers.BackendPropertyError") – If the property is not found.

**Return type**

*Tuple*\[*Any*, *datetime*]

<span id="qiskit-providers-models-backendproperties-readout-error" />

### readout\_error

<span id="qiskit.providers.models.BackendProperties.readout_error" />

`BackendProperties.readout_error(qubit)`

Return the readout error of the given qubit.

**Parameters**

**qubit** (*int*) – Qubit for which to return the readout error of.

**Returns**

Readout error of the given qubit.

**Return type**

float

<span id="qiskit-providers-models-backendproperties-readout-length" />

### readout\_length

<span id="qiskit.providers.models.BackendProperties.readout_length" />

`BackendProperties.readout_length(qubit)`

Return the readout length \[sec] of the given qubit.

**Parameters**

**qubit** (*int*) – Qubit for which to return the readout length of.

**Returns**

Readout length of the given qubit.

**Return type**

float

<span id="qiskit-providers-models-backendproperties-t1" />

### t1

<span id="qiskit.providers.models.BackendProperties.t1" />

`BackendProperties.t1(qubit)`

Return the T1 time of the given qubit.

**Parameters**

**qubit** (*int*) – Qubit for which to return the T1 time of.

**Returns**

T1 time of the given qubit.

**Return type**

float

<span id="qiskit-providers-models-backendproperties-t2" />

### t2

<span id="qiskit.providers.models.BackendProperties.t2" />

`BackendProperties.t2(qubit)`

Return the T2 time of the given qubit.

**Parameters**

**qubit** (*int*) – Qubit for which to return the T2 time of.

**Returns**

T2 time of the given qubit.

**Return type**

float

<span id="qiskit-providers-models-backendproperties-to-dict" />

### to\_dict

<span id="qiskit.providers.models.BackendProperties.to_dict" />

`BackendProperties.to_dict()`

Return a dictionary format representation of the BackendProperties.

**Returns**

The dictionary form of the BackendProperties.

**Return type**

dict

