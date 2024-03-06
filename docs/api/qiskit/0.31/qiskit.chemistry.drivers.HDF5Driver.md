---
title: HDF5Driver
description: API reference for qiskit.chemistry.drivers.HDF5Driver
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.drivers.HDF5Driver
---

# HDF5Driver

<span id="qiskit.chemistry.drivers.HDF5Driver" />

`HDF5Driver(hdf5_input='molecule.hdf5')` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/chemistry/drivers/hdf5d/hdf5driver.py "view source code")

Bases: `qiskit.chemistry.drivers.fermionic_driver.FermionicDriver`

Qiskit chemistry driver reading an HDF5 file.

The HDF5 file is as saved from a [`QMolecule`](qiskit.chemistry.QMolecule "qiskit.chemistry.QMolecule") instance.

**Parameters**

**hdf5\_input** (`str`) – Path to HDF5 file

## Methods

### run

<span id="qiskit.chemistry.drivers.HDF5Driver.run" />

`HDF5Driver.run()`

Runs driver to produce a QMolecule output.

**Return type**

`QMolecule`

**Returns**

A QMolecule containing the molecular data.

**Raises**

**LookupError** – file not found.

## Attributes

<span id="qiskit.chemistry.drivers.HDF5Driver.basis" />

### basis

return basis

**Return type**

`str`

<span id="qiskit.chemistry.drivers.HDF5Driver.hf_method" />

### hf\_method

return Hartree-Fock method

**Return type**

`str`

<span id="qiskit.chemistry.drivers.HDF5Driver.molecule" />

### molecule

return molecule

**Return type**

`Optional`\[`Molecule`]

<span id="qiskit.chemistry.drivers.HDF5Driver.supports_molecule" />

### supports\_molecule

True for derived classes that support Molecule.

**Return type**

`bool`

**Returns**

True if Molecule is supported.

<span id="qiskit.chemistry.drivers.HDF5Driver.work_path" />

### work\_path

Returns work path.

