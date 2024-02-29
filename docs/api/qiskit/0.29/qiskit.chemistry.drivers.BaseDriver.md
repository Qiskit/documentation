---
title: BaseDriver
description: API reference for qiskit.chemistry.drivers.BaseDriver
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.drivers.BaseDriver
---

# BaseDriver

<span id="qiskit.chemistry.drivers.BaseDriver" />

`BaseDriver(molecule=None, basis='sto3g', hf_method='rhf', supports_molecule=False)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/chemistry/drivers/base_driver.py "view source code")

Bases: `abc.ABC`

Base class for Qiskit’s chemistry drivers.

**Parameters**

*   **molecule** (`Optional`\[`Molecule`]) – molecule
*   **basis** (`str`) – basis set
*   **hf\_method** (`str`) – Hartree-Fock Method type
*   **supports\_molecule** (`bool`) – Indicates if driver supports molecule

**Raises**

[**QiskitChemistryError**](qiskit.chemistry.QiskitChemistryError "qiskit.chemistry.QiskitChemistryError") – Molecule passed but driver doesn’t support it.

## Attributes

<span id="qiskit.chemistry.drivers.BaseDriver.basis" />

### basis

return basis

**Return type**

`str`

<span id="qiskit.chemistry.drivers.BaseDriver.hf_method" />

### hf\_method

return Hartree-Fock method

**Return type**

`str`

<span id="qiskit.chemistry.drivers.BaseDriver.molecule" />

### molecule

return molecule

**Return type**

`Optional`\[`Molecule`]

<span id="qiskit.chemistry.drivers.BaseDriver.supports_molecule" />

### supports\_molecule

True for derived classes that support Molecule.

**Return type**

`bool`

**Returns**

True if Molecule is supported.

