---
title: run
description: API reference for qiskit.providers.basicaer.UnitarySimulatorPy.run
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.basicaer.UnitarySimulatorPy.run
---

# run

<span id="qiskit.providers.basicaer.UnitarySimulatorPy.run" />

`UnitarySimulatorPy.run(qobj, backend_options=None)`

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

