# qiskit.chemistry.algorithms.ExcitedStatesSolver

<span id="undefined" />

`ExcitedStatesSolver`

The excited states calculation interface

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                      |                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.algorithms.ExcitedStatesSolver.__init__ "qiskit.chemistry.algorithms.ExcitedStatesSolver.__init__")()                 | Initialize self.                                                                      |
| [`solve`](#qiskit.chemistry.algorithms.ExcitedStatesSolver.solve "qiskit.chemistry.algorithms.ExcitedStatesSolver.solve")(driver\[, aux\_operators]) | Compute the excited states energies of the molecule that was supplied via the driver. |

<span id="undefined" />

`abstract solve(driver, aux_operators=None)`

Compute the excited states energies of the molecule that was supplied via the driver.

**Parameters**

*   **driver** (`BaseDriver`) – a chemistry driver object which defines the chemical problem that is to be solved by this calculation.
*   **aux\_operators** (`Union`\[`List`\[`FermionicOperator`], `List`\[`BosonicOperator`], `None`]) – Additional auxiliary operators to evaluate. Must be of type `FermionicOperator` if the qubit transformation is fermionic and of type `BosonicOperator` it is bosonic.

**Return type**

`Union`\[`ElectronicStructureResult`, `VibronicStructureResult`]

**Returns**

an eigenstate result
