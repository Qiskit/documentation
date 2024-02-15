---
title: StatevectorSampler
description: API reference for qiskit.primitives.StatevectorSampler
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.primitives.StatevectorSampler
---

# StatevectorSampler

<span id="qiskit.primitives.StatevectorSampler" />

`qiskit.primitives.StatevectorSampler(*, default_shots=1024, seed=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/primitives/statevector_sampler.py "view source code")

Bases: [`BaseSamplerV2`](qiskit.primitives.BaseSamplerV2 "qiskit.primitives.base.base_sampler.BaseSamplerV2")

Simple implementation of [`BaseSamplerV2`](qiskit.primitives.BaseSamplerV2 "qiskit.primitives.BaseSamplerV2") using full state vector simulation.

**Parameters**

*   **default\_shots** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – The default shots for the sampler if not specified during run.
*   **seed** (*np.random.Generator |* [*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)") *| None*) – The seed or Generator object for random number generation. If None, a random seeded default RNG will be used.

## Attributes

<span id="qiskit.primitives.StatevectorSampler.default_shots" />

### default\_shots

Return the default shots

<span id="qiskit.primitives.StatevectorSampler.seed" />

### seed

Return the seed or Generator object for random number generation.

## Methods

### run

<span id="qiskit.primitives.StatevectorSampler.run" />

`run(pubs, *, shots=None)`

Run and collect samples from each pub.

**Parameters**

*   **pubs** (*Iterable\[SamplerPubLike]*) – An iterable of pub-like objects. For example, a list of circuits or tuples `(circuit, parameter_values)`.
*   **shots** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)") *| None*) – The total number of shots to sample for each sampler pub that does not specify its own shots. If `None`, the primitive’s default shots value will be used, which can vary by implementation.

**Returns**

The job object of Sampler’s result.

**Return type**

PrimitiveJob\[[PrimitiveResult](qiskit.primitives.PrimitiveResult "qiskit.primitives.PrimitiveResult")\[[PubResult](qiskit.primitives.PubResult "qiskit.primitives.PubResult")]]

