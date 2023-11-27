# IBMRuntimeService[¶](#ibmruntimeservice "Permalink to this headline")

<span id="undefined" />

`IBMRuntimeService(provider)`

Bases: `object`

Class for interacting with the Qiskit Runtime service.

Qiskit Runtime is a new architecture offered by IBM Quantum that streamlines computations requiring many iterations. These experiments will execute significantly faster within its improved hybrid quantum/classical process.

The Qiskit Runtime Service allows authorized users to upload their Qiskit quantum programs. A Qiskit quantum program, also called a runtime program, is a piece of Python code and its metadata that takes certain inputs, performs quantum and maybe classical processing, and returns the results. The same or other authorized users can invoke these quantum programs by simply passing in parameters.

A sample workflow of using the runtime service:

```python
from qiskit import IBMQ, QuantumCircuit
from qiskit.providers.ibmq import RunnerResult

provider = IBMQ.load_account()
backend = provider.backend.ibmq_qasm_simulator

# List all available programs.
provider.runtime.pprint_programs()

# Create a circuit.
qc = QuantumCircuit(2, 2)
qc.h(0)
qc.cx(0, 1)
qc.measure_all()

# Set the "circuit-runner" program parameters
params = provider.runtime.program(program_id="circuit-runner").parameters()
params.circuits = qc
params.measurement_error_mitigation = True

# Configure backend options
options = {'backend_name': backend.name()}

# Execute the circuit using the "circuit-runner" program.
job = provider.runtime.run(program_id="circuit-runner",
                           options=options,
                           inputs=params)

# Get runtime job result.
result = job.result(decoder=RunnerResult)
```

If the program has any interim results, you can use the `callback` parameter of the [`run()`](qiskit.providers.ibmq.runtime.IBMRuntimeService.run#qiskit.providers.ibmq.runtime.IBMRuntimeService.run "qiskit.providers.ibmq.runtime.IBMRuntimeService.run") method to stream the interim results. Alternatively, you can use the [`RuntimeJob.stream_results()`](qiskit.providers.ibmq.runtime.RuntimeJob.stream_results#qiskit.providers.ibmq.runtime.RuntimeJob.stream_results "qiskit.providers.ibmq.runtime.RuntimeJob.stream_results") method to stream the results at a later time, but before the job finishes.

The [`run()`](qiskit.providers.ibmq.runtime.IBMRuntimeService.run#qiskit.providers.ibmq.runtime.IBMRuntimeService.run "qiskit.providers.ibmq.runtime.IBMRuntimeService.run") method returns a [`RuntimeJob`](qiskit.providers.ibmq.runtime.RuntimeJob#qiskit.providers.ibmq.runtime.RuntimeJob "qiskit.providers.ibmq.runtime.RuntimeJob") object. You can use its methods to perform tasks like checking job status, getting job result, and canceling job.

IBMRuntimeService constructor.

**Parameters**

**provider** (`AccountProvider`) – IBM Quantum account provider.

## Methods

|                                                                                                                                                                                                                                                    |                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [`delete_job`](qiskit.providers.ibmq.runtime.IBMRuntimeService.delete_job#qiskit.providers.ibmq.runtime.IBMRuntimeService.delete_job "qiskit.providers.ibmq.runtime.IBMRuntimeService.delete_job")                                                 | Delete a runtime job.                                      |
| [`delete_program`](qiskit.providers.ibmq.runtime.IBMRuntimeService.delete_program#qiskit.providers.ibmq.runtime.IBMRuntimeService.delete_program "qiskit.providers.ibmq.runtime.IBMRuntimeService.delete_program")                                 | Delete a runtime program.                                  |
| [`job`](qiskit.providers.ibmq.runtime.IBMRuntimeService.job#qiskit.providers.ibmq.runtime.IBMRuntimeService.job "qiskit.providers.ibmq.runtime.IBMRuntimeService.job")                                                                             | Retrieve a runtime job.                                    |
| [`jobs`](qiskit.providers.ibmq.runtime.IBMRuntimeService.jobs#qiskit.providers.ibmq.runtime.IBMRuntimeService.jobs "qiskit.providers.ibmq.runtime.IBMRuntimeService.jobs")                                                                         | Retrieve all runtime jobs, subject to optional filtering.  |
| [`logout`](qiskit.providers.ibmq.runtime.IBMRuntimeService.logout#qiskit.providers.ibmq.runtime.IBMRuntimeService.logout "qiskit.providers.ibmq.runtime.IBMRuntimeService.logout")                                                                 | Clears authorization cache on the server.                  |
| [`pprint_programs`](qiskit.providers.ibmq.runtime.IBMRuntimeService.pprint_programs#qiskit.providers.ibmq.runtime.IBMRuntimeService.pprint_programs "qiskit.providers.ibmq.runtime.IBMRuntimeService.pprint_programs")                             | Pretty print information about available runtime programs. |
| [`program`](qiskit.providers.ibmq.runtime.IBMRuntimeService.program#qiskit.providers.ibmq.runtime.IBMRuntimeService.program "qiskit.providers.ibmq.runtime.IBMRuntimeService.program")                                                             | Retrieve a runtime program.                                |
| [`programs`](qiskit.providers.ibmq.runtime.IBMRuntimeService.programs#qiskit.providers.ibmq.runtime.IBMRuntimeService.programs "qiskit.providers.ibmq.runtime.IBMRuntimeService.programs")                                                         | Return available runtime programs.                         |
| [`run`](qiskit.providers.ibmq.runtime.IBMRuntimeService.run#qiskit.providers.ibmq.runtime.IBMRuntimeService.run "qiskit.providers.ibmq.runtime.IBMRuntimeService.run")                                                                             | Execute the runtime program.                               |
| [`set_program_visibility`](qiskit.providers.ibmq.runtime.IBMRuntimeService.set_program_visibility#qiskit.providers.ibmq.runtime.IBMRuntimeService.set_program_visibility "qiskit.providers.ibmq.runtime.IBMRuntimeService.set_program_visibility") | Sets a program’s visibility.                               |
| [`update_program`](qiskit.providers.ibmq.runtime.IBMRuntimeService.update_program#qiskit.providers.ibmq.runtime.IBMRuntimeService.update_program "qiskit.providers.ibmq.runtime.IBMRuntimeService.update_program")                                 | Update a runtime program.                                  |
| [`upload_program`](qiskit.providers.ibmq.runtime.IBMRuntimeService.upload_program#qiskit.providers.ibmq.runtime.IBMRuntimeService.upload_program "qiskit.providers.ibmq.runtime.IBMRuntimeService.upload_program")                                 | Upload a runtime program.                                  |
