# qiskit.chemistry.algorithms.GroundStateSolver.evaluate\_operators

`abstract GroundStateSolver.evaluate_operators(state, operators)`

Evaluates additional operators at the given state.

**Parameters**

*   **state** (`Union`\[`str`, `dict`, `Result`, `list`, `ndarray`, `Statevector`, `QuantumCircuit`, `Instruction`, `OperatorBase`]) – any kind of input that can be used to specify a state. See also `StateFn` for more details.
*   **operators** (`Union`\[`WeightedPauliOperator`, `OperatorBase`, `list`, `dict`]) – either a single, list or dictionary of `WeightedPauliOperator``s or any kind of operator implementing the ``OperatorBase`.

**Return type**

`Union`\[`float`, `List`\[`float`], `Dict`\[`str`, `List`\[`float`]]]

**Returns**

The expectation value of the given operator(s). The return type will be identical to the format of the provided operators.
