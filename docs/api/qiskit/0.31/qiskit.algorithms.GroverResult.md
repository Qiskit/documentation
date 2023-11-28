# GroverResult

<span id="undefined" />

`GroverResult`

Bases: `qiskit.algorithms.amplitude_amplifiers.amplitude_amplifier.AmplitudeAmplifierResult`

Grover Result.

## Methods

|                                                                                                                                     |                                                                        |
| ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`combine`](qiskit.algorithms.GroverResult.combine#qiskit.algorithms.GroverResult.combine "qiskit.algorithms.GroverResult.combine") | Any property from the argument that exists in the receiver is updated. |

## Attributes

<span id="undefined" />

### assignment

The post-processed value of the most likely bitstring.

**Return type**

`Any`

**Returns**

The output of the `post_processing` function of the respective `AmplificationProblem`, where the input is the `top_measurement`. The type is the same as the return type of the post-processing function.

<span id="undefined" />

### circuit\_results

Return the circuit results. Can be a statevector or counts dictionary.

**Return type**

`Union`\[`List`\[`ndarray`], `List`\[`Dict`\[`str`, `int`]], `None`]

<span id="undefined" />

### iterations

All the powers of the Grover operator that have been tried.

**Return type**

`List`\[`int`]

**Returns**

The powers of the Grover operator tested.

<span id="undefined" />

### max\_probability

Return the maximum sampling probability.

**Return type**

`float`

<span id="undefined" />

### oracle\_evaluation

Whether the classical oracle evaluation of the top measurement was True or False.

**Return type**

`bool`

**Returns**

The classical oracle evaluation of the top measurement.

<span id="undefined" />

### top\_measurement

The most frequently measured output as bitstring.

**Return type**

`Optional`\[`str`]

**Returns**

The most frequently measured output state.
