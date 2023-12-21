# qiskit.ignis.logging.IgnisLogger.fatal

`IgnisLogger.fatal(msg, *args, **kwargs)`

Log ‘msg % args’ with severity ‘CRITICAL’.

To pass exception information, use the keyword argument exc\_info with a true value, e.g.

logger.critical(“Houston, we have a %s”, “major disaster”, exc\_info=1)
