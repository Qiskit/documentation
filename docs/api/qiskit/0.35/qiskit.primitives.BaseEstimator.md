# BaseEstimator

<span id="undefined" />

`BaseEstimator(circuits, observables, parameters=None)`

Bases: `abc.ABC`

Estimator base class.

Base class for Estimator that estimates expectation values of quantum circuits and observables.

Creating an instance of an Estimator, or using one in a `with` context opens a session that holds resources until the instance is `close()` ed or the context is exited.

**Parameters**

*   **circuits** – quantum circuits that represent quantum states
*   **observables** – observables
*   **parameters** – parameters of quantum circuits, specifying the order in which values
*   **be bound.** (*will*) – Defaults to `[circ.parameters for circ in circuits]` The indexing is such that `parameters[i, j]` is the j-th formal parameter of `circuits[i]`.

**Raises**

**QiskitError** – for mismatch of circuits and parameters list.

## Methods

|                                                                                                                                |                                      |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ |
| [`close`](qiskit.primitives.BaseEstimator.close#qiskit.primitives.BaseEstimator.close "qiskit.primitives.BaseEstimator.close") | Close the session and free resources |

## Attributes

<span id="undefined" />

### circuits

Quantum circuits that represents quantum states.

**Returns**

quantum circuits

<span id="undefined" />

### observables

Observables to be estimated

**Returns**

observables

<span id="undefined" />

### parameters

Parameters of quantum circuits

**Returns**

parameters, where `parameters[i][j]` is the j-th parameter of the i-th circuit.
