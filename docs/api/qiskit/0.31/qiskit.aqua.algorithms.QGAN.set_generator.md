# qiskit.aqua.algorithms.QGAN.set\_generator

`QGAN.set_generator(generator_circuit=None, generator_init_params=None, generator_optimizer=None, generator_gradient=None)`

Initialize generator.

**Parameters**

*   **generator\_circuit** (`Union`\[`UnivariateVariationalDistribution`, `MultivariateVariationalDistribution`, `QuantumCircuit`, `None`]) – parameterized quantum circuit which sets the structure of the quantum generator
*   **generator\_init\_params** (`Optional`\[`ndarray`]) – initial parameters for the generator circuit
*   **generator\_optimizer** (`Optional`\[`Optimizer`]) – optimizer to be used for the training of the generator
*   **generator\_gradient** (`Union`\[`Callable`, `Gradient`, `None`]) – A Gradient object, or a function returning partial derivatives of the loss function w\.r.t. the generator variational params.

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input
