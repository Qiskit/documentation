from __future__ import annotations
import sphinx.addnodes as sphinx_nodes
from qiskit_docs_builder.visitors.class_visitor import (
    _get_child,
    _extract_github_url,
    _extract_signature,
    _extract_description,
    _extract_parameters,
    _extract_returns,
    _extract_raises,
    _extract_method_modifiers,
    _extract_version_info,
)


def visit_function(desc: sphinx_nodes.desc) -> dict:
    sigs = [c for c in desc.children if isinstance(c, sphinx_nodes.desc_signature)]
    sig = sigs[0] if sigs else None
    content = _get_child(desc, sphinx_nodes.desc_content)

    fullname = sig.get("ids", [""])[0] if sig else ""
    module = sig.get("module", "") if sig else ""
    name = fullname.split(".")[-1] if fullname else ""
    objtype = desc.get("objtype", "function")

    return {
        "id": fullname,
        "type": objtype,
        "name": name,
        "module": module,
        "githubUrl": _extract_github_url(sig),
        "signature": _extract_signature(sig),
        "extraSignatures": [_extract_signature(s) for s in sigs[1:]],
        "modifiers": _extract_method_modifiers(sig),
        "isDedicatedPage": True,
        "description": _extract_description(content) if content else [],
        "parameters": _extract_parameters(content) if content else [],
        "returns": _extract_returns(content) if content else {"description": None, "type": None},
        "raises": _extract_raises(content) if content else [],
        "versionInfo": _extract_version_info(content) if content else {"added": None, "deprecated": None, "deprecationMessage": None},
    }
