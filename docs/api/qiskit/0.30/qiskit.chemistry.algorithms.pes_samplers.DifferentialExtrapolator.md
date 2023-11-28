# DifferentialExtrapolator

<span id="undefined" />

`DifferentialExtrapolator(degree=1, model=None)`

Bases: `qiskit.chemistry.algorithms.pes_samplers.extrapolator.Extrapolator`

An extrapolator based on treating each param set as a point in space, and fitting a Hamiltonian which evolves each point to the next. The user specifies the type of regression model to perform fitting, and a degree which adds derivatives to the values in the point vector; serving as features for the regression model. WARNING: Should only be used with window. Using no window includes points after the point being extrapolated in the data window.

Constructor.

**Parameters**

*   **model** (`Union`\[`LinearRegression`, `Ridge`, `RidgeCV`, `SGDRegressor`, `None`]) – Regression model (from sklearn) to be used for fitting variational parameters. Currently supports the following models: LinearRegression(), Ridge(), RidgeCV(), and SGDRegressor().
*   **degree** (`int`) – Specifies (degree -1) derivatives to be added as ‘features’ in regression model.

## Methods

|                                                                                                                                                                                                                                                              |                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| [`extrapolate`](qiskit.chemistry.algorithms.pes_samplers.DifferentialExtrapolator.extrapolate#qiskit.chemistry.algorithms.pes_samplers.DifferentialExtrapolator.extrapolate "qiskit.chemistry.algorithms.pes_samplers.DifferentialExtrapolator.extrapolate") | Extrapolate at specified point of interest given a set of variational parameters. |
| [`factory`](qiskit.chemistry.algorithms.pes_samplers.DifferentialExtrapolator.factory#qiskit.chemistry.algorithms.pes_samplers.DifferentialExtrapolator.factory "qiskit.chemistry.algorithms.pes_samplers.DifferentialExtrapolator.factory")                 | Factory method for constructing extrapolators.                                    |
