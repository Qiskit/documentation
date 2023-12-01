<span id="qiskit-quantum-info-onequbiteulerdecomposer" />

# qiskit.quantum\_info.OneQubitEulerDecomposer

<span id="undefined" />

`OneQubitEulerDecomposer(basis='U3')`

A class for decomposing 1-qubit unitaries into Euler angle rotations.

The resulting decomposition is parameterized by 3 Euler rotation angle parameters $(\theta, \phi, \lambda)$, and a phase parameter $\gamma$. The value of the parameters for an input unitary depends on the decomposition basis. Allowed bases and the resulting circuits are shown in the following table. Note that for the non-Euler bases (U3, U1X, RR), the ZYZ euler parameters are used.

| Basis | Euler Angle Basis              | Decomposition Circuit                                                                                                   |
| ----- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| ‘ZYZ’ | $Z(\phi) Y(\theta) Z(\lambda)$ | $e^{i\gamma} R_Z(\phi).R_Y(\theta).R_Z(\lambda)$                                                                        |
| ‘ZXZ’ | $Z(\phi) X(\theta) Z(\lambda)$ | $e^{i\gamma} R_Z(\phi).R_X(\theta).R_Z(\lambda)$                                                                        |
| ‘XYX’ | $X(\phi) Y(\theta) X(\lambda)$ | $e^{i\gamma} R_X(\phi).R_Y(\theta).R_X(\lambda)$                                                                        |
| ‘U3’  | $Z(\phi) Y(\theta) Z(\lambda)$ | $e^{i\gamma} U_3(\theta,\phi,\lambda)$                                                                                  |
| ‘U’   | $Z(\phi) Y(\theta) Z(\lambda)$ | $e^{i\gamma} U_3(\theta,\phi,\lambda)$                                                                                  |
| ‘PSX’ | $Z(\phi) Y(\theta) Z(\lambda)$ | $e^{i\gamma} U_1(\phi+\pi).R_X\left(\frac{\pi}{2}\right).$ $U_1(\theta+\pi).R_X\left(\frac{\pi}{2}\right).U_1(\lambda)$ |
| ‘ZSX’ | $Z(\phi) Y(\theta) Z(\lambda)$ | $e^{i\gamma} U_1(\phi+\pi).R_X\left(\frac{\pi}{2}\right).$ $R_Z(\theta+\pi).S_X\left(\frac{\pi}{2}\right).U_1(\lambda)$ |
| ‘U1X’ | $Z(\phi) Y(\theta) Z(\lambda)$ | $e^{i\gamma} U_1(\phi+\pi).R_X\left(\frac{\pi}{2}\right).$ $U_1(\theta+\pi).R_X\left(\frac{\pi}{2}\right).U_1(\lambda)$ |
| ‘RR’  | $Z(\phi) Y(\theta) Z(\lambda)$ | $e^{i\gamma} R\left(-\pi,\frac{\phi-\lambda+\pi}{2}\right).$ $R\left(\theta+\pi,\frac{\pi}{2}-\lambda\right)$           |

Initialize decomposer

Supported bases are: ‘U’, ‘PSX’, ‘ZSX’, ‘U3’, ‘U1X’, ‘RR’, ‘ZYZ’, ‘ZXZ’, ‘XYX’.

**Parameters**

**basis** (*str*) – the decomposition basis \[Default: ‘U3’]

**Raises**

**QiskitError** – If input basis is not recognized.

<span id="undefined" />

`__init__(basis='U3')`

Initialize decomposer

Supported bases are: ‘U’, ‘PSX’, ‘ZSX’, ‘U3’, ‘U1X’, ‘RR’, ‘ZYZ’, ‘ZXZ’, ‘XYX’.

**Parameters**

**basis** (*str*) – the decomposition basis \[Default: ‘U3’]

**Raises**

**QiskitError** – If input basis is not recognized.

## Methods

|                                                                                                                                                             |                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| [`__init__`](#qiskit.quantum_info.OneQubitEulerDecomposer.__init__ "qiskit.quantum_info.OneQubitEulerDecomposer.__init__")(\[basis])                        | Initialize decomposer                              |
| [`angles`](#qiskit.quantum_info.OneQubitEulerDecomposer.angles "qiskit.quantum_info.OneQubitEulerDecomposer.angles")(unitary)                               | Return the Euler angles for input array.           |
| [`angles_and_phase`](#qiskit.quantum_info.OneQubitEulerDecomposer.angles_and_phase "qiskit.quantum_info.OneQubitEulerDecomposer.angles_and_phase")(unitary) | Return the Euler angles and phase for input array. |

## Attributes

|                                                                                                                   |                          |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------ |
| [`basis`](#qiskit.quantum_info.OneQubitEulerDecomposer.basis "qiskit.quantum_info.OneQubitEulerDecomposer.basis") | The decomposition basis. |

<span id="undefined" />

`angles(unitary)`

Return the Euler angles for input array.

**Parameters**

**unitary** (*np.ndarray*) – 2x2 unitary matrix.

**Returns**

(theta, phi, lambda).

**Return type**

tuple

<span id="undefined" />

`angles_and_phase(unitary)`

Return the Euler angles and phase for input array.

**Parameters**

**unitary** (*np.ndarray*) – 2x2 unitary matrix.

**Returns**

(theta, phi, lambda, phase).

**Return type**

tuple

<span id="undefined" />

`property basis`

The decomposition basis.
