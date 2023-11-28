# PSI4Driver

<span id="undefined" />

`PSI4Driver(config='molecule h2 {\\n 0 1\\n H 0.0 0.0 0.0\\n H 0.0 0.0 0.735\\n}\\n\\nset {\\n basis sto-3g\\n scf_type pk\\n reference rhf\\n', molecule=None, basis='sto-3g', hf_method=<HFMethodType.RHF: 'rhf'>)`

Bases: `qiskit.chemistry.drivers.fermionic_driver.FermionicDriver`

Qiskit chemistry driver using the PSI4 program.

See [http://www.psicode.org/](http://www.psicode.org/)

**Parameters**

*   **config** (`Union`\[`str`, `List`\[`str`]]) – A molecular configuration conforming to PSI4 format.
*   **molecule** (`Optional`\[`Molecule`]) – A driver independent Molecule definition instance may be provided. When a molecule is supplied the config parameter is ignored and the Molecule instance, along with basis and hf\_method is used to build a basic config instead. The Molecule object is read when the driver is run and converted to the driver dependent configuration for the computation. This allows, for example, the Molecule geometry to be updated to compute different points.
*   **basis** (`str`) – Basis set
*   **hf\_method** (`HFMethodType`) – Hartree-Fock Method type

**Raises**

[**QiskitChemistryError**](qiskit.chemistry.QiskitChemistryError#qiskit.chemistry.QiskitChemistryError "qiskit.chemistry.QiskitChemistryError") – Invalid Input

## Methods

|                                                                                                                                    |                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| [`run`](qiskit.chemistry.drivers.PSI4Driver.run#qiskit.chemistry.drivers.PSI4Driver.run "qiskit.chemistry.drivers.PSI4Driver.run") | Runs driver to produce a QMolecule output. |

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
