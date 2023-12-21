---
title: error
description: API reference for qiskit.ignis.logging.IgnisLogger.error
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.logging.IgnisLogger.error
---

# error

<span id="qiskit.ignis.logging.IgnisLogger.error" />

`IgnisLogger.error(msg, *args, **kwargs)`

Log ‘msg % args’ with severity ‘ERROR’.

To pass exception information, use the keyword argument exc\_info with a true value, e.g.

logger.error(“Houston, we have a %s”, “major problem”, exc\_info=1)

