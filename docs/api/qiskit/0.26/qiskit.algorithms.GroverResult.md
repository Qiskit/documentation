# qiskit.algorithms.GroverResult

<span id="undefined" />

`GroverResult`

Grover Result.

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                       |                                                                        |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`__init__`](#qiskit.algorithms.GroverResult.__init__ "qiskit.algorithms.GroverResult.__init__")()    | Initialize self.                                                       |
| [`combine`](#qiskit.algorithms.GroverResult.combine "qiskit.algorithms.GroverResult.combine")(result) | Any property from the argument that exists in the receiver is updated. |

## Attributes

|                                                                                                                             |                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [`assignment`](#qiskit.algorithms.GroverResult.assignment "qiskit.algorithms.GroverResult.assignment")                      | The post-processed value of the most likely bitstring.                            |
| [`circuit_results`](#qiskit.algorithms.GroverResult.circuit_results "qiskit.algorithms.GroverResult.circuit_results")       | Return the circuit results.                                                       |
| [`iterations`](#qiskit.algorithms.GroverResult.iterations "qiskit.algorithms.GroverResult.iterations")                      | All the powers of the Grover operator that have been tried.                       |
| [`max_probability`](#qiskit.algorithms.GroverResult.max_probability "qiskit.algorithms.GroverResult.max_probability")       | Return the maximum sampling probability.                                          |
| [`oracle_evaluation`](#qiskit.algorithms.GroverResult.oracle_evaluation "qiskit.algorithms.GroverResult.oracle_evaluation") | Whether the classical oracle evaluation of the top measurement was True or False. |
| [`top_measurement`](#qiskit.algorithms.GroverResult.top_measurement "qiskit.algorithms.GroverResult.top_measurement")       | The most frequently measured output as bitstring.                                 |

<span id="undefined" />

`property assignment`

The post-processed value of the most likely bitstring.

**Return type**

`Any`

**Returns**

The output of the `post_processing` function of the respective `AmplificationProblem`, where the input is the `top_measurement`. The type is the same as the return type of the post-processing function.

<span id="undefined" />

`property circuit_results`

Return the circuit results. Can be a statevector or counts dictionary.

**Return type**

`Union`\[`List`\[`ndarray`], `List`\[`Dict`\[`str`, `int`]], `None`]

<span id="undefined" />

`combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

<span id="undefined" />

`property iterations`

All the powers of the Grover operator that have been tried.

**Return type**

`List`\[`int`]

**Returns**

The powers of the Grover operator tested.

<span id="undefined" />

`property max_probability`

Return the maximum sampling probability.

**Return type**

`float`

<span id="undefined" />

`property oracle_evaluation`

Whether the classical oracle evaluation of the top measurement was True or False.

**Return type**

`bool`

**Returns**

The classical oracle evaluation of the top measurement.

<span id="undefined" />

`property top_measurement`

The most frequently measured output as bitstring.

**Return type**

`Optional`\[`str`]

**Returns**

The most frequently measured output state.
