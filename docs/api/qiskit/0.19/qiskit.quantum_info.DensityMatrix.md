---
title: DensityMatrix
description: API reference for qiskit.quantum_info.DensityMatrix
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.DensityMatrix
---

# DensityMatrix

<span id="qiskit.quantum_info.DensityMatrix" />

`DensityMatrix(data, dims=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/quantum_info/states/densitymatrix.py "view source code")

DensityMatrix class

Initialize a density matrix object.

**Parameters**

*   **data** (*matrix\_like or vector\_like*) – a density matrix or statevector. If a vector the density matrix is constructed as the projector of that vector.
*   **dims** (*int or tuple or list*) – Optional. The subsystem dimension of the state (See additional information).

**Raises**

**QiskitError** – if input data is not valid.

**Additional Information:**

The `dims` kwarg can be None, an integer, or an iterable of integers.

*   `Iterable` – the subsystem dimensions are the values in the list with the total number of subsystems given by the length of the list.
*   `Int` or `None` – the leading dimension of the input matrix specifies the total dimension of the density matrix. If it is a power of two the state will be initialized as an N-qubit state. If it is not a power of two the state will have a single d-dimensional subsystem.

## Attributes

### atol

The absolute tolerance parameter for float comparisons.

### data

Return data.

### dim

Return total state dimension.

### num\_qubits

Return the number of qubits if a N-qubit state or None otherwise.

### rtol

The relative tolerance parameter for float comparisons.

## Methods

### \_\_mul\_\_

<span id="qiskit.quantum_info.DensityMatrix.__mul__" />

`DensityMatrix.__mul__(other)`

### add

<span id="qiskit.quantum_info.DensityMatrix.add" />

`DensityMatrix.add(other)`

Return the linear combination self + other.

DEPRECATED: use `state + other` instead.

**Parameters**

**other** (*QuantumState*) – a quantum state object.

**Returns**

the linear combination self + other.

**Return type**

LinearOperator

**Raises**

**QiskitError** – if other is not a quantum state, or has incompatible dimensions.

### conjugate

<span id="qiskit.quantum_info.DensityMatrix.conjugate" />

`DensityMatrix.conjugate()`

Return the conjugate of the density matrix.

### copy

<span id="qiskit.quantum_info.DensityMatrix.copy" />

`DensityMatrix.copy()`

Make a copy of current operator.

### dims

<span id="qiskit.quantum_info.DensityMatrix.dims" />

`DensityMatrix.dims(qargs=None)`

Return tuple of input dimension for specified subsystems.

### evolve

<span id="qiskit.quantum_info.DensityMatrix.evolve" />

`DensityMatrix.evolve(other, qargs=None)`

Evolve a quantum state by an operator.

**Parameters**

*   **QuantumChannel** (*other (Operator or*) – or Instruction or Circuit): The operator to evolve by.
*   **qargs** (*list*) – a list of QuantumState subsystem positions to apply the operator on.

**Returns**

the output quantum state.

**Return type**

QuantumState

**Raises**

**QiskitError** – if the operator dimension does not match the specified QuantumState subsystem dimensions.

### expand

<span id="qiskit.quantum_info.DensityMatrix.expand" />

`DensityMatrix.expand(other)`

Return the tensor product state other ⊗ self.

**Parameters**

**other** ([*DensityMatrix*](qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix")) – a quantum state object.

**Returns**

the tensor product state other ⊗ self.

**Return type**

[DensityMatrix](qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix")

**Raises**

**QiskitError** – if other is not a quantum state.

### from\_instruction

<span id="qiskit.quantum_info.DensityMatrix.from_instruction" />

`classmethod DensityMatrix.from_instruction(instruction)`

Return the output density matrix of an instruction.

The statevector is initialized in the state $|{0,\ldots,0}\rangle$ of the same number of qubits as the input instruction or circuit, evolved by the input instruction, and the output statevector returned.

**Parameters**

**instruction** ([*qiskit.circuit.Instruction*](qiskit.circuit.Instruction "qiskit.circuit.Instruction")  *or*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – instruction or circuit

**Returns**

the final density matrix.

**Return type**

[DensityMatrix](qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix")

**Raises**

**QiskitError** – if the instruction contains invalid instructions for density matrix simulation.

### from\_int

<span id="qiskit.quantum_info.DensityMatrix.from_int" />

`static DensityMatrix.from_int(i, dims)`

Return a computational basis state density matrix.

**Parameters**

*   **i** (*int*) – the basis state element.
*   **dims** (*int or tuple or list*) – The subsystem dimensions of the statevector (See additional information).

**Returns**

The computational basis state $|i\rangle\!\langle i|$.

**Return type**

[DensityMatrix](qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix")

#### Additional Information:

The `dims` kwarg can be an integer or an iterable of integers.

*   `Iterable` – the subsystem dimensions are the values in the list with the total number of subsystems given by the length of the list.
*   `Int` – the integer specifies the total dimension of the state. If it is a power of two the state will be initialized as an N-qubit state. If it is not a power of two the state will have a single d-dimensional subsystem.

### from\_label

<span id="qiskit.quantum_info.DensityMatrix.from_label" />

`classmethod DensityMatrix.from_label(label)`

Return a tensor product of Pauli X,Y,Z eigenstates.

| Label | Statevector                                                 |
| ----- | ----------------------------------------------------------- |
| `"0"` | $\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$              |
| `"1"` | $\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$              |
| `"+"` | $\frac{1}{2}\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$   |
| `"-"` | $\frac{1}{2}\begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix}$ |
| `"r"` | $\frac{1}{2}\begin{pmatrix} 1 & -i \\ i & 1 \end{pmatrix}$  |
| `"l"` | $\frac{1}{2}\begin{pmatrix} 1 & i \\ -i & 1 \end{pmatrix}$  |

**Parameters**

**label** (*string*) – a eigenstate string ket label (see table for allowed values).

**Returns**

The N-qubit basis state density matrix.

**Return type**

[Statevector](qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")

**Raises**

**QiskitError** – if the label contains invalid characters, or the length of the label is larger than an explicitly specified num\_qubits.

### is\_valid

<span id="qiskit.quantum_info.DensityMatrix.is_valid" />

`DensityMatrix.is_valid(atol=None, rtol=None)`

Return True if trace 1 and positive semidefinite.

### measure

<span id="qiskit.quantum_info.DensityMatrix.measure" />

`DensityMatrix.measure(qargs=None)`

Measure subsystems and return outcome and post-measure state.

Note that this function uses the QuantumStates internal random number generator for sampling the measurement outcome. The RNG seed can be set using the [`seed()`](qiskit.quantum_info.DensityMatrix#seed "qiskit.quantum_info.DensityMatrix.seed") method.

**Parameters**

**qargs** (*list or None*) – subsystems to sample measurements for, if None sample measurement of all subsystems (Default: None).

**Returns**

**the pair `(outcome, state)` where `outcome` is the**

measurement outcome string label, and `state` is the collapsed post-measurement state for the corresponding outcome.

**Return type**

tuple

### multiply

<span id="qiskit.quantum_info.DensityMatrix.multiply" />

`DensityMatrix.multiply(other)`

Return the scalar multipled state other \* self.

**Parameters**

**other** (*complex*) – a complex number.

**Returns**

the scalar multipled state other \* self.

**Return type**

QuantumState

**Raises**

**QiskitError** – if other is not a valid complex number.

### probabilities

<span id="qiskit.quantum_info.DensityMatrix.probabilities" />

`DensityMatrix.probabilities(qargs=None, decimals=None)`

Return the subsystem measurement probability vector.

Measurement probabilities are with respect to measurement in the computation (diagonal) basis.

**Parameters**

*   **qargs** (*None or list*) – subsystems to return probabilities for, if None return for all subsystems (Default: None).
*   **decimals** (*None or int*) – the number of decimal places to round values. If None no rounding is done (Default: None).

**Returns**

The Numpy vector array of probabilities.

**Return type**

np.array

**Examples**

Consider a 2-qubit product state $\rho=\rho_1\otimes\rho_0$ with $\rho_1=|+\rangle\!\langle+|$, $\rho_0=|0\rangle\!\langle0|$.

```python
from qiskit.quantum_info import DensityMatrix

rho = DensityMatrix.from_label('+0')

# Probabilities for measuring both qubits
probs = rho.probabilities()
print('probs: {}'.format(probs))

# Probabilities for measuring only qubit-0
probs_qubit_0 = rho.probabilities([0])
print('Qubit-0 probs: {}'.format(probs_qubit_0))

# Probabilities for measuring only qubit-1
probs_qubit_1 = rho.probabilities([1])
print('Qubit-1 probs: {}'.format(probs_qubit_1))
```

```python
probs: [0.5 0.  0.5 0. ]
Qubit-0 probs: [1. 0.]
Qubit-1 probs: [0.5 0.5]
```

We can also permute the order of qubits in the `qargs` list to change the qubit position in the probabilities output

```python
from qiskit.quantum_info import DensityMatrix

rho = DensityMatrix.from_label('+0')

# Probabilities for measuring both qubits
probs = rho.probabilities([0, 1])
print('probs: {}'.format(probs))

# Probabilities for measuring both qubits
# but swapping qubits 0 and 1 in output
probs_swapped = rho.probabilities([1, 0])
print('Swapped probs: {}'.format(probs_swapped))
```

```python
probs: [0.5 0.  0.5 0. ]
Swapped probs: [0.5 0.5 0.  0. ]
```

### probabilities\_dict

<span id="qiskit.quantum_info.DensityMatrix.probabilities_dict" />

`DensityMatrix.probabilities_dict(qargs=None, decimals=None)`

Return the subsystem measurement probability dictionary.

Measurement probabilities are with respect to measurement in the computation (diagonal) basis.

This dictionary representation uses a Ket-like notation where the dictionary keys are qudit strings for the subsystem basis vectors. If any subsystem has a dimension greater than 10 comma delimiters are inserted between integers so that subsystems can be distinguished.

**Parameters**

*   **qargs** (*None or list*) – subsystems to return probabilities for, if None return for all subsystems (Default: None).
*   **decimals** (*None or int*) – the number of decimal places to round values. If None no rounding is done (Default: None).

**Returns**

The measurement probabilities in dict (ket) form.

**Return type**

dict

### purity

<span id="qiskit.quantum_info.DensityMatrix.purity" />

`DensityMatrix.purity()`

Return the purity of the quantum state.

### reset

<span id="qiskit.quantum_info.DensityMatrix.reset" />

`DensityMatrix.reset(qargs=None)`

Reset state or subsystems to the 0-state.

**Parameters**

**qargs** (*list or None*) – subsystems to reset, if None all subsystems will be reset to their 0-state (Default: None).

**Returns**

the reset state.

**Return type**

[DensityMatrix](qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix")

#### Additional Information:

If all subsystems are reset this will return the ground state on all subsystems. If only a some subsystems are reset this function will perform evolution by the reset [`SuperOp`](qiskit.quantum_info.SuperOp "qiskit.quantum_info.SuperOp") of the reset subsystems.

### sample\_counts

<span id="qiskit.quantum_info.DensityMatrix.sample_counts" />

`DensityMatrix.sample_counts(shots, qargs=None)`

Sample a dict of qubit measurement outcomes in the computational basis.

**Parameters**

*   **shots** (*int*) – number of samples to generate.
*   **qargs** (*None or list*) – subsystems to sample measurements for, if None sample measurement of all subsystems (Default: None).

**Returns**

sampled counts dictionary.

**Return type**

dict

Additional Information:

> This function *samples* measurement outcomes using the measure [`probabilities()`](qiskit.quantum_info.DensityMatrix#probabilities "qiskit.quantum_info.DensityMatrix.probabilities") for the current state and qargs. It does not actually implement the measurement so the current state is not modified.
>
> The seed for random number generator used for sampling can be set to a fixed value by using the stats [`seed()`](qiskit.quantum_info.DensityMatrix#seed "qiskit.quantum_info.DensityMatrix.seed") method.

### sample\_memory

<span id="qiskit.quantum_info.DensityMatrix.sample_memory" />

`DensityMatrix.sample_memory(shots, qargs=None)`

Sample a list of qubit measurement outcomes in the computational basis.

**Parameters**

*   **shots** (*int*) – number of samples to generate.
*   **qargs** (*None or list*) – subsystems to sample measurements for, if None sample measurement of all subsystems (Default: None).

**Returns**

list of sampled counts if the order sampled.

**Return type**

np.array

Additional Information:

> This function *samples* measurement outcomes using the measure [`probabilities()`](qiskit.quantum_info.DensityMatrix#probabilities "qiskit.quantum_info.DensityMatrix.probabilities") for the current state and qargs. It does not actually implement the measurement so the current state is not modified.
>
> The seed for random number generator used for sampling can be set to a fixed value by using the stats [`seed()`](qiskit.quantum_info.DensityMatrix#seed "qiskit.quantum_info.DensityMatrix.seed") method.

### seed

<span id="qiskit.quantum_info.DensityMatrix.seed" />

`DensityMatrix.seed(value=None)`

Set the seed for the quantum state RNG.

### set\_atol

<span id="qiskit.quantum_info.DensityMatrix.set_atol" />

`classmethod DensityMatrix.set_atol(value)`

Set the class default absolute tolerance parameter for float comparisons.

### set\_rtol

<span id="qiskit.quantum_info.DensityMatrix.set_rtol" />

`classmethod DensityMatrix.set_rtol(value)`

Set the class default relative tolerance parameter for float comparisons.

### subtract

<span id="qiskit.quantum_info.DensityMatrix.subtract" />

`DensityMatrix.subtract(other)`

Return the linear operator self - other.

DEPRECATED: use `state - other` instead.

**Parameters**

**other** (*QuantumState*) – a quantum state object.

**Returns**

the linear combination self - other.

**Return type**

LinearOperator

**Raises**

**QiskitError** – if other is not a quantum state, or has incompatible dimensions.

### tensor

<span id="qiskit.quantum_info.DensityMatrix.tensor" />

`DensityMatrix.tensor(other)`

Return the tensor product state self ⊗ other.

**Parameters**

**other** ([*DensityMatrix*](qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix")) – a quantum state object.

**Returns**

the tensor product operator self ⊗ other.

**Return type**

[DensityMatrix](qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix")

**Raises**

**QiskitError** – if other is not a quantum state.

### to\_counts

<span id="qiskit.quantum_info.DensityMatrix.to_counts" />

`DensityMatrix.to_counts()`

Returns the density matrix as a counts dict of probabilities.

DEPRECATED: use [`probabilities_dict()`](qiskit.quantum_info.DensityMatrix#probabilities_dict "qiskit.quantum_info.DensityMatrix.probabilities_dict") instead.

**Returns**

Counts of probabilities.

**Return type**

dict

### to\_dict

<span id="qiskit.quantum_info.DensityMatrix.to_dict" />

`DensityMatrix.to_dict(decimals=None)`

Convert the density matrix to dictionary form.

This dictionary representation uses a Ket-like notation where the dictionary keys are qudit strings for the subsystem basis vectors. If any subsystem has a dimension greater than 10 comma delimiters are inserted between integers so that subsystems can be distinguished.

**Parameters**

**decimals** (*None or int*) – the number of decimal places to round values. If None no rounding is done (Default: None).

**Returns**

the dictionary form of the DensityMatrix.

**Return type**

dict

**Examples**

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

For large subsystem dimensions delimeters are required. The following example is for a 20-dimensional system consisting of a qubit and 10-dimensional qudit.

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

### to\_operator

<span id="qiskit.quantum_info.DensityMatrix.to_operator" />

`DensityMatrix.to_operator()`

Convert to Operator

### trace

<span id="qiskit.quantum_info.DensityMatrix.trace" />

`DensityMatrix.trace()`

Return the trace of the density matrix.

