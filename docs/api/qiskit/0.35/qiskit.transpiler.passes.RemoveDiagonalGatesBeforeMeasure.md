# RemoveDiagonalGatesBeforeMeasure[¶](#removediagonalgatesbeforemeasure "Permalink to this headline")

<span id="undefined" />

`RemoveDiagonalGatesBeforeMeasure(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.TransformationPass`

Remove diagonal gates (including diagonal 2Q gates) before a measurement.

Transpiler pass to remove diagonal gates (like RZ, T, Z, etc) before a measurement. Including diagonal 2Q gates.

## Methods

|                                                                                                                                                                                                          |                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`name`](qiskit.transpiler.passes.RemoveDiagonalGatesBeforeMeasure.name#qiskit.transpiler.passes.RemoveDiagonalGatesBeforeMeasure.name "qiskit.transpiler.passes.RemoveDiagonalGatesBeforeMeasure.name") | Return the name of the pass.                          |
| [`run`](qiskit.transpiler.passes.RemoveDiagonalGatesBeforeMeasure.run#qiskit.transpiler.passes.RemoveDiagonalGatesBeforeMeasure.run "qiskit.transpiler.passes.RemoveDiagonalGatesBeforeMeasure.run")     | Run the RemoveDiagonalGatesBeforeMeasure pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
