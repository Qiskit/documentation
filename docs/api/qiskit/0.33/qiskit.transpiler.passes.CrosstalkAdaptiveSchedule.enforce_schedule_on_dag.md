# qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.enforce\_schedule\_on\_dag

`CrosstalkAdaptiveSchedule.enforce_schedule_on_dag(input_gate_times)`

Z3 outputs start times for each gate. Some gates need to be serialized to implement the Z3 schedule. This function inserts barriers to implement those serializations
