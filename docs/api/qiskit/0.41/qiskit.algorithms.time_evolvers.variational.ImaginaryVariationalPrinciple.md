---
title: ImaginaryVariationalPrinciple
description: API reference for qiskit.algorithms.time_evolvers.variational.ImaginaryVariationalPrinciple
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.time_evolvers.variational.ImaginaryVariationalPrinciple
---

# ImaginaryVariationalPrinciple[¶](#imaginaryvariationalprinciple "Permalink to this headline")

<span id="qiskit.algorithms.time_evolvers.variational.ImaginaryVariationalPrinciple" />

`ImaginaryVariationalPrinciple(qgt, gradient)`

Bases: [`qiskit.algorithms.time_evolvers.variational.variational_principles.variational_principle.VariationalPrinciple`](qiskit.algorithms.time_evolvers.variational.VariationalPrinciple "qiskit.algorithms.time_evolvers.variational.variational_principles.variational_principle.VariationalPrinciple"), `abc.ABC`

Abstract class for an Imaginary Variational Principle. The imaginary variant means that we consider imaginary time dynamics.

**Parameters**

*   **qgt** ([`BaseQGT`](qiskit.algorithms.gradients.BaseQGT "qiskit.algorithms.gradients.base_qgt.BaseQGT")) – Instance of a class used to compute the GQT.
*   **gradient** ([`BaseEstimatorGradient`](qiskit.algorithms.gradients.BaseEstimatorGradient "qiskit.algorithms.gradients.base_estimator_gradient.BaseEstimatorGradient")) – Instance of a class used to compute the state gradient.

