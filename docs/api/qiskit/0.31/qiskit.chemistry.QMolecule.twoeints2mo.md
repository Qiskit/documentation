# qiskit.chemistry.QMolecule.twoeints2mo

`static QMolecule.twoeints2mo(ints, moc)`

Converts two-body integrals from AO to MO basis

Returns two electron integrals in AO basis converted to given MO basis

**Parameters**

*   **ints** (*numpy.ndarray*) – N^2 two electron integrals in AO basis
*   **moc** (*numpy.ndarray*) – Molecular orbital coefficients

**Returns**

integrals in MO basis

**Return type**

numpy.ndarray
