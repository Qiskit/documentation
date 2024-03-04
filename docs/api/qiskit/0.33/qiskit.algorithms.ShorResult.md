---
title: ShorResult
description: API reference for qiskit.algorithms.ShorResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.ShorResult
---

# ShorResult

<span id="qiskit.algorithms.ShorResult" />

`ShorResult` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.19/qiskit/algorithms/factorizers/shor.py "view source code")

Bases: `qiskit.algorithms.algorithm_result.AlgorithmResult`

Shor Result.

## Methods

### combine

<span id="qiskit.algorithms.ShorResult.combine" />

`ShorResult.combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

## Attributes

<span id="qiskit.algorithms.ShorResult.factors" />

### factors

returns factors

**Return type**

`List`\[`List`\[`int`]]

<span id="qiskit.algorithms.ShorResult.successful_counts" />

### successful\_counts

returns successful counts

**Return type**

`int`

<span id="qiskit.algorithms.ShorResult.total_counts" />

### total\_counts

returns total counts

**Return type**

`int`

