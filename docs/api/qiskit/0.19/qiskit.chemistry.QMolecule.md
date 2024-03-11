---
title: QMolecule
description: API reference for qiskit.chemistry.QMolecule
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.QMolecule
---

# QMolecule

<span id="qiskit.chemistry.QMolecule" />

`QMolecule(filename=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/chemistry/qmolecule.py "view source code")

Molecule data class containing driver result.

When one of the chemistry `drivers` is run and instance of this class is returned. This contains various properties that are made available in a consistent manner across the various drivers.

Note that values here, for the same input molecule to each driver, may be vary across the drivers underlying code implementation. Also some drivers may not provide certain fields such as dipole integrals in the case of `PyQuanteDriver`.

This class provides methods to save it and load it again from an HDF5 file

## Attributes

### BOHR

<span id="qiskit.chemistry.QMolecule.BOHR" />

`= 0.52917721092`

### DEBYE

<span id="qiskit.chemistry.QMolecule.DEBYE" />

`= 0.393430307`

### QMOLECULE\_VERSION

<span id="qiskit.chemistry.QMolecule.QMOLECULE_VERSION" />

`= 2`

### core\_orbitals

<span id="qiskit.chemistry.QMolecule.core_orbitals" />

`List[int]`

Returns: A list of core orbital indices.

**Return type**

`List`\[`int`]

### filename

returns temp file path

### one\_body\_integrals

Returns one body electron integrals.

### symbols

<span id="qiskit.chemistry.QMolecule.symbols" />

`= ['_', 'H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe', 'Cs', 'Ba', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn', 'Fr', 'Ra', 'Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No', 'Lr', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Nh', 'Fl', 'Mc', 'Lv', 'Ts', 'Og']`

### two\_body\_integrals

Returns two body electron integrals.

### x\_dipole\_integrals

returns x\_dipole\_integrals

### y\_dipole\_integrals

returns y\_dipole\_integrals

### z\_dipole\_integrals

returns z\_dipole\_integrals

## Methods

### Z

<span id="qiskit.chemistry.QMolecule.Z" />

`QMolecule.Z(natom)`

### has\_dipole\_integrals

<span id="qiskit.chemistry.QMolecule.has_dipole_integrals" />

`QMolecule.has_dipole_integrals()`

Check if dipole integrals are present.

### load

<span id="qiskit.chemistry.QMolecule.load" />

`QMolecule.load()`

loads info saved.

### log

<span id="qiskit.chemistry.QMolecule.log" />

`QMolecule.log()`

log properties

### onee\_to\_spin

<span id="qiskit.chemistry.QMolecule.onee_to_spin" />

`static QMolecule.onee_to_spin(mohij, mohij_b=None, threshold=1e-12)`

Convert one-body MO integrals to spin orbital basis

Takes one body integrals in molecular orbital basis and returns integrals in spin orbitals ready for use as coefficients to one body terms 2nd quantized Hamiltonian.

**Parameters**

*   **mohij** (*numpy.ndarray*) – One body orbitals in molecular basis (Alpha)
*   **mohij\_b** (*numpy.ndarray*) – One body orbitals in molecular basis (Beta)
*   **threshold** (*float*) – Threshold value for assignments

**Returns**

One body integrals in spin orbitals

**Return type**

numpy.ndarray

### oneeints2mo

<span id="qiskit.chemistry.QMolecule.oneeints2mo" />

`static QMolecule.oneeints2mo(ints, moc)`

Converts one-body integrals from AO to MO basis

Returns one electron integrals in AO basis converted to given MO basis

**Parameters**

*   **ints** (*numpy.ndarray*) – N^2 one electron integrals in AO basis
*   **moc** (*numpy.ndarray*) – Molecular orbital coefficients

**Returns**

integrals in MO basis

**Return type**

numpy.ndarray

### remove\_file

<span id="qiskit.chemistry.QMolecule.remove_file" />

`QMolecule.remove_file(file_name=None)`

remove file

### save

<span id="qiskit.chemistry.QMolecule.save" />

`QMolecule.save(file_name=None)`

Saves the info from the driver.

### twoe\_to\_spin

<span id="qiskit.chemistry.QMolecule.twoe_to_spin" />

`static QMolecule.twoe_to_spin(mohijkl, mohijkl_bb=None, mohijkl_ba=None, threshold=1e-12)`

Convert two-body MO integrals to spin orbital basis

Takes two body integrals in molecular orbital basis and returns integrals in spin orbitals ready for use as coefficients to two body terms in 2nd quantized Hamiltonian.

**Parameters**

*   **mohijkl** (*numpy.ndarray*) – Two body orbitals in molecular basis (AlphaAlpha)
*   **mohijkl\_bb** (*numpy.ndarray*) – Two body orbitals in molecular basis (BetaBeta)
*   **mohijkl\_ba** (*numpy.ndarray*) – Two body orbitals in molecular basis (BetaAlpha)
*   **threshold** (*float*) – Threshold value for assignments

**Returns**

Two body integrals in spin orbitals

**Return type**

numpy.ndarray

### twoeints2mo

<span id="qiskit.chemistry.QMolecule.twoeints2mo" />

`static QMolecule.twoeints2mo(ints, moc)`

Converts two-body integrals from AO to MO basis

Returns two electron integrals in AO basis converted to given MO basis

**Parameters**

*   **ints** (*numpy.ndarray*) – N^2 two electron integrals in AO basis
*   **moc** (*numpy.ndarray*) – Molecular orbital coefficients

**Returns**

integrals in MO basis

**Return type**

numpy.ndarray

### twoeints2mo\_general

<span id="qiskit.chemistry.QMolecule.twoeints2mo_general" />

`static QMolecule.twoeints2mo_general(ints, moc1, moc2, moc3, moc4)`

