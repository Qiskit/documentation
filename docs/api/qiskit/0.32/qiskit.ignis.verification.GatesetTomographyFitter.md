# GatesetTomographyFitter

<span id="undefined" />

`GatesetTomographyFitter(result, circuits, gateset_basis='default')`

Bases: `object`

Initialize gateset tomography fitter with experimental data.

**Parameters**

*   **result** (`Result`) – a Qiskit Result object obtained from executing tomography circuits.
*   **circuits** (`List`) – a list of circuits or circuit names to extract count information from the result object.
*   **gateset\_basis** (`Union`\[`GateSetBasis`, `str`]) – (default: ‘default’) Representation of
*   **gates and SPAM circuits of the gateset** (*the*) –

**Additional information:**

The fitter attempts to output a GST result from the collected experimental data. The output will be a dictionary of the computed operators for the gates, as well as the measurment operator and initial state of the system.

The input for the fitter consists of the experimental data collected by the backend, the circuits on which it operated and the gateset basis used when collecting the data.

Example:

```python
from qiskit.circuits.library.standard import *
from qiskit.ignis.verification.basis import default_gateset_basis
from qiskit.ignis.verification import gateset_tomography_circuits
from qiskit.ignis.verification import GateSetTomographyFitter

gate = HGate()
basis = default_gateset_basis()
basis.add_gate(gate)
backend = ...
circuits = gateset_tomography_circuits(gateset_basis=basis)
qobj = assemble(circuits, shots=10000)
result = backend.run(qobj).result()
fitter = GatesetTomographyFitter(result, circuits, basis)
result_gates = fitter.fit()
result_gate = result_gates[gate.name]
```

## Methods

|                                                                                                                                                                                                                                  |                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`fit`](qiskit.ignis.verification.GatesetTomographyFitter.fit#qiskit.ignis.verification.GatesetTomographyFitter.fit "qiskit.ignis.verification.GatesetTomographyFitter.fit")                                                     | Reconstruct a gate set from measurement data using optimization.     |
| [`linear_inversion`](qiskit.ignis.verification.GatesetTomographyFitter.linear_inversion#qiskit.ignis.verification.GatesetTomographyFitter.linear_inversion "qiskit.ignis.verification.GatesetTomographyFitter.linear_inversion") | Reconstruct a gate set from measurement data using linear inversion. |
