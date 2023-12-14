<span id="qiskit-aqua-operators-legacy-legacybaseoperator" />

# qiskit.aqua.operators.legacy.LegacyBaseOperator



`LegacyBaseOperator(basis=None, z2_symmetries=None, name=None)`

Operators relevant for quantum applications.

Constructor.



`abstract __init__(basis=None, z2_symmetries=None, name=None)`

Constructor.

## Methods

|                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.operators.legacy.LegacyBaseOperator.__init__ "qiskit.aqua.operators.legacy.LegacyBaseOperator.__init__")(\[basis, z2\_symmetries, name])                                                | Constructor.                                                                                                                                                                                                                                                                                                     |
| [`chop`](#qiskit.aqua.operators.legacy.LegacyBaseOperator.chop "qiskit.aqua.operators.legacy.LegacyBaseOperator.chop")(threshold\[, copy])                                                                        |                                                                                                                                                                                                                                                                                                                  |
| [`construct_evaluation_circuit`](#qiskit.aqua.operators.legacy.LegacyBaseOperator.construct_evaluation_circuit "qiskit.aqua.operators.legacy.LegacyBaseOperator.construct_evaluation_circuit")(wave\_function, …) | Build circuits to compute the expectation w\.r.t the wavefunction.                                                                                                                                                                                                                                               |
| [`evaluate_with_result`](#qiskit.aqua.operators.legacy.LegacyBaseOperator.evaluate_with_result "qiskit.aqua.operators.legacy.LegacyBaseOperator.evaluate_with_result")(result, …)                                 | Consume the result from the quantum computer to build the expectation, will be only used along with the [`construct_evaluation_circuit()`](#qiskit.aqua.operators.legacy.LegacyBaseOperator.construct_evaluation_circuit "qiskit.aqua.operators.legacy.LegacyBaseOperator.construct_evaluation_circuit") method. |
| [`evolve`](#qiskit.aqua.operators.legacy.LegacyBaseOperator.evolve "qiskit.aqua.operators.legacy.LegacyBaseOperator.evolve")(state\_in, evo\_time, num\_time\_slices, …)                                          | Time evolution, exp^(-jt H).                                                                                                                                                                                                                                                                                     |
| [`is_empty`](#qiskit.aqua.operators.legacy.LegacyBaseOperator.is_empty "qiskit.aqua.operators.legacy.LegacyBaseOperator.is_empty")()                                                                              | Check Operator is empty or not                                                                                                                                                                                                                                                                                   |
| [`print_details`](#qiskit.aqua.operators.legacy.LegacyBaseOperator.print_details "qiskit.aqua.operators.legacy.LegacyBaseOperator.print_details")()                                                               | print details                                                                                                                                                                                                                                                                                                    |
| [`to_opflow`](#qiskit.aqua.operators.legacy.LegacyBaseOperator.to_opflow "qiskit.aqua.operators.legacy.LegacyBaseOperator.to_opflow")()                                                                           | Convert to new Operator format.                                                                                                                                                                                                                                                                                  |

## Attributes

|                                                                                                                                                   |                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| [`basis`](#qiskit.aqua.operators.legacy.LegacyBaseOperator.basis "qiskit.aqua.operators.legacy.LegacyBaseOperator.basis")                         | returns basis                         |
| [`name`](#qiskit.aqua.operators.legacy.LegacyBaseOperator.name "qiskit.aqua.operators.legacy.LegacyBaseOperator.name")                            | returns name                          |
| [`num_qubits`](#qiskit.aqua.operators.legacy.LegacyBaseOperator.num_qubits "qiskit.aqua.operators.legacy.LegacyBaseOperator.num_qubits")          | Returns number of qubits for operator |
| [`z2_symmetries`](#qiskit.aqua.operators.legacy.LegacyBaseOperator.z2_symmetries "qiskit.aqua.operators.legacy.LegacyBaseOperator.z2_symmetries") | returns z2 symmetries                 |



`property basis`

returns basis



`abstract chop(threshold, copy=False)`



`abstract construct_evaluation_circuit(wave_function, statevector_mode, **kwargs)`

Build circuits to compute the expectation w\.r.t the wavefunction.



`abstract evaluate_with_result(result, statevector_mode, **kwargs)`

Consume the result from the quantum computer to build the expectation, will be only used along with the [`construct_evaluation_circuit()`](#qiskit.aqua.operators.legacy.LegacyBaseOperator.construct_evaluation_circuit "qiskit.aqua.operators.legacy.LegacyBaseOperator.construct_evaluation_circuit") method.



`abstract evolve(state_in, evo_time, num_time_slices, expansion_mode, expansion_order, **kwargs)`

Time evolution, exp^(-jt H).



`abstract is_empty()`

Check Operator is empty or not



`property name`

returns name



`abstract property num_qubits`

Returns number of qubits for operator



`abstract print_details()`

print details



`abstract to_opflow()`

Convert to new Operator format.



`property z2_symmetries`

returns z2 symmetries
