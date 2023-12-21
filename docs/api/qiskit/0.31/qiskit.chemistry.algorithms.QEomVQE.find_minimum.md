# qiskit.chemistry.algorithms.QEomVQE.find\_minimum

`QEomVQE.find_minimum(initial_point=None, var_form=None, cost_fn=None, optimizer=None, gradient_fn=None)`

Optimize to find the minimum cost value.

**Parameters**

*   **initial\_point** (`Optional`\[`ndarray`]) – If not None will be used instead of any initial point supplied via constructor. If None and None was supplied to constructor then a random point will be used if the optimizer requires an initial point.
*   **var\_form** (`Union`\[`QuantumCircuit`, `VariationalForm`, `None`]) – If not None will be used instead of any variational form supplied via constructor.
*   **cost\_fn** (`Optional`\[`Callable`]) – If not None will be used instead of any cost\_fn supplied via constructor.
*   **optimizer** (`Optional`\[`Optimizer`]) – If not None will be used instead of any optimizer supplied via constructor.
*   **gradient\_fn** (`Optional`\[`Callable`]) – Optional gradient function for optimizer

**Returns**

Optimized variational parameters, and corresponding minimum cost value.

**Return type**

dict

**Raises**

**ValueError** – invalid input
