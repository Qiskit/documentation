# HDF5Driver

`HDF5Driver(hdf5_input='molecule.hdf5')`

Bases: `qiskit.chemistry.drivers.fermionic_driver.FermionicDriver`

Qiskit chemistry driver reading an HDF5 file.

The HDF5 file is as saved from a [`QMolecule`](qiskit.chemistry.QMolecule#qiskit.chemistry.QMolecule "qiskit.chemistry.QMolecule") instance.

**Parameters**

**hdf5\_input** (`str`) – Path to HDF5 file

## Methods

|                                                                                                                                    |                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| [`run`](qiskit.chemistry.drivers.HDF5Driver.run#qiskit.chemistry.drivers.HDF5Driver.run "qiskit.chemistry.drivers.HDF5Driver.run") | Runs driver to produce a QMolecule output. |

## Attributes

### basis

return basis

**Return type**

`str`

### hf\_method

return Hartree-Fock method

**Return type**

`str`

### molecule

return molecule

**Return type**

`Optional`\[`Molecule`]

### supports\_molecule

True for derived classes that support Molecule.

**Return type**

`bool`

**Returns**

True if Molecule is supported.

### work\_path

Returns work path.
