---
title: GaussianForcesDriver
description: API reference for qiskit.chemistry.drivers.GaussianForcesDriver
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.drivers.GaussianForcesDriver
---

<span id="qiskit-chemistry-drivers-gaussianforcesdriver" />

# qiskit.chemistry.drivers.GaussianForcesDriver

<span id="qiskit.chemistry.drivers.GaussianForcesDriver" />

`GaussianForcesDriver(jcf='\\n#p B3LYP/cc-pVTZ Freq=(Anharm) Int=Ultrafine SCF=VeryTight\\n\\nCO2 geometry optimization B3LYP/cc-pVTZ\\n\\n0 1\\nC -0.848629 2.067624 0.160992\\nO 0.098816 2.655801 -0.159738\\nO -1.796073 1.479446 0.481721\\n\\n', logfile=None, molecule=None, basis='sto-3g', normalize=True)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.8/qiskit/chemistry/drivers/gaussiand/gaussian_forces_driver.py "view source code")

Gaussian™ 16 forces driver.

**Parameters**

*   **jcf** (`Union`\[`str`, `List`\[`str`]]) – A job control file conforming to Gaussian™ 16 format. This can be provided as a single string with ‘\n’ line separators or as a list of strings.
*   **logfile** (`Optional`\[`str`]) – Instead of a job control file a log as output from running such a file can optionally be given.
*   **molecule** (`Optional`\[`Molecule`]) – If a molecule is supplied then an appropriate job control file will be built from this, and the basis, and will be used in precedence of either the logfile or the jcf params.
*   **basis** (`str`) – The basis set to be used in the resultant job control file when a molecule is provided.
*   **normalize** (`bool`) – Whether to normalize the factors used in creation of the WatsonHamiltonian as returned when this driver is run.

**Raises**

[**QiskitChemistryError**](qiskit.chemistry.QiskitChemistryError "qiskit.chemistry.QiskitChemistryError") – If jcf or molecule given and Gaussian™ 16 executable cannot be located.

### \_\_init\_\_

<span id="qiskit.chemistry.drivers.GaussianForcesDriver.__init__" />

`__init__(jcf='\\n#p B3LYP/cc-pVTZ Freq=(Anharm) Int=Ultrafine SCF=VeryTight\\n\\nCO2 geometry optimization B3LYP/cc-pVTZ\\n\\n0 1\\nC -0.848629 2.067624 0.160992\\nO 0.098816 2.655801 -0.159738\\nO -1.796073 1.479446 0.481721\\n\\n', logfile=None, molecule=None, basis='sto-3g', normalize=True)`

**Parameters**

*   **jcf** (`Union`\[`str`, `List`\[`str`]]) – A job control file conforming to Gaussian™ 16 format. This can be provided as a single string with ‘\n’ line separators or as a list of strings.
*   **logfile** (`Optional`\[`str`]) – Instead of a job control file a log as output from running such a file can optionally be given.
*   **molecule** (`Optional`\[`Molecule`]) – If a molecule is supplied then an appropriate job control file will be built from this, and the basis, and will be used in precedence of either the logfile or the jcf params.
*   **basis** (`str`) – The basis set to be used in the resultant job control file when a molecule is provided.
*   **normalize** (`bool`) – Whether to normalize the factors used in creation of the WatsonHamiltonian as returned when this driver is run.

**Raises**

[**QiskitChemistryError**](qiskit.chemistry.QiskitChemistryError "qiskit.chemistry.QiskitChemistryError") – If jcf or molecule given and Gaussian™ 16 executable cannot be located.

## Methods

|                                                                                                                                                                     |                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.drivers.GaussianForcesDriver.__init__ "qiskit.chemistry.drivers.GaussianForcesDriver.__init__")(\[jcf, logfile, molecule, basis, …]) | **type jcf**`Union`\[`str`, `List`\[`str`]]        |
| [`run`](#qiskit.chemistry.drivers.GaussianForcesDriver.run "qiskit.chemistry.drivers.GaussianForcesDriver.run")()                                                   | Runs driver to produce a WatsonHamiltonian output. |

## Attributes

|                                                                                                                                                           |                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [`basis`](#qiskit.chemistry.drivers.GaussianForcesDriver.basis "qiskit.chemistry.drivers.GaussianForcesDriver.basis")                                     | return basis                                    |
| [`hf_method`](#qiskit.chemistry.drivers.GaussianForcesDriver.hf_method "qiskit.chemistry.drivers.GaussianForcesDriver.hf_method")                         | return Hartree-Fock method                      |
| [`molecule`](#qiskit.chemistry.drivers.GaussianForcesDriver.molecule "qiskit.chemistry.drivers.GaussianForcesDriver.molecule")                            | return molecule                                 |
| [`supports_molecule`](#qiskit.chemistry.drivers.GaussianForcesDriver.supports_molecule "qiskit.chemistry.drivers.GaussianForcesDriver.supports_molecule") | True for derived classes that support Molecule. |

### basis

<span id="qiskit.chemistry.drivers.GaussianForcesDriver.basis" />

`property basis`

return basis

**Return type**

`str`

### hf\_method

<span id="qiskit.chemistry.drivers.GaussianForcesDriver.hf_method" />

`property hf_method`

return Hartree-Fock method

**Return type**

`str`

### molecule

<span id="qiskit.chemistry.drivers.GaussianForcesDriver.molecule" />

`property molecule`

return molecule

**Return type**

`Optional`\[`Molecule`]

### run

<span id="qiskit.chemistry.drivers.GaussianForcesDriver.run" />

`run()`

Runs driver to produce a WatsonHamiltonian output.

**Return type**

`WatsonHamiltonian`

**Returns**

A WatsonHamiltonian comprising the bosonic data.

### supports\_molecule

<span id="qiskit.chemistry.drivers.GaussianForcesDriver.supports_molecule" />

`property supports_molecule`

True for derived classes that support Molecule.

**Return type**

`bool`

**Returns**

True if Molecule is supported.

