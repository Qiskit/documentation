---
title: Result
description: API reference for qiskit.result.Result
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.result.Result
---

# Result

<span id="qiskit.result.Result" />

`Result(backend_name, backend_version, qobj_id, job_id, success, results, **kwargs)`

Model for Results.

Please note that this class only describes the required fields. For the full description of the model, please check `ResultSchema`.

<span id="qiskit.result.Result.backend_name" />

### backend\_name

backend name.

**Type**

str

<span id="qiskit.result.Result.backend_version" />

### backend\_version

backend version, in the form X.Y.Z.

**Type**

str

<span id="qiskit.result.Result.qobj_id" />

### qobj\_id

user-generated Qobj id.

**Type**

str

<span id="qiskit.result.Result.job_id" />

### job\_id

unique execution id from the backend.

**Type**

str

<span id="qiskit.result.Result.success" />

### success

True if complete input qobj executed correctly. (Implies each experiment success)

**Type**

bool

<span id="qiskit.result.Result.results" />

### results

corresponding results for array of experiments of the input qobj

**Type**

list\[ExperimentResult]

BaseModel initializer.

<Admonition title="Note" type="note">
  The `validate` argument is used for controlling the behavior of the schema binding, and will not be present on the created object.
</Admonition>

## Attributes

|                                                                                                      |   |
| ---------------------------------------------------------------------------------------------------- | - |
| [`Result.schema`](qiskit.result.Result.schema "qiskit.result.Result.schema")                         |   |
| [`Result.shallow_schema`](qiskit.result.Result.shallow_schema "qiskit.result.Result.shallow_schema") |   |

## Methods

|                                                                                                                                  |                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`Result.data`](qiskit.result.Result.data "qiskit.result.Result.data")(\[experiment])                                            | Get the raw data for an experiment.                                                                                                                                                      |
| [`Result.from_dict`](qiskit.result.Result.from_dict "qiskit.result.Result.from_dict")(dict\_)                                    | Deserialize a dict of simple types into an instance of this class.                                                                                                                       |
| [`Result.get_counts`](qiskit.result.Result.get_counts "qiskit.result.Result.get_counts")(\[experiment])                          | Get the histogram data of an experiment.                                                                                                                                                 |
| [`Result.get_memory`](qiskit.result.Result.get_memory "qiskit.result.Result.get_memory")(\[experiment])                          | Get the sequence of memory states (readouts) for each shot The data from the experiment is a list of format \[‘00000’, ‘01000’, ‘10100’, ‘10100’, ‘11101’, ‘11100’, ‘00101’, …, ‘01010’] |
| [`Result.get_statevector`](qiskit.result.Result.get_statevector "qiskit.result.Result.get_statevector")(\[experiment, decimals]) | Get the final statevector of an experiment.                                                                                                                                              |
| [`Result.get_unitary`](qiskit.result.Result.get_unitary "qiskit.result.Result.get_unitary")(\[experiment, decimals])             | Get the final unitary of an experiment.                                                                                                                                                  |
| [`Result.to_dict`](qiskit.result.Result.to_dict "qiskit.result.Result.to_dict")()                                                | Serialize the model into a Python dict of simple types.                                                                                                                                  |

