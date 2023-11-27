# CNOTUnitObjective[¶](#cnotunitobjective "Permalink to this headline")

<span id="undefined" />

`CNOTUnitObjective(num_qubits, cnots)`

Bases: `qiskit.transpiler.synthesis.aqc.approximate.ApproximatingObjective`, `abc.ABC`

A base class for a problem definition based on CNOT unit. This class may have different subclasses for objective and gradient computations.

**Parameters**

*   **num\_qubits** (`int`) – number of qubits.
*   **cnots** (`ndarray`) – a CNOT structure to be used in the optimization procedure.

## Attributes

<span id="undefined" />

### num\_cnots

Returns: A number of CNOT units to be used by the approximate circuit.

<span id="undefined" />

### num\_thetas

Returns: Number of parameters (angles) of rotation gates in this circuit.

<span id="undefined" />

### target\_matrix

Returns: a matrix being approximated

**Return type**

`ndarray`
