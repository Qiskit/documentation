---
title: OneQubitEulerDecomposer
description: API reference for qiskit.synthesis.OneQubitEulerDecomposer
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.synthesis.OneQubitEulerDecomposer
---

# OneQubitEulerDecomposer

<span id="qiskit.synthesis.OneQubitEulerDecomposer" />

`qiskit.synthesis.OneQubitEulerDecomposer(basis='U3', use_dag=False)` [GitHub](https://github.com/qiskit/qiskit/tree/main/qiskit/synthesis/one_qubit/one_qubit_decompose.py "view source code")

Bases: [`object`](https://docs.python.org/3/library/functions.html#object "(in Python v3.12)")

A class for decomposing 1-qubit unitaries into Euler angle rotations.

The resulting decomposition is parameterized by 3 Euler rotation angle parameters $(\theta, \phi, \lambda)$, and a phase parameter $\gamma$. The value of the parameters for an input unitary depends on the decomposition basis. Allowed bases and the resulting circuits are shown in the following table. Note that for the non-Euler bases ($U3$, $U1X$, $RR$), the $ZYZ$ Euler parameters are used.

| Basis  | Euler Angle Basis              | Decomposition Circuit                                                                                                    |
| ------ | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| ‘ZYZ’  | $Z(\phi) Y(\theta) Z(\lambda)$ | $e^{i\gamma} R_Z(\phi).R_Y(\theta).R_Z(\lambda)$                                                                         |
| ‘ZXZ’  | $Z(\phi) X(\theta) Z(\lambda)$ | $e^{i\gamma} R_Z(\phi).R_X(\theta).R_Z(\lambda)$                                                                         |
| ‘XYX’  | $X(\phi) Y(\theta) X(\lambda)$ | $e^{i\gamma} R_X(\phi).R_Y(\theta).R_X(\lambda)$                                                                         |
| ‘XZX’  | $X(\phi) Z(\theta) X(\lambda)$ | $e^{i\gamma} R_X(\phi).R_Z(\theta).R_X(\lambda)$                                                                         |
| ‘U3’   | $Z(\phi) Y(\theta) Z(\lambda)$ | $e^{i\gamma} U_3(\theta,\phi,\lambda)$                                                                                   |
| ‘U321’ | $Z(\phi) Y(\theta) Z(\lambda)$ | $e^{i\gamma} U_3(\theta,\phi,\lambda)$                                                                                   |
| ‘U’    | $Z(\phi) Y(\theta) Z(\lambda)$ | $e^{i\gamma} U_3(\theta,\phi,\lambda)$                                                                                   |
| ‘PSX’  | $Z(\phi) Y(\theta) Z(\lambda)$ | $e^{i\gamma} U_1(\phi+\pi).R_X\left(\frac{\pi}{2}\right).$ $U_1(\theta+\pi).R_X\left(\frac{\pi}{2}\right).U_1(\lambda)$  |
| ‘ZSX’  | $Z(\phi) Y(\theta) Z(\lambda)$ | $e^{i\gamma} R_Z(\phi+\pi).\sqrt{X}.$ $R_Z(\theta+\pi).\sqrt{X}.R_Z(\lambda)$                                            |
| ‘ZSXX’ | $Z(\phi) Y(\theta) Z(\lambda)$ | $e^{i\gamma} R_Z(\phi+\pi).\sqrt{X}.R_Z(\theta+\pi).\sqrt{X}.R_Z(\lambda)$ or $e^{i\gamma} R_Z(\phi+\pi).X.R_Z(\lambda)$ |
| ‘U1X’  | $Z(\phi) Y(\theta) Z(\lambda)$ | $e^{i\gamma} U_1(\phi+\pi).R_X\left(\frac{\pi}{2}\right).$ $U_1(\theta+\pi).R_X\left(\frac{\pi}{2}\right).U_1(\lambda)$  |
| ‘RR’   | $Z(\phi) Y(\theta) Z(\lambda)$ | $e^{i\gamma} R\left(-\pi,\frac{\phi-\lambda+\pi}{2}\right).$ $R\left(\theta+\pi,\frac{\pi}{2}-\lambda\right)$            |

### \_\_call\_\_

<span id="qiskit.synthesis.OneQubitEulerDecomposer.__call__" />

`__call__(unitary, simplify=True, atol=1e-12)`

Decompose single qubit gate into a circuit.

**Parameters**

*   **unitary** ([*Operator*](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")  *|*[*Gate*](qiskit.circuit.Gate "qiskit.circuit.Gate") *| np.ndarray*) – 1-qubit unitary matrix
*   **simplify** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – reduce gate count in decomposition \[Default: True].
*   **atol** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – absolute tolerance for checking angles when simplifying returned circuit \[Default: 1e-12].

**Returns**

the decomposed single-qubit gate circuit

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

[**QiskitError**](exceptions#qiskit.exceptions.QiskitError "qiskit.exceptions.QiskitError") – if input is invalid or synthesis fails.

Initialize decomposer

Supported bases are: `'U'`, `'PSX'`, `'ZSXX'`, `'ZSX'`, `'U321'`, `'U3'`, `'U1X'`, `'RR'`, `'ZYZ'`, `'ZXZ'`, `'XYX'`, `'XZX'`.

**Parameters**

*   **basis** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – the decomposition basis \[Default: `'U3'`]
*   **use\_dag** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – If true the output from calls to the decomposer will be a [`DAGCircuit`](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit") object instead of [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit").

**Raises**

[**QiskitError**](exceptions#qiskit.exceptions.QiskitError "qiskit.exceptions.QiskitError") – If input basis is not recognized.

## Attributes

<span id="qiskit.synthesis.OneQubitEulerDecomposer.basis" />

### basis

The decomposition basis.

## Methods

### angles

<span id="qiskit.synthesis.OneQubitEulerDecomposer.angles" />

`angles(unitary)`

Return the Euler angles for input array.

**Parameters**

**unitary** ([*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.26)")) – $2\times2$ unitary matrix.

**Returns**

`(theta, phi, lambda)`.

**Return type**

[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.12)")

### angles\_and\_phase

<span id="qiskit.synthesis.OneQubitEulerDecomposer.angles_and_phase" />

`angles_and_phase(unitary)`

Return the Euler angles and phase for input array.

**Parameters**

**unitary** ([*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.26)")) – $2\times2$

**Returns**

`(theta, phi, lambda, phase)`.

**Return type**

[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.12)")

### build\_circuit

<span id="qiskit.synthesis.OneQubitEulerDecomposer.build_circuit" />

`build_circuit(gates, global_phase)`

Return the circuit or dag object from a list of gates.

