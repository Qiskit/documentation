# qiskit.providers.ibmq.random.CQCExtractor.run\_async\_ext1

`CQCExtractor.run_async_ext1(ext1_input_num_bits, ext1_output_num_bits, ext1_raw_bytes, ext1_wsr_bytes)`

Run the first extractor asynchronously.

**Parameters**

*   **ext1\_input\_num\_bits** (`int`) – Number of input bits, for extractor 1.
*   **ext1\_output\_num\_bits** (`int`) – Number of output bits, for extractor 1.
*   **ext1\_raw\_bytes** (`bytes`) – Initial random numbers, in bytes, for extractor 1.
*   **ext1\_wsr\_bytes** (`bytes`) – Initial WSRs, in bytes, for extractor 1.

**Return type**

`CQCExtractorJob`

**Returns**

An instance of `CQCExtractorJob` which can be used to retrieve the results later.

**Raises**

**ValueError** – If an invalid argument values are specified.
