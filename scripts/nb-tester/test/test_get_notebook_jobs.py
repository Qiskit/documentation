from pathlib import Path
from textwrap import dedent
from unittest import mock

from qiskit_docs_notebook_tester.config import (
    get_notebook_jobs,
    NotebookJob,
    Result,
    get_parser,
    PRE_EXECUTE_CODE,
)

parser = get_parser()

QISKIT_PROVIDER_PATCH = """
import warnings
from qiskit.providers.fake_provider import GenericBackendV2
from qiskit_ibm_runtime import QiskitRuntimeService

warnings.filterwarnings("ignore", message="Options {.*} have no effect in local testing mode.")
warnings.filterwarnings("ignore", message="Session is not supported in local testing mode or when using a simulator.")

def patched_least_busy(self, *args, **kwargs):
    return GenericBackendV2(num_qubits=5)

QiskitRuntimeService.least_busy = patched_least_busy
"""


def test_no_config_file():
    filenames = ["path/to/notebook.ipynb", "path/to/another.ipynb"]
    args = parser.parse_args(filenames)
    jobs = list(get_notebook_jobs(args))
    assert jobs == [
        NotebookJob(
            path=Path(path),
            pre_execute_code=PRE_EXECUTE_CODE,
            backend_patch=None,
            cell_timeout=None,
            write=Result(False, "--write arg not set"),
        )
        for path in filenames
    ]


def test_no_config_file_no_filenames():
    args = parser.parse_args([])
    assert list(get_notebook_jobs(args)) == []


def test_cli_patch():
    args = parser.parse_args(
        [
            "path/to/notebook.ipynb",
            "--write",
            "--patch",
            '{ patch="qiskit-ibm-runtime", backend="test-eagle", qiskit_runtime_service_args="" }',
        ]
    )
    expected_patch = dedent(
        """
        from qiskit_ibm_runtime import QiskitRuntimeService

        def patched_least_busy(self, *args, **kwargs):
            service = QiskitRuntimeService()
            return service.backend("test-eagle")

        QiskitRuntimeService.least_busy = patched_least_busy
        """
    )
    jobs = list(get_notebook_jobs(args))
    # Separate assertions make it easier to see diff in failed tests
    assert jobs[0].backend_patch == expected_patch
    assert jobs[0].write.reason == "hardware was mocked"
    assert jobs == [
        NotebookJob(
            path=Path("path/to/notebook.ipynb"),
            pre_execute_code=PRE_EXECUTE_CODE,
            backend_patch=expected_patch,
            cell_timeout=None,
            write=Result(False, "hardware was mocked"),
        )
    ]


def test_config_file():
    args = parser.parse_args(["--write", "--config-path", "path/to/config.toml"])
    config_file = dedent(
        """
        default-strategy="ci"
        test-strategies.ci = { timeout = 350 }
        
        [groups]
        [groups.default]
        test-strategies.ci = { patch="qiskit-fake-provider", num_qubits=5 }
        notebooks = ["path/to/notebook.ipynb"]
                         
        [groups.other]
        notebooks = ["path/to/another.ipynb"]
        """
    )
    # Patch all read operations to return the config file
    with mock.patch("pathlib.Path.read_text", lambda _: config_file):
        jobs = list(get_notebook_jobs(args))

    # Separate assertions make it easier to see diff in failed tests
    assert jobs[0].backend_patch == QISKIT_PROVIDER_PATCH
    assert jobs[0].write.reason == "hardware was mocked"
    assert jobs == [
        NotebookJob(
            path=Path("path/to/notebook.ipynb"),
            pre_execute_code=PRE_EXECUTE_CODE,
            backend_patch=QISKIT_PROVIDER_PATCH,
            cell_timeout=350,
            write=Result(False, "hardware was mocked"),
        )
    ]


def test_config_file_with_filenames():
    args = parser.parse_args(
        ["path/to/notebook.ipynb", "--write", "--config-path", "path/to/config.toml"]
    )
    config_file = dedent(
        """
        default-strategy="main"
        
        [groups]
        [groups.default]
        test-strategies.main = {}
        notebooks = [
            "path/to/notebook.ipynb",
            "path/to/another.ipynb",
        ]
        """
    )
    # Patch all read operations to return the config file
    with mock.patch("pathlib.Path.read_text", lambda _: config_file):
        jobs = list(get_notebook_jobs(args))
    assert jobs == [
        NotebookJob(
            path=Path("path/to/notebook.ipynb"),
            pre_execute_code=PRE_EXECUTE_CODE,
            backend_patch=None,
            cell_timeout=None,
            write=Result(True),
        )
    ]


def test_config_strategy_selection():
    args = parser.parse_args(
        [
            "--config-path",
            "path/to/config.toml",
            "--test-strategy",
            "other",
        ]
    )
    config_file = dedent(
        """
        [groups]
        [groups.default]
        test-strategies.main = {}
        notebooks = [
            "path/to/notebook.ipynb",
            "path/to/another.ipynb",
        ]
        [groups.other]
        test-strategies.other = {}
        notebooks = [
            "path/to/notebook-in-other-group.ipynb",
        ]
        """
    )
    # Patch all read operations to return the config file
    with mock.patch("pathlib.Path.read_text", lambda _: config_file):
        jobs = list(get_notebook_jobs(args))
    assert jobs == [
        NotebookJob(
            path=Path("path/to/notebook-in-other-group.ipynb"),
            pre_execute_code=PRE_EXECUTE_CODE,
            backend_patch=None,
            cell_timeout=None,
            write=Result(False, "--write arg not set"),
        )
    ]


def test_config_with_different_patches_per_notebook():
    args = parser.parse_args(
        [
            "--config-path",
            "path/to/config.toml",
            "--test-strategy",
            "default",
        ]
    )
    config_file = dedent(
        """
        [groups]
        [groups.no-patch]
        test-strategies.default = {}
        notebooks = ["path/to/notebook.ipynb"]
        [groups.patch]
        test-strategies.default = { patch="qiskit-fake-provider", num_qubits=5 }
        notebooks = ["path/to/another.ipynb"]
        """
    )
    # Patch all read operations to return the config file
    with mock.patch("pathlib.Path.read_text", lambda _: config_file):
        jobs = list(get_notebook_jobs(args))
    assert jobs == [
        NotebookJob(
            path=Path("path/to/notebook.ipynb"),
            pre_execute_code=PRE_EXECUTE_CODE,
            backend_patch=None,
            cell_timeout=None,
            write=Result(False, "--write arg not set"),
        ),
        NotebookJob(
            path=Path("path/to/another.ipynb"),
            pre_execute_code=PRE_EXECUTE_CODE,
            backend_patch=QISKIT_PROVIDER_PATCH,
            cell_timeout=None,
            write=Result(False, "hardware was mocked"),
        ),
    ]

def test_patch_file():
    args = parser.parse_args(
        [
            "path/to/notebook.ipynb",
            "--patch",
            '{ patch="path/to/file.txt", text="Hello, world!" }',
        ]
    )

    patch_file = "print('{text}')"

    with mock.patch("pathlib.Path.exists", lambda _: True):
        with mock.patch("pathlib.Path.read_text", lambda _: patch_file):
            jobs = list(get_notebook_jobs(args))

    assert jobs[0].backend_patch == "print('Hello, world!')"
    assert jobs == [
        NotebookJob(
            path=Path("path/to/notebook.ipynb"),
            pre_execute_code=PRE_EXECUTE_CODE,
            backend_patch="print('Hello, world!')",
            cell_timeout=None,
            write=Result(False, "hardware was mocked"),
        )
    ]

