---
title: BaseSampler
description: API reference for qiskit.primitives.BaseSampler
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.primitives.BaseSampler
---

# BaseSampler

<span id="qiskit.primitives.BaseSampler" />

`BaseSampler(circuits, parameters=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/primitives/base_sampler.py "view source code")

Bases: `abc.ABC`

Sampler base class

Base class of Sampler that calculates quasi-probabilities of bitstrings from quantum circuits.

**Parameters**

*   **circuits** – quantum circuits to be executed
*   **parameters** – parameters of quantum circuits Defaults to `[circ.parameters for circ in circuits]`

**Raises**

**QiskitError** – for mismatch of circuits and parameters list.

## Methods

### close

<span id="qiskit.primitives.BaseSampler.close" />

`abstract BaseSampler.close()`

Close the session and free resources

## Attributes

<span id="qiskit.primitives.BaseSampler.circuits" />

### circuits

Quantum circuits

**Returns**

quantum circuits

<span id="qiskit.primitives.BaseSampler.parameters" />

### parameters

Parameters of quantum circuits

**Returns**

Parameter list of the quantum circuits

