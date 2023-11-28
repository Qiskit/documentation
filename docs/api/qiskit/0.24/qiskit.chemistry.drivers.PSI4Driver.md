<span id="qiskit-chemistry-drivers-psi4driver" />

# qiskit.chemistry.drivers.PSI4Driver

<span id="undefined" />

`PSI4Driver(config='molecule h2 {\\n 0 1\\n H 0.0 0.0 0.0\\n H 0.0 0.0 0.735\\n}\\n\\nset {\\n basis sto-3g\\n scf_type pk\\n reference rhf\\n', molecule=None, basis='sto-3g', hf_method=<HFMethodType.RHF: 'rhf'>)`

Qiskit chemistry driver using the PSI4 program.

See [http://www.psicode.org/](http://www.psicode.org/)

**Parameters**

*   **config** (`Union`\[`str`, `List`\[`str`]]) – A molecular configuration conforming to PSI4 format.
*   **molecule** (`Optional`\[`Molecule`]) – A driver independent Molecule definition instance may be provided. When a molecule is supplied the config parameter is ignored and the Molecule instance, along with basis and hf\_method is used to build a basic config instead. The Molecule object is read when the driver is run and converted to the driver dependent configuration for the computation. This allows, for example, the Molecule geometry to be updated to compute different points.
*   **basis** (`str`) – Basis set
*   **hf\_method** (`HFMethodType`) – Hartree-Fock Method type

**Raises**

[**QiskitChemistryError**](qiskit.chemistry.QiskitChemistryError#qiskit.chemistry.QiskitChemistryError "qiskit.chemistry.QiskitChemistryError") – Invalid Input

<span id="undefined" />

`__init__(config='molecule h2 {\\n 0 1\\n H 0.0 0.0 0.0\\n H 0.0 0.0 0.735\\n}\\n\\nset {\\n basis sto-3g\\n scf_type pk\\n reference rhf\\n', molecule=None, basis='sto-3g', hf_method=<HFMethodType.RHF: 'rhf'>)`

**Parameters**

*   **config** (`Union`\[`str`, `List`\[`str`]]) – A molecular configuration conforming to PSI4 format.
*   **molecule** (`Optional`\[`Molecule`]) – A driver independent Molecule definition instance may be provided. When a molecule is supplied the config parameter is ignored and the Molecule instance, along with basis and hf\_method is used to build a basic config instead. The Molecule object is read when the driver is run and converted to the driver dependent configuration for the computation. This allows, for example, the Molecule geometry to be updated to compute different points.
*   **basis** (`str`) – Basis set
*   **hf\_method** (`HFMethodType`) – Hartree-Fock Method type

**Raises**

[**QiskitChemistryError**](qiskit.chemistry.QiskitChemistryError#qiskit.chemistry.QiskitChemistryError "qiskit.chemistry.QiskitChemistryError") – Invalid Input

## Methods

|                                                                                                                                                    |                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [`__init__`](#qiskit.chemistry.drivers.PSI4Driver.__init__ "qiskit.chemistry.drivers.PSI4Driver.__init__")(\[config, molecule, basis, hf\_method]) | **type config**`Union`\[`str`, `List`\[`str`]] |
| [`run`](#qiskit.chemistry.drivers.PSI4Driver.run "qiskit.chemistry.drivers.PSI4Driver.run")()                                                      | Runs driver to produce a QMolecule output.     |

## Attributes

|                                                                                                                                       |                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [`basis`](#qiskit.chemistry.drivers.PSI4Driver.basis "qiskit.chemistry.drivers.PSI4Driver.basis")                                     | return basis                                    |
| [`hf_method`](#qiskit.chemistry.drivers.PSI4Driver.hf_method "qiskit.chemistry.drivers.PSI4Driver.hf_method")                         | return Hartree-Fock method                      |
| [`molecule`](#qiskit.chemistry.drivers.PSI4Driver.molecule "qiskit.chemistry.drivers.PSI4Driver.molecule")                            | return molecule                                 |
| [`supports_molecule`](#qiskit.chemistry.drivers.PSI4Driver.supports_molecule "qiskit.chemistry.drivers.PSI4Driver.supports_molecule") | True for derived classes that support Molecule. |

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
