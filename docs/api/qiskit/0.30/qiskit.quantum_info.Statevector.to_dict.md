# qiskit.quantum\_info.Statevector.to\_dict

`Statevector.to_dict(decimals=None)`

Convert the statevector to dictionary form.

This dictionary representation uses a Ket-like notation where the dictionary keys are qudit strings for the subsystem basis vectors. If any subsystem has a dimension greater than 10 comma delimiters are inserted between integers so that subsystems can be distinguished.

**Parameters**

**decimals** (*None or int*) – the number of decimal places to round values. If None no rounding is done (Default: None).

**Returns**

the dictionary form of the Statevector.

**Return type**

dict

## Example

The ket-form of a 2-qubit statevector $|\psi\rangle = |-\rangle\otimes |0\rangle$

```python
from qiskit.quantum_info import Statevector

psi = Statevector.from_label('-0')
print(psi.to_dict())
```

```python
{'00': (0.7071067811865475+0j), '10': (-0.7071067811865475+0j)}
```

For non-qubit subsystems the integer range can go from 0 to 9. For example in a qutrit system

```python
import numpy as np
from qiskit.quantum_info import Statevector

vec = np.zeros(9)
vec[0] = 1 / np.sqrt(2)
vec[-1] = 1 / np.sqrt(2)
psi = Statevector(vec, dims=(3, 3))
print(psi.to_dict())
```

```python
{'00': (0.7071067811865475+0j), '22': (0.7071067811865475+0j)}
```

For large subsystem dimensions delimiters are required. The following example is for a 20-dimensional system consisting of a qubit and 10-dimensional qudit.

```python
import numpy as np
from qiskit.quantum_info import Statevector

vec = np.zeros(2 * 10)
vec[0] = 1 / np.sqrt(2)
vec[-1] = 1 / np.sqrt(2)
psi = Statevector(vec, dims=(2, 10))
print(psi.to_dict())
```

```python
{'00': (0.7071067811865475+0j), '91': (0.7071067811865475+0j)}
```
