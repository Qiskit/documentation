# SetIOLatency

<span id="undefined" />

`SetIOLatency(clbit_write_latency=0, conditional_latency=0)`

Bases: `qiskit.transpiler.basepasses.AnalysisPass`

Set IOLatency information to the input circuit.

The `clbit_write_latency` and `conditional_latency` are added to the property set of pass manager. These information can be shared among the passes that perform scheduling on instructions acting on classical registers.

Once these latencies are added to the property set, this information is also copied to the output circuit object as protected attributes, so that it can be utilized outside the transilation, for example, the timeline visualization can use latency to accurately show time occupation by instructions on the classical registers.

Create pass with latency information.

**Parameters**

*   **clbit\_write\_latency** (`int`) – A control flow constraints. Because standard superconducting quantum processor implement dispersive QND readout, the actual data transfer to the clbit happens after the round-trip stimulus signal is buffered and discriminated into quantum state. The interval `[t0, t0 + clbit_write_latency]` is regarded as idle time for clbits associated with the measure instruction. This defaults to 0 dt which is identical to Qiskit Pulse scheduler.
*   **conditional\_latency** (`int`) – A control flow constraints. This value represents a latency of reading a classical register for the conditional operation. The gate operation occurs after this latency. This appears as a delay in front of the DAGOpNode of the gate. This defaults to 0 dt.

## Methods

|                                                                                                                                              |                              |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| [`name`](qiskit.transpiler.passes.SetIOLatency.name#qiskit.transpiler.passes.SetIOLatency.name "qiskit.transpiler.passes.SetIOLatency.name") | Return the name of the pass. |
| [`run`](qiskit.transpiler.passes.SetIOLatency.run#qiskit.transpiler.passes.SetIOLatency.run "qiskit.transpiler.passes.SetIOLatency.run")     | Add IO latency information.  |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
