---
title: PauliEvolutionGate
description: API reference for qiskit.circuit.library.PauliEvolutionGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.PauliEvolutionGate
---

# PauliEvolutionGate

<span id="qiskit.circuit.library.PauliEvolutionGate" />

`PauliEvolutionGate(operator, time=1.0, label=None, synthesis=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.19/qiskit/circuit/library/pauli_evolution.py "view source code")

Bases: `qiskit.circuit.gate.Gate`

Time-evolution of an operator consisting of Paulis.

For an operator $H$ consisting of Pauli terms and (real) evolution time $t$ this gate implements

$$
U(t) = e^{-itH}.
$$

This gate serves as a high-level definition of the evolution and can be synthesized into a circuit using different algorithms.

The evolution gates are related to the Pauli rotation gates by a factor of 2. For example the time evolution of the Pauli $X$ operator is connected to the Pauli $X$ rotation $R_X$ by

$$
U(t) = e^{-itX} = R_X(2t).
$$

**References:**

\[1] G. Li et al. Paulihedral: A Generalized Block-Wise Compiler Optimization Framework For Quantum Simulation Kernels (2021). \[[arXiv:2109.03371](https://arxiv.org/abs/2109.03371)]

**Parameters**

*   **operator** (*Pauli | PauliOp | SparsePauliOp | PauliSumOp | list*) – The operator to evolve. Can also be provided as list of non-commuting operators where the elements are sums of commuting operators. For example: `[XY + YX, ZZ + ZI + IZ, YY]`.
*   **time** (`Union`\[`int`, `float`, `ParameterExpression`]) – The evolution time.
*   **label** (`Optional`\[`str`]) – A label for the gate to display in visualizations.
*   **synthesis** (`Optional`\[`EvolutionSynthesis`]) – A synthesis strategy. If None, the default synthesis is the Lie-Trotter product formula with a single repetition.

## Methods Defined Here

### inverse

<span id="qiskit.circuit.library.PauliEvolutionGate.inverse" />

`PauliEvolutionGate.inverse()`

Invert this instruction.

If the instruction is composite (i.e. has a definition), then its definition will be recursively inverted.

Special instructions inheriting from Instruction can implement their own inverse (e.g. T and Tdg, Barrier, etc.)

**Returns**

a fresh instruction for the inverse

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**CircuitError** – if the instruction is not composite and an inverse has not been implemented for it.

### validate\_parameter

<span id="qiskit.circuit.library.PauliEvolutionGate.validate_parameter" />

`PauliEvolutionGate.validate_parameter(parameter)`

Gate parameters should be int, float, or ParameterExpression

**Return type**

`Union`\[`float`, `ParameterExpression`]

## Attributes

<span id="qiskit.circuit.library.PauliEvolutionGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[`Clbit`]

<span id="qiskit.circuit.library.PauliEvolutionGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.PauliEvolutionGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.PauliEvolutionGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.PauliEvolutionGate.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.circuit.library.PauliEvolutionGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.PauliEvolutionGate.time" />

### time

Return the evolution time as stored in the gate parameters.

**Return type**

`Union`\[`float`, `ParameterExpression`]

**Returns**

The evolution time.

<span id="qiskit.circuit.library.PauliEvolutionGate.unit" />

### unit

Get the time unit of duration.

