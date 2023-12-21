# qiskit.ignis.verification.AccreditationFitter.AppendResults

`AccreditationFitter.AppendResults(results, postp_list, v_zero)`

Single run of accreditation protocol, data input as qiskit result object assumed to be single shot

**Parameters**

*   **results** ([*Result*](qiskit.result.Result#qiskit.result.Result "qiskit.result.Result")) – results of the quantum job
*   **postp\_list** (*list*) – list of strings used to post-process outputs
*   **v\_zero** (*int*) – position of target

**Raises**

**QiskitError** – If the data is not single shot
