---
title: hasHandlers
description: API reference for qiskit.ignis.logging.IgnisLogger.hasHandlers
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.logging.IgnisLogger.hasHandlers
---

# hasHandlers

<span id="qiskit.ignis.logging.IgnisLogger.hasHandlers" />

`IgnisLogger.hasHandlers()`

See if this logger has any handlers configured.

Loop through all handlers for this logger and its parents in the logger hierarchy. Return True if a handler was found, else False. Stop searching up the hierarchy whenever a logger with the “propagate” attribute set to zero is found - that will be the last logger which is checked for the existence of handlers.

