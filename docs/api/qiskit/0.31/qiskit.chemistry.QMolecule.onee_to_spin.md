# qiskit.chemistry.QMolecule.onee\_to\_spin

`static QMolecule.onee_to_spin(mohij, mohij_b=None, threshold=1e-12)`

Convert one-body MO integrals to spin orbital basis

Takes one body integrals in molecular orbital basis and returns integrals in spin orbitals ready for use as coefficients to one body terms 2nd quantized Hamiltonian.

**Parameters**

*   **mohij** (*numpy.ndarray*) – One body orbitals in molecular basis (Alpha)
*   **mohij\_b** (*numpy.ndarray*) – One body orbitals in molecular basis (Beta)
*   **threshold** (*float*) – Threshold value for assignments

**Returns**

One body integrals in spin orbitals

**Return type**

numpy.ndarray
