# qiskit.transpiler.PassManagerConfig.from\_backend

`classmethod PassManagerConfig.from_backend(backend, **pass_manager_options)`

Construct a configuration based on a backend and user input.

This method automatically gererates a PassManagerConfig object based on the backend’s features. User options can be used to overwrite the configuration.

**Parameters**

*   **backend** ([*BackendV1*](qiskit.providers.BackendV1#qiskit.providers.BackendV1 "qiskit.providers.BackendV1")) – The backend that provides the configuration.
*   **pass\_manager\_options** – User-defined option-value pairs.

**Returns**

The configuration generated based on the arguments.

**Return type**

[PassManagerConfig](qiskit.transpiler.PassManagerConfig#qiskit.transpiler.PassManagerConfig "qiskit.transpiler.PassManagerConfig")

**Raises**

**AttributeError** – If the backend does not support a configuration() method.
