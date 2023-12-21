# qiskit.aqua.operators.state\_fns.OperatorStateFn.to\_circuit\_op

`OperatorStateFn.to_circuit_op()`

Return `StateFnCircuit` corresponding to this StateFn. Ignore for now because this is undefined. TODO maybe call to\_pauli\_op and diagonalize here, but that could be very inefficient, e.g. splitting one Stabilizer measurement into hundreds of 1 qubit Paulis.

**Return type**

`OperatorBase`
