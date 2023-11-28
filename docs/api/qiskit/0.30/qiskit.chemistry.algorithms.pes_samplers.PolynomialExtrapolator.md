# PolynomialExtrapolator

<span id="undefined" />

`PolynomialExtrapolator(degree=1)`

Bases: `qiskit.chemistry.algorithms.pes_samplers.extrapolator.Extrapolator`

An extrapolator based on fitting each parameter to a polynomial function of a user-specified degree.

WARNING: Should only be used with window. Using no window includes points after the point being extrapolated in the data window.

Constructor.

**Parameters**

**degree** (`int`) – Degree of polynomial to use for fitting in extrapolation.

## Methods

|                                                                                                                                                                                                                                                        |                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| [`extrapolate`](qiskit.chemistry.algorithms.pes_samplers.PolynomialExtrapolator.extrapolate#qiskit.chemistry.algorithms.pes_samplers.PolynomialExtrapolator.extrapolate "qiskit.chemistry.algorithms.pes_samplers.PolynomialExtrapolator.extrapolate") | Extrapolate at specified point of interest given a set of variational parameters. |
| [`factory`](qiskit.chemistry.algorithms.pes_samplers.PolynomialExtrapolator.factory#qiskit.chemistry.algorithms.pes_samplers.PolynomialExtrapolator.factory "qiskit.chemistry.algorithms.pes_samplers.PolynomialExtrapolator.factory")                 | Factory method for constructing extrapolators.                                    |
