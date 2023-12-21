# qiskit.providers.aer.utils.NoiseTransformer.transform\_by\_operator\_list

`NoiseTransformer.transform_by_operator_list(transform_channel_operators, noise_kraus_operators)`

Transform input Kraus operators.

Allows approximating a set of input Kraus operators as in terms of a different set of Kraus matrices.

For example, setting $[X, Y, Z]$ allows approximating by a Pauli channel, and $[(|0 \langle\rangle 0|, |0\langle\rangle 1|), |1\langle\rangle 0|, |1 \langle\rangle 1|)]$ represents the relaxation channel

In the case the input is a list $[A_1, A_2, ..., A_n]$ of transform matrices and $[E_0, E_1, ..., E_m]$ of noise Kraus operators, the output is a list $[p_1, p_2, ..., p_n]$ of probabilities such that:

1.  $p_i \ge 0$
2.  $p_1 + ... + p_n \le 1$
3.  $[\sqrt(p_1) A_1, \sqrt(p_2) A_2, ..., \sqrt(p_n) A_n, \sqrt(1-(p_1 + ... + p_n))I]$ is a list of Kraus operators that define the output channel (which is “close” to the input channel given by $[E_0, ..., E_m]$.)

This channel can be thought of as choosing the operator $A_i$ in probability $p_i$ and applying this operator to the quantum state.

More generally, if the input is a list of tuples (not necessarily of the same size): $[(A_1, B_1, ...), (A_2, B_2, ...), ..., (A_n, B_n, ...)]$ then the output is still a list $[p_1, p_2, ..., p_n]$ and now the output channel is defined by the operators: $[\sqrt(p_1)A1, \sqrt(p_1)B_1, ..., \sqrt(p_n)A_n, \sqrt(p_n)B_n, ..., \sqrt(1-(p_1 + ... + p_n))I]$

**Parameters**

*   **noise\_kraus\_operators** (*List*) – a list of matrices (Kraus operators) for the input channel.
*   **transform\_channel\_operators** (*List*) – a list of matrices or tuples of matrices representing Kraus operators that can construct the output channel.

**Returns**

A list of amplitudes that define the output channel.

**Return type**

List
