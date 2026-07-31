from __future__ import annotations
from docutils import nodes
import sphinx.addnodes as sphinx_nodes
from qiskit_docs_builder.nodes.type_ast import parse_type_node, parse_type_string, parse_bases_paragraph
from qiskit_docs_builder.nodes.content_ast import parse_content, _parse_inline_children, _parse_node, _parse_inline


def visit_class(desc: sphinx_nodes.desc) -> dict:
    """Extract a class page dict from a Sphinx desc node."""
    sigs = [c for c in desc.children if isinstance(c, sphinx_nodes.desc_signature)]
    sig = sigs[0] if sigs else None
    content = _get_child(desc, sphinx_nodes.desc_content)

    fullname = sig.get("ids", [""])[0] if sig else ""
    module = sig.get("module", "") if sig else ""
    name = fullname.split(".")[-1] if fullname else ""
    objtype = desc.get("objtype", "class")
    modifiers = objtype

    github_url = _extract_github_url(sig)
    signature = _extract_signature(sig)
    extra_signatures = [_extract_signature(s) for s in sigs[1:]]
    bases = _extract_bases(content)
    description = _extract_description(content)
    parameters = _extract_parameters(content)
    attributes = _extract_members(content, "attribute")
    methods = _extract_members(content, "method")
    version_info = _extract_version_info(content)

    return {
        "id": fullname,
        "type": objtype,
        "name": name,
        "module": module,
        "githubUrl": github_url,
        "signature": signature,
        "extraSignatures": extra_signatures,
        "modifiers": modifiers,
        "description": description,
        "bases": bases,
        "versionInfo": version_info,
        "parameters": parameters,
        "attributes": attributes,
        "methods": methods,
    }


def _get_child(node, cls):
    idx = node.first_child_matching_class(cls)
    return node.children[idx] if idx is not None else None


def _extract_github_url(sig) -> str | None:
    if sig is None:
        return None
    for child in sig.children:
        if isinstance(child, nodes.reference):
            # After OnlyNodeTransform unwraps `only expr="html"`, the reference
            # lands here with empty classes. Any reference in desc_signature is
            # a source link (linkcode/viewcode).
            url = child.get("refuri", "")
            if url:
                return url
        # Fallback: if "html" tag wasn't set, the `only` node may survive as-is.
        if isinstance(child, sphinx_nodes.only):
            for grandchild in child.children:
                if isinstance(grandchild, nodes.reference):
                    url = grandchild.get("refuri", "")
                    if url:
                        return url
    return None


def _extract_signature(sig) -> str:
    if sig is None:
        return ""
    name = ""
    params = ""
    for child in sig.children:
        if isinstance(child, sphinx_nodes.desc_name):
            name = child.astext()
        elif isinstance(child, sphinx_nodes.desc_parameterlist):
            params = child.astext()
            if not params.startswith("("):
                params = "(" + params + ")"
    return f"{name}{params}" if params else name


def _extract_bases(content) -> list[dict]:
    if content is None:
        return []
    for child in content.children:
        if isinstance(child, nodes.paragraph) and child.astext().startswith("Bases:"):
            return parse_bases_paragraph(child)
    return []


def _extract_description(content) -> list[dict]:
    if content is None:
        return []
    skip_types = (sphinx_nodes.desc,)
    result = []
    for child in content.children:
        if isinstance(child, skip_types):
            continue
        if isinstance(child, nodes.paragraph) and child.astext().startswith("Bases:"):
            continue
        if isinstance(child, nodes.field_list):
            continue
        if isinstance(child, nodes.rubric):
            continue
        parsed = _parse_node_for_description(child)
        if parsed:
            if isinstance(parsed, list):
                result.extend(parsed)
            else:
                result.append(parsed)
    return result


def _parse_node_for_description(node):
    return _parse_node(node)


def _extract_parameters(content) -> list[dict]:
    if content is None:
        return []
    params = []
    for child in content.children:
        if isinstance(child, nodes.field_list):
            for field in child.children:
                if not isinstance(field, nodes.field):
                    continue
                field_name = field.children[0].astext() if field.children else ""
                if field_name.lower() != "parameters":
                    continue
                field_body = field.children[1] if len(field.children) > 1 else None
                if field_body is None:
                    continue
                for item in field_body.children:
                    param = _parse_parameter_item(item)
                    if param:
                        if isinstance(param, list):
                            params.extend(param)
                        else:
                            params.append(param)
    return params


def _parse_parameter_item(item: nodes.Node) -> dict | list | None:
    """Parse a single parameter from a field list item."""
    if isinstance(item, nodes.bullet_list):
        # Napoleon wraps all list_items in a bullet_list inside field_body
        results = [_parse_parameter_item(c) for c in item.children]
        return [r for r in results if r is not None] or None
    if isinstance(item, nodes.list_item):
        para = next((c for c in item.children if isinstance(c, nodes.paragraph)), None)
        if para is None:
            return None
        return _parse_parameter_para(para)
    if isinstance(item, nodes.paragraph):
        return _parse_parameter_para(item)
    return None


def _parse_parameter_para(para: nodes.paragraph) -> dict | None:
    name = ""
    type_nodes = []   # collect raw type node fragments
    desc_inlines = []

    # States: "name" → "type" → "desc"
    state = "name"

    for child in para.children:
        if state == "name":
            if isinstance(child, sphinx_nodes.literal_strong):
                name = child.astext()
                state = "type"
            elif isinstance(child, nodes.strong):
                # fallback for non-Napoleon strong nodes
                name = child.astext()
                state = "type"
            continue

        if state == "type":
            # "(" opens the type block — skip
            if isinstance(child, nodes.Text) and str(child).strip() == "(":
                continue
            # ")" closes the type block — skip
            if isinstance(child, nodes.Text) and str(child).strip() == ")":
                continue
            # en-dash separator → switch to description
            if isinstance(child, nodes.Text) and "–" in str(child):
                state = "desc"
                # anything after the dash on this text node is description
                after = str(child).split("–", 1)[-1].strip()
                if after:
                    desc_inlines.append({"type": "text", "value": after})
                continue
            # Also handle " – " with a regular dash
            if isinstance(child, nodes.Text) and " – " in str(child):
                state = "desc"
                after = str(child).split(" – ", 1)[-1].strip()
                if after:
                    desc_inlines.append({"type": "text", "value": after})
                continue
            # inline "classifier" node (non-Napoleon style) — parse directly
            if isinstance(child, nodes.inline) and "classifier" in child.get("classes", []):
                type_nodes.append(child)
                continue
            # type content: pending_xref, resolved reference, sphinx_nodes.literal_emphasis, or " | " Text
            if isinstance(child, (sphinx_nodes.pending_xref, nodes.reference, sphinx_nodes.literal_emphasis)):
                type_nodes.append(child)
                continue
            # " | " separator between union type members
            if isinstance(child, nodes.Text) and str(child).strip() == "|":
                type_nodes.append(child)
                continue
            # whitespace-only text inside type — skip
            if isinstance(child, nodes.Text) and not str(child).strip():
                continue
            # any other Text that looks like type content (no en-dash)
            if isinstance(child, nodes.Text):
                type_nodes.append(child)
            continue

        if state == "desc":
            inline = _parse_inline(child)
            if inline:
                if isinstance(inline, list):
                    desc_inlines.extend(inline)
                else:
                    desc_inlines.append(inline)

    if not name:
        return None

    # Build TypeNode from collected type_nodes
    type_node_dict = None
    if type_nodes:
        # Wrap in a container inline node and parse
        container = nodes.inline()
        for n in type_nodes:
            if isinstance(n, nodes.Node):
                container += n.deepcopy()
            else:
                container += nodes.Text(str(n))
        type_node_dict = parse_type_node(container)
        if type_node_dict == {"type": "name", "text": ""}:
            type_node_dict = None

    return {
        "name": name,
        "type": type_node_dict,
        "description": [{"type": "paragraph", "children": desc_inlines}] if desc_inlines else [],
    }


def _extract_members(content, objtype: str) -> list[dict]:
    if content is None:
        return []
    members = []
    for child in content.children:
        if isinstance(child, sphinx_nodes.desc) and child.get("objtype") == objtype:
            members.append(_extract_member(child, objtype))
    return members


def _extract_member(desc: sphinx_nodes.desc, objtype: str) -> dict:
    sigs = [c for c in desc.children if isinstance(c, sphinx_nodes.desc_signature)]
    sig = sigs[0] if sigs else None
    content = _get_child(desc, sphinx_nodes.desc_content)

    fullname = sig.get("ids", [""])[0] if sig else ""
    name = fullname.split(".")[-1] if fullname else ""
    github_url = _extract_github_url(sig)
    signature = _extract_signature(sig)
    type_annotation = _extract_type_annotation(sig)
    default_value = _extract_default_value(sig)
    description = _extract_description(content) if content else []

    base = {
        "id": fullname,
        "name": name,
        "description": description,
    }

    if objtype == "attribute":
        base["type"] = type_annotation
        base["defaultValue"] = default_value
    elif objtype == "method":
        base["githubUrl"] = github_url
        base["signature"] = signature
        base["extraSignatures"] = [_extract_signature(s) for s in sigs[1:]]
        base["modifiers"] = _extract_method_modifiers(sig)
        base["parameters"] = _extract_parameters(content) if content else []
        base["returns"] = _extract_returns(content, sig)
        base["raises"] = _extract_raises(content) if content else []

    return base


def _extract_type_annotation(sig) -> dict | None:
    if sig is None:
        return None
    # Sphinx 7+ emits desc_sig_* inline nodes. Collect all inline children
    # between the `:` punctuation node and the `=` punctuation/operator node.
    type_parts = []
    in_type = False
    for child in sig.children:
        if isinstance(child, nodes.inline):
            text = child.astext()
            cls = child.get("classes", [])
            if not in_type:
                if "p" in cls and text == ":":
                    in_type = True
                continue
            # End of type at `=` (operator class 'o' or punctuation class 'p')
            if ("o" in cls or "p" in cls) and text == "=":
                break
            type_parts.append(child)
    if type_parts:
        container = nodes.inline()
        for p in type_parts:
            container += p.deepcopy()
        return parse_type_node(container)
    # Fallback: parse annotation text from desc_annotation (older Sphinx / simpler cases).
    for child in sig.children:
        if isinstance(child, sphinx_nodes.desc_annotation):
            text = child.astext()
            if ":" in text:
                type_part = text.split(":", 1)[1].strip().split("=")[0].strip()
                if type_part:
                    return parse_type_string(type_part)
    return None


def _extract_default_value(sig) -> str | None:
    if sig is None:
        return None
    found_eq = False
    for child in sig.children:
        if isinstance(child, nodes.inline):
            text = child.astext()
            if text == "=":
                found_eq = True
                continue
            if found_eq and text.strip():
                return text.strip()
    return None


def _extract_method_modifiers(sig) -> str:
    modifiers = []
    for child in sig.children:
        if isinstance(child, sphinx_nodes.desc_annotation):
            text = child.astext().strip()
            if text in ("staticmethod", "classmethod", "abstractmethod", "property", "final"):
                modifiers.append(text)
    return " ".join(modifiers)


def _extract_sig_return_type(sig) -> dict | None:
    """Extract return type from desc_returns in the signature node (Python type annotations)."""
    if sig is None:
        return None
    for child in sig.children:
        if isinstance(child, sphinx_nodes.desc_returns):
            return parse_type_node(child)
    return None


def _extract_returns(content, sig=None) -> dict:
    """Extract :returns: and :rtype: from field_list; fall back to desc_returns in sig."""
    if content is None:
        sig_type = _extract_sig_return_type(sig)
        return {"description": None, "type": sig_type}
    ret_desc = None
    ret_type = None
    for child in content.children:
        if isinstance(child, nodes.field_list):
            for field in child.children:
                if not isinstance(field, nodes.field):
                    continue
                fname = field.children[0].astext().lower() if field.children else ""
                fbody = field.children[1] if len(field.children) > 1 else None
                if fname == "returns" and fbody:
                    ret_desc = parse_content(fbody)
                elif fname == "return type" and fbody:
                    ret_type = parse_type_node(fbody)
    if ret_type is None:
        ret_type = _extract_sig_return_type(sig)
    if ret_desc is not None or ret_type is not None:
        return {"description": ret_desc, "type": ret_type}
    return {"description": None, "type": None}


def _extract_raises(content) -> list[dict]:
    if content is None:
        return []
    raises = []
    for child in content.children:
        if isinstance(child, nodes.field_list):
            for field in child.children:
                if not isinstance(field, nodes.field):
                    continue
                fname = field.children[0].astext().lower() if field.children else ""
                fbody = field.children[1] if len(field.children) > 1 else None
                if fname == "raises" and fbody:
                    for item in fbody.children:
                        # Napoleon wraps 2+ exceptions in a bullet_list
                        if isinstance(item, nodes.bullet_list):
                            for list_item in item.children:
                                r = _parse_raises_item(list_item)
                                if r:
                                    raises.append(r)
                        else:
                            r = _parse_raises_item(item)
                            if r:
                                raises.append(r)
    return raises


def _parse_raises_item(item) -> dict | None:
    para = item if isinstance(item, nodes.paragraph) else next((c for c in item.children if isinstance(c, nodes.paragraph)), None)
    if para is None:
        return None
    exc_type = None
    desc_parts = []
    for child in para.children:
        if isinstance(child, nodes.reference):
            url = child.get("refuri", "")
            exc_type = {"type": "name", "text": child.astext()}
            if url:
                exc_type["url"] = url
        elif isinstance(child, (nodes.strong, nodes.literal)):
            exc_type = {"type": "name", "text": child.astext()}
        elif isinstance(child, nodes.Text):
            text = str(child).strip(" –-")
            if text:
                desc_parts.append({"type": "text", "value": text})
    if exc_type is None:
        return None
    return {
        "type": exc_type,
        "description": [{"type": "paragraph", "children": desc_parts}] if desc_parts else [],
    }


def _extract_version_info(content) -> dict:
    info = {"added": None, "changed": None, "deprecated": None, "deprecationMessage": None}
    if content is None:
        return info
    for child in content.children:
        # sphinx.addnodes.versionmodified is the canonical node for version directives
        if isinstance(child, sphinx_nodes.versionmodified):
            vtype = child.get("type", "")
            version = child.get("version", "") or None
            if vtype in ("deprecated", "deprecatedremoved"):
                info["deprecated"] = version
                info["deprecationMessage"] = parse_content(child) if child.children else []
            elif vtype == "versionadded":
                info["added"] = version
            elif vtype == "versionchanged":
                info["changed"] = version
            continue
        # Fallback: admonition nodes with CSS classes (older Sphinx theme output)
        classes = child.get("classes", []) if hasattr(child, "get") else []
        if "deprecated" in classes:
            version_text = child.astext().split()
            info["deprecated"] = version_text[-1] if len(version_text) > 1 else None
            info["deprecationMessage"] = parse_content(child) if child.children else []
        elif "versionadded" in classes:
            version_text = child.astext().split()
            info["added"] = version_text[-1] if len(version_text) > 1 else None
        elif "versionchanged" in classes:
            version_text = child.astext().split()
            info["changed"] = version_text[-1] if len(version_text) > 1 else None
    return info
