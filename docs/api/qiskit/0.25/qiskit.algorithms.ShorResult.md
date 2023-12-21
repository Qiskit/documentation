# qiskit.algorithms.ShorResult

`ShorResult`

Shor Result.

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                   |                                                                        |
| ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`__init__`](#qiskit.algorithms.ShorResult.__init__ "qiskit.algorithms.ShorResult.__init__")()    | Initialize self.                                                       |
| [`combine`](#qiskit.algorithms.ShorResult.combine "qiskit.algorithms.ShorResult.combine")(result) | Any property from the argument that exists in the receiver is updated. |

## Attributes

|                                                                                                                         |                           |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [`factors`](#qiskit.algorithms.ShorResult.factors "qiskit.algorithms.ShorResult.factors")                               | returns factors           |
| [`successful_counts`](#qiskit.algorithms.ShorResult.successful_counts "qiskit.algorithms.ShorResult.successful_counts") | returns successful counts |
| [`total_counts`](#qiskit.algorithms.ShorResult.total_counts "qiskit.algorithms.ShorResult.total_counts")                | returns total counts      |

`combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

`property factors`

returns factors

**Return type**

`List`\[`List`\[`int`]]

`property successful_counts`

returns successful counts

**Return type**

`int`

`property total_counts`

returns total counts

**Return type**

`int`
