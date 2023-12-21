# qiskit.providers.ibmq.runtime.ProgramBackend.run

`abstract ProgramBackend.run(circuits, timeout=None, **run_config)`

Run on the backend.

Runtime circuit execution is synchronous, and control will not go back until the execution finishes. You can use the timeout parameter to set a timeout value to wait for the execution to finish. Note that if the execution times out, circuit execution results will not be available.

**Parameters**

*   **circuits** (`Union`\[`QasmQobj`, `PulseQobj`, `QuantumCircuit`, `Schedule`, `List`\[`Union`\[`QuantumCircuit`, `Schedule`]]]) – An individual or a list of `QuantumCircuit` or [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") objects to run on the backend. A [`QasmQobj`](qiskit.qobj.QasmQobj#qiskit.qobj.QasmQobj "qiskit.qobj.QasmQobj") or a [`PulseQobj`](qiskit.qobj.PulseQobj#qiskit.qobj.PulseQobj "qiskit.qobj.PulseQobj") object is also supported but is deprecated.
*   **timeout** (`Optional`\[`int`]) – Seconds to wait for circuit execution to finish.
*   **\*\*run\_config** – Extra arguments used to configure the run.

**Return type**

`JobV1`

**Returns**

The job to be executed.

**Raises**

*   [**IBMQBackendApiError**](qiskit.providers.ibmq.IBMQBackendApiError#qiskit.providers.ibmq.IBMQBackendApiError "qiskit.providers.ibmq.IBMQBackendApiError") – If an unexpected error occurred while submitting the job.
*   [**IBMQBackendApiProtocolError**](qiskit.providers.ibmq.IBMQBackendApiProtocolError#qiskit.providers.ibmq.IBMQBackendApiProtocolError "qiskit.providers.ibmq.IBMQBackendApiProtocolError") – If an unexpected value received from the server.
*   [**IBMQBackendValueError**](qiskit.providers.ibmq.IBMQBackendValueError#qiskit.providers.ibmq.IBMQBackendValueError "qiskit.providers.ibmq.IBMQBackendValueError") – If an input parameter value is not valid.
