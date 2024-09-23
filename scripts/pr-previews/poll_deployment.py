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

import logging
import http.client
import time
from argparse import ArgumentParser
from urllib.parse import urlparse

from utils import configure_logging


logger = logging.getLogger(__name__)

INITIAL_DELAY_S = 20
TIMEOUT_S = 180
RETRY_INTERVAL_S = 10


def create_parser() -> ArgumentParser:
    parser = ArgumentParser()
    parser.add_argument("url", help="The URL to check")
    return parser


def main() -> None:
    url = create_parser().parse_args().url

    logger.info(f"Waiting {INITIAL_DELAY_S} seconds before initial ping to {url}")
    time.sleep(INITIAL_DELAY_S)

    end_time = time.time() + TIMEOUT_S - INITIAL_DELAY_S
    while time.time() < end_time:
        status = get_status(url)
        if status == 200:
            logger.info(f"Success: 200")
            return

        logger.warning(f"Response: {status}. Retrying in {RETRY_INTERVAL_S} seconds...")
        time.sleep(RETRY_INTERVAL_S)

    logger.error(f"Timeout: did not respond with 200 within {TIMEOUT_S} seconds")
    raise SystemExit(1)


def get_status(url: str) -> int:
    parsed_url = urlparse(url)
    conn = http.client.HTTPSConnection(parsed_url.netloc, timeout=5)
    try:
        conn.request("HEAD", parsed_url.path)
        return conn.getresponse().status
    except Exception as e:
        logger.error(f"Error checking server: {e}")
        return -1
    finally:
        conn.close()


if __name__ == "__main__":
    configure_logging()
    main()
