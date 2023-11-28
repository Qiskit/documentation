# QFIBase

<span id="undefined" />

`QFIBase(qfi_method='lin_comb_full')`

Bases: `qiskit.aqua.operators.gradients.derivative_base.DerivativeBase`

Base class for Quantum Fisher Information (QFI).

Compute the Quantum Fisher Information (QFI) given a pure, parametrized quantum state.

The QFI is:

> \[QFI]kl= Re\[〈∂kψ|∂lψ〉−〈∂kψ|ψ〉〈ψ|∂lψ〉] \* 4.

**Parameters**

**qfi\_method** (`Union`\[`str`, `CircuitQFI`]) – The method used to compute the state/probability gradient. Can be either a [`CircuitQFI`](qiskit.aqua.operators.gradients.CircuitQFI#qiskit.aqua.operators.gradients.CircuitQFI "qiskit.aqua.operators.gradients.CircuitQFI") instance or one of the following pre-defined strings `'lin_comb_full'`, `` 'overlap_diag'` `` or `` 'overlap_block_diag'` ``.

**Raises**

**ValueError** – if `qfi_method` is neither a `CircuitQFI` object nor one of the predefined strings.

## Methods

|                                                                                                                                                                                                                                        |                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| [`convert`](qiskit.aqua.operators.gradients.QFIBase.convert#qiskit.aqua.operators.gradients.QFIBase.convert "qiskit.aqua.operators.gradients.QFIBase.convert")                                                                         | **type operator**`OperatorBase`                                                                            |
| [`gradient_wrapper`](qiskit.aqua.operators.gradients.QFIBase.gradient_wrapper#qiskit.aqua.operators.gradients.QFIBase.gradient_wrapper "qiskit.aqua.operators.gradients.QFIBase.gradient_wrapper")                                     | Get a callable function which provides the respective gradient, Hessian or QFI for given parameter values. |
| [`parameter_expression_grad`](qiskit.aqua.operators.gradients.QFIBase.parameter_expression_grad#qiskit.aqua.operators.gradients.QFIBase.parameter_expression_grad "qiskit.aqua.operators.gradients.QFIBase.parameter_expression_grad") | Get the derivative of a parameter expression w\.r.t.                                                       |

## Attributes

<span id="undefined" />

### qfi\_method

Returns `CircuitQFI`.

**Return type**

`CircuitQFI`

**Returns**

`CircuitQFI`.
