# qiskit.algorithms.VQE.get\_energy\_evaluation

`VQE.get_energy_evaluation(operator, return_expectation=False)`

Returns a function handle to evaluates the energy at given parameters for the ansatz.

This is the objective function to be passed to the optimizer that is used for evaluation.

**Parameters**

*   **operator** (`OperatorBase`) – The operator whose energy to evaluate.
*   **return\_expectation** (`bool`) – If True, return the `ExpectationBase` expectation converter used in the construction of the expectation value. Useful e.g. to evaluate other operators with the same expectation value converter.

**Return type**

`Callable`\[\[`ndarray`], `Union`\[`float`, `List`\[`float`]]]

**Returns**

Energy of the hamiltonian of each parameter, and, optionally, the expectation converter.

**Raises**

**RuntimeError** – If the circuit is not parameterized (i.e. has 0 free parameters).
