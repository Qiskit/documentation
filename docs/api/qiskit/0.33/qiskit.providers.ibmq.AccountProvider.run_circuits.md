# qiskit.providers.ibmq.AccountProvider.run\_circuits

`AccountProvider.run_circuits(circuits, backend_name, shots=None, initial_layout=None, layout_method=None, routing_method=None, translation_method=None, seed_transpiler=None, optimization_level=1, init_qubits=True, rep_delay=None, transpiler_options=None, measurement_error_mitigation=False, use_measure_esp=None, **run_config)`

Execute the input circuit(s) on a backend using the runtime service.

<Admonition title="Note" type="note">
  This method uses the IBM Quantum runtime service which is not available to all accounts.
</Admonition>

**Parameters**

*   **circuits** (`Union`\[`QuantumCircuit`, `List`\[`QuantumCircuit`]]) – Circuit(s) to execute.
*   **backend\_name** (`str`) – Name of the backend to execute circuits on. Transpiler options are automatically grabbed from backend configuration and properties unless otherwise specified.
*   **shots** (`Optional`\[`int`]) – Number of repetitions of each circuit, for sampling. If not specified, the backend default is used.
*   **initial\_layout** (`Union`\[`Layout`, `Dict`, `List`, `None`]) – Initial position of virtual qubits on physical qubits.
*   **layout\_method** (`Optional`\[`str`]) – Name of layout selection pass (‘trivial’, ‘dense’, ‘noise\_adaptive’, ‘sabre’). Sometimes a perfect layout can be available in which case the layout\_method may not run.
*   **routing\_method** (`Optional`\[`str`]) – Name of routing pass (‘basic’, ‘lookahead’, ‘stochastic’, ‘sabre’)
*   **translation\_method** (`Optional`\[`str`]) – Name of translation pass (‘unroller’, ‘translator’, ‘synthesis’)
*   **seed\_transpiler** (`Optional`\[`int`]) – Sets random seed for the stochastic parts of the transpiler.
*   **optimization\_level** (`int`) – How much optimization to perform on the circuits. Higher levels generate more optimized circuits, at the expense of longer transpilation time. If None, level 1 will be chosen as default.
*   **init\_qubits** (`bool`) – Whether to reset the qubits to the ground state for each shot.
*   **rep\_delay** (`Optional`\[`float`]) – Delay between programs in seconds. Only supported on certain backends (`backend.configuration().dynamic_reprate_enabled` ). If supported, `rep_delay` will be used instead of `rep_time` and must be from the range supplied by the backend (`backend.configuration().rep_delay_range`). Default is given by `backend.configuration().default_rep_delay`.
*   **transpiler\_options** (`Optional`\[`dict`]) – Additional transpiler options.
*   **measurement\_error\_mitigation** (`bool`) – Whether to apply measurement error mitigation.
*   **use\_measure\_esp** (`Optional`\[`bool`]) – Whether to use excited state promoted (ESP) readout for measurements which are the final instruction on a qubit. ESP readout can offer higher fidelity than standard measurement sequences. See [here](https://arxiv.org/pdf/2008.08571.pdf).
*   **\*\*run\_config** – Extra arguments used to configure the circuit execution.

**Return type**

`RuntimeJob`

**Returns**

Runtime job.
