# qiskit.aqua.components.neural\_networks.DiscriminativeNetwork.loss

`abstract DiscriminativeNetwork.loss(x, y, weights=None)`

Loss function used for optimization

**Parameters**

*   **x** (`Iterable`) – output.
*   **y** (`Iterable`) – the data point
*   **weights** (`Optional`\[`ndarray`]) – Data weights.

**Returns**

Loss w\.r.t to the generated data points.

**Raises**

**NotImplementedError** – not implemented
