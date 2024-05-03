from __future__ import annotations

import shutil
import json
from dataclasses import dataclass, field
from pathlib import Path

# ------------------------------------------------------------------------------
# Types
# ------------------------------------------------------------------------------


@dataclass
class Entry:
    title: str
    slug: str | None = None
    children: list[Entry] = field(default_factory=lambda: [])
    external_url: str | None = None
    extra_page_content: str | None = None

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


def entries_as_markdown_list(entries: list[Entry], *, indent: str = "") -> str:
    result = []
    for entry in entries:
        if entry.slug:
            result.append(f"{indent}* [{entry.title}](./{entry.slug})")
        if entry.external_url:
            result.append(f"{indent}* [{entry.title}]({entry.external_url})")
        if entry.children:
            children = entries_as_markdown_list(entry.children, indent=indent + "  ")
            result.append(f"{indent}* {entry.title}\n{children}")
    return "\n".join(result)


# ------------------------------------------------------------------------------
# Sections
# ------------------------------------------------------------------------------

GET_STARTED = Entry(
    "Get started",
    children=[
        Entry("Introduction to Qiskit", "index"),
        Entry(
            "Install",
            children=[
                Entry("Install Qiskit", "install-qiskit"),
                Entry("Set up an IBM Quantum channel", "setup-channel"),
            ],
        ),
        Entry("Hello world", "hello-world"),
        Entry(
            "Advanced setup",
            children=[
                Entry("Install the Qiskit SDK from source", "install-qiskit-source"),
                Entry("Configure the Qiskit SDK locally", "configure-qiskit-local"),
            ],
        ),
        Entry("Latest updates", "latest-updates"),
    ],
)

CIRCUIT_CONSTRUCTION = [
    Entry("Introduction", "circuit-construction-intro"),
    Entry(
        "Build circuits with Qiskit",
        children=[
            Entry("Circuit library", "circuit-library"),
            Entry("Construct circuits", "circuit-construction"),
            Entry("Visualize circuits", "circuit-visualization"),
            Entry(
                "Classical feedforward and control flow",
                "classical-feedforward-and-control-flow",
            ),
            Entry("Synthesizing unitary operators", "unitary-synthesis"),
            Entry("Bit-ordering in Qiskit", "bit-ordering"),
            Entry("Save circuits to disk", "save-circuits"),
        ],
    ),
    Entry(
        "Build opperators with Qiskit",
        children=[
            Entry("Operators module overview", "operators-overview"),
            Entry(
                "Specifying observables in the Pauli basis",
                "specify-observables-pauli",
            ),
            Entry("Operators visualization", "operators-visualization"),
        ],
    ),
    Entry(
        "Other circuit building tools",
        children=[
            Entry("Pulse schedules", "pulse"),
            Entry(
                "OpenQASM",
                children=[
                    Entry("Intro to OpenQASM", "introduction-to-qasm"),
                    Entry(
                        "OpenQASM 2 and the Qiskit SDK",
                        "interoperate-qiskit-qasm2",
                    ),
                    Entry(
                        "OpenQASM 3 and the Qiskit SDK",
                        "interoperate-qiskit-qasm3",
                    ),
                    Entry("OpenQASM 3 feature table", "qasm-feature-table"),
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
    Entry("Introduction", "transpile"),
    Entry("Transpiler stages", "transpiler-stages"),
    Entry("Transpile with pass managers", "transpile-with-pass-managers"),
    Entry("Transpile with pass managers", "transpile-with-pass-managers"),
    Entry(
        "Configure preset pass managers",
        children=[
            Entry(
                "Default settings and configuration options",
                "defaults-and-configuration-options",
            ),
            Entry("Set optimization level", "set-optimization"),
            Entry("Commonly used parameters for transpilation", "common-parameters"),
            Entry("Represent quantum computers", "representing-quantum-computers"),
        ],
    ),
    Entry(
        "Create a pass manager for dynamical decoupling",
        "dynamical-decoupling-pass-manager",
    ),
    Entry("Write a custom transpiler pass", "custom-transpiler-pass"),
    Entry("Transpile against custom backends", "custom-backend"),
    Entry(
        "Transpiler plugins",
        children=[
            Entry("Install and use transpiler plugins", "transpiler-plugins"),
            Entry("Create a transpiler plugin", "create-a-transpiler-plugin"),
        ],
    ),
    Entry(
        "Qiskit transpiler service",
        children=[
            Entry(
                "Transpile circuits remotely with the Qiskit transpiler service",
                "qiskit-transpiler-service",
            ),
            Entry("AI transpiler passes", "ai-transpiler-passes"),
        ],
    ),
]

SIMULATORS = [
    Entry("Introduction", "verify"),
    Entry("Exact simulation with Qiskit primitives", "simulate-with-qiskit-primitives"),
    Entry(
        "Exact and noisy simulation with Qiskit Aer primitives",
        "simulate-with-qiskit-aer",
    ),
    Entry("Qiskit Runtime local testing mode", "local-testing-mode"),
    Entry("Build noise models", "building-noise-models"),
    Entry("Plot quantum states", "plot-quantum-states"),
    Entry(
        "Efficient simulation of stabilizer circuits with Qiskit Aer primitives",
        "stabilizer-circuit-simulation",
    ),
    Entry(
        "IBM Quantum cloud-based simulators",
        children=[
            Entry(
                "Using IBM Quantum cloud-based simulators",
                "using-ibm-quantum-simulators",
            ),
            Entry("Available IBM Quantum simulators", "cloud-based-simulators"),
        ],
    ),
]

PRIMITIVES = [
    Entry(
        "Run with primitives",
        children=[
            Entry("Introduction to primitives", "primitives"),
            Entry("Get started with primitives", "primitives-get-started"),
            Entry("Primitives examples", "primitives-examples"),
        ],
    ),
    Entry(
        "Configure runtime options",
        children=[
            Entry("Configure runtiem compilation", "configure-runtime-compilation"),
            Entry("Configure runtime error mitigation", "configure-error-mitigation"),
            Entry("Advanced runtime options", "advanced-runtime-options"),
        ],
    ),
]

EXECUTION_MODES = [
    Entry(
        "Execution modes",
        children=[
            Entry("Introduction to Qiskit Runtime execution modes", "execution-modes"),
            Entry("Introduction to Qiskit Runtime sessions", "sessions"),
            Entry("Run jobs in a session", "run-jobs-in-session"),
            Entry("Run jobs in a batch", "run-jobs-batch"),
            Entry("FAQs", "execution-modes-faq"),
        ],
    ),
    Entry(
        "Manage jobs",
        children=[
            Entry("Monitor a job", "monitor-job"),
            Entry("Estimate job run time", "estimate-job-run-time"),
            Entry("Minimize job run time", "minimize-time"),
            Entry(
                "Maximum execution time for a Qiskit Runtime job or session",
                "max-execution-time",
            ),
        ],
    ),
]

SYSTEMS = [
    Entry(
        "Hardware",
        children=[
            Entry("Processor types", "processor-types"),
            Entry("System information", "system-information"),
            Entry("Get backend information with Qiskit", "get-backend-information"),
            Entry("Native gates and operations", "native-gates"),
            Entry("Retired systems", "retired-systems"),
            Entry(
                "Hardware considerations and limitations for classical feedforward and control flow",
                "dynamic-circuits-considerations",
            ),
        ],
    ),
    Entry(
        "Understand the platform",
        children=[
            Entry("Instances", "instances"),
            Entry("Fair-share scheduler", "fair-share-queue"),
            Entry("Manage cost", "manage-cost"),
        ],
    ),
]

OPTIMIZE_FOR_HARDWARE_CHILDREN = [
    *TRANSPILER,
    Entry("Verify circuits through simulation", children=SIMULATORS),
]

EXECUTE_ON_HARDWARE_CHILDREN = [
    Entry("Introduction", "execute-on-target-hardware"),
    *PRIMITIVES,
    *EXECUTION_MODES,
    *SYSTEMS,
]

# Note: not used in Tools.
POSTPROCESS_CHILDREN = [
    Entry("Introduction", "postprocess-results"),
    Entry("Retrieve and save results", "save-jobs"),
    Entry("Visualize results", "visualize-results"),
]

# Note: not used in Workflow.
SERVERLESS = [Entry("Qiskit Serverless workloads", "qiskit-serverless")]

PROPOSAL3_WORKFLOW_FOLDER = Entry(
    "Workflow",
    children=[
        Entry(
            "Map problem to circuits",
            "map-problem-to-circuits-index",
            extra_page_content=(
                "In the map problem to circuits step, you ...\n\n"
                + f"Relevant pages:\n\n{entries_as_markdown_list(CIRCUIT_CONSTRUCTION)}"
            ),
        ),
        Entry(
            "Optimize for hardware",
            "optimize-for-hardware-index",
            extra_page_content=(
                "In the optimize for target hardware step, you ...\n\n"
                + f"Relevant pages:\n\n{entries_as_markdown_list(OPTIMIZE_FOR_HARDWARE_CHILDREN)}"
            ),
        ),
        Entry(
            "Execute on hardware",
            "execute-on-hardware-index",
            extra_page_content=(
                "In the execute on target hardware step, you ...\n\n"
                + f"Relevant pages:\n\n{entries_as_markdown_list(EXECUTE_ON_HARDWARE_CHILDREN)}"
            ),
        ),
        Entry(
            "Postprocess results",
            "postprocess-results-index",
            extra_page_content=(
                "In the postprocess results step, you ...\n\n"
                + f"Relevant pages:\n\n{entries_as_markdown_list(POSTPROCESS_CHILDREN)}"
            ),
        ),
    ],
)

WORKFLOW_ENTRIES = [
    Entry("Map problem to circuits", children=CIRCUIT_CONSTRUCTION),
    Entry("Optimize for hardware", children=OPTIMIZE_FOR_HARDWARE_CHILDREN),
    Entry("Excute on hardware", children=EXECUTE_ON_HARDWARE_CHILDREN),
    Entry("Postprocess results", children=POSTPROCESS_CHILDREN),
]

TOOL_ENTRIES = [
    Entry("Circuits and operators", children=CIRCUIT_CONSTRUCTION),
    Entry("Transpiler", children=TRANSPILER),
    Entry("Debugging tools (simulators)", children=SIMULATORS),
    Entry("Primitives", children=PRIMITIVES),
    Entry("Execution modes", children=EXECUTION_MODES),
    Entry("IBM Quantum systems", children=SYSTEMS),
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

    # Save markdown view of the organization. This is useful to see how things are structured.
    Path(f"{folder}.md").write_text(entries_as_markdown_list(top_level_entries))

    # Also write the _toc.json to get live previews.
    result = {
        "title": "Guides",
        "collapsed": True,
        "children": [entry.to_json(folder) for entry in top_level_entries],
    }
    text = json.dumps(result, indent=2)
    (folder_path / "_toc.json").write_text(text)


write_result(
    "proposal1",
    [
        GET_STARTED,
        Entry("Workflow", children=WORKFLOW_ENTRIES),
        Entry("Tools", children=TOOL_ENTRIES),
    ],
)

write_result(
    "proposal2",
    [
        GET_STARTED,
        Entry("Workflow"),
        *WORKFLOW_ENTRIES,
        Entry("Tools"),
        *TOOL_ENTRIES,
    ],
)

write_result(
    "proposal3",
    [
        GET_STARTED,
        PROPOSAL3_WORKFLOW_FOLDER,
        *TOOL_ENTRIES,
    ],
)
