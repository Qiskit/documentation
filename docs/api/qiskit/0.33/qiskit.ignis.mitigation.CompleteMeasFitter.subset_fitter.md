# qiskit.ignis.mitigation.CompleteMeasFitter.subset\_fitter

`CompleteMeasFitter.subset_fitter(qubit_sublist=None)`

Return a fitter object that is a subset of the qubits in the original list.

**Parameters**

**qubit\_sublist** (*list*) – must be a subset of qubit\_list

**Returns**

**A new fitter that has the calibration for a**

subset of qubits

**Return type**

[CompleteMeasFitter](qiskit.ignis.mitigation.CompleteMeasFitter#qiskit.ignis.mitigation.CompleteMeasFitter "qiskit.ignis.mitigation.CompleteMeasFitter")

**Raises**

**QiskitError** – If the calibration matrix is not initialized
