# qiskit.pulse.builder.seconds\_to\_samples

<span id="undefined" />

`seconds_to_samples(seconds)`

Obtain the number of samples that will elapse in `seconds` on the active backend.

Rounds down.

**Parameters**

**seconds** (`Union`\[`float`, `ndarray`]) – Time in seconds to convert to samples.

**Return type**

`Union`\[`int`, `ndarray`]

**Returns**

The number of samples for the time to elapse
