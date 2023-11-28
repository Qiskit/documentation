# qiskit.opflow\.evolutions.EvolutionBase

<span id="undefined" />

`EvolutionBase`

A base for Evolution converters. Evolutions are converters which traverse an Operator tree, replacing any `EvolvedOp` e with a Schrodinger equation-style evolution `CircuitOp` equalling or approximating the matrix exponential of -i \* the Operator contained inside (e.primitive). The Evolutions are essentially implementations of Hamiltonian Simulation algorithms, including various methods for Trotterization.

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                         |                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.opflow.evolutions.EvolutionBase.__init__ "qiskit.opflow.evolutions.EvolutionBase.__init__")()      | Initialize self.                                                                                  |
| [`convert`](#qiskit.opflow.evolutions.EvolutionBase.convert "qiskit.opflow.evolutions.EvolutionBase.convert")(operator) | Traverse the operator, replacing any `EvolutionOps` with their equivalent evolution `CircuitOps`. |

<span id="undefined" />

`abstract convert(operator)`

Traverse the operator, replacing any `EvolutionOps` with their equivalent evolution `CircuitOps`.

> **Args:**
>
> operator: The Operator to convert.

**Return type**

`OperatorBase`

**Returns**

The converted Operator, with `EvolutionOps` replaced by `CircuitOps`.
