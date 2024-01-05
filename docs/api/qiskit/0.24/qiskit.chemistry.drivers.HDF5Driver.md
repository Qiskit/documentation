---
title: HDF5Driver
description: API reference for qiskit.chemistry.drivers.HDF5Driver
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.drivers.HDF5Driver
---

<span id="qiskit-chemistry-drivers-hdf5driver" />

# qiskit.chemistry.drivers.HDF5Driver

<span id="qiskit.chemistry.drivers.HDF5Driver" />

`HDF5Driver(hdf5_input='molecule.hdf5')`

Qiskit chemistry driver reading an HDF5 file.

The HDF5 file is as saved from a [`QMolecule`](qiskit.chemistry.QMolecule "qiskit.chemistry.QMolecule") instance.

**Parameters**

**hdf5\_input** (`str`) – Path to HDF5 file

### \_\_init\_\_

<span id="qiskit.chemistry.drivers.HDF5Driver.__init__" />

`__init__(hdf5_input='molecule.hdf5')`

**Parameters**

**hdf5\_input** (`str`) – Path to HDF5 file

## Methods

## Attributes

### basis

<span id="qiskit.chemistry.drivers.HDF5Driver.basis" />

`property basis`

return basis

**Return type**

`str`

### hf\_method

<span id="qiskit.chemistry.drivers.HDF5Driver.hf_method" />

`property hf_method`

return Hartree-Fock method

**Return type**

`str`

### molecule

<span id="qiskit.chemistry.drivers.HDF5Driver.molecule" />

`property molecule`

return molecule

**Return type**

`Optional`\[`Molecule`]

### run

<span id="qiskit.chemistry.drivers.HDF5Driver.run" />

`run()`

Runs driver to produce a QMolecule output.

**Return type**

`QMolecule`

**Returns**

A QMolecule containing the molecular data.

**Raises**

**LookupError** – file not found.

### supports\_molecule

<span id="qiskit.chemistry.drivers.HDF5Driver.supports_molecule" />

`property supports_molecule`

True for derived classes that support Molecule.

**Return type**

`bool`

**Returns**

True if Molecule is supported.

### work\_path

<span id="qiskit.chemistry.drivers.HDF5Driver.work_path" />

`property work_path`

Returns work path.

