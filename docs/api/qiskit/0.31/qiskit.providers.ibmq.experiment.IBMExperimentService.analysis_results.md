# qiskit.providers.ibmq.experiment.IBMExperimentService.analysis\_results

`IBMExperimentService.analysis_results(limit=10, json_decoder=<class 'json.decoder.JSONDecoder'>, device_components=None, device_components_operator=None, experiment_id=None, result_type=None, result_type_operator=None, backend_name=None, quality=None, verified=None, tags=None, tags_operator='OR', sort_by=None, **filters)`

Retrieve all analysis results, with optional filtering.

**Parameters**

*   **limit** (`Optional`\[`int`]) – Number of analysis results to retrieve.

*   **json\_decoder** (`Type`\[`JSONDecoder`]) – Custom JSON decoder to use to decode the retrieved analysis results.

*   **device\_components** (`Optional`\[`List`\[`Union`\[`str`, `DeviceComponent`]]]) – Filter by device components.

*   **device\_components\_operator** (`Optional`\[`str`]) –

    Operator used when filtering by device components. Valid values are `None` and “contains”:

    > *   If `None`, an analysis result’s device components must match exactly for it to be included.
    > *   If “contains” is specified, an analysis result’s device components must contain at least the values specified by the device\_components filter.

*   **experiment\_id** (`Optional`\[`str`]) – Experiment ID used for filtering.

*   **result\_type** (`Optional`\[`str`]) – Analysis result type used for filtering.

*   **result\_type\_operator** (`Optional`\[`str`]) –

    Operator used when filtering by result type. Valid values are `None` and “like”:

    *   If `None` is specified, an analysis result’s type value must match exactly for it to be included.
    *   If “like” is specified, an analysis result’s type value must contain the value specified by result\_type. For example, `result_type="foo", result_type_operator="like"` will match both `foo1` and `1foo`.

*   **backend\_name** (`Optional`\[`str`]) – Backend name used for filtering.

*   **quality** (`Union`\[`List`\[`Union`\[`ResultQuality`, `str`]], `ResultQuality`, `str`, `None`]) – Quality value used for filtering. If a list is given, analysis results whose quality value is in the list will be included.

*   **verified** (`Optional`\[`bool`]) – Indicates whether this result has been verified..

*   **tags** (`Optional`\[`List`\[`str`]]) – Filter by tags assigned to analysis results. This can be used with tags\_operator for granular filtering.

*   **tags\_operator** (`Optional`\[`str`]) –

    Logical operator to use when filtering by tags. Valid values are “AND” and “OR”:

    > *   If “AND” is specified, then an analysis result must have all of the tags specified in tags to be included.
    > *   If “OR” is specified, then an analysis result only needs to have any of the tags specified in tags to be included.

*   **sort\_by** (`Union`\[`str`, `List`\[`str`], `None`]) – Specifies how the output should be sorted. This can be a single sorting option or a list of options. Each option should contain a sort key and a direction. Valid sort keys are “creation\_datetime”, “device\_components”, and “result\_type”. Valid directions are “asc” for ascending or “desc” for descending. For example, `sort_by=["result_type: asc", "creation_datetime:desc"]` will return an output list that is first sorted by result type in ascending order, then by creation datetime by descending order. By default, analysis results are sorted by `creation_datetime` descending and `result_id` ascending.

*   **\*\*filters** – Additional filtering keywords that are not supported and will be ignored.

**Return type**

`List`\[`Dict`]

**Returns**

A list of analysis results. Each analysis result is a dictionary containing the retrieved analysis result.

**Raises**

*   **ValueError** – If an invalid parameter value is specified.
*   **IBMQApiError** – If the request to the server failed.
