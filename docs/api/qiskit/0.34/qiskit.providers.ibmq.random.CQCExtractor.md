# CQCExtractor

<span id="undefined" />

`CQCExtractor(name, provider, client, methods)`

Bases: `qiskit.providers.ibmq.random.baserandomservice.BaseRandomService`

Class for interfacing with a CQC remote extractor.

There are two extractor methods - Dodis (extractor 1) and Hayashi (extractor 2). These methods can be invoked synchronously or asynchronously. To invoke them synchronously:

```python
random_bits = extractor.run(*cqc_parameters)
```

To invoke them asynchronously:

```python
import numpy as np
extractor1_out = extractor.run_async_ext1(*ext1_parameters).block_until_ready()
extractor2_out = extractor.run_async_ext2(
    ext2_seed=extractor1_out, *ext2_parameters).block_until_ready()
random_bits = np.append(extractor1_out, extractor2_out)
```

Running them asynchronously takes more steps because extractor 2 uses the output of extractor 1 as its seed, so it must wait for extractor 1 to finish first.

BaseRandomService constructor.

**Parameters**

*   **name** (`str`) – Name of the extractor.
*   **provider** (`AccountProvider`) – IBM Quantum Experience account provider.
*   **client** (`RandomClient`) – Client used to communicate with the server.
*   **methods** (`List`) – Service methods.

## Methods

|                                                                                                                                                                                                  |                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- |
| [`retrieve_job`](qiskit.providers.ibmq.random.CQCExtractor.retrieve_job#qiskit.providers.ibmq.random.CQCExtractor.retrieve_job "qiskit.providers.ibmq.random.CQCExtractor.retrieve_job")         | Retrieve a previously submitted job.     |
| [`run`](qiskit.providers.ibmq.random.CQCExtractor.run#qiskit.providers.ibmq.random.CQCExtractor.run "qiskit.providers.ibmq.random.CQCExtractor.run")                                             | Process input data synchronously.        |
| [`run_async_ext1`](qiskit.providers.ibmq.random.CQCExtractor.run_async_ext1#qiskit.providers.ibmq.random.CQCExtractor.run_async_ext1 "qiskit.providers.ibmq.random.CQCExtractor.run_async_ext1") | Run the first extractor asynchronously.  |
| [`run_async_ext2`](qiskit.providers.ibmq.random.CQCExtractor.run_async_ext2#qiskit.providers.ibmq.random.CQCExtractor.run_async_ext2 "qiskit.providers.ibmq.random.CQCExtractor.run_async_ext2") | Run the second extractor asynchronously. |
