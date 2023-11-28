<span id="qiskit-aqua-operators-evolutions-trotter" />

# qiskit.aqua.operators.evolutions.Trotter

<span id="undefined" />

`Trotter(reps=1)`

Simple Trotter expansion, composing the evolution circuits of each Operator in the sum together `reps` times and dividing the evolution time of each by `reps`.

**Parameters**

**reps** (`int`) – The number of times to repeat the Trotterization circuit.

<span id="undefined" />

`__init__(reps=1)`

**Parameters**

**reps** (`int`) – The number of times to repeat the Trotterization circuit.

## Methods

|                                                                                                                               |                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.operators.evolutions.Trotter.__init__ "qiskit.aqua.operators.evolutions.Trotter.__init__")(\[reps]) | **type reps**`int`                                                                                              |
| [`convert`](#qiskit.aqua.operators.evolutions.Trotter.convert "qiskit.aqua.operators.evolutions.Trotter.convert")(operator)   | Convert a `SummedOp` into a `ComposedOp` or `CircuitOp` representing an approximation of e^-i\*\`\`op\_sum\`\`. |

## Attributes

|                                                                                                             |                                                                                               |
| ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [`order`](#qiskit.aqua.operators.evolutions.Trotter.order "qiskit.aqua.operators.evolutions.Trotter.order") | returns order                                                                                 |
| [`reps`](#qiskit.aqua.operators.evolutions.Trotter.reps "qiskit.aqua.operators.evolutions.Trotter.reps")    | The number of repetitions to use in the Trotterization, improving the approximation accuracy. |

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

`property order`

returns order

**Return type**

`int`

<span id="undefined" />

`property reps`

The number of repetitions to use in the Trotterization, improving the approximation accuracy.

**Return type**

`int`
