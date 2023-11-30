<span id="qiskit-optimization-algorithms-admmstate" />

# qiskit.optimization.algorithms.ADMMState

<span id="undefined" />

`ADMMState(op, rho_initial)`

Internal computation state of the ADMM implementation.

The state keeps track of various variables are stored that are being updated during problem solving. The values are relevant to the problem being solved. The state is recreated for each optimization problem. State is returned as the third value.

**Parameters**

*   **op** (`QuadraticProgram`) – The optimization problem being solved.
*   **rho\_initial** (`float`) – Initial value of the rho parameter.

<span id="undefined" />

`__init__(op, rho_initial)`

**Parameters**

*   **op** (`QuadraticProgram`) – The optimization problem being solved.
*   **rho\_initial** (`float`) – Initial value of the rho parameter.

## Methods

|                                                                                                                                        |                               |
| -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| [`__init__`](#qiskit.optimization.algorithms.ADMMState.__init__ "qiskit.optimization.algorithms.ADMMState.__init__")(op, rho\_initial) | **type op**`QuadraticProgram` |
