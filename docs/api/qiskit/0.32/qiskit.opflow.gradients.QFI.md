# QFI

<span id="undefined" />

`QFI(qfi_method='lin_comb_full')`

Bases: `qiskit.opflow.gradients.qfi_base.QFIBase`

Compute the Quantum Fisher Information (QFI).

Computes the QFI given a pure, parameterized quantum state, where QFI is:

$$
\mathrm{QFI}_{kl}= 4 \mathrm{Re}[\langle \partial_k \psi | \partial_l \psi \rangle
    − \langle\partial_k \psi | \psi \rangle \langle\psi | \partial_l \psi \rangle].
$$

**Parameters**

**qfi\_method** (`Union`\[`str`, `CircuitQFI`]) – The method used to compute the state/probability gradient. Can be either a [`CircuitQFI`](qiskit.opflow.gradients.CircuitQFI#qiskit.opflow.gradients.CircuitQFI "qiskit.opflow.gradients.CircuitQFI") instance or one of the following pre-defined strings `'lin_comb_full'`, `` 'overlap_diag'` `` or `` 'overlap_block_diag'` ``.

**Raises**

**ValueError** – if `qfi_method` is neither a `CircuitQFI` object nor one of the predefined strings.

## Methods Defined Here

|                                                                                                                            |                                   |
| -------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| [`convert`](qiskit.opflow.gradients.QFI.convert#qiskit.opflow.gradients.QFI.convert "qiskit.opflow.gradients.QFI.convert") | **type operator**`CircuitStateFn` |

## Attributes

<span id="undefined" />

### qfi\_method

Returns `CircuitQFI`.

**Return type**

`CircuitQFI`

**Returns**

`CircuitQFI`.
