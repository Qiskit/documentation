# FermionicDriver

<span id="undefined" />

`FermionicDriver(molecule=None, basis='sto3g', hf_method='rhf', supports_molecule=False)`

Bases: `qiskit.chemistry.drivers.base_driver.BaseDriver`

Base class for Qiskit’s chemistry fermionic drivers.

**Parameters**

*   **molecule** (`Optional`\[`Molecule`]) – molecule
*   **basis** (`str`) – basis set
*   **hf\_method** (`str`) – Hartree-Fock Method type
*   **supports\_molecule** (`bool`) – Indicates if driver supports molecule

**Raises**

[**QiskitChemistryError**](qiskit.chemistry.QiskitChemistryError#qiskit.chemistry.QiskitChemistryError "qiskit.chemistry.QiskitChemistryError") – Molecule passed but driver doesn’t support it.

## Methods

|                                                                                                                                                   |                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| [`run`](qiskit.chemistry.drivers.FermionicDriver.run#qiskit.chemistry.drivers.FermionicDriver.run "qiskit.chemistry.drivers.FermionicDriver.run") | Runs driver to produce a QMolecule output. |

## Attributes

<span id="undefined" />

### basis

return basis

**Return type**

`str`

<span id="undefined" />

### hf\_method

return Hartree-Fock method

**Return type**

`str`

<span id="undefined" />

### molecule

return molecule

**Return type**

`Optional`\[`Molecule`]

<span id="undefined" />

### supports\_molecule

True for derived classes that support Molecule.

**Return type**

`bool`

**Returns**

True if Molecule is supported.
