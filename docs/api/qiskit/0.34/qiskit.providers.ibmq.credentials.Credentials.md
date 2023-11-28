# Credentials[¶](#credentials "Permalink to this headline")

<span id="undefined" />

`Credentials(token, url, websockets_url=None, hub=None, group=None, project=None, proxies=None, verify=True, services=None, access_token=None, preferences=None, default_provider=None)`

Bases: `object`

IBM Quantum Experience account credentials and preferences.

<Admonition title="Note" type="note">
  By convention, two credentials that have the same hub, group, and project are considered equivalent, regardless of other attributes.
</Admonition>

Credentials constructor.

**Parameters**

*   **token** (`str`) – IBM Quantum Experience API token.
*   **url** (`str`) – IBM Quantum Experience URL.
*   **websockets\_url** (`Optional`\[`str`]) – URL for websocket server.
*   **hub** (`Optional`\[`str`]) – The hub to use.
*   **group** (`Optional`\[`str`]) – The group to use.
*   **project** (`Optional`\[`str`]) – The project to use.
*   **proxies** (`Optional`\[`Dict`]) – Proxy configuration.
*   **verify** (`bool`) – If `False`, ignores SSL certificates errors.
*   **services** (`Optional`\[`Dict`]) – Additional services for this account.
*   **access\_token** (`Optional`\[`str`]) – IBM Quantum access token.
*   **preferences** (`Optional`\[`Dict`]) – Application preferences. Used for dictating preferred action in services like the ExperimentService.
*   **default\_provider** (`Optional`\[`HubGroupProject`]) – Default provider to use.

## Methods

|                                                                                                                                                                                                                                          |                                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [`connection_parameters`](qiskit.providers.ibmq.credentials.Credentials.connection_parameters#qiskit.providers.ibmq.credentials.Credentials.connection_parameters "qiskit.providers.ibmq.credentials.Credentials.connection_parameters") | Construct connection related parameters.                                    |
| [`is_ibmq`](qiskit.providers.ibmq.credentials.Credentials.is_ibmq#qiskit.providers.ibmq.credentials.Credentials.is_ibmq "qiskit.providers.ibmq.credentials.Credentials.is_ibmq")                                                         | Return whether the credentials represent an IBM Quantum Experience account. |
| [`unique_id`](qiskit.providers.ibmq.credentials.Credentials.unique_id#qiskit.providers.ibmq.credentials.Credentials.unique_id "qiskit.providers.ibmq.credentials.Credentials.unique_id")                                                 | Return a value that uniquely identifies these credentials.                  |
