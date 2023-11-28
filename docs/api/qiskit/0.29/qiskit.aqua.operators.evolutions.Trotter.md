# Trotter

<span id="undefined" />

`Trotter(reps=1)`

Bases: `qiskit.aqua.operators.evolutions.trotterizations.suzuki.Suzuki`

Simple Trotter expansion, composing the evolution circuits of each Operator in the sum together `reps` times and dividing the evolution time of each by `reps`.

**Parameters**

**reps** (`int`) – The number of times to repeat the Trotterization circuit.

## Methods

|                                                                                                                                                                   |                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [`convert`](qiskit.aqua.operators.evolutions.Trotter.convert#qiskit.aqua.operators.evolutions.Trotter.convert "qiskit.aqua.operators.evolutions.Trotter.convert") | Convert a `SummedOp` into a `ComposedOp` or `CircuitOp` representing an approximation of e^-i\*\`\`op\_sum\`\`. |

## Attributes

<span id="undefined" />

### order

returns order

**Return type**

`int`

<span id="undefined" />

### reps

The number of repetitions to use in the Trotterization, improving the approximation accuracy.

**Return type**

`int`
