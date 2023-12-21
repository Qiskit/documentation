# qiskit.chemistry.algorithms.pes\_samplers.PCAExtrapolator.factory

`static PCAExtrapolator.factory(mode, **kwargs)`

Factory method for constructing extrapolators.

**Parameters**

*   **mode** (`str`) – Extrapolator to instantiate. Can be one of: - ‘window’ - ‘poly’ - ‘diff\_model’ - ‘pca’ - ‘l1’
*   **kwargs** – arguments to be passed to the constructor of an extrapolator

**Return type**

`Extrapolator`

**Returns**

A newly created extrapolator instance.

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – if specified mode is unknown.
