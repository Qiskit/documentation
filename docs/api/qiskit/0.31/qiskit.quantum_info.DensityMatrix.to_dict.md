# qiskit.quantum\_info.DensityMatrix.to\_dict

`DensityMatrix.to_dict(decimals=None)`

Convert the density matrix to dictionary form.

This dictionary representation uses a Ket-like notation where the dictionary keys are qudit strings for the subsystem basis vectors. If any subsystem has a dimension greater than 10 comma delimiters are inserted between integers so that subsystems can be distinguished.

**Parameters**

**decimals** (*None or int*) – the number of decimal places to round values. If None no rounding is done (Default: None).

**Returns**

the dictionary form of the DensityMatrix.

**Return type**

dict

## Examples

The ket-form of a 2-qubit density matrix $rho = |-\rangle\!\langle -|\otimes |0\rangle\!\langle 0|$

```python
from qiskit.quantum_info import DensityMatrix

rho = DensityMatrix.from_label('-0')
print(rho.to_dict())
```

```python
{'00|00': (0.4999999999999999+0j), '10|00': (-0.4999999999999999-0j), '00|10': (-0.4999999999999999+0j), '10|10': (0.4999999999999999+0j)}
```

For non-qubit subsystems the integer range can go from 0 to 9. For example in a qutrit system

```python
import numpy as np
from qiskit.quantum_info import DensityMatrix

mat = np.zeros((9, 9))
mat[0, 0] = 0.25
mat[3, 3] = 0.25
mat[6, 6] = 0.25
mat[-1, -1] = 0.25
rho = DensityMatrix(mat, dims=(3, 3))
print(rho.to_dict())
```

```python
{'00|00': (0.25+0j), '10|10': (0.25+0j), '20|20': (0.25+0j), '22|22': (0.25+0j)}
```

For large subsystem dimensions delimiters are required. The following example is for a 20-dimensional system consisting of a qubit and 10-dimensional qudit.

```python
import numpy as np
from qiskit.quantum_info import DensityMatrix

mat = np.zeros((2 * 10, 2 * 10))
mat[0, 0] = 0.5
mat[-1, -1] = 0.5
rho = DensityMatrix(mat, dims=(2, 10))
print(rho.to_dict())
```

```python
{'00|00': (0.5+0j), '91|91': (0.5+0j)}
```
