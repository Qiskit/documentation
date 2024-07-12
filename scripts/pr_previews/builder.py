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
import shutil
from argparse import ArgumentParser
from contextlib import contextmanager
from typing import Iterator
from pathlib import Path
from tempfile import TemporaryDirectory

from utils import configure_logging, run_subprocess

IMAGE_NAME = "iqp-channel-docs-preview-builder"

logger = logging.getLogger(__name__)


def create_parser() -> ArgumentParser:
    parser = ArgumentParser()
    parser.add_argument("dest", help="The output folder", type=Path)
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

    with setup_dir() as dir:
        yarn_build(dir)
        save_output(dir, args.dest)


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


def yarn_build(root_dir: Path) -> None:
    # This ensures that dependencies like Sharp are properly installed. Most
    # dependencies, like the first-party deps, will already have been installed.
    run_subprocess(["yarn", "install"], cwd=root_dir, stream_output=True)
    run_subprocess(["yarn", "build"], cwd=root_dir, stream_output=True)


def save_output(root_dir: Path, dest: Path) -> None:
    dest.mkdir(parents=True, exist_ok=True)
    for item in (root_dir / "packages/preview/out").iterdir():
        if item.is_dir():
            shutil.copytree(item, dest / item.name)
        else:
            shutil.copy2(item, dest)
    logger.info(f"Static site files copied to {dest}")


@contextmanager
def setup_dir() -> Iterator[Path]:
    with TemporaryDirectory() as _tempdir:
        root_dir = Path(_tempdir)
        logger.info(f"Using tmpdir {root_dir}")

        _copy_local_content(root_dir)
        _extract_docker_files(root_dir)
        yield root_dir


def _copy_local_content(root_dir: Path) -> None:
    # We intentionally don't copy over API docs to speed up the build.
    for dir in [
        "docs/api/migration-guides",
        "docs/guides",
        "public/videos",
        "public/images/guides",
        "public/images/migration",
        "public/images/optimize",
        "public/images/qiskit-ibm-runtime",
        "public/images/qiskit-patterns",
    ]:
        dest = (
            root_dir / "packages/preview" / dir
            if dir.startswith("public")
            else root_dir / dir
        )
        shutil.copytree(dir, dest)

    for fp in ["docs/support.mdx"]:
        shutil.copy2(fp, root_dir / fp)

    logger.info("local content files copied")


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
