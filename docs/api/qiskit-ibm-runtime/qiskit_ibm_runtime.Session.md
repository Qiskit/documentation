---
title: Session
description: API reference for qiskit_ibm_runtime.Session
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_runtime.Session
---

# Session[¶](#session "Link to this heading")

<span id="qiskit_ibm_runtime.Session" />

`Session(service=None, backend=None, max_time=None)¶`

Class for creating a flexible Qiskit Runtime session.

A Qiskit Runtime `session` allows you to group a collection of iterative calls to the quantum computer. A session is started when the first job within the session is started. Subsequent jobs within the session are prioritized by the scheduler. Data used within a session, such as transpiled circuits, is also cached to avoid unnecessary overhead.

You can open a Qiskit Runtime session using this `Session` class and submit jobs to one or more primitives.

For example:

```python
from qiskit.test.reference_circuits import ReferenceCircuits
from qiskit_ibm_runtime import Sampler, Session, Options

options = Options(optimization_level=3)

with Session(backend="ibmq_qasm_simulator") as session:
    sampler = Sampler(session=session, options=options)
    job = sampler.run(ReferenceCircuits.bell())
    print(f"Sampler job ID: {job.job_id()}")
    print(f"Sampler job result: {job.result()}")
    # Close the session only if all jobs are finished and
    # you don't need to run more in the session.
    session.close()
```

Session constructor.

**Parameters**

*   **service** (`Optional`\[[`QiskitRuntimeService`](qiskit_ibm_runtime.QiskitRuntimeService "qiskit_ibm_runtime.qiskit_runtime_service.QiskitRuntimeService")]) – Optional instance of the `QiskitRuntimeService` class. If `None`, the service associated with the backend, if known, is used. Otherwise `QiskitRuntimeService()` is used to initialize your default saved account.
*   **backend** (`Union`\[`str`, [`IBMBackend`](qiskit_ibm_runtime.IBMBackend "qiskit_ibm_runtime.ibm_backend.IBMBackend"), `None`]) – Optional instance of [`qiskit_ibm_runtime.IBMBackend`](qiskit_ibm_runtime.IBMBackend "qiskit_ibm_runtime.IBMBackend") class or string name of backend. An instance of `qiskit_ibm_provider.IBMBackend` will not work. If not specified, a backend will be selected automatically (IBM Cloud channel only).
*   **max\_time** (`Union`\[`int`, `str`, `None`]) – (EXPERIMENTAL setting, can break between releases without warning) Maximum amount of time, a runtime session can be open before being forcibly closed. Can be specified as seconds (int) or a string like “2h 30m 40s”. This value must be less than the [system imposed maximum](https://qiskit.org/documentation/partners/qiskit_ibm_runtime/faqs/max_execution_time.html).

**Raises**

**ValueError** – If an input value is invalid.

## Attributes

<span id="session-service" />

### service

<span id="qiskit_ibm_runtime.Session.service" />

`QiskitRuntimeService`

Return service associated with this session.

**Return type**

[`QiskitRuntimeService`](qiskit_ibm_runtime.QiskitRuntimeService "qiskit_ibm_runtime.qiskit_runtime_service.QiskitRuntimeService")

**Returns**

[`qiskit_ibm_runtime.QiskitRuntimeService`](qiskit_ibm_runtime.QiskitRuntimeService "qiskit_ibm_runtime.QiskitRuntimeService") associated with this session.

<span id="session-session-id" />

### session\_id

<span id="qiskit_ibm_runtime.Session.session_id" />

`str`

Return the session ID.

**Return type**

`str`

**Returns**

Session ID. None until a job runs in the session.

## Methods

<span id="session-backend" />

### backend

<span id="qiskit_ibm_runtime.Session.backend" />

`Session.backend()¶`

Return backend for this session.

**Return type**

`Optional`\[`str`]

**Returns**

Backend for this session. None if unknown.

<span id="session-close" />

### close

<span id="qiskit_ibm_runtime.Session.close" />

`Session.close()¶`

Close the session.

**Return type**

`None`

<span id="session-from-id" />

### from\_id

<span id="qiskit_ibm_runtime.Session.from_id" />

`classmethod Session.from_id(session_id, service=None, backend=None, max_time=None)¶`

Construct a Session object with a given session\_id

**Return type**

[`Session`](qiskit_ibm_runtime.Session "qiskit_ibm_runtime.session.Session")

<span id="session-run" />

### run

<span id="qiskit_ibm_runtime.Session.run" />

`Session.run(program_id, inputs, options=None, callback=None, result_decoder=None)¶`

Run a program in the session.

**Parameters**

*   **program\_id** (`str`) – Program ID.
*   **inputs** (`Union`\[`Dict`, [`ParameterNamespace`](qiskit_ibm_runtime.ParameterNamespace "qiskit_ibm_runtime.runtime_program.ParameterNamespace")]) – Program input parameters. These input values are passed to the runtime program.
*   **options** (`Optional`\[`Dict`]) – Runtime options that control the execution environment. See [`qiskit_ibm_runtime.RuntimeOptions`](qiskit_ibm_runtime.RuntimeOptions "qiskit_ibm_runtime.RuntimeOptions") for all available options.
*   **callback** (`Optional`\[`Callable`]) – Callback function to be invoked for any interim results and final result.

**Return type**

[`RuntimeJob`](qiskit_ibm_runtime.RuntimeJob "qiskit_ibm_runtime.runtime_job.RuntimeJob")

**Returns**

Submitted job.

