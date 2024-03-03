---
title: circuits
description: API reference for qiskit.aqua.circuits
in_page_toc_min_heading_level: 2
python_api_type: module
python_api_name: qiskit.aqua.circuits
---

<span id="module-qiskit.aqua.circuits" />

<span id="qiskit-aqua-circuits" />

# Circuits

<span id="module-qiskit.aqua.circuits" />

`qiskit.aqua.circuits`

Collection of circuits and gates that may be used to build quantum algorithms and components.

<Admonition title="Note" type="note">
  As of Aqua 0.7.0 Gates that were formerly here such as mct etc., that were initially built out to facilitate the development of Aqua algorithms, have been moved into Terra.

  Likewise there are Circuits here, that are now deprecated, which have been moved and have updated versions in Terra qiskit.circuit.library which should be used for any future work. The circuit documentation here indicates the corresponding replacement circuit in the library.
</Admonition>

# Circuits

|                                                                                                                             |                                                                        |
| --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`CNF`](qiskit.aqua.circuits.CNF "qiskit.aqua.circuits.CNF")                                                                | Class for constructing circuits for Conjunctive Normal Forms           |
| [`DNF`](qiskit.aqua.circuits.DNF "qiskit.aqua.circuits.DNF")                                                                | Class for constructing circuits for Disjunctive Normal Forms           |
| [`ESOP`](qiskit.aqua.circuits.ESOP "qiskit.aqua.circuits.ESOP")                                                             | Class for constructing circuits for Exclusive Sum of Products          |
| [`PhaseEstimationCircuit`](qiskit.aqua.circuits.PhaseEstimationCircuit "qiskit.aqua.circuits.PhaseEstimationCircuit")       | Quantum Phase Estimation Circuit.                                      |
| [`StateVectorCircuit`](qiskit.aqua.circuits.StateVectorCircuit "qiskit.aqua.circuits.StateVectorCircuit")                   | Arbitrary State-Vector Circuit.                                        |
| [`FourierTransformCircuits`](qiskit.aqua.circuits.FourierTransformCircuits "qiskit.aqua.circuits.FourierTransformCircuits") | DEPRECATED.                                                            |
| [`FixedValueComparator`](qiskit.aqua.circuits.FixedValueComparator "qiskit.aqua.circuits.FixedValueComparator")             | *DEPRECATED.* Fixed Value Comparator                                   |
| [`LinearRotation`](qiskit.aqua.circuits.LinearRotation "qiskit.aqua.circuits.LinearRotation")                               | *DEPRECATED.* Linearly-controlled X, Y or Z rotation.                  |
| [`PiecewiseLinearRotation`](qiskit.aqua.circuits.PiecewiseLinearRotation "qiskit.aqua.circuits.PiecewiseLinearRotation")    | *DEPRECATED.* Piecewise-linearly-controlled rotation.                  |
| [`PolynomialRotation`](qiskit.aqua.circuits.PolynomialRotation "qiskit.aqua.circuits.PolynomialRotation")                   | *DEPRECATED.* Polynomial rotation.                                     |
| [`WeightedSumOperator`](qiskit.aqua.circuits.WeightedSumOperator "qiskit.aqua.circuits.WeightedSumOperator")                | Adds q^T \* w to separate register for non-negative integer weights w. |

