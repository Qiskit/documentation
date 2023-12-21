---
title: q_factory
description: API reference for qiskit.aqua.algorithms.AmplitudeEstimation.q_factory
in_page_toc_min_heading_level: 1
python_api_type: property
python_api_name: qiskit.aqua.algorithms.AmplitudeEstimation.q_factory
---

# q\_factory

Get the Q operator, or Grover-operator for the Amplitude Estimation algorithm, i.e.

> Q = -A S\_0 A^\{-1} S\_psi0,

where S\_0 reflects about the |0>\_n state and S\_psi0 reflects about |psi\_0>\_n. See [https://arxiv.org/abs/quant-ph/0005055](https://arxiv.org/abs/quant-ph/0005055) for more detail.

If the Q operator is not set, we try to build it from the A operator. If neither the A operator is set, None is returned.

**Returns**

returns the current Q factory of the algorithm

**Return type**

QFactory

