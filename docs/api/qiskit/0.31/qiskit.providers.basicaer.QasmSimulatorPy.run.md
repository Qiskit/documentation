# qiskit.providers.basicaer.QasmSimulatorPy.run

`QasmSimulatorPy.run(qobj, **backend_options)`

Run qobj asynchronously.

**Parameters**

*   **qobj** ([*Qobj*](qiskit.qobj.Qobj#qiskit.qobj.Qobj "qiskit.qobj.Qobj")) – payload of the experiment
*   **backend\_options** (*dict*) – backend options

**Returns**

derived from BaseJob

**Return type**

[BasicAerJob](qiskit.providers.basicaer.BasicAerJob#qiskit.providers.basicaer.BasicAerJob "qiskit.providers.basicaer.BasicAerJob")

## Additional Information:

## backend\_options: Is a dict of options for the backend. It may contain

*   “initial\_statevector”: vector\_like

The “initial\_statevector” option specifies a custom initial initial statevector for the simulator to be used instead of the all zero state. This size of this vector must be correct for the number of qubits in all experiments in the qobj.

Example:

```python
backend_options = {
    "initial_statevector": np.array([1, 0, 0, 1j]) / np.sqrt(2),
}
```
