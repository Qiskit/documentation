# qiskit.aqua.algorithms.IterativeAmplitudeEstimation.post\_processing

`IterativeAmplitudeEstimation.post_processing(value)`

Post processing of the raw amplitude estimation output $0 \leq a \leq 1$.

**Parameters**

**value** (`float`) – The estimation value $a$.

**Return type**

`float`

**Returns**

The value after post processing, usually mapping the interval $[0, 1]$ to the target interval.
