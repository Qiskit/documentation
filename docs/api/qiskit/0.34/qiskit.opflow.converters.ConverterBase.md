# ConverterBase[¶](#converterbase "Permalink to this headline")

<span id="undefined" />

`ConverterBase`

Bases: `abc.ABC`

Converters take an Operator and return a new Operator, generally isomorphic in some way with the first, but with certain desired properties. For example, a converter may accept `CircuitOp` and return a `SummedOp` of `PauliOps` representing the circuit unitary. Converters may not have polynomial space or time scaling in their operations. On the contrary, many converters, such as a `MatrixExpectation` or `MatrixEvolution`, which convert `PauliOps` to `MatrixOps` internally, will require time or space exponential in the number of qubits unless a clever trick is known (such as the use of sparse matrices).

## Methods Defined Here

|                                                                                                                                                             |                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`convert`](qiskit.opflow.converters.ConverterBase.convert#qiskit.opflow.converters.ConverterBase.convert "qiskit.opflow.converters.ConverterBase.convert") | Accept the Operator and return the converted Operator |
