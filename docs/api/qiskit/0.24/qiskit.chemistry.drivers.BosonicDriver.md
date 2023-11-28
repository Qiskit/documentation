<span id="qiskit-chemistry-drivers-bosonicdriver" />

# qiskit.chemistry.drivers.BosonicDriver

<span id="undefined" />

`BosonicDriver(molecule=None, basis='sto3g', hf_method='rhf', supports_molecule=False)`

Base class for Qiskit’s chemistry bosonic drivers.

**Parameters**

*   **molecule** (`Optional`\[`Molecule`]) – molecule
*   **basis** (`str`) – basis set
*   **hf\_method** (`str`) – Hartree-Fock Method type
*   **supports\_molecule** (`bool`) – Indicates if driver supports molecule

**Raises**

[**QiskitChemistryError**](qiskit.chemistry.QiskitChemistryError#qiskit.chemistry.QiskitChemistryError "qiskit.chemistry.QiskitChemistryError") – Molecule passed but driver doesn’t support it.

<span id="undefined" />

`abstract __init__(molecule=None, basis='sto3g', hf_method='rhf', supports_molecule=False)`

**Parameters**

*   **molecule** (`Optional`\[`Molecule`]) – molecule
*   **basis** (`str`) – basis set
*   **hf\_method** (`str`) – Hartree-Fock Method type
*   **supports\_molecule** (`bool`) – Indicates if driver supports molecule

**Raises**

[**QiskitChemistryError**](qiskit.chemistry.QiskitChemistryError#qiskit.chemistry.QiskitChemistryError "qiskit.chemistry.QiskitChemistryError") – Molecule passed but driver doesn’t support it.

## Methods

|                                                                                                                                                     |                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.drivers.BosonicDriver.__init__ "qiskit.chemistry.drivers.BosonicDriver.__init__")(\[molecule, basis, hf\_method, …]) | **type molecule**`Optional`\[`Molecule`]           |
| [`run`](#qiskit.chemistry.drivers.BosonicDriver.run "qiskit.chemistry.drivers.BosonicDriver.run")()                                                 | Runs driver to produce a WatsonHamiltonian output. |

## Attributes

|                                                                                                                                             |                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [`basis`](#qiskit.chemistry.drivers.BosonicDriver.basis "qiskit.chemistry.drivers.BosonicDriver.basis")                                     | return basis                                    |
| [`hf_method`](#qiskit.chemistry.drivers.BosonicDriver.hf_method "qiskit.chemistry.drivers.BosonicDriver.hf_method")                         | return Hartree-Fock method                      |
| [`molecule`](#qiskit.chemistry.drivers.BosonicDriver.molecule "qiskit.chemistry.drivers.BosonicDriver.molecule")                            | return molecule                                 |
| [`supports_molecule`](#qiskit.chemistry.drivers.BosonicDriver.supports_molecule "qiskit.chemistry.drivers.BosonicDriver.supports_molecule") | True for derived classes that support Molecule. |

<span id="undefined" />

`property basis`

return basis

**Return type**

`str`

<span id="undefined" />

`property hf_method`

return Hartree-Fock method

**Return type**

`str`

<span id="undefined" />

`property molecule`

return molecule

**Return type**

`Optional`\[`Molecule`]

<span id="undefined" />

`abstract run()`

Runs driver to produce a WatsonHamiltonian output.

**Return type**

`WatsonHamiltonian`

**Returns**

A WatsonHamiltonian comprising the bosonic data.

<span id="undefined" />

`property supports_molecule`

True for derived classes that support Molecule.

**Return type**

`bool`

**Returns**

True if Molecule is supported.
