---
title: Sampler
description: API reference for qiskit.primitives.Sampler
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.primitives.Sampler
---

# Sampler

<span id="qiskit.primitives.Sampler" />

`Sampler(circuits, parameters=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/primitives/sampler.py "view source code")

Bases: `qiskit.primitives.base_sampler.BaseSampler`

Sampler class

**Parameters**

**circuits** – circuits to be executed

**Raises**

**QiskitError** – if some classical bits are not used for measurements.

## Methods

### close

<span id="qiskit.primitives.Sampler.close" />

`Sampler.close()`

Close the session and free resources

## Attributes

<span id="qiskit.primitives.Sampler.circuits" />

### circuits

Quantum circuits

**Returns**

quantum circuits

<span id="qiskit.primitives.Sampler.parameters" />

### parameters

Parameters of quantum circuits

**Returns**

Parameter list of the quantum circuits

