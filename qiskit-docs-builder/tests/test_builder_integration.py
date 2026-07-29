"""Integration tests that run against the real qiskit-ibm-runtime JSON build output.

Run after `tox -e docs-json` in qiskit-ibm-runtime. Set QISKIT_RUNTIME_JSON_DIR
to the path of the JSON build output.
"""
import json
import os
import pytest
from pathlib import Path

JSON_DIR = os.environ.get(
    "QISKIT_RUNTIME_JSON_DIR",
    os.path.expanduser("~/repos/qiskit-ibm-runtime/docs/_build/json")
)

@pytest.fixture
def json_dir():
    d = Path(JSON_DIR)
    if not d.exists():
        pytest.skip(f"JSON build output not found at {d}. Run tox -e docs-json first.")
    return d


def _simulator_options_path(json_dir):
    """Return the path to the SimulatorOptions or LegacySimulatorOptions JSON file.

    The class was renamed from SimulatorOptions to LegacySimulatorOptions in
    newer versions of qiskit-ibm-runtime.
    """
    for name in (
        "qiskit_ibm_runtime.options.SimulatorOptions",
        "qiskit_ibm_runtime.options.LegacySimulatorOptions",
    ):
        p = json_dir / f"stubs/{name}.json"
        if p.exists():
            return p
    pytest.skip("Neither SimulatorOptions nor LegacySimulatorOptions JSON found.")


def test_simulator_options_class(json_dir):
    path = _simulator_options_path(json_dir)
    data = json.loads(path.read_text())
    # The class was renamed in newer versions; accept either name
    assert data["id"] in (
        "qiskit_ibm_runtime.options.SimulatorOptions",
        "qiskit_ibm_runtime.options.LegacySimulatorOptions",
    )
    assert data["type"] == "class"
    assert data["name"] in ("SimulatorOptions", "LegacySimulatorOptions")
    assert data["module"] == "qiskit_ibm_runtime.options"
    attr_names = [a["name"] for a in data["attributes"]]
    assert "coupling_map" in attr_names
    assert "basis_gates" in attr_names
    method_names = [m["name"] for m in data["methods"]]
    assert "set_backend" in method_names


def test_coupling_map_type_ast(json_dir):
    path = _simulator_options_path(json_dir)
    data = json.loads(path.read_text())
    coupling = next(a for a in data["attributes"] if a["name"] == "coupling_map")
    t = coupling["type"]
    # Type should be parsed as a union: UnsetType | list[list[int]] | CouplingMap
    assert t["kind"] == "union"
    member_names = [m.get("text", "") for m in t["members"]]
    assert "UnsetType" in member_names
    # list[list[int]] should be a generic node
    generic_member = next((m for m in t["members"] if m.get("kind") == "generic"), None)
    assert generic_member is not None
    assert generic_member["name"] == "list"
    # CouplingMap should be present as either a ref (if intersphinx resolved it) or a name
    coupling_map_member = next(
        (m for m in t["members"] if "CouplingMap" in m.get("text", "")),
        None
    )
    assert coupling_map_member is not None


def test_set_backend_method(json_dir):
    path = _simulator_options_path(json_dir)
    data = json.loads(path.read_text())
    method = next(m for m in data["methods"] if m["name"] == "set_backend")
    assert len(method["parameters"]) == 1
    assert method["parameters"][0]["name"] == "backend"
    assert len(method["raises"]) == 1


def test_toc_exists(json_dir):
    toc = json.loads((json_dir / "toc.json").read_text())
    assert "title" in toc
    assert "children" in toc


def test_package_json(json_dir):
    pkg = json.loads((json_dir / "_package.json").read_text())
    assert pkg["name"] is not None
    assert pkg["version"] is not None
