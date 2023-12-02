<span id="qiskit-chemistry-drivers-gaussianlogdriver" />

# qiskit.chemistry.drivers.GaussianLogDriver

<span id="undefined" />

`GaussianLogDriver(jcf)`

Gaussian™ 16 log driver.

Qiskit chemistry driver using the Gaussian™ 16 program that provides the log back, via [`GaussianLogResult`](qiskit.chemistry.drivers.GaussianLogResult#qiskit.chemistry.drivers.GaussianLogResult "qiskit.chemistry.drivers.GaussianLogResult"), for access to the log and data recorded there.

See [http://gaussian.com/gaussian16/](http://gaussian.com/gaussian16/)

This driver does not use Gaussian 16 interfacing code, as certain data such as forces properties are not present in the MatrixElement file. The log is returned as a [`GaussianLogResult`](qiskit.chemistry.drivers.GaussianLogResult#qiskit.chemistry.drivers.GaussianLogResult "qiskit.chemistry.drivers.GaussianLogResult") allowing it to be parsed for whatever data may be of interest. This result class also contains ready access to certain data within the log.

**Parameters**

**jcf** (`Union`\[`str`, `List`\[`str`]]) – A job control file conforming to Gaussian™ 16 format. This can be provided as a single string with ‘\n’ line separators or as a list of strings.

**Raises**

[**QiskitChemistryError**](qiskit.chemistry.QiskitChemistryError#qiskit.chemistry.QiskitChemistryError "qiskit.chemistry.QiskitChemistryError") – Invalid Input

<span id="undefined" />

`__init__(jcf)`

**Parameters**

**jcf** (`Union`\[`str`, `List`\[`str`]]) – A job control file conforming to Gaussian™ 16 format. This can be provided as a single string with ‘\n’ line separators or as a list of strings.

**Raises**

[**QiskitChemistryError**](qiskit.chemistry.QiskitChemistryError#qiskit.chemistry.QiskitChemistryError "qiskit.chemistry.QiskitChemistryError") – Invalid Input

## Methods

|                                                                                                                               |                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`__init__`](#qiskit.chemistry.drivers.GaussianLogDriver.__init__ "qiskit.chemistry.drivers.GaussianLogDriver.__init__")(jcf) | **type jcf**`Union`\[`str`, `List`\[`str`]]                              |
| [`run`](#qiskit.chemistry.drivers.GaussianLogDriver.run "qiskit.chemistry.drivers.GaussianLogDriver.run")()                   | Runs the driver to produce a result given the supplied job control file. |

## Attributes

|                                                                                                                                                     |                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [`basis`](#qiskit.chemistry.drivers.GaussianLogDriver.basis "qiskit.chemistry.drivers.GaussianLogDriver.basis")                                     | return basis                                    |
| [`hf_method`](#qiskit.chemistry.drivers.GaussianLogDriver.hf_method "qiskit.chemistry.drivers.GaussianLogDriver.hf_method")                         | return Hartree-Fock method                      |
| [`molecule`](#qiskit.chemistry.drivers.GaussianLogDriver.molecule "qiskit.chemistry.drivers.GaussianLogDriver.molecule")                            | return molecule                                 |
| [`supports_molecule`](#qiskit.chemistry.drivers.GaussianLogDriver.supports_molecule "qiskit.chemistry.drivers.GaussianLogDriver.supports_molecule") | True for derived classes that support Molecule. |

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

Runs the driver to produce a result given the supplied job control file.

**Return type**

`GaussianLogResult`

**Returns**

A log file result.

**Raises**

[**QiskitChemistryError**](qiskit.chemistry.QiskitChemistryError#qiskit.chemistry.QiskitChemistryError "qiskit.chemistry.QiskitChemistryError") – Missing output log

<span id="undefined" />

`property supports_molecule`

True for derived classes that support Molecule.

**Return type**

`bool`

**Returns**

True if Molecule is supported.
