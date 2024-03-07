---
title: DynamicalDecouplingOptions
description: API reference for qiskit_ibm_runtime.options.DynamicalDecouplingOptions
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_runtime.options.DynamicalDecouplingOptions
---

# DynamicalDecouplingOptions

<span id="qiskit_ibm_runtime.options.DynamicalDecouplingOptions" />

`DynamicalDecouplingOptions(*args, **kwargs)` [GitHub](https://github.com/Qiskit/qiskit-ibm-runtime/tree/stable/0.21/qiskit_ibm_runtime/options/dynamical_decoupling_options.py#L20-L50 "view source code")

Options for dynamical decoupling (DD).

**Parameters**

*   **enable** – Whether to enable DD as specified by the other options in this class. Default: False.

*   **sequence\_type** –

    Which dynamical decoupling sequence to use. Default: “XX”.

    *   `"XX"`: use the sequence `tau/2 - (+X) - tau - (+X) - tau/2`
    *   `"XpXm"`: use the sequence `tau/2 - (+X) - tau - (-X) - tau/2`
    *   `"XY4"`: : use the sequence `tau/2 - (+X) - tau - (+Y) - tau (-X) - tau - (-Y) - tau/2`

*   **extra\_slack\_distribution** –

    Where to put extra timing delays due to rounding issues. Rounding issues arise because the discrete time step `dt` of the system cannot be divided. This option takes following values. Default: “middle”.

    *   `"middle"`: Put the extra slack to the interval at the middle of the sequence.
    *   `"edges"`: Divide the extra slack as evenly as possible into intervals at beginning and end of the sequence.

*   **scheduling\_method** – Whether to schedule gates as soon as (“asap”) or as late as (“alap”) possible. Default: “alap”.

## Attributes

<span id="qiskit_ibm_runtime.options.DynamicalDecouplingOptions.enable" />

### enable

`UnsetType | bool`

`= Unset`

<span id="qiskit_ibm_runtime.options.DynamicalDecouplingOptions.extra_slack_distribution" />

### extra\_slack\_distribution

`UnsetType | Literal['middle', 'edges']`

`= Unset`

<span id="qiskit_ibm_runtime.options.DynamicalDecouplingOptions.scheduling_method" />

### scheduling\_method

`UnsetType | Literal['alap', 'asap']`

`= Unset`

<span id="qiskit_ibm_runtime.options.DynamicalDecouplingOptions.sequence_type" />

### sequence\_type

`UnsetType | Literal['XX', 'XpXm', 'XY4']`

`= Unset`

## Methods

