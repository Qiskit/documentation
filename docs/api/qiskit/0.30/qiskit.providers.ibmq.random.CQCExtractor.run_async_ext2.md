# qiskit.providers.ibmq.random.CQCExtractor.run\_async\_ext2

`CQCExtractor.run_async_ext2(ext2_seed, ext2_seed_num_bits, ext2_wsr_multiplier, ext2_wsr_generator=None)`

Run the second extractor asynchronously.

**Parameters**

*   **ext2\_seed** (`List`\[`int`]) – Seed used for extractor 2, such as the output of extractor 1.
*   **ext2\_seed\_num\_bits** (`int`) – Number of bits in the seed, for extractor 2.
*   **ext2\_wsr\_multiplier** (`int`) – WSR multiplier, for extractor 2. The number of bits used by extractor 2 is ext2\_seed\_num\_bits\*ext2\_wsr\_multiplier.
*   **ext2\_wsr\_generator** (`Optional`\[`Callable`]) – WSR generator used for extractor 2. It must take the number of bits as the input and a list of random bits (0s and 1s) as the output. If `None`, :func:`generate_wsr` is used.

**Return type**

`CQCExtractorJob`

**Returns**

An instance of `CQCExtractorJob` which can be used to retrieve the results later.

**Raises**

**ValueError** – If an invalid argument values are specified.
