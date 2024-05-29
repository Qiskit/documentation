from __future__ import annotations

import shutil
import json
import dataclasses
from collections.abc import Sequence
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


@dataclass(frozen=True)
class Entry:
    title: str
    slug: str | None = field(default=None, kw_only=True)
    children: tuple[Entry, ...] = field(default_factory=lambda: (), kw_only=True)
    external_url: str | None = field(default=None, kw_only=True)
    from_file: str | None = field(default="__unset__", kw_only=True)
    extra_page_content: str | None = field(default=None, kw_only=True)

    def __post_init__(self) -> None:
        from_file_set = self.from_file != "__unset__"
        if self.slug and self.external_url:
            raise ValueError("Cannot specify both `slug` and `external_url`")
        if self.extra_page_content and from_file_set:
            raise ValueError("Cannot specify both `from_file` and `extra_page_content`")
        if self.slug and not from_file_set and not self.extra_page_content:
            raise ValueError(
                "Must set `from_file` when `slug` is set. Set it to `None` if this is a new page."
            )

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

        extension = ".mdx"
        if self.from_file and self.from_file != "__unset__":
            from_file = Path("docs", self.from_file)
            content = from_file.read_text()
            extension = from_file.suffix
        else:
            content = f"# {self.title}"
            if self.extra_page_content:
                content += f"\n\n{self.extra_page_content}\n"
        (base_dir / f"{self.slug}{extension}").write_text(content)


def entries_as_markdown_list(
    entries: Sequence[Entry], *, indent: None | str = None
) -> str:
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


def filter_entries(
    entries: Sequence[Entry], *, ignore: Sequence[Entry]
) -> tuple[Entry, ...]:
    result = []
    for entry in entries:
        if entry in ignore:
            continue
        result.append(
            dataclasses.replace(
                entry, children=filter_entries(entry.children, ignore=ignore)
            )
        )
    return tuple(result)


# ------------------------------------------------------------------------------
# Sections
# ------------------------------------------------------------------------------

# These pages are standalone variables so that we have better control of
# where they show up in Tools vs the Workflow index page. For example,
# `save-jobs` is in the `Execution Modes` tool, which normally gets added
# to `execute-on-hardware.mdx`; however, we put the page
# on `postprocess-results.mdx` instead.

# Workflow: Post-Process, Tool: Execution Modes (manage jobs)
RETRIEVE_RESULTS_PAGE = Entry(
    "Retrieve and save results",
    slug="save-jobs",
    from_file="run/save-jobs.ipynb",
)
# Workflow: Post-process, Tool: Visualization
VISUALIZE_RESULTS_PAGE = Entry(
    "Visualize results",
    slug="visualize-results",
    from_file="run/visualize-results.ipynb",
)
# Workflow: Map problem (build circuits), Tool: Visualization
VISUALIZE_CIRCUITS_PAGE = Entry(
    "Visualize circuits",
    slug="circuit-visualization",
    from_file="build/circuit-visualization.ipynb",
)
# Workflow: Optimize for hardware (simulators), Tool: Visualization
PLOT_QUANTUM_STATES_PAGE = Entry(
    "Plot quantum states",
    slug="plot-quantum-states",
    from_file="verify/plot-quantum-states.ipynb",
)

# Note: not used in Workflow.
SERVERLESS_PAGE = Entry(
    "Qiskit Serverless workloads",
    slug="qiskit-serverless",
    from_file="run/quantum-serverless.mdx",
)

GET_STARTED_CHILDREN = [
    Entry(
        "Introduction to Qiskit", slug="index", extra_page_content=index_page_content()
    ),
    Entry(
        "Install",
        children=(
            Entry(
                "Install Qiskit", slug="install-qiskit", from_file="start/install.mdx"
            ),
            Entry(
                "Set up an IBM Quantum channel",
                slug="setup-channel",
                from_file="start/setup-channel.mdx",
            ),
        ),
    ),
    Entry("Hello world", slug="hello-world", from_file="start/hello-world.ipynb"),
    Entry(
        "Advanced setup",
        children=(
            Entry(
                "Install the Qiskit SDK from source",
                slug="install-qiskit-source",
                from_file="start/install-qiskit-source.mdx",
            ),
            Entry(
                "Configure the Qiskit SDK locally",
                slug="configure-qiskit-local",
                from_file="start/configure-qiskit-local.mdx",
            ),
        ),
    ),
    Entry("Latest updates", slug="latest-updates", from_file=None),
]

CIRCUIT_CONSTRUCTION = [
    Entry(
        "Build circuits with the Qiskit SDK",
        children=(
            Entry(
                "Circuit library",
                slug="circuit-library",
                from_file="build/circuit-library.ipynb",
            ),
            Entry(
                "Construct circuits",
                slug="circuit-construction",
                from_file="build/circuit-construction.ipynb",
            ),
            VISUALIZE_CIRCUITS_PAGE,
            Entry(
                "Classical feedforward and control flow",
                slug="classical-feedforward-and-control-flow",
                from_file="build/classical-feedforward-and-control-flow.ipynb",
            ),
            Entry(
                "Synthesize unitary operators",
                slug="unitary-synthesis",
                from_file="build/unitary-synthesis.mdx",
            ),
            Entry(
                "Bit-ordering in the Qiskit SDK",
                slug="bit-ordering",
                from_file="build/bit-ordering.mdx",
            ),
            Entry(
                "Save circuits to disk",
                slug="save-circuits",
                from_file="build/save-circuits.ipynb",
            ),
        ),
    ),
    Entry(
        "Build operators with the Qiskit SDK",
        children=(
            Entry(
                "Operators module overview",
                slug="operators-overview",
                from_file="build/operators-overview.ipynb",
            ),
            Entry(
                "Specifying observables in the Pauli basis",
                slug="specify-observables-pauli",
                from_file="build/specify-observables-pauli.mdx",
            ),
        ),
    ),
    Entry(
        "Other circuit building tools",
        children=(
            Entry("Pulse schedules", slug="pulse", from_file="build/pulse.ipynb"),
            Entry(
                "OpenQASM",
                children=(
                    Entry(
                        "Intro to OpenQASM",
                        slug="introduction-to-qasm",
                        from_file="build/introduction-to-qasm.mdx",
                    ),
                    Entry(
                        "OpenQASM 2 and the Qiskit SDK",
                        slug="interoperate-qiskit-qasm2",
                        from_file="build/interoperate-qiskit-qasm2.mdx",
                    ),
                    Entry(
                        "OpenQASM 3 and the Qiskit SDK",
                        slug="interoperate-qiskit-qasm3",
                        from_file="build/interoperate-qiskit-qasm3.mdx",
                    ),
                    Entry(
                        "OpenQASM 3 feature table",
                        slug="qasm-feature-table",
                        from_file="build/qasm-feature-table.mdx",
                    ),
                    Entry(
                        "OpenQASM 3.x live specification",
                        external_url="https://openqasm.com/",
                    ),
                ),
            ),
        ),
    ),
]

TRANSPILER = (
    Entry(
        "Get started with the Qiskit transpiler",
        children=(
            Entry(
                "Introduction to transpilation",
                slug="transpile",
                from_file="transpile/index.mdx",
            ),
            Entry(
                "Transpiler stages",
                slug="transpiler-stages",
                from_file="transpile/transpiler-stages.ipynb",
            ),
            Entry(
                "Transpile with pass managers",
                slug="transpile-with-pass-managers",
                from_file="transpile/transpile-with-pass-managers.ipynb",
            ),
        ),
    ),
    Entry(
        "Configure preset pass managers",
        children=(
            Entry(
                "Default settings and configuration options",
                slug="defaults-and-configuration-options",
                from_file="transpile/defaults-and-configuration-options.ipynb",
            ),
            Entry(
                "Set optimization level",
                slug="set-optimization",
                from_file="transpile/set-optimization.ipynb",
            ),
            Entry(
                "Commonly used parameters for transpilation",
                slug="common-parameters",
                from_file="transpile/common-parameters.ipynb",
            ),
            Entry(
                "Represent quantum computers",
                slug="representing-quantum-computers",
                from_file="transpile/representing_quantum_computers.ipynb",
            ),
        ),
    ),
    Entry(
        "Advanced transpilation resources",
        children=(
            Entry(
                "Create a pass manager for dynamical decoupling",
                slug="dynamical-decoupling-pass-manager",
                from_file="transpile/dynamical-decoupling-pass-manager.ipynb",
            ),
            Entry(
                "Write a custom transpiler pass",
                slug="custom-transpiler-pass",
                from_file="transpile/custom-transpiler-pass.ipynb",
            ),
            Entry(
                "Transpile against custom backends",
                slug="custom-backend",
                from_file="transpile/custom-backend.ipynb",
            ),
            Entry(
                "Install and use transpiler plugins",
                slug="transpiler-plugins",
                from_file="transpile/transpiler-plugins.ipynb",
            ),
            Entry(
                "Create a transpiler plugin",
                slug="create-a-transpiler-plugin",
                from_file="transpile/create-a-transpiler-plugin.ipynb",
            ),
        ),
    ),
    Entry(
        "Qiskit transpiler service",
        children=(
            Entry(
                "Transpile circuits remotely with the Qiskit transpiler service",
                slug="qiskit-transpiler-service",
                from_file="transpile/qiskit-transpiler-service.mdx",
            ),
            Entry(
                "AI transpiler passes",
                slug="ai-transpiler-passes",
                from_file="transpile/ai-transpiler-passes.mdx",
            ),
        ),
    ),
)

SIMULATORS = (
    Entry(
        "Introduction to debugging tools",
        slug="verify",
        from_file="verify/index.mdx",
    ),
    Entry(
        "Exact simulation with Qiskit SDK primitives",
        slug="simulate-with-qiskit-sdk-primitives",
        from_file="verify/simulate-with-qiskit-primitives.mdx",
    ),
    Entry(
        "Exact and noisy simulation with Qiskit Aer primitives",
        slug="simulate-with-qiskit-aer",
        from_file="verify/simulate-with-qiskit-aer.ipynb",
    ),
    Entry(
        "Qiskit Runtime local testing mode",
        slug="local-testing-mode",
        from_file="verify/local-testing-mode.ipynb",
    ),
    Entry(
        "Build noise models",
        slug="building-noise-models",
        from_file="verify/building_noise_models.ipynb",
    ),
    PLOT_QUANTUM_STATES_PAGE,
    Entry(
        "Efficient simulation of stabilizer circuits with Qiskit Aer primitives",
        slug="stabilizer-circuit-simulation",
        from_file="verify/stabilizer-circuit-simulation.ipynb",
    ),
)

PRIMITIVES = (
    Entry(
        "Run with primitives",
        children=(
            Entry(
                "Introduction to primitives",
                slug="primitives",
                from_file="run/primitives.mdx",
            ),
            Entry(
                "Get started with primitives",
                slug="primitives-get-started",
                from_file="run/primitives-get-started.mdx",
            ),
            Entry(
                "Primitives examples",
                slug="primitives-examples",
                from_file="run/primitives-examples.mdx",
            ),
        ),
    ),
    Entry(
        "Configure runtime options",
        children=(
            Entry(
                "Configure runtime compilation",
                slug="configure-runtime-compilation",
                from_file="run/configure-runtime-compilation.mdx",
            ),
            Entry(
                "Configure runtime error mitigation",
                slug="configure-error-mitigation",
                from_file="run/configure-error-mitigation.mdx",
            ),
            Entry(
                "Advanced runtime options",
                slug="advanced-runtime-options",
                from_file="run/advanced-runtime-options.mdx",
            ),
        ),
    ),
)

EXECUTION_MODES = (
    Entry(
        "Introduction to execution modes",
        slug="execution-modes-intro",
        from_file="run/execution-modes.mdx",
    ),
    Entry(
        "Introduction to sessions",
        slug="sessions",
        from_file="run/sessions.mdx",
    ),
    Entry(
        "Run jobs in a session",
        slug="run-jobs-in-session",
        from_file="run/run-jobs-in-session.mdx",
    ),
    Entry(
        "Run jobs in a batch",
        slug="run-jobs-batch",
        from_file="run/run-jobs-batch.mdx",
    ),
    Entry(
        "Manage jobs",
        children=(
            Entry(
                "Monitor or cancel a job",
                slug="monitor-job",
                from_file="run/monitor-job.mdx",
            ),
            Entry(
                "Estimate job run time",
                slug="estimate-job-run-time",
                from_file="run/estimate-job-run-time.mdx",
            ),
            Entry(
                "Minimize job run time",
                slug="minimize-time",
                from_file="run/minimize-time.mdx",
            ),
            Entry(
                "Maximum execution time",
                slug="max-execution-time",
                from_file="run/max-execution-time.mdx",
            ),
            RETRIEVE_RESULTS_PAGE,
        ),
    ),
    Entry(
        "Execution modes FAQs",
        slug="execution-modes-faq",
        from_file="run/execution-modes-faq.mdx",
    ),
)

SYSTEMS_CHILDREN = (
    Entry(
        "Processor types", slug="processor-types", from_file="run/processor-types.mdx"
    ),
    Entry(
        "System information",
        slug="system-information",
        from_file="run/system-information.mdx",
    ),
    Entry(
        "Get backend information with Qiskit",
        slug="get-backend-information",
        from_file="run/get-backend-information.ipynb",
    ),
    Entry(
        "Native gates and operations",
        slug="native-gates",
        from_file="run/native-gates.mdx",
    ),
    Entry(
        "Retired systems", slug="retired-systems", from_file="run/retired-systems.mdx"
    ),
    Entry(
        "Hardware considerations and limitations for classical feedforward and control flow",
        slug="dynamic-circuits-considerations",
        from_file="run/dynamic-circuits-considerations.ipynb",
    ),
    Entry("Instances", slug="instances", from_file="run/instances.mdx"),
    Entry(
        "Fair-share scheduler",
        slug="fair-share-queue",
        from_file="run/fair-share-queue.mdx",
    ),
    Entry("Manage cost", slug="manage-cost", from_file="run/manage-cost.mdx"),
)

WORKFLOW_FOLDER_AS_INDEX_CHILDREN = (
    Entry(
        "Introduction to Qiskit Patterns",
        slug="intro-to-patterns",
        extra_page_content=patterns_index_content(),
    ),
    Entry(
        "Map problem to circuits",
        slug="map-problem-to-circuits",
        extra_page_content=map_content(entries_as_markdown_list(CIRCUIT_CONSTRUCTION)),
    ),
    Entry(
        "Optimize for hardware",
        slug="optimize-for-hardware",
        extra_page_content=optimize_content(
            entries_as_markdown_list(
                [
                    *TRANSPILER,
                    Entry("Debugging tools", children=SIMULATORS),
                ]
            )
        ),
    ),
    Entry(
        "Execute on hardware",
        slug="execute-on-hardware",
        extra_page_content=execute_index_content(
            entries_as_markdown_list(
                filter_entries(
                    [
                        *PRIMITIVES,
                        *EXECUTION_MODES,
                        Entry(
                            "Systems and platform information",
                            children=SYSTEMS_CHILDREN,
                        ),
                    ],
                    ignore=[RETRIEVE_RESULTS_PAGE],
                )
            )
        ),
    ),
    Entry(
        "Postprocess results",
        slug="postprocess-results",
        extra_page_content=postprocess_index_content(
            entries_as_markdown_list([RETRIEVE_RESULTS_PAGE, VISUALIZE_RESULTS_PAGE])
        ),
    ),
)


TOOL_ENTRIES = (
    Entry(
        "Circuits and operators",
        children=filter_entries(CIRCUIT_CONSTRUCTION, ignore=[VISUALIZE_CIRCUITS_PAGE]),
    ),
    Entry("Transpiler", children=TRANSPILER),
    Entry(
        "Debugging tools",
        children=filter_entries(SIMULATORS, ignore=[PLOT_QUANTUM_STATES_PAGE]),
    ),
    Entry("Primitives", children=PRIMITIVES),
    Entry("Execution modes", children=EXECUTION_MODES),
    Entry("IBM Quantum systems", children=SYSTEMS_CHILDREN),
    Entry(
        "Visualization",
        children=(
            VISUALIZE_CIRCUITS_PAGE,
            PLOT_QUANTUM_STATES_PAGE,
            VISUALIZE_RESULTS_PAGE,
        ),
    ),
    SERVERLESS_PAGE,
)


TOP_LEVEL_ENTRIES = (
    Entry("Get started"),
    *GET_STARTED_CHILDREN,
    Entry("Workflow"),
    *WORKFLOW_FOLDER_AS_INDEX_CHILDREN,
    Entry("Tools"),
    *TOOL_ENTRIES,
)

# ------------------------------------------------------------------------------
# Results
# ------------------------------------------------------------------------------


def write_result(folder: str, entries: tuple[Entry, ...]) -> None:
    folder_path = Path("docs", folder)
    if folder_path.exists():
        shutil.rmtree(folder_path)
    folder_path.mkdir(parents=True)

    for entry in entries:
        entry.ensure_slugs_exist(folder_path)

    result = {
        "title": "Guides",
        "collapsed": True,
        "children": [entry.to_json(folder) for entry in entries],
    }
    text = json.dumps(result, indent=2)
    (folder_path / "_toc.json").write_text(text)


def get_redirects(entries: tuple[Entry, ...]) -> list[str]:
    redirects = []
    for entry in entries:
        if entry.from_file and entry.from_file != "__unset__" and entry.slug:
            old_url = Path(entry.from_file).with_suffix("")
            redirects.append(f'["{old_url}", "{entry.slug}"],')
        redirects.extend(get_redirects(entry.children))
    return sorted(redirects)


def gen_redirects_file(entries: tuple[Entry, ...]) -> None:
    fp = Path("redirects.txt")
    fp.write_text("[\n")
    redirects = get_redirects(entries)
    with fp.open("a") as file:
        for redirect in redirects:
            file.write(f"  {redirect}\n")
        file.write("]")


write_result("guides", TOP_LEVEL_ENTRIES)
gen_redirects_file(TOP_LEVEL_ENTRIES)
