# qiskit.algorithms.optimizers.SPSA.calibrate

`static SPSA.calibrate(loss, initial_point, c=0.2, stability_constant=0, target_magnitude=None, alpha=0.602, gamma=0.101, modelspace=False)`

Calibrate SPSA parameters with a powerseries as learning rate and perturbation coeffs.

The powerseries are:

$$
a_k = \frac{a}{(A + k + 1)^\alpha}, c_k = \frac{c}{(k + 1)^\gamma}
$$

**Parameters**

*   **loss** (`Callable`\[\[`ndarray`], `float`]) – The loss function.
*   **initial\_point** (`ndarray`) – The initial guess of the iteration.
*   **c** (`float`) – The initial perturbation magnitude.
*   **stability\_constant** (`float`) – The value of A.
*   **target\_magnitude** (`Optional`\[`float`]) – The target magnitude for the first update step, defaults to $2\pi / 10$.
*   **alpha** (`float`) – The exponent of the learning rate powerseries.
*   **gamma** (`float`) – The exponent of the perturbation powerseries.
*   **modelspace** (`bool`) – Whether the target magnitude is the difference of parameter values or function values (= model space).

**Returns**

**A tuple of powerseries generators, the first one for the**

learning rate and the second one for the perturbation.

**Return type**

tuple(generator, generator)
