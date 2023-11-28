# RuntimeOptions[¶](#runtimeoptions "Permalink to this headline")

<span id="undefined" />

`RuntimeOptions(backend_name=None, image=None, log_level=None)`

Bases: `object`

Class for representing runtime execution options.

**Parameters**

*   **backend\_name** (`Optional`\[`str`]) – target backend to run on. This is required.
*   **image** (`Optional`\[`str`]) – the runtime image used to execute the program, specified in the form of `image_name:tag`. Not all accounts are authorized to select a different image.
*   **log\_level** (`Optional`\[`str`]) – logging level to set in the execution environment. The valid log levels are: `DEBUG`, `INFO`, `WARNING`, `ERROR`, and `CRITICAL`. The default level is `WARNING`.

## Methods

|                                                                                                                                                                                   |                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| [`validate`](qiskit.providers.ibmq.runtime.RuntimeOptions.validate#qiskit.providers.ibmq.runtime.RuntimeOptions.validate "qiskit.providers.ibmq.runtime.RuntimeOptions.validate") | Validate options. |

## Attributes

<span id="undefined" />

### backend\_name

`str`

`= None`

<span id="undefined" />

### image

`Optional[str]`

`= None`

<span id="undefined" />

### log\_level

`Optional[str]`

`= None`
