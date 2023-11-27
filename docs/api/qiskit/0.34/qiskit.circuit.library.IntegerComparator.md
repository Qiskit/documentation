# IntegerComparator[¶](#integercomparator "Permalink to this headline")

<span id="undefined" />

`IntegerComparator(num_state_qubits=None, value=None, geq=True, name='cmp')`

Bases: `qiskit.circuit.library.blueprintcircuit.BlueprintCircuit`

Integer Comparator.

Operator compares basis states $|i\rangle_n$ against a classically given integer $L$ of fixed value and flips a target qubit if $i \geq L$ (or $<$ depending on the parameter `geq`):

$$
|i\rangle_n |0\rangle \mapsto |i\rangle_n |i \geq L\rangle
$$

This operation is based on two’s complement implementation of binary subtraction but only uses carry bits and no actual result bits. If the most significant carry bit (the results bit) is 1, the $\geq$ condition is `True` otherwise it is `False`.

Create a new fixed value comparator circuit.

**Parameters**

*   **num\_state\_qubits** (`Optional`\[`int`]) – Number of state qubits. If this is set it will determine the number of qubits required for the circuit.
*   **value** (`Optional`\[`int`]) – The fixed value to compare with.
*   **geq** (`bool`) – If True, evaluate a `>=` condition, else `<`.
*   **name** (`str`) – Name of the circuit.

## Attributes

<span id="undefined" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[`AncillaQubit`]

<span id="undefined" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

**Return type**

`dict`

<span id="undefined" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[`Clbit`]

<span id="undefined" />

### data

<span id="undefined" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="undefined" />

### geq

Return whether the comparator compares greater or less equal.

**Return type**

`bool`

**Returns**

True, if the comparator compares `>=`, False if `<`.

<span id="undefined" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[`ParameterExpression`, `float`]

<span id="undefined" />

### header

`= 'OPENQASM 2.0;'`

<span id="undefined" />

### instances

`= 9`

<span id="undefined" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="undefined" />

### num\_ancilla\_qubits

Deprecated. Use num\_ancillas instead.

<span id="undefined" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="undefined" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="undefined" />

### num\_parameters

**Return type**

`int`

<span id="undefined" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="undefined" />

### num\_state\_qubits

The number of qubits encoding the state for the comparison.

**Return type**

`int`

**Returns**

The number of state qubits.

<span id="undefined" />

### parameters

**Return type**

`ParameterView`

<span id="undefined" />

### prefix

`= 'circuit'`

<span id="undefined" />

### qregs

A list of the quantum registers associated with the circuit.

<span id="undefined" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[`Qubit`]

<span id="undefined" />

### value

The value to compare the qubit register to.

**Return type**

`int`

**Returns**

The value against which the value of the qubit register is compared.
