---
title: broadcast_arguments
description: API reference for qiskit.providers.aer.extensions.SnapshotProbabilities.broadcast_arguments
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.aer.extensions.SnapshotProbabilities.broadcast_arguments
---

# broadcast\_arguments

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.broadcast_arguments" />

`SnapshotProbabilities.broadcast_arguments(qargs, cargs)`

Validation of the arguments.

**Parameters**

*   **qargs** (*List*) – List of quantum bit arguments.
*   **cargs** (*List*) – List of classical bit arguments.

**Yields**

*Tuple(List, List)* – A tuple with single arguments.

**Raises**

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

