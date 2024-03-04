---
title: BackendProperties
description: API reference for qiskit.providers.models.BackendProperties
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.models.BackendProperties
---

# BackendProperties

<span id="qiskit.providers.models.BackendProperties" />

`qiskit.providers.models.BackendProperties(backend_name, backend_version, last_update_date, qubits, gates, general, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.46/qiskit/providers/models/backendproperties.py "view source code")

Bases: [`object`](https://docs.python.org/3/library/functions.html#object "(in Python v3.12)")

Class representing backend properties

This holds backend properties measured by the provider. All properties which are provided optionally. These properties may describe qubits, gates, or other general properties of the backend.

Initialize a BackendProperties instance.

**Parameters**

*   **backend\_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – Backend name.
*   **backend\_version** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – Backend version in the form X.Y.Z.
*   **last\_update\_date** ([*datetime.datetime*](https://docs.python.org/3/library/datetime.html#datetime.datetime "(in Python v3.12)")  *or*[*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – Last date/time that a property was updated. If specified as a `str`, it must be in ISO format.
*   **qubits** ([*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")) – System qubit parameters as a list of lists of [`Nduv`](qiskit.providers.models.Nduv "qiskit.providers.models.Nduv") objects
*   **gates** ([*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")) – System gate parameters as a list of [`GateProperties`](qiskit.providers.models.GateProperties "qiskit.providers.models.GateProperties") objects
*   **general** ([*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")) – General parameters as a list of [`Nduv`](qiskit.providers.models.Nduv "qiskit.providers.models.Nduv") objects
*   **kwargs** – optional additional fields

## Methods

### faulty\_gates

<span id="qiskit.providers.models.BackendProperties.faulty_gates" />

`faulty_gates()`

Return a list of faulty gates.

### faulty\_qubits

<span id="qiskit.providers.models.BackendProperties.faulty_qubits" />

`faulty_qubits()`

Return a list of faulty qubits.

### frequency

<span id="qiskit.providers.models.BackendProperties.frequency" />

`frequency(qubit)`

Return the frequency of the given qubit.

**Parameters**

**qubit** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Qubit for which to return frequency of.

**Returns**

Frequency of the given qubit.

**Return type**

[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")

### from\_dict

<span id="qiskit.providers.models.BackendProperties.from_dict" />

`classmethod from_dict(data)`

Create a new BackendProperties object from a dictionary.

**Parameters**

**data** ([*dict*](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)")) – A dictionary representing the BackendProperties to create. It will be in the same format as output by [`to_dict()`](#qiskit.providers.models.BackendProperties.to_dict "qiskit.providers.models.BackendProperties.to_dict").

**Returns**

The BackendProperties from the input dictionary.

**Return type**

[BackendProperties](#qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties")

### gate\_error

<span id="qiskit.providers.models.BackendProperties.gate_error" />

`gate_error(gate, qubits)`

Return gate error estimates from backend properties.

**Parameters**

*   **gate** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – The gate for which to get the error.
*   **qubits** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")  *|*[*Iterable*](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.12)")*\[*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*]*) – The specific qubits for the gate.

**Returns**

Gate error of the given gate and qubit(s).

**Return type**

[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")

### gate\_length

<span id="qiskit.providers.models.BackendProperties.gate_length" />

`gate_length(gate, qubits)`

Return the duration of the gate in units of seconds.

**Parameters**

*   **gate** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – The gate for which to get the duration.
*   **qubits** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")  *|*[*Iterable*](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.12)")*\[*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*]*) – The specific qubits for the gate.

**Returns**

Gate length of the given gate and qubit(s).

**Return type**

[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")

### gate\_property

<span id="qiskit.providers.models.BackendProperties.gate_property" />

`gate_property(gate, qubits=None, name=None)`

Return the property of the given gate.

**Parameters**

*   **gate** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – Name of the gate.
*   **qubits** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")  *|*[*Iterable*](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.12)")*\[*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*] | None*) – The qubit to find the property for.
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Optionally used to specify which gate property to return.

**Returns**

Gate property as a tuple of the value and the time it was measured.

**Raises**

[**BackendPropertyError**](providers#qiskit.providers.BackendPropertyError "qiskit.providers.BackendPropertyError") – If the property is not found or name is specified but qubit is not.

**Return type**

[*Tuple*](https://docs.python.org/3/library/typing.html#typing.Tuple "(in Python v3.12)")\[[*Any*](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.12)"), [*datetime*](https://docs.python.org/3/library/datetime.html#datetime.datetime "(in Python v3.12)")]

### is\_gate\_operational

<span id="qiskit.providers.models.BackendProperties.is_gate_operational" />

`is_gate_operational(gate, qubits=None)`

Return the operational status of the given gate.

**Parameters**

*   **gate** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – Name of the gate.
*   **qubits** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")  *|*[*Iterable*](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.12)")*\[*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*] | None*) – The qubit to find the operational status for.

**Returns**

Operational status of the given gate. True if the gate is operational, False otherwise.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

### is\_qubit\_operational

<span id="qiskit.providers.models.BackendProperties.is_qubit_operational" />

`is_qubit_operational(qubit)`

Return the operational status of the given qubit.

**Parameters**

**qubit** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Qubit for which to return operational status of.

**Returns**

Operational status of the given qubit.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

### qubit\_property

<span id="qiskit.providers.models.BackendProperties.qubit_property" />

`qubit_property(qubit, name=None)`

Return the property of the given qubit.

**Parameters**

*   **qubit** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – The property to look for.
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Optionally used to specify within the hierarchy which property to return.

**Returns**

Qubit property as a tuple of the value and the time it was measured.

**Raises**

[**BackendPropertyError**](providers#qiskit.providers.BackendPropertyError "qiskit.providers.BackendPropertyError") – If the property is not found.

**Return type**

[*Tuple*](https://docs.python.org/3/library/typing.html#typing.Tuple "(in Python v3.12)")\[[*Any*](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.12)"), [*datetime*](https://docs.python.org/3/library/datetime.html#datetime.datetime "(in Python v3.12)")]

### readout\_error

<span id="qiskit.providers.models.BackendProperties.readout_error" />

`readout_error(qubit)`

Return the readout error of the given qubit.

**Parameters**

**qubit** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Qubit for which to return the readout error of.

**Returns**

Readout error of the given qubit.

**Return type**

[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")

### readout\_length

<span id="qiskit.providers.models.BackendProperties.readout_length" />

`readout_length(qubit)`

Return the readout length \[sec] of the given qubit.

**Parameters**

**qubit** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Qubit for which to return the readout length of.

**Returns**

Readout length of the given qubit.

**Return type**

[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")

### t1

<span id="qiskit.providers.models.BackendProperties.t1" />

`t1(qubit)`

Return the T1 time of the given qubit.

**Parameters**

**qubit** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Qubit for which to return the T1 time of.

**Returns**

T1 time of the given qubit.

**Return type**

[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")

### t2

<span id="qiskit.providers.models.BackendProperties.t2" />

`t2(qubit)`

Return the T2 time of the given qubit.

**Parameters**

**qubit** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Qubit for which to return the T2 time of.

**Returns**

T2 time of the given qubit.

**Return type**

[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")

### to\_dict

<span id="qiskit.providers.models.BackendProperties.to_dict" />

`to_dict()`

Return a dictionary format representation of the BackendProperties.

**Returns**

The dictionary form of the BackendProperties.

**Return type**

[dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)")

