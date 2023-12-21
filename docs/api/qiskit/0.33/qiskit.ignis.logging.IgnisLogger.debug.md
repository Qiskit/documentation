# qiskit.ignis.logging.IgnisLogger.debug

`IgnisLogger.debug(msg, *args, **kwargs)`

Log ‘msg % args’ with severity ‘DEBUG’.

To pass exception information, use the keyword argument exc\_info with a true value, e.g.

logger.debug(“Houston, we have a %s”, “thorny problem”, exc\_info=1)
