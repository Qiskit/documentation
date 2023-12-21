# qiskit.providers.ibmq.experiment.IBMExperimentService.experiments

`IBMExperimentService.experiments(limit=10, json_decoder=<class 'json.decoder.JSONDecoder'>, device_components=None, device_components_operator=None, experiment_type=None, experiment_type_operator=None, backend_name=None, tags=None, tags_operator='OR', start_datetime_after=None, start_datetime_before=None, hub=None, group=None, project=None, exclude_public=False, public_only=False, exclude_mine=False, mine_only=False, parent_id=None, sort_by=None, **filters)`

Retrieve all experiments, with optional filtering.

By default, results returned are as inclusive as possible. For example, if you don’t specify any filters, all experiments visible to you are returned. This includes your own experiments as well as those shared with you, from all providers you have access to (not just from the provider you used to invoke this experiment service).

**Parameters**

*   **limit** (`Optional`\[`int`]) – Number of experiments to retrieve. `None` indicates no limit.

*   **json\_decoder** (`Type`\[`JSONDecoder`]) – Custom JSON decoder to use to decode the retrieved experiments.

*   **device\_components** (`Optional`\[`List`\[`Union`\[`str`, `DeviceComponent`]]]) – Filter by device components.

*   **device\_components\_operator** (`Optional`\[`str`]) –

    Operator used when filtering by device components. Valid values are `None` and “contains”:

    > *   If `None`, an analysis result’s device components must match exactly for it to be included.
    > *   If “contains” is specified, an analysis result’s device components must contain at least the values specified by the device\_components filter.

*   **experiment\_type** (`Optional`\[`str`]) – Experiment type used for filtering.

*   **experiment\_type\_operator** (`Optional`\[`str`]) –

    Operator used when filtering by experiment type. Valid values are `None` and “like”:

    *   If `None` is specified, an experiment’s type value must match exactly for it to be included.
    *   If “like” is specified, an experiment’s type value must contain the value specified by experiment\_type. For example, `experiment_type="foo", experiment_type_operator="like"` will match both `foo1` and `1foo`.

*   **backend\_name** (`Optional`\[`str`]) – Backend name used for filtering.

*   **tags** (`Optional`\[`List`\[`str`]]) – Filter by tags assigned to experiments.

*   **tags\_operator** (`Optional`\[`str`]) –

    Logical operator to use when filtering by job tags. Valid values are “AND” and “OR”:

    > *   If “AND” is specified, then an experiment must have all of the tags specified in tags to be included.
    > *   If “OR” is specified, then an experiment only needs to have any of the tags specified in tags to be included.

*   **start\_datetime\_after** (`Optional`\[`datetime`]) – Filter by the given start timestamp, in local time. This is used to find experiments whose start date/time is after (greater than or equal to) this local timestamp.

*   **start\_datetime\_before** (`Optional`\[`datetime`]) – Filter by the given start timestamp, in local time. This is used to find experiments whose start date/time is before (less than or equal to) this local timestamp.

*   **hub** (`Optional`\[`str`]) – Filter by hub.

*   **group** (`Optional`\[`str`]) – Filter by hub and group. hub must also be specified if group is.

*   **project** (`Optional`\[`str`]) – Filter by hub, group, and project. hub and group must also be specified if project is.

*   **exclude\_public** (`Optional`\[`bool`]) – If `True`, experiments with `share_level=public` (that is, experiments visible to all users) will not be returned. Cannot be `True` if public\_only is `True`.

*   **public\_only** (`Optional`\[`bool`]) – If `True`, only experiments with `share_level=public` (that is, experiments visible to all users) will be returned. Cannot be `True` if exclude\_public is `True`.

*   **exclude\_mine** (`Optional`\[`bool`]) – If `True`, experiments where I am the owner will not be returned. Cannot be `True` if mine\_only is `True`.

*   **mine\_only** (`Optional`\[`bool`]) – If `True`, only experiments where I am the owner will be returned. Cannot be `True` if exclude\_mine is `True`.

*   **parent\_id** (`Optional`\[`str`]) – Filter experiments by this parent experiment ID.

*   **sort\_by** (`Union`\[`str`, `List`\[`str`], `None`]) – Specifies how the output should be sorted. This can be a single sorting option or a list of options. Each option should contain a sort key and a direction, separated by a semicolon. Valid sort keys are “start\_datetime” and “experiment\_type”. Valid directions are “asc” for ascending or “desc” for descending. For example, `sort_by=["experiment_type:asc", "start_datetime:desc"]` will return an output list that is first sorted by experiment type in ascending order, then by start datetime by descending order. By default, experiments are sorted by `start_datetime` descending and `experiment_id` ascending.

*   **\*\*filters** – Additional filtering keywords that are not supported and will be ignored.

**Return type**

`List`\[`Dict`]

**Returns**

A list of experiments. Each experiment is a dictionary containing the retrieved experiment data.

**Raises**

*   **ValueError** – If an invalid parameter value is specified.
*   **IBMQApiError** – If the request to the server failed.
