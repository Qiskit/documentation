# FCIDumpDriver

<span id="undefined" />

`FCIDumpDriver(fcidump_input, atoms=None)`

Bases: `qiskit.chemistry.drivers.fermionic_driver.FermionicDriver`

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

## Methods

|                                                                                                                                                 |                                                        |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| [`dump`](qiskit.chemistry.drivers.FCIDumpDriver.dump#qiskit.chemistry.drivers.FCIDumpDriver.dump "qiskit.chemistry.drivers.FCIDumpDriver.dump") | Convenience method to produce an FCIDump output file.  |
| [`run`](qiskit.chemistry.drivers.FCIDumpDriver.run#qiskit.chemistry.drivers.FCIDumpDriver.run "qiskit.chemistry.drivers.FCIDumpDriver.run")     | Constructs a QMolecule instance out of a FCIDump file. |

## Attributes

<span id="undefined" />

### basis

return basis

**Return type**

`str`

<span id="undefined" />

### hf\_method

return Hartree-Fock method

**Return type**

`str`

<span id="undefined" />

### molecule

return molecule

**Return type**

`Optional`\[`Molecule`]

<span id="undefined" />

### supports\_molecule

True for derived classes that support Molecule.

**Return type**

`bool`

**Returns**

True if Molecule is supported.
