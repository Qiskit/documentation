# qiskit.providers.aer.utils.NoiseTransformer.channel\_matrix\_representation

`NoiseTransformer.channel_matrix_representation(operators)`

We convert the operators to a matrix by applying the channel to the four basis elements of the 2x2 matrix space representing density operators; this is standard linear algebra

**Parameters**

**operators** (*list*) – The list of operators to transform into a Matrix

**Returns**

The matrx representation of the operators

**Return type**

sympy.Matrix
