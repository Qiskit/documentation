# MP2Info

<span id="undefined" />

`MP2Info(qmolecule, threshold=1e-12)`

Bases: `object`

A utility class for Moller-Plesset 2nd order (MP2) information

Each double excitation given by \[i,a,j,b] has a coefficient computed using

coeff = -(2 \* Tiajb - Tibja)/(oe\[b] + oe\[a] - oe\[i] - oe\[j])

where oe\[] is the orbital energy

and an energy delta given by

e\_delta = coeff \* Tiajb

All the computations are done using the molecule orbitals but the indexes used in the excitation information passed in and out are in the block spin orbital numbering as normally used by the chemistry module.

A utility class for MP2 info

**Parameters**

*   **qmolecule** ([*QMolecule*](qiskit.chemistry.QMolecule#qiskit.chemistry.QMolecule "qiskit.chemistry.QMolecule")) – QMolecule from chemistry driver
*   **threshold** (*float*) – Computed coefficients and energy deltas will be set to zero if their value is below this threshold

## Methods

|                                                                                                                                                           |                                                                                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [`mp2_get_term_info`](qiskit.chemistry.MP2Info.mp2_get_term_info#qiskit.chemistry.MP2Info.mp2_get_term_info "qiskit.chemistry.MP2Info.mp2_get_term_info") | With a reduced active space the set of used excitations can be less than allowing all available excitations.                       |
| [`mp2_terms`](qiskit.chemistry.MP2Info.mp2_terms#qiskit.chemistry.MP2Info.mp2_terms "qiskit.chemistry.MP2Info.mp2_terms")                                 | Gets the set of MP2 terms for the molecule taking into account index adjustments due to frozen core and/or other orbital reduction |

## Attributes

<span id="undefined" />

### mp2\_delta

Get the MP2 delta energy correction for the molecule

**Returns**

The MP2 delta energy

**Return type**

float

<span id="undefined" />

### mp2\_energy

Get the MP2 energy for the molecule

**Returns**

The MP2 energy

**Return type**

float
