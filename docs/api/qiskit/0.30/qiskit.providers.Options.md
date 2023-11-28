# Options

<span id="undefined" />

`Options`

Bases: `types.SimpleNamespace`

Base options object

This class is the abstract class that all backend options are based on. The properties of the class are intended to be all dynamically adjustable so that a user can reconfigure the backend on demand. If a property is immutable to the user (eg something like number of qubits) that should be a configuration of the backend class itself instead of the options.

## Methods

|                                                                                                                                               |                                      |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| [`get`](qiskit.providers.Options.get#qiskit.providers.Options.get "qiskit.providers.Options.get")                                             | Get an option value for a given key. |
| [`update_options`](qiskit.providers.Options.update_options#qiskit.providers.Options.update_options "qiskit.providers.Options.update_options") | Update options with kwargs           |
