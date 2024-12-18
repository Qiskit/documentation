#!/usr/bin/env python3
# This code is part of Qiskit.
#
# (C) Copyright IBM 2024
#
# This code is licensed under the Apache License, Version 2.0. You may
# obtain a copy of this license in the LICENSE.txt file in the root directory
# of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
#
# Any modifications or derivative works of this code must retain this
# copyright notice, and modified files need to carry a notice indicating
# that they have been altered from the originals.

"""Utility script to verify that all images have alt text"""

from pathlib import Path


def is_image(line: str) -> bool:
    """Determine if a line is an image"""
    return line.strip().startswith((".. image::", ".. plot::"))


def is_option(line: str) -> bool:
    """Determine if a line is an option"""
    return line.strip().startswith(":")


def is_valid_image(options: list[str]) -> bool:
    """Validate one single image"""
    alt_exists = any(option.strip().startswith(":alt:") for option in options)
    nofigs_exists = any(option.strip().startswith(":nofigs:") for option in options)

    # Only `.. plot::`` directives without the `:nofigs:` option are required to have alt text.
    # Meanwhile, all `.. image::` directives need alt text and they don't have a `:nofigs:` option.
    return alt_exists or nofigs_exists


def validate_images(file_content: str) -> list[str]:
    """Validate all the images found on a given reStructured Text"""

    invalid_images: list[str] = []

    lines = file_content.splitlines()

    image_found = False
    options: list[str] = []

    for line_index, line in enumerate(lines):
        if image_found:
            if is_option(line):
                options.append(line)
                continue

            # Else, the prior image_found has no more options so we should determine if it was valid.
            #
            # Note that, either way, we do not early exit out of the loop iteration because this `line`
            # might be the start of a new image.
            if not is_valid_image(options):
                image_line = line_index - len(options)
                invalid_images.append(
                    f"- Error in line {image_line}: {lines[image_line-1].strip()}"
                )

        image_found = is_image(line)
        options = []

    return invalid_images


def validate_file(file_path: str) -> tuple[str, list[str]]:
    """Validate all the images of a single file"""
    file_content = Path(file_path).read_text(encoding="utf-8")
    invalid_images = validate_images(file_content)
    return (file_path, invalid_images)
