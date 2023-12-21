# qiskit.opflow\.evolutions.EvolutionFactory.build

`static EvolutionFactory.build(operator=None)`

A factory method for convenient automatic selection of an Evolution algorithm based on the Operator to be converted.

**Parameters**

**operator** (`Optional`\[`OperatorBase`]) – the Operator being evolved

**Returns**

the `EvolutionBase` best suited to evolve operator.

**Return type**

[EvolutionBase](qiskit.opflow.evolutions.EvolutionBase#qiskit.opflow.evolutions.EvolutionBase "qiskit.opflow.evolutions.EvolutionBase")

**Raises**

**ValueError** – If operator is not of a composition for which we know the best Evolution method.
