---
title: run_experiment
description: API reference for qiskit.providers.basicaer.UnitarySimulatorPy.run_experiment
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.basicaer.UnitarySimulatorPy.run_experiment
---

# run\_experiment

<span id="qiskit.providers.basicaer.UnitarySimulatorPy.run_experiment" />

`UnitarySimulatorPy.run_experiment(experiment)`

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

