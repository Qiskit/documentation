# qiskit.providers.ibmq.runtime.RuntimeEncoder.iterencode

`RuntimeEncoder.iterencode(o, _one_shot=False)`

Encode the given object and yield each string representation as available.

For example:

```python
for chunk in JSONEncoder().iterencode(bigobject):
    mysocket.write(chunk)
```
