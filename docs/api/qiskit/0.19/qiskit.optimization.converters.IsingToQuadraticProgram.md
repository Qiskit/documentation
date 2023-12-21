---
title: IsingToQuadraticProgram
description: API reference for qiskit.optimization.converters.IsingToQuadraticProgram
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.converters.IsingToQuadraticProgram
---

# IsingToQuadraticProgram

<span id="qiskit.optimization.converters.IsingToQuadraticProgram" />

`IsingToQuadraticProgram(linear=False)`

Convert a qubit operator into a quadratic program

**Parameters**

**linear** (`bool`) – If linear is True, $x^2$ is treated as a linear term since $x^2 = x$ for $x \in \{0,1\}$. Else, $x^2$ is treat as a quadratic term. The default value is False.

## Methods

|                                                                                                                                                                                    |                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [`IsingToQuadraticProgram.encode`](qiskit.optimization.converters.IsingToQuadraticProgram.encode "qiskit.optimization.converters.IsingToQuadraticProgram.encode")(qubit\_op\[, …]) | Convert a qubit operator and a shift value into a quadratic program |

