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
from textwrap import dedent
import platform
from datetime import datetime

from qiskit_ibm_runtime import QiskitRuntimeService

from .config import get_notebook_jobs, get_args, Result
from .execute import execute_notebook


async def _main() -> None:
    args = get_args()
    jobs = list(get_notebook_jobs(args))

    if not jobs:
        print("⚠️ No notebooks to execute - exiting")
        return

    start_time = datetime.now()
    print("Executing notebooks:")
    results = await asyncio.gather(*(execute_notebook(job) for job in jobs))
    print("Checking for trailing jobs...")
    results.append(cancel_trailing_jobs(start_time))
    if not all(results):
        sys.exit(1)


def main():
    if platform.system() == "Windows":
        asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
    asyncio.run(_main())


def cancel_trailing_jobs(start_time: datetime) -> Result:
    """
    Cancel any runtime jobs created after `start_time`. Result is ok if none exist.

    Notebooks should not submit jobs during a normal test run. If they do, the
    cell will time out and this function will cancel the job to avoid wasting
    device time.

    If a notebook submits a job but does not wait for the result, this check
    will also catch it and cancel the job.
    """
    jobs = [
        job
        for job in QiskitRuntimeService().jobs(created_after=start_time)
        if not job.in_final_state()
    ]
    if not jobs:
        return Result(True)

    print(
        f"⚠️ Cancelling {len(jobs)} job(s) created after {start_time}.\n"
        "Add any notebooks that submit jobs to `notebooks-that-submit-jobs` in "
        f"`scripts/config/notebook-testing.toml`."
    )
    for job in jobs:
        job.cancel()
    return Result(False, reason="Trailing jobs detected")
