# BaseDriver



`BaseDriver(molecule=None, basis='sto3g', hf_method='rhf', supports_molecule=False)`

Bases: `abc.ABC`

Base class for Qiskit’s chemistry drivers.

**Parameters**

*   **molecule** (`Optional`\[`Molecule`]) – molecule
*   **basis** (`str`) – basis set
*   **hf\_method** (`str`) – Hartree-Fock Method type
*   **supports\_molecule** (`bool`) – Indicates if driver supports molecule

**Raises**

[**QiskitChemistryError**](qiskit.chemistry.QiskitChemistryError#qiskit.chemistry.QiskitChemistryError "qiskit.chemistry.QiskitChemistryError") – Molecule passed but driver doesn’t support it.

## Attributes



### basis

return basis

**Return type**

`str`



### hf\_method

return Hartree-Fock method

**Return type**

`str`



### molecule

return molecule

**Return type**

`Optional`\[`Molecule`]



### supports\_molecule

True for derived classes that support Molecule.

**Return type**

`bool`

**Returns**

True if Molecule is supported.
