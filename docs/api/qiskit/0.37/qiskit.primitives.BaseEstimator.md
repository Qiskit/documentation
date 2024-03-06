---
title: BaseEstimator
description: API reference for qiskit.primitives.BaseEstimator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.primitives.BaseEstimator
---

# BaseEstimator

<span id="qiskit.primitives.BaseEstimator" />

`BaseEstimator(circuits: Iterable[QuantumCircuit] | QuantumCircuit, observables: Iterable[SparsePauliOp] | SparsePauliOp, *args, parameters: Iterable[Iterable[Parameter]] | None = None, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.21/qiskit/primitives/base_estimator.py "view source code")

Bases: `abc.ABC`

Estimator base class.

Base class for Estimator that estimates expectation values of quantum circuits and observables.

Creating an instance of an Estimator, or using one in a `with` context opens a session that holds resources until the instance is `close()` ed or the context is exited.

**Parameters**

*   **circuits** – Quantum circuits that represent quantum states.
*   **observables** – Observables.
*   **parameters** – Parameters of quantum circuits, specifying the order in which values will be bound. Defaults to `[circ.parameters for circ in circuits]` The indexing is such that `parameters[i, j]` is the j-th formal parameter of `circuits[i]`.

**Raises**

**QiskitError** – For mismatch of circuits and parameters list.

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

The quantum circuits.

<span id="qiskit.primitives.BaseEstimator.observables" />

### observables

Observables to be estimated.

**Returns**

The observables.

<span id="qiskit.primitives.BaseEstimator.parameters" />

### parameters

Parameters of the quantum circuits.

**Returns**

Parameters, where `parameters[i][j]` is the j-th parameter of the i-th circuit.

