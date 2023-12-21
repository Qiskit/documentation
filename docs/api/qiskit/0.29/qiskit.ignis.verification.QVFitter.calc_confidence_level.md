# qiskit.ignis.verification.QVFitter.calc\_confidence\_level

`QVFitter.calc_confidence_level(z_value)`

Calculate confidence level using z value.

Accumulative probability for standard normal distribution in \[-z, +infinity] is 1/2 (1 + erf(z/sqrt(2))), where z = (X - mu)/sigma = (hmean - 2/3)/sigma

**Parameters**

**z\_value** (*float*) – z value in in standard normal distibution.

**Returns**

confidence level in decimal (not percentage).

**Return type**

float
