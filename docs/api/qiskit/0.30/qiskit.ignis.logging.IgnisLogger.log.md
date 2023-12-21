# qiskit.ignis.logging.IgnisLogger.log

`IgnisLogger.log(level, msg, *args, **kwargs)`

Log ‘msg % args’ with the integer severity ‘level’.

To pass exception information, use the keyword argument exc\_info with a true value, e.g.

logger.log(level, “We have a %s”, “mysterious problem”, exc\_info=1)
