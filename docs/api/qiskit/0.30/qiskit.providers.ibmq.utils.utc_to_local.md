# qiskit.providers.ibmq.utils.utc\_to\_local[¶](#qiskit-providers-ibmq-utils-utc-to-local "Permalink to this headline")

<span id="undefined" />

`utc_to_local(utc_dt)`

Convert a UTC `datetime` object or string to a local timezone `datetime`.

**Parameters**

**utc\_dt** (`Union`\[`datetime`, `str`]) – Input UTC datetime or string.

**Return type**

`datetime`

**Returns**

A `datetime` with the local timezone.

**Raises**

**TypeError** – If the input parameter value is not valid.
