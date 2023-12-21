# qiskit.ignis.logging.IgnisLogger.getChild

`IgnisLogger.getChild(suffix)`

Get a logger which is a descendant to this one.

This is a convenience method, such that

logging.getLogger(‘abc’).getChild(‘def.ghi’)

is the same as

logging.getLogger(‘abc.def.ghi’)

It’s useful, for example, when the parent logger is named using \_\_name\_\_ rather than a literal string.
