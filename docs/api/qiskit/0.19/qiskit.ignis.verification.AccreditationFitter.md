---
title: AccreditationFitter
description: API reference for qiskit.ignis.verification.AccreditationFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.verification.AccreditationFitter
---

# AccreditationFitter

<span id="qiskit.ignis.verification.AccreditationFitter" />

`AccreditationFitter` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.3/qiskit/ignis/verification/accreditation/fitters.py "view source code")

Class for fitters for accreditation

Implementation follows the methods from Samuele Ferracin, Theodoros Kapourniotis and Animesh Datta New Journal of Physics, Volume 21, November 2019 [https://iopscience.iop.org/article/10.1088/1367-2630/ab4fd6](https://iopscience.iop.org/article/10.1088/1367-2630/ab4fd6)

## Attributes

### N\_acc

<span id="qiskit.ignis.verification.AccreditationFitter.N_acc" />

`= 0`

### bound

<span id="qiskit.ignis.verification.AccreditationFitter.bound" />

`= 1`

### confidence

<span id="qiskit.ignis.verification.AccreditationFitter.confidence" />

`= 1`

### flag

<span id="qiskit.ignis.verification.AccreditationFitter.flag" />

`= 'accepted'`

### g\_num

<span id="qiskit.ignis.verification.AccreditationFitter.g_num" />

`= 1`

### num\_runs

<span id="qiskit.ignis.verification.AccreditationFitter.num_runs" />

`= 0`

### num\_traps

<span id="qiskit.ignis.verification.AccreditationFitter.num_traps" />

`= 0`

### outputs

<span id="qiskit.ignis.verification.AccreditationFitter.outputs" />

`= []`

## Methods

### bound\_variation\_distance

<span id="qiskit.ignis.verification.AccreditationFitter.bound_variation_distance" />

`AccreditationFitter.bound_variation_distance(theta)`

This function computes the bound on variation distance based and the confidence

**Parameters**

**theta** (*float*) – number between 0 and 1

### single\_protocol\_run

<span id="qiskit.ignis.verification.AccreditationFitter.single_protocol_run" />

`AccreditationFitter.single_protocol_run(results, postp_list, v_zero)`

Single protocol run of accreditation protocol on simul backend

**Parameters**

*   **results** ([*Result*](qiskit.result.Result "qiskit.result.Result")) – results of the quantum job
*   **postp\_list** (*list*) – list of strings used to post-process outputs
*   **v\_zero** (*int*) – position of target

