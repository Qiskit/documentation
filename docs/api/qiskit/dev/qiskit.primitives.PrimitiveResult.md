---
title: PrimitiveResult
description: API reference for qiskit.primitives.PrimitiveResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.primitives.PrimitiveResult
---

# PrimitiveResult

<span id="qiskit.primitives.PrimitiveResult" />

`qiskit.primitives.PrimitiveResult(pub_results, metadata=None)` [GitHub](https://github.com/qiskit/qiskit/tree/main/qiskit/primitives/containers/primitive_result.py "view source code")

Bases: [`Generic`](https://docs.python.org/3/library/typing.html#typing.Generic "(in Python v3.12)")\[`T`]

A container for multiple pub results and global metadata.

**Parameters**

*   **pub\_results** – Pub results.
*   **metadata** – Metadata that is common to all pub results; metadata specific to particular pubs should be placed in their metadata fields. Keys are expected to be strings.

## Attributes

<span id="qiskit.primitives.PrimitiveResult.metadata" />

### metadata

The metadata of this primitive result.

