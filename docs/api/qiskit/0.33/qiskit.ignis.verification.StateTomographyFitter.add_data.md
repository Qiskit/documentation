# qiskit.ignis.verification.StateTomographyFitter.add\_data

`StateTomographyFitter.add_data(results, circuits)`

Add tomography data from a Qiskit Result object.

**Parameters**

*   **results** (`List`\[`Result`]) – The results obtained from executing tomography circuits.
*   **circuits** (`List`\[`Union`\[`QuantumCircuit`, `str`]]) – circuits or circuit names to extract count information from the result object.

**Raises**

**QiskitError** – In case some of the tomography data is not found in the results
