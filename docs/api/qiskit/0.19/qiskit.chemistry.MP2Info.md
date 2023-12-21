---
title: MP2Info
description: API reference for qiskit.chemistry.MP2Info
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.MP2Info
---

# MP2Info

<span id="qiskit.chemistry.MP2Info" />

`MP2Info(qmolecule, threshold=1e-12)`

A utility class for Moller-Plesset 2nd order (MP2) information

Each double excitation given by \[i,a,j,b] has a coefficient computed using

coeff = -(2 \* Tiajb - Tibja)/(oe\[b] + oe\[a] - oe\[i] - oe\[j])

where oe\[] is the orbital energy

and an energy delta given by

e\_delta = coeff \* Tiajb

All the computations are done using the molecule orbitals but the indexes used in the excitation information passed in and out are in the block spin orbital numbering as normally used by the chemistry module.

A utility class for MP2 info

**Parameters**

*   **qmolecule** ([*QMolecule*](qiskit.chemistry.QMolecule "qiskit.chemistry.QMolecule")) – QMolecule from chemistry driver
*   **threshold** (*float*) – Computed coefficients and energy deltas will be set to zero if their value is below this threshold

## Attributes

|                                                                                                   |                                                      |
| ------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| [`MP2Info.mp2_delta`](qiskit.chemistry.MP2Info.mp2_delta "qiskit.chemistry.MP2Info.mp2_delta")    | Get the MP2 delta energy correction for the molecule |
| [`MP2Info.mp2_energy`](qiskit.chemistry.MP2Info.mp2_energy "qiskit.chemistry.MP2Info.mp2_energy") | Get the MP2 energy for the molecule                  |

## Methods

|                                                                                                                                                |                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [`MP2Info.mp2_get_term_info`](qiskit.chemistry.MP2Info.mp2_get_term_info "qiskit.chemistry.MP2Info.mp2_get_term_info")(excitation\_list\[, …]) | With a reduced active space the set of used excitations can be less than allowing all available excitations.                       |
| [`MP2Info.mp2_terms`](qiskit.chemistry.MP2Info.mp2_terms "qiskit.chemistry.MP2Info.mp2_terms")(\[freeze\_core, …])                             | Gets the set of MP2 terms for the molecule taking into account index adjustments due to frozen core and/or other orbital reduction |

