---
title: StatePreparation
description: API reference for qiskit.circuit.library.StatePreparation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.StatePreparation
---

# StatePreparation

<span id="qiskit.circuit.library.StatePreparation" />

`qiskit.circuit.library.StatePreparation(params, num_qubits=None, inverse=False, label=None, normalize=False)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/library/data_preparation/state_preparation.py "view source code")

Bases: [`Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

Complex amplitude state preparation.

Class that implements the (complex amplitude) state preparation of some flexible collection of qubit registers.

**Parameters**

*   **params** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")  *|*[*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")  *|*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")  *|*[*Statevector*](qiskit.quantum_info.Statevector "qiskit.quantum_info.states.statevector.Statevector")) –

    *   Statevector: Statevector to initialize to.
    *   list: vector of complex amplitudes to initialize to.
    *   string: labels of basis states of the Pauli eigenstates Z, X, Y. See [`Statevector.from_label()`](qiskit.quantum_info.Statevector#from_label "qiskit.quantum_info.Statevector.from_label"). Notice the order of the labels is reversed with respect to the qubit index to be applied to. Example label ‘01’ initializes the qubit zero to $|1\rangle$ and the qubit one to $|0\rangle$.
    *   int: an integer that is used as a bitmap indicating which qubits to initialize to $|1\rangle$. Example: setting params to 5 would initialize qubit 0 and qubit 2 to $|1\rangle$ and qubit 1 to $|0\rangle$.

*   **num\_qubits** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)") *| None*) – This parameter is only used if params is an int. Indicates the total number of qubits in the initialize call. Example: initialize covers 5 qubits and params is 3. This allows qubits 0 and 1 to be initialized to $|1\rangle$ and the remaining 3 qubits to be initialized to $|0\rangle$.

*   **inverse** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – if True, the inverse state is constructed.

*   **label** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – An optional label for the gate

*   **normalize** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – Whether to normalize an input array to a unit vector.

**Raises**

[**QiskitError**](exceptions#qiskit.exceptions.QiskitError "qiskit.exceptions.QiskitError") – `num_qubits` parameter used when `params` is not an integer

When a Statevector argument is passed the state is prepared using a recursive initialization algorithm, including optimizations, from \[1], as well as some additional optimizations including removing zero rotations and double cnots.

**References:** \[1] Shende, Bullock, Markov. Synthesis of Quantum Logic Circuits (2004) \[[https://arxiv.org/abs/quant-ph/0406176v5](https://arxiv.org/abs/quant-ph/0406176v5)]

## Attributes

<span id="qiskit.circuit.library.StatePreparation.base_class" />

### base\_class

Get the base class of this instruction. This is guaranteed to be in the inheritance tree of `self`.

The “base class” of an instruction is the lowest class in its inheritance tree that the object should be considered entirely compatible with for \_all\_ circuit applications. This typically means that the subclass is defined purely to offer some sort of programmer convenience over the base class, and the base class is the “true” class for a behavioural perspective. In particular, you should *not* override [`base_class`](#qiskit.circuit.library.StatePreparation.base_class "qiskit.circuit.library.StatePreparation.base_class") if you are defining a custom version of an instruction that will be implemented differently by hardware, such as an alternative measurement strategy, or a version of a parametrised gate with a particular set of parameters for the purposes of distinguishing it in a [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") from the full parametrised gate.

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

<span id="qiskit.circuit.library.StatePreparation.condition" />

### condition

The classical condition on the instruction.

<span id="qiskit.circuit.library.StatePreparation.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.StatePreparation.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.StatePreparation.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.StatePreparation.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.StatePreparation.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.StatePreparation.mutable" />

### mutable

Is this instance is a mutable unique instance or not.

If this attribute is `False` the gate instance is a shared singleton and is not mutable.

<span id="qiskit.circuit.library.StatePreparation.name" />

### name

Return the name.

<span id="qiskit.circuit.library.StatePreparation.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.StatePreparation.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.StatePreparation.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.StatePreparation.unit" />

### unit

Get the time unit of duration.

## Methods

### broadcast\_arguments

<span id="qiskit.circuit.library.StatePreparation.broadcast_arguments" />

`broadcast_arguments(qargs, cargs)`

Validation and handling of the arguments and its relationship.

For example, `cx([q[0],q[1]], q[2])` means `cx(q[0], q[2]); cx(q[1], q[2])`. This method yields the arguments in the right grouping. In the given example:

```python
in: [[q[0],q[1]], q[2]],[]
outs: [q[0], q[2]], []
      [q[1], q[2]], []
```

The general broadcasting rules are:

> *   If len(qargs) == 1:
>
>     ```python
>     [q[0], q[1]] -> [q[0]],[q[1]]
>     ```
>
> *   If len(qargs) == 2:
>
>     ```python
>     [[q[0], q[1]], [r[0], r[1]]] -> [q[0], r[0]], [q[1], r[1]]
>     [[q[0]], [r[0], r[1]]]       -> [q[0], r[0]], [q[0], r[1]]
>     [[q[0], q[1]], [r[0]]]       -> [q[0], r[0]], [q[1], r[0]]
>     ```
>
> *   If len(qargs) >= 3:
>
>     ```python
>     [q[0], q[1]], [r[0], r[1]],  ...] -> [q[0], r[0], ...], [q[1], r[1], ...]
>     ```

**Parameters**

*   **qargs** – List of quantum bit arguments.
*   **cargs** – List of classical bit arguments.

**Returns**

A tuple with single arguments.

**Raises**

[**CircuitError**](circuit#qiskit.circuit.CircuitError "qiskit.circuit.CircuitError") – If the input is not valid. For example, the number of arguments does not match the gate expectation.

### inverse

<span id="qiskit.circuit.library.StatePreparation.inverse" />

`inverse(annotated=False)`

Return inverted StatePreparation

### validate\_parameter

<span id="qiskit.circuit.library.StatePreparation.validate_parameter" />

`validate_parameter(parameter)`

StatePreparation instruction parameter can be str, int, float, and complex.

