---
title: jupyter
description: API reference for qiskit_ibm_provider.jupyter
in_page_toc_min_heading_level: 2
python_api_type: module
python_api_name: qiskit_ibm_provider.jupyter
---

<span id="jupyter-tools-qiskit-ibm-provider-jupyter" />

<span id="module-qiskit_ibm_provider.jupyter" />

<span id="qiskit-ibm-provider-jupyter" />

# Jupyter Tools

<span id="module-qiskit_ibm_provider.jupyter" />

`qiskit_ibm_provider.jupyter`

A Collection of Jupyter magic functions and tools that extend the functionality of Qiskit for the IBM Quantum devices.

<Admonition title="Note" type="note">
  To use these tools locally, you’ll need to install the additional dependencies for the visualization functions:

  ```python
  pip install qiskit_ibm_provider[visualization]
  ```
</Admonition>

## Detailed information on a single backend

```python
from qiskit_ibm_provider import IBMProvider
import qiskit_ibm_provider.jupyter

provider = IBMProvider(hub='ibm-q')
backend = provider.get_backend('ibmq_vigo')
```

```python
backend
```

```python
<Fake1Q('fake_1q')>
```

## IBM Quantum dashboard

```python
from qiskit_ibm_provider import IBMProvider
import qiskit_ibm_provider.jupyter

%ibm_quantum_dashboard
```

