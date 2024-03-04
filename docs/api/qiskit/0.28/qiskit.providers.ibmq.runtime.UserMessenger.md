---
title: UserMessenger
description: API reference for qiskit.providers.ibmq.runtime.UserMessenger
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.ibmq.runtime.UserMessenger
---

# qiskit.providers.ibmq.runtime.UserMessenger

<span id="qiskit.providers.ibmq.runtime.UserMessenger" />

`UserMessenger` [GitHub](https://github.com/qiskit/qiskit-ibmq-provider/tree/stable/0.15/qiskit/providers/ibmq/runtime/program/user_messenger.py "view source code")

Base class for handling communication with program users.

This class can be used when writing a new Qiskit Runtime program.

### \_\_init\_\_

<span id="qiskit.providers.ibmq.runtime.UserMessenger.__init__" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                     |                  |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| [`__init__`](#qiskit.providers.ibmq.runtime.UserMessenger.__init__ "qiskit.providers.ibmq.runtime.UserMessenger.__init__")()                        | Initialize self. |
| [`publish`](#qiskit.providers.ibmq.runtime.UserMessenger.publish "qiskit.providers.ibmq.runtime.UserMessenger.publish")(message\[, encoder, final]) | Publish message. |

### publish

<span id="qiskit.providers.ibmq.runtime.UserMessenger.publish" />

`publish(message, encoder=<class 'qiskit.providers.ibmq.runtime.utils.RuntimeEncoder'>, final=False)`

Publish message.

You can use this method to publish messages, such as interim and final results, to the program user. The messages will be made immediately available to the user, but they may choose not to receive the messages.

The final parameter is used to indicate whether the message is the final result of the program. Final results may be processed differently from interim results.

**Parameters**

*   **message** (`Any`) – Message to be published. Can be any type.
*   **encoder** (`Type`\[`JSONEncoder`]) – An optional JSON encoder for serializing
*   **final** (`bool`) – Whether the message being published is the final result.

**Return type**

`None`

