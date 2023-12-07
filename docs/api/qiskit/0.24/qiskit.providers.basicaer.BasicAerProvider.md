<span id="qiskit-providers-basicaer-basicaerprovider" />

# qiskit.providers.basicaer.BasicAerProvider



`BasicAerProvider(*args, **kwargs)`

Provider for Basic Aer backends.



`__init__(*args, **kwargs)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                              |                                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [`__init__`](#qiskit.providers.basicaer.BasicAerProvider.__init__ "qiskit.providers.basicaer.BasicAerProvider.__init__")(\*args, \*\*kwargs) | Initialize self.                                            |
| [`backends`](#qiskit.providers.basicaer.BasicAerProvider.backends "qiskit.providers.basicaer.BasicAerProvider.backends")(\[name, filters])   | Return a list of backends matching the specified filtering. |
| [`get_backend`](#qiskit.providers.basicaer.BasicAerProvider.get_backend "qiskit.providers.basicaer.BasicAerProvider.get_backend")(\[name])   | Return a single backend matching the specified filtering.   |



`backends(name=None, filters=None, **kwargs)`

Return a list of backends matching the specified filtering.

**Parameters**

*   **name** (*str*) – name of the backend.
*   **\*\*kwargs** – dict used for filtering.

**Returns**

**a list of Backends that match the filtering**

criteria.

**Return type**

list\[[BaseBackend](qiskit.providers.BaseBackend#qiskit.providers.BaseBackend "qiskit.providers.BaseBackend")]



`get_backend(name=None, **kwargs)`

Return a single backend matching the specified filtering.

**Parameters**

*   **name** (*str*) – name of the backend.
*   **\*\*kwargs** – dict used for filtering.

**Returns**

a backend matching the filtering.

**Return type**

[BaseBackend](qiskit.providers.BaseBackend#qiskit.providers.BaseBackend "qiskit.providers.BaseBackend")

**Raises**

[**QiskitBackendNotFoundError**](qiskit.providers.QiskitBackendNotFoundError#qiskit.providers.QiskitBackendNotFoundError "qiskit.providers.QiskitBackendNotFoundError") – if no backend could be found or more than one backend matches the filtering criteria.
