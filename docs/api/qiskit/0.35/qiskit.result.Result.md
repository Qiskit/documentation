# Result[¶](#result "Permalink to this headline")

<span id="undefined" />

`Result(backend_name, backend_version, qobj_id, job_id, success, results, date=None, status=None, header=None, **kwargs)`

Bases: `object`

Model for Results.

<span id="undefined" />

### backend\_name

backend name.

**Type**

str

<span id="undefined" />

### backend\_version

backend version, in the form X.Y.Z.

**Type**

str

<span id="undefined" />

### qobj\_id

user-generated Qobj id.

**Type**

str

<span id="undefined" />

### job\_id

unique execution id from the backend.

**Type**

str

<span id="undefined" />

### success

True if complete input qobj executed correctly. (Implies each experiment success)

**Type**

bool

<span id="undefined" />

### results

corresponding results for array of experiments of the input qobj

**Type**

list\[ExperimentResult]

## Methods

|                                                                                                                                       |                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`data`](qiskit.result.Result.data#qiskit.result.Result.data "qiskit.result.Result.data")                                             | Get the raw data for an experiment.                                                                                                                                                      |
| [`from_dict`](qiskit.result.Result.from_dict#qiskit.result.Result.from_dict "qiskit.result.Result.from_dict")                         | Create a new ExperimentResultData object from a dictionary.                                                                                                                              |
| [`get_counts`](qiskit.result.Result.get_counts#qiskit.result.Result.get_counts "qiskit.result.Result.get_counts")                     | Get the histogram data of an experiment.                                                                                                                                                 |
| [`get_memory`](qiskit.result.Result.get_memory#qiskit.result.Result.get_memory "qiskit.result.Result.get_memory")                     | Get the sequence of memory states (readouts) for each shot The data from the experiment is a list of format \[‘00000’, ‘01000’, ‘10100’, ‘10100’, ‘11101’, ‘11100’, ‘00101’, …, ‘01010’] |
| [`get_statevector`](qiskit.result.Result.get_statevector#qiskit.result.Result.get_statevector "qiskit.result.Result.get_statevector") | Get the final statevector of an experiment.                                                                                                                                              |
| [`get_unitary`](qiskit.result.Result.get_unitary#qiskit.result.Result.get_unitary "qiskit.result.Result.get_unitary")                 | Get the final unitary of an experiment.                                                                                                                                                  |
| [`to_dict`](qiskit.result.Result.to_dict#qiskit.result.Result.to_dict "qiskit.result.Result.to_dict")                                 | Return a dictionary format representation of the Result                                                                                                                                  |
