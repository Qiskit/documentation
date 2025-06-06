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
import tempfile
import textwrap
from dataclasses import dataclass
from datetime import datetime
from typing import Iterable

import nbclient
import nbformat
from jupyter_client.manager import start_new_async_kernel, AsyncKernelClient
from qiskit_ibm_runtime import QiskitRuntimeService

from .config import NotebookJob, Result
from .post_process import post_process_notebook


OPEN_BACKENDS_TO_INTERNAL = {
    "ibm_brisbane": "alt_brisbane",
    "ibm_torino": "alt_torino",
}


@dataclass(frozen=True)
class NotebookWarning:
    cell_index: int
    msg: str

    def format(self) -> str:
        """
        Format warning to pretty string
        """
        message = f"Cell {self.cell_index}:\n"
        for line in self.msg.splitlines():
            message += (
                textwrap.fill(
                    line, width=77, initial_indent=" │ ", subsequent_indent=" │ "
                )
                + "\n"
            )
        return message


def extract_warnings(notebook: nbformat.NotebookNode) -> list[NotebookWarning]:
    """
    Detect warning messages in cell outputs
    """
    notebook_warnings = []
    for cell_index, cell in enumerate(notebook.cells):
        if not hasattr(cell, "outputs"):
            continue
        if "ignore-warnings" in cell.metadata.get("tags", []):
            continue
        for output in cell.outputs:
            if hasattr(output, "name") and output.name == "stderr":
                notebook_warnings.append(
                    NotebookWarning(cell_index=cell_index, msg=output.text)
                )
    return notebook_warnings


async def execute_notebook(job: NotebookJob, kernel_setup_lock: asyncio.Lock) -> Result:
    """
    Wrapper function for `_execute_notebook` to print status and write result
    """
    if job.backend_patch:
        print(f"▶️ Executing {job.path} (with least_busy patched)")
    else:
        print(f"▶️ Executing {job.path}")

    working_directory = tempfile.TemporaryDirectory()
    execution_exceptions = (
        nbclient.exceptions.CellExecutionError,
        nbclient.exceptions.CellTimeoutError,
    )
    try:
        nb = await _execute_notebook(job, working_directory.name, kernel_setup_lock)
    except execution_exceptions as err:
        print(f"❌ Problem in {job.path}:\n{err}")
        return Result(False, reason="Exception in notebook")
    except SyntaxError as err:
        print(
            f"❌ Problem in {job.path}:\n"
            f"Error parsing code while post-processing (line {err.lineno}):\n"
            f"  {err.text}"
        )
        return Result(False, reason="Invalid syntax")
    finally:
        working_directory.cleanup()

    notebook_warnings = extract_warnings(nb)
    if notebook_warnings:
        print(
            f"⚠️ Warnings in {job.path}:\n"
            + "\n".join((w.format() for w in notebook_warnings))
        )
        return Result(False, reason="Warning in notebook")

    if not job.write:
        print(f"✅ No problems in {job.path} (not written as {job.write.reason})")
        return Result(True)
    nbformat.write(nb, job.path)
    print(f"✅ No problems in {job.path} (written)")
    return Result(True)


async def _execute_in_kernel(kernel: AsyncKernelClient, code: str) -> None:
    """Execute code in kernel and raise if it fails"""
    response = await kernel.execute_interactive(code, store_history=False)
    if response.get("content", {}).get("status", "") == "error":
        raise Exception("Error running initialization code")


async def _execute_notebook(
    job: NotebookJob, working_directory: str, kernel_setup_lock: asyncio.Lock
) -> nbformat.NotebookNode:
    """
    Use nbclient to execute notebook. The steps are:
    1. Read notebook from file
    2. Create a new kernel
    3. Run some custom code to set up the kernel
    4. Execute the notebook inside the kernel
    5. Clean the notebook and return it
    """
    nb = nbformat.read(job.path, as_version=4)

    async with kernel_setup_lock:
        # New kernels choose a port on creation. They usually detect if the
        # port is in use and will choose another if so, but there can be race
        # conditions when creating many kernels at once.The lock avoids this.
        # This might be fixed by https://github.com/jupyter/nbclient/pull/327
        kernel_manager, kernel = await start_new_async_kernel(
            kernel_name="python3",
            extra_arguments=["--InlineBackend.figure_format='svg'"],
            cwd=working_directory,
        )

    await _execute_in_kernel(kernel, job.pre_execute_code)
    if job.backend_patch:
        await _execute_in_kernel(kernel, job.backend_patch)

    def log_cell_output(cell, cell_index: int, execute_reply) -> None:
        if job.log_cell_outputs:
            print(f"ℹ️ Cell {cell_index} output:\n", "\n".join(get_text_output(cell)))

    # Our instance gives us high-priority access to open backends through different names.
    # E.g. 'ibm_brisbane' through 'alt_brisbane'. However, these names won't work for users.
    # We get round this by mapping between open and internal backend names before and after execution.
    # This is a temporary hack while we wait for high-priority access to open backends
    if job.map_open_backends_to_internal:
        nb = open_backends_to_internal(nb)

    notebook_client = nbclient.NotebookClient(
        nb=nb,
        km=kernel_manager,
        kc=kernel,
        # -1 means no timeout
        timeout=job.cell_timeout or -1,
        on_cell_executed=log_cell_output,
    )
    await notebook_client.async_execute()

    if job.map_open_backends_to_internal:
        nb = internal_backends_to_open(nb)

    return post_process_notebook(nb)

def open_backends_to_internal(nb: nbformat.NotebookNode) -> nbformat.NotebookNode:
    for cell in nb.cells:
        if cell.cell_type != 'code':
            continue
        for open, internal in OPEN_BACKENDS_TO_INTERNAL.items():
            cell.source = cell.source.replace(open, internal)
    return nb

def internal_backends_to_open(nb: nbformat.NotebookNode) -> nbformat.NotebookNode:
    for cell in nb.cells:
        if cell.cell_type != 'code':
            continue
        for open, internal in OPEN_BACKENDS_TO_INTERNAL.items():
            cell.source = cell.source.replace(internal, open)
            for output in cell.outputs:
                if 'text' in output:
                    output['text'] = output['text'].replace(internal, open)
                if text := output.get('data', {}).get('text/plain', None):
                    output['data']['text/plain'] = text.replace(internal, open)
    return nb

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


def get_text_output(cell) -> Iterable[str]:
    for output in cell.outputs:
        if output["output_type"] == "stream" and "text" in output:
            yield output["text"]
        if output["output_type"] == "execute_result":
            if text_output := output.get("data", {}).get("text/plain", None):
                yield text_output
