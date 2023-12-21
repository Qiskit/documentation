# qiskit.providers.aer.pulse.PulseSystemModel.from\_backend

`classmethod PulseSystemModel.from_backend(backend, subsystem_list=None)`

Returns a PulseSystemModel constructed from an OpenPulse enabled backend object.

**Parameters**

*   **backend** ([*Backend*](qiskit.providers.Backend#qiskit.providers.Backend "qiskit.providers.Backend")) – backend object to draw information from.
*   **subsystem\_list** (*list*) – a list of ints for which qubits to include in the model.

**Returns**

the PulseSystemModel constructed from the backend.

**Return type**

[PulseSystemModel](qiskit.providers.aer.pulse.PulseSystemModel#qiskit.providers.aer.pulse.PulseSystemModel "qiskit.providers.aer.pulse.PulseSystemModel")

**Raises**

[**AerError**](qiskit.providers.aer.AerError#qiskit.providers.aer.AerError "qiskit.providers.aer.AerError") – If channel or u\_channel\_lo are invalid.
