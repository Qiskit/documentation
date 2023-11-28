# qiskit.chemistry.drivers.HDF5Driver

<span id="undefined" />

`HDF5Driver(hdf5_input='molecule.hdf5')`

Qiskit chemistry driver reading an HDF5 file.

The HDF5 file is as saved from a [`QMolecule`](qiskit.chemistry.QMolecule#qiskit.chemistry.QMolecule "qiskit.chemistry.QMolecule") instance.

**Parameters**

**hdf5\_input** (`str`) – Path to HDF5 file

<span id="undefined" />

`__init__(hdf5_input='molecule.hdf5')`

**Parameters**

**hdf5\_input** (`str`) – Path to HDF5 file

## Methods

|                                                                                                                            |                                            |
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| [`__init__`](#qiskit.chemistry.drivers.HDF5Driver.__init__ "qiskit.chemistry.drivers.HDF5Driver.__init__")(\[hdf5\_input]) | **type hdf5\_input**`str`                  |
| [`run`](#qiskit.chemistry.drivers.HDF5Driver.run "qiskit.chemistry.drivers.HDF5Driver.run")()                              | Runs driver to produce a QMolecule output. |

## Attributes

|                                                                                                                                       |                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [`basis`](#qiskit.chemistry.drivers.HDF5Driver.basis "qiskit.chemistry.drivers.HDF5Driver.basis")                                     | return basis                                    |
| [`hf_method`](#qiskit.chemistry.drivers.HDF5Driver.hf_method "qiskit.chemistry.drivers.HDF5Driver.hf_method")                         | return Hartree-Fock method                      |
| [`molecule`](#qiskit.chemistry.drivers.HDF5Driver.molecule "qiskit.chemistry.drivers.HDF5Driver.molecule")                            | return molecule                                 |
| [`supports_molecule`](#qiskit.chemistry.drivers.HDF5Driver.supports_molecule "qiskit.chemistry.drivers.HDF5Driver.supports_molecule") | True for derived classes that support Molecule. |
| [`work_path`](#qiskit.chemistry.drivers.HDF5Driver.work_path "qiskit.chemistry.drivers.HDF5Driver.work_path")                         | Returns work path.                              |

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

**Raises**

**LookupError** – file not found.

<span id="undefined" />

`property supports_molecule`

True for derived classes that support Molecule.

**Return type**

`bool`

**Returns**

True if Molecule is supported.

<span id="undefined" />

`property work_path`

Returns work path.
