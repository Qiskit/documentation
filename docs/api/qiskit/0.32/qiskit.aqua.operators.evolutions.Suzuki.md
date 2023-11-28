# Suzuki

<span id="undefined" />

`Suzuki(reps=1, order=2)`

Bases: `qiskit.aqua.operators.evolutions.trotterizations.trotterization_base.TrotterizationBase`

Suzuki Trotter expansion, composing the evolution circuits of each Operator in the sum together by a recursive “bookends” strategy, repeating the whole composed circuit `reps` times.

Detailed in [https://arxiv.org/pdf/quant-ph/0508139.pdf](https://arxiv.org/pdf/quant-ph/0508139.pdf).

**Parameters**

*   **reps** (`int`) – The number of times to repeat the expansion circuit.
*   **order** (`int`) – The order of the expansion to perform.

## Methods

|                                                                                                                                                                |                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [`convert`](qiskit.aqua.operators.evolutions.Suzuki.convert#qiskit.aqua.operators.evolutions.Suzuki.convert "qiskit.aqua.operators.evolutions.Suzuki.convert") | Convert a `SummedOp` into a `ComposedOp` or `CircuitOp` representing an approximation of e^-i\*\`\`op\_sum\`\`. |

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
