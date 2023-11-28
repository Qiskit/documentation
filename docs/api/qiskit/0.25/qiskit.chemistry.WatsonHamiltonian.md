# qiskit.chemistry.WatsonHamiltonian

<span id="undefined" />

`WatsonHamiltonian(data, num_modes)`

Watson Hamiltonian class containing the results of a driver’s anharmonic calculation

**Parameters**

*   **data** (`List`\[`List`\[`Union`\[`int`, `float`]]]) – Hamiltonian matrix elements
*   **num\_modes** (`int`) – number of modes

<span id="undefined" />

`__init__(data, num_modes)`

**Parameters**

*   **data** (`List`\[`List`\[`Union`\[`int`, `float`]]]) – Hamiltonian matrix elements
*   **num\_modes** (`int`) – number of modes

## Methods

|                                                                                                                            |                                                         |
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.WatsonHamiltonian.__init__ "qiskit.chemistry.WatsonHamiltonian.__init__")(data, num\_modes) | **type data**`List`\[`List`\[`Union`\[`int`, `float`]]] |

## Attributes

|                                                                                                             |                                                |
| ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [`data`](#qiskit.chemistry.WatsonHamiltonian.data "qiskit.chemistry.WatsonHamiltonian.data")                | Returns the matrix elements of the Hamiltonian |
| [`num_modes`](#qiskit.chemistry.WatsonHamiltonian.num_modes "qiskit.chemistry.WatsonHamiltonian.num_modes") | Returns the number of modes                    |

<span id="undefined" />

`property data`

Returns the matrix elements of the Hamiltonian

**Return type**

`List`\[`List`\[`Union`\[`int`, `float`]]]

<span id="undefined" />

`property num_modes`

Returns the number of modes

**Return type**

`int`
