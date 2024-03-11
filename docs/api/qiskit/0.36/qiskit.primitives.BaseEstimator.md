---
title: BaseEstimator
description: API reference for qiskit.primitives.BaseEstimator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.primitives.BaseEstimator
---

# BaseEstimator

<span id="qiskit.primitives.BaseEstimator" />

`BaseEstimator(circuits, observables, parameters=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/primitives/base_estimator.py "view source code")

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

### close

<span id="qiskit.primitives.BaseEstimator.close" />

`abstract BaseEstimator.close()`

Close the session and free resources

## Attributes

<span id="qiskit.primitives.BaseEstimator.circuits" />

### circuits

Quantum circuits that represents quantum states.

**Returns**

quantum circuits

<span id="qiskit.primitives.BaseEstimator.observables" />

### observables

Observables to be estimated

**Returns**

observables

<span id="qiskit.primitives.BaseEstimator.parameters" />

### parameters

Parameters of quantum circuits

**Returns**

parameters, where `parameters[i][j]` is the j-th parameter of the i-th circuit.

