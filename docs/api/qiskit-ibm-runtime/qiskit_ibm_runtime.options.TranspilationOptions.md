---
title: TranspilationOptions
description: API reference for qiskit_ibm_runtime.options.TranspilationOptions
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_runtime.options.TranspilationOptions
---

# TranspilationOptions

<span id="qiskit_ibm_runtime.options.TranspilationOptions" />

`TranspilationOptions(skip_transpilation=False, initial_layout=None, layout_method=None, routing_method=None, approximation_degree=None)`[GitHub](https://github.com/qiskit/qiskit-ibm-runtime/tree/stable/0.17/qiskit_ibm_runtime/options/transpilation_options.py "view source code")

Transpilation options.

**Parameters**

*   **skip\_transpilation** (`bool`) – Whether to skip transpilation.
*   **initial\_layout** (`Union`\[`dict`, `List`, `None`]) – Initial position of virtual qubits on physical qubits. See `qiskit.compiler.transpile` for more information.
*   **layout\_method** (`Optional`\[`str`]) – Name of layout selection pass. One of ‘trivial’, ‘dense’, ‘noise\_adaptive’, ‘sabre’.
*   **routing\_method** (`Optional`\[`str`]) – Name of routing pass. One of ‘basic’, ‘lookahead’, ‘stochastic’, ‘sabre’, ‘none’.
*   **approximation\_degree** (`Optional`\[`float`]) – heuristic dial used for circuit approximation (1.0=no approximation, 0.0=maximal approximation)

## Attributes

<span id="qiskit_ibm_runtime.options.TranspilationOptions.approximation_degree" />

### approximation\_degree

`float | None`

`= None`

<span id="qiskit_ibm_runtime.options.TranspilationOptions.initial_layout" />

### initial\_layout

`dict | List | None`

`= None`

<span id="qiskit_ibm_runtime.options.TranspilationOptions.layout_method" />

### layout\_method

`str | None`

`= None`

<span id="qiskit_ibm_runtime.options.TranspilationOptions.routing_method" />

### routing\_method

`str | None`

`= None`

<span id="qiskit_ibm_runtime.options.TranspilationOptions.skip_transpilation" />

### skip\_transpilation

`bool`

`= False`

## Methods

### validate\_transpilation\_options

<span id="qiskit_ibm_runtime.options.TranspilationOptions.validate_transpilation_options" />

`static validate_transpilation_options(transpilation_options)`

Validate that transpilation options are legal. :raises ValueError: if any transpilation option is not supported :raises ValueError: if layout\_method is not in LayoutMethodType or None. :raises ValueError: if routing\_method is not in RoutingMethodType or None. :raises ValueError: if approximation\_degree in not None or in the range 0.0 to 1.0.

**Return type**

`None`

