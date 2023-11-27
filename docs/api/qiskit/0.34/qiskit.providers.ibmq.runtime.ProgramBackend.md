# ProgramBackend[¶](#programbackend "Permalink to this headline")

<span id="undefined" />

`ProgramBackend(configuration, provider=None, **fields)`

Bases: `qiskit.providers.backend.BackendV1`, `abc.ABC`

Base class for a program backend.

This is a [`Backend`](qiskit.providers.Backend#qiskit.providers.Backend "qiskit.providers.Backend") class for runtime programs to submit circuits.

Initialize a backend class

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration#qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – A backend configuration object for the backend object.
*   **provider** ([*qiskit.providers.Provider*](qiskit.providers.Provider#qiskit.providers.Provider "qiskit.providers.Provider")) – Optionally, the provider object that this Backend comes from.
*   **fields** – kwargs for the values to use to override the default options.

**Raises**

**AttributeError** – if input field not a valid options

In addition to the public abstract methods, subclasses should also implement the following private methods:

<span id="undefined" />

`abstract classmethod _default_options()`

Return the default options

This method will return a [`qiskit.providers.Options`](qiskit.providers.Options#qiskit.providers.Options "qiskit.providers.Options") subclass object that will be used for the default options. These should be the default parameters to use for the options of the backend.

**Returns**

**A options object with**

default values set

**Return type**

[qiskit.providers.Options](qiskit.providers.Options#qiskit.providers.Options "qiskit.providers.Options")

## Methods

|                                                                                                                                                                                                       |                                        |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| [`configuration`](qiskit.providers.ibmq.runtime.ProgramBackend.configuration#qiskit.providers.ibmq.runtime.ProgramBackend.configuration "qiskit.providers.ibmq.runtime.ProgramBackend.configuration") | Return the backend configuration.      |
| [`name`](qiskit.providers.ibmq.runtime.ProgramBackend.name#qiskit.providers.ibmq.runtime.ProgramBackend.name "qiskit.providers.ibmq.runtime.ProgramBackend.name")                                     | Return the backend name.               |
| [`properties`](qiskit.providers.ibmq.runtime.ProgramBackend.properties#qiskit.providers.ibmq.runtime.ProgramBackend.properties "qiskit.providers.ibmq.runtime.ProgramBackend.properties")             | Return the backend properties.         |
| [`provider`](qiskit.providers.ibmq.runtime.ProgramBackend.provider#qiskit.providers.ibmq.runtime.ProgramBackend.provider "qiskit.providers.ibmq.runtime.ProgramBackend.provider")                     | Return the backend Provider.           |
| [`run`](qiskit.providers.ibmq.runtime.ProgramBackend.run#qiskit.providers.ibmq.runtime.ProgramBackend.run "qiskit.providers.ibmq.runtime.ProgramBackend.run")                                         | Run on the backend.                    |
| [`set_options`](qiskit.providers.ibmq.runtime.ProgramBackend.set_options#qiskit.providers.ibmq.runtime.ProgramBackend.set_options "qiskit.providers.ibmq.runtime.ProgramBackend.set_options")         | Set the options fields for the backend |
| [`status`](qiskit.providers.ibmq.runtime.ProgramBackend.status#qiskit.providers.ibmq.runtime.ProgramBackend.status "qiskit.providers.ibmq.runtime.ProgramBackend.status")                             | Return the backend status.             |

## Attributes

<span id="undefined" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.ibmq.runtime.ProgramBackend.run#qiskit.providers.ibmq.runtime.ProgramBackend.run "qiskit.providers.ibmq.runtime.ProgramBackend.run") method.

<span id="undefined" />

### version

`= 1`
