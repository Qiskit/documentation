# CNOTDihedralRBFitter[¶](#cnotdihedralrbfitter "Permalink to this headline")

<span id="undefined" />

`CNOTDihedralRBFitter(cnotdihedral_Z_result, cnotdihedral_X_result, elmnts_lengths, rb_pattern=None)`

Bases: `qiskit.ignis.verification.randomized_benchmarking.fitters.RBFitterBase`

Class for fitters for non-Clifford CNOT-Dihedral RB.

Derived from RBFitterBase class. Contains two RBFitter objects.

**Parameters**

*   **cnotdihedral\_Z\_result** (*qiskit.Result*) – list of results of the RB sequence that measures the ground state.
*   **cnotdihedral\_X\_result** (*qiskit.Result*) – list of results of the RB sequence that measures the $|+...+>$ state.
*   **elmnts\_lengths** (*list*) – the group elements lengths, 2D list i x j where i is the number of patterns, j is the number of elements lengths.
*   **rb\_pattern** (*list*) – the pattern for the RB sequences.

## Methods

|                                                                                                                                                                                                                         |                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [`add_data`](qiskit.ignis.verification.CNOTDihedralRBFitter.add_data#qiskit.ignis.verification.CNOTDihedralRBFitter.add_data "qiskit.ignis.verification.CNOTDihedralRBFitter.add_data")                                 | Add a new result.                                                                 |
| [`calc_data`](qiskit.ignis.verification.CNOTDihedralRBFitter.calc_data#qiskit.ignis.verification.CNOTDihedralRBFitter.calc_data "qiskit.ignis.verification.CNOTDihedralRBFitter.calc_data")                             | Retrieve probabilities of success from execution results.                         |
| [`calc_statistics`](qiskit.ignis.verification.CNOTDihedralRBFitter.calc_statistics#qiskit.ignis.verification.CNOTDihedralRBFitter.calc_statistics "qiskit.ignis.verification.CNOTDihedralRBFitter.calc_statistics")     | Extract averages and std dev.                                                     |
| [`fit_data`](qiskit.ignis.verification.CNOTDihedralRBFitter.fit_data#qiskit.ignis.verification.CNOTDihedralRBFitter.fit_data "qiskit.ignis.verification.CNOTDihedralRBFitter.fit_data")                                 | Fit the non-Clifford cnot-dihedral RB results.                                    |
| [`fit_data_pattern`](qiskit.ignis.verification.CNOTDihedralRBFitter.fit_data_pattern#qiskit.ignis.verification.CNOTDihedralRBFitter.fit_data_pattern "qiskit.ignis.verification.CNOTDihedralRBFitter.fit_data_pattern") | Fit the RB results of a particular pattern to an exponential curve.               |
| [`plot_rb_data`](qiskit.ignis.verification.CNOTDihedralRBFitter.plot_rb_data#qiskit.ignis.verification.CNOTDihedralRBFitter.plot_rb_data "qiskit.ignis.verification.CNOTDihedralRBFitter.plot_rb_data")                 | Plot non-Clifford cnot-dihedral randomized benchmarking data of a single pattern. |

## Attributes

<span id="undefined" />

### cliff\_lengths

Return group elements lengths.

<span id="undefined" />

### fit

Return fit as a 2 element list.

<span id="undefined" />

### fit\_cnotdihedral

Return cnotdihedral fit parameters.

<span id="undefined" />

### raw\_data

Return raw\_data as 2 element list.

<span id="undefined" />

### rb\_fit\_fun

Return the fit function rb\_fit\_fun.

<span id="undefined" />

### rbfit\_X

Return the cnotdihedral X fitter.

<span id="undefined" />

### rbfit\_Z

Return the cnotdihedral Z fitter.

<span id="undefined" />

### results

Return all the results as a 2 element list.

<span id="undefined" />

### seeds

Return the number of loaded seeds as a 2 element list.

<span id="undefined" />

### ydata

Return ydata (means and std devs) as a 2 element list.
