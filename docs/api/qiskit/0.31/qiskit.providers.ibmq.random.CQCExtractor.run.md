# qiskit.providers.ibmq.random.CQCExtractor.run

`CQCExtractor.run(ext1_input_num_bits, ext1_output_num_bits, ext1_raw_bytes, ext1_wsr_bytes, ext2_seed_num_bits, ext2_wsr_multiplier, ext2_wsr_generator=None)`

Process input data synchronously.

**Parameters**

*   **ext1\_input\_num\_bits** (`int`) – Number of input bits, for extractor 1.
*   **ext1\_output\_num\_bits** (`int`) – Number of output bits, for extractor 1.
*   **ext1\_raw\_bytes** (`bytes`) – Initial random numbers, in bytes, for extractor 1.
*   **ext1\_wsr\_bytes** (`bytes`) – Initial WSRs, in bytes, for extractor 1.
*   **ext2\_seed\_num\_bits** (`int`) – Number of bits in the seed, for extractor 2.
*   **ext2\_wsr\_multiplier** (`int`) – WSR multiplier, for extractor 2. The number of bits used by extractor 2 is ext2\_seed\_num\_bits\*ext2\_wsr\_multiplier.
*   **ext2\_wsr\_generator** (`Optional`\[`Callable`]) – WSR generator used for extractor 2. It must take the number of bits as the input and a list of random bits (0s and 1s) as the output. If `None`, :func:`generate_wsr` is used.

**Return type**

`List`\[`int`]

**Returns**

An instance of `CQCExtractorJob` which can be used to retrieve the results later.
