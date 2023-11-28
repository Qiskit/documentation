# PCAExtrapolator

<span id="undefined" />

`PCAExtrapolator(extrapolator=None, kernel=None, window=2)`

Bases: `qiskit.chemistry.algorithms.pes_samplers.extrapolator.Extrapolator`

A wrapper extrapolator which reduces the points’ dimensionality with PCA, performs extrapolation in the transformed pca space, and inverse transforms the results before returning. A user specifies the kernel within how the PCA transformation should be done.

Constructor.

**Parameters**

*   **extrapolator** (`Union`\[`PolynomialExtrapolator`, `DifferentialExtrapolator`, `None`]) – ‘internal’ extrapolator that performs extrapolation on variational parameters based on data window.
*   **kernel** (`Optional`\[`str`]) – Kernel (from sklearn) that specifies how dimensionality reduction should be done for PCA. Default value is None, and switches the extrapolation to standard PCA.
*   **window** (`int`) – Number of previous points to use for extrapolation.

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – if kernel is not defined in sklearn module.

## Methods

|                                                                                                                                                                                                                                   |                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [`extrapolate`](qiskit.chemistry.algorithms.pes_samplers.PCAExtrapolator.extrapolate#qiskit.chemistry.algorithms.pes_samplers.PCAExtrapolator.extrapolate "qiskit.chemistry.algorithms.pes_samplers.PCAExtrapolator.extrapolate") | Extrapolate at specified point of interest given a set of variational parameters. |
| [`factory`](qiskit.chemistry.algorithms.pes_samplers.PCAExtrapolator.factory#qiskit.chemistry.algorithms.pes_samplers.PCAExtrapolator.factory "qiskit.chemistry.algorithms.pes_samplers.PCAExtrapolator.factory")                 | Factory method for constructing extrapolators.                                    |
