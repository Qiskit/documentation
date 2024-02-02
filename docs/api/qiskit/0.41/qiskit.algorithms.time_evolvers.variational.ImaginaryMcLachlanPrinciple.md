---
title: ImaginaryMcLachlanPrinciple
description: API reference for qiskit.algorithms.time_evolvers.variational.ImaginaryMcLachlanPrinciple
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.time_evolvers.variational.ImaginaryMcLachlanPrinciple
---

# ImaginaryMcLachlanPrinciple

<span id="qiskit.algorithms.time_evolvers.variational.ImaginaryMcLachlanPrinciple" />

`ImaginaryMcLachlanPrinciple(qgt=None, gradient=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/algorithms/time_evolvers/variational/variational_principles/imaginary_mc_lachlan_principle.py "view source code")

Bases: [`qiskit.algorithms.time_evolvers.variational.variational_principles.imaginary_variational_principle.ImaginaryVariationalPrinciple`](qiskit.algorithms.time_evolvers.variational.ImaginaryVariationalPrinciple "qiskit.algorithms.time_evolvers.variational.variational_principles.imaginary_variational_principle.ImaginaryVariationalPrinciple")

Class for an Imaginary McLachlan’s Variational Principle. It aims to minimize the distance between both sides of the Wick-rotated Schrödinger equation with a quantum state given as a parametrized trial state. The principle leads to a system of linear equations handled by a linear solver. The imaginary variant means that we consider imaginary time dynamics.

**Parameters**

*   **qgt** ([*BaseQGT*](qiskit.algorithms.gradients.BaseQGT "qiskit.algorithms.gradients.BaseQGT") *| None*) – Instance of a the GQT class used to compute the QFI. If `None` provided, `LinCombQGT` is used.
*   **gradient** ([*BaseEstimatorGradient*](qiskit.algorithms.gradients.BaseEstimatorGradient "qiskit.algorithms.gradients.BaseEstimatorGradient") *| None*) – Instance of a class used to compute the state gradient. If `None` provided, `LinCombEstimatorGradient` is used.

**Raises**

[**AlgorithmError**](qiskit.algorithms.AlgorithmError "qiskit.algorithms.AlgorithmError") – If the gradient instance does not contain an estimator.

**Methods Defined Here**

|                                                                                                                                                                                                                 |                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [`evolution_gradient`](qiskit.algorithms.time_evolvers.variational.ImaginaryMcLachlanPrinciple#evolution_gradient "qiskit.algorithms.time_evolvers.variational.ImaginaryMcLachlanPrinciple.evolution_gradient") | Calculates an evolution gradient according to the rules of this variational principle. |

