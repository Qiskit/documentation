# QFIBase[¶](#qfibase "Permalink to this headline")

<span id="undefined" />

`QFIBase(qfi_method='lin_comb_full')`

Bases: `qiskit.opflow.gradients.derivative_base.DerivativeBase`

Base class for Quantum Fisher Information (QFI).

Compute the Quantum Fisher Information (QFI) given a pure, parameterized quantum state.

The QFI is:

> \[QFI]kl= Re\[〈∂kψ|∂lψ〉−〈∂kψ|ψ〉〈ψ|∂lψ〉] \* 4.

**Parameters**

**qfi\_method** (`Union`\[`str`, `CircuitQFI`]) – The method used to compute the state/probability gradient. Can be either a [`CircuitQFI`](qiskit.opflow.gradients.CircuitQFI#qiskit.opflow.gradients.CircuitQFI "qiskit.opflow.gradients.CircuitQFI") instance or one of the following pre-defined strings `'lin_comb_full'`, `` 'overlap_diag'` `` or `` 'overlap_block_diag'` ``.

**Raises**

**ValueError** – if `qfi_method` is neither a `CircuitQFI` object nor one of the predefined strings.

## Attributes

<span id="undefined" />

### qfi\_method

Returns `CircuitQFI`.

**Return type**

`CircuitQFI`

**Returns**

`CircuitQFI`.
