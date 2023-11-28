<span id="qiskit-aqua-operators-evolutions-evolutionfactory" />

# qiskit.aqua.operators.evolutions.EvolutionFactory

<span id="undefined" />

`EvolutionFactory`

A factory class for convenient automatic selection of an Evolution algorithm based on the Operator to be converted.

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                            |                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.operators.evolutions.EvolutionFactory.__init__ "qiskit.aqua.operators.evolutions.EvolutionFactory.__init__")()   | Initialize self.                                                                                                     |
| [`build`](#qiskit.aqua.operators.evolutions.EvolutionFactory.build "qiskit.aqua.operators.evolutions.EvolutionFactory.build")(\[operator]) | A factory method for convenient automatic selection of an Evolution algorithm based on the Operator to be converted. |

<span id="undefined" />

`static build(operator=None)`

A factory method for convenient automatic selection of an Evolution algorithm based on the Operator to be converted.

**Parameters**

**operator** (`Optional`\[`OperatorBase`]) – the Operator being evolved

**Returns**

the `EvolutionBase` best suited to evolve operator.

**Return type**

[EvolutionBase](qiskit.aqua.operators.evolutions.EvolutionBase#qiskit.aqua.operators.evolutions.EvolutionBase "qiskit.aqua.operators.evolutions.EvolutionBase")

**Raises**

**ValueError** – If operator is not of a composition for which we know the best Evolution method.
