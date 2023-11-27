# PauliBasisChange[¶](#paulibasischange "Permalink to this headline")

<span id="undefined" />

`PauliBasisChange(destination_basis=None, traverse=True, replacement_fn=None)`

Bases: `qiskit.opflow.converters.converter_base.ConverterBase`

Converter for changing Paulis into other bases. By default, the diagonal basis composed only of Pauli \{Z, I}^n is used as the destination basis to which to convert. Meaning, if a Pauli containing X or Y terms is passed in, which cannot be sampled or evolved natively on some Quantum hardware, the Pauli can be replaced by a composition of a change of basis circuit and a Pauli composed of only Z and I terms (diagonal), which can be evolved or sampled natively on the Quantum hardware.

The replacement function determines how the `PauliOps` should be replaced by their computed change-of-basis `CircuitOps` and destination `PauliOps`. Several convenient out-of-the-box replacement functions have been added as static methods, such as `measurement_replacement_fn`.

This class uses the typical basis change method found in most Quantum Computing textbooks (such as on page 210 of Nielsen and Chuang’s, “Quantum Computation and Quantum Information”, ISBN: 978-1-107-00217-3), which involves diagonalizing the single-qubit Paulis with H and S† gates, mapping the eigenvectors of the diagonalized origin Pauli to the diagonalized destination Pauli using CNOTS, and then de-diagonalizing any single qubit Paulis to their non-diagonal destination values. Many other methods are possible, as well as variations on this method, such as the placement of the CNOT chains.

**Parameters**

*   **destination\_basis** (`Union`\[`Pauli`, `PauliOp`, `None`]) – The Pauli into the basis of which the operators will be converted. If None is specified, the destination basis will be the diagonal (\{I, Z}^n) basis requiring only single qubit rotations.

*   **traverse** (`bool`) – If true and the operator passed into convert contains sub-Operators, such as ListOp, traverse the Operator and apply the conversion to every applicable sub-operator within it.

*   **replacement\_fn** (`Optional`\[`Callable`]) –

    A function specifying what to do with the basis-change `CircuitOp` and destination `PauliOp` when converting an Operator and replacing converted values. By default, this will be

    > 1.  For StateFns (or Measurements): replacing the StateFn with ComposedOp(StateFn(d), c) where c is the conversion circuit and d is the destination Pauli, so the overall beginning and ending operators are equivalent.
    > 2.  For non-StateFn Operators: replacing the origin p with c·d·c†, where c is the conversion circuit and d is the destination, so the overall beginning and ending operators are equivalent.

## Methods Defined Here

|                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`construct_cnot_chain`](qiskit.opflow.converters.PauliBasisChange.construct_cnot_chain#qiskit.opflow.converters.PauliBasisChange.construct_cnot_chain "qiskit.opflow.converters.PauliBasisChange.construct_cnot_chain")                         | Construct a `CircuitOp` (or `PauliOp` if equal to the identity) which takes the eigenvectors of `diag_pauli_op1` to the eigenvectors of `diag_pauli_op2`, assuming both are diagonal (or performing this operation on their diagonalized Paulis implicitly if not).                              |
| [`convert`](qiskit.opflow.converters.PauliBasisChange.convert#qiskit.opflow.converters.PauliBasisChange.convert "qiskit.opflow.converters.PauliBasisChange.convert")                                                                             | Given a `PauliOp`, or an Operator containing `PauliOps` if `_traverse` is True, converts each Pauli into the basis specified by self.\_destination and a basis-change-circuit, calls `replacement_fn` with these two Operators, and replaces the `PauliOps` with the output of `replacement_fn`. |
| [`get_cob_circuit`](qiskit.opflow.converters.PauliBasisChange.get_cob_circuit#qiskit.opflow.converters.PauliBasisChange.get_cob_circuit "qiskit.opflow.converters.PauliBasisChange.get_cob_circuit")                                             | Construct an Operator which maps the +1 and -1 eigenvectors of the origin Pauli to the +1 and -1 eigenvectors of the destination Pauli.                                                                                                                                                          |
| [`get_diagonal_pauli_op`](qiskit.opflow.converters.PauliBasisChange.get_diagonal_pauli_op#qiskit.opflow.converters.PauliBasisChange.get_diagonal_pauli_op "qiskit.opflow.converters.PauliBasisChange.get_diagonal_pauli_op")                     | Get the diagonal `PualiOp` to which `pauli_op` could be rotated with only single-qubit operations.                                                                                                                                                                                               |
| [`get_diagonalizing_clifford`](qiskit.opflow.converters.PauliBasisChange.get_diagonalizing_clifford#qiskit.opflow.converters.PauliBasisChange.get_diagonalizing_clifford "qiskit.opflow.converters.PauliBasisChange.get_diagonalizing_clifford") | Construct a `CircuitOp` with only single-qubit gates which takes the eigenvectors of `pauli` to eigenvectors composed only of \|0⟩ and \|1⟩ tensor products.                                                                                                                                     |
| [`get_tpb_pauli`](qiskit.opflow.converters.PauliBasisChange.get_tpb_pauli#qiskit.opflow.converters.PauliBasisChange.get_tpb_pauli "qiskit.opflow.converters.PauliBasisChange.get_tpb_pauli")                                                     | Gets the Pauli (not `PauliOp`!) whose diagonalizing single-qubit rotations is a superset of the diagonalizing single-qubit rotations for each of the Paulis in `list_op`.                                                                                                                        |
| [`measurement_replacement_fn`](qiskit.opflow.converters.PauliBasisChange.measurement_replacement_fn#qiskit.opflow.converters.PauliBasisChange.measurement_replacement_fn "qiskit.opflow.converters.PauliBasisChange.measurement_replacement_fn") | A built-in convenience replacement function which produces measurements isomorphic to an `OperatorStateFn` measurement holding the origin `PauliOp`.                                                                                                                                             |
| [`operator_replacement_fn`](qiskit.opflow.converters.PauliBasisChange.operator_replacement_fn#qiskit.opflow.converters.PauliBasisChange.operator_replacement_fn "qiskit.opflow.converters.PauliBasisChange.operator_replacement_fn")             | A built-in convenience replacement function which produces Operators isomorphic to the origin `PauliOp`.                                                                                                                                                                                         |
| [`pad_paulis_to_equal_length`](qiskit.opflow.converters.PauliBasisChange.pad_paulis_to_equal_length#qiskit.opflow.converters.PauliBasisChange.pad_paulis_to_equal_length "qiskit.opflow.converters.PauliBasisChange.pad_paulis_to_equal_length") | If `pauli_op1` and `pauli_op2` do not act over the same number of qubits, pad identities to the end of the shorter of the two so they are of equal length.                                                                                                                                       |
| [`statefn_replacement_fn`](qiskit.opflow.converters.PauliBasisChange.statefn_replacement_fn#qiskit.opflow.converters.PauliBasisChange.statefn_replacement_fn "qiskit.opflow.converters.PauliBasisChange.statefn_replacement_fn")                 | A built-in convenience replacement function which produces state functions isomorphic to an `OperatorStateFn` state function holding the origin `PauliOp`.                                                                                                                                       |

## Attributes

<span id="undefined" />

### destination

The destination `PauliOp`, or `None` if using the default destination, the diagonal basis.

**Return type**

`Optional`\[`PauliOp`]
