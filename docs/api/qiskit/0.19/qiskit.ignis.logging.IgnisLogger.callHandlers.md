---
title: callHandlers
description: API reference for qiskit.ignis.logging.IgnisLogger.callHandlers
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.logging.IgnisLogger.callHandlers
---

# callHandlers

<span id="qiskit.ignis.logging.IgnisLogger.callHandlers" />

`IgnisLogger.callHandlers(record)`

Pass a record to all relevant handlers.

Loop through all handlers for this logger and its parents in the logger hierarchy. If no handler was found, output a one-off error message to sys.stderr. Stop searching up the hierarchy whenever a logger with the “propagate” attribute set to zero is found - that will be the last logger whose handlers are called.

