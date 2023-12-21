---
title: log
description: API reference for qiskit.ignis.logging.IgnisLogger.log
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.logging.IgnisLogger.log
---

# log

<span id="qiskit.ignis.logging.IgnisLogger.log" />

`IgnisLogger.log(level, msg, *args, **kwargs)`

Log ‘msg % args’ with the integer severity ‘level’.

To pass exception information, use the keyword argument exc\_info with a true value, e.g.

logger.log(level, “We have a %s”, “mysterious problem”, exc\_info=1)

