# QDrift

<span id="undefined" />

`QDrift(reps=1)`

Bases: `qiskit.opflow.evolutions.trotterizations.trotterization_base.TrotterizationBase`

The QDrift Trotterization method, which selects each each term in the Trotterization randomly, with a probability proportional to its weight. Based on the work of Earl Campbell in [https://arxiv.org/abs/1811.08017](https://arxiv.org/abs/1811.08017).

**Parameters**

**reps** (`int`) – The number of times to repeat the Trotterization circuit.

## Methods Defined Here

|                                                                                                                                        |                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [`convert`](qiskit.opflow.evolutions.QDrift.convert#qiskit.opflow.evolutions.QDrift.convert "qiskit.opflow.evolutions.QDrift.convert") | Convert a `SummedOp` into a `ComposedOp` or `CircuitOp` representing an approximation of e^-i\*\`\`op\_sum\`\`. |

## Attributes

<span id="undefined" />

### reps

The number of repetitions to use in the Trotterization, improving the approximation accuracy.

**Return type**

`int`
