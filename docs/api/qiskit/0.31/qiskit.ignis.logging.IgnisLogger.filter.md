# qiskit.ignis.logging.IgnisLogger.filter

`IgnisLogger.filter(record)`

Determine if a record is loggable by consulting all the filters.

The default is to allow the record to be logged; any filter can veto this and the record is then dropped. Returns a zero value if a record is to be dropped, else non-zero.

Changed in version 3.2: Allow filters to be just callables.
