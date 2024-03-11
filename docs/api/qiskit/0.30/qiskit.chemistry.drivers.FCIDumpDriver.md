---
title: FCIDumpDriver
description: API reference for qiskit.chemistry.drivers.FCIDumpDriver
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.drivers.FCIDumpDriver
---

# FCIDumpDriver

<span id="qiskit.chemistry.drivers.FCIDumpDriver" />

`FCIDumpDriver(fcidump_input, atoms=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/chemistry/drivers/fcidumpd/fcidumpdriver.py "view source code")

Bases: `qiskit.chemistry.drivers.fermionic_driver.FermionicDriver`

Qiskit chemistry driver reading an FCIDump file.

The FCIDump format is partially defined in Knowles1989.

**References**

**Knowles1989: Peter J. Knowles, Nicholas C. Handy,**

A determinant based full configuration interaction program, Computer Physics Communications, Volume 54, Issue 1, 1989, Pages 75-83, ISSN 0010-4655, [https://doi.org/10.1016/0010-4655(89)90033-7](https://doi.org/10.1016/0010-4655\(89\)90033-7).

**Parameters**

*   **fcidump\_input** (`str`) – Path to the FCIDump file.
*   **atoms** (`Optional`\[`List`\[`str`]]) – Allows to specify the atom list of the molecule. If it is provided, the created QMolecule instance will permit frozen core Hamiltonians. This list must consist of valid atom symbols.

**Raises**

[**QiskitChemistryError**](qiskit.chemistry.QiskitChemistryError "qiskit.chemistry.QiskitChemistryError") – If `fcidump_input` is not a string or if `atoms` is not a list of valid atomic symbols as specified in `QMolecule`.

## Methods

### dump

<span id="qiskit.chemistry.drivers.FCIDumpDriver.dump" />

`static FCIDumpDriver.dump(q_mol, outpath, orbsym=None, isym=1)`

Convenience method to produce an FCIDump output file.

**Parameters**

*   **outpath** (`str`) – Path to the output file.
*   **q\_mol** (`QMolecule`) – QMolecule data to be dumped. It is assumed that the nuclear\_repulsion\_energy in this QMolecule instance contains the inactive core energy.
*   **orbsym** (`Optional`\[`List`\[`str`]]) – A list of spatial symmetries of the orbitals.
*   **isym** (`int`) – The spatial symmetry of the wave function.

**Return type**

`None`

### run

<span id="qiskit.chemistry.drivers.FCIDumpDriver.run" />

`FCIDumpDriver.run()`

Constructs a QMolecule instance out of a FCIDump file.

**Return type**

`QMolecule`

**Returns**

A QMolecule instance populated with a minimal set of required data.

## Attributes

<span id="qiskit.chemistry.drivers.FCIDumpDriver.basis" />

### basis

return basis

**Return type**

`str`

<span id="qiskit.chemistry.drivers.FCIDumpDriver.hf_method" />

### hf\_method

return Hartree-Fock method

**Return type**

`str`

<span id="qiskit.chemistry.drivers.FCIDumpDriver.molecule" />

### molecule

return molecule

**Return type**

`Optional`\[`Molecule`]

<span id="qiskit.chemistry.drivers.FCIDumpDriver.supports_molecule" />

### supports\_molecule

True for derived classes that support Molecule.

**Return type**

`bool`

**Returns**

True if Molecule is supported.

