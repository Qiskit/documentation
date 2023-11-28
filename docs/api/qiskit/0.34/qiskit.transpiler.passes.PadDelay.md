# PadDelay

<span id="undefined" />

`PadDelay(fill_very_end=True)`

Bases: `qiskit.transpiler.passes.scheduling.padding.base_padding.BasePadding`

Padding idle time with Delay instructions.

Consecutive delays will be merged in the output of this pass.

The ASAP-scheduled circuit output may become

```python
     ┌────────────────┐
q_0: ┤ Delay(160[dt]) ├──■──
     └─────┬───┬──────┘┌─┴─┐
q_1: ──────┤ X ├───────┤ X ├
           └───┘       └───┘
```

Note that the additional idle time of 60dt on the `q_0` wire coming from the duration difference between `Delay` of 100dt (`q_0`) and `XGate` of 160 dt (`q_1`) is absorbed in the delay instruction on the `q_0` wire, i.e. in total 160 dt.

See `BasePadding` pass for details.

Create new padding delay pass.

**Parameters**

**fill\_very\_end** (`bool`) – Set `True` to fill the end of circuit with delay.

## Methods

|                                                                                                                                  |                                |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| [`name`](qiskit.transpiler.passes.PadDelay.name#qiskit.transpiler.passes.PadDelay.name "qiskit.transpiler.passes.PadDelay.name") | Return the name of the pass.   |
| [`run`](qiskit.transpiler.passes.PadDelay.run#qiskit.transpiler.passes.PadDelay.run "qiskit.transpiler.passes.PadDelay.run")     | Run the padding pass on `dag`. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
