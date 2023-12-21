# qiskit.ignis.measurement.SklearnIQDiscriminator.add\_data

`SklearnIQDiscriminator.add_data(result, expected_states, refit=True, schedules=None)`

**Parameters**

*   **result** (`Result`) – a Result containing new data to be used to train the discriminator.
*   **expected\_states** (`List`\[`str`]) – the expected states of the results in result.
*   **refit** (`bool`) – refit the discriminator if True.
*   **schedules** (`Union`\[`List`\[`str`], `List`\[`Schedule`], `None`]) – The schedules or a subset of schedules in cal\_results used to train the discriminator. The user may also pass the name of the schedules instead of the schedules. If schedules is None, then all the schedules in cal\_results are used.
