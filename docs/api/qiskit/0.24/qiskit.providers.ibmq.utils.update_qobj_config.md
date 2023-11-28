<span id="qiskit-providers-ibmq-utils-update-qobj-config" />

# qiskit.providers.ibmq.utils.update\_qobj\_config

<span id="undefined" />

`update_qobj_config(qobj, backend_options=None, noise_model=None)`

Update a `Qobj` configuration from backend options and a noise model.

**Parameters**

*   **qobj** (`Union`\[`QasmQobj`, `PulseQobj`]) – Description of the job.
*   **backend\_options** (`Optional`\[`Dict`]) – Backend options.
*   **noise\_model** (`Optional`\[`Any`]) – Noise model.

**Return type**

`Union`\[`QasmQobj`, `PulseQobj`]

**Returns**

The updated `Qobj`.
