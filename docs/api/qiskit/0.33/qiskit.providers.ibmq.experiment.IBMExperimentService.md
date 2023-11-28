# IBMExperimentService[¶](#ibmexperimentservice "Permalink to this headline")

<span id="undefined" />

`IBMExperimentService(provider)`

Bases: `object`

Provides experiment related services.

This class is the main interface to invoke IBM Quantum experiment service, which allows you to create, delete, update, query, and retrieve experiments, experiment figures, and analysis results. The `experiment` attribute of `AccountProvider` is an instance of this class, and the main syntax for using the service is `provider.experiment.<action>`. For example:

```python
from qiskit import IBMQ
provider = IBMQ.load_account()

# Retrieve all experiments.
experiments = provider.experiment.experiments()

# Retrieve experiments with filtering.
experiment_filtered = provider.experiment.experiments(backend_name='ibmq_athens')

# Retrieve a specific experiment using its ID.
experiment = provider.experiment.experiment(EXPERIMENT_ID)

# Upload a new experiment.
new_experiment_id = provider.experiment.create_experiment(
    experiment_type="T1",
    backend_name="ibmq_athens",
    metadata={"qubits": 5}
)

# Update an experiment.
provider.experiment.update_experiment(
    experiment_id=EXPERIMENT_ID,
    share_level="Group"
)

# Delete an experiment.
provider.experiment.delete_experiment(EXPERIMENT_ID)
```

Similar syntax applies to analysis results and experiment figures.

IBMExperimentService constructor.

**Parameters**

**provider** (`AccountProvider`) – IBM Quantum Experience account provider.

## Methods

|                                                                                                                                                                                                                                                                      |                                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [`analysis_result`](qiskit.providers.ibmq.experiment.IBMExperimentService.analysis_result#qiskit.providers.ibmq.experiment.IBMExperimentService.analysis_result "qiskit.providers.ibmq.experiment.IBMExperimentService.analysis_result")                             | Retrieve a previously stored experiment.                    |
| [`analysis_results`](qiskit.providers.ibmq.experiment.IBMExperimentService.analysis_results#qiskit.providers.ibmq.experiment.IBMExperimentService.analysis_results "qiskit.providers.ibmq.experiment.IBMExperimentService.analysis_results")                         | Retrieve all analysis results, with optional filtering.     |
| [`backends`](qiskit.providers.ibmq.experiment.IBMExperimentService.backends#qiskit.providers.ibmq.experiment.IBMExperimentService.backends "qiskit.providers.ibmq.experiment.IBMExperimentService.backends")                                                         | Return a list of backends that can be used for experiments. |
| [`create_analysis_result`](qiskit.providers.ibmq.experiment.IBMExperimentService.create_analysis_result#qiskit.providers.ibmq.experiment.IBMExperimentService.create_analysis_result "qiskit.providers.ibmq.experiment.IBMExperimentService.create_analysis_result") | Create a new analysis result in the database.               |
| [`create_experiment`](qiskit.providers.ibmq.experiment.IBMExperimentService.create_experiment#qiskit.providers.ibmq.experiment.IBMExperimentService.create_experiment "qiskit.providers.ibmq.experiment.IBMExperimentService.create_experiment")                     | Create a new experiment in the database.                    |
| [`create_figure`](qiskit.providers.ibmq.experiment.IBMExperimentService.create_figure#qiskit.providers.ibmq.experiment.IBMExperimentService.create_figure "qiskit.providers.ibmq.experiment.IBMExperimentService.create_figure")                                     | Store a new figure in the database.                         |
| [`delete_analysis_result`](qiskit.providers.ibmq.experiment.IBMExperimentService.delete_analysis_result#qiskit.providers.ibmq.experiment.IBMExperimentService.delete_analysis_result "qiskit.providers.ibmq.experiment.IBMExperimentService.delete_analysis_result") | Delete an analysis result.                                  |
| [`delete_experiment`](qiskit.providers.ibmq.experiment.IBMExperimentService.delete_experiment#qiskit.providers.ibmq.experiment.IBMExperimentService.delete_experiment "qiskit.providers.ibmq.experiment.IBMExperimentService.delete_experiment")                     | Delete an experiment.                                       |
| [`delete_figure`](qiskit.providers.ibmq.experiment.IBMExperimentService.delete_figure#qiskit.providers.ibmq.experiment.IBMExperimentService.delete_figure "qiskit.providers.ibmq.experiment.IBMExperimentService.delete_figure")                                     | Delete an experiment plot.                                  |
| [`device_components`](qiskit.providers.ibmq.experiment.IBMExperimentService.device_components#qiskit.providers.ibmq.experiment.IBMExperimentService.device_components "qiskit.providers.ibmq.experiment.IBMExperimentService.device_components")                     | Return the device components.                               |
| [`experiment`](qiskit.providers.ibmq.experiment.IBMExperimentService.experiment#qiskit.providers.ibmq.experiment.IBMExperimentService.experiment "qiskit.providers.ibmq.experiment.IBMExperimentService.experiment")                                                 | Retrieve a previously stored experiment.                    |
| [`experiments`](qiskit.providers.ibmq.experiment.IBMExperimentService.experiments#qiskit.providers.ibmq.experiment.IBMExperimentService.experiments "qiskit.providers.ibmq.experiment.IBMExperimentService.experiments")                                             | Retrieve all experiments, with optional filtering.          |
| [`figure`](qiskit.providers.ibmq.experiment.IBMExperimentService.figure#qiskit.providers.ibmq.experiment.IBMExperimentService.figure "qiskit.providers.ibmq.experiment.IBMExperimentService.figure")                                                                 | Retrieve an existing figure.                                |
| [`save_preferences`](qiskit.providers.ibmq.experiment.IBMExperimentService.save_preferences#qiskit.providers.ibmq.experiment.IBMExperimentService.save_preferences "qiskit.providers.ibmq.experiment.IBMExperimentService.save_preferences")                         | Stores experiment preferences on disk.                      |
| [`update_analysis_result`](qiskit.providers.ibmq.experiment.IBMExperimentService.update_analysis_result#qiskit.providers.ibmq.experiment.IBMExperimentService.update_analysis_result "qiskit.providers.ibmq.experiment.IBMExperimentService.update_analysis_result") | Update an existing analysis result.                         |
| [`update_experiment`](qiskit.providers.ibmq.experiment.IBMExperimentService.update_experiment#qiskit.providers.ibmq.experiment.IBMExperimentService.update_experiment "qiskit.providers.ibmq.experiment.IBMExperimentService.update_experiment")                     | Update an existing experiment.                              |
| [`update_figure`](qiskit.providers.ibmq.experiment.IBMExperimentService.update_figure#qiskit.providers.ibmq.experiment.IBMExperimentService.update_figure "qiskit.providers.ibmq.experiment.IBMExperimentService.update_figure")                                     | Update an existing figure.                                  |

## Attributes

<span id="undefined" />

### preferences

Return saved experiment preferences.

<Admonition title="Note" type="note">
  These are preferences passed to the applications that use this service and have no effect on the service itself. It is up to the application, such as `qiskit-experiments` to implement the preferences.
</Admonition>

**Returns**

The experiment preferences.

**Return type**

Dict
