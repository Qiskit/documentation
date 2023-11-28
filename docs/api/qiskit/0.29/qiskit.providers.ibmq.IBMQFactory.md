# IBMQFactory[¶](#ibmqfactory "Permalink to this headline")

<span id="undefined" />

`IBMQFactory`

Bases: `object`

Factory and account manager for IBM Quantum Experience.

IBMQFactory constructor.

## Methods

|                                                                                                                                                                              |                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [`active_account`](qiskit.providers.ibmq.IBMQFactory.active_account#qiskit.providers.ibmq.IBMQFactory.active_account "qiskit.providers.ibmq.IBMQFactory.active_account")     | Return the IBM Quantum Experience account currently in use for the session.       |
| [`delete_account`](qiskit.providers.ibmq.IBMQFactory.delete_account#qiskit.providers.ibmq.IBMQFactory.delete_account "qiskit.providers.ibmq.IBMQFactory.delete_account")     | Delete the saved account from disk.                                               |
| [`disable_account`](qiskit.providers.ibmq.IBMQFactory.disable_account#qiskit.providers.ibmq.IBMQFactory.disable_account "qiskit.providers.ibmq.IBMQFactory.disable_account") | Disable the account currently in use for the session.                             |
| [`enable_account`](qiskit.providers.ibmq.IBMQFactory.enable_account#qiskit.providers.ibmq.IBMQFactory.enable_account "qiskit.providers.ibmq.IBMQFactory.enable_account")     | Authenticate against IBM Quantum Experience for use during the session.           |
| [`get_provider`](qiskit.providers.ibmq.IBMQFactory.get_provider#qiskit.providers.ibmq.IBMQFactory.get_provider "qiskit.providers.ibmq.IBMQFactory.get_provider")             | Return a provider for a single hub/group/project combination.                     |
| [`load_account`](qiskit.providers.ibmq.IBMQFactory.load_account#qiskit.providers.ibmq.IBMQFactory.load_account "qiskit.providers.ibmq.IBMQFactory.load_account")             | Authenticate against IBM Quantum Experience from stored credentials.              |
| [`providers`](qiskit.providers.ibmq.IBMQFactory.providers#qiskit.providers.ibmq.IBMQFactory.providers "qiskit.providers.ibmq.IBMQFactory.providers")                         | Return a list of providers, subject to optional filtering.                        |
| [`save_account`](qiskit.providers.ibmq.IBMQFactory.save_account#qiskit.providers.ibmq.IBMQFactory.save_account "qiskit.providers.ibmq.IBMQFactory.save_account")             | Save the account to disk for future use.                                          |
| [`stored_account`](qiskit.providers.ibmq.IBMQFactory.stored_account#qiskit.providers.ibmq.IBMQFactory.stored_account "qiskit.providers.ibmq.IBMQFactory.stored_account")     | List the account stored on disk.                                                  |
| [`update_account`](qiskit.providers.ibmq.IBMQFactory.update_account#qiskit.providers.ibmq.IBMQFactory.update_account "qiskit.providers.ibmq.IBMQFactory.update_account")     | Interactive helper for migrating stored credentials to IBM Quantum Experience v2. |
