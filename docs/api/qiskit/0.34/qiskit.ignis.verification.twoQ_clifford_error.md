# qiskit.ignis.verification.twoQ\_clifford\_error[¶](#qiskit-ignis-verification-twoq-clifford-error "Permalink to this headline")

<span id="undefined" />

`twoQ_clifford_error(ngates, gate_qubit, gate_err)`

The two qubit Clifford gate error given measured errors in the primitive gates used to construct the Clifford (see arxiv:1712.06550). Assumes the error in the underlying gates is depolarizing.

**Parameters**

*   **ngates** (`Dict`\[`int`, `Dict`\[`str`, `float`]]) – list of the number of gates per 2Q Clifford.
*   **gate\_qubit** (`List`\[`int`]) – list of the qubit corresponding to the gate (0, 1 or -1). -1 corresponds to the 2Q gate. Note that 0 (1) corresponds to the single qubit gate counts in `ngates` which has smaller (larger) qubit index.
*   **gate\_err** (`List`\[`float`]) – list of the gate errors.

<Admonition title="Note" type="note">
  This function presupposes the basis gate consists of `u1`, `u2`, `u3` and `cx`.
</Admonition>

**Returns**

Error per 2Q Clifford.

**Return type**

float

**Raises**

**QiskitError** – when number of qubit contained in `ngates` is not 2.
