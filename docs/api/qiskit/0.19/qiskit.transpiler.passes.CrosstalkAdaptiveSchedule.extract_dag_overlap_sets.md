---
title: extract_dag_overlap_sets
description: API reference for qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.extract_dag_overlap_sets
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.extract_dag_overlap_sets
---

# extract\_dag\_overlap\_sets

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.extract_dag_overlap_sets" />

`CrosstalkAdaptiveSchedule.extract_dag_overlap_sets(dag)`

Gate A, B are overlapping if A is neither a descendant nor an ancestor of B. Currenty overlaps (A,B) are considered when A is a 2q gate and B is either 2q or 1q gate.

