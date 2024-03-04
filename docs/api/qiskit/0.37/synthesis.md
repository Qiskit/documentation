---
title: synthesis
description: API reference for qiskit.synthesis
in_page_toc_min_heading_level: 2
python_api_type: module
python_api_name: qiskit.synthesis
---

<span id="module-qiskit.synthesis" />

<span id="qiskit-synthesis" />

# Circuit Synthesis

<span id="module-qiskit.synthesis" />

`qiskit.synthesis`

## Evolution Synthesis

|                                                                                                            |                                                                                          |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| [`EvolutionSynthesis`](qiskit.synthesis.EvolutionSynthesis "qiskit.synthesis.EvolutionSynthesis")()        | Interface for evolution synthesis algorithms.                                            |
| [`ProductFormula`](qiskit.synthesis.ProductFormula "qiskit.synthesis.ProductFormula")(order\[, reps, ...]) | Product formula base class for the decomposition of non-commuting operator exponentials. |
| [`LieTrotter`](qiskit.synthesis.LieTrotter "qiskit.synthesis.LieTrotter")(\[reps, insert\_barriers, ...])  | The Lie-Trotter product formula.                                                         |
| [`SuzukiTrotter`](qiskit.synthesis.SuzukiTrotter "qiskit.synthesis.SuzukiTrotter")(\[order, reps, ...])    | The (higher order) Suzuki-Trotter product formula.                                       |
| [`MatrixExponential`](qiskit.synthesis.MatrixExponential "qiskit.synthesis.MatrixExponential")()           | Exact operator evolution via matrix exponentiation and unitary synthesis.                |

