---
title: optimizers
description: API reference for qiskit.aqua.components.optimizers
in_page_toc_min_heading_level: 2
python_api_type: module
python_api_name: qiskit.aqua.components.optimizers
---

<span id="module-qiskit.aqua.components.optimizers" />

<span id="qiskit-aqua-components-optimizers" />

# Optimizers

<span id="module-qiskit.aqua.components.optimizers" />

`qiskit.aqua.components.optimizers`

Aqua contains a variety of classical optimizers for use by quantum variational algorithms, such as [`VQE`](qiskit.aqua.algorithms.VQE "qiskit.aqua.algorithms.VQE"). Logically, these optimizers can be divided into two categories:

**[Local Optimizers](#local-optimizers)**

Given an optimization problem, a **local optimizer** is a function that attempts to find an optimal value within the neighboring set of a candidate solution.

**[Global Optimizers](#global-optimizers)**

Given an optimization problem, a **global optimizer** is a function that attempts to find an optimal value among all possible solutions.

# Optimizer Base Class

|                                                                                                                                              |                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`OptimizerSupportLevel`](qiskit.aqua.components.optimizers.OptimizerSupportLevel "qiskit.aqua.components.optimizers.OptimizerSupportLevel") | Support Level enum for features such as bounds, gradient and initial point |
| [`Optimizer`](qiskit.aqua.components.optimizers.Optimizer "qiskit.aqua.components.optimizers.Optimizer")                                     | Base class for optimization algorithm.                                     |

# Local Optimizers

|                                                                                                                |                                                                      |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`ADAM`](qiskit.aqua.components.optimizers.ADAM "qiskit.aqua.components.optimizers.ADAM")                      | Adam and AMSGRAD optimizers.                                         |
| [`AQGD`](qiskit.aqua.components.optimizers.AQGD "qiskit.aqua.components.optimizers.AQGD")                      | Analytic Quantum Gradient Descent (AQGD) with Epochs optimizer.      |
| [`CG`](qiskit.aqua.components.optimizers.CG "qiskit.aqua.components.optimizers.CG")                            | Conjugate Gradient optimizer.                                        |
| [`COBYLA`](qiskit.aqua.components.optimizers.COBYLA "qiskit.aqua.components.optimizers.COBYLA")                | Constrained Optimization By Linear Approximation optimizer.          |
| [`L_BFGS_B`](qiskit.aqua.components.optimizers.L_BFGS_B "qiskit.aqua.components.optimizers.L_BFGS_B")          | Limited-memory BFGS Bound optimizer.                                 |
| [`GSLS`](qiskit.aqua.components.optimizers.GSLS "qiskit.aqua.components.optimizers.GSLS")                      | Gaussian-smoothed Line Search.                                       |
| [`NELDER_MEAD`](qiskit.aqua.components.optimizers.NELDER_MEAD "qiskit.aqua.components.optimizers.NELDER_MEAD") | Nelder-Mead optimizer.                                               |
| [`NFT`](qiskit.aqua.components.optimizers.NFT "qiskit.aqua.components.optimizers.NFT")                         | Nakanishi-Fujii-Todo algorithm.                                      |
| [`P_BFGS`](qiskit.aqua.components.optimizers.P_BFGS "qiskit.aqua.components.optimizers.P_BFGS")                | Parallelized Limited-memory BFGS optimizer.                          |
| [`POWELL`](qiskit.aqua.components.optimizers.POWELL "qiskit.aqua.components.optimizers.POWELL")                | Powell optimizer.                                                    |
| [`SLSQP`](qiskit.aqua.components.optimizers.SLSQP "qiskit.aqua.components.optimizers.SLSQP")                   | Sequential Least SQuares Programming optimizer.                      |
| [`SPSA`](qiskit.aqua.components.optimizers.SPSA "qiskit.aqua.components.optimizers.SPSA")                      | Simultaneous Perturbation Stochastic Approximation (SPSA) optimizer. |
| [`TNC`](qiskit.aqua.components.optimizers.TNC "qiskit.aqua.components.optimizers.TNC")                         | Truncated Newton (TNC) optimizer.                                    |

Qiskit Aqua also provides the following optimizers, which are built-out using the optimizers from the scikit-quant package. The scikit-quant package is not installed by default but must be explicitly installed, if desired, by the user - the optimizers therein are provided under various licenses so it has been made an optional install for the end user to choose whether to do so or not. To install the scikit-quant dependent package you can use pip install ‘qiskit-aqua\[skquant]’.

|                                                                                                    |                                                          |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [`BOBYQA`](qiskit.aqua.components.optimizers.BOBYQA "qiskit.aqua.components.optimizers.BOBYQA")    | Bound Optimization BY Quadratic Approximation algorithm. |
| [`IMFIL`](qiskit.aqua.components.optimizers.IMFIL "qiskit.aqua.components.optimizers.IMFIL")       | IMplicit FILtering algorithm.                            |
| [`SNOBFIT`](qiskit.aqua.components.optimizers.SNOBFIT "qiskit.aqua.components.optimizers.SNOBFIT") | Stable Noisy Optimization by Branch and FIT algorithm.   |

# Global Optimizers

The global optimizers here all use NLopt for their core function and can only be used if their dependent NLopt package is manually installed. See the following section for installation instructions.

*   [Installing NLopt](qiskit.aqua.components.optimizers.nlopts)

The global optimizers are as follows:

|                                                                                                                      |                                                               |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [`CRS`](qiskit.aqua.components.optimizers.CRS "qiskit.aqua.components.optimizers.CRS")                               | Controlled Random Search (CRS) with local mutation optimizer. |
| [`DIRECT_L`](qiskit.aqua.components.optimizers.DIRECT_L "qiskit.aqua.components.optimizers.DIRECT_L")                | DIviding RECTangles Locally-biased optimizer.                 |
| [`DIRECT_L_RAND`](qiskit.aqua.components.optimizers.DIRECT_L_RAND "qiskit.aqua.components.optimizers.DIRECT_L_RAND") | DIviding RECTangles Locally-biased Randomized optimizer.      |
| [`ESCH`](qiskit.aqua.components.optimizers.ESCH "qiskit.aqua.components.optimizers.ESCH")                            | ESCH evolutionary optimizer.                                  |
| [`ISRES`](qiskit.aqua.components.optimizers.ISRES "qiskit.aqua.components.optimizers.ISRES")                         | Improved Stochastic Ranking Evolution Strategy optimizer.     |

