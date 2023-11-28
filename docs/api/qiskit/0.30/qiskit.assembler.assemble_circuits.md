# qiskit.assembler.assemble\_circuits[¶](#qiskit-assembler-assemble-circuits "Permalink to this headline")

<span id="undefined" />

`assemble_circuits(circuits, run_config, qobj_id, qobj_header)`

Assembles a list of circuits into a qobj that can be run on the backend.

**Parameters**

*   **circuits** (`List`\[`QuantumCircuit`]) – circuit(s) to assemble
*   **run\_config** (`RunConfig`) – configuration of the runtime environment
*   **qobj\_id** (`int`) – identifier for the generated qobj
*   **qobj\_header** (`QobjHeader`) – header to pass to the results

**Return type**

`QasmQobj`

**Returns**

The qobj to be run on the backends
