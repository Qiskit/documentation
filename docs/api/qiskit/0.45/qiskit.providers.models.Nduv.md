---
title: Nduv
description: API reference for qiskit.providers.models.Nduv
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.models.Nduv
---

# Nduv

<span id="qiskit.providers.models.Nduv" />

`qiskit.providers.models.Nduv(date, name, unit, value)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.45/qiskit/providers/models/backendproperties.py "view source code")

Bases: [`object`](https://docs.python.org/3/library/functions.html#object "(in Python v3.12)")

Class representing name-date-unit-value

<span id="qiskit.providers.models.Nduv.date" />

### date

date.

<span id="qiskit.providers.models.Nduv.name" />

### name

name.

<span id="qiskit.providers.models.Nduv.unit" />

### unit

unit.

<span id="qiskit.providers.models.Nduv.value" />

### value

value.

Initialize a new name-date-unit-value object

**Parameters**

*   **date** ([*datetime.datetime*](https://docs.python.org/3/library/datetime.html#datetime.datetime "(in Python v3.12)")) – Date field
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – Name field
*   **unit** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – Nduv unit
*   **value** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – The value of the Nduv

## Methods

### from\_dict

<span id="qiskit.providers.models.Nduv.from_dict" />

`classmethod from_dict(data)`

Create a new Nduv object from a dictionary.

**Parameters**

**data** ([*dict*](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)")) – A dictionary representing the Nduv to create. It will be in the same format as output by [`to_dict()`](#qiskit.providers.models.Nduv.to_dict "qiskit.providers.models.Nduv.to_dict").

**Returns**

The Nduv from the input dictionary.

**Return type**

[Nduv](#qiskit.providers.models.Nduv "qiskit.providers.models.Nduv")

### to\_dict

<span id="qiskit.providers.models.Nduv.to_dict" />

`to_dict()`

Return a dictionary format representation of the object.

**Returns**

The dictionary form of the Nduv.

**Return type**

[dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)")

