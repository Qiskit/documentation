# qiskit.providers.ibmq.experiment.IBMExperimentService.save\_preferences

`IBMExperimentService.save_preferences(auto_save=None)`

Stores experiment preferences on disk.

<Admonition title="Note" type="note">
  These are preferences passed to the applications that use this service and have no effect on the service itself.

  For example, if `auto_save` is set to `True`, it tells the application, such as `qiskit-experiments`, that you prefer changes to be automatically saved. It is up to the application to implement the preferences.
</Admonition>

**Parameters**

**auto\_save** (`Optional`\[`bool`]) – Automatically save the experiment.

**Return type**

`None`
