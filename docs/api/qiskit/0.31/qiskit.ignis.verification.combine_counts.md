# qiskit.ignis.verification.combine\_counts[¶](#qiskit-ignis-verification-combine-counts "Permalink to this headline")

<span id="undefined" />

`combine_counts(counts1, counts2)`

Combine two counts dictionaries. :type counts1: `Dict`\[`str`, `int`] :param counts1: One of the count dictionaries to combine. :type counts2: `Dict`\[`str`, `int`] :param counts2: One of the count dictionaries to combine.

**Return type**

`Dict`\[`str`, `int`]

**Returns**

A dict containing the **sum** of entries in counts1 and counts2 where a nonexisting entry is treated as 0

## Example

```python
>>> counts1 = {'00': 3, '01': 5}
>>> counts2 = {'00': 4, '10': 7}
>>> combine_counts(counts1, counts2)
{'00': 7, '01': 5, '10': 7}
```
