---
title: add_data
description: API reference for qiskit.ignis.measurement.IQDiscriminationFitter.add_data
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.measurement.IQDiscriminationFitter.add_data
---

# add\_data

<span id="qiskit.ignis.measurement.IQDiscriminationFitter.add_data" />

`IQDiscriminationFitter.add_data(result, expected_states, refit=True, schedules=None)`

**Parameters**

*   **result** ([`Result`](qiskit.result.Result "qiskit.result.result.Result")) – a Result containing new data to be used to train the discriminator.
*   **expected\_states** (`List`\[`str`]) – the expected states of the results in result.
*   **refit** (`bool`) – refit the discriminator if True.
*   **schedules** (`Union`\[`List`\[`str`], `List`\[[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")], `None`]) – The schedules or a subset of schedules in cal\_results used to train the discriminator. The user may also pass the name of the schedules instead of the schedules. If schedules is None, then all the schedules in cal\_results are used.

