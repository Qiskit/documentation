---
title: Backend
description: API reference for qiskit.providers.Backend
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.Backend
---

# Backend

<span id="qiskit.providers.Backend" />

`qiskit.providers.Backend` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/providers/backend.py "view source code")

Bases: [`object`](https://docs.python.org/3/library/functions.html#object "(in Python v3.12)")

Base common type for all versioned Backend abstract classes.

Note this class should not be inherited from directly, it is intended to be used for type checking. When implementing a provider you should use the versioned abstract classes as the parent class and not this class directly.

## Attributes

<span id="qiskit.providers.Backend.version" />

### version

`= 0`

