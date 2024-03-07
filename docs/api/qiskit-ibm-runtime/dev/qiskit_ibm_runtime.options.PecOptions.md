---
title: PecOptions
description: API reference for qiskit_ibm_runtime.options.PecOptions
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_runtime.options.PecOptions
---

# PecOptions

<span id="qiskit_ibm_runtime.options.PecOptions" />

`PecOptions(*args, **kwargs)` [GitHub](https://github.com/Qiskit/qiskit-ibm-runtime/tree/main/qiskit_ibm_runtime/options/pec_options.py#L20-L41 "view source code")

Probabalistic error cancellation mitigation options.

**Parameters**

*   **max\_overhead** – The maximum circuit sampling overhead allowed, or `None` for no maximum.

*   **noise\_gain** –

    The amount by which to scale the noise, where:

    *   A value of one corresponds to attempting to remove all of the noise.
    *   A value greater than one corresponds to injecting noise.
    *   A value between 0 and 1 corresponds to partially removing the noise.

    If “auto”, the value will be chosen automatically based on the input PUBs. Default: “auto”.

## Attributes

<span id="qiskit_ibm_runtime.options.PecOptions.max_overhead" />

### max\_overhead

`UnsetType | float | None`

`= Unset`

<span id="qiskit_ibm_runtime.options.PecOptions.noise_gain" />

### noise\_gain

`UnsetType | float | Literal['auto']`

`= Unset`

## Methods

