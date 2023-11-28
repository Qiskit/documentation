# SieveExtrapolator

<span id="undefined" />

`SieveExtrapolator(extrapolator=None, window=2, filter_before=True, filter_after=True)`

Bases: `qiskit.chemistry.algorithms.pes_samplers.extrapolator.Extrapolator`

A wrapper extrapolator which clusters the parameter values - either before extrapolation, after, or both - into two large and small clusters, and sets the small clusters’ parameters to zero.

Constructor.

**Parameters**

*   **extrapolator** (`Union`\[`PolynomialExtrapolator`, `DifferentialExtrapolator`, `None`]) – ‘internal’ extrapolator that performs extrapolation on variational parameters based on data window.
*   **window** (`int`) – Number of previous points to use for extrapolation.
*   **filter\_before** (`bool`) – Keyword to perform clustering before extrapolation.
*   **filter\_after** (`bool`) – Keyword to perform clustering after extrapolation.

## Methods

|                                                                                                                                                                                                                                         |                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [`extrapolate`](qiskit.chemistry.algorithms.pes_samplers.SieveExtrapolator.extrapolate#qiskit.chemistry.algorithms.pes_samplers.SieveExtrapolator.extrapolate "qiskit.chemistry.algorithms.pes_samplers.SieveExtrapolator.extrapolate") | Extrapolate at specified point of interest given a set of variational parameters. |
| [`factory`](qiskit.chemistry.algorithms.pes_samplers.SieveExtrapolator.factory#qiskit.chemistry.algorithms.pes_samplers.SieveExtrapolator.factory "qiskit.chemistry.algorithms.pes_samplers.SieveExtrapolator.factory")                 | Factory method for constructing extrapolators.                                    |
