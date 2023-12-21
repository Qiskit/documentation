# qiskit.providers.ibmq.job.IBMQJob.queue\_position

`IBMQJob.queue_position(refresh=False)`

Return the position of the job in the server queue.

<Admonition title="Note" type="note">
  The position returned is within the scope of the provider and may differ from the global queue position.
</Admonition>

**Parameters**

**refresh** (`bool`) – If `True`, re-query the server to get the latest value. Otherwise return the cached value.

**Return type**

`Optional`\[`int`]

**Returns**

Position in the queue or `None` if position is unknown or not applicable.
