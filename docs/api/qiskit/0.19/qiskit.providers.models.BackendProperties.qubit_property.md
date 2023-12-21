---
title: qubit_property
description: API reference for qiskit.providers.models.BackendProperties.qubit_property
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.models.BackendProperties.qubit_property
---

# qubit\_property

<span id="qiskit.providers.models.BackendProperties.qubit_property" />

`BackendProperties.qubit_property(qubit, name=None)`

Return the property of the given qubit.

**Parameters**

*   **qubit** (`int`) – The property to look for.
*   **name** (`Optional`\[`str`]) – Optionally used to specify within the hierarchy which property to return.

**Return type**

`Tuple`\[`Any`, `datetime`]

**Returns**

Qubit property as a tuple of the value and the time it was measured.

**Raises**

[**BackendPropertyError**](qiskit.providers.BackendPropertyError "qiskit.providers.BackendPropertyError") – If the property is not found.

