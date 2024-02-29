---
title: PauliEvolutionGate
description: API reference for qiskit.circuit.library.PauliEvolutionGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.PauliEvolutionGate
---

# PauliEvolutionGate

<span id="qiskit.circuit.library.PauliEvolutionGate" />

`qiskit.circuit.library.PauliEvolutionGate(operator, time=1.0, label=None, synthesis=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.45/qiskit/circuit/library/pauli_evolution.py "view source code")

Bases: [`Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

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

**Examples:**

```python
from qiskit.circuit import QuantumCircuit
from qiskit.circuit.library import PauliEvolutionGate
from qiskit.opflow import I, Z, X

# build the evolution gate
operator = (Z ^ Z) - 0.1 * (X ^ I)
evo = PauliEvolutionGate(operator, time=0.2)

# plug it into a circuit
circuit = QuantumCircuit(2)
circuit.append(evo, range(2))
print(circuit.draw())
```

The above will print (note that the `-0.1` coefficient is not printed!):

```python
     ┌──────────────────────────┐
q_0: ┤0                         ├
     │  exp(-it (ZZ + XI))(0.2) │
q_1: ┤1                         ├
     └──────────────────────────┘
```

**References:**

\[1] G. Li et al. Paulihedral: A Generalized Block-Wise Compiler Optimization Framework For Quantum Simulation Kernels (2021). \[[arXiv:2109.03371](https://arxiv.org/abs/2109.03371)]

**Parameters**

*   **operator** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")  *|*[*PauliOp*](qiskit.opflow.primitive_ops.PauliOp "qiskit.opflow.primitive_ops.PauliOp")  *|*[*SparsePauliOp*](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")  *|*[*PauliSumOp*](qiskit.opflow.primitive_ops.PauliSumOp "qiskit.opflow.primitive_ops.PauliSumOp")  *|*[*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")) – The operator to evolve. Can also be provided as list of non-commuting operators where the elements are sums of commuting operators. For example: `[XY + YX, ZZ + ZI + IZ, YY]`.
*   **time** (*Union\[*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*,* [*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")*,* [*ParameterExpression*](qiskit.circuit.ParameterExpression "qiskit.circuit.ParameterExpression")*]*) – The evolution time.
*   **label** (*Optional\[*[*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")*]*) – A label for the gate to display in visualizations. Per default, the label is set to `exp(-it <operators>)` where `<operators>` is the sum of the Paulis. Note that the label does not include any coefficients of the Paulis. See the class docstring for an example.
*   **synthesis** (*Optional\[*[*EvolutionSynthesis*](qiskit.synthesis.EvolutionSynthesis "qiskit.synthesis.EvolutionSynthesis")*]*) – A synthesis strategy. If None, the default synthesis is the Lie-Trotter product formula with a single repetition.

## Attributes

<span id="qiskit.circuit.library.PauliEvolutionGate.base_class" />

### base\_class

Get the base class of this instruction. This is guaranteed to be in the inheritance tree of `self`.

The “base class” of an instruction is the lowest class in its inheritance tree that the object should be considered entirely compatible with for \_all\_ circuit applications. This typically means that the subclass is defined purely to offer some sort of programmer convenience over the base class, and the base class is the “true” class for a behavioural perspective. In particular, you should *not* override [`base_class`](#qiskit.circuit.library.PauliEvolutionGate.base_class "qiskit.circuit.library.PauliEvolutionGate.base_class") if you are defining a custom version of an instruction that will be implemented differently by hardware, such as an alternative measurement strategy, or a version of a parametrised gate with a particular set of parameters for the purposes of distinguishing it in a [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") from the full parametrised gate.

This is often exactly equivalent to `type(obj)`, except in the case of singleton instances of standard-library instructions. These singleton instances are special subclasses of their base class, and this property will return that base. For example:

```python
>>> isinstance(XGate(), XGate)
True
>>> type(XGate()) is XGate
False
>>> XGate().base_class is XGate
True
```

In general, you should not rely on the precise class of an instruction; within a given circuit, it is expected that `Instruction.name` should be a more suitable discriminator in most situations.

<span id="qiskit.circuit.library.PauliEvolutionGate.condition" />

### condition

The classical condition on the instruction.

<span id="qiskit.circuit.library.PauliEvolutionGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

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

<span id="qiskit.circuit.library.PauliEvolutionGate.mutable" />

### mutable

Is this instance is a mutable unique instance or not.

If this attribute is `False` the gate instance is a shared singleton and is not mutable.

<span id="qiskit.circuit.library.PauliEvolutionGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.PauliEvolutionGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.PauliEvolutionGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.PauliEvolutionGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.PauliEvolutionGate.time" />

### time

Return the evolution time as stored in the gate parameters.

**Returns**

The evolution time.

<span id="qiskit.circuit.library.PauliEvolutionGate.unit" />

### unit

Get the time unit of duration.

## Methods

### validate\_parameter

<span id="qiskit.circuit.library.PauliEvolutionGate.validate_parameter" />

`validate_parameter(parameter)`

Gate parameters should be int, float, or ParameterExpression

**Return type**

[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)") | [*ParameterExpression*](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")

