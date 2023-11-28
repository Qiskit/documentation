# ExpectationBase

<span id="undefined" />

`ExpectationBase`

Bases: `qiskit.opflow.converters.converter_base.ConverterBase`

A base for Expectation value converters. Expectations are converters which enable the computation of the expectation value of an Observable with respect to some state function. They traverse an Operator tree, replacing OperatorStateFn measurements with equivalent measurements which are more amenable to computation on quantum or classical hardware. For example, if one would like to measure the expectation value of an Operator `o` expressed as a sum of Paulis with respect to some state function, but only has access to diagonal measurements on Quantum hardware, we can create a measurement \~StateFn(o), use a `PauliExpectation` to convert it to a diagonal measurement and circuit pre-rotations to a append to the state, and sample this circuit on Quantum hardware with a CircuitSampler. All in all, this would be: `my_sampler.convert(my_expect.convert(~StateFn(o)) @ my_state).eval()`.

## Methods Defined Here

|                                                                                                                                                                                                             |                                                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [`compute_variance`](qiskit.opflow.expectations.ExpectationBase.compute_variance#qiskit.opflow.expectations.ExpectationBase.compute_variance "qiskit.opflow.expectations.ExpectationBase.compute_variance") | Compute the variance of the expectation estimator.                                                                                 |
| [`convert`](qiskit.opflow.expectations.ExpectationBase.convert#qiskit.opflow.expectations.ExpectationBase.convert "qiskit.opflow.expectations.ExpectationBase.convert")                                     | Accept an Operator and return a new Operator with the measurements replaced by alternate methods to compute the expectation value. |
