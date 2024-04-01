---
title: PauliTwoDesign
description: API reference for qiskit.circuit.library.PauliTwoDesign
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.PauliTwoDesign
---

# PauliTwoDesign

<span id="qiskit.circuit.library.PauliTwoDesign" />

`PauliTwoDesign(num_qubits=None, reps=3, seed=None, insert_barriers=False, name='PauliTwoDesign')` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/circuit/library/n_local/pauli_two_design.py "view source code")

Bases: [`TwoLocal`](qiskit.circuit.library.TwoLocal "qiskit.circuit.library.n_local.two_local.TwoLocal")

The Pauli Two-Design ansatz.

This class implements a particular form of a 2-design circuit \[1], which is frequently studied in quantum machine learning literature, such as e.g. the investigating of Barren plateaus in variational algorithms \[2].

The circuit consists of alternating rotation and entanglement layers with an initial layer of $\sqrt{H} = RY(\pi/4)$ gates. The rotation layers contain single qubit Pauli rotations, where the axis is chosen uniformly at random to be X, Y or Z. The entanglement layers is compromised of pairwise CZ gates with a total depth of 2.

For instance, the circuit could look like this (but note that choosing a different seed yields different Pauli rotations).

```python
     ┌─────────┐┌──────────┐       ░ ┌──────────┐       ░  ┌──────────┐
q_0: ┤ RY(π/4) ├┤ RZ(θ[0]) ├─■─────░─┤ RY(θ[4]) ├─■─────░──┤ RZ(θ[8]) ├
     ├─────────┤├──────────┤ │     ░ ├──────────┤ │     ░  ├──────────┤
q_1: ┤ RY(π/4) ├┤ RZ(θ[1]) ├─■──■──░─┤ RY(θ[5]) ├─■──■──░──┤ RX(θ[9]) ├
     ├─────────┤├──────────┤    │  ░ ├──────────┤    │  ░ ┌┴──────────┤
q_2: ┤ RY(π/4) ├┤ RX(θ[2]) ├─■──■──░─┤ RY(θ[6]) ├─■──■──░─┤ RX(θ[10]) ├
     ├─────────┤├──────────┤ │     ░ ├──────────┤ │     ░ ├───────────┤
q_3: ┤ RY(π/4) ├┤ RZ(θ[3]) ├─■─────░─┤ RX(θ[7]) ├─■─────░─┤ RY(θ[11]) ├
     └─────────┘└──────────┘       ░ └──────────┘       ░ └───────────┘
```

**Examples**

```python
from qiskit.circuit.library import PauliTwoDesign
circuit = PauliTwoDesign(4, reps=2, seed=5, insert_barriers=True)
circuit.draw('mpl')
```

![../\_images/qiskit-circuit-library-PauliTwoDesign-1.png](/images/api/qiskit/0.43/qiskit-circuit-library-PauliTwoDesign-1.png)

**References**

**\[1]: Nakata et al., Unitary 2-designs from random X- and Z-diagonal unitaries.**

[arXiv:1502.07514](https://arxiv.org/pdf/1502.07514.pdf)

**\[2]: McClean et al., Barren plateaus in quantum neural network training landscapes.**

[arXiv:1803.11173](https://arxiv.org/pdf/1803.11173.pdf)

Construct a new two-local circuit.

**Parameters**

*   **num\_qubits** (*int | None*) – The number of qubits of the two-local circuit.
*   **rotation\_blocks** – The gates used in the rotation layer. Can be specified via the name of a gate (e.g. `'ry'`) or the gate type itself (e.g. [`RYGate`](qiskit.circuit.library.RYGate "qiskit.circuit.library.RYGate")). If only one gate is provided, the gate same gate is applied to each qubit. If a list of gates is provided, all gates are applied to each qubit in the provided order. See the Examples section for more detail.
*   **entanglement\_blocks** – The gates used in the entanglement layer. Can be specified in the same format as `rotation_blocks`.
*   **entanglement** – Specifies the entanglement structure. Can be a string (`'full'`, `'linear'`, `'reverse_linear'`, `'circular'` or `'sca'`), a list of integer-pairs specifying the indices of qubits entangled with one another, or a callable returning such a list provided with the index of the entanglement layer. Default to `'full'` entanglement. Note that if `entanglement_blocks = 'cx'`, then `'full'` entanglement provides the same unitary as `'reverse_linear'` but the latter option has fewer entangling gates. See the Examples section for more detail.
*   **reps** (*int*) – Specifies how often a block consisting of a rotation layer and entanglement layer is repeated.
*   **skip\_unentangled\_qubits** – If `True`, the single qubit gates are only applied to qubits that are entangled with another qubit. If `False`, the single qubit gates are applied to each qubit in the ansatz. Defaults to `False`.
*   **skip\_final\_rotation\_layer** – If `False`, a rotation layer is added at the end of the ansatz. If `True`, no rotation layer is added.
*   **parameter\_prefix** – The parameterized gates require a parameter to be defined, for which we use instances of [`Parameter`](qiskit.circuit.Parameter "qiskit.circuit.Parameter"). The name of each parameter will be this specified prefix plus its index.
*   **insert\_barriers** (*bool*) – If `True`, barriers are inserted in between each layer. If `False`, no barriers are inserted. Defaults to `False`.
*   **initial\_state** – A [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") object to prepend to the circuit.

## Attributes

<span id="qiskit.circuit.library.PauliTwoDesign.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

<span id="qiskit.circuit.library.PauliTwoDesign.calibrations" />

### calibrations

Return calibration dictionary.

The custom pulse definition of a given gate is of the form `{'gate_name': {(qubits, params): schedule}}`

<span id="qiskit.circuit.library.PauliTwoDesign.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

<span id="qiskit.circuit.library.PauliTwoDesign.data" />

### data

<span id="qiskit.circuit.library.PauliTwoDesign.entanglement" />

### entanglement

Get the entanglement strategy.

**Returns**

The entanglement strategy, see `get_entangler_map()` for more detail on how the format is interpreted.

<span id="qiskit.circuit.library.PauliTwoDesign.entanglement_blocks" />

### entanglement\_blocks

The blocks in the entanglement layers.

**Returns**

The blocks in the entanglement layers.

<span id="qiskit.circuit.library.PauliTwoDesign.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.PauliTwoDesign.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

<span id="qiskit.circuit.library.PauliTwoDesign.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.PauliTwoDesign.initial_state" />

### initial\_state

Return the initial state that is added in front of the n-local circuit.

**Returns**

The initial state.

<span id="qiskit.circuit.library.PauliTwoDesign.insert_barriers" />

### insert\_barriers

If barriers are inserted in between the layers or not.

**Returns**

`True`, if barriers are inserted in between the layers, `False` if not.

<span id="qiskit.circuit.library.PauliTwoDesign.instances" />

### instances

`= 130`

<span id="qiskit.circuit.library.PauliTwoDesign.layout" />

### layout

Return any associated layout information anout the circuit

This attribute contains an optional [`TranspileLayout`](qiskit.transpiler.TranspileLayout "qiskit.transpiler.TranspileLayout") object. This is typically set on the output from [`transpile()`](qiskit.compiler.transpile "qiskit.compiler.transpile") or [`PassManager.run()`](qiskit.transpiler.PassManager#run "qiskit.transpiler.PassManager.run") to retain information about the permutations caused on the input circuit by transpilation.

There are two types of permutations caused by the [`transpile()`](qiskit.compiler.transpile "qiskit.compiler.transpile") function, an initial layout which permutes the qubits based on the selected physical qubits on the [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target"), and a final layout which is an output permutation caused by [`SwapGate`](qiskit.circuit.library.SwapGate "qiskit.circuit.library.SwapGate")s inserted during routing.

<span id="qiskit.circuit.library.PauliTwoDesign.metadata" />

### metadata

The user provided metadata associated with the circuit.

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

<span id="qiskit.circuit.library.PauliTwoDesign.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

<span id="qiskit.circuit.library.PauliTwoDesign.num_clbits" />

### num\_clbits

Return number of classical bits.

<span id="qiskit.circuit.library.PauliTwoDesign.num_layers" />

### num\_layers

Return the number of layers in the n-local circuit.

**Returns**

The number of layers in the circuit.

<span id="qiskit.circuit.library.PauliTwoDesign.num_parameters" />

### num\_parameters

<span id="qiskit.circuit.library.PauliTwoDesign.num_parameters_settable" />

### num\_parameters\_settable

Return the number of settable parameters.

**Returns**

The number of possibly distinct parameters.

<span id="qiskit.circuit.library.PauliTwoDesign.num_qubits" />

### num\_qubits

Returns the number of qubits in this circuit.

**Returns**

The number of qubits.

<span id="qiskit.circuit.library.PauliTwoDesign.op_start_times" />

### op\_start\_times

Return a list of operation start times.

This attribute is enabled once one of scheduling analysis passes runs on the quantum circuit.

**Returns**

List of integers representing instruction start times. The index corresponds to the index of instruction in `QuantumCircuit.data`.

**Raises**

**AttributeError** – When circuit is not scheduled.

<span id="qiskit.circuit.library.PauliTwoDesign.ordered_parameters" />

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

<span id="qiskit.circuit.library.PauliTwoDesign.parameter_bounds" />

### parameter\_bounds

The parameter bounds for the unbound parameters in the circuit.

**Returns**

A list of pairs indicating the bounds, as (lower, upper). None indicates an unbounded parameter in the corresponding direction. If `None` is returned, problem is fully unbounded.

<span id="qiskit.circuit.library.PauliTwoDesign.parameters" />

### parameters

<span id="qiskit.circuit.library.PauliTwoDesign.preferred_init_points" />

### preferred\_init\_points

The initial points for the parameters. Can be stored as initial guess in optimization.

**Returns**

The initial values for the parameters, or None, if none have been set.

<span id="qiskit.circuit.library.PauliTwoDesign.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.PauliTwoDesign.qregs" />

### qregs

`list[QuantumRegister]`

A list of the quantum registers associated with the circuit.

<span id="qiskit.circuit.library.PauliTwoDesign.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

<span id="qiskit.circuit.library.PauliTwoDesign.reps" />

### reps

The number of times rotation and entanglement block are repeated.

**Returns**

The number of repetitions.

<span id="qiskit.circuit.library.PauliTwoDesign.rotation_blocks" />

### rotation\_blocks

The blocks in the rotation layers.

**Returns**

The blocks in the rotation layers.

