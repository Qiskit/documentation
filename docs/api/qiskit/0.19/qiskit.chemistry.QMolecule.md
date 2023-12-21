---
title: QMolecule
description: API reference for qiskit.chemistry.QMolecule
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.QMolecule
---

# QMolecule

<span id="qiskit.chemistry.QMolecule" />

`QMolecule(filename=None)`

Molecule data class containing driver result.

When one of the chemistry `drivers` is run and instance of this class is returned. This contains various properties that are made available in a consistent manner across the various drivers.

Note that values here, for the same input molecule to each driver, may be vary across the drivers underlying code implementation. Also some drivers may not provide certain fields such as dipole integrals in the case of `PyQuanteDriver`.

This class provides methods to save it and load it again from an HDF5 file

## Attributes

|                                                                                                                                 |                                          |
| ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| [`QMolecule.BOHR`](qiskit.chemistry.QMolecule.BOHR "qiskit.chemistry.QMolecule.BOHR")                                           |                                          |
| [`QMolecule.DEBYE`](qiskit.chemistry.QMolecule.DEBYE "qiskit.chemistry.QMolecule.DEBYE")                                        |                                          |
| [`QMolecule.QMOLECULE_VERSION`](qiskit.chemistry.QMolecule.QMOLECULE_VERSION "qiskit.chemistry.QMolecule.QMOLECULE_VERSION")    |                                          |
| [`QMolecule.core_orbitals`](qiskit.chemistry.QMolecule.core_orbitals "qiskit.chemistry.QMolecule.core_orbitals")                | Returns: A list of core orbital indices. |
| [`QMolecule.filename`](qiskit.chemistry.QMolecule.filename "qiskit.chemistry.QMolecule.filename")                               | returns temp file path                   |
| [`QMolecule.one_body_integrals`](qiskit.chemistry.QMolecule.one_body_integrals "qiskit.chemistry.QMolecule.one_body_integrals") | Returns one body electron integrals.     |
| [`QMolecule.symbols`](qiskit.chemistry.QMolecule.symbols "qiskit.chemistry.QMolecule.symbols")                                  |                                          |
| [`QMolecule.two_body_integrals`](qiskit.chemistry.QMolecule.two_body_integrals "qiskit.chemistry.QMolecule.two_body_integrals") | Returns two body electron integrals.     |
| [`QMolecule.x_dipole_integrals`](qiskit.chemistry.QMolecule.x_dipole_integrals "qiskit.chemistry.QMolecule.x_dipole_integrals") | returns x\_dipole\_integrals             |
| [`QMolecule.y_dipole_integrals`](qiskit.chemistry.QMolecule.y_dipole_integrals "qiskit.chemistry.QMolecule.y_dipole_integrals") | returns y\_dipole\_integrals             |
| [`QMolecule.z_dipole_integrals`](qiskit.chemistry.QMolecule.z_dipole_integrals "qiskit.chemistry.QMolecule.z_dipole_integrals") | returns z\_dipole\_integrals             |

## Methods

|                                                                                                                                                   |                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| [`QMolecule.Z`](qiskit.chemistry.QMolecule.Z "qiskit.chemistry.QMolecule.Z")(natom)                                                               |                                                     |
| [`QMolecule.has_dipole_integrals`](qiskit.chemistry.QMolecule.has_dipole_integrals "qiskit.chemistry.QMolecule.has_dipole_integrals")()           | Check if dipole integrals are present.              |
| [`QMolecule.load`](qiskit.chemistry.QMolecule.load "qiskit.chemistry.QMolecule.load")()                                                           | loads info saved.                                   |
| [`QMolecule.log`](qiskit.chemistry.QMolecule.log "qiskit.chemistry.QMolecule.log")()                                                              | log properties                                      |
| [`QMolecule.onee_to_spin`](qiskit.chemistry.QMolecule.onee_to_spin "qiskit.chemistry.QMolecule.onee_to_spin")(mohij\[, mohij\_b, …])              | Convert one-body MO integrals to spin orbital basis |
| [`QMolecule.oneeints2mo`](qiskit.chemistry.QMolecule.oneeints2mo "qiskit.chemistry.QMolecule.oneeints2mo")(ints, moc)                             | Converts one-body integrals from AO to MO basis     |
| [`QMolecule.remove_file`](qiskit.chemistry.QMolecule.remove_file "qiskit.chemistry.QMolecule.remove_file")(\[file\_name])                         | remove file                                         |
| [`QMolecule.save`](qiskit.chemistry.QMolecule.save "qiskit.chemistry.QMolecule.save")(\[file\_name])                                              | Saves the info from the driver.                     |
| [`QMolecule.twoe_to_spin`](qiskit.chemistry.QMolecule.twoe_to_spin "qiskit.chemistry.QMolecule.twoe_to_spin")(mohijkl\[, …])                      | Convert two-body MO integrals to spin orbital basis |
| [`QMolecule.twoeints2mo`](qiskit.chemistry.QMolecule.twoeints2mo "qiskit.chemistry.QMolecule.twoeints2mo")(ints, moc)                             | Converts two-body integrals from AO to MO basis     |
| [`QMolecule.twoeints2mo_general`](qiskit.chemistry.QMolecule.twoeints2mo_general "qiskit.chemistry.QMolecule.twoeints2mo_general")(ints, moc1, …) |                                                     |

