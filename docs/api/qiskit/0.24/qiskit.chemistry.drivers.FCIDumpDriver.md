<span id="qiskit-chemistry-drivers-fcidumpdriver" />

# qiskit.chemistry.drivers.FCIDumpDriver

<span id="undefined" />

`FCIDumpDriver(fcidump_input, atoms=None)`

Qiskit chemistry driver reading an FCIDump file.

The FCIDump format is partially defined in Knowles1989.

## References

**Knowles1989: Peter J. Knowles, Nicholas C. Handy,**

A determinant based full configuration interaction program, Computer Physics Communications, Volume 54, Issue 1, 1989, Pages 75-83, ISSN 0010-4655, [https://doi.org/10.1016/0010-4655(89)90033-7](https://doi.org/10.1016/0010-4655\(89\)90033-7).

**Parameters**

*   **fcidump\_input** (`str`) – Path to the FCIDump file.
*   **atoms** (`Optional`\[`List`\[`str`]]) – Allows to specify the atom list of the molecule. If it is provided, the created QMolecule instance will permit frozen core Hamiltonians. This list must consist of valid atom symbols.

**Raises**

[**QiskitChemistryError**](qiskit.chemistry.QiskitChemistryError#qiskit.chemistry.QiskitChemistryError "qiskit.chemistry.QiskitChemistryError") – If `fcidump_input` is not a string or if `atoms` is not a list of valid atomic symbols as specified in `QMolecule`.

<span id="undefined" />

`__init__(fcidump_input, atoms=None)`

**Parameters**

*   **fcidump\_input** (`str`) – Path to the FCIDump file.
*   **atoms** (`Optional`\[`List`\[`str`]]) – Allows to specify the atom list of the molecule. If it is provided, the created QMolecule instance will permit frozen core Hamiltonians. This list must consist of valid atom symbols.

**Raises**

[**QiskitChemistryError**](qiskit.chemistry.QiskitChemistryError#qiskit.chemistry.QiskitChemistryError "qiskit.chemistry.QiskitChemistryError") – If `fcidump_input` is not a string or if `atoms` is not a list of valid atomic symbols as specified in `QMolecule`.

## Methods

|                                                                                                                                            |                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| [`__init__`](#qiskit.chemistry.drivers.FCIDumpDriver.__init__ "qiskit.chemistry.drivers.FCIDumpDriver.__init__")(fcidump\_input\[, atoms]) | **type fcidump\_input**`str`                           |
| [`dump`](#qiskit.chemistry.drivers.FCIDumpDriver.dump "qiskit.chemistry.drivers.FCIDumpDriver.dump")(q\_mol, outpath\[, orbsym, isym])     | Convenience method to produce an FCIDump output file.  |
| [`run`](#qiskit.chemistry.drivers.FCIDumpDriver.run "qiskit.chemistry.drivers.FCIDumpDriver.run")()                                        | Constructs a QMolecule instance out of a FCIDump file. |

## Attributes

|                                                                                                                                             |                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [`basis`](#qiskit.chemistry.drivers.FCIDumpDriver.basis "qiskit.chemistry.drivers.FCIDumpDriver.basis")                                     | return basis                                    |
| [`hf_method`](#qiskit.chemistry.drivers.FCIDumpDriver.hf_method "qiskit.chemistry.drivers.FCIDumpDriver.hf_method")                         | return Hartree-Fock method                      |
| [`molecule`](#qiskit.chemistry.drivers.FCIDumpDriver.molecule "qiskit.chemistry.drivers.FCIDumpDriver.molecule")                            | return molecule                                 |
| [`supports_molecule`](#qiskit.chemistry.drivers.FCIDumpDriver.supports_molecule "qiskit.chemistry.drivers.FCIDumpDriver.supports_molecule") | True for derived classes that support Molecule. |

<span id="undefined" />

`property basis`

return basis

**Return type**

`str`

<span id="undefined" />

`static dump(q_mol, outpath, orbsym=None, isym=1)`

Convenience method to produce an FCIDump output file.

**Parameters**

*   **outpath** (`str`) – Path to the output file.
*   **q\_mol** (`QMolecule`) – QMolecule data to be dumped. It is assumed that the nuclear\_repulsion\_energy in this QMolecule instance contains the inactive core energy.
*   **orbsym** (`Optional`\[`List`\[`str`]]) – A list of spatial symmetries of the orbitals.
*   **isym** (`int`) – The spatial symmetry of the wave function.

**Return type**

`None`

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

Constructs a QMolecule instance out of a FCIDump file.

**Return type**

`QMolecule`

**Returns**

A QMolecule instance populated with a minimal set of required data.

<span id="undefined" />

`property supports_molecule`

True for derived classes that support Molecule.

**Return type**

`bool`

**Returns**

True if Molecule is supported.
