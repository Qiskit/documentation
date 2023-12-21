---
title: filter_candidates
description: API reference for qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.filter_candidates
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.filter_candidates
---

# filter\_candidates

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.filter_candidates" />

`CrosstalkAdaptiveSchedule.filter_candidates(candidates, layer, layer_id, triplet)`

For a gate G and layer L, L is a candidate layer for G if no gate in L has a DAG dependency with G, and if Z3 allows gates in L and G to overlap.

