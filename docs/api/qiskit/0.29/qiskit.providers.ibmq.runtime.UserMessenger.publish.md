# qiskit.providers.ibmq.runtime.UserMessenger.publish

`UserMessenger.publish(message, encoder=<class 'qiskit.providers.ibmq.runtime.utils.RuntimeEncoder'>, final=False)`

Publish message.

You can use this method to publish messages, such as interim and final results, to the program user. The messages will be made immediately available to the user, but they may choose not to receive the messages.

The final parameter is used to indicate whether the message is the final result of the program. Final results may be processed differently from interim results.

**Parameters**

*   **message** (`Any`) – Message to be published. Can be any type.
*   **encoder** (`Type`\[`JSONEncoder`]) – An optional JSON encoder for serializing
*   **final** (`bool`) – Whether the message being published is the final result.

**Return type**

`None`
