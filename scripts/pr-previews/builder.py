#!/usr/bin/env python3

# This code is a Qiskit project.
#
# (C) Copyright IBM 2024.
#
# This code is licensed under the Apache License, Version 2.0. You may
# obtain a copy of this license in the LICENSE file in the root directory
# of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
#
# Any modifications or derivative works of this code must retain this
# copyright notice, and modified files need to carry a notice indicating
# that they have been altered from the originals.

from __future__ import annotations

import logging
import os
import shutil
from argparse import ArgumentParser
from contextlib import contextmanager
from functools import partial
from pathlib import Path
from tempfile import TemporaryDirectory
from typing import Iterator

from utils import configure_logging, run_subprocess, write_timestamp

# You can change this to `iqp-channel-docs-preview-builder` when running locally, if
# you're able to create a local copy of the builder image through the closed source repo.
IMAGE_NAME = "icr.io/qc-open-source-docs-prod/preview-builder:latest"

logger = logging.getLogger(__name__)


def create_parser() -> ArgumentParser:
    parser = ArgumentParser()
    parser.add_argument("dest", help="The output folder", type=Path)
    parser.add_argument(
        "--basepath",
        help="The subfolder for relative links, like `/documentation/pr-x`",
        required=True,
    )
    parser.add_argument(
        "--proof-of-concept",
        help="Build a simple index.html, rather than actual docs app.",
        action="store_true",
    )
    return parser


def main() -> None:
    args = create_parser().parse_args()
    if args.proof_of_concept:
        write_proof_of_concept(args.dest)
        return

    try:
        lines = (
            Path(".github/outputs/changed-content-files.txt").read_text().split(" ")
        )
        changed_content_files = set(line for line in lines if line != "")
    except FileNotFoundError:
        logger.info("No changed files detected, will build all pages")
        changed_content_files: set[str] = set()

    with setup_dir(changed_content_files) as dir:
        yarn_build(dir, args.basepath)
        save_output(dir, args.dest)
    write_timestamp(args.dest)


def write_proof_of_concept(dest: Path) -> None:
    dest.mkdir(parents=True, exist_ok=True)
    (dest / "index.html").write_text(
        f"""\
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Proof of Concept: {dest.name}</title>
        </head>
        <body>
            <h1>Proof of concept: {dest.name}</h1>
        </body>
        </html>
        """
    )
    logger.info(f"Wrote proof-of-concept index.html to {dest}")


def yarn_build(root_dir: Path, base_path: str) -> None:
    # This ensures that dependencies like Sharp are properly installed. Most
    # dependencies, like the first-party deps, will already have been installed.
    run_subprocess(["yarn", "install"], cwd=root_dir, stream_output=True)
    run_subprocess(
        ["yarn", "build:preview"],
        cwd=root_dir,
        env={**os.environ, "NEXT_PUBLIC_BASE_PATH": base_path},
        stream_output=True,
    )


def save_output(root_dir: Path, dest: Path) -> None:
    if dest.exists():
        shutil.rmtree(dest)
    dest.mkdir(parents=True)
    for item in (root_dir / "packages/preview/out").iterdir():
        if item.is_dir():
            shutil.copytree(item, dest / item.name)
        else:
            shutil.copy2(item, dest)
    logger.info(f"Static site files copied to {dest}")


@contextmanager
def setup_dir(changed_content_files: set[str]) -> Iterator[Path]:
    with TemporaryDirectory() as _tempdir:
        root_dir = Path(_tempdir)
        logger.info(f"Using tmpdir {root_dir}")

        _copy_local_content(root_dir, changed_content_files)
        _extract_docker_files(root_dir)
        yield root_dir


def _copy_local_content(root_dir: Path, changed_files: set[str]) -> None:
    copytree_ignore = partial(_ignore_unchanged_files, changed_files=changed_files)

    for dir in [
        "docs",
        "public",
        "learning",
    ]:
        dest = (
            root_dir / "packages/preview" / dir
            if dir.startswith("public")
            else root_dir / f"content/{dir}"
        )
        shutil.copytree(dir, dest, ignore=copytree_ignore)

    for fp in [
        "docs/responsible-quantum-computing.mdx",
        "docs/accessibility.mdx",
    ]:
        shutil.copy2(fp, root_dir / f"content/{fp}")

    logger.info("local content files copied")


def _ignore_unchanged_files(
    dir: str, contents: list[str], changed_files: set[str]
) -> list[str]:
    """For input to shutil.copytree. This function takes the directory path
    (such as `docs/guides`) and a list of file and folder names (entries) in
    that directory (such as `["api", "index.mdx", ... ]`). It should output a list
    of entries to ignore.
    """
    ignores = []

    # Don't copy any entries named "api". This has the effect of ignoring
    # any paths matching "/api/". We intentionally don't copy over API docs
    # to speed up the build.
    if "api" in contents:
        ignores.append("api")

    # No changed files means we should copy over everything.
    if len(changed_files) == 0:
        return ignores

    for entry in contents:
        full_path = f"{dir}/{entry}"

        # Always copy over the `public` folder as its contents could be used
        # anywhere. TODO: Maybe make this more selective?
        if full_path.startswith("public"):
            continue

        # We also need to copy over `_toc.json` used by any changed files.
        # Copytree should only reach these files if a sibling or child of
        # the current directory contains a changed file.
        if entry == "_toc.json":
            continue

        # We also need to copy over the index files because the app doesn't
        # build without them
        if entry.startswith("index."):
            continue

        # Finally, include files that were directly changed.
        if any(file.startswith(full_path) for file in changed_files):
            continue

        # Ignore everything else
        ignores.append(entry)

    return ignores


def _extract_docker_files(root_dir: Path) -> None:
    container_id = run_subprocess(["docker", "create", IMAGE_NAME]).stdout.strip()
    try:
        run_subprocess(["docker", "cp", f"{container_id}:/home/node/app/.", root_dir])
    finally:
        run_subprocess(["docker", "rm", container_id])
    logger.info("Docker contents extracted")


if __name__ == "__main__":
    configure_logging()
    main()
