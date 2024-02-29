---
title: UnitarySimulatorPy
description: API reference for qiskit.providers.basicaer.UnitarySimulatorPy
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.basicaer.UnitarySimulatorPy
---

# qiskit.providers.basicaer.UnitarySimulatorPy

<span id="qiskit.providers.basicaer.UnitarySimulatorPy" />

`UnitarySimulatorPy(configuration=None, provider=None, **fields)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/providers/basicaer/unitary_simulator.py "view source code")

Python implementation of a unitary simulator.

Initialize a backend class

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – A backend configuration object for the backend object.
*   **provider** ([*qiskit.providers.Provider*](qiskit.providers.Provider "qiskit.providers.Provider")) – Optionally, the provider object that this Backend comes from.
*   **fields** – kwargs for the values to use to override the default options.

**Raises**

**AttributeError** – if input field not a valid options

### \_\_init\_\_

<span id="qiskit.providers.basicaer.UnitarySimulatorPy.__init__" />

`__init__(configuration=None, provider=None, **fields)`

Initialize a backend class

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – A backend configuration object for the backend object.
*   **provider** ([*qiskit.providers.Provider*](qiskit.providers.Provider "qiskit.providers.Provider")) – Optionally, the provider object that this Backend comes from.
*   **fields** – kwargs for the values to use to override the default options.

**Raises**

**AttributeError** – if input field not a valid options

## Methods

|                                                                                                                                                            |                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [`__init__`](#qiskit.providers.basicaer.UnitarySimulatorPy.__init__ "qiskit.providers.basicaer.UnitarySimulatorPy.__init__")(\[configuration, provider])   | Initialize a backend class                                         |
| [`configuration`](#qiskit.providers.basicaer.UnitarySimulatorPy.configuration "qiskit.providers.basicaer.UnitarySimulatorPy.configuration")()              | Return the backend configuration.                                  |
| [`name`](#qiskit.providers.basicaer.UnitarySimulatorPy.name "qiskit.providers.basicaer.UnitarySimulatorPy.name")()                                         | Return the backend name.                                           |
| [`properties`](#qiskit.providers.basicaer.UnitarySimulatorPy.properties "qiskit.providers.basicaer.UnitarySimulatorPy.properties")()                       | Return the backend properties.                                     |
| [`provider`](#qiskit.providers.basicaer.UnitarySimulatorPy.provider "qiskit.providers.basicaer.UnitarySimulatorPy.provider")()                             | Return the backend Provider.                                       |
| [`run`](#qiskit.providers.basicaer.UnitarySimulatorPy.run "qiskit.providers.basicaer.UnitarySimulatorPy.run")(qobj, \*\*backend\_options)                  | Run qobj asynchronously.                                           |
| [`run_experiment`](#qiskit.providers.basicaer.UnitarySimulatorPy.run_experiment "qiskit.providers.basicaer.UnitarySimulatorPy.run_experiment")(experiment) | Run an experiment (circuit) and return a single experiment result. |
| [`set_options`](#qiskit.providers.basicaer.UnitarySimulatorPy.set_options "qiskit.providers.basicaer.UnitarySimulatorPy.set_options")(\*\*fields)          | Set the options fields for the backend                             |
| [`status`](#qiskit.providers.basicaer.UnitarySimulatorPy.status "qiskit.providers.basicaer.UnitarySimulatorPy.status")()                                   | Return the backend status.                                         |

## Attributes

|                                                                                                                           |                                    |
| ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| `DEFAULT_CONFIGURATION`                                                                                                   |                                    |
| `DEFAULT_OPTIONS`                                                                                                         |                                    |
| `MAX_QUBITS_MEMORY`                                                                                                       |                                    |
| [`options`](#qiskit.providers.basicaer.UnitarySimulatorPy.options "qiskit.providers.basicaer.UnitarySimulatorPy.options") | Return the options for the backend |
| `version`                                                                                                                 |                                    |

### configuration

<span id="qiskit.providers.basicaer.UnitarySimulatorPy.configuration" />

`configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

[BackendConfiguration](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")

### name

<span id="qiskit.providers.basicaer.UnitarySimulatorPy.name" />

`name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

### options

<span id="qiskit.providers.basicaer.UnitarySimulatorPy.options" />

`property options`

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](#qiskit.providers.basicaer.UnitarySimulatorPy.run "qiskit.providers.basicaer.UnitarySimulatorPy.run") method.

### properties

<span id="qiskit.providers.basicaer.UnitarySimulatorPy.properties" />

`properties()`

Return the backend properties.

**Returns**

the configuration for the backend. If the backend does not support properties, it returns `None`.

**Return type**

[BackendProperties](qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties")

### provider

<span id="qiskit.providers.basicaer.UnitarySimulatorPy.provider" />

`provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider "qiskit.providers.Provider")

### run

<span id="qiskit.providers.basicaer.UnitarySimulatorPy.run" />

`run(qobj, **backend_options)`

Run qobj asynchronously.

**Parameters**

*   **qobj** ([*Qobj*](qiskit.qobj.Qobj "qiskit.qobj.Qobj")) – payload of the experiment
*   **backend\_options** (*dict*) – backend options

**Returns**

derived from BaseJob

**Return type**

[BasicAerJob](qiskit.providers.basicaer.BasicAerJob "qiskit.providers.basicaer.BasicAerJob")

Additional Information:

```python
backend_options: Is a dict of options for the backend. It may contain
    * "initial_unitary": matrix_like
    * "chop_threshold": double

The "initial_unitary" option specifies a custom initial unitary
matrix for the simulator to be used instead of the identity
matrix. This size of this matrix must be correct for the number
of qubits inall experiments in the qobj.

The "chop_threshold" option specifies a truncation value for
setting small values to zero in the output unitary. The default
value is 1e-15.

Example::

    backend_options = {
        "initial_unitary": np.array([[1, 0, 0, 0],
                                     [0, 0, 0, 1],
                                     [0, 0, 1, 0],
                                     [0, 1, 0, 0]])
        "chop_threshold": 1e-15
    }
```

### run\_experiment

<span id="qiskit.providers.basicaer.UnitarySimulatorPy.run_experiment" />

`run_experiment(experiment)`

Run an experiment (circuit) and return a single experiment result.

**Parameters**

**experiment** (*QobjExperiment*) – experiment from qobj experiments list

**Returns**

A result dictionary which looks something like:

```python
{
"name": name of this experiment (obtained from qobj.experiment header)
"seed": random seed used for simulation
"shots": number of shots used in the simulation
"data":
    {
    "unitary": [[[0.0, 0.0], [1.0, 0.0]],
                [[1.0, 0.0], [0.0, 0.0]]]
    },
"status": status string for the simulation
"success": boolean
"time taken": simulation time of this single experiment
}
```

**Return type**

dict

**Raises**

*   [**BasicAerError**](qiskit.providers.basicaer.BasicAerError "qiskit.providers.basicaer.BasicAerError") – if the number of qubits in the circuit is greater than 24.
*   **Note that the practical qubit limit is much lower than 24.** –

### set\_options

<span id="qiskit.providers.basicaer.UnitarySimulatorPy.set_options" />

`set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

### status

<span id="qiskit.providers.basicaer.UnitarySimulatorPy.status" />

`status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

[BackendStatus](qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")

