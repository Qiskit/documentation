# qiskit.ignis.logging.IgnisLogger.error

`IgnisLogger.error(msg, *args, **kwargs)`

Log ‘msg % args’ with severity ‘ERROR’.

To pass exception information, use the keyword argument exc\_info with a true value, e.g.

logger.error(“Houston, we have a %s”, “major problem”, exc\_info=1)
