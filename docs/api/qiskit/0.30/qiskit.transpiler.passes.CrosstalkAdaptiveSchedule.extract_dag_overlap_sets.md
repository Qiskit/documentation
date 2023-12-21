# qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.extract\_dag\_overlap\_sets

`CrosstalkAdaptiveSchedule.extract_dag_overlap_sets(dag)`

Gate A, B are overlapping if A is neither a descendant nor an ancestor of B. Currenty overlaps (A,B) are considered when A is a 2q gate and B is either 2q or 1q gate.
