# LegacyBaseOperator

<span id="undefined" />

`LegacyBaseOperator(basis=None, z2_symmetries=None, name=None)`

Bases: `abc.ABC`

Operators relevant for quantum applications.

Constructor.

## Methods

|                                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`chop`](qiskit.aqua.operators.legacy.LegacyBaseOperator.chop#qiskit.aqua.operators.legacy.LegacyBaseOperator.chop "qiskit.aqua.operators.legacy.LegacyBaseOperator.chop")                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                              |
| [`construct_evaluation_circuit`](qiskit.aqua.operators.legacy.LegacyBaseOperator.construct_evaluation_circuit#qiskit.aqua.operators.legacy.LegacyBaseOperator.construct_evaluation_circuit "qiskit.aqua.operators.legacy.LegacyBaseOperator.construct_evaluation_circuit") | Build circuits to compute the expectation w\.r.t the wavefunction.                                                                                                                                                                                                                                                                                                                           |
| [`evaluate_with_result`](qiskit.aqua.operators.legacy.LegacyBaseOperator.evaluate_with_result#qiskit.aqua.operators.legacy.LegacyBaseOperator.evaluate_with_result "qiskit.aqua.operators.legacy.LegacyBaseOperator.evaluate_with_result")                                 | Consume the result from the quantum computer to build the expectation, will be only used along with the [`construct_evaluation_circuit()`](qiskit.aqua.operators.legacy.LegacyBaseOperator.construct_evaluation_circuit#qiskit.aqua.operators.legacy.LegacyBaseOperator.construct_evaluation_circuit "qiskit.aqua.operators.legacy.LegacyBaseOperator.construct_evaluation_circuit") method. |
| [`evolve`](qiskit.aqua.operators.legacy.LegacyBaseOperator.evolve#qiskit.aqua.operators.legacy.LegacyBaseOperator.evolve "qiskit.aqua.operators.legacy.LegacyBaseOperator.evolve")                                                                                         | Time evolution, exp^(-jt H).                                                                                                                                                                                                                                                                                                                                                                 |
| [`is_empty`](qiskit.aqua.operators.legacy.LegacyBaseOperator.is_empty#qiskit.aqua.operators.legacy.LegacyBaseOperator.is_empty "qiskit.aqua.operators.legacy.LegacyBaseOperator.is_empty")                                                                                 | Check Operator is empty or not                                                                                                                                                                                                                                                                                                                                                               |
| [`print_details`](qiskit.aqua.operators.legacy.LegacyBaseOperator.print_details#qiskit.aqua.operators.legacy.LegacyBaseOperator.print_details "qiskit.aqua.operators.legacy.LegacyBaseOperator.print_details")                                                             | print details                                                                                                                                                                                                                                                                                                                                                                                |
| [`to_opflow`](qiskit.aqua.operators.legacy.LegacyBaseOperator.to_opflow#qiskit.aqua.operators.legacy.LegacyBaseOperator.to_opflow "qiskit.aqua.operators.legacy.LegacyBaseOperator.to_opflow")                                                                             | Convert to new Operator format.                                                                                                                                                                                                                                                                                                                                                              |

## Attributes

<span id="undefined" />

### basis

returns basis

<span id="undefined" />

### name

returns name

<span id="undefined" />

### num\_qubits

Returns number of qubits for operator

<span id="undefined" />

### z2\_symmetries

returns z2 symmetries
