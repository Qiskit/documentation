# AQC

<span id="undefined" />

`AQC(optimizer=None, seed=None)`

Bases: `object`

A generic implementation of Approximate Quantum Compiler. This implementation is agnostic of the underlying implementation of the approximate circuit, objective, and optimizer. Users may pass corresponding implementations of the abstract classes:

*   Optimizer is an instance of [`Optimizer`](qiskit.algorithms.optimizers.Optimizer#qiskit.algorithms.optimizers.Optimizer "qiskit.algorithms.optimizers.Optimizer") and used to run the optimization process. A choice of optimizer may affect overall convergence, required time for the optimization process and achieved objective value.
*   Approximate circuit represents a template which parameters we want to optimize. Currently, there’s only one implementation based on 4-rotations CNOT unit blocks: [`CNOTUnitCircuit`](qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit#qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit "qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit"). See the paper for more details.
*   Approximate objective is tightly coupled with the approximate circuit implementation and provides two methods for computing objective function and gradient with respect to approximate circuit parameters. This objective is passed to the optimizer. Currently, there’s only one implementation based on 4-rotations CNOT unit blocks: [`DefaultCNOTUnitObjective`](qiskit.transpiler.synthesis.aqc.DefaultCNOTUnitObjective#qiskit.transpiler.synthesis.aqc.DefaultCNOTUnitObjective "qiskit.transpiler.synthesis.aqc.DefaultCNOTUnitObjective"). This is a naive implementation of the objective function and gradient and may suffer from performance issues.

**Parameters**

*   **optimizer** (`Optional`\[`Optimizer`]) – an optimizer to be used in the optimization procedure of the search for the best approximate circuit. By default [`L_BFGS_B`](qiskit.algorithms.optimizers.L_BFGS_B#qiskit.algorithms.optimizers.L_BFGS_B "qiskit.algorithms.optimizers.L_BFGS_B") is used with max iterations is set to 1000.
*   **seed** (`Optional`\[`int`]) – a seed value to be user by a random number generator.

## Methods Defined Here

|                                                                                                                                                                                    |                                                                                                                                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`compile_unitary`](qiskit.transpiler.synthesis.aqc.AQC.compile_unitary#qiskit.transpiler.synthesis.aqc.AQC.compile_unitary "qiskit.transpiler.synthesis.aqc.AQC.compile_unitary") | Approximately compiles a circuit represented as a unitary matrix by solving an optimization problem defined by `approximating_objective` and using `approximate_circuit` as a template for the approximate circuit. |
