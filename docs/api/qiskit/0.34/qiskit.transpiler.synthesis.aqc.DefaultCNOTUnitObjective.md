# DefaultCNOTUnitObjective



`DefaultCNOTUnitObjective(num_qubits, cnots)`

Bases: `qiskit.transpiler.synthesis.aqc.cnot_unit_objective.CNOTUnitObjective`

A naive implementation of the objective function based on CNOT units.

**Parameters**

*   **num\_qubits** (`int`) – number of qubits.
*   **cnots** (`ndarray`) – a CNOT structure to be used in the optimization procedure.

## Methods Defined Here

|                                                                                                                                                                                                                           |                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [`gradient`](qiskit.transpiler.synthesis.aqc.DefaultCNOTUnitObjective.gradient#qiskit.transpiler.synthesis.aqc.DefaultCNOTUnitObjective.gradient "qiskit.transpiler.synthesis.aqc.DefaultCNOTUnitObjective.gradient")     | Computes a gradient with respect to parameters given a vector of parameter values. |
| [`objective`](qiskit.transpiler.synthesis.aqc.DefaultCNOTUnitObjective.objective#qiskit.transpiler.synthesis.aqc.DefaultCNOTUnitObjective.objective "qiskit.transpiler.synthesis.aqc.DefaultCNOTUnitObjective.objective") | Computes a value of the objective function given a vector of parameter values.     |

## Attributes



### num\_cnots

Returns: A number of CNOT units to be used by the approximate circuit.



### num\_thetas

Returns: Number of parameters (angles) of rotation gates in this circuit.



### target\_matrix

Returns: a matrix being approximated

**Return type**

`ndarray`
