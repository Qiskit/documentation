---
title: a_factory
description: API reference for qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.a_factory
in_page_toc_min_heading_level: 1
python_api_type: property
python_api_name: qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.a_factory
---

# a\_factory

Get the A operator encoding the amplitude a that’s approximated, i.e.

> A |0>\_n |0> = sqrt\{1 - a} |psi\_0>\_n |0> + sqrt\{a} |psi\_1>\_n |1>

see the original Brassard paper ([https://arxiv.org/abs/quant-ph/0005055](https://arxiv.org/abs/quant-ph/0005055)) for more detail.

**Returns**

the A operator as CircuitFactory

**Return type**

[CircuitFactory](qiskit.aqua.utils.CircuitFactory "qiskit.aqua.utils.CircuitFactory")

