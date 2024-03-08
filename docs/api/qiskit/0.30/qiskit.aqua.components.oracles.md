---
title: oracles
description: API reference for qiskit.aqua.components.oracles
in_page_toc_min_heading_level: 2
python_api_type: module
python_api_name: qiskit.aqua.components.oracles
---

<span id="module-qiskit.aqua.components.oracles" />

<span id="qiskit-aqua-components-oracles" />

# Oracles

<span id="module-qiskit.aqua.components.oracles" />

`qiskit.aqua.components.oracles`

An oracle is a black box operation used as input to another algorithm. They tend to encode a function $f:\{0,1\}^n \rightarrow \{0,1\}^m$ where the goal of the algorithm is to determine some property of $f$.

Oracles are used by [`Grover`](qiskit.aqua.algorithms.Grover "qiskit.aqua.algorithms.Grover") and [`DeutschJozsa`](qiskit.aqua.algorithms.DeutschJozsa "qiskit.aqua.algorithms.DeutschJozsa") algorithms for example.

# Oracle Base Class

|                                                                                           |                         |
| ----------------------------------------------------------------------------------------- | ----------------------- |
| [`Oracle`](qiskit.aqua.components.oracles.Oracle "qiskit.aqua.components.oracles.Oracle") | Base class for oracles. |

# Oracles

|                                                                                                                                              |                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| [`LogicalExpressionOracle`](qiskit.aqua.components.oracles.LogicalExpressionOracle "qiskit.aqua.components.oracles.LogicalExpressionOracle") | The Logical Expression Quantum Oracle.   |
| [`TruthTableOracle`](qiskit.aqua.components.oracles.TruthTableOracle "qiskit.aqua.components.oracles.TruthTableOracle")                      | The Truth Table-based Quantum Oracle.    |
| [`CustomCircuitOracle`](qiskit.aqua.components.oracles.CustomCircuitOracle "qiskit.aqua.components.oracles.CustomCircuitOracle")             | The Custom Circuit-based Quantum Oracle. |

