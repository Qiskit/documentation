from __future__ import annotations
import re
from docutils import nodes
from docutils.nodes import SparseNodeVisitor, SkipNode


def parse_type_node(node: nodes.Node) -> dict:
    """Parse a docutils node tree representing a type annotation into a TypeNode dict."""
    tokens = _tokenize(node)
    result, _ = _parse_union(tokens, 0)
    return result


def parse_type_string(type_str: str) -> dict:
    """Parse a plain type annotation string (e.g. 'list[int] | None') into a TypeNode dict.

    Used when the doctree stores type annotations as plain text rather than as
    a structured node tree (e.g. in desc_annotation text nodes).
    """
    tokens = _tokenize_string(type_str)
    result, _ = _parse_union(tokens, 0)
    return result


def _tokenize_string(type_str: str) -> list:
    """Tokenize a type annotation string into (kind, value) tokens."""
    parts = re.split(r"(\s*\|\s*|\[|\]|,\s*)", type_str)
    tokens = []
    for part in parts:
        if not part:
            continue
        stripped = part.strip()
        if stripped == "|":
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


class _TokenizeVisitor(SparseNodeVisitor):
    """Flatten a type annotation node tree into a list of (kind, ...) tokens.

    Tokens are either ("text", value) or ("ref", text, url).
    Uses SparseNodeVisitor dispatch: unhandled nodes are silently skipped,
    so we only need handlers for the leaf node types we care about.
    """

    def __init__(self, document: nodes.document):
        super().__init__(document)
        self.tokens: list = []

    def visit_reference(self, node: nodes.reference) -> None:
        url = node.get("refid") or node.get("refuri", "")
        text = node.astext()
        if ".json#" in url:
            url = url.split(".json#", 1)[1]
        elif url.endswith(".json"):
            url = ""
        self.tokens.append(("ref", text, url) if url else ("text", text))
        raise SkipNode

    def visit_Text(self, node: nodes.Text) -> None:
        # Strip \x00 word-boundary markers injected by docutils ReferencesResolver.
        text = str(node).replace("\x00", "")
        if text:
            self.tokens.append(("text", text))


def _tokenize(node: nodes.Node) -> list:
    """Walk a node tree and return a flat list of type annotation tokens."""
    doc = node.document
    if doc is None:
        # No document attached (e.g. in tests) — fall back to manual recursion.
        tokens: list = []
        _walk_fallback(node, tokens)
        return tokens
    visitor = _TokenizeVisitor(doc)
    node.walkabout(visitor)
    return visitor.tokens


def _walk_fallback(node: nodes.Node, tokens: list) -> None:
    """Recursive fallback for nodes not attached to a document."""
    if isinstance(node, nodes.reference):
        url = node.get("refid") or node.get("refuri", "")
        text = node.astext()
        if ".json#" in url:
            url = url.split(".json#", 1)[1]
        elif url.endswith(".json"):
            url = ""
        tokens.append(("ref", text, url) if url else ("text", text))
    elif isinstance(node, nodes.Text):
        text = str(node).replace("\x00", "")
        if text:
            tokens.append(("text", text))
    else:
        for child in node.children:
            _walk_fallback(child, tokens)


def parse_bases_paragraph(para) -> list[dict]:
    """Parse a 'Bases: X[Y], Z' paragraph node into a list of TypeNode dicts."""
    raw: list = []
    skip_prefix = True
    for child in para.children:
        if skip_prefix and isinstance(child, nodes.Text):
            skip_prefix = False
            continue
        skip_prefix = False
        raw.extend(_tokenize(child))

    # Re-split combined text tokens on structural bracket/comma chars.
    tokens: list = []
    for tok in raw:
        if tok[0] != "text":
            tokens.append(tok)
            continue
        for part in re.split(r"(\[|\])", tok[1]):
            if part in ("[", "]"):
                tokens.append(("text", part))
            else:
                for sub in re.split(r"(,\s*)", part):
                    if sub.startswith(","):
                        tokens.append(("text", ", "))
                    elif sub.strip():
                        tokens.append(("text", sub.strip()))

    # Group tokens by top-level commas (not inside [...]).
    groups: list = []
    current: list = []
    depth = 0
    for tok in tokens:
        if tok[0] == "text" and tok[1] in (",", ", ") and depth == 0:
            if current:
                groups.append(current)
            current = []
            continue
        if tok[0] == "text" and tok[1] == "[":
            depth += 1
        elif tok[0] == "text" and tok[1] == "]":
            depth -= 1
        current.append(tok)
    if current:
        groups.append(current)

    bases = []
    for group in groups:
        result, _ = _parse_single(group, 0)
        if result.get("type") == "name" and not result.get("text"):
            continue
        bases.append(result)
    return bases


def _parse_union(tokens: list, pos: int) -> tuple[dict, int]:
    members = []
    member, pos = _parse_single(tokens, pos)
    members.append(member)

    while pos < len(tokens):
        tok = tokens[pos]
        if tok[0] == "text" and tok[1].strip() == "|":
            pos += 1
            if pos < len(tokens) and tokens[pos][0] == "text" and tokens[pos][1].strip() == "":
                pos += 1
            member, pos = _parse_single(tokens, pos)
            members.append(member)
        else:
            break

    if len(members) == 1:
        return members[0], pos
    return {"type": "union", "members": members}, pos


def _parse_single(tokens: list, pos: int) -> tuple[dict, int]:
    while pos < len(tokens) and tokens[pos][0] == "text" and tokens[pos][1].strip() == "":
        pos += 1

    if pos >= len(tokens):
        return {"type": "name", "text": ""}, pos

    tok = tokens[pos]

    if tok[0] == "ref":
        pos += 1
        node: dict = {"type": "name", "text": tok[1]}
        if tok[2]:
            node["url"] = tok[2]
        return node, pos

    if tok[0] == "text":
        name = tok[1].strip()
        pos += 1

        # Followed by a separate "[" token — generic type
        if pos < len(tokens) and tokens[pos][0] == "text" and "[" in tokens[pos][1]:
            pos += 1
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
            return {"type": "generic", "name": name, "args": args}, pos

        # Name itself contains "[" (single token like "list[")
        if "[" in name:
            name = name.split("[")[0]
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
            return {"type": "generic", "name": name, "args": args}, pos

        # Literal['value']
        if name == "Literal" and pos < len(tokens) and tokens[pos][0] == "text" and "[" in tokens[pos][1]:
            pos += 1
            value_parts = []
            while pos < len(tokens):
                t = tokens[pos]
                if t[0] == "text" and "]" in t[1]:
                    pos += 1
                    break
                value_parts.append(t[1])
                pos += 1
            return {"type": "literal", "value": "".join(value_parts).strip("'\"")}, pos

        return {"type": "name", "text": name}, pos

    return {"type": "name", "text": ""}, pos + 1
