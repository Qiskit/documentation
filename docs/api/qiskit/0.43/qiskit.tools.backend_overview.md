---
title: backend_overview
description: API reference for qiskit.tools.backend_overview
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.tools.backend_overview
---

<span id="qiskit-tools-backend-overview" />

# qiskit.tools.backend\_overview

<span id="qiskit.tools.backend_overview" />

`backend_overview()` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/tools/monitor/overview.py "view source code")

Gives overview information on all the IBMQ backends that are available.

**Examples**

```python
from qiskit.providers.ibmq import IBMQ
from qiskit.tools.monitor import backend_overview
provider = IBMQ.get_provider(hub='ibm-q')
backend_overview()
```

