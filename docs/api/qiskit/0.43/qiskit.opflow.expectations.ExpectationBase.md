---
title: ExpectationBase
description: API reference for qiskit.opflow.expectations.ExpectationBase
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.expectations.ExpectationBase
---

# ExpectationBase

<span id="qiskit.opflow.expectations.ExpectationBase" />

`ExpectationBase`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/opflow/expectations/expectation_base.py "view source code")

Bases: [`ConverterBase`](qiskit.opflow.converters.ConverterBase "qiskit.opflow.converters.converter_base.ConverterBase")

Deprecated: A base for Expectation value converters. Expectations are converters which enable the computation of the expectation value of an Observable with respect to some state function. They traverse an Operator tree, replacing OperatorStateFn measurements with equivalent measurements which are more amenable to computation on quantum or classical hardware. For example, if one would like to measure the expectation value of an Operator `o` expressed as a sum of Paulis with respect to some state function, but only has access to diagonal measurements on Quantum hardware, we can create a measurement \~StateFn(o), use a `PauliExpectation` to convert it to a diagonal measurement and circuit pre-rotations to a append to the state, and sample this circuit on Quantum hardware with a CircuitSampler. All in all, this would be: `my_sampler.convert(my_expect.convert(~StateFn(o)) @ my_state).eval()`.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.expectations.expectation_base.ExpectationBase` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

**Methods Defined Here**

|                                                                                                                                                 |                                                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [`compute_variance`](qiskit.opflow.expectations.ExpectationBase#compute_variance "qiskit.opflow.expectations.ExpectationBase.compute_variance") | Compute the variance of the expectation estimator.                                                                                 |
| [`convert`](qiskit.opflow.expectations.ExpectationBase#convert "qiskit.opflow.expectations.ExpectationBase.convert")                            | Accept an Operator and return a new Operator with the measurements replaced by alternate methods to compute the expectation value. |

