---
title: run
description: API reference for qiskit.providers.basicaer.StatevectorSimulatorPy.run
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.basicaer.StatevectorSimulatorPy.run
---

# run

<span id="qiskit.providers.basicaer.StatevectorSimulatorPy.run" />

`StatevectorSimulatorPy.run(qobj, backend_options=None)`

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
    * "initial_statevector": vector_like
    * "chop_threshold": double

The "initial_statevector" option specifies a custom initial
initial statevector for the simulator to be used instead of the all
zero state. This size of this vector must be correct for the number
of qubits in all experiments in the qobj.

The "chop_threshold" option specifies a truncation value for
setting small values to zero in the output statevector. The default
value is 1e-15.

Example::

    backend_options = {
        "initial_statevector": np.array([1, 0, 0, 1j]) / np.sqrt(2),
        "chop_threshold": 1e-15
    }
```

