# qiskit.circuit.library.LinearAmplitudeFunction.post\_processing

`LinearAmplitudeFunction.post_processing(scaled_value)`

Map the function value of the approximated $\hat{f}$ to $f$.

**Parameters**

**scaled\_value** (`float`) – A function value from the Taylor expansion of $\hat{f}(x)$.

**Return type**

`float`

**Returns**

The `scaled_value` mapped back to the domain of $f$, by first inverting the transformation used for the Taylor approximation and then mapping back from $[0, 1]$ to the original domain.
