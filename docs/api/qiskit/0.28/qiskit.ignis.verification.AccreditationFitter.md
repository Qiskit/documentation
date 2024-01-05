---
title: AccreditationFitter
description: API reference for qiskit.ignis.verification.AccreditationFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.verification.AccreditationFitter
---

# qiskit.ignis.verification.AccreditationFitter

<span id="qiskit.ignis.verification.AccreditationFitter" />

`AccreditationFitter`

Class for fitters for accreditation

Implementation follows the methods from Samuele Ferracin, Theodoros Kapourniotis and Animesh Datta New Journal of Physics, Volume 21, November 2019 [https://iopscience.iop.org/article/10.1088/1367-2630/ab4fd6](https://iopscience.iop.org/article/10.1088/1367-2630/ab4fd6)

### \_\_init\_\_

<span id="qiskit.ignis.verification.AccreditationFitter.__init__" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

## Attributes

### bound\_variation\_distance

<span id="qiskit.ignis.verification.AccreditationFitter.bound_variation_distance" />

`bound_variation_distance(theta)`

This function computes the bound on variation distance based and the confidence

**Parameters**

**theta** (*float*) – number between 0 and 1

### single\_protocol\_run

<span id="qiskit.ignis.verification.AccreditationFitter.single_protocol_run" />

`single_protocol_run(results, postp_list, v_zero)`

Single protocol run of accreditation protocol on simul backend

**Parameters**

*   **results** ([*Result*](qiskit.result.Result "qiskit.result.Result")) – results of the quantum job
*   **postp\_list** (*list*) – list of strings used to post-process outputs
*   **v\_zero** (*int*) – position of target

