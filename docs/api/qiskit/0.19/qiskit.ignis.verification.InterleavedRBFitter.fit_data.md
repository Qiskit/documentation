---
title: fit_data
description: API reference for qiskit.ignis.verification.InterleavedRBFitter.fit_data
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.verification.InterleavedRBFitter.fit_data
---

# fit\_data

<span id="qiskit.ignis.verification.InterleavedRBFitter.fit_data" />

`InterleavedRBFitter.fit_data()`

Fit the interleaved RB results. Fit each of the patterns.

According to the paper: “Efficient measurement of quantum gate error by interleaved randomized benchmarking” (arXiv:1203.4550) - Equations (4) and (5).

Puts the results into a list of fit dictionaries: where each dictionary corresponds to a pattern and has fields:

> *   ‘epc\_est’ - the estimated error per the interleaved Clifford.
> *   ‘epc\_est\_error’ - the estimated error derived from the params\_err.
> *   ‘systematic\_err’ - systematic error bound of epc\_est.
> *   ‘systematic\_err\_L’ = epc\_est - systematic\_err (left error bound).
> *   ‘systematic\_err\_R’ = epc\_est + systematic\_err (right error bound).

