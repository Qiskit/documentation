from __future__ import annotations

import shutil
import json
from dataclasses import dataclass, field
from pathlib import Path

from page_content import (
    index_page_content,
    execute_index_content,
    map_content,
    postprocess_index_content,
    optimize_content,
    patterns_index_content,
)

# ------------------------------------------------------------------------------
# Types
# ------------------------------------------------------------------------------


@dataclass
class Entry:
    title: str
    slug: str | None = field(default=None, kw_only=True)
    children: list[Entry] = field(default_factory=lambda: [], kw_only=True)
    external_url: str | None = field(default=None, kw_only=True)
    extra_page_content: str | None = field(default=None, kw_only=True)

    def __post_init__(self) -> None:
        if self.slug and self.external_url:
            raise ValueError("Cannot specify both `slug` and `external_url`")

    def to_json(self, folder_name: str) -> dict:
        result = {"title": self.title}
        if self.slug is not None:
            result["url"] = f"/{folder_name}/{self.slug}"
        if self.external_url is not None:
            result["url"] = self.external_url
        if self.children:
            result["children"] = [child.to_json(folder_name) for child in self.children]
        return result

    def ensure_slugs_exist(self, base_dir: Path) -> None:
        for child in self.children:
            child.ensure_slugs_exist(base_dir)
        if self.slug is None:
            return
        content = f"# {self.title}"
        if self.extra_page_content:
            content += f"\n\n{self.extra_page_content}\n"
        (base_dir / f"{self.slug}.mdx").write_text(content)


def entries_as_markdown_list(entries: list[Entry], *, indent: None | str = None) -> str:
    result = []
    for entry in entries:
        if entry.slug:
            result.append(f"{indent or ''}* [{entry.title}](./{entry.slug})")
        if entry.external_url:
            result.append(f"{indent or ''}* [{entry.title}]({entry.external_url})")
        if entry.children:
            if indent is not None:
                first_line = f"{indent}* {entry.title}"
                children = entries_as_markdown_list(
                    entry.children, indent=indent + "  "
                )
            else:
                children = entries_as_markdown_list(entry.children, indent="")
                first_line = f"\n### {entry.title}"
            result.append(f"{first_line}\n{children}")
    return "\n".join(result)


# ------------------------------------------------------------------------------
# Sections
# ------------------------------------------------------------------------------

GET_STARTED_CHILDREN = [
    Entry(
        "Introduction to Qiskit", slug="index", extra_page_content=index_page_content()
    ),
    Entry(
        "Install",
        children=[
            Entry("Install Qiskit", slug="install-qiskit"),
            Entry("Set up an IBM Quantum channel", slug="setup-channel"),
        ],
    ),
    Entry("Hello world", slug="hello-world"),
    Entry(
        "Advanced setup",
        children=[
            Entry("Install the Qiskit SDK from source", slug="install-qiskit-source"),
            Entry("Configure the Qiskit SDK locally", slug="configure-qiskit-local"),
        ],
    ),
    Entry("Latest updates", slug="latest-updates"),
]

CIRCUIT_CONSTRUCTION = [
    Entry(
        "Build circuits with Qiskit",
        children=[
            Entry("Circuit library", slug="circuit-library"),
            Entry("Construct circuits", slug="circuit-construction"),
            Entry("Visualize circuits", slug="circuit-visualization"),
            Entry(
                "Classical feedforward and control flow",
                slug="classical-feedforward-and-control-flow",
            ),
            Entry("Synthesizing unitary operators", slug="unitary-synthesis"),
            Entry("Bit-ordering in Qiskit", slug="bit-ordering"),
            Entry("Save circuits to disk", slug="save-circuits"),
        ],
    ),
    Entry(
        "Build operators with Qiskit",
        children=[
            Entry("Operators module overview", slug="operators-overview"),
            Entry(
                "Specifying observables in the Pauli basis",
                slug="specify-observables-pauli",
            ),
            Entry("Operators visualization", slug="operators-visualization"),
        ],
    ),
    Entry(
        "Other circuit building tools",
        children=[
            Entry("Pulse schedules", slug="pulse"),
            Entry(
                "OpenQASM",
                children=[
                    Entry("Intro to OpenQASM", slug="introduction-to-qasm"),
                    Entry(
                        "OpenQASM 2 and the Qiskit SDK",
                        slug="interoperate-qiskit-qasm2",
                    ),
                    Entry(
                        "OpenQASM 3 and the Qiskit SDK",
                        slug="interoperate-qiskit-qasm3",
                    ),
                    Entry("OpenQASM 3 feature table", slug="qasm-feature-table"),
                    Entry(
                        "OpenQASM 3.x live specification",
                        external_url="https://openqasm.com/",
                    ),
                ],
            ),
        ],
    ),
]

TRANSPILER = [
    Entry(
        "Get started with the Qiskit transpiler",
        children=[
            Entry("Introduction to transpilation", slug="transpile"),
            Entry("Transpiler stages", slug="transpiler-stages"),
            Entry("Transpile with pass managers", slug="transpile-with-pass-managers"),
            Entry("Transpile with pass managers", slug="transpile-with-pass-managers"),
        ],
    ),
    Entry(
        "Configure preset pass managers",
        children=[
            Entry(
                "Default settings and configuration options",
                slug="defaults-and-configuration-options",
            ),
            Entry("Set optimization level", slug="set-optimization"),
            Entry(
                "Commonly used parameters for transpilation", slug="common-parameters"
            ),
            Entry("Represent quantum computers", slug="representing-quantum-computers"),
        ],
    ),
    Entry(
        "Advanced transpilation resources",
        children=[
            Entry(
                "Create a pass manager for dynamical decoupling",
                slug="dynamical-decoupling-pass-manager",
            ),
            Entry("Write a custom transpiler pass", slug="custom-transpiler-pass"),
            Entry("Transpile against custom backends", slug="custom-backend"),
            Entry("Install and use transpiler plugins", slug="transpiler-plugins"),
            Entry("Create a transpiler plugin", slug="create-a-transpiler-plugin"),
        ],
    ),
    Entry(
        "Qiskit transpiler service",
        children=[
            Entry(
                "Transpile circuits remotely with the Qiskit transpiler service",
                slug="qiskit-transpiler-service",
            ),
            Entry("AI transpiler passes", slug="ai-transpiler-passes"),
        ],
    ),
]

SIMULATORS = [
    Entry("Introduction to debugging tools", slug="verify"),
    Entry(
        "Exact simulation with Qiskit primitives",
        slug="simulate-with-qiskit-primitives",
    ),
    Entry(
        "Exact and noisy simulation with Qiskit Aer primitives",
        slug="simulate-with-qiskit-aer",
    ),
    Entry("Qiskit Runtime local testing mode", slug="local-testing-mode"),
    Entry("Build noise models", slug="building-noise-models"),
    Entry("Plot quantum states", slug="plot-quantum-states"),
    Entry(
        "Efficient simulation of stabilizer circuits with Qiskit Aer primitives",
        slug="stabilizer-circuit-simulation",
    ),
    Entry(
        "IBM Quantum cloud-based simulators",
        children=[
            Entry(
                "Using IBM Quantum cloud-based simulators",
                slug="using-ibm-quantum-simulators",
            ),
            Entry("Available IBM Quantum simulators", slug="cloud-based-simulators"),
        ],
    ),
]

PRIMITIVES = [
    Entry(
        "Run with primitives",
        children=[
            Entry("Introduction to primitives", slug="primitives"),
            Entry("Get started with primitives", slug="primitives-get-started"),
            Entry("Primitives examples", slug="primitives-examples"),
        ],
    ),
    Entry(
        "Configure runtime options",
        children=[
            Entry(
                "Configure runtiem compilation", slug="configure-runtime-compilation"
            ),
            Entry(
                "Configure runtime error mitigation", slug="configure-error-mitigation"
            ),
            Entry("Advanced runtime options", slug="advanced-runtime-options"),
        ],
    ),
]

EXECUTION_MODES = [
    Entry(
        "Execution modes",
        children=[
            Entry(
                "Introduction to Qiskit Runtime execution modes",
                slug="execution-modes-intro",
            ),
            Entry("Introduction to Qiskit Runtime sessions", slug="sessions"),
            Entry("Run jobs in a session", slug="run-jobs-in-session"),
            Entry("Run jobs in a batch", slug="run-jobs-batch"),
            Entry("FAQs", slug="execution-modes-faq"),
        ],
    ),
    Entry(
        "Manage jobs",
        children=[
            Entry("Monitor a job", slug="monitor-job"),
            Entry("Estimate job run time", slug="estimate-job-run-time"),
            Entry("Minimize job run time", slug="minimize-time"),
            Entry(
                "Maximum execution time for a Qiskit Runtime job or session",
                slug="max-execution-time",
            ),
        ],
    ),
]

SYSTEMS_CHILDREN = [
    Entry("Processor types", slug="processor-types"),
    Entry("System information", slug="system-information"),
    Entry("Get backend information with Qiskit", slug="get-backend-information"),
    Entry("Native gates and operations", slug="native-gates"),
    Entry("Retired systems", slug="retired-systems"),
    Entry(
        "Hardware considerations and limitations for classical feedforward and control flow",
        slug="dynamic-circuits-considerations",
    ),
    Entry("Instances", slug="instances"),
    Entry("Fair-share scheduler", slug="fair-share-queue"),
    Entry("Manage cost", slug="manage-cost"),
]

OPTIMIZE_FOR_HARDWARE_CHILDREN = [
    *TRANSPILER,
    Entry("Debugging tools", children=SIMULATORS),
]

EXECUTE_ON_HARDWARE_CHILDREN = [
    *PRIMITIVES,
    *EXECUTION_MODES,
    Entry("Systems and platform information", children=SYSTEMS_CHILDREN),
]

POSTPROCESS_CHILDREN = [
    Entry("Retrieve and save results", slug="save-jobs"),
    Entry("Visualize results", slug="visualize-results"),
]

# Note: not used in Workflow.
SERVERLESS = [Entry("Qiskit Serverless workloads", slug="qiskit-serverless")]

WORKFLOW_FOLDER_AS_INDEX_CHILDREN = [
    Entry(
        "Introduction to Qiskit Patterns",
        slug="patterns-index",
        extra_page_content=patterns_index_content(),
    ),
    Entry(
        "Map problem to circuits",
        slug="map-problem-to-circuits-index",
        extra_page_content=map_content(entries_as_markdown_list(CIRCUIT_CONSTRUCTION)),
    ),
    Entry(
        "Optimize for hardware",
        slug="optimize-for-hardware-index",
        extra_page_content=optimize_content(
            entries_as_markdown_list(OPTIMIZE_FOR_HARDWARE_CHILDREN)
        ),
    ),
    Entry(
        "Execute on hardware",
        slug="execute-on-hardware-index",
        extra_page_content=execute_index_content(
            entries_as_markdown_list(EXECUTE_ON_HARDWARE_CHILDREN)
        ),
    ),
    Entry(
        "Postprocess results",
        slug="postprocess-results-index",
        extra_page_content=postprocess_index_content(
            entries_as_markdown_list(POSTPROCESS_CHILDREN)
        ),
    ),
]


TOOL_ENTRIES = [
    Entry("Circuits and operators", children=CIRCUIT_CONSTRUCTION),
    Entry("Transpiler", children=TRANSPILER),
    Entry("Debugging tools", children=SIMULATORS),
    Entry("Primitives", children=PRIMITIVES),
    Entry("Execution modes", children=EXECUTION_MODES),
    Entry("IBM Quantum systems", children=SYSTEMS_CHILDREN),
    Entry("Serverless", children=SERVERLESS),
]

# ------------------------------------------------------------------------------
# Proposals
# ------------------------------------------------------------------------------


def write_result(folder: str, top_level_entries: list[Entry]) -> None:
    folder_path = Path("docs", folder)
    if folder_path.exists():
        shutil.rmtree(folder_path)
    folder_path.mkdir(parents=True)

    for entry in top_level_entries:
        entry.ensure_slugs_exist(folder_path)

    result = {
        "title": "Guides",
        "collapsed": True,
        "children": [entry.to_json(folder) for entry in top_level_entries],
    }
    text = json.dumps(result, indent=2)
    (folder_path / "_toc.json").write_text(text)


write_result(
    "guides",
    [
        Entry("Get started"),
        *GET_STARTED_CHILDREN,
        Entry("Workflow"),
        *WORKFLOW_FOLDER_AS_INDEX_CHILDREN,
        Entry("Tools"),
        *TOOL_ENTRIES,
    ],
)
