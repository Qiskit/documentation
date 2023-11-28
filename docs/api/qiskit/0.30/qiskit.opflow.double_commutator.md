# qiskit.opflow\.double\_commutator

<span id="undefined" />

`double_commutator(op_a, op_b, op_c, sign=False)`

Compute symmetric double commutator of op\_a, op\_b and op\_c. See McWeeny chapter 13.6 Equation of motion methods (page 479)

If sign is False, it returns

$$
[[A, B], C]/2 + [A, [B, C]]/2
= (2ABC + 2CBA - BAC - CAB - ACB - BCA)/2.
$$

If sign is True, it returns

$$
\lbrace[A, B], C\rbrace/2 + \lbrace A, [B, C]\rbrace/2
= (2ABC - 2CBA - BAC + CAB - ACB + BCA)/2.
$$

**Parameters**

*   **op\_a** (`OperatorBase`) – Operator A
*   **op\_b** (`OperatorBase`) – Operator B
*   **op\_c** (`OperatorBase`) – Operator C
*   **sign** (`bool`) – False anti-commutes, True commutes

**Returns**

the double commutator

**Return type**

[OperatorBase](qiskit.aqua.operators.OperatorBase#qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.OperatorBase")
