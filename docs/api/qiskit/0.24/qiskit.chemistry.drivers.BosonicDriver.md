---
title: BosonicDriver
description: API reference for qiskit.chemistry.drivers.BosonicDriver
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.drivers.BosonicDriver
---

<span id="qiskit-chemistry-drivers-bosonicdriver" />

# qiskit.chemistry.drivers.BosonicDriver

<span id="qiskit.chemistry.drivers.BosonicDriver" />

`BosonicDriver(molecule=None, basis='sto3g', hf_method='rhf', supports_molecule=False)`

Base class for Qiskit’s chemistry bosonic drivers.

**Parameters**

*   **molecule** (`Optional`\[`Molecule`]) – molecule
*   **basis** (`str`) – basis set
*   **hf\_method** (`str`) – Hartree-Fock Method type
*   **supports\_molecule** (`bool`) – Indicates if driver supports molecule

**Raises**

[**QiskitChemistryError**](qiskit.chemistry.QiskitChemistryError "qiskit.chemistry.QiskitChemistryError") – Molecule passed but driver doesn’t support it.

### \_\_init\_\_

<span id="qiskit.chemistry.drivers.BosonicDriver.__init__" />

`abstract __init__(molecule=None, basis='sto3g', hf_method='rhf', supports_molecule=False)`

**Parameters**

*   **molecule** (`Optional`\[`Molecule`]) – molecule
*   **basis** (`str`) – basis set
*   **hf\_method** (`str`) – Hartree-Fock Method type
*   **supports\_molecule** (`bool`) – Indicates if driver supports molecule

**Raises**

[**QiskitChemistryError**](qiskit.chemistry.QiskitChemistryError "qiskit.chemistry.QiskitChemistryError") – Molecule passed but driver doesn’t support it.

## Methods

## Attributes

### basis

<span id="qiskit.chemistry.drivers.BosonicDriver.basis" />

`property basis`

return basis

**Return type**

`str`

### hf\_method

<span id="qiskit.chemistry.drivers.BosonicDriver.hf_method" />

`property hf_method`

return Hartree-Fock method

**Return type**

`str`

### molecule

<span id="qiskit.chemistry.drivers.BosonicDriver.molecule" />

`property molecule`

return molecule

**Return type**

`Optional`\[`Molecule`]

### run

<span id="qiskit.chemistry.drivers.BosonicDriver.run" />

`abstract run()`

Runs driver to produce a WatsonHamiltonian output.

**Return type**

`WatsonHamiltonian`

**Returns**

A WatsonHamiltonian comprising the bosonic data.

### supports\_molecule

<span id="qiskit.chemistry.drivers.BosonicDriver.supports_molecule" />

`property supports_molecule`

True for derived classes that support Molecule.

**Return type**

`bool`

**Returns**

True if Molecule is supported.

