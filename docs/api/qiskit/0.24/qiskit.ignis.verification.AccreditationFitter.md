<span id="qiskit-ignis-verification-accreditationfitter" />

# qiskit.ignis.verification.AccreditationFitter

<span id="undefined" />

`AccreditationFitter`

Class for fitters for accreditation

Implementation follows the methods from Samuele Ferracin, Theodoros Kapourniotis and Animesh Datta New Journal of Physics, Volume 21, November 2019 [https://iopscience.iop.org/article/10.1088/1367-2630/ab4fd6](https://iopscience.iop.org/article/10.1088/1367-2630/ab4fd6)

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                                                                |                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.ignis.verification.AccreditationFitter.__init__ "qiskit.ignis.verification.AccreditationFitter.__init__")()                                                               | Initialize self.                                                                |
| [`bound_variation_distance`](#qiskit.ignis.verification.AccreditationFitter.bound_variation_distance "qiskit.ignis.verification.AccreditationFitter.bound_variation_distance")(theta)          | This function computes the bound on variation distance based and the confidence |
| [`single_protocol_run`](#qiskit.ignis.verification.AccreditationFitter.single_protocol_run "qiskit.ignis.verification.AccreditationFitter.single_protocol_run")(results, postp\_list, v\_zero) | Single protocol run of accreditation protocol on simul backend                  |

## Attributes

|              |   |
| ------------ | - |
| `N_acc`      |   |
| `bound`      |   |
| `confidence` |   |
| `flag`       |   |
| `g_num`      |   |
| `num_runs`   |   |
| `num_traps`  |   |
| `outputs`    |   |

<span id="undefined" />

`bound_variation_distance(theta)`

This function computes the bound on variation distance based and the confidence

**Parameters**

**theta** (*float*) – number between 0 and 1

<span id="undefined" />

`single_protocol_run(results, postp_list, v_zero)`

Single protocol run of accreditation protocol on simul backend

**Parameters**

*   **results** ([*Result*](qiskit.result.Result#qiskit.result.Result "qiskit.result.Result")) – results of the quantum job
*   **postp\_list** (*list*) – list of strings used to post-process outputs
*   **v\_zero** (*int*) – position of target
