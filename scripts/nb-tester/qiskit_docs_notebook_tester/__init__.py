# This code is a Qiskit project.
#
# (C) Copyright IBM 2023.
#
# This code is licensed under the Apache License, Version 2.0. You may obtain a
# copy of this license in the LICENSE file in the root directory of this source
# tree or at http://www.apache.org/licenses/LICENSE-2.0.
#
# Any modifications or derivative works of this code must retain this copyright
# notice, and modified files need to carry a notice indicating that they have
# been altered from the originals.

from __future__ import annotations


import asyncio
import sys
import platform
from datetime import datetime

from .config import get_notebook_jobs, get_parser
from .execute import execute_notebook, cancel_trailing_jobs


async def _main() -> None:
    args = get_parser().parse_args()
    jobs = list(get_notebook_jobs(args))

    if not jobs:
        print("⚠️ No notebooks to execute - exiting")
        return

    start_time = datetime.now()
    print("Executing notebooks:")
    results = await asyncio.gather(*(execute_notebook(job) for job in jobs))

    if not args.ignore_trailing_jobs:
        print("Checking for trailing jobs...")
        results.append(cancel_trailing_jobs(start_time))

    if not all(results):
        sys.exit(1)


def main():
    if platform.system() == "Windows":
        asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
    asyncio.run(_main())
