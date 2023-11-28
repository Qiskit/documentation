<span id="qiskit-providers-ibmq-backendjoblimit" />

# qiskit.providers.ibmq.BackendJobLimit

<span id="undefined" />

`BackendJobLimit(maximum_jobs, running_jobs, **kwargs)`

Job limit for a backend.

Represent the job limit for a backend on a specific provider. This instance is returned by the [`IBMQBackend.job_limit()`](qiskit.providers.ibmq.IBMQBackend#qiskit.providers.ibmq.IBMQBackend.job_limit "qiskit.providers.ibmq.IBMQBackend.job_limit") method.

<span id="undefined" />

### maximum\_jobs

The current number of active jobs on this backend, with this provider.

<span id="undefined" />

### running\_jobs

The current number of active jobs on this backend, with this provider.

BackendJobLimit constructor.

**Parameters**

*   **maximum\_jobs** (`int`) – The maximum number of concurrent jobs this account is allowed to submit to this backend, with this provider.
*   **running\_jobs** (`int`) – The current number of active jobs on this backend, with this provider.
*   **kwargs** (`Any`) – Additional attributes that will be added as instance members.

<span id="undefined" />

`__init__(maximum_jobs, running_jobs, **kwargs)`

BackendJobLimit constructor.

**Parameters**

*   **maximum\_jobs** (`int`) – The maximum number of concurrent jobs this account is allowed to submit to this backend, with this provider.
*   **running\_jobs** (`int`) – The current number of active jobs on this backend, with this provider.
*   **kwargs** (`Any`) – Additional attributes that will be added as instance members.

## Methods

|                                                                                                                                                          |                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| [`__init__`](#qiskit.providers.ibmq.BackendJobLimit.__init__ "qiskit.providers.ibmq.BackendJobLimit.__init__")(maximum\_jobs, running\_jobs, \*\*kwargs) | BackendJobLimit constructor. |
