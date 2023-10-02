---
title: Qobj
description: API reference for qiskit.qobj.Qobj
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.qobj.Qobj
---

# Qobj

<span id="qiskit.qobj.Qobj" />

`qiskit.qobj.Qobj(qobj_id=None, config=None, experiments=None, header=None)`

Bases: [`QasmQobj`](qiskit.qobj.QasmQobj "qiskit.qobj.qasm_qobj.QasmQobj")

A backwards compat alias for QasmQobj.

Initialize a Qobj object.

<Admonition title="Deprecated since version 0.19.0" type="danger">
  The class `qiskit.qobj.Qobj` is deprecated as of qiskit-terra 0.19.0. It will be removed no earlier than 3 months after the release date. Instead, use QasmQobj or PulseQobj
</Admonition>

## Methods

### from\_dict

<span id="qiskit.qobj.Qobj.from_dict" />

`classmethod from_dict(data)`

Create a new QASMQobj object from a dictionary.

**Parameters**

**data** ([*dict*](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.11)")) – A dictionary representing the QasmQobj to create. It will be in the same format as output by [`to_dict()`](#qiskit.qobj.Qobj.to_dict "qiskit.qobj.Qobj.to_dict").

**Returns**

The QasmQobj from the input dictionary.

**Return type**

[QasmQobj](qiskit.qobj.QasmQobj "qiskit.qobj.QasmQobj")

### to\_dict

<span id="qiskit.qobj.Qobj.to_dict" />

`to_dict()`

Return a dictionary format representation of the QASM Qobj.

Note this dict is not in the json wire format expected by IBMQ and qobj specification because complex numbers are still of type complex. Also this may contain native numpy arrays. When serializing this output for use with IBMQ you can leverage a json encoder that converts these as expected. For example:

```python
import json
import numpy

class QobjEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, numpy.ndarray):
            return obj.tolist()
        if isinstance(obj, complex):
            return (obj.real, obj.imag)
        return json.JSONEncoder.default(self, obj)

json.dumps(qobj.to_dict(), cls=QobjEncoder)
```

**Returns**

A dictionary representation of the QasmQobj object

**Return type**

[dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.11)")

