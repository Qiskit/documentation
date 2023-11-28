# QMolecule

<span id="undefined" />

`QMolecule(filename=None)`

Bases: `object`

Molecule data class containing driver result.

When one of the chemistry [`drivers`](qiskit.chemistry.drivers#module-qiskit.chemistry.drivers "qiskit.chemistry.drivers") is run and instance of this class is returned. This contains various properties that are made available in a consistent manner across the various drivers.

Note that values here, for the same input molecule to each driver, may be vary across the drivers underlying code implementation. Also some drivers may not provide certain fields such as dipole integrals in the case of [`PyQuanteDriver`](qiskit.chemistry.drivers.PyQuanteDriver#qiskit.chemistry.drivers.PyQuanteDriver "qiskit.chemistry.drivers.PyQuanteDriver").

This class provides methods to save it and load it again from an HDF5 file

## Methods

|                                                                                                                                                                             |                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| [`Z`](qiskit.chemistry.QMolecule.Z#qiskit.chemistry.QMolecule.Z "qiskit.chemistry.QMolecule.Z")                                                                             |                                                     |
| [`has_dipole_integrals`](qiskit.chemistry.QMolecule.has_dipole_integrals#qiskit.chemistry.QMolecule.has_dipole_integrals "qiskit.chemistry.QMolecule.has_dipole_integrals") | Check if dipole integrals are present.              |
| [`load`](qiskit.chemistry.QMolecule.load#qiskit.chemistry.QMolecule.load "qiskit.chemistry.QMolecule.load")                                                                 | loads info saved.                                   |
| [`log`](qiskit.chemistry.QMolecule.log#qiskit.chemistry.QMolecule.log "qiskit.chemistry.QMolecule.log")                                                                     | log properties                                      |
| [`onee_to_spin`](qiskit.chemistry.QMolecule.onee_to_spin#qiskit.chemistry.QMolecule.onee_to_spin "qiskit.chemistry.QMolecule.onee_to_spin")                                 | Convert one-body MO integrals to spin orbital basis |
| [`oneeints2mo`](qiskit.chemistry.QMolecule.oneeints2mo#qiskit.chemistry.QMolecule.oneeints2mo "qiskit.chemistry.QMolecule.oneeints2mo")                                     | Converts one-body integrals from AO to MO basis     |
| [`remove_file`](qiskit.chemistry.QMolecule.remove_file#qiskit.chemistry.QMolecule.remove_file "qiskit.chemistry.QMolecule.remove_file")                                     | remove file                                         |
| [`save`](qiskit.chemistry.QMolecule.save#qiskit.chemistry.QMolecule.save "qiskit.chemistry.QMolecule.save")                                                                 | Saves the info from the driver.                     |
| [`twoe_to_spin`](qiskit.chemistry.QMolecule.twoe_to_spin#qiskit.chemistry.QMolecule.twoe_to_spin "qiskit.chemistry.QMolecule.twoe_to_spin")                                 | Convert two-body MO integrals to spin orbital basis |
| [`twoeints2mo`](qiskit.chemistry.QMolecule.twoeints2mo#qiskit.chemistry.QMolecule.twoeints2mo "qiskit.chemistry.QMolecule.twoeints2mo")                                     | Converts two-body integrals from AO to MO basis     |
| [`twoeints2mo_general`](qiskit.chemistry.QMolecule.twoeints2mo_general#qiskit.chemistry.QMolecule.twoeints2mo_general "qiskit.chemistry.QMolecule.twoeints2mo_general")     |                                                     |

## Attributes

<span id="undefined" />

### BOHR

`= 0.52917721092`

<span id="undefined" />

### DEBYE

`= 0.393430307`

<span id="undefined" />

### QMOLECULE\_VERSION

`= 2`

<span id="undefined" />

### core\_orbitals

Returns: A list of core orbital indices.

**Return type**

`List`\[`int`]

<span id="undefined" />

### filename

returns temp file path

<span id="undefined" />

### one\_body\_integrals

Returns one body electron integrals.

<span id="undefined" />

### symbols

`= ['_', 'H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe', 'Cs', 'Ba', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn', 'Fr', 'Ra', 'Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No', 'Lr', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Nh', 'Fl', 'Mc', 'Lv', 'Ts', 'Og']`

<span id="undefined" />

### two\_body\_integrals

Returns two body electron integrals.

<span id="undefined" />

### x\_dipole\_integrals

returns x\_dipole\_integrals

<span id="undefined" />

### y\_dipole\_integrals

returns y\_dipole\_integrals

<span id="undefined" />

### z\_dipole\_integrals

returns z\_dipole\_integrals
