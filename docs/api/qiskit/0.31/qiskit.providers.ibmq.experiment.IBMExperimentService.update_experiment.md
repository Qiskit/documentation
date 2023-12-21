# qiskit.providers.ibmq.experiment.IBMExperimentService.update\_experiment

`IBMExperimentService.update_experiment(experiment_id, metadata=None, job_ids=None, notes=None, tags=None, share_level=None, end_datetime=None, json_encoder=<class 'json.encoder.JSONEncoder'>, **kwargs)`

Update an existing experiment.

**Parameters**

*   **experiment\_id** (`str`) – Experiment ID.

*   **metadata** (`Optional`\[`Dict`]) – Experiment metadata.

*   **job\_ids** (`Optional`\[`List`\[`str`]]) – IDs of experiment jobs.

*   **notes** (`Optional`\[`str`]) – Freeform notes about the experiment.

*   **tags** (`Optional`\[`List`\[`str`]]) – Tags to be associated with the experiment.

*   **share\_level** (`Union`\[`str`, `ExperimentShareLevel`, `None`]) –

    The level at which the experiment is shared. This determines who can view the experiment (but not update it). This defaults to “private” for new experiments. Possible values include:

    *   private: The experiment is only visible to its owner (default)
    *   project: The experiment is shared within its project
    *   group: The experiment is shared within its group
    *   hub: The experiment is shared within its hub
    *   public: The experiment is shared publicly regardless of provider

*   **end\_datetime** (`Union`\[`str`, `datetime`, `None`]) – Timestamp for when the experiment ended, in local time.

*   **json\_encoder** (`Type`\[`JSONEncoder`]) – Custom JSON encoder to use to encode the experiment.

*   **kwargs** (`Any`) – Additional experiment attributes that are not supported and will be ignored.

**Raises**

*   [**IBMExperimentEntryNotFound**](qiskit.providers.ibmq.experiment.IBMExperimentEntryNotFound#qiskit.providers.ibmq.experiment.IBMExperimentEntryNotFound "qiskit.providers.ibmq.experiment.IBMExperimentEntryNotFound") – If the experiment does not exist.
*   **IBMQApiError** – If the request to the server failed.

**Return type**

`None`
