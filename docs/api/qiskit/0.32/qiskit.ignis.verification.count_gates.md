# qiskit.ignis.verification.count\_gates

<span id="undefined" />

`count_gates(qobj, basis, qubits)`

Take a compiled qobj and output the number of gates in each circuit.

**Parameters**

*   **qobj** (*QasmQObj*) – compiled qobj.
*   **basis** (*list*) – gates basis for the qobj.
*   **qubits** (*list*) – qubits to count over.

**Returns**

n x l x m list of number of gates.

> *   n: number of circuits,
> *   l: number of qubits,
> *   m: number of gates in basis.

**Return type**

list

## Additional Information:

nQ gates are counted in each qubit’s set of gates.
