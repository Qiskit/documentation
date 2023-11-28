# qiskit.providers.ibmq.credentials.Credentials

<span id="undefined" />

`Credentials(token, url, websockets_url=None, hub=None, group=None, project=None, proxies=None, verify=True, services=None, access_token=None)`

IBM Quantum Experience account credentials.

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

<span id="undefined" />

`__init__(token, url, websockets_url=None, hub=None, group=None, project=None, proxies=None, verify=True, services=None, access_token=None)`

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

## Methods

|                                                                                                                                                                         |                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [`__init__`](#qiskit.providers.ibmq.credentials.Credentials.__init__ "qiskit.providers.ibmq.credentials.Credentials.__init__")(token, url\[, websockets\_url, hub, …])  | Credentials constructor.                                                    |
| [`connection_parameters`](#qiskit.providers.ibmq.credentials.Credentials.connection_parameters "qiskit.providers.ibmq.credentials.Credentials.connection_parameters")() | Construct connection related parameters.                                    |
| [`is_ibmq`](#qiskit.providers.ibmq.credentials.Credentials.is_ibmq "qiskit.providers.ibmq.credentials.Credentials.is_ibmq")()                                           | Return whether the credentials represent an IBM Quantum Experience account. |
| [`unique_id`](#qiskit.providers.ibmq.credentials.Credentials.unique_id "qiskit.providers.ibmq.credentials.Credentials.unique_id")()                                     | Return a value that uniquely identifies these credentials.                  |

<span id="undefined" />

`connection_parameters()`

Construct connection related parameters.

**Return type**

`Dict`\[`str`, `Any`]

**Returns**

A dictionary with connection-related parameters in the format expected by `requests`. The following keys can be present: `proxies`, `verify`, and `auth`.

<span id="undefined" />

`is_ibmq()`

Return whether the credentials represent an IBM Quantum Experience account.

**Return type**

`bool`

<span id="undefined" />

`unique_id()`

Return a value that uniquely identifies these credentials.

By convention, two credentials that have the same hub, group, and project are considered equivalent.

**Return type**

`HubGroupProject`

**Returns**

A `HubGroupProject` instance.
