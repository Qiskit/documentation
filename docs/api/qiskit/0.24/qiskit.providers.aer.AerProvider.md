<span id="qiskit-providers-aer-aerprovider" />

# qiskit.providers.aer.AerProvider

`AerProvider(*args, **kwargs)`

Provider for Qiskit Aer backends.

`__init__(*args, **kwargs)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                          |                                                             |
| ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| [`__init__`](#qiskit.providers.aer.AerProvider.__init__ "qiskit.providers.aer.AerProvider.__init__")(\*args, \*\*kwargs) | Initialize self.                                            |
| [`backends`](#qiskit.providers.aer.AerProvider.backends "qiskit.providers.aer.AerProvider.backends")(\[name, filters])   | Return a list of backends matching the specified filtering. |
| [`get_backend`](#qiskit.providers.aer.AerProvider.get_backend "qiskit.providers.aer.AerProvider.get_backend")(\[name])   | Return a single backend matching the specified filtering.   |

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
