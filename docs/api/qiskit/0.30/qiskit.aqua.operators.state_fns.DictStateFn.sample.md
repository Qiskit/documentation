# qiskit.aqua.operators.state\_fns.DictStateFn.sample

`DictStateFn.sample(shots=1024, massive=False, reverse_endianness=False)`

Sample the state function as a normalized probability distribution. Returns dict of bitstrings in order of probability, with values being probability.

**Parameters**

*   **shots** (`int`) – The number of samples to take to approximate the State function.
*   **massive** (`bool`) – Whether to allow large conversions, e.g. creating a matrix representing over 16 qubits.
*   **reverse\_endianness** (`bool`) – Whether to reverse the endianness of the bitstrings in the return dict to match Terra’s big-endianness.

**Return type**

`dict`

**Returns**

A dict containing pairs sampled strings from the State function and sampling frequency divided by shots.
