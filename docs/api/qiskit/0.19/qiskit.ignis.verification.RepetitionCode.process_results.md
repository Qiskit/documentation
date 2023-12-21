---
title: process_results
description: API reference for qiskit.ignis.verification.RepetitionCode.process_results
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.verification.RepetitionCode.process_results
---

# process\_results

<span id="qiskit.ignis.verification.RepetitionCode.process_results" />

`RepetitionCode.process_results(raw_results)`

**Parameters**

**raw\_results** (*dict*) – A dictionary whose keys are logical values, and whose values are standard counts dictionaries, (as obtained from the get\_counts method of a `qiskit.Result` object).

**Returns**

**Dictionary with the same structure as the input, but with**

the bit strings used as keys in the counts dictionaries converted to the form required by the decoder.

**Return type**

results

## Additional information:

The circuits must be executed outside of this class, so that their is full freedom to compile, choose a backend, use a noise model, etc. The results from these executions should then be used to create the input for this method.

