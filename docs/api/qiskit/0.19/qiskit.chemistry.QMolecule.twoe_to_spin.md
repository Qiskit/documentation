---
title: twoe_to_spin
description: API reference for qiskit.chemistry.QMolecule.twoe_to_spin
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.chemistry.QMolecule.twoe_to_spin
---

# twoe\_to\_spin

<span id="qiskit.chemistry.QMolecule.twoe_to_spin" />

`static QMolecule.twoe_to_spin(mohijkl, mohijkl_bb=None, mohijkl_ba=None, threshold=1e-12)`

Convert two-body MO integrals to spin orbital basis

Takes two body integrals in molecular orbital basis and returns integrals in spin orbitals ready for use as coefficients to two body terms in 2nd quantized Hamiltonian.

**Parameters**

*   **mohijkl** (*numpy.ndarray*) – Two body orbitals in molecular basis (AlphaAlpha)
*   **mohijkl\_bb** (*numpy.ndarray*) – Two body orbitals in molecular basis (BetaBeta)
*   **mohijkl\_ba** (*numpy.ndarray*) – Two body orbitals in molecular basis (BetaAlpha)
*   **threshold** (*float*) – Threshold value for assignments

**Returns**

Two body integrals in spin orbitals

**Return type**

numpy.ndarray

