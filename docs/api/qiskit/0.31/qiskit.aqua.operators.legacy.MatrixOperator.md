---
title: MatrixOperator
description: API reference for qiskit.aqua.operators.legacy.MatrixOperator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.legacy.MatrixOperator
---

# MatrixOperator

<span id="qiskit.aqua.operators.legacy.MatrixOperator" />

`MatrixOperator(matrix, basis=None, z2_symmetries=None, atol=1e-12, name=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/operators/legacy/matrix_operator.py "view source code")

Bases: `qiskit.aqua.operators.legacy.base_operator.LegacyBaseOperator`

Operators relevant for quantum applications

<Admonition title="Note" type="note">
  For grouped paulis representation, all operations will always convert it to paulis and then convert it back. (It might be a performance issue.)
</Admonition>

**Parameters**

*   **matrix** (*numpy.ndarray or scipy.sparse.csr\_matrix*) – a 2-D sparse matrix represents operator (using CSR format internally)
*   **basis** (*list\[tuple(object, \[int])], optional*) – the grouping basis, each element is a tuple composed of the basis and the indices to paulis which are belonged to that group. e.g., if tpb basis is used, the object will be a pauli. by default, the group is equal to non-grouping, each pauli is its own basis.
*   **z2\_symmetries** ([*Z2Symmetries*](qiskit.aqua.operators.legacy.Z2Symmetries "qiskit.aqua.operators.legacy.Z2Symmetries")) – represent the Z2 symmetries
*   **atol** (*float*) – atol
*   **name** (*str*) – name

## Methods

### add

<span id="qiskit.aqua.operators.legacy.MatrixOperator.add" />

`MatrixOperator.add(other, copy=False)`

### chop

<span id="qiskit.aqua.operators.legacy.MatrixOperator.chop" />

`MatrixOperator.chop(threshold=None, copy=False)`

Eliminate the real and imagine part of coeff in each pauli by threshold. If pauli’s coeff is less then threshold in both real and imagine parts, the pauli is removed. To align the internal representations, all available representations are chopped. The chopped result is stored back to original property. Note: if coeff is real-only, the imag part is skipped.

**Parameters**

*   **threshold** (*float*) – threshold chops the paulis
*   **copy** (*bool*) – copy or self

**Returns**

self or copy

**Return type**

[MatrixOperator](qiskit.aqua.operators.legacy.MatrixOperator "qiskit.aqua.operators.legacy.MatrixOperator")

### construct\_evaluation\_circuit

<span id="qiskit.aqua.operators.legacy.MatrixOperator.construct_evaluation_circuit" />

`MatrixOperator.construct_evaluation_circuit(wave_function, statevector_mode=True, use_simulator_snapshot_mode=None, circuit_name_prefix='')`

Construct the circuits for evaluation.

**Parameters**

*   **wave\_function** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – the quantum circuit.
*   **statevector\_mode** (*bool*) – mode
*   **use\_simulator\_snapshot\_mode** (*bool*) – uses simulator operator mode
*   **circuit\_name\_prefix** (*str, optional*) – a prefix of circuit name

**Returns**

**the circuits for computing the expectation of the operator over**

the wavefunction evaluation.

**Return type**

list\[[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")]

### copy

<span id="qiskit.aqua.operators.legacy.MatrixOperator.copy" />

`MatrixOperator.copy()`

Get a copy of self.

### evaluate\_with\_result

<span id="qiskit.aqua.operators.legacy.MatrixOperator.evaluate_with_result" />

`MatrixOperator.evaluate_with_result(result, statevector_mode=True, use_simulator_snapshot_mode=None, circuit_name_prefix='')`

Use the executed result with operator to get the evaluated value.

**Parameters**

*   **result** (*qiskit.Result*) – the result from the backend
*   **statevector\_mode** (*bool*) – mode
*   **use\_simulator\_snapshot\_mode** (*bool*) – uses simulator operator mode
*   **circuit\_name\_prefix** (*str, optional*) – a prefix of circuit name

**Returns**

the mean value float: the standard deviation

**Return type**

float

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – if Operator is empty

### evaluate\_with\_statevector

<span id="qiskit.aqua.operators.legacy.MatrixOperator.evaluate_with_statevector" />

`MatrixOperator.evaluate_with_statevector(quantum_state)`

**Parameters**

**quantum\_state** (*numpy.ndarray*) – quantum state

**Returns**

the mean value float: the standard deviation

**Return type**

float

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – if Operator is empty

### evolve

<span id="qiskit.aqua.operators.legacy.MatrixOperator.evolve" />

`MatrixOperator.evolve(state_in, evo_time=0, num_time_slices=0, expansion_mode='trotter', expansion_order=1)`

Carry out the eoh evolution for the operator under supplied specifications.

**Parameters**

*   **state\_in** (*Union(list,numpy.array)*) – A vector representing the initial state for the evolution
*   **evo\_time** (*Union(complex, float)*) – The evolution time
*   **num\_time\_slices** (*int*) – The number of time slices for the expansion
*   **expansion\_mode** (*str*) – The mode under which the expansion is to be done. Currently support ‘trotter’, which follows the expansion as discussed in [http://science.sciencemag.org/content/273/5278/1073](http://science.sciencemag.org/content/273/5278/1073), and ‘suzuki’, which corresponds to the discussion in [https://arxiv.org/pdf/quant-ph/0508139.pdf](https://arxiv.org/pdf/quant-ph/0508139.pdf)
*   **expansion\_order** (*int*) – The order for suzuki expansion

**Returns**

Return the matrix vector multiplication result.

**Return type**

numpy.array

**Raises**

*   **ValueError** – Invalid arguments
*   [**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – if Operator is empty

### is\_empty

<span id="qiskit.aqua.operators.legacy.MatrixOperator.is_empty" />

`MatrixOperator.is_empty()`

Check Operator is empty or not.

**Returns**

is empty?

**Return type**

bool

### print\_details

<span id="qiskit.aqua.operators.legacy.MatrixOperator.print_details" />

`MatrixOperator.print_details()`

**Returns**

a formatted operator.

**Return type**

str

### sub

<span id="qiskit.aqua.operators.legacy.MatrixOperator.sub" />

`MatrixOperator.sub(other, copy=False)`

### to\_opflow

<span id="qiskit.aqua.operators.legacy.MatrixOperator.to_opflow" />

`MatrixOperator.to_opflow()`

to op flow

## Attributes

<span id="qiskit.aqua.operators.legacy.MatrixOperator.atol" />

### atol

return atol

<span id="qiskit.aqua.operators.legacy.MatrixOperator.basis" />

### basis

returns basis

<span id="qiskit.aqua.operators.legacy.MatrixOperator.dense_matrix" />

### dense\_matrix

Getter of matrix in dense matrix form.

<span id="qiskit.aqua.operators.legacy.MatrixOperator.dia_matrix" />

### dia\_matrix

diagonal matrix

<span id="qiskit.aqua.operators.legacy.MatrixOperator.matrix" />

### matrix

Getter of matrix.

<span id="qiskit.aqua.operators.legacy.MatrixOperator.name" />

### name

returns name

<span id="qiskit.aqua.operators.legacy.MatrixOperator.num_qubits" />

### num\_qubits

number of qubits required for the operator.

**Returns**

number of qubits

**Return type**

int

<span id="qiskit.aqua.operators.legacy.MatrixOperator.z2_symmetries" />

### z2\_symmetries

returns z2 symmetries

