---
title: to_dict
description: API reference for qiskit.qobj.Qobj.to_dict
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.qobj.Qobj.to_dict
---

# to\_dict

<span id="qiskit.qobj.Qobj.to_dict" />

`Qobj.to_dict(validate=False)`

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

**Parameters**

**validate** (*bool*) – When set to true validate the output dictionary against the jsonschema for qobj spec.

**Returns**

A dictionary representation of the QasmQobj object

**Return type**

dict

