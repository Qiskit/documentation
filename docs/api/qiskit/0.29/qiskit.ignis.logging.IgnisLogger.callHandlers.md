# qiskit.ignis.logging.IgnisLogger.callHandlers

`IgnisLogger.callHandlers(record)`

Pass a record to all relevant handlers.

Loop through all handlers for this logger and its parents in the logger hierarchy. If no handler was found, output a one-off error message to sys.stderr. Stop searching up the hierarchy whenever a logger with the “propagate” attribute set to zero is found - that will be the last logger whose handlers are called.
