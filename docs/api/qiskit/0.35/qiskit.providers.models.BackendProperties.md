# BackendProperties[¶](#backendproperties "Permalink to this headline")

<span id="undefined" />

`BackendProperties(backend_name, backend_version, last_update_date, qubits, gates, general, **kwargs)`

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

|                                                                                                                                                                                                                          |                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| [`faulty_gates`](qiskit.providers.models.BackendProperties.faulty_gates#qiskit.providers.models.BackendProperties.faulty_gates "qiskit.providers.models.BackendProperties.faulty_gates")                                 | Return a list of faulty gates.                                      |
| [`faulty_qubits`](qiskit.providers.models.BackendProperties.faulty_qubits#qiskit.providers.models.BackendProperties.faulty_qubits "qiskit.providers.models.BackendProperties.faulty_qubits")                             | Return a list of faulty qubits.                                     |
| [`frequency`](qiskit.providers.models.BackendProperties.frequency#qiskit.providers.models.BackendProperties.frequency "qiskit.providers.models.BackendProperties.frequency")                                             | Return the frequency of the given qubit.                            |
| [`from_dict`](qiskit.providers.models.BackendProperties.from_dict#qiskit.providers.models.BackendProperties.from_dict "qiskit.providers.models.BackendProperties.from_dict")                                             | Create a new BackendProperties object from a dictionary.            |
| [`gate_error`](qiskit.providers.models.BackendProperties.gate_error#qiskit.providers.models.BackendProperties.gate_error "qiskit.providers.models.BackendProperties.gate_error")                                         | Return gate error estimates from backend properties.                |
| [`gate_length`](qiskit.providers.models.BackendProperties.gate_length#qiskit.providers.models.BackendProperties.gate_length "qiskit.providers.models.BackendProperties.gate_length")                                     | Return the duration of the gate in units of seconds.                |
| [`gate_property`](qiskit.providers.models.BackendProperties.gate_property#qiskit.providers.models.BackendProperties.gate_property "qiskit.providers.models.BackendProperties.gate_property")                             | Return the property of the given gate.                              |
| [`is_gate_operational`](qiskit.providers.models.BackendProperties.is_gate_operational#qiskit.providers.models.BackendProperties.is_gate_operational "qiskit.providers.models.BackendProperties.is_gate_operational")     | Return the operational status of the given gate.                    |
| [`is_qubit_operational`](qiskit.providers.models.BackendProperties.is_qubit_operational#qiskit.providers.models.BackendProperties.is_qubit_operational "qiskit.providers.models.BackendProperties.is_qubit_operational") | Return the operational status of the given qubit.                   |
| [`qubit_property`](qiskit.providers.models.BackendProperties.qubit_property#qiskit.providers.models.BackendProperties.qubit_property "qiskit.providers.models.BackendProperties.qubit_property")                         | Return the property of the given qubit.                             |
| [`readout_error`](qiskit.providers.models.BackendProperties.readout_error#qiskit.providers.models.BackendProperties.readout_error "qiskit.providers.models.BackendProperties.readout_error")                             | Return the readout error of the given qubit.                        |
| [`readout_length`](qiskit.providers.models.BackendProperties.readout_length#qiskit.providers.models.BackendProperties.readout_length "qiskit.providers.models.BackendProperties.readout_length")                         | Return the readout length \[sec] of the given qubit.                |
| [`t1`](qiskit.providers.models.BackendProperties.t1#qiskit.providers.models.BackendProperties.t1 "qiskit.providers.models.BackendProperties.t1")                                                                         | Return the T1 time of the given qubit.                              |
| [`t2`](qiskit.providers.models.BackendProperties.t2#qiskit.providers.models.BackendProperties.t2 "qiskit.providers.models.BackendProperties.t2")                                                                         | Return the T2 time of the given qubit.                              |
| [`to_dict`](qiskit.providers.models.BackendProperties.to_dict#qiskit.providers.models.BackendProperties.to_dict "qiskit.providers.models.BackendProperties.to_dict")                                                     | Return a dictionary format representation of the BackendProperties. |
