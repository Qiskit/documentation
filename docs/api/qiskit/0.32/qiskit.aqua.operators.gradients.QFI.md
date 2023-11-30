# QFI

<span id="undefined" />

`QFI(qfi_method='lin_comb_full')`

Bases: `qiskit.aqua.operators.gradients.qfi_base.QFIBase`

Compute the Quantum Fisher Information (QFI).

Computes the QFI given a pure, parametrized quantum state, where QFI is:

$$
\mathrm{QFI}_{kl}= 4 \mathrm{Re}[\langle \partial_k \psi | \partial_l \psi \rangle
    − \langle\partial_k \psi | \psi \rangle \langle\psi | \partial_l \psi \rangle].
$$

**Parameters**

**qfi\_method** (`Union`\[`str`, `CircuitQFI`]) – The method used to compute the state/probability gradient. Can be either a [`CircuitQFI`](qiskit.aqua.operators.gradients.CircuitQFI#qiskit.aqua.operators.gradients.CircuitQFI "qiskit.aqua.operators.gradients.CircuitQFI") instance or one of the following pre-defined strings `'lin_comb_full'`, `` 'overlap_diag'` `` or `` 'overlap_block_diag'` ``.

**Raises**

**ValueError** – if `qfi_method` is neither a `CircuitQFI` object nor one of the predefined strings.

## Methods

|                                                                                                                                                                                                                            |                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| [`convert`](qiskit.aqua.operators.gradients.QFI.convert#qiskit.aqua.operators.gradients.QFI.convert "qiskit.aqua.operators.gradients.QFI.convert")                                                                         | **type operator**`CircuitStateFn`                                                                          |
| [`gradient_wrapper`](qiskit.aqua.operators.gradients.QFI.gradient_wrapper#qiskit.aqua.operators.gradients.QFI.gradient_wrapper "qiskit.aqua.operators.gradients.QFI.gradient_wrapper")                                     | Get a callable function which provides the respective gradient, Hessian or QFI for given parameter values. |
| [`parameter_expression_grad`](qiskit.aqua.operators.gradients.QFI.parameter_expression_grad#qiskit.aqua.operators.gradients.QFI.parameter_expression_grad "qiskit.aqua.operators.gradients.QFI.parameter_expression_grad") | Get the derivative of a parameter expression w\.r.t.                                                       |

## Attributes

<span id="undefined" />

### qfi\_method

Returns `CircuitQFI`.

**Return type**

`CircuitQFI`

**Returns**

`CircuitQFI`.
