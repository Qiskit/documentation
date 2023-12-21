# qiskit.ignis.logging.IgnisLogger.info

`IgnisLogger.info(msg, *args, **kwargs)`

Log ‘msg % args’ with severity ‘INFO’.

To pass exception information, use the keyword argument exc\_info with a true value, e.g.

logger.info(“Houston, we have a %s”, “interesting problem”, exc\_info=1)
