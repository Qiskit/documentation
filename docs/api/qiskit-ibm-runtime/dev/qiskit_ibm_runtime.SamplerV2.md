---
title: SamplerV2
description: API reference for qiskit_ibm_runtime.SamplerV2
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_runtime.SamplerV2
---

# SamplerV2

<span id="qiskit_ibm_runtime.SamplerV2" />

`SamplerV2(backend=None, session=None, options=None)` [GitHub](https://github.com/Qiskit/qiskit-ibm-runtime/tree/main/qiskit_ibm_runtime/sampler.py#L46-L137 "view source code")

Class for interacting with Qiskit Runtime Sampler primitive service.

This class supports version 2 of the Sampler interface, which uses different input and output formats than version 1.

Qiskit Runtime Sampler primitive returns the sampled result according to the specified output type. For example, it returns a bitstring for each shot if measurement level 2 (bits) is requested.

The [`run()`](#qiskit_ibm_runtime.SamplerV2.run "qiskit_ibm_runtime.SamplerV2.run") method can be used to submit circuits and parameters to the Sampler primitive.

Initializes the Sampler primitive.

**Parameters**

*   **backend** (`Union`\[`str`, [`IBMBackend`](qiskit_ibm_runtime.IBMBackend "qiskit_ibm_runtime.ibm_backend.IBMBackend"), `None`]) – Backend to run the primitive. This can be a backend name or an [`IBMBackend`](qiskit_ibm_runtime.IBMBackend "qiskit_ibm_runtime.IBMBackend") instance. If a name is specified, the default account (e.g. `QiskitRuntimeService()`) is used.

*   **session** (`Union`\[[`Session`](qiskit_ibm_runtime.Session "qiskit_ibm_runtime.session.Session"), `str`, [`IBMBackend`](qiskit_ibm_runtime.IBMBackend "qiskit_ibm_runtime.ibm_backend.IBMBackend"), `None`]) –

    Session in which to call the primitive.

    If both `session` and `backend` are specified, `session` takes precedence. If neither is specified, and the primitive is created inside a [`qiskit_ibm_runtime.Session`](qiskit_ibm_runtime.Session "qiskit_ibm_runtime.Session") context manager, then the session is used. Otherwise if IBM Cloud channel is used, a default backend is selected.

*   **options** (`Union`\[`Dict`, [`SamplerOptions`](qiskit_ibm_runtime.options.SamplerOptions "qiskit_ibm_runtime.options.sampler_options.SamplerOptions"), `None`]) – Primitive options, see `Options` for detailed description. The `backend` keyword is still supported but is deprecated.

**Raises**

**NotImplementedError** – If “q-ctrl” channel strategy is used.

## Attributes

<span id="qiskit_ibm_runtime.SamplerV2.options" />

### options

`SamplerOptions`

Return options

**Return type**

`TypeVar`(`OptionsT`, bound= `BaseOptions`)

<span id="qiskit_ibm_runtime.SamplerV2.session" />

### session

Return session used by this primitive.

**Return type**

`Optional`\[[`Session`](qiskit_ibm_runtime.Session "qiskit_ibm_runtime.session.Session")]

**Returns**

Session used by this primitive, or `None` if session is not used.

<span id="qiskit_ibm_runtime.SamplerV2.version" />

### version

`= 2`

## Methods

### run

<span id="qiskit_ibm_runtime.SamplerV2.run" />

`run(pubs, *, shots=None)` [GitHub](https://github.com/Qiskit/qiskit-ibm-runtime/tree/main/qiskit_ibm_runtime/sampler.py#L97-L124 "view source code")

Submit a request to the estimator primitive.

**Parameters**

*   **pubs** (*Iterable\[SamplerPubLike]*) – An iterable of pub-like objects. For example, a list of circuits or tuples `(circuit, parameter_values)`.
*   **shots** (*int | None*) – The total number of shots to sample for each sampler pub that does not specify its own shots. If `None`, the primitive’s default shots value will be used, which can vary by implementation.

**Return type**

RuntimeJobV2

**Returns**

Submitted job. The result of the job is an instance of `qiskit.primitives.containers.PrimitiveResult`.

**Raises**

**ValueError** – Invalid arguments are given.

