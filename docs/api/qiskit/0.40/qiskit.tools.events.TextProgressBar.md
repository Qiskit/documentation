---
title: TextProgressBar
description: API reference for qiskit.tools.events.TextProgressBar
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.tools.events.TextProgressBar
---

# TextProgressBar

<span id="qiskit.tools.events.TextProgressBar" />

`TextProgressBar(output_handler=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/tools/events/progressbar.py "view source code")

Bases: `qiskit.tools.events.progressbar.BaseProgressBar`

A simple text-based progress bar.

**output\_handlerthe handler the progress bar should be written to, default**

is sys.stdout, another option is sys.stderr

**Examples**

The progress bar can be used to track the progress of a parallel\_map.

```python
import numpy as np
import qiskit.tools.jupyter
from qiskit.tools.parallel import parallel_map
from qiskit.tools.events import TextProgressBar

TextProgressBar()
%qiskit_progress_bar -t text
parallel_map(np.sin, np.linspace(0,10,100));
```

And it can also be used individually.

```python
from qiskit.tools.events import TextProgressBar

iterations = 100
t = TextProgressBar()
t.start(iterations=iterations)
for i in range(iterations):
    # step i of heavy calculation ...
    t.update(i + 1)  # update progress bar
```

## Methods

### clear

<span id="qiskit.tools.events.TextProgressBar.clear" />

`TextProgressBar.clear()`

Unsubscribe everything

### finished

<span id="qiskit.tools.events.TextProgressBar.finished" />

`TextProgressBar.finished()`

Run when progress bar has completed.

### start

<span id="qiskit.tools.events.TextProgressBar.start" />

`TextProgressBar.start(iterations)`

Start the progress bar.

**Parameters**

**iterations** (*int*) – Number of iterations.

### subscribe

<span id="qiskit.tools.events.TextProgressBar.subscribe" />

`TextProgressBar.subscribe(event, callback)`

Subscribes to an event, associating a callback function to that event, so when the event occurs, the callback will be called. This is a blocking call, so try to keep callbacks as lightweight as possible.

### time\_elapsed

<span id="qiskit.tools.events.TextProgressBar.time_elapsed" />

`TextProgressBar.time_elapsed()`

Return the time elapsed since start.

**Returns**

Time since progress bar started.

**Return type**

elapsed\_time

### time\_remaining\_est

<span id="qiskit.tools.events.TextProgressBar.time_remaining_est" />

`TextProgressBar.time_remaining_est(completed_iter)`

Estimate the remaining time left.

**Parameters**

**completed\_iter** (*int*) – Number of iterations completed.

**Returns**

Estimated time remaining.

**Return type**

est\_time

### unsubscribe

<span id="qiskit.tools.events.TextProgressBar.unsubscribe" />

`TextProgressBar.unsubscribe(event, callback)`

Unsubscribe a pair event-callback, so the callback will not be called anymore when the event occurs.

### update

<span id="qiskit.tools.events.TextProgressBar.update" />

`TextProgressBar.update(n)`

Update status of progress bar.

