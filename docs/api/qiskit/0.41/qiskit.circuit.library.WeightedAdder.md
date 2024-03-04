---
title: WeightedAdder
description: API reference for qiskit.circuit.library.WeightedAdder
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.WeightedAdder
---

# WeightedAdder

<span id="qiskit.circuit.library.WeightedAdder" />

`WeightedAdder(num_state_qubits=None, weights=None, name='adder')` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/circuit/library/arithmetic/weighted_adder.py "view source code")

Bases: `qiskit.circuit.library.blueprintcircuit.BlueprintCircuit`

A circuit to compute the weighted sum of qubit registers.

Given $n$ qubit basis states $q_0, \ldots, q_{n-1} \in \{0, 1\}$ and non-negative integer weights $\lambda_0, \ldots, \lambda_{n-1}$, this circuit performs the operation

$$
|q_0 \ldots q_{n-1}\rangle |0\rangle_s
\mapsto |q_0 \ldots q_{n-1}\rangle |\sum_{j=0}^{n-1} \lambda_j q_j\rangle_s
$$

where $s$ is the number of sum qubits required. This can be computed as

$$
s = 1 + \left\lfloor \log_2\left( \sum_{j=0}^{n-1} \lambda_j \right) \right\rfloor
$$

or $s = 1$ if the sum of the weights is 0 (then the expression in the logarithm is invalid).

For qubits in a circuit diagram, the first weight applies to the upper-most qubit. For an example where the state of 4 qubits is added into a sum register, the circuit can be schematically drawn as

```python
           ┌────────┐
  state_0: ┤0       ├ | state_0 * weights[0]
           │        │ |
  state_1: ┤1       ├ | + state_1 * weights[1]
           │        │ |
  state_2: ┤2       ├ | + state_2 * weights[2]
           │        │ |
  state_3: ┤3       ├ | + state_3 * weights[3]
           │        │
    sum_0: ┤4       ├ |
           │  Adder │ |
    sum_1: ┤5       ├ | = sum_0 * 2^0 + sum_1 * 2^1 + sum_2 * 2^2
           │        │ |
    sum_2: ┤6       ├ |
           │        │
  carry_0: ┤7       ├
           │        │
  carry_1: ┤8       ├
           │        │
control_0: ┤9       ├
           └────────┘
```

Computes the weighted sum controlled by state qubits.

**Parameters**

*   **num\_state\_qubits** (`Optional`\[`int`]) – The number of state qubits.
*   **weights** (`Optional`\[`List`\[`int`]]) – List of weights, one for each state qubit. If none are provided they default to 1 for every qubit.
*   **name** (`str`) – The name of the circuit.

## Attributes

<span id="qiskit.circuit.library.WeightedAdder.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[[`AncillaQubit`](qiskit.circuit.AncillaQubit "qiskit.circuit.quantumregister.AncillaQubit")]

<span id="qiskit.circuit.library.WeightedAdder.calibrations" />

### calibrations

Return calibration dictionary.

The custom pulse definition of a given gate is of the form `{'gate_name': {(qubits, params): schedule}}`

**Return type**

`dict`

<span id="qiskit.circuit.library.WeightedAdder.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit.circuit.library.WeightedAdder.data" />

### data

<span id="qiskit.circuit.library.WeightedAdder.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.WeightedAdder.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[[`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression"), `float`]

<span id="qiskit.circuit.library.WeightedAdder.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.WeightedAdder.instances" />

### instances

`= 2477`

<span id="qiskit.circuit.library.WeightedAdder.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="qiskit.circuit.library.WeightedAdder.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.WeightedAdder.num_carry_qubits" />

### num\_carry\_qubits

The number of carry qubits required to compute the sum.

Note that this is not necessarily equal to the number of ancilla qubits, these can be queried using `num_ancilla_qubits`.

**Return type**

`int`

**Returns**

The number of carry qubits required to compute the sum.

<span id="qiskit.circuit.library.WeightedAdder.num_clbits" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="qiskit.circuit.library.WeightedAdder.num_control_qubits" />

### num\_control\_qubits

The number of additional control qubits required.

Note that the total number of ancilla qubits can be obtained by calling the method `num_ancilla_qubits`.

**Return type**

`int`

**Returns**

The number of additional control qubits required (0 or 1).

<span id="qiskit.circuit.library.WeightedAdder.num_parameters" />

### num\_parameters

**Return type**

`int`

<span id="qiskit.circuit.library.WeightedAdder.num_qubits" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.WeightedAdder.num_state_qubits" />

### num\_state\_qubits

The number of qubits to be summed.

**Return type**

`int`

**Returns**

The number of state qubits.

<span id="qiskit.circuit.library.WeightedAdder.num_sum_qubits" />

### num\_sum\_qubits

The number of sum qubits in the circuit.

**Return type**

`int`

**Returns**

The number of qubits needed to represent the weighted sum of the qubits.

<span id="qiskit.circuit.library.WeightedAdder.op_start_times" />

### op\_start\_times

Return a list of operation start times.

This attribute is enabled once one of scheduling analysis passes runs on the quantum circuit.

**Return type**

`List`\[`int`]

**Returns**

List of integers representing instruction start times. The index corresponds to the index of instruction in `QuantumCircuit.data`.

**Raises**

**AttributeError** – When circuit is not scheduled.

<span id="qiskit.circuit.library.WeightedAdder.parameters" />

### parameters

**Return type**

`ParameterView`

<span id="qiskit.circuit.library.WeightedAdder.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.WeightedAdder.qregs" />

### qregs

A list of the quantum registers associated with the circuit.

<span id="qiskit.circuit.library.WeightedAdder.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[[`Qubit`](qiskit.circuit.Qubit "qiskit.circuit.quantumregister.Qubit")]

<span id="qiskit.circuit.library.WeightedAdder.weights" />

### weights

The weights for the qubit states.

**Return type**

`List`\[`int`]

**Returns**

The weight for the qubit states.

