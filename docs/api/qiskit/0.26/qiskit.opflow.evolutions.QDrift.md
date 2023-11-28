# qiskit.opflow\.evolutions.QDrift

<span id="undefined" />

`QDrift(reps=1)`

The QDrift Trotterization method, which selects each each term in the Trotterization randomly, with a probability proportional to its weight. Based on the work of Earl Campbell in [https://arxiv.org/abs/1811.08017](https://arxiv.org/abs/1811.08017).

**Parameters**

**reps** (`int`) – The number of times to repeat the Trotterization circuit.

<span id="undefined" />

`__init__(reps=1)`

**Parameters**

**reps** (`int`) – The number of times to repeat the Trotterization circuit.

## Methods

|                                                                                                             |                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.opflow.evolutions.QDrift.__init__ "qiskit.opflow.evolutions.QDrift.__init__")(\[reps]) | **type reps**`int`                                                                                              |
| [`convert`](#qiskit.opflow.evolutions.QDrift.convert "qiskit.opflow.evolutions.QDrift.convert")(operator)   | Convert a `SummedOp` into a `ComposedOp` or `CircuitOp` representing an approximation of e^-i\*\`\`op\_sum\`\`. |

## Attributes

|                                                                                        |                                                                                               |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [`reps`](#qiskit.opflow.evolutions.QDrift.reps "qiskit.opflow.evolutions.QDrift.reps") | The number of repetitions to use in the Trotterization, improving the approximation accuracy. |

<span id="undefined" />

`convert(operator)`

Convert a `SummedOp` into a `ComposedOp` or `CircuitOp` representing an approximation of e^-i\*\`\`op\_sum\`\`.

**Parameters**

**operator** (`OperatorBase`) – The `SummedOp` to evolve.

**Return type**

`OperatorBase`

**Returns**

The Operator approximating op\_sum’s evolution.

**Raises**

**TypeError** – A non-SummedOps Operator is passed into `convert`.

<span id="undefined" />

`property reps`

The number of repetitions to use in the Trotterization, improving the approximation accuracy.

**Return type**

`int`
