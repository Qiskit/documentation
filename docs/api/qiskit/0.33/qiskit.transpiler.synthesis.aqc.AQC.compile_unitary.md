# qiskit.transpiler.synthesis.aqc.AQC.compile\_unitary

`AQC.compile_unitary(target_matrix, approximate_circuit, approximating_objective, initial_point=None)`

Approximately compiles a circuit represented as a unitary matrix by solving an optimization problem defined by `approximating_objective` and using `approximate_circuit` as a template for the approximate circuit.

**Parameters**

*   **target\_matrix** (`ndarray`) – a unitary matrix to approximate.
*   **approximate\_circuit** (`ApproximateCircuit`) – a template circuit that will be filled with the parameter values obtained in the optimization procedure.
*   **approximating\_objective** (`ApproximatingObjective`) – a definition of the optimization problem.
*   **initial\_point** (`Optional`\[`ndarray`]) – initial values of angles/parameters to start optimization from.

**Return type**

`None`
