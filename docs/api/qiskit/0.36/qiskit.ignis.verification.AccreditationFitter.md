---
title: AccreditationFitter
description: API reference for qiskit.ignis.verification.AccreditationFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.verification.AccreditationFitter
---

# AccreditationFitter

<span id="qiskit.ignis.verification.AccreditationFitter" />

`AccreditationFitter` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.7/qiskit/ignis/verification/accreditation/fitters.py "view source code")

Bases: `object`

Class for fitters for accreditation

Implementation follows the methods from \[1] FullAccreditation and \[2] MeanAccreditation.

Data can be input either as qiskit result objects, or as lists of bitstrings (the latter is useful for batch jobs).

**References**

1.  S. Ferracin, T. Kapourniotis, A. Datta. *Accrediting outputs of noisy intermediate-scale quantum computing devices*, New Journal of Physics, Volume 21, 113038. (2019). [NJP 113038](https://iopscience.iop.org/article/10.1088/1367-2630/ab4fd6)
2.  S. Ferracin, S. Merkel, D. McKay, A. Datta. *Experimental accreditation of outputs of noisy quantum computers*, arxiv:2103.06603 (2021). [arXiv:quant-ph/2103.06603](https://arxiv.org/abs/2103.06603)

## Methods

### AppendResults

<span id="qiskit.ignis.verification.AccreditationFitter.AppendResults" />

`AccreditationFitter.AppendResults(results, postp_list, v_zero)`

Single run of accreditation protocol, data input as qiskit result object assumed to be single shot

**Parameters**

*   **results** ([*Result*](qiskit.result.Result "qiskit.result.Result")) – results of the quantum job
*   **postp\_list** (*list*) – list of strings used to post-process outputs
*   **v\_zero** (*int*) – position of target

**Raises**

**QiskitError** – If the data is not single shot

### AppendStrings

<span id="qiskit.ignis.verification.AccreditationFitter.AppendStrings" />

`AccreditationFitter.AppendStrings(strings, postp_list, v_zero)`

Single run of accreditation protocol, data input as a list of output strings

**Parameters**

*   **strings** (*list*) – stringlist of outputs
*   **postp\_list** (*list*) – list of strings used to post-process outputs
*   **v\_zero** (*int*) – position of target

### FullAccreditation

<span id="qiskit.ignis.verification.AccreditationFitter.FullAccreditation" />

`AccreditationFitter.FullAccreditation(confidence)`

This function computes the bound on variation distance based and the confidence interval desired. This protocol is from \[1] and fully treats non-Markovian errors

**Parameters**

**confidence** (*float*) – number between 0 and 1

**Returns**

dict of postselected target counts float: 1-norm bound from noiseless samples float: confidence

**Return type**

dict

**Raises**

**QiskitError** – If no runs are accepted or confidence is outside of 0,1

### MeanAccreditation

<span id="qiskit.ignis.verification.AccreditationFitter.MeanAccreditation" />

`AccreditationFitter.MeanAccreditation(confidence)`

This function computes the bound on variation distance based and the confidence interval desired. This protocol is from \[2] and assumes Markovianity but gives an improved bound

**Parameters**

**confidence** (*float*) – number between 0 and 1

**Returns**

dict of corrected target counts float: 1-norm bound from noiseless samples float: confidence

**Return type**

dict

### Reset

<span id="qiskit.ignis.verification.AccreditationFitter.Reset" />

`AccreditationFitter.Reset()`

Reset the accreditation class object

### bound\_variation\_distance

<span id="qiskit.ignis.verification.AccreditationFitter.bound_variation_distance" />

`AccreditationFitter.bound_variation_distance(theta)`

DEPRECATED-This function computes the bound on variation distance based and the confidence :param theta: number between 0 and 1 :type theta: float

**Raises**

**QiskitError** – If there is not an accepted run

### single\_protocol\_run

<span id="qiskit.ignis.verification.AccreditationFitter.single_protocol_run" />

`AccreditationFitter.single_protocol_run(results, postp_list, v_zero)`

DEPRECATED-Single protocol run of accreditation protocol :param results: results of the quantum job :type results: Result :param postp\_list: list of strings used to post-process outputs :type postp\_list: list :param v\_zero: position of target :type v\_zero: int

**Raises**

**QiskitError** – If the number of circuits is inconsistent or if there are not at least 3 traps or if the data is not single shot

