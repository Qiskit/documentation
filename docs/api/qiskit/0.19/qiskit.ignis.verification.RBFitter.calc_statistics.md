---
title: calc_statistics
description: API reference for qiskit.ignis.verification.RBFitter.calc_statistics
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.verification.RBFitter.calc_statistics
---

# calc\_statistics

<span id="qiskit.ignis.verification.RBFitter.calc_statistics" />

`RBFitter.calc_statistics()`

Extract averages and std dev from the raw data (self.\_raw\_data).

Assumes that self.\_calc\_data has been run. Output into internal \_ydata variable. ydata is a list of dictionaries (length number of patterns). Dictionary ydata\[i]:

> *   ydata\[i]\[‘mean’] is a numpy\_array of length n; entry j of this array contains the mean probability of success over seeds, for vector length self.\_cliff\_lengths\[i]\[j].
> *   ydata\[i]\[‘std’] is a numpy\_array of length n; entry j of this array contains the std of the probability of success over seeds, for vector length self.\_cliff\_lengths\[i]\[j].

