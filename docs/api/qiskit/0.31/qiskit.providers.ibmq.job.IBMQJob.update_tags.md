# qiskit.providers.ibmq.job.IBMQJob.update\_tags

`IBMQJob.update_tags(replacement_tags=None, additional_tags=None, removal_tags=None)`

Update the tags associated with this job.

When multiple parameters are specified, the parameters are processed in the following order:

> 1.  replacement\_tags
> 2.  additional\_tags
> 3.  removal\_tags

For example, if ‘new\_tag’ is specified for both additional\_tags and removal\_tags, then it is added and subsequently removed from the tags list, making it a “do nothing” operation.

<Admonition title="Note" type="note">
  *   Some tags, such as those starting with `ibmq_jobset`, are used internally by ibmq-provider and therefore cannot be modified.
  *   When removing tags, if the job does not have a specified tag, it will be ignored.
</Admonition>

**Parameters**

*   **replacement\_tags** (`Optional`\[`List`\[`str`]]) – The tags that should replace the current tags associated with this job.
*   **additional\_tags** (`Optional`\[`List`\[`str`]]) – The new tags that should be added to the current tags associated with this job.
*   **removal\_tags** (`Optional`\[`List`\[`str`]]) – The tags that should be removed from the current tags associated with this job.

**Return type**

`List`\[`str`]

**Returns**

The new tags associated with this job.

**Raises**

*   [**IBMQJobApiError**](qiskit.providers.ibmq.job.IBMQJobApiError#qiskit.providers.ibmq.job.IBMQJobApiError "qiskit.providers.ibmq.job.IBMQJobApiError") – If an unexpected error occurred when communicating with the server or updating the job tags.
*   [**IBMQJobInvalidStateError**](qiskit.providers.ibmq.job.IBMQJobInvalidStateError#qiskit.providers.ibmq.job.IBMQJobInvalidStateError "qiskit.providers.ibmq.job.IBMQJobInvalidStateError") – If none of the input parameters are specified or if any of the input parameters are invalid.
