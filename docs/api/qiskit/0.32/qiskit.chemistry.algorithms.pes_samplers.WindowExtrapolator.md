# WindowExtrapolator

<span id="undefined" />

`WindowExtrapolator(extrapolator=None, window=2)`

Bases: `qiskit.chemistry.algorithms.pes_samplers.extrapolator.Extrapolator`

An extrapolator which wraps another extrapolator, limiting the internal extrapolator’s ground truth parameter set to a fixed window size.

Constructor.

**Parameters**

*   **extrapolator** (`Union`\[`PolynomialExtrapolator`, `DifferentialExtrapolator`, `None`]) – ‘internal’ extrapolator that performs extrapolation on variational parameters based on data window
*   **window** (`int`) – Number of previous points to use for extrapolation. A value of zero indicates that all previous points will be used for bootstrapping.

## Methods

|                                                                                                                                                                                                                                            |                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| [`extrapolate`](qiskit.chemistry.algorithms.pes_samplers.WindowExtrapolator.extrapolate#qiskit.chemistry.algorithms.pes_samplers.WindowExtrapolator.extrapolate "qiskit.chemistry.algorithms.pes_samplers.WindowExtrapolator.extrapolate") | Extrapolate at specified point of interest given a set of variational parameters. |
| [`factory`](qiskit.chemistry.algorithms.pes_samplers.WindowExtrapolator.factory#qiskit.chemistry.algorithms.pes_samplers.WindowExtrapolator.factory "qiskit.chemistry.algorithms.pes_samplers.WindowExtrapolator.factory")                 | Factory method for constructing extrapolators.                                    |

## Attributes

<span id="undefined" />

### extrapolator

Returns the internal extrapolator.

**Return type**

`Extrapolator`

**Returns**

The internal extrapolator.

<span id="undefined" />

### window

Returns the size of the window.

**Return type**

`int`

**Returns**

The size of the window.
