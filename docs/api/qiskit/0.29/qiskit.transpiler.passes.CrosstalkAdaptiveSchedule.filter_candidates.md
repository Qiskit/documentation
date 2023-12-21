# qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.filter\_candidates

`CrosstalkAdaptiveSchedule.filter_candidates(candidates, layer, layer_id, triplet)`

For a gate G and layer L, L is a candidate layer for G if no gate in L has a DAG dependency with G, and if Z3 allows gates in L and G to overlap.
