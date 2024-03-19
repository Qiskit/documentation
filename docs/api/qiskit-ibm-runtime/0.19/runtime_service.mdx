---
title: qiskit_ibm_runtime
description: API reference for qiskit_ibm_runtime
in_page_toc_min_heading_level: 2
python_api_type: module
python_api_name: qiskit_ibm_runtime
---

<span id="qiskit-runtime-qiskit-ibm-runtime" />

<span id="module-qiskit_ibm_runtime" />

# Qiskit Runtime

<span id="module-qiskit_ibm_runtime" />

`qiskit_ibm_runtime`

Modules related to Qiskit Runtime IBM Client.

Qiskit Runtime is a new architecture that streamlines computations requiring many iterations. These experiments will execute significantly faster within its improved hybrid quantum/classical process.

## Primitives and sessions

Qiskit Runtime has two predefined primitives: `Sampler` and `Estimator`. These primitives provide a simplified interface for performing foundational quantum computing tasks while also accounting for the latest developments in quantum hardware and software.

Qiskit Runtime also has the concept of a session. Jobs submitted within a session are prioritized by the scheduler. A session allows you to make iterative calls to the quantum computer more efficiently.

Below is an example of using primitives within a session:

```python
from qiskit_ibm_runtime import QiskitRuntimeService, Session, Sampler, Estimator, Options
from qiskit.circuit.library import RealAmplitudes
from qiskit.circuit import QuantumCircuit, QuantumRegister, ClassicalRegister
from qiskit.quantum_info import SparsePauliOp

# Initialize account.
service = QiskitRuntimeService()

# Set options, which can be overwritten at job level.
options = Options(optimization_level=3)

# Prepare inputs.
psi = RealAmplitudes(num_qubits=2, reps=2)
H1 = SparsePauliOp.from_list([("II", 1), ("IZ", 2), ("XI", 3)])
theta = [0, 1, 1, 2, 3, 5]
# Bell Circuit
qr = QuantumRegister(2, name="qr")
cr = ClassicalRegister(2, name="qc")
qc = QuantumCircuit(qr, cr, name="bell")
qc.h(qr[0])
qc.cx(qr[0], qr[1])
qc.measure(qr, cr)

with Session(service=service, backend="ibmq_qasm_simulator") as session:
    # Submit a request to the Sampler primitive within the session.
    sampler = Sampler(session=session, options=options)
    job = sampler.run(circuits=qc)
    print(f"Sampler results: {job.result()}")

    # Submit a request to the Estimator primitive within the session.
    estimator = Estimator(session=session, options=options)
    job = estimator.run(
        circuits=[psi], observables=[H1], parameter_values=[theta]
    )
    print(f"Estimator results: {job.result()}")
```

## Backend data

[`QiskitRuntimeService`](qiskit_ibm_runtime.QiskitRuntimeService "qiskit_ibm_runtime.QiskitRuntimeService") also has methods, such as `backend()`, `backends()`, and `least_busy()`, that allow you to query for a target backend to use. These methods return one or more [`IBMBackend`](qiskit_ibm_runtime.IBMBackend "qiskit_ibm_runtime.IBMBackend") instances that contains methods and attributes describing the backend.

## Supplementary Information

### Account initialization

You need to initialize your account before you can start using the Qiskit Runtime service. This is done by initializing a [`QiskitRuntimeService`](qiskit_ibm_runtime.QiskitRuntimeService "qiskit_ibm_runtime.QiskitRuntimeService") instance with your account credentials. If you don’t want to pass in the credentials each time, you can use the [`QiskitRuntimeService.save_account()`](qiskit_ibm_runtime.QiskitRuntimeService#save_account "qiskit_ibm_runtime.QiskitRuntimeService.save_account") method to save the credentials on disk.

Qiskit Runtime is available on both IBM Cloud and IBM Quantum, and you can specify `channel="ibm_cloud"` for IBM Cloud and `channel="ibm_quantum"` for IBM Quantum. The default is IBM Cloud.

### Runtime Jobs

When you use the `run()` method of the [`Sampler`](qiskit_ibm_runtime.Sampler "qiskit_ibm_runtime.Sampler") or [`Estimator`](qiskit_ibm_runtime.Estimator "qiskit_ibm_runtime.Estimator") to invoke the primitive, a [`RuntimeJob`](qiskit_ibm_runtime.RuntimeJob "qiskit_ibm_runtime.RuntimeJob") instance is returned. This class has all the basic job methods, such as [`RuntimeJob.status()`](qiskit_ibm_runtime.RuntimeJob#status "qiskit_ibm_runtime.RuntimeJob.status"), [`RuntimeJob.result()`](qiskit_ibm_runtime.RuntimeJob#result "qiskit_ibm_runtime.RuntimeJob.result"), and [`RuntimeJob.cancel()`](qiskit_ibm_runtime.RuntimeJob#cancel "qiskit_ibm_runtime.RuntimeJob.cancel").

### Logging

`qiskit-ibm-runtime` uses the `qiskit_ibm_runtime` logger.

Two environment variables can be used to control the logging:

> *   **`QISKIT_IBM_RUNTIME_LOG_LEVEL`: Specifies the log level to use.**
>
>     If an invalid level is set, the log level defaults to `WARNING`. The valid log levels are `DEBUG`, `INFO`, `WARNING`, `ERROR`, and `CRITICAL` (case-insensitive). If the environment variable is not set, then the parent logger’s level is used, which also defaults to `WARNING`.
>
> *   **`QISKIT_IBM_RUNTIME_LOG_FILE`: Specifies the name of the log file to use. If specified,**
>
>     messages will be logged to the file only. Otherwise messages will be logged to the standard error (usually the screen).

For more advanced use, you can modify the logger itself. For example, to manually set the level to `WARNING`:

```python
import logging
logging.getLogger('qiskit_ibm_runtime').setLevel(logging.WARNING)
```

### Interim and final results

Some runtime primitives provide interim results that inform you about the progress of your job. You can choose to stream the interim results and final result when you run the program by passing in the `callback` parameter, or at a later time using the [`RuntimeJob.stream_results()`](qiskit_ibm_runtime.RuntimeJob#stream_results "qiskit_ibm_runtime.RuntimeJob.stream_results") method. For example:

```python
from qiskit_ibm_runtime import QiskitRuntimeService, Sampler
from qiskit.circuit import QuantumCircuit, QuantumRegister, ClassicalRegister

service = QiskitRuntimeService()
backend = service.backend("ibmq_qasm_simulator")

# Bell Circuit
qr = QuantumRegister(2, name="qr")
cr = ClassicalRegister(2, name="qc")
qc = QuantumCircuit(qr, cr, name="bell")
qc.h(qr[0])
qc.cx(qr[0], qr[1])
qc.measure(qr, cr)

def result_callback(job_id, result):
    print(result)

# Stream results as soon as the job starts running.
job = Sampler(backend).run(qc, callback=result_callback)
print(job.result())
```

## Classes

|                                                                                                                                          |                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`QiskitRuntimeService`](qiskit_ibm_runtime.QiskitRuntimeService "qiskit_ibm_runtime.QiskitRuntimeService")(\[channel, token, url, ...]) | Class for interacting with the Qiskit Runtime service.                 |
| [`Estimator`](qiskit_ibm_runtime.Estimator "qiskit_ibm_runtime.Estimator")(\[backend, session, options])                                 | Class for interacting with Qiskit Runtime Estimator primitive service. |
| [`Sampler`](qiskit_ibm_runtime.Sampler "qiskit_ibm_runtime.Sampler")(\[backend, session, options])                                       | Class for interacting with Qiskit Runtime Sampler primitive service.   |
| [`Session`](qiskit_ibm_runtime.Session "qiskit_ibm_runtime.Session")(\[service, backend, max\_time])                                     | Class for creating a flexible Qiskit Runtime session.                  |
| [`IBMBackend`](qiskit_ibm_runtime.IBMBackend "qiskit_ibm_runtime.IBMBackend")(configuration, service, api\_client)                       | Backend class interfacing with an IBM Quantum backend.                 |
| [`RuntimeJob`](qiskit_ibm_runtime.RuntimeJob "qiskit_ibm_runtime.RuntimeJob")(backend, api\_client, ...\[, ...])                         | Representation of a runtime program execution.                         |
| [`RuntimeOptions`](qiskit_ibm_runtime.RuntimeOptions "qiskit_ibm_runtime.RuntimeOptions")(\[backend, image, log\_level, ...])            | Class for representing generic runtime execution options.              |
| [`RuntimeEncoder`](qiskit_ibm_runtime.RuntimeEncoder "qiskit_ibm_runtime.RuntimeEncoder")(\*\[, skipkeys, ensure\_ascii, ...])           | JSON Encoder used by runtime service.                                  |
| [`RuntimeDecoder`](qiskit_ibm_runtime.RuntimeDecoder "qiskit_ibm_runtime.RuntimeDecoder")(\*args, \*\*kwargs)                            | JSON Decoder used by runtime service.                                  |

