---
title: IQP
description: API reference for qiskit.circuit.library.IQP
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.IQP
---

# IQP

<span id="qiskit.circuit.library.IQP" />

`qiskit.circuit.library.IQP(interactions)` [GitHub](https://github.com/qiskit/qiskit/tree/main/qiskit/circuit/library/iqp.py "view source code")

Bases: [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")

Instantaneous quantum polynomial (IQP) circuit.

The circuit consists of a column of Hadamard gates, a column of powers of T gates, a sequence of powers of CS gates (up to $\frac{n^2-n}{2}$ of them), and a final column of Hadamard gates, as introduced in \[1].

The circuit is parameterized by an n x n interactions matrix. The powers of each T gate are given by the diagonal elements of the interactions matrix. The powers of the CS gates are given by the upper triangle of the interactions matrix.

**Reference Circuit:**

![../\_images/qiskit-circuit-library-IQP-1.png](/images/api/qiskit/dev/qiskit-circuit-library-IQP-1.png)

**Expanded Circuit:**

> ![../\_images/qiskit-circuit-library-IQP-2.png](/images/api/qiskit/dev/qiskit-circuit-library-IQP-2.png)

**References:**

\[1] M. J. Bremner et al. Average-case complexity versus approximate simulation of commuting quantum computations, Phys. Rev. Lett. 117, 080501 (2016). [arXiv:1504.07999](https://arxiv.org/abs/1504.07999)

Create IQP circuit.

**Parameters**

**interactions** ([*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)") *| np.ndarray*) – input n-by-n symmetric matrix.

**Raises**

[**CircuitError**](circuit#qiskit.circuit.CircuitError "qiskit.circuit.CircuitError") – if the inputs is not as symmetric matrix.

## Attributes

<span id="qiskit.circuit.library.IQP.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

<span id="qiskit.circuit.library.IQP.calibrations" />

### calibrations

Return calibration dictionary.

The custom pulse definition of a given gate is of the form `{'gate_name': {(qubits, params): schedule}}`

<span id="qiskit.circuit.library.IQP.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

<span id="qiskit.circuit.library.IQP.data" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the [`CircuitInstruction`](qiskit.circuit.CircuitInstruction "qiskit.circuit.CircuitInstruction")s for each instruction.

**Return type**

QuantumCircuitData

<span id="qiskit.circuit.library.IQP.global_phase" />

### global\_phase

Return the global phase of the current circuit scope in radians.

<span id="qiskit.circuit.library.IQP.instances" />

### instances

`= 177`

<span id="qiskit.circuit.library.IQP.layout" />

### layout

Return any associated layout information about the circuit

This attribute contains an optional [`TranspileLayout`](qiskit.transpiler.TranspileLayout "qiskit.transpiler.TranspileLayout") object. This is typically set on the output from [`transpile()`](compiler#qiskit.compiler.transpile "qiskit.compiler.transpile") or [`PassManager.run()`](qiskit.transpiler.PassManager#run "qiskit.transpiler.PassManager.run") to retain information about the permutations caused on the input circuit by transpilation.

There are two types of permutations caused by the [`transpile()`](compiler#qiskit.compiler.transpile "qiskit.compiler.transpile") function, an initial layout which permutes the qubits based on the selected physical qubits on the [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target"), and a final layout which is an output permutation caused by [`SwapGate`](qiskit.circuit.library.SwapGate "qiskit.circuit.library.SwapGate")s inserted during routing.

<span id="qiskit.circuit.library.IQP.metadata" />

### metadata

The user provided metadata associated with the circuit.

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

<span id="qiskit.circuit.library.IQP.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

<span id="qiskit.circuit.library.IQP.num_captured_vars" />

### num\_captured\_vars

The number of runtime classical variables in the circuit marked as captured from an enclosing scope.

This is the length of the `iter_captured_vars()` iterable. If this is non-zero, [`num_input_vars`](#qiskit.circuit.library.IQP.num_input_vars "qiskit.circuit.library.IQP.num_input_vars") must be zero.

<span id="qiskit.circuit.library.IQP.num_clbits" />

### num\_clbits

Return number of classical bits.

<span id="qiskit.circuit.library.IQP.num_declared_vars" />

### num\_declared\_vars

The number of runtime classical variables in the circuit that are declared by this circuit scope, excluding inputs or captures.

This is the length of the `iter_declared_vars()` iterable.

<span id="qiskit.circuit.library.IQP.num_input_vars" />

### num\_input\_vars

The number of runtime classical variables in the circuit marked as circuit inputs.

This is the length of the `iter_input_vars()` iterable. If this is non-zero, [`num_captured_vars`](#qiskit.circuit.library.IQP.num_captured_vars "qiskit.circuit.library.IQP.num_captured_vars") must be zero.

<span id="qiskit.circuit.library.IQP.num_parameters" />

### num\_parameters

The number of parameter objects in the circuit.

<span id="qiskit.circuit.library.IQP.num_qubits" />

### num\_qubits

Return number of qubits.

<span id="qiskit.circuit.library.IQP.num_vars" />

### num\_vars

The number of runtime classical variables in the circuit.

This is the length of the `iter_vars()` iterable.

<span id="qiskit.circuit.library.IQP.op_start_times" />

### op\_start\_times

Return a list of operation start times.

This attribute is enabled once one of scheduling analysis passes runs on the quantum circuit.

**Returns**

List of integers representing instruction start times. The index corresponds to the index of instruction in `QuantumCircuit.data`.

**Raises**

[**AttributeError**](https://docs.python.org/3/library/exceptions.html#AttributeError "(in Python v3.12)") – When circuit is not scheduled.

<span id="qiskit.circuit.library.IQP.parameters" />

### parameters

The parameters defined in the circuit.

This attribute returns the [`Parameter`](qiskit.circuit.Parameter "qiskit.circuit.Parameter") objects in the circuit sorted alphabetically. Note that parameters instantiated with a [`ParameterVector`](qiskit.circuit.ParameterVector "qiskit.circuit.ParameterVector") are still sorted numerically.

**Examples**

The snippet below shows that insertion order of parameters does not matter.

```python
>>> from qiskit.circuit import QuantumCircuit, Parameter
>>> a, b, elephant = Parameter("a"), Parameter("b"), Parameter("elephant")
>>> circuit = QuantumCircuit(1)
>>> circuit.rx(b, 0)
>>> circuit.rz(elephant, 0)
>>> circuit.ry(a, 0)
>>> circuit.parameters  # sorted alphabetically!
ParameterView([Parameter(a), Parameter(b), Parameter(elephant)])
```

Bear in mind that alphabetical sorting might be unintuitive when it comes to numbers. The literal “10” comes before “2” in strict alphabetical sorting.

```python
>>> from qiskit.circuit import QuantumCircuit, Parameter
>>> angles = [Parameter("angle_1"), Parameter("angle_2"), Parameter("angle_10")]
>>> circuit = QuantumCircuit(1)
>>> circuit.u(*angles, 0)
>>> circuit.draw()
   ┌─────────────────────────────┐
q: ┤ U(angle_1,angle_2,angle_10) ├
   └─────────────────────────────┘
>>> circuit.parameters
ParameterView([Parameter(angle_1), Parameter(angle_10), Parameter(angle_2)])
```

To respect numerical sorting, a [`ParameterVector`](qiskit.circuit.ParameterVector "qiskit.circuit.ParameterVector") can be used.

```python
>>> from qiskit.circuit import QuantumCircuit, Parameter, ParameterVector
>>> x = ParameterVector("x", 12)
>>> circuit = QuantumCircuit(1)
>>> for x_i in x:
...     circuit.rx(x_i, 0)
>>> circuit.parameters
ParameterView([
    ParameterVectorElement(x[0]), ParameterVectorElement(x[1]),
    ParameterVectorElement(x[2]), ParameterVectorElement(x[3]),
    ..., ParameterVectorElement(x[11])
])
```

**Returns**

The sorted [`Parameter`](qiskit.circuit.Parameter "qiskit.circuit.Parameter") objects in the circuit.

<span id="qiskit.circuit.library.IQP.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.IQP.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

