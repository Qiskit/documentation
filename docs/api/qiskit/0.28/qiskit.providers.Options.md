# qiskit.providers.Options

<span id="undefined" />

`Options`

Base options object

This class is the abstract class that all backend options are based on. The properties of the class are intended to be all dynamically adjustable so that a user can reconfigure the backend on demand. If a property is immutable to the user (eg something like number of qubits) that should be a configuration of the backend class itself instead of the options.

<span id="undefined" />

`__init__(*args, **kwargs)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                    |                                      |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------ |
| [`__init__`](#qiskit.providers.Options.__init__ "qiskit.providers.Options.__init__")(\*args, \*\*kwargs)           | Initialize self.                     |
| [`get`](#qiskit.providers.Options.get "qiskit.providers.Options.get")(field\[, default])                           | Get an option value for a given key. |
| [`update_options`](#qiskit.providers.Options.update_options "qiskit.providers.Options.update_options")(\*\*fields) | Update options with kwargs           |

<span id="undefined" />

`get(field, default=None)`

Get an option value for a given key.

<span id="undefined" />

`update_options(**fields)`

Update options with kwargs
