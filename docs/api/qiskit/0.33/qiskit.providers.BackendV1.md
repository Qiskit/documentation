# BackendV1

<span id="undefined" />

`BackendV1(configuration, provider=None, **fields)`

Bases: `qiskit.providers.backend.Backend`, `abc.ABC`

Abstract class for Backends

This abstract class is to be used for all Backend objects created by a provider. There are several classes of information contained in a Backend. The first are the attributes of the class itself. These should be used to defined the immutable characteristics of the backend. The `options` attribute of the backend is used to contain the dynamic user configurable options of the backend. It should be used more for runtime options that configure how the backend is used. For example, something like a `shots` field for a backend that runs experiments which would contain an int for how many shots to execute. The `properties` attribute is optionally defined [`BackendProperties`](qiskit.providers.models.BackendProperties#qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties") object and is used to return measured properties, or properties of a backend that may change over time. The simplest example of this would be a version string, which will change as a backend is updated, but also could be something like noise parameters for backends that run experiments.

This first version of the Backend abstract class is written to be mostly backwards compatible with the legacy providers interface. This includes reusing the model objects [`BackendProperties`](qiskit.providers.models.BackendProperties#qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties") and [`BackendConfiguration`](qiskit.providers.models.BackendConfiguration#qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration"). This was done to ease the transition for users and provider maintainers to the new versioned providers. Expect, future versions of this abstract class to change the data model and interface.

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

|                                                                                                                                                 |                                        |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| [`configuration`](qiskit.providers.BackendV1.configuration#qiskit.providers.BackendV1.configuration "qiskit.providers.BackendV1.configuration") | Return the backend configuration.      |
| [`name`](qiskit.providers.BackendV1.name#qiskit.providers.BackendV1.name "qiskit.providers.BackendV1.name")                                     | Return the backend name.               |
| [`properties`](qiskit.providers.BackendV1.properties#qiskit.providers.BackendV1.properties "qiskit.providers.BackendV1.properties")             | Return the backend properties.         |
| [`provider`](qiskit.providers.BackendV1.provider#qiskit.providers.BackendV1.provider "qiskit.providers.BackendV1.provider")                     | Return the backend Provider.           |
| [`run`](qiskit.providers.BackendV1.run#qiskit.providers.BackendV1.run "qiskit.providers.BackendV1.run")                                         | Run on the backend.                    |
| [`set_options`](qiskit.providers.BackendV1.set_options#qiskit.providers.BackendV1.set_options "qiskit.providers.BackendV1.set_options")         | Set the options fields for the backend |
| [`status`](qiskit.providers.BackendV1.status#qiskit.providers.BackendV1.status "qiskit.providers.BackendV1.status")                             | Return the backend status.             |

## Attributes

<span id="undefined" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.BackendV1.run#qiskit.providers.BackendV1.run "qiskit.providers.BackendV1.run") method.

<span id="undefined" />

### version

`= 1`
