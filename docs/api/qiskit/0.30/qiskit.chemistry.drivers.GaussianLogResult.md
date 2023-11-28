# GaussianLogResult

<span id="undefined" />

`GaussianLogResult(log)`

Bases: `object`

Result for Gaussian™ 16 log driver.

This result allows access to selected data from the log file that is not available via the use Gaussian 16 interfacing code when using the MatrixElement file. Since this parses the text output it is subject to the format of the log file.

**Parameters**

**log** (`Union`\[`str`, `List`\[`str`]]) – The log contents conforming to Gaussian™ 16 format either as a single string containing new line characters, or as a list of strings. If the single string has no new line characters it is treated a file name and the file contents will be read (a valid log file would be multiple lines).

**Raises**

**ValueError** – Invalid Input

## Methods

|                                                                                                                                                                                                                                     |                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [`get_watson_hamiltonian`](qiskit.chemistry.drivers.GaussianLogResult.get_watson_hamiltonian#qiskit.chemistry.drivers.GaussianLogResult.get_watson_hamiltonian "qiskit.chemistry.drivers.GaussianLogResult.get_watson_hamiltonian") | Get the force constants as a WatsonHamiltonian |

## Attributes

<span id="undefined" />

### a\_to\_h\_numbering

A to H numbering mapping.

**Return type**

`Dict`\[`str`, `int`]

**Returns**

Dictionary mapping string A numbering such as ‘1’, ‘3a’ etc from forces modes to H integer numbering

<span id="undefined" />

### cubic\_force\_constants

Cubic force constants. (3 indices, 3 values)

**Return type**

`List`\[`Tuple`\[`str`, `str`, `str`, `float`, `float`, `float`]]

**Returns**

A list of tuples each with 3 index values and 3 constant values. An empty list is returned if no such data is present in the log.

<span id="undefined" />

### log

The complete Gaussian log in the form of a list of strings.

**Return type**

`List`\[`str`]

<span id="undefined" />

### quadratic\_force\_constants

Quadratic force constants. (2 indices, 3 values)

**Return type**

`List`\[`Tuple`\[`str`, `str`, `float`, `float`, `float`]]

**Returns**

A list of tuples each with 2 index values and 3 constant values. An empty list is returned if no such data is present in the log.

<span id="undefined" />

### quartic\_force\_constants

Quartic force constants. (4 indices, 3 values)

**Return type**

`List`\[`Tuple`\[`str`, `str`, `str`, `str`, `float`, `float`, `float`]]

**Returns**

A list of tuples each with 4 index values and 3 constant values. An empty list is returned if no such data is present in the log.
