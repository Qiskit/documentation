# qiskit.opflow\.evolutions.Suzuki

<span id="undefined" />

`Suzuki(reps=1, order=2)`

Suzuki Trotter expansion, composing the evolution circuits of each Operator in the sum together by a recursive “bookends” strategy, repeating the whole composed circuit `reps` times.

Detailed in [https://arxiv.org/pdf/quant-ph/0508139.pdf](https://arxiv.org/pdf/quant-ph/0508139.pdf).

**Parameters**

*   **reps** (`int`) – The number of times to repeat the expansion circuit.
*   **order** (`int`) – The order of the expansion to perform.

<span id="undefined" />

`__init__(reps=1, order=2)`

**Parameters**

*   **reps** (`int`) – The number of times to repeat the expansion circuit.
*   **order** (`int`) – The order of the expansion to perform.

## Methods

|                                                                                                                    |                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.opflow.evolutions.Suzuki.__init__ "qiskit.opflow.evolutions.Suzuki.__init__")(\[reps, order]) | **type reps**`int`                                                                                              |
| [`convert`](#qiskit.opflow.evolutions.Suzuki.convert "qiskit.opflow.evolutions.Suzuki.convert")(operator)          | Convert a `SummedOp` into a `ComposedOp` or `CircuitOp` representing an approximation of e^-i\*\`\`op\_sum\`\`. |

## Attributes

|                                                                                           |                                                                                               |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [`order`](#qiskit.opflow.evolutions.Suzuki.order "qiskit.opflow.evolutions.Suzuki.order") | returns order                                                                                 |
| [`reps`](#qiskit.opflow.evolutions.Suzuki.reps "qiskit.opflow.evolutions.Suzuki.reps")    | The number of repetitions to use in the Trotterization, improving the approximation accuracy. |

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
