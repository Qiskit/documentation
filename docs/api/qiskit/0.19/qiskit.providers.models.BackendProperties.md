---
title: BackendProperties
description: API reference for qiskit.providers.models.BackendProperties
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.models.BackendProperties
---

# BackendProperties

<span id="qiskit.providers.models.BackendProperties" />

`BackendProperties(backend_name, backend_version, last_update_date, qubits, gates, general, **kwargs)`

Class representing backend properties

This holds backend properties measured by the provider. All properties which are provided optionally. These properties may describe qubits, gates, or other general propeties of the backend.

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

|                                                                                                                                                                           |                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [`BackendProperties.frequency`](qiskit.providers.models.BackendProperties.frequency "qiskit.providers.models.BackendProperties.frequency")(qubit)                         | Return the frequency of the given qubit.                            |
| [`BackendProperties.from_dict`](qiskit.providers.models.BackendProperties.from_dict "qiskit.providers.models.BackendProperties.from_dict")(data)                          | Create a new Gate object from a dictionary.                         |
| [`BackendProperties.gate_error`](qiskit.providers.models.BackendProperties.gate_error "qiskit.providers.models.BackendProperties.gate_error")(gate, qubits)               | Return gate error estimates from backend properties.                |
| [`BackendProperties.gate_length`](qiskit.providers.models.BackendProperties.gate_length "qiskit.providers.models.BackendProperties.gate_length")(gate, qubits)            | Return the duration of the gate in units of seconds.                |
| [`BackendProperties.gate_property`](qiskit.providers.models.BackendProperties.gate_property "qiskit.providers.models.BackendProperties.gate_property")(gate\[, …])        | Return the property of the given gate.                              |
| [`BackendProperties.qubit_property`](qiskit.providers.models.BackendProperties.qubit_property "qiskit.providers.models.BackendProperties.qubit_property")(qubit\[, name]) | Return the property of the given qubit.                             |
| [`BackendProperties.readout_error`](qiskit.providers.models.BackendProperties.readout_error "qiskit.providers.models.BackendProperties.readout_error")(qubit)             | Return the readout error of the given qubit.                        |
| [`BackendProperties.t1`](qiskit.providers.models.BackendProperties.t1 "qiskit.providers.models.BackendProperties.t1")(qubit)                                              | Return the T1 time of the given qubit.                              |
| [`BackendProperties.t2`](qiskit.providers.models.BackendProperties.t2 "qiskit.providers.models.BackendProperties.t2")(qubit)                                              | Return the T2 time of the given qubit.                              |
| [`BackendProperties.to_dict`](qiskit.providers.models.BackendProperties.to_dict "qiskit.providers.models.BackendProperties.to_dict")()                                    | Return a dictionary format representation of the BackendProperties. |

