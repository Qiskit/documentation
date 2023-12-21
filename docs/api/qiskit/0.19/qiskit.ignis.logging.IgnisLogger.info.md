---
title: info
description: API reference for qiskit.ignis.logging.IgnisLogger.info
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.logging.IgnisLogger.info
---

# info

<span id="qiskit.ignis.logging.IgnisLogger.info" />

`IgnisLogger.info(msg, *args, **kwargs)`

Log ‘msg % args’ with severity ‘INFO’.

To pass exception information, use the keyword argument exc\_info with a true value, e.g.

logger.info(“Houston, we have a %s”, “interesting problem”, exc\_info=1)

