---
title: getEffectiveLevel
description: API reference for qiskit.ignis.logging.IgnisLogger.getEffectiveLevel
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.logging.IgnisLogger.getEffectiveLevel
---

# getEffectiveLevel

<span id="qiskit.ignis.logging.IgnisLogger.getEffectiveLevel" />

`IgnisLogger.getEffectiveLevel()`

Get the effective level for this logger.

Loop through this logger and its parents in the logger hierarchy, looking for a non-zero logging level. Return the first one found.

