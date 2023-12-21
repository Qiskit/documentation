---
title: debug
description: API reference for qiskit.ignis.logging.IgnisLogger.debug
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.logging.IgnisLogger.debug
---

# debug

<span id="qiskit.ignis.logging.IgnisLogger.debug" />

`IgnisLogger.debug(msg, *args, **kwargs)`

Log ‘msg % args’ with severity ‘DEBUG’.

To pass exception information, use the keyword argument exc\_info with a true value, e.g.

logger.debug(“Houston, we have a %s”, “thorny problem”, exc\_info=1)

