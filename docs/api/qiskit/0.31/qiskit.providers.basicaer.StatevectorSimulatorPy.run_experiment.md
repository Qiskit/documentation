# qiskit.providers.basicaer.StatevectorSimulatorPy.run\_experiment

`StatevectorSimulatorPy.run_experiment(experiment)`

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
    "counts": {'0x9: 5, ...},
    "memory": ['0x9', '0xF', '0x1D', ..., '0x9']
    },
"status": status string for the simulation
"success": boolean
"time_taken": simulation time of this single experiment
}
```

**Return type**

dict

**Raises**

[**BasicAerError**](qiskit.providers.basicaer.BasicAerError#qiskit.providers.basicaer.BasicAerError "qiskit.providers.basicaer.BasicAerError") – if an error occurred.
