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

from .verify_images import validate_file
import multiprocessing
import glob
import sys
import argparse


def main() -> None:
    parser = argparse.ArgumentParser(prog="verify_images.py")
    parser.add_argument("-f", "--folder", required=True)
    parser.add_argument("-s", "--skip", nargs="+")
    args = parser.parse_args()

    skip_list = set(args.skip or [])
    files = glob.glob(f"{args.folder}/**/*.py", recursive=True)
    filtered_files = [file for file in files if file not in skip_list]

    with multiprocessing.Pool() as pool:
        results = pool.map(validate_file, filtered_files)

    failed_files = {
        file: image_errors for file, image_errors in results if image_errors
    }

    if not failed_files:
        print("✅ All images have alt text")
        sys.exit(0)

    print("💔 Some images are missing the alt text", file=sys.stderr)

    for file, image_errors in failed_files.items():
        print(f"\nErrors found in {file}:", file=sys.stderr)

        for image_error in image_errors:
            print(image_error, file=sys.stderr)

    print(
        "\nAlt text is crucial for making documentation accessible to all users.",
        "It should serve the same purpose as the images on the page,",
        "conveying the same meaning rather than describing visual characteristics.",
        "When an image contains words that are important to understanding the content,",
        "the alt text should include those words as well.",
        file=sys.stderr,
    )

    sys.exit(1)
