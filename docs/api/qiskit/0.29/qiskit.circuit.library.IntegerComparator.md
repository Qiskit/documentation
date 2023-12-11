# IntegerComparator



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



### ancillas

Returns a list of ancilla bits in the order that the registers were added.



### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}



### clbits

Returns a list of classical bits in the order that the registers were added.



### data



### extension\_lib

`= 'include "qelib1.inc";'`



### geq

Return whether the comparator compares greater or less equal.

**Return type**

`bool`

**Returns**

True, if the comparator compares `>=`, False if `<`.



### global\_phase

Return the global phase of the circuit in radians.



### header

`= 'OPENQASM 2.0;'`



### instances

`= 16`



### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.



### num\_ancilla\_qubits

Deprecated. Use num\_ancillas instead.



### num\_ancillas

Return the number of ancilla qubits.



### num\_clbits

Return number of classical bits.



### num\_parameters

**Return type**

`int`



### num\_qubits

Return number of qubits.



### num\_state\_qubits

The number of qubits encoding the state for the comparison.

**Return type**

`int`

**Returns**

The number of state qubits.



### parameters

**Return type**

`ParameterView`



### prefix

`= 'circuit'`



### qregs

A list of the quantum registers associated with the circuit.



### qubits

Returns a list of quantum bits in the order that the registers were added.



### value

The value to compare the qubit register to.

**Return type**

`int`

**Returns**

The value against which the value of the qubit register is compared.
