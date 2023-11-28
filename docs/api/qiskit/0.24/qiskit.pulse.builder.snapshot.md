<span id="qiskit-pulse-builder-snapshot" />

# qiskit.pulse.builder.snapshot

<span id="undefined" />

`snapshot(label, snapshot_type='statevector')`

Simulator snapshot.

Examples:

```python
from qiskit import pulse

with pulse.build() as pulse_prog:
    pulse.snapshot('first', 'statevector')
```

**Parameters**

*   **label** (`str`) – Label for snapshot.
*   **snapshot\_type** (`str`) – Type of snapshot.
