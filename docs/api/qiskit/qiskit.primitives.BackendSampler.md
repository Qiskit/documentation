---
title: BackendSampler
description: API reference for qiskit.primitives.BackendSampler
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.primitives.BackendSampler
---

# BackendSampler

<span id="qiskit.primitives.BackendSampler" />

`qiskit.primitives.BackendSampler(backend, options=None, bound_pass_manager=None, skip_transpilation=False)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/primitives/backend_sampler.py "view source code")

Bases: [`BaseSamplerV1`](qiskit.primitives.BaseSamplerV1 "qiskit.primitives.base.base_sampler.BaseSamplerV1")\[[`PrimitiveJob`](qiskit.primitives.PrimitiveJob "qiskit.primitives.primitive_job.PrimitiveJob")\[[`SamplerResult`](qiskit.primitives.SamplerResult "qiskit.primitives.base.sampler_result.SamplerResult")]]

A `BaseSampler` implementation that provides an interface for leveraging the sampler interface from any backend.

This class provides a sampler interface from any backend and doesn’t do any measurement mitigation, it just computes the probability distribution from the counts. It facilitates using backends that do not provide a native `BaseSampler` implementation in places that work with `BaseSampler`. However, if you’re using a provider that has a native implementation of `BaseSampler`, it is a better choice to leverage that native implementation as it will likely include additional optimizations and be a more efficient implementation. The generic nature of this class precludes doing any provider- or backend-specific optimizations.

Initialize a new BackendSampler

**Parameters**

*   **backend** ([*BackendV1*](qiskit.providers.BackendV1 "qiskit.providers.BackendV1")  *|*[*BackendV2*](qiskit.providers.BackendV2 "qiskit.providers.BackendV2")) – Required: the backend to run the sampler primitive on
*   **options** ([*dict*](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)") *| None*) – Default options.
*   **bound\_pass\_manager** ([*PassManager*](qiskit.transpiler.PassManager "qiskit.transpiler.PassManager") *| None*) – An optional pass manager to run after parameter binding.
*   **skip\_transpilation** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – If this is set to True the internal compilation of the input circuits is skipped and the circuit objects will be directly executed when this objected is called.

**Raises**

[**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError "(in Python v3.12)") – If backend is not provided

## Attributes

<span id="qiskit.primitives.BackendSampler.backend" />

### backend

Returns: The backend which this sampler object based on

<span id="qiskit.primitives.BackendSampler.options" />

### options

Return options values for the estimator.

**Returns**

options

<span id="qiskit.primitives.BackendSampler.preprocessed_circuits" />

### preprocessed\_circuits

Preprocessed quantum circuits produced by preprocessing :returns: List of the transpiled quantum circuit

**Raises**

[**QiskitError**](exceptions#qiskit.exceptions.QiskitError "qiskit.exceptions.QiskitError") – if the instance has been closed.

<span id="qiskit.primitives.BackendSampler.transpile_options" />

### transpile\_options

Return the transpiler options for transpiling the circuits.

<span id="qiskit.primitives.BackendSampler.transpiled_circuits" />

### transpiled\_circuits

Transpiled quantum circuits. :returns: List of the transpiled quantum circuit

**Raises**

[**QiskitError**](exceptions#qiskit.exceptions.QiskitError "qiskit.exceptions.QiskitError") – if the instance has been closed.

## Methods

### run

<span id="qiskit.primitives.BackendSampler.run" />

`run(circuits, parameter_values=None, **run_options)`

Run the job of the sampling of bitstrings.

**Parameters**

*   **circuits** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") *| Sequence\[*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")*]*) – One of more circuit objects.
*   **parameter\_values** (*Sequence\[*[*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")*] | Sequence\[Sequence\[*[*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")*]] | None*) – Parameters to be bound to the circuit.
*   **run\_options** – Backend runtime options used for circuit execution.

**Returns**

The job object of the result of the sampler. The i-th result corresponds to `circuits[i]` evaluated with parameters bound as `parameter_values[i]`.

**Raises**

[**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError "(in Python v3.12)") – Invalid arguments are given.

**Return type**

T

### set\_options

<span id="qiskit.primitives.BackendSampler.set_options" />

`set_options(**fields)`

Set options values for the estimator.

**Parameters**

**\*\*fields** – The fields to update the options

### set\_transpile\_options

<span id="qiskit.primitives.BackendSampler.set_transpile_options" />

`set_transpile_options(**fields)`

Set the transpiler options for transpiler. :param \*\*fields: The fields to update the options.

**Returns**

self.

**Raises**

[**QiskitError**](exceptions#qiskit.exceptions.QiskitError "qiskit.exceptions.QiskitError") – if the instance has been closed.

