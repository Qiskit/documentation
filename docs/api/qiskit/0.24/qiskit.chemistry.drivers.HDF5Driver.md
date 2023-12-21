<span id="qiskit-chemistry-drivers-hdf5driver" />

# qiskit.chemistry.drivers.HDF5Driver

`HDF5Driver(hdf5_input='molecule.hdf5')`

Qiskit chemistry driver reading an HDF5 file.

The HDF5 file is as saved from a [`QMolecule`](qiskit.chemistry.QMolecule#qiskit.chemistry.QMolecule "qiskit.chemistry.QMolecule") instance.

**Parameters**

**hdf5\_input** (`str`) – Path to HDF5 file

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

`property basis`

return basis

**Return type**

`str`

`property hf_method`

return Hartree-Fock method

**Return type**

`str`

`property molecule`

return molecule

**Return type**

`Optional`\[`Molecule`]

`run()`

Runs driver to produce a QMolecule output.

**Return type**

`QMolecule`

**Returns**

A QMolecule containing the molecular data.

**Raises**

**LookupError** – file not found.

`property supports_molecule`

True for derived classes that support Molecule.

**Return type**

`bool`

**Returns**

True if Molecule is supported.

`property work_path`

Returns work path.
