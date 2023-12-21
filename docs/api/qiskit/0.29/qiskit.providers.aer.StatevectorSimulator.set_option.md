# qiskit.providers.aer.StatevectorSimulator.set\_option

`StatevectorSimulator.set_option(key, value)`

Special handling for setting backend options.

This method should be extended by sub classes to update special option values.

**Parameters**

*   **key** (*str*) – key to update
*   **value** (*any*) – value to update.

**Raises**

[**AerError**](qiskit.providers.aer.AerError#qiskit.providers.aer.AerError "qiskit.providers.aer.AerError") – if key is ‘method’ and val isn’t in available methods.
