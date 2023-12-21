# qiskit.providers.ibmq.experiment.IBMExperimentService.create\_experiment

`IBMExperimentService.create_experiment(experiment_type, backend_name, metadata=None, experiment_id=None, job_ids=None, tags=None, notes=None, share_level=None, start_datetime=None, json_encoder=<class 'json.encoder.JSONEncoder'>, **kwargs)`

Create a new experiment in the database.

**Parameters**

*   **experiment\_type** (`str`) – Experiment type.

*   **backend\_name** (`str`) – Name of the backend the experiment ran on.

*   **metadata** (`Optional`\[`Dict`]) – Experiment metadata.

*   **experiment\_id** (`Optional`\[`str`]) – Experiment ID. It must be in the `uuid4` format. One will be generated if not supplied.

*   **job\_ids** (`Optional`\[`List`\[`str`]]) – IDs of experiment jobs.

*   **tags** (`Optional`\[`List`\[`str`]]) – Tags to be associated with the experiment.

*   **notes** (`Optional`\[`str`]) – Freeform notes about the experiment.

*   **share\_level** (`Union`\[`str`, `ExperimentShareLevel`, `None`]) –

    The level at which the experiment is shared. This determines who can view the experiment (but not update it). This defaults to “private” for new experiments. Possible values include:

    *   private: The experiment is only visible to its owner (default)
    *   project: The experiment is shared within its project
    *   group: The experiment is shared within its group
    *   hub: The experiment is shared within its hub
    *   public: The experiment is shared publicly regardless of provider

*   **start\_datetime** (`Union`\[`str`, `datetime`, `None`]) – Timestamp when the experiment started, in local time zone.

*   **json\_encoder** (`Type`\[`JSONEncoder`]) – Custom JSON encoder to use to encode the experiment.

*   **kwargs** (`Any`) – Additional experiment attributes that are not supported and will be ignored.

**Return type**

`str`

**Returns**

Experiment ID.

**Raises**

*   [**IBMExperimentEntryExists**](qiskit.providers.ibmq.experiment.IBMExperimentEntryExists#qiskit.providers.ibmq.experiment.IBMExperimentEntryExists "qiskit.providers.ibmq.experiment.IBMExperimentEntryExists") – If the experiment already exits.
*   **IBMQApiError** – If the request to the server failed.
