# BaseSampler



`BaseSampler(circuits, parameters=None)`

Bases: `abc.ABC`

Sampler base class

Base class of Sampler that calculates quasi-probabilities of bitstrings from quantum circuits.

**Parameters**

*   **circuits** – quantum circuits to be executed
*   **parameters** – parameters of quantum circuits Defaults to `[circ.parameters for circ in circuits]`

**Raises**

**QiskitError** – for mismatch of circuits and parameters list.

## Methods

|                                                                                                                          |                                      |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ |
| [`close`](qiskit.primitives.BaseSampler.close#qiskit.primitives.BaseSampler.close "qiskit.primitives.BaseSampler.close") | Close the session and free resources |

## Attributes



### circuits

Quantum circuits

**Returns**

quantum circuits



### parameters

Parameters of quantum circuits

**Returns**

Parameter list of the quantum circuits
