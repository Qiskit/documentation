# TrotterizationBase

<span id="undefined" />

`TrotterizationBase(reps=1)`

Bases: `qiskit.aqua.operators.evolutions.evolution_base.EvolutionBase`

A base for Trotterization methods, algorithms for approximating exponentiations of operator sums by compositions of exponentiations.

## Methods

|                                                                                                                                                                                                    |                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [`convert`](qiskit.aqua.operators.evolutions.TrotterizationBase.convert#qiskit.aqua.operators.evolutions.TrotterizationBase.convert "qiskit.aqua.operators.evolutions.TrotterizationBase.convert") | Convert a `SummedOp` into a `ComposedOp` or `CircuitOp` representing an approximation of e^-i\*\`\`op\_sum\`\`. |

## Attributes

<span id="undefined" />

### reps

The number of repetitions to use in the Trotterization, improving the approximation accuracy.

**Return type**

`int`
