---
title: ZZFeatureMap
description: API reference for qiskit.circuit.library.ZZFeatureMap
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.ZZFeatureMap
---

# ZZFeatureMap

<span id="qiskit.circuit.library.ZZFeatureMap" />

`qiskit.circuit.library.ZZFeatureMap(feature_dimension, reps=2, entanglement='full', data_map_func=None, parameter_prefix='x', insert_barriers=False, name='ZZFeatureMap')` [GitHub](https://github.com/qiskit/qiskit/tree/main/qiskit/circuit/library/data_preparation/zz_feature_map.py "view source code")

Bases: [`PauliFeatureMap`](qiskit.circuit.library.PauliFeatureMap "qiskit.circuit.library.data_preparation.pauli_feature_map.PauliFeatureMap")

Second-order Pauli-Z evolution circuit.

For 3 qubits and 1 repetition and linear entanglement the circuit is represented by:

```python
┌───┐┌─────────────────┐
┤ H ├┤ U1(2.0*φ(x[0])) ├──■────────────────────────────■────────────────────────────────────
├───┤├─────────────────┤┌─┴─┐┌──────────────────────┐┌─┴─┐
┤ H ├┤ U1(2.0*φ(x[1])) ├┤ X ├┤ U1(2.0*φ(x[0],x[1])) ├┤ X ├──■────────────────────────────■──
├───┤├─────────────────┤└───┘└──────────────────────┘└───┘┌─┴─┐┌──────────────────────┐┌─┴─┐
┤ H ├┤ U1(2.0*φ(x[2])) ├──────────────────────────────────┤ X ├┤ U1(2.0*φ(x[1],x[2])) ├┤ X ├
└───┘└─────────────────┘                                  └───┘└──────────────────────┘└───┘
```

where $\varphi$ is a classical non-linear function, which defaults to $\varphi(x) = x$ if and $\varphi(x,y) = (\pi - x)(\pi - y)$.

**Examples**

```python
>>> from qiskit.circuit.library import ZZFeatureMap
>>> prep = ZZFeatureMap(2, reps=1)
>>> print(prep)
     ┌───┐┌──────────────┐
q_0: ┤ H ├┤ U1(2.0*x[0]) ├──■───────────────────────────────────────■──
     ├───┤├──────────────┤┌─┴─┐┌─────────────────────────────────┐┌─┴─┐
q_1: ┤ H ├┤ U1(2.0*x[1]) ├┤ X ├┤ U1(2.0*(pi - x[0])*(pi - x[1])) ├┤ X ├
     └───┘└──────────────┘└───┘└─────────────────────────────────┘└───┘
```

```python
>>> from qiskit.circuit.library import EfficientSU2
>>> classifier = ZZFeatureMap(3) + EfficientSU2(3)
>>> classifier.num_parameters
15
>>> classifier.parameters  # 'x' for the data preparation, 'θ' for the SU2 parameters
ParameterView([
    ParameterVectorElement(x[0]), ParameterVectorElement(x[1]),
    ParameterVectorElement(x[2]), ParameterVectorElement(θ[0]),
    ParameterVectorElement(θ[1]), ParameterVectorElement(θ[2]),
    ParameterVectorElement(θ[3]), ParameterVectorElement(θ[4]),
    ParameterVectorElement(θ[5]), ParameterVectorElement(θ[6]),
    ParameterVectorElement(θ[7]), ParameterVectorElement(θ[8]),
    ParameterVectorElement(θ[9]), ParameterVectorElement(θ[10]),
    ParameterVectorElement(θ[11]), ParameterVectorElement(θ[12]),
    ParameterVectorElement(θ[13]), ParameterVectorElement(θ[14]),
    ParameterVectorElement(θ[15]), ParameterVectorElement(θ[16]),
    ParameterVectorElement(θ[17]), ParameterVectorElement(θ[18]),
    ParameterVectorElement(θ[19]), ParameterVectorElement(θ[20]),
    ParameterVectorElement(θ[21]), ParameterVectorElement(θ[22]),
    ParameterVectorElement(θ[23])
])
>>> classifier.count_ops()
OrderedDict([('ZZFeatureMap', 1), ('EfficientSU2', 1)])
```

Create a new second-order Pauli-Z expansion.

**Parameters**

*   **feature\_dimension** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Number of features.
*   **reps** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – The number of repeated circuits, has a min. value of 1.
*   **entanglement** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")  *|*[*List*](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.12)")*\[*[*List*](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.12)")*\[*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*]] |* [*Callable*](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.12)")*\[\[*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*],* [*List*](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.12)")*\[*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*]]*) – Specifies the entanglement structure. Refer to [`NLocal`](qiskit.circuit.library.NLocal "qiskit.circuit.library.NLocal") for detail.
*   **data\_map\_func** ([*Callable*](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.12)")*\[\[*[*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.26)")*],* [*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")*] | None*) – A mapping function for data x.
*   **parameter\_prefix** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – The prefix used if default parameters are generated.
*   **insert\_barriers** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – If True, barriers are inserted in between the evolution instructions and hadamard layers.

**Raises**

[**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError "(in Python v3.12)") – If the feature dimension is smaller than 2.

## Attributes

<span id="qiskit.circuit.library.ZZFeatureMap.alpha" />

### alpha

The Pauli rotation factor (alpha).

**Returns**

The Pauli rotation factor.

<span id="qiskit.circuit.library.ZZFeatureMap.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

<span id="qiskit.circuit.library.ZZFeatureMap.calibrations" />

### calibrations

Return calibration dictionary.

The custom pulse definition of a given gate is of the form `{'gate_name': {(qubits, params): schedule}}`

<span id="qiskit.circuit.library.ZZFeatureMap.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

<span id="qiskit.circuit.library.ZZFeatureMap.data" />

### data

<span id="qiskit.circuit.library.ZZFeatureMap.entanglement" />

### entanglement

Get the entanglement strategy.

**Returns**

The entanglement strategy, see `get_entangler_map()` for more detail on how the format is interpreted.

<span id="qiskit.circuit.library.ZZFeatureMap.entanglement_blocks" />

### entanglement\_blocks

<span id="qiskit.circuit.library.ZZFeatureMap.feature_dimension" />

### feature\_dimension

Returns the feature dimension (which is equal to the number of qubits).

**Returns**

The feature dimension of this feature map.

<span id="qiskit.circuit.library.ZZFeatureMap.flatten" />

### flatten

Returns whether the circuit is wrapped in nested gates/instructions or flattened.

<span id="qiskit.circuit.library.ZZFeatureMap.global_phase" />

### global\_phase

Return the global phase of the current circuit scope in radians.

<span id="qiskit.circuit.library.ZZFeatureMap.initial_state" />

### initial\_state

Return the initial state that is added in front of the n-local circuit.

**Returns**

The initial state.

<span id="qiskit.circuit.library.ZZFeatureMap.insert_barriers" />

### insert\_barriers

If barriers are inserted in between the layers or not.

**Returns**

`True`, if barriers are inserted in between the layers, `False` if not.

<span id="qiskit.circuit.library.ZZFeatureMap.instances" />

### instances

`= 162`

<span id="qiskit.circuit.library.ZZFeatureMap.layout" />

### layout

Return any associated layout information about the circuit

This attribute contains an optional [`TranspileLayout`](qiskit.transpiler.TranspileLayout "qiskit.transpiler.TranspileLayout") object. This is typically set on the output from [`transpile()`](compiler#qiskit.compiler.transpile "qiskit.compiler.transpile") or [`PassManager.run()`](qiskit.transpiler.PassManager#run "qiskit.transpiler.PassManager.run") to retain information about the permutations caused on the input circuit by transpilation.

There are two types of permutations caused by the [`transpile()`](compiler#qiskit.compiler.transpile "qiskit.compiler.transpile") function, an initial layout which permutes the qubits based on the selected physical qubits on the [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target"), and a final layout which is an output permutation caused by [`SwapGate`](qiskit.circuit.library.SwapGate "qiskit.circuit.library.SwapGate")s inserted during routing.

<span id="qiskit.circuit.library.ZZFeatureMap.metadata" />

### metadata

The user provided metadata associated with the circuit.

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

<span id="qiskit.circuit.library.ZZFeatureMap.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

<span id="qiskit.circuit.library.ZZFeatureMap.num_captured_vars" />

### num\_captured\_vars

The number of runtime classical variables in the circuit marked as captured from an enclosing scope.

This is the length of the `iter_captured_vars()` iterable. If this is non-zero, [`num_input_vars`](#qiskit.circuit.library.ZZFeatureMap.num_input_vars "qiskit.circuit.library.ZZFeatureMap.num_input_vars") must be zero.

<span id="qiskit.circuit.library.ZZFeatureMap.num_clbits" />

### num\_clbits

Return number of classical bits.

<span id="qiskit.circuit.library.ZZFeatureMap.num_declared_vars" />

### num\_declared\_vars

The number of runtime classical variables in the circuit that are declared by this circuit scope, excluding inputs or captures.

This is the length of the `iter_declared_vars()` iterable.

<span id="qiskit.circuit.library.ZZFeatureMap.num_input_vars" />

### num\_input\_vars

The number of runtime classical variables in the circuit marked as circuit inputs.

This is the length of the `iter_input_vars()` iterable. If this is non-zero, [`num_captured_vars`](#qiskit.circuit.library.ZZFeatureMap.num_captured_vars "qiskit.circuit.library.ZZFeatureMap.num_captured_vars") must be zero.

<span id="qiskit.circuit.library.ZZFeatureMap.num_layers" />

### num\_layers

Return the number of layers in the n-local circuit.

**Returns**

The number of layers in the circuit.

<span id="qiskit.circuit.library.ZZFeatureMap.num_parameters" />

### num\_parameters

<span id="qiskit.circuit.library.ZZFeatureMap.num_parameters_settable" />

### num\_parameters\_settable

The number of distinct parameters.

<span id="qiskit.circuit.library.ZZFeatureMap.num_qubits" />

### num\_qubits

Returns the number of qubits in this circuit.

**Returns**

The number of qubits.

<span id="qiskit.circuit.library.ZZFeatureMap.num_vars" />

### num\_vars

The number of runtime classical variables in the circuit.

This is the length of the `iter_vars()` iterable.

<span id="qiskit.circuit.library.ZZFeatureMap.op_start_times" />

### op\_start\_times

Return a list of operation start times.

This attribute is enabled once one of scheduling analysis passes runs on the quantum circuit.

**Returns**

List of integers representing instruction start times. The index corresponds to the index of instruction in `QuantumCircuit.data`.

**Raises**

[**AttributeError**](https://docs.python.org/3/library/exceptions.html#AttributeError "(in Python v3.12)") – When circuit is not scheduled.

<span id="qiskit.circuit.library.ZZFeatureMap.ordered_parameters" />

### ordered\_parameters

The parameters used in the underlying circuit.

This includes float values and duplicates.

**Examples**

```python
>>> # prepare circuit ...
>>> print(nlocal)
     ┌───────┐┌──────────┐┌──────────┐┌──────────┐
q_0: ┤ Ry(1) ├┤ Ry(θ[1]) ├┤ Ry(θ[1]) ├┤ Ry(θ[3]) ├
     └───────┘└──────────┘└──────────┘└──────────┘
>>> nlocal.parameters
{Parameter(θ[1]), Parameter(θ[3])}
>>> nlocal.ordered_parameters
[1, Parameter(θ[1]), Parameter(θ[1]), Parameter(θ[3])]
```

**Returns**

The parameters objects used in the circuit.

<span id="qiskit.circuit.library.ZZFeatureMap.parameter_bounds" />

### parameter\_bounds

The parameter bounds for the unbound parameters in the circuit.

**Returns**

A list of pairs indicating the bounds, as (lower, upper). None indicates an unbounded parameter in the corresponding direction. If `None` is returned, problem is fully unbounded.

<span id="qiskit.circuit.library.ZZFeatureMap.parameters" />

### parameters

<span id="qiskit.circuit.library.ZZFeatureMap.paulis" />

### paulis

The Pauli strings used in the entanglement of the qubits.

**Returns**

The Pauli strings as list.

<span id="qiskit.circuit.library.ZZFeatureMap.preferred_init_points" />

### preferred\_init\_points

The initial points for the parameters. Can be stored as initial guess in optimization.

**Returns**

The initial values for the parameters, or None, if none have been set.

<span id="qiskit.circuit.library.ZZFeatureMap.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.ZZFeatureMap.qregs" />

### qregs

`list[QuantumRegister]`

A list of the quantum registers associated with the circuit.

<span id="qiskit.circuit.library.ZZFeatureMap.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

<span id="qiskit.circuit.library.ZZFeatureMap.reps" />

### reps

The number of times rotation and entanglement block are repeated.

**Returns**

The number of repetitions.

<span id="qiskit.circuit.library.ZZFeatureMap.rotation_blocks" />

### rotation\_blocks

The blocks in the rotation layers.

**Returns**

The blocks in the rotation layers.

