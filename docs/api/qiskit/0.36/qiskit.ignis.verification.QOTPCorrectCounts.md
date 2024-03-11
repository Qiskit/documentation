---
title: QOTPCorrectCounts
description: API reference for qiskit.ignis.verification.QOTPCorrectCounts
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.ignis.verification.QOTPCorrectCounts
---

# qiskit.ignis.verification.QOTPCorrectCounts

<span id="qiskit.ignis.verification.QOTPCorrectCounts" />

`QOTPCorrectCounts(qotp_counts, qotp_postp)` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.7/qiskit/ignis/verification/accreditation/qotp.py "view source code")

Corrects a dictionary of results, shifting the qotp

**Parameters**

*   **qotp\_counts** (*dict*) – a dict of exp counts
*   **qotp\_postp** (*list*) – a binary list denoting the one time pad

**Returns**

the corrected counts dict

**Return type**

dict

