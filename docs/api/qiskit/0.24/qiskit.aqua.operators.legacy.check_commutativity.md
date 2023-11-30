<span id="qiskit-aqua-operators-legacy-check-commutativity" />

# qiskit.aqua.operators.legacy.check\_commutativity

<span id="undefined" />

`check_commutativity(op_1, op_2, anti=False)`

Check the (anti-)commutativity between two operators.

**Parameters**

*   **op\_1** ([*WeightedPauliOperator*](qiskit.aqua.operators.legacy.WeightedPauliOperator#qiskit.aqua.operators.legacy.WeightedPauliOperator "qiskit.aqua.operators.legacy.WeightedPauliOperator")) – operator
*   **op\_2** ([*WeightedPauliOperator*](qiskit.aqua.operators.legacy.WeightedPauliOperator#qiskit.aqua.operators.legacy.WeightedPauliOperator "qiskit.aqua.operators.legacy.WeightedPauliOperator")) – operator
*   **anti** (*bool*) – if True, check anti-commutativity, otherwise check commutativity.

**Returns**

whether or not two operators are commuted or anti-commuted.

**Return type**

bool
