from __future__ import annotations
import re
from docutils import nodes


def parse_type_node(node: nodes.Node) -> dict:
    """Parse a docutils node tree representing a type annotation into a TypeNode dict."""
    tokens = _tokenize(node)
    result, _ = _parse_union(tokens, 0)
    return result


def type_node_to_string(type_node: dict | None) -> str | None:
    """Flatten a TypeNode dict to a plain string representation."""
    if type_node is None:
        return None
    kind = type_node.get("kind")
    if kind == "name":
        return type_node.get("text", "")
    if kind == "ref":
        return type_node.get("text", "")
    if kind == "union":
        parts = [type_node_to_string(m) for m in type_node.get("members", [])]
        return " | ".join(p for p in parts if p)
    if kind == "generic":
        args = [type_node_to_string(a) for a in type_node.get("args", [])]
        return f"{type_node.get('name', '')}[{', '.join(a for a in args if a)}]"
    if kind == "literal":
        return f"Literal[{type_node.get('value', '')}]"
    return None


def parse_type_string(type_str: str) -> dict:
    """Parse a plain type annotation string (e.g. 'list[int] | None') into a TypeNode dict.

    Used when the doctree stores type annotations as plain text rather than as
    a structured node tree (e.g. in desc_annotation text nodes).
    """
    tokens = _tokenize_string(type_str)
    result, _ = _parse_union(tokens, 0)
    return result


def _tokenize_string(type_str: str) -> list:
    """Tokenize a type annotation string into (kind, value) tokens.

    Splits on ' | ', '[', ']', ',' to create individual tokens matching
    what _tokenize() produces from separate docutils nodes.
    """
    # Split while keeping delimiters
    parts = re.split(r"(\s*\|\s*|\[|\]|,\s*)", type_str)
    tokens = []
    for part in parts:
        if not part:
            continue
        stripped = part.strip()
        if stripped in ("|",):
            tokens.append(("text", " | "))
        elif stripped == "[":
            tokens.append(("text", "["))
        elif stripped == "]":
            tokens.append(("text", "]"))
        elif stripped == ",":
            tokens.append(("text", ", "))
        elif stripped:
            tokens.append(("text", stripped))
    return tokens


def _tokenize(node: nodes.Node) -> list:
    """Walk node tree and produce a flat list of (kind, value) tokens.
    kind is one of: 'text', 'ref'
    """
    tokens = []
    _walk(node, tokens)
    return tokens


def _walk(node: nodes.Node, tokens: list) -> None:
    if isinstance(node, nodes.reference):
        url = node.get("refuri", "")
        text = node.astext()
        # Relative .json paths are internal build artifacts — emit as plain name
        if url.endswith(".json") or ".json#" in url:
            tokens.append(("text", text))
        else:
            tokens.append(("ref", text, url))
    elif isinstance(node, nodes.Text):
        tokens.append(("text", str(node)))
    else:
        for child in node.children:
            _walk(child, tokens)


def _parse_union(tokens: list, pos: int) -> tuple[dict, int]:
    """Parse a union type (X | Y | Z) starting at pos. Returns (node, new_pos)."""
    members = []
    member, pos = _parse_single(tokens, pos)
    members.append(member)

    while pos < len(tokens):
        tok = tokens[pos]
        if tok[0] == "text" and tok[1].strip() == "|":
            pos += 1
            # skip any leading whitespace token
            if pos < len(tokens) and tokens[pos][0] == "text" and tokens[pos][1].strip() == "":
                pos += 1
            member, pos = _parse_single(tokens, pos)
            members.append(member)
        else:
            break

    if len(members) == 1:
        return members[0], pos
    return {"kind": "union", "members": members}, pos


def _parse_single(tokens: list, pos: int) -> tuple[dict, int]:
    """Parse a single type token (name, ref, or generic) at pos."""
    # Skip whitespace-only text tokens
    while pos < len(tokens) and tokens[pos][0] == "text" and tokens[pos][1].strip() == "":
        pos += 1

    if pos >= len(tokens):
        return {"kind": "name", "text": ""}, pos

    tok = tokens[pos]

    if tok[0] == "ref":
        pos += 1
        return {"kind": "ref", "text": tok[1], "url": tok[2]}, pos

    if tok[0] == "text":
        text = tok[1].strip().rstrip("[")
        name = tok[1].strip()
        pos += 1

        # Check if followed by "[" — generic type
        if pos < len(tokens) and tokens[pos][0] == "text" and "[" in tokens[pos][1]:
            # consume the "["
            pos += 1
            args = []
            # parse comma-separated args until "]"
            while pos < len(tokens):
                if tokens[pos][0] == "text" and "]" in tokens[pos][1]:
                    pos += 1
                    break
                if tokens[pos][0] == "text" and tokens[pos][1].strip() in (",", ", "):
                    pos += 1
                    continue
                arg, pos = _parse_union(tokens, pos)
                args.append(arg)
            return {"kind": "generic", "name": name, "args": args}, pos

        # Check if name itself contains "[" (single token like "list[")
        if "[" in tok[1]:
            name = tok[1].split("[")[0]
            args = []
            while pos < len(tokens):
                if tokens[pos][0] == "text" and "]" in tokens[pos][1]:
                    pos += 1
                    break
                if tokens[pos][0] == "text" and tokens[pos][1].strip() in (",", ", "):
                    pos += 1
                    continue
                arg, pos = _parse_union(tokens, pos)
                args.append(arg)
            return {"kind": "generic", "name": name, "args": args}, pos

        # Check for Literal['value']
        if name == "Literal" and pos < len(tokens) and tokens[pos][0] == "text" and "[" in tokens[pos][1]:
            pos += 1  # consume "["
            value_parts = []
            while pos < len(tokens):
                t = tokens[pos]
                if t[0] == "text" and "]" in t[1]:
                    pos += 1
                    break
                value_parts.append(t[1])
                pos += 1
            return {"kind": "literal", "value": "".join(value_parts).strip("'\"")} , pos

        return {"kind": "name", "text": name}, pos

    return {"kind": "name", "text": ""}, pos + 1
