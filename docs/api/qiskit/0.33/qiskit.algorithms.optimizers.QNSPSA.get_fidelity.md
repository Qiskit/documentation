# qiskit.algorithms.optimizers.QNSPSA.get\_fidelity

`static QNSPSA.get_fidelity(circuit, backend=None, expectation=None)`

Get a function to compute the fidelity of `circuit` with itself.

Let `circuit` be a parameterized quantum circuit performing the operation $U(\theta)$ given a set of parameters $\theta$. Then this method returns a function to evaluate

$$
F(\theta, \phi) = \big|\langle 0 | U^\dagger(\theta) U(\phi) |0\rangle  \big|^2.
$$

The output of this function can be used as input for the `fidelity` to the :class:\~\`qiskit.algorithms.optimizers.QNSPSA\` optimizer.

**Parameters**

*   **circuit** (`QuantumCircuit`) – The circuit preparing the parameterized ansatz.
*   **backend** (`Union`\[`Backend`, `QuantumInstance`, `None`]) – A backend of quantum instance to evaluate the circuits. If None, plain matrix multiplication will be used.
*   **expectation** (`Optional`\[`ExpectationBase`]) – An expectation converter to specify how the expected value is computed. If a shot-based readout is used this should be set to `PauliExpectation`.

**Return type**

`Callable`\[\[`ndarray`, `ndarray`], `float`]

**Returns**

A handle to the function $F$.
