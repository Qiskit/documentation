# qiskit.quantum\_info.Statevector.from\_int

`static Statevector.from_int(i, dims)`

Return a computational basis statevector.

**Parameters**

*   **i** (*int*) – the basis state element.
*   **dims** (*int or tuple or list*) – The subsystem dimensions of the statevector (See additional information).

**Returns**

The computational basis state $|i\rangle$.

**Return type**

[Statevector](qiskit.quantum_info.Statevector#qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")

## Additional Information:

The `dims` kwarg can be an integer or an iterable of integers.

*   `Iterable` – the subsystem dimensions are the values in the list with the total number of subsystems given by the length of the list.
*   `Int` – the integer specifies the total dimension of the state. If it is a power of two the state will be initialized as an N-qubit state. If it is not a power of two the state will have a single d-dimensional subsystem.
