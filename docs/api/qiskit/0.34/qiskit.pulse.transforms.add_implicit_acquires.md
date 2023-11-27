# qiskit.pulse.transforms.add\_implicit\_acquires[¶](#qiskit-pulse-transforms-add-implicit-acquires "Permalink to this headline")

<span id="undefined" />

`add_implicit_acquires(schedule, meas_map)`

Return a new schedule with implicit acquires from the measurement mapping replaced by explicit ones.

<Admonition title="Warning" type="caution">
  Since new acquires are being added, Memory Slots will be set to match the qubit index. This may overwrite your specification.
</Admonition>

**Parameters**

*   **schedule** (`Union`\[`Schedule`, `Instruction`]) – Schedule to be aligned.
*   **meas\_map** (`List`\[`List`\[`int`]]) – List of lists of qubits that are measured together.

**Return type**

`Schedule`

**Returns**

A `Schedule` with the additional acquisition instructions.
