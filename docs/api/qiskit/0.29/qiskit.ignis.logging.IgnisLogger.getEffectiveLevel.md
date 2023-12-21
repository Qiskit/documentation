# qiskit.ignis.logging.IgnisLogger.getEffectiveLevel

`IgnisLogger.getEffectiveLevel()`

Get the effective level for this logger.

Loop through this logger and its parents in the logger hierarchy, looking for a non-zero logging level. Return the first one found.
