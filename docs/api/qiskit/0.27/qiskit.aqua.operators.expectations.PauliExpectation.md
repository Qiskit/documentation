# qiskit.aqua.operators.expectations.PauliExpectation

<span id="undefined" />

`PauliExpectation(group_paulis=True)`

An Expectation converter for Pauli-basis observables by changing Pauli measurements to a diagonal (\{Z, I}^n) basis and appending circuit post-rotations to the measured state function. Optionally groups the Paulis with the same post-rotations (those that commute with one another, or form Abelian groups) into single measurements to reduce circuit execution overhead.

**Parameters**

**group\_paulis** (`bool`) – Whether to group the Pauli measurements into commuting sums, which all have the same diagonalizing circuit.

<span id="undefined" />

`__init__(group_paulis=True)`

**Parameters**

**group\_paulis** (`bool`) – Whether to group the Pauli measurements into commuting sums, which all have the same diagonalizing circuit.

## Methods

|                                                                                                                                                                             |                                                                                                                                                                                            |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`__init__`](#qiskit.aqua.operators.expectations.PauliExpectation.__init__ "qiskit.aqua.operators.expectations.PauliExpectation.__init__")(\[group\_paulis])                | **type group\_paulis**`bool`                                                                                                                                                               |
| [`compute_variance`](#qiskit.aqua.operators.expectations.PauliExpectation.compute_variance "qiskit.aqua.operators.expectations.PauliExpectation.compute_variance")(exp\_op) | Compute the variance of the expectation estimator.                                                                                                                                         |
| [`convert`](#qiskit.aqua.operators.expectations.PauliExpectation.convert "qiskit.aqua.operators.expectations.PauliExpectation.convert")(operator)                           | Accepts an Operator and returns a new Operator with the Pauli measurements replaced by diagonal Pauli post-rotation based measurements so they can be evaluated by sampling and averaging. |

<span id="undefined" />

`compute_variance(exp_op)`

Compute the variance of the expectation estimator.

**Parameters**

**exp\_op** (`OperatorBase`) – The full expectation value Operator after sampling.

**Return type**

`Union`\[`list`, `float`, `ndarray`]

**Returns**

The variances or lists thereof (if exp\_op contains ListOps) of the expectation value estimation.

<span id="undefined" />

`convert(operator)`

Accepts an Operator and returns a new Operator with the Pauli measurements replaced by diagonal Pauli post-rotation based measurements so they can be evaluated by sampling and averaging.

**Parameters**

**operator** (`OperatorBase`) – The operator to convert.

**Return type**

`OperatorBase`

**Returns**

The converted operator.
