---
title: generate_channel_matrices
description: API reference for qiskit.providers.aer.utils.NoiseTransformer.generate_channel_matrices
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.aer.utils.NoiseTransformer.generate_channel_matrices
---

# generate\_channel\_matrices

<span id="qiskit.providers.aer.utils.NoiseTransformer.generate_channel_matrices" />

`NoiseTransformer.generate_channel_matrices(transform_channel_operators_list)`

Generate symbolic channel matrices.

Generates a list of 4x4 symbolic matrices describing the channel defined from the given operators. The identity matrix is assumed to be the first element in the list:

```python
[(I, ), (A1, B1, ...), (A2, B2, ...), ..., (An, Bn, ...)]
```

E.g. for a Pauli channel, the matrices are:

```python
[(I,), (X,), (Y,), (Z,)]
```

For relaxation they are:

```python
[(I, ), (|0><0|, |0><1|), |1><0|, |1><1|)]
```

We consider this input to symbolically represent a channel in the following manner: define indeterminates $x_0, x_1, ..., x_n$ which are meant to represent probabilities such that $x_i \ge 0$ and $x0 = 1-(x_1 + ... + x_n)$.

Now consider the quantum channel defined via the Kraus operators ${\sqrt(x_0)I, \sqrt(x_1) A_1, \sqrt(x1) B_1, ..., \sqrt(x_m)A_n, \sqrt(x_n) B_n, ...}$ This is the channel C symbolically represented by the operators.

**Parameters**

**transform\_channel\_operators\_list** (*list*) – A list of tuples of matrices which represent Kraus operators.

**Returns**

A list of 4x4 complex matrices `([D1, D2, ..., Dn], E)` such that the matrix $x_1 D_1 + ... + x_n D_n + E$ represents the operation of the channel C on the density operator. we find it easier to work with this representation of C when performing the combinatorial optimization.

**Return type**

list

