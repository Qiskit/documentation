# qiskit.chemistry.drivers.GaussianDriver

<span id="undefined" />

`GaussianDriver(config='# rhf/sto-3g scf(conventional)\\n\\nh2 molecule\\n\\n0 1\\nH 0.0 0.0 0.0\\nH 0.0 0.0 0.735\\n\\n', molecule=None, basis='sto-3g', hf_method=<HFMethodType.RHF: 'rhf'>)`

Qiskit chemistry driver using the Gaussian™ 16 program.

See [http://gaussian.com/gaussian16/](http://gaussian.com/gaussian16/)

This driver uses the Gaussian open-source Gaussian 16 interfacing code in order to access integrals and other electronic structure information as computed by G16 for the given molecule. The job control file, as provided here for the molecular configuration, is augmented for our needs here such as to have it output a MatrixElement file.

**Parameters**

*   **config** (`Union`\[`str`, `List`\[`str`]]) – A molecular configuration conforming to Gaussian™ 16 format.
*   **molecule** (`Optional`\[`Molecule`]) – A driver independent Molecule definition instance may be provided. When a molecule is supplied the config parameter is ignored and the Molecule instance, along with basis and hf\_method is used to build a basic config instead. The Molecule object is read when the driver is run and converted to the driver dependent configuration for the computation. This allows, for example, the Molecule geometry to be updated to compute different points.
*   **basis** (`str`) – Basis set
*   **hf\_method** (`HFMethodType`) – Hartree-Fock Method type

**Raises**

[**QiskitChemistryError**](qiskit.chemistry.QiskitChemistryError#qiskit.chemistry.QiskitChemistryError "qiskit.chemistry.QiskitChemistryError") – Invalid Input

<span id="undefined" />

`__init__(config='# rhf/sto-3g scf(conventional)\\n\\nh2 molecule\\n\\n0 1\\nH 0.0 0.0 0.0\\nH 0.0 0.0 0.735\\n\\n', molecule=None, basis='sto-3g', hf_method=<HFMethodType.RHF: 'rhf'>)`

**Parameters**

*   **config** (`Union`\[`str`, `List`\[`str`]]) – A molecular configuration conforming to Gaussian™ 16 format.
*   **molecule** (`Optional`\[`Molecule`]) – A driver independent Molecule definition instance may be provided. When a molecule is supplied the config parameter is ignored and the Molecule instance, along with basis and hf\_method is used to build a basic config instead. The Molecule object is read when the driver is run and converted to the driver dependent configuration for the computation. This allows, for example, the Molecule geometry to be updated to compute different points.
*   **basis** (`str`) – Basis set
*   **hf\_method** (`HFMethodType`) – Hartree-Fock Method type

**Raises**

[**QiskitChemistryError**](qiskit.chemistry.QiskitChemistryError#qiskit.chemistry.QiskitChemistryError "qiskit.chemistry.QiskitChemistryError") – Invalid Input

## Methods

|                                                                                                                                                            |                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [`__init__`](#qiskit.chemistry.drivers.GaussianDriver.__init__ "qiskit.chemistry.drivers.GaussianDriver.__init__")(\[config, molecule, basis, hf\_method]) | **type config**`Union`\[`str`, `List`\[`str`]] |
| [`run`](#qiskit.chemistry.drivers.GaussianDriver.run "qiskit.chemistry.drivers.GaussianDriver.run")()                                                      | Runs driver to produce a QMolecule output.     |

## Attributes

|                                                                                                                                               |                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [`basis`](#qiskit.chemistry.drivers.GaussianDriver.basis "qiskit.chemistry.drivers.GaussianDriver.basis")                                     | return basis                                    |
| [`hf_method`](#qiskit.chemistry.drivers.GaussianDriver.hf_method "qiskit.chemistry.drivers.GaussianDriver.hf_method")                         | return Hartree-Fock method                      |
| [`molecule`](#qiskit.chemistry.drivers.GaussianDriver.molecule "qiskit.chemistry.drivers.GaussianDriver.molecule")                            | return molecule                                 |
| [`supports_molecule`](#qiskit.chemistry.drivers.GaussianDriver.supports_molecule "qiskit.chemistry.drivers.GaussianDriver.supports_molecule") | True for derived classes that support Molecule. |

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

`run()`

Runs driver to produce a QMolecule output.

**Return type**

`QMolecule`

**Returns**

A QMolecule containing the molecular data.

<span id="undefined" />

`property supports_molecule`

True for derived classes that support Molecule.

**Return type**

`bool`

**Returns**

True if Molecule is supported.
