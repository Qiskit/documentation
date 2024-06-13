# This code is a Qiskit project.
#
# (C) Copyright IBM 2024.
#
# This code is licensed under the Apache License, Version 2.0. You may obtain a
# copy of this license in the LICENSE file in the root directory of this source
# tree or at http://www.apache.org/licenses/LICENSE-2.0.
#
# Any modifications or derivative works of this code must retain this copyright
# notice, and modified files need to carry a notice indicating that they have
# been altered from the originals.

from models import Entry, entries_as_markdown_list, filter_entries
from page_content import (
    index_page_content,
    execute_index_content,
    map_content,
    postprocess_index_content,
    optimize_content,
    patterns_index_content,
)


# ------------------------------------------------------------------------------
# Standalone pages
# ------------------------------------------------------------------------------

# These pages are standalone variables so that we have better control of
# where they show up in Tools vs the Workflow index page. For example,
# `save-jobs` is in the `Execution Modes` tool, which normally gets added
# to `execute-on-hardware.mdx`; however, we put the page
# on `postprocess-results.mdx` instead.

# Workflow: Post-Process, Tool: Execution Modes (manage jobs)
RETRIEVE_RESULTS_PAGE = Entry(
    "Retrieve and save results",
    slug="/save-jobs",
    from_file="run/save-jobs.ipynb",
)
# Workflow: Post-process, Tool: Visualization
VISUALIZE_RESULTS_PAGE = Entry(
    "Visualize results",
    slug="/visualize-results",
    from_file="run/visualize-results.ipynb",
)
# Workflow: Map problem (build circuits), Tool: Visualization
VISUALIZE_CIRCUITS_PAGE = Entry(
    "Visualize circuits",
    slug="/visualize-circuits",
    from_file="build/circuit-visualization.ipynb",
)
# Workflow: Optimize for hardware (simulators), Tool: Visualization
PLOT_QUANTUM_STATES_PAGE = Entry(
    "Plot quantum states",
    slug="/plot-quantum-states",
    from_file="verify/plot-quantum-states.ipynb",
)

# Note: not used in Workflow.
SERVERLESS_PAGE = Entry(
    "Qiskit Serverless workloads",
    slug="/qiskit-serverless",
    from_file="run/quantum-serverless.mdx",
)


# ------------------------------------------------------------------------------
# Sections
# ------------------------------------------------------------------------------

GET_STARTED_CHILDREN = [
    Entry("Introduction to Qiskit", slug="", page_content=index_page_content()),
    Entry(
        "Install",
        children=(
            Entry(
                "Install Qiskit", slug="/install-qiskit", from_file="start/install.mdx"
            ),
            Entry(
                "Set up an IBM Quantum channel",
                slug="/setup-channel",
                from_file="start/setup-channel.mdx",
            ),
        ),
    ),
    Entry("Hello world", slug="/hello-world", from_file="start/hello-world.ipynb"),
    Entry(
        "Advanced setup",
        children=(
            Entry(
                "Install the Qiskit SDK from source",
                slug="/install-qiskit-source",
                from_file="start/install-qiskit-source.mdx",
            ),
            Entry(
                "Configure the Qiskit SDK locally",
                slug="/configure-qiskit-local",
                from_file="start/configure-qiskit-local.mdx",
            ),
        ),
    ),
]

CIRCUIT_CONSTRUCTION = (
    Entry(
        "Build circuits with the Qiskit SDK",
        children=(
            Entry(
                "Circuit library",
                slug="/circuit-library",
                from_file="build/circuit-library.ipynb",
            ),
            Entry(
                "Construct circuits",
                slug="/construct-circuits",
                from_file="build/circuit-construction.ipynb",
            ),
            VISUALIZE_CIRCUITS_PAGE,
            Entry(
                "Classical feedforward and control flow",
                slug="/classical-feedforward-and-control-flow",
                from_file="build/classical-feedforward-and-control-flow.ipynb",
            ),
            Entry(
                "Synthesize unitary operators",
                slug="/synthesize-unitary-operators",
                from_file="build/unitary-synthesis.mdx",
            ),
            Entry(
                "Bit-ordering in the Qiskit SDK",
                slug="/bit-ordering",
                from_file="build/bit-ordering.mdx",
            ),
            Entry(
                "Save circuits to disk",
                slug="/save-circuits",
                from_file="build/save-circuits.ipynb",
            ),
        ),
    ),
    Entry(
        "Build operators with the Qiskit SDK",
        children=(
            Entry(
                "Operators module overview",
                slug="/operators-overview",
                from_file="build/operators-overview.ipynb",
            ),
            Entry(
                "Specifying observables in the Pauli basis",
                slug="/specify-observables-pauli",
                from_file="build/specify-observables-pauli.mdx",
            ),
        ),
    ),
    Entry(
        "Other circuit building tools",
        children=(
            Entry("Pulse schedules", slug="/pulse", from_file="build/pulse.ipynb"),
            Entry(
                "OpenQASM",
                children=(
                    Entry(
                        "Intro to OpenQASM",
                        slug="/introduction-to-qasm",
                        from_file="build/introduction-to-qasm.mdx",
                    ),
                    Entry(
                        "OpenQASM 2 and the Qiskit SDK",
                        slug="/interoperate-qiskit-qasm2",
                        from_file="build/interoperate-qiskit-qasm2.mdx",
                    ),
                    Entry(
                        "OpenQASM 3 and the Qiskit SDK",
                        slug="/interoperate-qiskit-qasm3",
                        from_file="build/interoperate-qiskit-qasm3.mdx",
                    ),
                    Entry(
                        "OpenQASM 3 feature table",
                        slug="/qasm-feature-table",
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
)

TRANSPILER = (
    Entry(
        "Get started with the Qiskit transpiler",
        children=(
            Entry(
                "Introduction to transpilation",
                slug="/transpile",
                from_file="transpile/index.mdx",
            ),
            Entry(
                "Transpiler stages",
                slug="/transpiler-stages",
                from_file="transpile/transpiler-stages.ipynb",
            ),
            Entry(
                "Transpile with pass managers",
                slug="/transpile-with-pass-managers",
                from_file="transpile/transpile-with-pass-managers.ipynb",
            ),
        ),
    ),
    Entry(
        "Configure preset pass managers",
        children=(
            Entry(
                "Default settings and configuration options",
                slug="/defaults-and-configuration-options",
                from_file="transpile/defaults-and-configuration-options.ipynb",
            ),
            Entry(
                "Set optimization level",
                slug="/set-optimization",
                from_file="transpile/set-optimization.ipynb",
            ),
            Entry(
                "Commonly used parameters for transpilation",
                slug="/common-parameters",
                from_file="transpile/common-parameters.ipynb",
            ),
            Entry(
                "Represent quantum computers",
                slug="/represent-quantum-computers",
                from_file="transpile/representing_quantum_computers.ipynb",
            ),
        ),
    ),
    Entry(
        "Advanced transpilation resources",
        children=(
            Entry(
                "Create a pass manager for dynamical decoupling",
                slug="/dynamical-decoupling-pass-manager",
                from_file="transpile/dynamical-decoupling-pass-manager.ipynb",
            ),
            Entry(
                "Write a custom transpiler pass",
                slug="/custom-transpiler-pass",
                from_file="transpile/custom-transpiler-pass.ipynb",
            ),
            Entry(
                "Transpile against custom backends",
                slug="/custom-backend",
                from_file="transpile/custom-backend.ipynb",
            ),
            Entry(
                "Install and use transpiler plugins",
                slug="/transpiler-plugins",
                from_file="transpile/transpiler-plugins.ipynb",
            ),
            Entry(
                "Create a transpiler plugin",
                slug="/create-transpiler-plugin",
                from_file="transpile/create-a-transpiler-plugin.ipynb",
            ),
        ),
    ),
    Entry(
        "Qiskit transpiler service",
        children=(
            Entry(
                "Transpile circuits remotely with the Qiskit transpiler service",
                slug="/qiskit-transpiler-service",
                from_file="transpile/qiskit-transpiler-service.mdx",
            ),
            Entry(
                "AI transpiler passes",
                slug="/ai-transpiler-passes",
                from_file="transpile/ai-transpiler-passes.mdx",
            ),
        ),
    ),
)

SIMULATORS = (
    Entry(
        "Introduction to debugging tools",
        slug="/debugging-tools",
        from_file="verify/index.mdx",
    ),
    Entry(
        "Exact simulation with Qiskit SDK primitives",
        slug="/simulate-with-qiskit-sdk-primitives",
        from_file="verify/simulate-with-qiskit-primitives.mdx",
    ),
    Entry(
        "Exact and noisy simulation with Qiskit Aer primitives",
        slug="/simulate-with-qiskit-aer",
        from_file="verify/simulate-with-qiskit-aer.ipynb",
    ),
    Entry(
        "Qiskit Runtime local testing mode",
        slug="/local-testing-mode",
        from_file="verify/local-testing-mode.ipynb",
    ),
    Entry(
        "Build noise models",
        slug="/build-noise-models",
        from_file="verify/building_noise_models.ipynb",
    ),
    PLOT_QUANTUM_STATES_PAGE,
    Entry(
        "Efficient simulation of stabilizer circuits with Qiskit Aer primitives",
        slug="/simulate-stabilizer-circuits",
        from_file="verify/stabilizer-circuit-simulation.ipynb",
    ),
)

PRIMITIVES = (
    Entry(
        "Run with primitives",
        children=(
            Entry(
                "Introduction to primitives",
                slug="/primitives",
                from_file="run/primitives.mdx",
            ),
            Entry(
                "Get started with primitives",
                slug="/get-started-with-primitives",
                from_file="run/primitives-get-started.mdx",
            ),
            Entry(
                "Primitives examples",
                slug="/primitives-examples",
                from_file="run/primitives-examples.mdx",
            ),
        ),
    ),
    Entry(
        "Configure runtime options",
        children=(
            Entry(
                "Configure runtime compilation",
                slug="/configure-runtime-compilation",
                from_file="run/configure-runtime-compilation.mdx",
            ),
            Entry(
                "Configure runtime error mitigation",
                slug="/configure-error-mitigation",
                from_file="run/configure-error-mitigation.mdx",
            ),
            Entry(
                "Advanced runtime options",
                slug="/advanced-runtime-options",
                from_file="run/advanced-runtime-options.mdx",
            ),
        ),
    ),
)

MANAGE_JOBS_FOLDER = Entry(
    "Manage jobs",
    children=(
        Entry(
            "Monitor or cancel a job",
            slug="/monitor-job",
            from_file="run/monitor-job.mdx",
        ),
        Entry(
            "Estimate job run time",
            slug="/estimate-job-run-time",
            from_file="run/estimate-job-run-time.mdx",
        ),
        Entry(
            "Minimize job run time",
            slug="/minimize-time",
            from_file="run/minimize-time.mdx",
        ),
        Entry(
            "Maximum execution time",
            slug="/max-execution-time",
            from_file="run/max-execution-time.mdx",
        ),
        RETRIEVE_RESULTS_PAGE,
    ),
)

EXECUTION_MODES_CHILDREN = (
    Entry(
        "Introduction to execution modes",
        slug="/execution-modes",
        from_file="run/execution-modes.mdx",
    ),
    Entry(
        "Introduction to sessions",
        slug="/sessions",
        from_file="run/sessions.mdx",
    ),
    Entry(
        "Run jobs in a session",
        slug="/run-jobs-session",
        from_file="run/run-jobs-in-session.mdx",
    ),
    Entry(
        "Run jobs in a batch",
        slug="/run-jobs-batch",
        from_file="run/run-jobs-batch.mdx",
    ),
    MANAGE_JOBS_FOLDER,
    Entry(
        "Execution modes FAQs",
        slug="/execution-modes-faq",
        from_file="run/execution-modes-faq.mdx",
    ),
)

SYSTEMS_CHILDREN = (
    Entry(
        "Processor types", slug="/processor-types", from_file="run/processor-types.mdx"
    ),
    Entry(
        "System information",
        slug="/system-information",
        from_file="run/system-information.mdx",
    ),
    Entry(
        "Get backend information with Qiskit",
        slug="/get-backend-information",
        from_file="run/get-backend-information.ipynb",
    ),
    Entry(
        "Native gates and operations",
        slug="/native-gates",
        from_file="run/native-gates.mdx",
    ),
    Entry(
        "Retired systems", slug="/retired-systems", from_file="run/retired-systems.mdx"
    ),
    Entry(
        "Hardware considerations and limitations for classical feedforward and control flow",
        slug="/dynamic-circuits-considerations",
        from_file="run/dynamic-circuits-considerations.ipynb",
    ),
    Entry("Instances", slug="/instances", from_file="run/instances.mdx"),
    Entry(
        "Fair-share scheduler",
        slug="/fair-share-scheduler",
        from_file="run/fair-share-queue.mdx",
    ),
    Entry("Manage cost", slug="/manage-cost", from_file="run/manage-cost.mdx"),
)

PATTERNS_CHILDREN = (
    Entry(
        "Introduction to Qiskit Patterns",
        slug="/intro-to-patterns",
        page_content=patterns_index_content(),
    ),
    Entry(
        "Map problem to circuits",
        slug="/map-problem-to-circuits",
        page_content=map_content(entries_as_markdown_list(CIRCUIT_CONSTRUCTION)),
    ),
    Entry(
        "Optimize for hardware",
        slug="/optimize-for-hardware",
        page_content=optimize_content(
            entries_as_markdown_list(
                (
                    *TRANSPILER,
                    Entry("Debugging tools", children=SIMULATORS),
                )
            )
        ),
    ),
    Entry(
        "Execute on hardware",
        slug="/execute-on-hardware",
        page_content=execute_index_content(
            entries_as_markdown_list(
                (
                    *PRIMITIVES,
                    Entry(
                        "Execution modes",
                        children=filter_entries(
                            EXECUTION_MODES_CHILDREN, ignore={MANAGE_JOBS_FOLDER}
                        ),
                    ),
                    *filter_entries(
                        (MANAGE_JOBS_FOLDER,), ignore={RETRIEVE_RESULTS_PAGE}
                    ),
                    Entry(
                        "Systems and platform information",
                        children=SYSTEMS_CHILDREN,
                    ),
                )
            )
        ),
    ),
    Entry(
        "Post-process results",
        slug="/postprocess-results",
        page_content=postprocess_index_content(
            entries_as_markdown_list((RETRIEVE_RESULTS_PAGE, VISUALIZE_RESULTS_PAGE))
        ),
    ),
)


TOOL_ENTRIES = (
    Entry(
        "Circuits and operators",
        children=filter_entries(CIRCUIT_CONSTRUCTION, ignore={VISUALIZE_CIRCUITS_PAGE}),
    ),
    Entry("Transpiler", children=TRANSPILER),
    Entry(
        "Debugging tools",
        children=filter_entries(SIMULATORS, ignore={PLOT_QUANTUM_STATES_PAGE}),
    ),
    Entry("Primitives", children=PRIMITIVES),
    Entry("Execution modes", children=EXECUTION_MODES_CHILDREN),
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
    Entry("Get started", label=True, children=GET_STARTED_CHILDREN),
    Entry("Workflow", label=True, children=PATTERNS_CHILDREN),
    Entry("Tools", label=True, children=TOOL_ENTRIES),
)
